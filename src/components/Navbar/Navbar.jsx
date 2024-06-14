import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${({ location, route, mainColor, lightColor }) => location === route ? mainColor : lightColor};
    text-shadow: ${({ location, route, mainColor, lightColor }) => location === route ? `0px 0px 20px ${lightColor}` : "unset"};
    font-size: 1.1rem;

    &:hover {
        color:  ${({ mainColor }) => mainColor}
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
                variant="dark"
                style={{backgroundColor:'black', overflowY:'hidden', height:'min-content'}}
                fixed="top"
                expand="lg"
                className="bg-body-tertiary"
            >
                <Container fluid style={{ minHeight: "100px", overflow:'hidden' }}>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    {/* <Navbar.Collapse id="navbarScroll"> */}
                        <Nav
                            className="my-2 my-lg-0 gap-5 flex-row w-100 justify-content-center"
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
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
            <main style={{ paddingTop: "120px", width:'100%', overflow:'hidden' }}>{children}</main>
        </>
    );
}

export default NavScrollExample;
