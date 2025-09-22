import images from "../../imgs";
import { deploymentPlatforms } from "../about/techs";

export const projects = [
    // ==== FRONTEND PROJECTS (ReactJS) ====
    {
        id: 1,
        name: "Information Fortress Cybersecurity",
        slug: "ifcc",
        projectType: [1],
        technologies: [1, 2, 4, 6],
        programmingLanguages: [1],
        deploymentPlatforms: [],
        link: "https://ifcc.nourseen.sa/",
        description:
            "Bilingual website with responsive design and SEO optimization for seamless multi-device, multi-language experience.",
        imageUrl: images["project-images/ifcc.png"],
        createdAt: "2024-12-01T00:00:00.000Z"
    },
    {
        id: 2,
        name: "AlNjoom",
        slug: "alnjoom",
        projectType: [1],
        technologies: [1, 2, 4, 6],
        programmingLanguages: [1],
        deploymentPlatforms: [],
        link: "https://alnjoom.sa/",
        description:
            "Bilingual responsive website with SEO optimization, built at Tjaara to deliver smooth multilingual user experience.",
        imageUrl: images["project-images/alnjoom.png"],
        createdAt: "2025-02-01T00:00:00.000Z"
    },
    {
        id: 3,
        name: "Athman Al-Emtiyaz",
        slug: "athman",
        projectType: [1],
        technologies: [1, 2, 4, 6],
        programmingLanguages: [1],
        deploymentPlatforms: [],
        link: "https://athman.nourseen.sa/",
        description:
            "Bilingual responsive site with SEO enhancements, delivered under Nourseen as part of my role at Tjaara.",
        imageUrl: images["project-images/athman.png"],
        createdAt: "2024-10-01T00:00:00.000Z"
    },
    {
        id: 4,
        name: "3D T-Shirt Configurator",
        slug: "3dtshirt",
        projectType: [1],
        technologies: [1, 3, 5],
        programmingLanguages: [1],
        deploymentPlatforms: [7],
        link: "https://customize.winnereg.com/",
        github: "https://github.com/Mohamed3allam/3d-configurator",
        description:
            "3D t-shirt customization tool using Three.js + React Three Fiber with real-time previews for text, logos, and colors.",
        imageUrl: images["project-images/3d-shirt.png"],
        createdAt: "2024-08-01T00:00:00.000Z"
    },
    {
        id: 5,
        name: "Premium Website (Frontend)",
        slug: "premium-react",
        projectType: [1],
        technologies: [1, 4],
        programmingLanguages: [1, 2],
        deploymentPlatforms: [5],
        link: "https://premium-club-asu.com/",
        github: "https://github.com/Mohamed3allam/Premium-Club-ASU",
        description:
            "React site using styled-components, Firebase, and state management with useState/useEffect.",
        imageUrl: images["project-images/premium-react.png"],
        createdAt: "2022-01-01T00:00:00.000Z"
    },
    {
        id: 6,
        name: "World Organization for Medical Services",
        slug: "woms",
        projectType: [1],
        technologies: [1, 4],
        programmingLanguages: [1],
        deploymentPlatforms: [4],
        link: "https://mohamed3allam.github.io/WOMS",
        github: "https://github.com/Mohamed3allam/WOMS/",
        description:
            "React-based site providing a digital platform for doctors and medical professionals.",
        imageUrl: images["project-images/woms.png"],
        createdAt: "2023-12-01T00:00:00.000Z"
    },
    {
        id: 7,
        name: "Al Phoronya Website",
        slug: "alphoronya",
        projectType: [1],
        technologies: [1, 4],
        programmingLanguages: [1],
        deploymentPlatforms: [5],
        link: "https://al-phoronya.web.app/",
        github: "https://github.com/Mohamed3allam/Al-Phoronya",
        description:
            "Multi-language site (Arabic, English, Russian) offering translation, liquidation, visa, and business services.",
        imageUrl: images["project-images/al-phoronya.png"],
        createdAt: "2023-09-01T00:00:00.000Z"
    },
    {
        id: 8,
        name: "Basmah Foundation Website",
        slug: "basmah",
        projectType: [1],
        technologies: [1, 4],
        programmingLanguages: [1],
        deploymentPlatforms: [4],
        link: "https://mohamed3allam.github.io/Basmah-Foundation/",
        github: "https://github.com/Mohamed3allam/Basmah-Foundation",
        description:
            "One-page React site using Styled Components for Basmah Foundation’s mission and activities.",
        imageUrl: images["project-images/basmah.png"],
        createdAt: "2020-09-01T00:00:00.000Z"
    },

    // ==== FULLSTACK PROJECTS (NodeJS + React) ====
    {
        id: 9,
        name: "Apartments App",
        slug: "apartments-app",
        projectType: [1, 2, 3],
        technologies: [1, 2, 4, 7, 8, 9],
        programmingLanguages: [1, 2],
        deploymentPlatforms: [2, 1],
        link: "https://apartment-app-frontend.vercel.app/",
        github: "https://github.com/Mohamed3allam/apartment-app",
        description:
            "Apartment marketplace with search, filters, and forms. Backend with Express + TypeScript on AWS; frontend on Vercel; Dockerized.",
        imageUrl: images["project-images/apartments-app.jpeg"],
        createdAt: "2025-08-01T00:00:00.000Z"
    },
    // {
    //     id: 10,
    //     name: "Premium Website (Fullstack)",
    //     slug: "premium-node",
    //     projectType: [1, 2, 3],
    //     technologies: [1, 4, 7, 8, 9],
    //     programmingLanguages: [1, 2],
    //     deploymentPlatforms: [2, 4],
    //     link: "https://mohamed3allam.github.io/Premium-Club-MERN-App/",
    //     github: "https://github.com/Mohamed3allam/Premium-Club-MERN-App",
    //     description:
    //         "Admin panel with user management, data control, and committee tools. Backend: Node.js + Express + MongoDB with auth and AWS S3 storage.",
    //     imageUrl: images["project-images/premium-node.png"],
    //     createdAt: "2024-12-01T00:00:00.000Z"
    // },

    // ==== WORDPRESS PROJECTS (Backend-ish CMS) ====
    {
        id: 11,
        name: "Tyry Website",
        slug: "tyry",
        projectType: [4],
        technologies: [11],
        programmingLanguages: [],
        deploymentPlatforms: [7],
        imageUrl: images["project-images/tyry.png"],
        createdAt: "2024-03-01T00:00:00.000Z"
    },
    {
        id: 12,
        name: "IFFC Website",
        slug: "iffc",
        projectType: [4],
        technologies: [11],
        programmingLanguages: [],
        deploymentPlatforms: [7],
        link: "https://iffc.uk/",
        imageUrl: images["project-images/iffc.png"],
        createdAt: "2023-12-01T00:00:00.000Z"
    },
    {
        id: 13,
        name: "IOHS Website",
        slug: "iohs",
        projectType: [4],
        technologies: [11],
        programmingLanguages: [],
        deploymentPlatforms: [7],
        link: "https://iohs.uk/",
        imageUrl: images["project-images/iohs.png"],
        createdAt: "2023-12-01T00:00:00.000Z"
    },
    {
        id: 14,
        name: "Rowad Elhayat Website",
        slug: "rowad",
        projectType: [4],
        technologies: [11],
        programmingLanguages: [],
        deploymentPlatforms: [7],
        link: "https://rowadelhayah.com/",
        github: "https://github.com/Mohamed3allam/menu-app-ts",
        imageUrl: images["project-images/rowad.png"],
        createdAt: "2023-12-01T00:00:00.000Z"
    },
    {
        id: 15,
        name: "Menus App",
        slug: "menus-app",
        projectType: [1, 2, 3],
        technologies: [1, 4, 7, 8, 9],
        programmingLanguages: [1, 2],
        deploymentPlatforms: [2, 1],
        link: "https://menu-app-frontend-alpha.vercel.app/",
        description: "Restaurant menu management app where admins can create, update, and organize categories & items.",
        imageUrl: images["project-images/menu.png"],
        createdAt: "2024-05-01T00:00:00.000Z"
    },
];
