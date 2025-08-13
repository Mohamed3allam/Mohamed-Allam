import { useMemo } from "react";
import * as THREE from "three";

const Lights = () => {
    const lightPosition = useMemo(
        () => new THREE.Vector3(1, 1, 1).normalize(),
        []
    );

    return (
        <>
            {/* Ambient light for general illumination */}
            <ambientLight intensity={0.3} />

            {/* Directional light to mimic sunlight or a strong light source */}
            <directionalLight position={[5, 10, 7]} intensity={1} castShadow />

            {/* Point light for a localized light effect */}
            <pointLight position={[0, 5, 10]} intensity={0.5} />
        </>
    );
};

export default Lights;
