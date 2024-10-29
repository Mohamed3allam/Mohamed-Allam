# Mohamed Abdelrahman Portfolio

Welcome to my portfolio website! This project showcases my professional work, projects, and provides a way to get in touch with me.

## Table of Contents

-   [Overview](#overview)
-   [Features](#features)
-   [Project Structure](#project-structure)
-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contact](#contact)
-   [License](#license)

## Overview

This website is a personal portfolio to display my completed and ongoing projects. It contains four main pages:

-   **Home**: Introduction and overview.
-   **About**: Information about me.
-   **Portfolio**: A gallery of my projects.
-   **Contact**: Ways to reach me.

The site features a 3D animation of ripple waves created using Three.js, enhancing the visual appeal.

## Features

-   Responsive design using React and Bootstrap.
-   3D animations powered by Three.js.
-   Interactive project gallery with lightbox feature.
-   Smooth transitions and animations with Wow.js and Animate.css.
-   Contact form for easy communication.

## Project Structure

```plaintext
.
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── webpack.config.js
├── public/
│   ├── bootstrap.js
│   ├── bootstrap.js.map
│   ├── bootstrap.min.js
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── imgs.js
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── routes.js
│   ├── WowWrapper.js
│   ├── assets/
│   │   ├── css/
│   │   │   └── App.css
│   │   ├── font/
│   │   │   ├── Biryani.ttf
│   │   │   └── Hind Siliguri.ttf
│   │   ├── imgs/
│   │   │   ├── circle.png
│   │   │   ├── personal-pic.png
│   │   │   ├── icons/
│   │   │   │   ├── bootstrap.svg
│   │   │   │   ├── css-3.svg
│   │   │   │   ├── firebase.svg
│   │   │   │   ├── html-5.svg
│   │   │   │   ├── javascript.svg
│   │   │   │   ├── laravel.svg
│   │   │   │   ├── mongodb.svg
│   │   │   │   ├── mysql.svg
│   │   │   │   ├── nextjs.svg
│   │   │   │   ├── nodejs.svg
│   │   │   │   ├── php.svg
│   │   │   │   ├── react.svg
│   │   │   │   ├── socket.io.svg
│   │   │   │   └── wordpress.svg
│   │   │   ├── project-images/
│   │   │   │   ├── al-phoronya.png
│   │   │   │   ├── basmah.png
│   │   │   │   ├── iffc.png
│   │   │   │   ├── iohs.png
│   │   │   │   ├── premium-node.png
│   │   │   │   ├── premium-react.png
│   │   │   │   ├── rowad.png
│   │   │   │   ├── tyry.png
│   │   │   │   └── woms.png
│   ├── components/
│   │   ├── Button/
│   │   │   └── Button.jsx
│   │   ├── Footer/
│   │   ├── MouseFollow/
│   │   │   └── MouseFollow.jsx
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── PageLoader/
│   │   │   └── PageLoader.jsx
│   │   ├── PortfolioSidebar/
│   │   │   └── PortfolioSidebar.jsx
│   │   ├── Settings/
│   │   │   └── Settings.jsx
│   │   ├── SwipableWrapper/
│   │   │   └── SwipableWrapper.jsx
│   │   └── WavyDots/
│   │       └── WavyDots.jsx
│   ├── pages/
│   │   ├── 404/
│   │   │   └── NotFound.js
│   │   ├── about/
│   │   │   ├── About.js
│   │   │   ├── Progress.jsx
│   │   │   └── techs.js
│   │   ├── contact/
│   │   │   └── Contact.js
│   │   ├── home/
│   │   │   └── Home.js
│   │   ├── portfolio/
│   │   │   ├── ImageLightbox.jsx
│   │   │   ├── Portfolio.js
│   │   │   └── projects.js
│   └── utils/
│       ├── DeviceDetection/
│       │   ├── deviceDetection.js
│       │   └── DeviceDetector.js
│       └── Palette/
│           └── Palette.js
```

## Technologies Used

-   React: Frontend library for building user interfaces.
-   Three.js: JavaScript library for creating 3D graphics.
-   React Three Fiber: React renderer for Three.js.
-   Bootstrap: CSS framework for responsive design.
-   Styled Components: Library for styling React components.
-   Wow.js: Library for scroll animations.
-   Animate.css: Library of CSS animations.
-   React Router: Library for routing in React applications.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Mohamed3allam/portfolio.git
cd portfolio
npm install
```

## Usage

To start the development server, run:

```bash
npm start
```

## Running the Application

To run the app in development mode and open it in your default browser, use the following command:

```bash
npm start
```

## Automatic Reloading and Production Build

### Automatic Reloading

The page will automatically reload if you make edits to the source code.

### Production Build

To build the project for production, use the command:

```bash
npm run build
```

## Contact

If you have any questions or want to get in touch, you can reach me at:

- Email: mohamedabdelrahman326@yahoo.com
- LinkedIn: [linkedin.com/in/mohamed-abdelrahman](https://linkedin.com/in/mohamed-abdelrahman)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

