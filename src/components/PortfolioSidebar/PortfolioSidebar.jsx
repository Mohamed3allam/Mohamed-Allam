import React, { useState } from "react";
import { styled } from "styled-components";
import { projects } from "../../pages/portfolio/projects";

const Sidebar = styled.aside`
    position: fixed;
    right: -4px;
    top: 35%;
    flex: 1;
    padding: 20px;
    border: solid 0.1px wheat;
    border-radius: 30px 0px 0px 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: black;
    z-index: 9999;
`;
const SidebarContent = styled.div`
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Icon = styled.img`
    &:hover {
        filter: drop-shadow(0px 0px 10px white);
    }
`
const PortfolioSidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Sidebar>
            <SidebarContent>
                {Object.values(projects).map((project, index) => (
                    <a href={`#${project.name}`} key={index}>
                        <Icon src={project.icon} width={30} />
                    </a>
                ))}
            </SidebarContent>
        </Sidebar>
    );
};

export default PortfolioSidebar;
