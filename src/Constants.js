
import crypto from "./assets/crypto.png";
import hashtag from "./assets/hashtag.png";
import netflix from "./assets/netflix.png";
import carRental from "./assets/carRental.png";
import threejs from './assets/threejs.png'

export const navlinks = [
    {
        name: "home",
        class: <i className="fa-solid fa-home"></i>
    }, {
        name: "about",
        class: <i className="fas fa-address-card"></i>
    }, {
        name: "projects",
        class: <i className="fas fa-briefcase"></i>
    }, {
        name: "contact",
        class: <i className="fas fa-envelope"></i>
    },
    {
        name: "cv",
        class: <i className="fas fa-file"></i>
    }

]

export const AboutMe = {
    interest_text: "A dedicated Front-end Developer",
    loaction: "Based in Delhi-NCR, India",
    short_intro: "As a front-end developer, I possess impressive skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. My expertise lies in designing and maintaining websites that are fully responsive and offer a smooth user experience by writting clean and optimized code. I'm also a team player who can collab with teams to produce expectional web applications. Currently I'm learning backend development and also sharpening my front-end skills."
}

export const projects = [
    {
        name: "CAR-RENTAL",
        desc: "Car-Rental is a car renting application where user can book there car of dream for personal use or for business requirements. Application provides an interface to compare and reserve cars.",
        img: carRental,
        stack: ["React", "SCSS"],
        github: "https://github.com/ronitsingh2001/car-rental",
        link: "https://car-rental-rs.netlify.app/",
    },
    {
        name: "NETFLIX ",
        desc: "A online video streaming platform that allow users to binge watch their favourite movies and shows in real-time. All movies and shows categorized on the basis of genres and are updated in real-time. ",
        img: netflix,
        stack: ["React", "TailwindCSS", "API"],
        github: "https://github.com/ronitsingh2001/",
        link: "https://netflix-react-cl.netlify.app/",
    },
    {
        name: "COIN.EXCH 🪙",
        desc: "CoinExch is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
        img: crypto,
        stack: ["React", "SCSS", "API"],
        github: "https://github.com/ronitsingh2001/coinexch",
        link: "https://coinexch.netlify.app/",
    },
    {
        name: "THREE.JS Portfolio",
        desc: "A portfolio website that have 3D components, user can interact with 3D components. It uses three.js to develop 3D components.",
        img: threejs,
        stack: ["React", "TaiwindCSS", "ThreeJs"],
        github: "https://github.com/ronitsingh2001",
        link: "https://ronit-singh-threejs.netlify.app/",
    },
    {
        name: "HASHTAG ",
        desc: "Hashtag is a platform developed for technical society of our college formed to bring the best out of students. It provide user with all neccesary information about any upcoming technical events.",
        img: hashtag,
        github: "https://github.com/ronitsingh2001/HASHTAG-spa",
        stack: ["HTML", "CSS"],
        link: "https://spa-websi.web.app/#",
    },
];
