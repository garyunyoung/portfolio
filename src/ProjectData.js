import stitchedHomePage from "./images/stitched-desktop-homepage.png";
import stitchedARHomePage from "./images/stitchedar-homepage-1207x741.png";
import bethsHomePage from "./images/beths-project.png";
import waldourStudioHomePage from "./images/waldour-1.png";
import stitchedLukesPage from "./images/stitched-desktop-homepage.png";
import sploreBanner from "./images/splore-c.jpg";
import sailCityJumpBanner from "./images/sail-city-jump.jpg";
import nightAtTheSavoyBanner from "./images/night-at-the-savoy.jpg";


import theBethsHomepageMobile from "./images/the-beths/homepage-mobile.png"
import theBethsWatchMobile from "./images/the-beths/watch-mobile.png"
import theBethsMerchMobile from "./images/the-beths/merch-mobile.png"
import theBethsContactMobile from "./images/the-beths/contact-mobile.png"



export const stitchedProject = {
  title: "Stitched",
  modifier: "stitched",
  path: "stitched",
  category: "web",
  jobType: "Front-end Developer",
  jobYear: "2019 - 2021",
  github: "n/a",
  previewImage: { src: stitchedHomePage, alt: "Stitched Home Page" },
  excerpt:
    "Stitched is an eco-friendly, made to measure, curtain + blind start-up focused on redefining home interiors by using 3D visualisation, augmented reality, and machine learning.",
  images: [{ src: stitchedLukesPage, alt: "Stitched Inspiration Page" }],
  companyDescription:
    "Stitched is an eco-friendly, made to measure, curtain + blind start-up focused on redefining home interiors by using 3D visualisation, augmented reality, and machine learning.",
  info:
    ['In 2019 I joined Stitched, interning as a front-end developer which then lead to a full-time contract. I was brought on to help with their site redesign but since then took on their front-end features.', 'Near the end of 2020 I helped develop the front-end of an AR app.'],
  link: "https://www.stitched.co.uk/",
  displayLink: "stitched.co.uk",
  technologies: ["Elixir", "Phoenix LiveView", "JavaScript", "React", "SCSS", "HTML"],
  keyFeatures: [
    "Built and deployed front-end changes for a site redesign/overhaul that involved custom reusable CMS components.",
    "Built the front-end using Elixir / Phoenix LiveView, JS / React, SCSS, HTML/embedded Elixir, and Git for version control.",
    "Experience with Kanban methodology, CI / CD (Google Cloud & Docker then Kubernetes)",
    "Exposed to Ruby / Ruby on Rails, Redux, and unit/integration testing.",
    "Pair programmed with senior back-end and full-stack engineers.",
    "Worked closely with the UX/UI designer to implement designs created on Figma, as well as collaborating to find ways to improve user experience.",
    "Approached designs with a mobile-first and responsive methodology.",
    "Approached features with a maintainable and reusable methodology.",
    "Built the front-end of an AR app using Swift / SwiftUI"
  ]
};

export const stitchedARProject = {
  title: "Stitched AR",
  modifier: "stitched-ar",
  path: "stitchedAR",
  category: "web",
  jobType: "Front-end Developer",
  jobYear: "2020",
  github: "n/a",
  previewImage: { src: stitchedARHomePage, alt: "Stitched AR Home Page" },
  excerpt: "Stitched AR is an augmented reality mobile application that lets users visualise and measure curtains in their own home.",
  images: [{ src: stitchedARHomePage, alt: "Stitched Inspiration Page" }],
  companyDescription:
    "Stitched is an eco-friendly, made to measure, curtain + blind start-up focused on redefining home interiors by using 3D visualisation, augmented reality, and machine learning.",
  info:
    ['Near the end of 2020 I helped develop the front-end of an AR app.', 'Allows users to visualise curtains in their home', 'Allows users to measure curtains using AR tools', 'Allows users to order sample fabrics using Apple Pay'],
  link: "https://apps.apple.com/gb/app/stitched-ar/id1461104538",
  displayLink: "n/a",
  technologies: ["Swift", "SwiftUI"],
  keyFeatures: [
    "Built the front-end of the app using Swift / SwiftUI",
    "Tested on various iOS devices and screen sizes",
    "Challenges: No prior experience with Swift / SwiftUI",
  ]
};

