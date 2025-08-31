import React from "react";
import { Col, Container } from "react-bootstrap";
import { styled } from "styled-components";
import { projects } from "./projects";
import { Link } from "react-router-dom";
import ImageLightbox from "./ImageLightbox";
import images from "../../imgs";
import PortfolioSidebar from "../../components/PortfolioSidebar/PortfolioSidebar";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Contain = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    padding: 20px;
`;

const Wrapper = styled.div`
    overflow-y: auto;
    flex: 4;
    scroll-behavior: smooth;
`;
const WrapperHeader = styled.h3`
    font-size: clamp(1rem, 0.3333rem + 5.3333vw, 3rem);
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 3rem;
`;
const WrapperHeader2 = styled.h4`
    font-size: clamp(0.15rem, 0.3333rem + 3.3333vw, 1.7rem);
`;

const TechWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
`;
const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Portfolio = ({ mainColor, lightColor }) => {
    return (
        <section className="container wow animate__animated animate__fadeIn position-relative ">
            <Contain>
                <Wrapper>
                    {/* <PortfolioSidebar /> */}
                    {Object.values(projects).map((project, index) => (
                        <>
                            <WrapperHeader
                                id={project.name}
                                style={{ color: lightColor }}
                            >
                                <img src={project.icon} width={30} />{" "}
                                <span>{project.name}</span>
                            </WrapperHeader>
                            <TechWrapper>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    initialSlide={1}
                                    className="w-100 mb-5"
                                    navigation
                                    pagination={{
                                        clickable: true,
                                        type: "bullets",
                                        element: ".swiper-pagination",
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1.3,
                                            centeredSlides: true,
                                        },
                                        768: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                    }}
                                >
                                    <div className="swiper-pagination"></div>
                                    {project.projects.map((app, index) => (
                                        <SwiperSlide key={index}>
                                            <ProjectWrapper
                                                className=" d-flex flex-column justify-content-between h-100"
                                                id={app.slug}
                                            >
                                                <ImageLightbox
                                                    imageSrc={app.imageUrl}
                                                    imageAlt={app.name}
                                                />
                                                <WrapperHeader2>
                                                    {app.name}
                                                </WrapperHeader2>
                                                <p
                                                    style={{
                                                        width: "100%",
                                                        margin: 0,
                                                    }}
                                                >
                                                    {app.description}
                                                </p>
                                                <div className="d-flex align-items-center gap-3">
                                                    <Link
                                                        className="text-decoration-none text-white bg-dark px-3 py-1 rounded-2"
                                                        to={app.link}
                                                        target="_blank"
                                                    >
                                                        <LaunchIcon />{" "}
                                                        {app.github
                                                            ? "Live Demo"
                                                            : "Production Link"}
                                                    </Link>
                                                    {app.github && (
                                                        <Link
                                                            className="text-decoration-none text-white bg-dark px-3 py-1 rounded-2"
                                                            to={app.github}
                                                            target="_blank"
                                                        >
                                                            <GitHubIcon />{" "}
                                                            Github
                                                        </Link>
                                                    )}
                                                </div>
                                            </ProjectWrapper>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </TechWrapper>
                            <hr />
                        </>
                    ))}
                </Wrapper>
            </Contain>
        </section>
    );
};

export default Portfolio;
