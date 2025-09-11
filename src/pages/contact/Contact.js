import React from "react";
import { Container } from "react-bootstrap";
import { styled } from "styled-components";
import {
    FacebookOutlined,
    GitHub,
    LinkedIn,
    WhatsApp,
    X,
    EmailOutlined,
    PhoneAndroidOutlined,
} from "@mui/icons-material";

// Styled Components
const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  min-height: 80vh;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 0.3333rem + 3.3333vw, 4rem);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  color: #fff;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(0,0,0, 0.8);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  color: #000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 2rem;
    fill: ${(props) => props.color};
    min-width: 2rem;
  }

  p {
    margin: 0;
    font-weight: 500;
    word-break: break-word;
  }
`;

const Contact = ({ mainColor }) => {
    const contacts = [
        {
            icon: <WhatsApp />,
            label: "+201555018862",
            link: "https://wa.me/201555018862",
            color: "#25D366",
        },
        {
            icon: <FacebookOutlined />,
            label: "Mohamed Abdelrahman",
            link: "https://web.facebook.com/mohamedabdelrahman300/",
            color: "#1877F2",
        },
        {
            icon: <GitHub />,
            label: "/Mohamed3allam",
            link: "https://github.com/Mohamed3allam",
            color: "#333",
        },
        {
            icon: <LinkedIn />,
            label: "Muhammed-Abdelrahman",
            link: "https://www.linkedin.com/in/muhammed-abdelrahman/",
            color: "#0077b5",
        },
        {
            icon: <X />,
            label: "@Mohamed_Allam_",
            link: "https://x.com/Mohamed_Allam_",
            color: "#1DA1F2",
        },
        {
            icon: <EmailOutlined />,
            label: "mohammed.abdelrahman.dev@gmail.com",
            link: "mailto:mohammed.abdelrahman.dev@gmail.com",
            color: "#D44638",
        },
        {
            icon: <PhoneAndroidOutlined />,
            label: "+201555018862",
            link: "tel:+201555018862",
            color: "#34B7F1",
        },
    ];

    return (
        <Section className="wow animate__animated animate__fadeIn">
            <Title>Get In Touch</Title>
            <CardsWrapper>
                {contacts.map((contact, idx) => (
                    <ContactCard
                        color={contact.color}
                        key={idx}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {React.cloneElement(contact.icon, { style: { color: contact.color } })}
                        <p style={{ color: mainColor }}>{contact.label}</p>
                    </ContactCard>
                ))}
            </CardsWrapper>
        </Section>
    );
};

export default Contact;
