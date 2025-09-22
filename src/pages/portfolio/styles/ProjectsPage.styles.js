import styled from "styled-components";

export const PageWrapper = styled.div`

`;

export const Sidebar = styled.div`
  border-right: 1px solid #ddd;
  padding-right: 1rem;
  * {
    color: #fff;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled.div`
  border: 1px solid #a2a2a258;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  padding: 28px;
  backdrop-filter: blur(5px) !important;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 100%;
  * {
    text-decoration: none !important;
  }
  `;

export const ProjectData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  img {
    max-height: 190px;
    object-fit: cover;
  }
`

export const TechIcons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
  h6 {
    color: #bbbbbbff;
  }
`;

export const TechIcon = styled.img`
  width: 20px !important;
  height: 20px !important;
  object-fit: contain;
  filter: drop-shadow( 0 0 2px #fff );
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 15px;
  a {
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 8px;
  }
`