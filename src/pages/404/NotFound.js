import React from "react";
import { Container } from "react-bootstrap";
import ButtonComponent from "../../components/Button/Button";
import { styled } from "styled-components";

const H404 = styled.h2`
    font-size: clamp(2rem, 0.6667rem + 6.6667vw, 6rem);
`
const NotFound = ({ lightColor, mainColor }) => {
    return (
        <>
            <Container
                style={{ height: "70vh" }}
                className="w-100 d-flex flex-column justify-content-center align-items-center wow animate__animated animate__fadeIn"
            >
                <H404>404</H404>
                <h2>Looking for a Web Developer ?</h2>
                <h3>it's not here</h3>
                <ButtonComponent
                    text={"It's here"}
                    to="/about"
                    lightColor={lightColor}
                    mainColor={mainColor}
                />
            </Container>
        </>
    );
};

export default NotFound;
