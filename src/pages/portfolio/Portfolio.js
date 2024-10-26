import React from "react";
import { Col, Container } from "react-bootstrap";
import { styled } from "styled-components";
import { projects } from "./projects";
import { Link } from "react-router-dom";
import ImageLightbox from "./ImageLightbox";
import images from "../../imgs";
import PortfolioSidebar from "../../components/PortfolioSidebar/PortfolioSidebar";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';


const Contain = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    padding: 20px;
`

const Wrapper = styled.div`
    overflow-y: scroll;
    flex: 4;
    scroll-behavior: smooth;
`
const WrapperHeader = styled.h3`
    font-size: clamp(1rem, 0.3333rem + 5.3333vw, 3rem);
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 3rem;

`
const WrapperHeader2 = styled.h4`
    font-size: clamp(0.15rem, 0.3333rem + 3.3333vw, 1.7rem);
`

const TechWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
`
const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Portfolio = ({ mainColor, lightColor }) => {
    return (
        <section className="container wow animate__animated animate__fadeIn position-relative">
            <Contain>
                <Wrapper>
                    {/* <PortfolioSidebar /> */}
                    {Object.values(projects).map((project, index) => (
                        <div>
                            <WrapperHeader id={project.name} style={{ color: lightColor }}>
                                <img src={project.icon} width={30} /> <span>{project.name}</span>
                            </WrapperHeader>
                            <TechWrapper>
                                {project.projects.map((app, index) => (
                                    <ProjectWrapper className="col d-flex flex-column justify-content-between" key={index} id={app.slug}>
                                        <ImageLightbox imageSrc={app.imageUrl} imageAlt={app.name} />
                                        <WrapperHeader2 >
                                            {app.name}
                                        </WrapperHeader2>
                                        {/* <StyledLink style={{ color: lightColor }} target="_blank" to={app.link}>Follow the Link</StyledLink> */}
                                        <p style={{ width: '100%', margin:0}}>{app.description}</p>
                                        <div className="d-flex gap-2">
                                            <Link to={app.link} target="_blank"><LaunchIcon /></Link>
                                            {
                                                app.github && (
                                                    <Link to={app.github} target="_blank"><GitHubIcon /></Link>
                                                )
                                            }
                                        </div>
                                    </ProjectWrapper>
                                ))}
                            </TechWrapper>
                            <hr />
                        </div>
                    ))}
                </Wrapper>
            </Contain>
        </section>
    );
};

export default Portfolio;
