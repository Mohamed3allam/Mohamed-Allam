// WavyDots.js
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Lights from "./Lights";
import { isMobile } from "../../utils/DeviceDetection/deviceDetection";

const createCircleTexture = () => {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");

  context.beginPath();
  context.arc(size / 2, size / 2, size / 3, 0, Math.PI * 2);
  context.closePath();
  context.fillStyle = "white";
  context.fill();

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  return texture;
};

const CameraControls = ({ targetPosition }) => {
  const { camera } = useThree();
  const currentPosition = useRef(new THREE.Vector3().copy(camera.position));

  useEffect(() => {
    currentPosition.current.copy(camera.position);
  }, [camera.position]);

  useFrame(() => {
    currentPosition.current.lerp(targetPosition, 0.05);
    camera.position.copy(currentPosition.current);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const Points = ({ color1, color2 }) => {
  const bufferRef = useRef();
  const uniformsRef = useRef({
    size: { value: 10 },
    pointTexture: { value: createCircleTexture() },
    color1: { value: new THREE.Color(color1) },
    color2: { value: new THREE.Color(color2) },
  });

  const targetColor1 = useRef(new THREE.Color(color1));
  const targetColor2 = useRef(new THREE.Color(color2));

  const tRef = useRef(0);
  const count = 200;
  const sep = 2;

  const graph = (x, z) => {
    return Math.sin(0.002 * (x ** 2 + z ** 2 + tRef.current)) * 1;
  };

  const positions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, [count, sep]);

  useEffect(() => {
    targetColor1.current.set(color1);
    targetColor2.current.set(color2);
  }, [color1, color2]);

  useFrame(() => {
    tRef.current += 15;
    const positions = bufferRef.current.array;
    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }
    bufferRef.current.needsUpdate = true;

    // Interpolate colors
    uniformsRef.current.color1.value.lerp(targetColor1.current, 0.05);
    uniformsRef.current.color2.value.lerp(targetColor2.current, 0.05);
  });

  const vertexShader = `
        uniform float size;
        varying vec3 vPosition;
        void main() {
            vPosition = position;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (${
              isMobile() ? "30" : "20"
            }.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

  const fragmentShader = `
        uniform sampler2D pointTexture;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vPosition;
        void main() {
            vec2 coord = gl_PointCoord - vec2(0.5);
            if (length(coord) > 0.5) discard;

            vec3 color = mix(color1, color2, (vPosition.y + 1.0) / 2.0);
            gl_FragColor = vec4(color, 1.0) * texture2D(pointTexture, gl_PointCoord);
        }
    `;

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        attach="material"
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniformsRef.current}
        transparent={true}
      />
    </points>
  );
};

const AnimationCanvas = ({ color1, color2, targetPosition }) => {
  return (
    <Canvas
      style={{ backgroundColor: "black" }}
      camera={{ position: [50, 6, 0], fov: isMobile() ? 120 : 80 }}
    >
      <Suspense fallback={null}>
        <Points color1={color1} color2={color2} />
      </Suspense>
      <Lights />
      <CameraControls targetPosition={targetPosition} />
    </Canvas>
  );
};

const WavyDots = ({ color1, color2 }) => {
  const location = useLocation();

  const getCameraPosition = (pathname) => {
    let basePos;
    switch (pathname) {
      case "/about":
        basePos = [30, 10, -30];
        break;
      case "/projects":
        basePos = [20, 15, -40];
        break;
      case "/contact":
        basePos = [10, 20, -50];
        break;
      default:
        basePos = [50, 6, 0];
    }

    if (isMobile()) {
      return basePos.map((val, i) => (i === 0 ? val * 1.4 : val * 1.5));
    }

    return basePos;
  };

  const [cameraPosition, setCameraPosition] = useState(
    new THREE.Vector3(...getCameraPosition(location.pathname))
  );

  useEffect(() => {
    setCameraPosition(
      new THREE.Vector3(...getCameraPosition(location.pathname))
    );
  }, [location.pathname]);

  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas
          color1={color1}
          color2={color2}
          targetPosition={cameraPosition}
        />
      </Suspense>
    </div>
  );
};

export default WavyDots;
