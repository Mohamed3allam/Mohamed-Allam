import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import images from "../../imgs";
import { Riple } from "react-loading-indicators";

// Define the keyframes for the rotation animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 999999;
    background-color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s ease;
    opacity: ${({ pageLoaded }) => (pageLoaded ? 0 : 1)};
    pointer-events: ${({ pageLoaded }) => (pageLoaded ? "none" : "auto")};
`;

const LogoImage = styled.img`
    animation: ${rotate} 2s linear infinite; /* Apply the animation */
    filter: drop-shadow(0px 0px 1rem var(--secondary-color));
`;

const PageLoader = ({ children, mainColor }) => {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
          setTimeout(()=> {
            setPageLoaded(true)
          }, 1000)
        };

        // Use window event listener for 'load' event
        window.addEventListener("load", handleLoad());

    }, []);

    return (
        <>
            <Container pageLoaded={pageLoaded}>
              <Riple color={mainColor} size="medium" text="" textColor="" />
            </Container>
            <div style={{ display: pageLoaded ? "block" : "none" }}>
                {children}
            </div>
        </>
    );
};

export default PageLoader;
