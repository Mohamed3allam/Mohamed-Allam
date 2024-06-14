import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CursorCircle = styled.div`
    position: fixed;
    width: 30px;
    height: 30px;
    border: solid 2px ${({ mainColor }) => mainColor};
    opacity: ${({isPointer}) => isPointer ? 0 : 1};
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 1040;
    transition: transform 1s ease, opacity 0.5s ease; /* Add a transition for smoother movement */
`;

const SmallCircle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) ${({isPointer}) => isPointer && `scale(7.1)`};
    width: 10px;
    height: 10px;
    background-color: ${({ lightColor }) => lightColor};
    opacity: 0.5;
    border-radius: 50%;
    pointer-events: none;
    z-index: 2000;
    transition: transform 0.5s ease; /* Add a transition for smoother movement */
`;

const MouseFollow = ({ cursorShown, mainColor, lightColor }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const { x: mouseX, y: mouseY } = mousePosition;

    const handleMouseOver = (event) => {
        if (window.getComputedStyle(event.target).cursor === "pointer") {
            setIsPointer(true);
        }
    };

    const handleMouseOut = (event) => {
        if (window.getComputedStyle(event.target).cursor === "pointer") {
            setIsPointer(false);
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <div style={{opacity: cursorShown === 'show' ? 1: 0}}>
            <CursorCircle
                mainColor={mainColor}
                isPointer={isPointer}
                style={{ left: mouseX, top: mouseY }}
            />
            <SmallCircle
                lightColor={lightColor}
                isPointer={isPointer}
                style={{ left: mouseX, top: mouseY }} // Example offset to show different movement
            />
        </div>
    );
};

export default MouseFollow;
