import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Offcanvas, Button } from "react-bootstrap";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
    projectTypes,
    programmingLanguages,
    technologies,
    deploymentPlatforms,
} from "./techs";
import { projects } from "./projects";
import ImageLightbox from "./ImageLightbox";
import {
    PageWrapper,
    ProjectCard,
    TechIcon,
    Sidebar,
    ButtonsContainer,
    ProjectData,
    TechStackContainer,
    TechIcons,
} from "./styles/ProjectsPage.styles";

const ProjectsPage = () => {
    const getFiltersFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        return {
            type: params.getAll("type").map(Number),
            lang: params.getAll("lang").map(Number),
            tech: params.getAll("tech").map(Number),
            deploy: params.getAll("deploy").map(Number),
        };
    };

    const [filters, setFilters] = useState(getFiltersFromUrl);
    const [filteredProjects, setFilteredProjects] = useState(projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, values]) => {
            values.forEach((v) => params.append(key, v));
        });
        window.history.replaceState({}, "", `?${params.toString()}`);
    }, [filters]);

    useEffect(() => {
        let result = projects;

        if (filters.type.length) {
            result = result.filter((p) =>
                p.projectType?.some((id) => filters.type.includes(id))
            );
        }
        if (filters.lang.length) {
            result = result.filter((p) =>
                p.programmingLanguages?.some((id) => filters.lang.includes(id))
            );
        }
        if (filters.tech.length) {
            result = result.filter((p) =>
                p.technologies?.some((id) => filters.tech.includes(id))
            );
        }
        if (filters.deploy.length) {
            result = result.filter((p) =>
                p.deploymentPlatforms?.some((id) => filters.deploy.includes(id))
            );
        }

        setFilteredProjects(result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }, [filters]);

    // Toggle helper
    const toggleFilter = (key, value) => {
        setFilters((prev) => {
            const values = prev[key] || [];
            if (values.includes(value)) {
                return { ...prev, [key]: values.filter((v) => v !== value) };
            } else {
                return { ...prev, [key]: [...values, value] };
            }
        });
    };

    const resetFilters = () => {
        setFilters({ type: [], lang: [], tech: [], deploy: [] });
    };

    // Sidebar UI
    const SidebarFilters = (
        <Sidebar>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="m-0">Filters</h3>
                <button className="btn btn-danger btn-sm mt-3" onClick={resetFilters}>
                    Reset Filters
                </button>
            </div>

            <h4>Filter by Type</h4>
            <div className="mb-3">
                {projectTypes.map((t) => (
                    <button
                        key={t.id}
                        className={`btn btn-sm me-2 mb-2 ${filters.type.includes(t.id) ? "btn-dark" : "btn-outline-dark"
                            }`}
                        onClick={() => toggleFilter("type", t.id)}
                    >
                        {t.icon && <TechIcon src={t.icon} alt={t.name} />}
                        {t.name}
                    </button>
                ))}
            </div>

            <h4>Filter by Language</h4>
            <div className="mb-3">
                {programmingLanguages.map((lang) => (
                    <button
                        key={lang.id}
                        className={`btn btn-sm me-2 mb-2 ${filters.lang.includes(lang.id) ? "btn-dark" : "btn-outline-dark"
                            }`}
                        onClick={() => toggleFilter("lang", lang.id)}
                    >
                        <img
                            src={lang.icon}
                            alt={lang.name}
                            style={{ width: 18, marginRight: 6 }}
                        />
                        {lang.name}
                    </button>
                ))}
            </div>

            <h4>Filter by Technology</h4>
            <div className="mb-3">
                {technologies.map((tech) => (
                    <button
                        key={tech.id}
                        className={`btn btn-sm me-2 mb-2 ${filters.tech.includes(tech.id) ? "btn-dark" : "btn-outline-dark"
                            }`}
                        onClick={() => toggleFilter("tech", tech.id)}
                    >
                        <TechIcon src={tech.icon} alt={tech.name} style={{ marginRight: 6 }} />
                        <span>{tech.name}</span>
                    </button>
                ))}
            </div>

            <h4>Filter by Deployment</h4>
            <div className="mb-3">
                {deploymentPlatforms.map((dp) => (
                    <button
                        key={dp.id}
                        className={`btn btn-sm me-2 mb-2 ${filters.deploy.includes(dp.id) ? "btn-dark" : "btn-outline-dark"
                            }`}
                        onClick={() => toggleFilter("deploy", dp.id)}
                    >
                        <img
                            src={dp.icon}
                            alt={dp.name}
                            style={{ width: 18, marginRight: 6 }}
                        />
                        {dp.name}
                    </button>
                ))}
            </div>
        </Sidebar>
    );

    return (
        <PageWrapper className="wow animate__animated animate__fadeIn">
            <Container className="position-relative">
                <Row>
                    {/* Desktop Sidebar */}
                    <Col lg={3} className="d-none d-lg-block">
                        {SidebarFilters}
                    </Col>

                    {/* Mobile/Tablet Filter Button */}
                    <Col xs={12} className="d-lg-none mb-3">
                        <Button variant="dark" onClick={() => setShowFilters(true)}>
                            Open Filters
                        </Button>
                    </Col>

                    {/* Offcanvas for mobile/tablet */}
                    <Offcanvas
                        show={showFilters}
                        onHide={() => setShowFilters(false)}
                        backdropClassName="blurred-backdrop bg-transparent"
                        style={{
                            backdropFilter: "blur(10px)",
                            backgroundColor: "rgba(0, 0, 0, 0.0)",
                        }}
                    >
                        <Offcanvas.Header style={{
                            backgroundColor: "rgba(255, 255, 255, 0.3)"
                        }} closeButton>
                            <Offcanvas.Title>Filters</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>{SidebarFilters}</Offcanvas.Body>
                    </Offcanvas>

                    {/* Projects grid */}
                    <Col lg={9}>
                        <Row className="gy-4">
                            {filteredProjects.map((project) => (
                                <Col lg={6} md={6} key={project.id}>
                                    <ProjectCard>
                                        <ProjectData>
                                            <ImageLightbox
                                                imageSrc={project.imageUrl}
                                                imageAlt={project.name}
                                            />
                                            <h4>{project.name}</h4>
                                            <small style={{ color: "#888" }}>
                                                {new Date(project.createdAt).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                })}
                                            </small>
                                            <p>{project.description}</p>
                                            {/* Show all icons */}
                                            {
                                                project.programmingLanguages?.length > 0 && (
                                                    <TechStackContainer>
                                                        <h6>Programming Languages</h6>
                                                        <TechIcons>
                                                            {project.programmingLanguages?.map((id) => {
                                                                const lang = programmingLanguages.find((l) => l.id === id);
                                                                return (
                                                                    <div key={id} className="d-flex align-items-center me-2 border border-1 rounded-3 px-2 py-1">
                                                                        <TechIcon src={lang.icon} alt={lang.name} />
                                                                        <small className="ms-1">{lang.name}</small>
                                                                    </div>
                                                                );
                                                            })}
                                                        </TechIcons>
                                                    </TechStackContainer>
                                                )
                                            }
                                            <TechStackContainer>
                                                <h6>Technologies</h6>
                                                <TechIcons>
                                                    {project.technologies?.map((id) => {
                                                        const tech = technologies.find((t) => t.id === id);
                                                        return (
                                                            <div key={id} className="d-flex align-items-center me-2  border border-1 rounded-3 px-2 py-1">
                                                                <TechIcon src={tech.icon} alt={tech.name} />
                                                                <small className="ms-1">{tech.name}</small>
                                                            </div>
                                                        );
                                                    })}
                                                </TechIcons>
                                            </TechStackContainer>
                                            {
                                                project.deploymentPlatforms?.length > 0 && (
                                                    <TechStackContainer>
                                                        <h6>Deployment Platforms</h6>
                                                        <TechIcons>
                                                            {project.deploymentPlatforms?.map((id) => {
                                                                const dp = deploymentPlatforms.find((d) => d.id === id);
                                                                return (
                                                                    <div key={id} className="d-flex align-items-center me-2 border border-1 rounded-3 px-2 py-1">
                                                                        <TechIcon src={dp?.icon?.src || dp.icon} alt={dp.name} />
                                                                        <small className="ms-1">{dp.name}</small>
                                                                    </div>
                                                                );
                                                            })}

                                                        </TechIcons>
                                                    </TechStackContainer>
                                                )
                                            }
                                            {/* <TechStackContainer>
                                                <h6>Project Type</h6>
                                                <TechIcons>
                                                    {project.projectType?.map((id) => {
                                                        const pt = projectTypes.find((p) => p.id === id);
                                                        return (
                                                            <div key={id} className="d-flex align-items-center me-2">
                                                                {pt.icon && <TechIcon src={pt.icon} alt={pt.name} />}
                                                                <small className="ms-1">{pt.name}</small>
                                                            </div>
                                                        );
                                                    })}
                                                </TechIcons>
                                            </TechStackContainer> */}
                                        </ProjectData>

                                        <ButtonsContainer>
                                            <Link
                                                className="btn btn-dark"
                                                to={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <LaunchIcon fontSize="small" /> Production
                                            </Link>
                                            {project.github && (
                                                <Link
                                                    className="btn btn-secondary"
                                                    to={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <GitHubIcon fontSize="small" /> GitHub
                                                </Link>
                                            )}
                                        </ButtonsContainer>
                                    </ProjectCard>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </PageWrapper>
    );
};

export default ProjectsPage;
