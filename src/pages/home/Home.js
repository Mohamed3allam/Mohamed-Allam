import React from 'react';
import styled from 'styled-components';
import ButtonComponent from "../../components/Button/Button";

const Mohamed = styled.span`
    display: inline-block;
    position: relative;

    &::after {
        content: 'A.';
    }
`;

const NameDiv = styled.div`
`;

const Name = styled.h1`
    font-size: clamp(2rem, 0.3333rem + 3.3333vw, 4rem);
    font-weight: bold;
    pointer-events: none;
    user-select: none;
`;

const TitleDiv = styled.div`
    height: fit-content;
    overflow: hidden;
`;

const Title = styled.h1`
    font-size: clamp(1rem, 0.3333rem + 3.3333vw, 2rem);
    pointer-events: none;
    user-select: none;
`;

const ButtonDiv = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

const Home = ({ mainColor, lightColor }) => {
    return (
        <div
            style={{ height: '70vh' }}
            className="d-flex flex-column justify-content-center align-items-center text-center gap-2"
        >
            <NameDiv>
                <Name className="wow animate__animated animate__fadeIn">
                    <Mohamed>MOHAMED </Mohamed> ALLAM
                </Name>
            </NameDiv>
            <TitleDiv>
                <Title className="wow animate__animated animate__fadeInDown animate__delay-1s">
                    Web{' '}
                    <span
                        className="wow animate__animated animate__fadeInRight animate__delay-2s"
                        style={{ color: lightColor }}
                    >
                        Developer
                    </span>
                </Title>
            </TitleDiv>
            <ButtonDiv>
                <ButtonComponent
                    mainColor={mainColor}
                    lightColor={lightColor}
                    to="/contact"
                    text="Get In Touch"
                />
                <ButtonComponent
                    mainColor={mainColor}
                    lightColor={lightColor}
                    to="/portfolio"
                    text="Portfolio"
                />
            </ButtonDiv>
        </div>
    );
};

export default Home;
