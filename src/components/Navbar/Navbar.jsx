import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import {
    isDesktop,
    isMobile,
    isTablet,
} from "../../utils/DeviceDetection/deviceDetection";

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${({ location, route, mainColor, lightColor }) =>
        location === route ? mainColor : lightColor};
    text-shadow: ${({ location, route, mainColor, lightColor }) =>
        location === route ? `0px 0px 20px ${lightColor}` : "unset"};
    font-size: 1.1rem;

    &:hover {
        color: ${({ mainColor }) => mainColor};
    }
`;
function NavScrollExample({ children, mainColor, lightColor }) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Navbar
                style={{
                    overflowY: "auto",
                    height: "min-content",
                    backdropFilter: "blur(20px)",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
                fixed={isMobile() ? "top" : "top"}
                expand="lg"
                className="bg-body-tertiary"
            >
                <Container
                    fluid
                    style={{ minHeight: "80px", overflow: "hidden" }}
                >
                    <Nav
                        className="my-2 my-lg-0 gap-4 flex-row w-100 justify-content-center"
                        navbarScroll
                    >
                        {routes.map((route, index) => (
                            <NavLink
                                mainColor={mainColor}
                                lightColor={lightColor}
                                to={route.slug}
                                key={index}
                                location={location.pathname}
                                route={route.slug}
                            >
                                {route.name}
                            </NavLink>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
            <main
                style={{
                    paddingTop: "100px",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                {children}
            </main>
        </>
    );
}

export default NavScrollExample;
