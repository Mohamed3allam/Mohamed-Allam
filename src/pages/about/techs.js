import images from "../../imgs";

export const tech = {
    frontend: [
        {
            name: "HTML5",
            percentage: 85,
            icon: images["icons/html-5.svg"],
        },
        {
            name: "CSS3",
            percentage: 85,
            icon: images["icons/css-3.svg"],
            frameworks: [
                {
                    name: "Bootstrap",
                    percentage: 85,
                    icon: images["icons/bootstrap.svg"],
                },
                {
                    name: "SCSS",
                    percentage: 70,
                    icon: images["icons/sass.svg"],
                },
                {
                    name: "Tailwind",
                    percentage: 75,
                    icon: images["icons/tailwindcss-icon.svg"],
                },
            ],
        },
        {
            name: "JavaScript (ES6+)",
            percentage: 85,
            icon: images["icons/javascript.svg"],
            frameworks: [
                {
                    name: "React.js",
                    percentage: 85,
                    icon: images["icons/react.svg"],
                },
                {
                    name: "Next.js",
                    percentage: 70,
                    icon: images["icons/nextjs.svg"],
                },
                {
                    name: "Three.js",
                    percentage: 40,
                    icon: images["icons/threejs.svg"],
                },
            ],
        },
    ],

    backend: [
        {
            name: "Node.js",
            percentage: 70,
            icon: images["icons/nodejs.svg"],
            frameworks: [
                {
                    name: "Express.js",
                    percentage: 70,
                    icon: images["icons/express.svg"],
                },
                {
                    name: "Socket.io",
                    percentage: 50,
                    icon: images["icons/socket.io.svg"],
                },
            ],
        },
        {
            name: "PHP",
            percentage: 30,
            icon: images["icons/php.svg"],
            frameworks: [
                {
                    name: "Laravel",
                    percentage: 15,
                    icon: images["icons/laravel.svg"],
                },
            ],
        },
    ],

    databases: [
        {
            name: "MongoDB",
            percentage: 80,
            icon: images["icons/mongodb.svg"],
        },
        {
            name: "MySQL",
            percentage: 50,
            icon: images["icons/mysql.svg"],
        },
        {
            name: "Firebase",
            percentage: 50,
            icon: images["icons/firebase.svg"],
        },
    ],

    state_patterns: [
        {
            name: "React Hooks",
            percentage: 85,
            icon: images["icons/react.svg"],
        },
        {
            name: "Context API",
            percentage: 75,
            icon: images["icons/react.svg"],
        },
        {
            name: "Redux",
            percentage: 70,
            icon: images["icons/redux.svg"],
        },
        {
            name: "Redux Saga",
            percentage: 60,
            icon: images["icons/redux-saga.svg"],
        },
        {
            name: "React Hook Form",
            percentage: 75,
            icon: images["icons/react.svg"], // add an icon if available
        },
    ],

    cloud_tools: [
        {
            name: "Docker",
            percentage: 60,
            icon: images["icons/docker.svg"],
        },
        {
            name: "Git/GitHub",
            percentage: 85,
            icon: images["icons/git.svg"],
        },
        {
            name: "AWS (S3, EC2)",
            percentage: 60,
            icon: images["icons/aws.svg"],
        },
        {
            name: "Vercel",
            percentage: 80,
            icon: images["icons/vercel.svg"],
        },
        {
            name: "Netlify",
            percentage: 70,
            icon: images["icons/netlify.svg"],
        },
        {
            name: "CI/CD",
            percentage: 55,
            icon: images["icons/cicd.svg"], // optional
        },
    ],

    cms: [
        {
            name: "WordPress",
            percentage: 70,
            icon: images["icons/wordpress.svg"],
        },
    ],
};