export const bethsProject = {
  title: "The Beths",
  modifier: "the-beths",
  path: "the-beths",
  category: "web",
  jobType: "Freelance",
  jobYear: "2019",
  github: "https://github.com/garyunyoung",
  previewImage: { src: bethsHomePage, alt: "The Beths Home Page" },
  excerpt:
    "The Beths are an award-winning indie pop band based in Auckland, New Zealand.",
  images: [{ src: bethsHomePage, alt: "The Beths Home Page" }],
  mobileImages: [
    {
      src: theBethsHomepageMobile,
      alt: ""
    },
    {
      src: theBethsWatchMobile,
      alt: ""
    },
    {
      src: theBethsMerchMobile,
      alt: ""
    },
    {
      src: theBethsContactMobile,
      alt: ""
    }
  ],
  companyDescription:
    "The Beths are an award-winning indie pop band based in Auckland, New Zealand.",
  info:
    ["Designed and implemented a website for the Beths. This was the first proper project I took on early in my coding career.", "I noticed that a friend's band's website needed a redesign and decided it would be a good way to develop my web development skills."],
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
  modifier: "waldour-studios",
  path: "waldour-studios",
  category: "web",
  jobType: "Freelance",
  jobYear: "2019",
  github: "https://github.com/garyunyoung",
  previewImage: { src: waldourStudioHomePage, alt: "Waldour Studio Home Page" },
  excerpt:
    "Wardour Studios is a podcast recording studio and production compnay based in Central London.",
  images: [{ src: waldourStudioHomePage, alt: "Waldour Studio Home Page" }],
  companyDescription:
    "Wardour Studios specialises in podcast production and voiceover recording in a comfortable, creative and professional environment.",
  info:
    ["Designed and implemented a website for the Waldour Studios as a Freelance Project"],
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
  title: "Splore",
  modifier: "splore",
  path: "splore-2018",
  category: "pr",
  jobType: "Intern",
  jobYear: "2018",
  github: "n/a",
  previewImage: { src: sploreBanner, alt: "splore 2018 festival banner" },
  excerpt:
    "Splore is a boutique music and arts festival situated on the shores of Tapapakanga Park.",
  images: [{ src: sploreBanner, alt: "splore 2018 festival banner" }],
  companyDescription:
    "Situated in a beguiling bay on the shores of Tapapakanga Park, Splore is a boutique music and arts festival like no other. An entertainment extravaganza, an unforgettable dress up party, three nights where people are invited to embrace the theme and join the mindful tribe of party animals! ",
  info:
    ["At the end of 2017 I was brought onboard as a press assistant for Splore - arguably the best music festival in New Zealand."],
  link: "http://www.splore.net/",
  displayLink: "http://www.splore.net/",
  technologies: ["Communications", "Press"],
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
    "Other general administrative tasks such as fielding media enquiries and requests."
  ]
};

export const sailCityJumpProject = {
  title: "Sail City Jump",
  modifier: "sail-city-jump",
  path: "sail-city-jump-2017",
  category: "pr",
  jobType: "Freelance",
  jobYear: "2017",
  github: "n/a",
  previewImage: {
    src: sailCityJumpBanner,
    alt: "sail city jump 2017 festival banner"
  },
  excerpt:
    "Sail City Jump was a multi-day dance event held in Auckland featuring two days of Lindy Hop, Balboa and Solo Jazz workshops and socials.",
  images: [
    { src: sailCityJumpBanner, alt: "sail city jump 2017 festival banner" }
  ],
  companyDescription:
    "Sail City Jump was the first Swing Dance Festival held in Auckland after a two year hiatus. 2017's edition featured two days of Lindy Hop, Balboa and Solo Jazz workshops for beginner to advance level dancers.",
  info:
    ["Sail City Jump was the first Swing Dance Festival held in Auckland after a two year hiatus. 2017's edition featured two days of Lindy Hop, Balboa and Solo Jazz workshops for beginner to advance level dancers, five guest teachers including three international teachers, three social parties and one night dedicated to live music - that year were be lucky to have two of Auckland's best Big Bands battle it out on the bandstand."],
  link: "n/a",
  displayLink: "n/a",
  technologies: ["Event Co-ordination", "Social Media"],
  keyFeatures: [
    "Coordinating and overseeing event logistics such as: venue hire, audio and visual hire, volunteers, bands, DJs, emcees, run sheets, set-up and pack-down.",
    "Planning event objectives, timelines and extensive task lists – delegated tasks. ",
    "Generating engagement through Facebook pages and Facebook events.",
    "Creating, collating, curating, and distributing marketing collateral. ",
    "Tracking registrations and ticket sales.",
    "Managing social media pages."
  ]
};

export const nightAtTheSavoyProject = {
  title: "Night at the Savoy",
  modifier: "night-at-the-savoy",
  path: "night-at-the-savoy-2017",
  category: "pr",
  jobType: "Freelance",
  jobYear: "2017",
  github: "n/a",
  previewImage: {
    src: nightAtTheSavoyBanner,
    alt: "Night ath the Savoy 2017 festival banner"
  },
  excerpt:
    "Night at the Savoy was a dance event organised for Swing Out Central / Gin Mill Swing celebrating 'World Lindy Hop Day.",
  images: [
    {
      src: nightAtTheSavoyBanner,
      alt: "Night ath the Savoy 2017 festival banner"
    }
  ],
  companyDescription:
    "Night at the Savoy was the first event I had organised for Swing Out Central / Gin Mill Swing - a Swing Dance school based in Auckland, New Zealand. This event focused on celebrating 'World Lindy Hop Day', a day dedicated towards the fun and charismatic sprit of a dance born out of the ballrooms of Harlem.",
  info:
    ["The event itself brought in around 200 dancers and spectators. It featured a selection of Lindy Hop performances, fun competitions, social dancing and a brief talk about the history of Lindy Hop from one of the founding member of the Lindy Hop scene in New Zealand."],
  link: "n/a",
  displayLink: "n/a",
  technologies: ["Event Co-ordination", "Social Media"],
  keyFeatures: [
    "Generating engagement through Facebook via Facebook pages and events.",
    "Coordinating and overseeing all aspects of the event including: event logistics, budgets, venue hire, audio and visual hire, volunteers, bands, DJs, emcees, set-up and pack-down.",
    "Planning event objectives, timelines and extensive task lists – delegating tasks.",
    "Tracking registrations and ticket sales.",
    "Creating, curating and distributing marketing material."
  ]
};
