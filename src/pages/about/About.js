import { Container } from 'react-bootstrap'
import { keyframes, styled } from 'styled-components'
import images from '../../imgs'
import { FacebookOutlined, GitHub, LinkedIn, X } from '@mui/icons-material'
import { Link } from 'react-router-dom'
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
  height: 100% !important;
  min-height: fit-content !important;
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
  height: 300px;
  /* background-color: white; */
  border: 3px white solid;
  object-fit: cover;
  object-position: bottom;
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


  return (
    <Container style={{
      minHeight: '500px',
    }} className='d-flex flex-column justify-content-center align-items-center wow animate__animated animate__fadeIn gap-5 pt-4'>
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
            Full-Stack Developer with a frontend edge (Next.js, React) and solid backend skills (Node.js, Express, MongoDB). Originally from a business background, I shifted careers through relentless self-study and hands-on projects, transforming into a developer who can take a product from concept to deployment. I thrive at building clean, scalable architectures, optimizing performance, and delivering production-ready solutions — whether it’s crafting smooth user experiences, designing robust APIs, or deploying full apps to the cloud.
          </AboutDesc>
          <DownloadCV
            mainColor={mainColor}
            lightColor={lightColor}
          />
        </AboutDiv>
        {/* <AboutCard /> */}
      </Wrapper>
    </Container>
  )
}

export default About
