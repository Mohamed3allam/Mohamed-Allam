import React from "react";
import images from "../../imgs";
import { Button } from "react-bootstrap";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
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
const DownloadCV = ({ mainColor, lightColor }) => {
    const pdfFile = images["MOHAMED ABDELRAHMAN.pdf"];

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = pdfFile;
        link.setAttribute("download", "MOHAMED ABDELRAHMAN.pdf");
        link.click();
    };

    return (
        <Link to="#Download">
            <MyButton
                mainColor={mainColor}
                lightColor={lightColor}
                onClick={handleDownload}
            >
                <span
                    style={{ color: "white", textShadow: "0px 0px 10px black" }}
                >
                    Download CV
                </span>
            </MyButton>
        </Link>
    );
};

export default DownloadCV;
