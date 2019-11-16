import React from "react";
import stitchedHomePage from "./images/stitched-0.png";
import bethsHomePage from "./images/beths-project.png";
import waldourStudioHomePage from "./images/waldour-1.png";
import stitchedLukesPage from "./images/stitched-1.png";

export const stitchedProject = {
  title: "Stitched",
  path: "stitched",
  category: "web",
  jobType: "work",
  github: "n/a",
  previewImage: { src: stitchedHomePage, alt: "Stitched Home Page" },
  images: [{ src: stitchedLukesPage, alt: "Stitched Inspiration Page" }],
  companyDescription:
    "Stitched is an eco-friendly online curtain + blind retail start-up with a focus on 3D visualisation and AR",
  info:
    "For my first role in a company I joined Stitched, interning as a Front End Developer. I was brought on to help with their site redesign but have since taken most front end features",
  link: "https://www.stitched.co.uk/",
  displayLink: "stitched.co.uk",
  technologies: ["Elixir", "Phoenix", "Liveview", "React", "SCSS", "HTML"],
  keyFeatures: [
    "Built and deployed front-end changes for a site redesign that involved reusable CMS components.",
    "Mobile first and responsive site using React, JS, SASS, HTML/embedded Elixir and Git.",
    "Exposed to Redux, Elixir, Phoenix and unit/integration testing. ",
    "Worked closely with our UX/UI designer while implementing designs created on Zeplin.",
    "Experience using Kanban, CI and CD (Docker and Google Cloud).",
    "Practised pair programming with senior engineers."
  ]
};

export const bethsProject = {
  title: "The Beths",
  path: "the-beths",
  category: "web",
  jobType: "Freelance",
  github: "https://github.com/garyunyoung",
  previewImage: { src: bethsHomePage, alt: "The Beths Home Page" },
  images: [{ src: bethsHomePage, alt: "The Beths Home Page" }],
  companyDescription:
    "The Beths are a New Zealand indie pop band, originally from Auckland, New Zealand.",
  info:
    "Designed and implemented a website for the Beths. This was the first proper project I took on early in my coding career. I noticed that a friend's band's website needed a redesign and decided it would be a good way to develop my web development skills.",
  link: "https://thebeths.com/",
  displayLink: "thebeths.com",
  technologies: ["Next.js", "React", "SCSS", "HTML"],
  keyFeatures: [
    "Designed using Gravit.io.",
    "Mobile first, responsive and accessible. ",
    "Implemented with NextJS, SCSS and Git. Deployed on Heroku.",
    "Integrated Google Analytics using Google Tag Manager.",
    "Added a GDPR banner that enables/disables analytics."
  ]
};

export const waldourStudiosProject = {
  title: "Waldour Studios",
  path: "waldour-studios",
  category: "web",
  jobType: "Freelance",
  github: "https://github.com/garyunyoung",
  previewImage: { src: waldourStudioHomePage, alt: "Waldour Studio Home Page" },
  images: [{ src: waldourStudioHomePage, alt: "Waldour Studio Home Page" }],
  companyDescription:
    "Wardour Studios specialises in podcast production and voiceover recording in a comfortable, creative and professional environment.",
  info:
    "Designed and implemented a website for the Waldour Studios as a Freeland Project",
  link: "https://wardourstudios.co.uk/",
  displayLink: "wardourstudios.co.uk",
  technologies: ["Wordpress", "PHP", "SCSS", "HTML"],
  keyFeatures: [
    "Mobile first, responsive and accessible. ",
    "Implemented with Wordpress, using PHP, SCSS and Git.",
    "Integrated using PHP components",
    "Integrated with ACF (Advance Custom Fields) and other plugins"
  ]
};

export const learnKoreanProject = {
  title: "Learn Korean With Me",
  path: "learn-korean-with-me",
  category: "web",
  jobType: "Project",
  github: "https://github.com/garyunyoung",
  previewImage: { src: waldourStudioHomePage, alt: "Waldour Studio Home Page" },
  images: [{ src: waldourStudioHomePage, alt: "Waldour Studio Home Page" }],
  companyDescription:
    "Wardour Studios specialises in podcast production and voiceover recording in a comfortable, creative and professional environment.",
  info:
    "Designed and implemented a website for the Waldour Studios as a Freeland Project",
  link: "https://wardourstudios.co.uk/",
  displayLink: "wardourstudios.co.uk",
  technologies: ["Wordpress", "PHP", "SCSS", "HTML"],
  keyFeatures: [
    "Mobile first, responsive and accessible. ",
    "Implemented with Wordpress, using PHP, SCSS and Git.",
    "Integrated using PHP components",
    "Integrated with ACF (Advance Custom Fields) and other plugins"
  ]
};
