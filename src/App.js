import React, { useEffect, useState } from "react";
import "animate.css/animate.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import PageLoader from "./components/PageLoader/PageLoader";
import WowWrapper from "./WowWrapper";
import Home from "./pages/home/Home";
import WavyDots from "./components/WavyDots/WavyDots";
import "./assets/css/App.css";
import MouseFollow from "./components/MouseFollow/MouseFollow";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import { palettes } from "./utils/Palette/Palette";
import NotFound from "./pages/404/NotFound";
import Settings2 from "./components/Settings/Settings2";

const getInitialPalette = () => {
    const storedPalette = localStorage.getItem("userPalette");
    if (storedPalette) {
        try {
            return JSON.parse(storedPalette);
        } catch (e) {
            console.error("Error parsing stored palette:", e);
            return palettes.Blue;
        }
    }
    return palettes.Blue;
};
const getInitialCursor = () => {
    const cursorShown = localStorage.getItem("cursorShown");
    if (cursorShown) {
        try {
            return JSON.parse(cursorShown);
        } catch (e) {
            console.error("Error cursor:", e);
            return "show";
        }
    }
    return "show";
};

const initialPalette = getInitialPalette();
const initialMainColor = initialPalette.mainColor;
const initialLightColor = initialPalette.lighterVariant;

const initialCursor = getInitialCursor();

function App() {
    const [mainColor, setMainColor] = useState(initialMainColor);
    const [lightColor, setLightColor] = useState(initialLightColor);

    const [cursorShown, setCursorShown] = useState(initialCursor);

    useEffect(() => {
        const palette = { mainColor: mainColor, lighterVariant: lightColor };
        localStorage.setItem("userPalette", JSON.stringify(palette));
    }, [mainColor, lightColor]);

    useEffect(() => {
        localStorage.setItem("cursorShown", JSON.stringify(cursorShown));
    }, [cursorShown]);

    return (
        <PageLoader>
            <MouseFollow
                cursorShown={cursorShown}
                mainColor={mainColor}
                lightColor={lightColor}
            />
            <WavyDots color1={mainColor} color2={lightColor} />
            <WowWrapper>
                <Navbar lightColor={lightColor} mainColor={mainColor}>
                    <Settings2
                        mainColor={mainColor}
                        setLightColor={setLightColor}
                        setMainColor={setMainColor}
                        cursorShown={cursorShown}
                        setCursorShown={setCursorShown}
                    />
                    <Routes>
                        <Route
                            index
                            element={
                                <Home
                                    mainColor={mainColor}
                                    lightColor={lightColor}
                                />
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <About
                                    mainColor={mainColor}
                                    lightColor={lightColor}
                                />
                            }
                        />
                        <Route
                            path="/projects"
                            element={
                                <Portfolio
                                    mainColor={mainColor}
                                    lightColor={lightColor}
                                />
                            }
                        />
                        {/* <Route
                                path="/projects/:id"
                                element={
                                    <SingleProject
                                    />
                                }
                            /> */}
                        <Route
                            path="/contact"
                            element={
                                <Contact
                                    mainColor={mainColor}
                                    lightColor={lightColor}
                                />
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <NotFound
                                    mainColor={mainColor}
                                    lightColor={lightColor}
                                />
                            }
                        />
                    </Routes>
                </Navbar>
            </WowWrapper>
        </PageLoader>
    );
}

export default App;
