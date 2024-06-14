import { FacebookOutlined, GitHub, LinkedIn, PhoneAndroidOutlined, WhatsApp, X } from '@mui/icons-material'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Title = styled.h2`
        font-size: clamp(2rem, 0.3333rem + 3.3333vw, 4rem);
    `
const Wrapper = styled.div`
        display: flex;
        gap: 1rem;
    `
const ContactData = styled.div`
    display: flex;
    flex-direction: column;
    `
const ContactInfo = styled.div`
        display: flex;
        gap: 1rem;
    `
const Contact = () => {
    return (
        <Container className='wow animate__animated animate__fadeIn'>
            <Title>Get In Touch </Title>
            <Wrapper className='p-5'>
                <ContactData className='col'>
                    <ContactInfo>
                        <WhatsApp />
                        <p><Link to="https://wa.me/201555018862">+201555018862</Link></p>
                    </ContactInfo>
                    <ContactInfo>
                        <FacebookOutlined />
                        <p><Link to="https://web.facebook.com/mohamedabdelrahman300/">Mohamed Abdelrahman</Link></p>
                    </ContactInfo>
                    <ContactInfo>
                        <GitHub />
                        <p><Link to="https://github.com/Mohamed3allam">/Mohamed3allam</Link></p>
                    </ContactInfo>
                    <ContactInfo>
                        <LinkedIn />
                        <p><Link to="https://www.linkedin.com/in/muhammed-abdelrahman/">Muhammed-Abdelrahman</Link></p>
                    </ContactInfo>
                    <ContactInfo>
                        <X />
                        <p><Link to="https://x.com/Mohamed_Allam_">@Mohamed_Allam_</Link></p>
                    </ContactInfo>
                    <span className='mt-5'>
                        Feel Free to Contact on E-Mail : <Link to="mailto:mohamedabdelrahmann326@gmail.com">mohamedabdelrahmann326@gmail.com</Link>
                    </span>
                </ContactData>
            </Wrapper>
        </Container>
    )
}

export default Contact
