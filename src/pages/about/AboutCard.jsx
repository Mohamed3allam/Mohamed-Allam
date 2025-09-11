import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import images from "../../imgs";

const CardContainer = styled.div`
  width: 100%;
  min-height: 500px;
  border-radius: 30px;
  /* box-shadow: 0px 0px 20px 0px grey; */
  background-color: #060606;
  overflow: hidden;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  padding: 20px 10px;
`;
const Name = styled.h1`
    font-size: clamp(2rem, 3.3333rem + 4vw, 6rem); 
    line-height: 1;
`;
const JobTitle = styled.h1`
    font-size: 2rem;
    line-height: 1;
    color: #ccc;
    opacity: 0.7;
`;
const Desc = styled.p`
    font-size: 2.5rem;
    line-height: 1;
    color: #606060;
    opacity: 0.7;
`;

const SocialLinks = styled.div`
    
`;
const AboutCard = () => {
  return (
    <CardContainer>
      <Row>
        <Col lg={4}>
          <ImgContainer>
            <img
              src={images["mee.png"]}
              alt="Mohamed Abdelrahman"
              style={{
                width: "100%",
                height: "100%",
                filter: "brightness(0.8)",
                objectFit: "contain",
              }}
            />
          </ImgContainer>
        </Col>
        <Col lg={8}>
          <Info>
            <Name>Mohamed Abdelrahman</Name>
            <JobTitle>Full-Stack Developer</JobTitle>
            <Desc>
              I'm a full-stack developer with a strong focus on front-end
              development. I specialize in creating visually appealing and
              user-friendly interfaces that deliver exceptional user
              experiences.
            </Desc>
          </Info>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default AboutCard;
