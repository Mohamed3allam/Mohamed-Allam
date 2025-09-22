import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";

const fadeInStayOut = keyframes`
  0% { opacity: 0; }
  40% { opacity: 1; }
  60% { opacity: 1; }
  100% { opacity: 0; }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 9999;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.h1`
  color: #fff;
  font-size: clamp(1.5rem, 0.3333rem + 3.3333vw, 3rem);
  text-align: center;
  animation: ${fadeInStayOut} 3s forwards;
`;

const PageLoader = ({ children }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => setStep(1), 3000));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {step < 1 && (
        <Container>
          {step === 0 && <Message>Welcome to My Portfolio</Message>}
        </Container>
      )}
      <div
        style={{
          opacity: step === 1 ? 1 : 0,
          transition: "opacity 1s ease",
          pointerEvents: step === 1 ? "auto" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PageLoader;
