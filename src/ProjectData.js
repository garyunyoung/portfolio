import stitchedHomePage from "./images/stitched-0.png";
import bethsHomePage from "./images/beths-project.png";
import waldourStudioHomePage from "./images/waldour-1.png";
import stitchedLukesPage from "./images/stitched-1.png";
import sploreBanner from "./images/splore-c.jpg"

export const stitchedProject = {
  title: "Stitched",
  path: "stitched",
  category: "web",
  jobType: "Front-end Intern",
  github: "n/a",
  previewImage: { src: stitchedHomePage, alt: "Stitched Home Page" },
  excerpt:
    "Stitched is an eco-friendly online curtain + blind retail start-up with a focus on 3D visualisation and AR",
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
  excerpt:
    "Stitched is an eco-friendly online curtain + blind retail start-up with a focus on 3D visualisation and AR",
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
    "Mobile first, responsive and accessible.",
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
  excerpt:
    "Stitched is an eco-friendly online curtain + blind retail start-up with a focus on 3D visualisation and AR",
  images: [{ src: waldourStudioHomePage, alt: "Waldour Studio Home Page" }],
  companyDescription:
    "Wardour Studios specialises in podcast production and voiceover recording in a comfortable, creative and professional environment.",
  info:
    "Designed and implemented a website for the Waldour Studios as a Freeland Project",
  link: "https://wardourstudios.co.uk/",
  displayLink: "wardourstudios.co.uk",
  technologies: ["Wordpress", "PHP", "SCSS", "HTML"],
  keyFeatures: [
    "Mobile first, responsive and accessible.",
    "Implemented with Wordpress, using PHP, SCSS and Git.",
    "Integrated using PHP components",
    "Integrated with ACF (Advance Custom Fields) and other plugins"
  ]
};

export const sploreProject = {
  title: "Splore 2018",
  path: "splore-2018",
  category: "pr",
  jobType: "Intern",
  github: "n/a",
  previewImage: { src: sploreBanner, alt: "splore 2018 festival banner" },
  excerpt:
    "Situated on the beguiling shores of Tapapakanga Park, Splore is a boutique music and arts festival like no other. Three nights where people are invited to embrace the theme and join the mindful tribe of party animals! ",
  images: [{ src: sploreBanner, alt: "splore 2018 festival banner" }],
  companyDescription:
    "Situated in a beguiling bay on the shores of Tapapakanga Park, Splore is a boutique music and arts festival like no other. An entertainment extravaganza, an unforgettable dress up party, three nights where people are invited to embrace the theme and join the mindful tribe of party animals! ",
  info:
    "At the end of 2017 I was brought onboard as a press assistant for Splore - arguably the best music festival in New Zealand. ",
  link: "http://www.splore.net/",
  displayLink: "http://www.splore.net/",
  technologies: ["Artist Relations", "Communications", "Press Kits"],
  keyFeatures: [
    "Supporting the Head of PR.",
    "Coordinating artist interviews during the lead up to and during the festival.",
    "Liasing between artists and journalists at the festival.",
    "Pitching interviews and story ideas to media outlets.",
    "Drafting and distributed press releases and press kits.",
    "Compiling media reports for print, radio and online.",
    "Building and maintaining targeted media lists for mail-outs and pitches.",
    "Researching new media opportunities.",
    "Organising media accreditation.",
    "Other general administrative tasks such as fielding media enquiries and requests.",
  ]
};
