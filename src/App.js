import React, { useEffect, useState } from "react";
import "animate.css/animate.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLoader from "./components/PageLoader/PageLoader";
import WowWrapper from "./WowWrapper";
import Home from "./pages/home/Home";
import WavyDots from "./components/WavyDots/WavyDots";
import "./assets/css/App.css";
import Settings from "./components/Settings/Settings";
import MouseFollow from "./components/MouseFollow/MouseFollow";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import SwipeableWrapper from "./components/SwipableWrapper/SwipableWrapper";
import { palettes } from "./utils/Palette/Palette";
import NotFound from "./pages/404/NotFound";

// Initialize mainColor from localStorage or default to Blue
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
    // Initialize mainColor from localStorage or default to Blue
    const [mainColor, setMainColor] = useState(initialMainColor);
    const [lightColor, setLightColor] = useState(initialLightColor);

    const [cursorShown, setCursorShown] = useState(initialCursor);

    useEffect(() => {
        const palette = { mainColor: mainColor, lighterVariant: lightColor };
        // Store mainColor in localStorage
        localStorage.setItem("userPalette", JSON.stringify(palette));
    }, [mainColor, lightColor]);

    useEffect(() => {
        // Store mainColor in localStorage
        localStorage.setItem("cursorShown", JSON.stringify(cursorShown));
    }, [cursorShown]);

    return (
        <Router>
            <PageLoader>
                <MouseFollow
                    cursorShown={cursorShown}
                    mainColor={mainColor}
                    lightColor={lightColor}
                />
                <WavyDots color1={mainColor} color2={lightColor} />
                <WowWrapper>
                    <Navbar lightColor={lightColor} mainColor={mainColor}>
                        <Settings
                            mainColor={mainColor}
                            setLightColor={setLightColor}
                            setMainColor={setMainColor}
                            cursorShown={cursorShown}
                            setCursorShown={setCursorShown}
                        />
                        <SwipeableWrapper>
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
                                    path="/portfolio"
                                    element={
                                        <Portfolio
                                            mainColor={mainColor}
                                            lightColor={lightColor}
                                        />
                                    }
                                />
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
                        </SwipeableWrapper>
                    </Navbar>
                </WowWrapper>
            </PageLoader>
        </Router>
    );
}

export default App;
