import React, {useState} from "react";
import {styled} from "styled-components";
import {BsCursorFill} from "react-icons/bs";
import {palettes} from "../../utils/Palette/Palette";
import {Col, Row} from "react-bootstrap";
import {faArrowPointer, faCircleDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {isMobile} from "../../utils/DeviceDetection/deviceDetection";

const SettingsContainer = styled.div`
    direction: rtl;
    position: fixed;
    top: ${isMobile() ? "30%" : "40%"};
    right: 10px;
    z-index: 9999;
    direction: rtl;
`;
const SettingsWrapper = styled.div`
    background-color: #22262b;
    border-radius: 10px;
    padding: ${isMobile() ? "15px 5px" : "20px 10px"};
    display: flex;
    flex-direction: column;
    border: 1px solid #3d3d3d;
`;

const SettingsButton = styled.button`
    background: none;
    border: none;
    outline: none;
    position: relative;
`;
const ColorBtn = styled.div`
    
    height: ${isMobile() ? "15px" : "20px"};
    width: ${isMobile() ? "15px" : "20px"};
    border-radius: 50%;
    background-color: none;
    background: conic-gradient(
        red,
        orange,
        yellow,
        green,
        cyan,
        blue,
        violet,
        red
    );
`;
const CursorBtn = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: none;
`;

const CursorIcon = styled(BsCursorFill)`
    width: ${isMobile() ? "15px" : "20px"};
    height: ${isMobile() ? "15px" : "20px"};
`;

const ColorsContainer = styled.div`
    transition: all ease-in-out 0.2s;
    position: absolute;
    top: 50%;
    right: 60px; /* Adjusted for better alignment */
    transform: translateY(-50%);
    background-color: #22262b;
    border-radius: 10px;
    z-index: 9999; /* Brought it to front */
    padding: 5px;
    opacity: ${({show}) => (show ? 1 : 0)};
    visibility: ${({show}) => (show ? "visible" : "hidden")};
    display: flex;
    /* display: flex; */
    flex-direction: row;
    flex-wrap: wrap;
    width: 200px; /* Dynamic width */
    max-width: fit-content;
    cursor: default;
`;

const ColorOption = styled.div`
    border: ${({chosenColor, color}) =>
        color === chosenColor ? "solid white 1px" : "none"};
    width: 25px;
    height: 25px;
    border-radius: 10px;
    margin: 5px;
    cursor: pointer;
    background-color: ${({color}) => color};
`;

const Settings2 = ({
    mainColor,
    setMainColor,
    setLightColor,
    cursorShown,
    setCursorShown,
}) => {
    const [showColorPalette, setShowColorPalette] = useState(false);
    const [showCursor, setShowCursor] = useState(false);

    const controlColors = (color) => {
        setMainColor(color.mainColor);
        setLightColor(color.lighterVariant);
    };

    const handleColorShow = () => {
        setShowColorPalette(!showColorPalette);
    };
    const handleCursorShow = () => {
        setShowCursor(!showCursor);
    };
    return (
        <SettingsContainer className="wow animate__animated animate__fadeInRight animate__delay-3s">
            <SettingsWrapper>
                <SettingsButton onClick={handleColorShow}>
                    <ColorBtn />
                    <ColorsContainer show={showColorPalette} width="400px">
                        {Object.values(palettes).map((color, index) => (
                            <ColorOption
                                key={index}
                                onClick={() => controlColors(color)}
                                color={color.mainColor}
                                chosenColor={mainColor}
                            />
                        ))}
                    </ColorsContainer>
                </SettingsButton>
                <hr />
                <SettingsButton onClick={handleCursorShow}>
                    <ColorsContainer show={showCursor}>
                        <div onClick={() => setCursorShown("show")}>
                            <FontAwesomeIcon
                                style={{cursor: "pointer"}}
                                width={30}
                                icon={faCircleDot}
                            />
                        </div>
                        <div onClick={() => setCursorShown("hide")}>
                            <FontAwesomeIcon
                                style={{cursor: "pointer"}}
                                width={30}
                                icon={faArrowPointer}
                            />
                        </div>
                    </ColorsContainer>
                    <CursorBtn>
                        <CursorIcon />
                    </CursorBtn>
                </SettingsButton>
            </SettingsWrapper>
        </SettingsContainer>
    );
};

export default Settings2;
