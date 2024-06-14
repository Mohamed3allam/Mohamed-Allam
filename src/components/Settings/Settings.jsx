import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowPointer,
    faCircleDot,
    faCog,
} from "@fortawesome/free-solid-svg-icons";
import { palettes } from "../../utils/Palette/Palette";

// Define the keyframes for the rotation animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  };
  to {
    transform: rotate(-360deg);
  };
`;
const SettingsContainer = styled.div`
    position: fixed;
    top: 30%;
    transform: translate(0, -70%);
    right: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
    width: 250px;
    background-color: #22262b;
    transition: right 0.5s ease-in-out;
    z-index: 1031;
    border-radius: 0 0 0 5px;
`;

const SettingsHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: #22262b;
    color: white;
    padding: 0 20px;
    position: absolute;
    left: -61px;
    top: 0;
    border-radius: 10px 0px 0 10px;
    cursor: pointer;
`;
const SettingsIcon = styled(FontAwesomeIcon)`
    animation: ${rotate} 2s linear infinite; /* Apply the animation */
`;

const SettingsContent = styled.div`
    padding: 20px;
`;

const ColorOption = styled.div`
    border: ${({ chosenColor, color }) =>
        color === chosenColor ? "solid white 1px" : "none"};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
    background-color: ${({ color }) => color};
`;

const SettingsTitle = styled.h4`
    position: relative;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bolder;
    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.2);
        left: 0px;
        bottom: 0px;
    }
`;

const Settings = ({
    mainColor,
    setMainColor,
    setLightColor,
    cursorShown,
    setCursorShown,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSettings = () => {
        setIsOpen(!isOpen);
    };

    const controlColors = (color) => {
        setMainColor(color.mainColor);
        setLightColor(color.lighterVariant);
    };

    return (
        <>
            <SettingsContainer isOpen={isOpen}>
                <SettingsHeader onClick={toggleSettings}>
                    <SettingsIcon icon={faCog} size="lg" />
                </SettingsHeader>
                <SettingsContent>
                    <SettingsTitle>Color</SettingsTitle>
                    <div className="d-flex flex-wrap gap-1">
                        {Object.values(palettes).map((color, index) => (
                            <ColorOption
                                key={index}
                                onClick={() => controlColors(color)}
                                color={color.mainColor}
                                chosenColor={mainColor}
                            />
                        ))}
                    </div>
                    <SettingsTitle>Cursor Circle</SettingsTitle>
                    <div className="d-flex">
                        <div onClick={() => setCursorShown('show')}>
                            <FontAwesomeIcon
                                style={{ cursor: "pointer" }}
                                
                                width={30}
                                icon={faCircleDot}
                            />
                        </div>
                        <div onClick={() => setCursorShown('hide')}>
                            <FontAwesomeIcon
                                style={{ cursor: "pointer" }}
                                
                                width={30}
                                icon={faArrowPointer}
                            />
                        </div>
                    </div>
                </SettingsContent>
            </SettingsContainer>
        </>
    );
};

export default Settings;
