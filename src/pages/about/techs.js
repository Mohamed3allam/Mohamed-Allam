import images from "../../imgs";

export const tech = {
    web_basics: [
        {
            name: "HTML5",
            percentage: 85,
            icon: images['icons/html-5.svg'],
            frameworks: []
        },
        {
            name: "CSS3",
            percentage: 85,
            icon: images['icons/css-3.svg'],
            frameworks: [
                {
                    name: "Bootstrap",
                    percentage: 85,
                    icon: images['icons/bootstrap.svg']
                },
            ]
        },
    ],
    languages: [
        {
            name: "Javascript",
            percentage: 85,
            icon: images['icons/javascript.svg'],
            frameworks: [
                {
                    name: "ReactJS",
                    percentage: 85,
                    icon: images['icons/react.svg']
                },
                {
                    name: "NextJS",
                    percentage: 60,
                    icon: images['icons/nextjs.svg']
                },
                {
                    name: "NodeJS",
                    percentage: 70,
                    icon: images['icons/nodejs.svg']
                },
            ]
        },
        {
            name: "PHP",
            percentage: 30,
            icon: images['icons/php.svg'],
            frameworks: [
                {
                    name: "Laravel",
                    percentage: 10,
                    icon: images['icons/laravel.svg']
                },
            ]
        },

    ],
    databases: [
        {
            name: "MongoDB",
            percentage: 80,
            icon: images['icons/mongodb.svg']
        },
        {
            name: "MySQL",
            percentage: 40,
            icon: images['icons/mysql.svg']
        },
        {
            name: "Firebase",
            percentage: 50,
            icon: images['icons/firebase.svg']
        },
    ],
    wordpress: {
        name: "Wordpress",
        percentage: 70,
        icon: images['icons/wordpress.svg']
    },
}