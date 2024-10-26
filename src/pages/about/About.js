import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { keyframes, styled } from 'styled-components'
import images from '../../imgs'
import Pie from './Progress'
import { tech } from './techs'
import { FacebookOutlined, GitHub, LinkedIn, X } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/Button/Button'
import DownloadCV from './DownloadCV'


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotateReverse = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;
const Wrapper = styled.div`

`

const AboutDiv = styled.div``
const AboutTitle = styled.h2`
    font-size: clamp(1.5rem, 0.3333rem + 3.3333vw, 2.5rem);
`
const AboutDesc = styled.p``

const ProgressWrapper = styled.div`
`

const BigCircle = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border: 3px solid #bbbbbb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 20s linear infinite;
`;

const IconBlock = styled.div`
  width: 64px;
  height: 64px;
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 10px #fff;
  svg {
    width: 60%;
    height: 60%;
    animation: ${rotateReverse} 20s linear infinite;
  }

  &:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(2) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
  &:nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  &:nth-child(4) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
`;

const InnerImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 300px;
  background-color: white;
  border: 3px white solid;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
`;

const About = ({ mainColor, lightColor }) => {
    const navigate = useNavigate()
    const allFrameworks = []
    tech.languages.map((web) => {
        allFrameworks.push(...web.frameworks)
    })
    // tech.web_basics.map((web)=> {
    //     allFrameworks.push(...web.frameworks)
    // })


    console.log(allFrameworks)
    const technologies = [...tech.languages, ...allFrameworks, tech.wordpress]
    const databases = [...tech.databases]

    technologies.sort((value) => value.name === 'Laravel' || value.name === 'PHP')
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center wow animate__animated animate__fadeIn gap-5 pt-4'>
            <Wrapper className='d-flex justify-content-center align-items-center flex-wrap gap-5'>
                <div style={{ position: 'relative', height: '400px', width: '400px', margin: '0 auto' }}>
                    <BigCircle>
                        <IconBlock>
                            <StyledLink target='_blank' to="https://github.com/Mohamed3allam">
                                <GitHub style={{ fill: lightColor }} />
                            </StyledLink>
                        </IconBlock>
                        <IconBlock>
                            <StyledLink target='_blank' to="https://web.facebook.com/mohamedabdelrahman300/">
                                <FacebookOutlined style={{ fill: lightColor }} />
                            </StyledLink>
                        </IconBlock>
                        <IconBlock>
                            <StyledLink target='_blank' to="https://x.com/Mohamed_Allam_">
                                <X style={{ fill: lightColor }} />
                            </StyledLink>
                        </IconBlock>
                        <IconBlock>
                            <StyledLink target='_blank' to="https://www.linkedin.com/in/muhammed-abdelrahman/">
                                <LinkedIn style={{ fill: lightColor }} />
                            </StyledLink>
                        </IconBlock>
                    </BigCircle>
                    <InnerImage src={images['personal-pic.jpg']} alt="" />
                </div>
                <AboutDiv className='d-flex flex-column col '>
                    <h5>Hello I'M</h5>
                    <AboutTitle style={{ color: lightColor }}>MOHAMED <br /> ABDELRAHMAN AHMED MOHAMED</AboutTitle>
                    <AboutDesc className='lead'>
                        I’m a passionate Web Developer and a recent graduate from the Faculty of Business, Ain Shams University. With 1-2 years of hands-on experience in Front-end Development using React.js and around a year of Back-end Development with Node.js, I specialize in creating dynamic and responsive web applications.
                    </AboutDesc>
                    <DownloadCV
                        mainColor={mainColor}
                        lightColor={lightColor}
                    />
                </AboutDiv>
            </Wrapper>
            <hr style={{ width: '100%' }} />
            <ProgressWrapper className='d-flex flex-column gap-4 flex-wrap px-5 justify-content-around w-100'>
                <div>
                    <h2>Technologies</h2>
                    <div className='d-flex gap-3 flex-wrap py-4'>

                        {
                            technologies.map((t, index) => (
                                <div key={index} className='d-flex col gap-4 flex-column justify-content-center align-items-center'>
                                    <Pie colour={lightColor} percentage={t.percentage} iconUrl={t.icon} />
                                    {t.name}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3>Databases</h3>
                    <div className='d-flex gap-3 flex-wrap  py-4'>

                        {
                            databases.map((t, index) => (
                                <div key={index} className='d-flex col gap-4 flex-column justify-content-center align-items-center'>
                                    <Pie colour={lightColor} percentage={t.percentage} iconUrl={t.icon} />
                                    {t.name}
                                </div>
                            ))
                        }
                    </div>
                </div>

            </ProgressWrapper>
        </Container>
    )
}

export default About
