import images from "../../imgs";

export const projects = {
    ReactJS: {
        name: "ReactJS", 
        icon:images['icons/react.svg'],
        projects: [
            {
                name: 'Basmah Foundation Website',
                slug:'basmah',
                link:'https://mohamed3allam.github.io/Basmah-Foundation/',
                github:'https://github.com/Mohamed3allam/Basmah-Foundation',
                description: 'This website is a simple, one-page application built using React and Styled Components. It serves as a digital presence for the Basmah Foundation, providing information about their mission, activities, and goals.',
                imageUrl: images['project-images/basmah.png']
            },
            {
                name:'Al Phoronya Website',
                slug:'alphoronya',
                link:'https://al-phoronya.com/',
                github:'https://github.com/Mohamed3allam/Al-Phoronya',
                description:'Multi-language support (Arabic, English, Russian) using i18n Responsive design Various business services including translation, liquidation, visa, and business setup',
                imageUrl:images['project-images/al-phoronya.png']
            }, 
            {
                name:'Premium Website',
                slug:'premium-react',
                link:'https://premium-club-asu.com/',
                github:'https://github.com/Mohamed3allam/Premium-Club-ASU',
                description:'The website is built using React, and it employs state management with useState and useEffect. This is also the first time the project incorporates styled-components for styling and Firebase for data management.',
                imageUrl:images['project-images/premium-react.png']
            },
            {
                name:'World Organization for Medical Services',
                slug:'woms',
                link:'https://mohamed3allam.github.io/WOMS',
                github:'https://github.com/Mohamed3allam/WOMS/',
                description:'World Organization for Medical Services (WOMS) website, built with React. This project aims to provide an efficient and effective online platform for doctors and medical professionals.',
                imageUrl:images['project-images/woms.png']
            }
        ]
    },
    NodeJS: {
        name: "NodeJS", 
        icon:images['icons/nodejs.svg'],
        projects: [
            {
                name: 'Premium Website',
                slug:'premium-node',
                link:'https://mohamed3allam.github.io/Premium-Club-MERN-App/',
                github:'https://github.com/Mohamed3allam/Premium-Club-MERN-App',
                description: 'Initially built using React, the project now includes an admin panel for user management, data control, and committee management. The backend is powered by Node.js with Express and MongoDB, featuring authentication and authorization using JWT tokens and file storage using Multer and Amazon S3.',
                imageUrl: images['project-images/premium-node.png']
            },
        ]
    },
    Wordpress: {
        name: "Wordpress", 
        icon:images['icons/wordpress.svg'],
        projects: [
            {
                name: 'Tyry Website',
                slug:'tyry',
                link:'https://tyry-adv.info/',
                github:'',
                description: '',
                imageUrl: images['project-images/tyry.png']
            },
            {
                name: 'IFFC Website',
                slug:'iffc',
                link:'https://iffc.uk/',
                github:'',
                description: '',
                imageUrl: images['project-images/iffc.png']
            },
            {
                name: 'IOHS Website',
                slug:'iohs',
                link:'https://iohs.uk/',
                github:'',
                description: '',
                imageUrl: images['project-images/iohs.png']
            },
            {
                name: 'Rowad Elhayat Website',
                slug:'rowad',
                link:'https://rowadelhayah.com/',
                github:'',
                description: '',
                imageUrl: images['project-images/rowad.png']
            },
        ]
    },
}