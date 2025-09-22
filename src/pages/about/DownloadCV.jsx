import React from "react";
import images from "../../imgs";
import { Dropdown } from "react-bootstrap";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const MyDropdown = styled(Dropdown)`
  .dropdown-toggle {
    background-color: ${({ lightColor }) => lightColor};
    border: none;
    border-radius: 10px;
    padding: 12px 30px;
    transition: 0.5s all ease-in-out;
    color: white;
    text-shadow: 0px 0px 10px black;
  }

  .dropdown-toggle:hover,
  .dropdown-toggle:focus {
    background-color: ${({ mainColor }) => mainColor};
    box-shadow: none;
  }

  .dropdown-menu {
    border-radius: 15px;
    overflow: hidden;
  }
`;

const DownloadCV = ({ mainColor, lightColor }) => {
  const cvFiles = {
    frontend: images["cvs/Mohamed_Abdelrahman_MidLevel_Frontend_CV.pdf"],
    backend: images["cvs/Mohamed_Abdelrahman_Backend_CV.pdf"],
    fullstack: images["cvs/Mohamed_Abdelrahman_FullStack_CV.pdf"],
  };

  const handleDownload = (file, name) => {
    const link = document.createElement("a");
    link.href = file;
    link.setAttribute("download", name);
    link.click();
  };

  return (
    <div>
      <MyDropdown  mainColor={mainColor} lightColor={lightColor}>
        <Dropdown.Toggle id="dropdown-cv">Download CV</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => handleDownload(cvFiles.frontend, "Frontend_CV.pdf")}
          >
            Frontend CV
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleDownload(cvFiles.backend, "Backend_CV.pdf")}
          >
            Backend CV
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              handleDownload(cvFiles.fullstack, "Full-Stack_CV.pdf")
            }
          >
            Full-Stack CV
          </Dropdown.Item>
        </Dropdown.Menu>
      </MyDropdown>
    </div>
  );
};

export default DownloadCV;
