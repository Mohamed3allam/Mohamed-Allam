import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const MyButton = styled(Button)`
    background-color: ${({ lightColor }) => lightColor};
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 12px 30px;
    transition: 0.5s all ease-in-out;

    &:hover {
        background-color: ${({ mainColor }) => mainColor};
    }
`;
const ButtonComponent = ({ mainColor, lightColor, text, to }) => {
    return (
        <Link to={to}>
            <MyButton
                className="wow animate__animated animate__fadeIn animate__delay-3s"
                mainColor={mainColor}
                lightColor={lightColor}
            >
                <span style={{color:'white',textShadow:'0px 0px 10px black'}}>{text}</span>
            </MyButton>
        </Link>
    );
};

export default ButtonComponent;
