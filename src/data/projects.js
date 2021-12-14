import * as Image from "../utilities/Cloudinary";
import { FILTER_ID_WEB, FILTER_ID_PR } from "./constants";

export const stitchedProjectData = {
  title: "Stitched",
  modifier: "stitched",
  technologies: ["Elixir", "Phoenix LiveView", "JavaScript", "React", "SCSS", "HTML"],

  projectTile: {
    path: "projects/stitched",
    filterCategory: FILTER_ID_WEB,
    excerpt:
      "Stitched is an eco-friendly, made to measure, curtain + blind start-up focused on redefining home interiors by using 3D visualisation, augmented reality, and machine learning.",
    thumbnail: { src: Image.stitchedHomepageDesktop, alt: "Stitched Home Page" }
  },

  projectPage: {
    projectType: "Front-end developer",
    projectYear: "2019 - 2021",
    imageSets: [
      [
        {
          src: Image.stitchedFabricDesktop,
          modifier: "desktop",
          alt: ""
        },
        {
          src: Image.stitchedFabricTablet,
          modifier: "tablet",
          alt: ""
        },
        {
          src: Image.stitchedFabricMobile,
          modifier: "mobile",
          alt: ""
        }
      ],
      [
        {
          src: Image.stitchedCurtainsDesktop,
          modifier: "desktop",
          alt: ""
        },
        {
          src: Image.stitchedCurtainsTablet,
          modifier: "tablet",
          alt: ""
        },
        {
          src: Image.stitchedCurtainsMobile,
          modifier: "mobile",
          alt: ""
        }
      ],
      [
        {
          src: Image.stitchedHomesDesktop,
          modifier: "desktop",
          alt: ""
        },
        {
          src: Image.stitchedHomesTablet,
          modifier: "tablet",
          alt: ""
        },
        {
          src: Image.stitchedHomesMobile,
          modifier: "mobile",
          alt: ""
        }
      ]
    ],
    projectDescription:
      [
        "I joined Stitched in 2019, where I started as a front-end intern helping with a site redesign, to becoming a valuable member of their development team tackling most of their front-end features.",
        "Stitched is based in London, United Kingdom."
      ],
    links: [
      { url: "https://www.stitched.co.uk/", text: "Visit site" }
    ],
    keyFeatures: [
      "Built and deployed front-end changes for a site redesign that involved custom reusable CMS components.",
      "Built the front-end using Elixir / Phoenix LiveView, JS / React, SCSS and HTML/embedded Elixir along with two senior developers.",
      "Experience with Kanban methodology, CI / CD (Google Cloud & Docker then Kubernetes)",
      "Exposed to Ruby / Ruby on Rails and Redux.",
      "Exerience with unit and integration testing.",
      "Used Git for version control.",
      "Pair programmed with senior back-end and full-stack developers.",
      "Worked closely with the UX/UI designer to implement designs created on Figma, as well as collaborating to find ways to improve user experience.",
      "Approached designs with a mobile-first and responsive methodology.",
      "Approached features with a focus on maintainable and reusable code."
    ]
  }
};

export const stitchedArProjectData = {
  title: "Stitched Ar",
  modifier: "stitched-ar",
  technologies: ["Swift", "SwiftUI"],

  projectTile: {
    path: "projects/stitched-ar",
    filterCategory: FILTER_ID_WEB,
    excerpt: "Stitched Ar is an augmented reality mobile application that lets users visualise and measure curtains in their own home.",
    thumbnail: { src: Image.stitchedArHomepage, alt: "Stitched Ar Home Page" }

  },

  projectPage: {
    projectType: "Front-end developer",
    projectYear: "2020",
    mobileImages: [
      {
        src: Image.stitchedArMeasure,
        alt: ""
      },
      {
        src: Image.stitchedArCurtain,
        alt: ""
      },
      {
        src: Image.stitchedArConfirmMeasurements,
        alt: ""
      },
      {
        src: Image.stitchedArCheckout,
        alt: ""
      }
    ],
    projectDescription:
      [
        "While working for Stitched I helped develop the front-end of an augmented reality app.",
        "The app allows users to visualise curtains in their home using Ar.",
        "Users are provided measurements based on the visualisation.",
        "The app also allows users to order curtains and sample fabrics using Apple Pay.",
        "* This app is only avaliable for download in the United Kingdom. See the demo links below the mobile images for an example of how the app works."
      ],
    links: [
      { url: "https://apps.apple.com/gb/app/stitched-ar/id1461104538", text: 'View in app store' },
      { url: "https://drive.google.com/file/d/1V79ak7lZGta91WAPVZhYcK4M8w3TOur3/view?usp=sharing", text: 'See demo' }
    ],
    keyFeatures: [
      "Built the front-end of the app using Swift / SwiftUI based on design provided by the UI designer.",
      "Worked closely with a senior developer while they implemented the Ar capabilites.",
      "Tested on various iOS devices and screen sizes.",
      "Challenges: No prior experience with app development."
    ]
  }
};

export const bethsProjectData = {
  title: "The Beths",
  modifier: "the-beths",
  technologies: ["Next.js", "React", "SCSS", "HTML"],

  projectTile: {
    path: "projects/the-beths",
    filterCategory: FILTER_ID_WEB,
    thumbnail: { src: Image.theBethsHomepageDesktop, alt: "The Beths Home Page" },
    excerpt:
      "The Beths are an award-winning indie pop band based in Auckland, New Zealand.",
  },

  projectPage: {
    projectType: "Freelance",
    projectYear: "2019",

    images: [{ src: Image.theBethsHomepageDesktop, alt: "The Beths Home Page" }],
    mobileImages: [
      {
        src: Image.theBethsHomepageMobile,
        alt: ""
      },
      {
        src: Image.theBethsWatchMobile,
        alt: ""
      },
      {
        src: Image.theBethsMerchMobile,
        alt: ""
      },
      {
        src: Image.theBethsContactMobile,
        alt: ""
      }
    ],
    projectDescription:
      [
        "This was the first website I took on early in my coding journey.",
        "I noticed that the band could do with a new website and thought it would be a good way to develop and test out my newly learned web development skills."
      ],
    links: [{ url: "https://thebeths.com/", text: "Visit site" }],
    keyFeatures: [
      "Designed UI/UX.",
      "Built using NextJS, SCSS and Git. Deployed on Heroku.",
      "Uses Block Element Modifier (BEM) naming convention.",
      "Integrated Google Analytics using Google Tag Manager.",
      "Integrated Mailchimp and Songkick widgets.",
      "Added a GDPR banner that enables/disables analytics.",
      "Ongoing maintenance and design based on requests and feeback from band and management.",
      "Mobile first and responsive design."
    ]

  },
};

export const waldourProjectData = {
  title: "Waldour Studios",
  modifier: "waldour-studios",
  technologies: ["WordPress", "PHP", "SCSS", "HTML"],

  projectTile: {
    path: "projects/waldour-studios",
    filterCategory: FILTER_ID_WEB,
    thumbnail: { src: Image.waldourHomepageDesktop, alt: "Waldour Studio Home Page" },
    excerpt:
      "Wardour Studios is a podcast recording studio and production company based in Central London.",
  },

  projectPage: {
    projectType: "Freelance",
    projectYear: "2019",

    imageSets: [
      [
        {
          src: Image.waldourWhatWeDoDesktop,
          modifier: "desktop",
          alt: ""
        },
        {
          src: Image.waldourWhatWeDoTablet,
          modifier: "tablet",
          alt: ""
        },
        {
          src: Image.waldourWhatWeDoMobile,
          modifier: "mobile",
          alt: ""
        }
      ]
    ],
    projectDescription:
      ["In 2019 I helped develop a custom WordPress theme and page templates for Waldour Studios.", "I was initially brought on to touch-up existing code, that then developed into a site refactor and design update."],
    links: [{ url: "https://wardourstudios.co.uk/", text: "Visit site" }],
    keyFeatures: [
      "Built custom theme and page templates based on a design provided by a UI designer.",
      "Build using PHP, SCSS, and Git for version control.",
      "Integrated with Advance Custom Fields - a free plugin - to create custom reusable PHP components.",
      "Mobile first and responsive."
    ]

  },
};

export const portfolioProjectData = {
  title: "Portfolio",
  modifier: "portfolio",
  technologies: ["React", "JavaScript", "SCSS", "HTML"],

  projectTile: {
    path: "projects/portfolio",
    filterCategory: FILTER_ID_WEB,
    thumbnail: { src: Image.portfolioHomepageDesktop, alt: "Portfolio Home Page" },
    excerpt:
      "A bit meta, but I'm going to put my portfolio here as a project (an ongoing project).",
  },

  projectPage: {
    projectType: "Project",
    projectYear: "2021",
    imageSets: [],
    projectDescription:
      [
        "Having not updated this site in a while I noticed that the usability for both mobile and desktop could be improved.",
        "I plan on continuing to work on this site as a way to practise new and old skills."],
    links: [{ url: "https://github.com/garyunyoung/portfolio", text: "See code" }],
    keyFeatures: [
      "Built using React, HTML, and SCSS. Deployed on Heroku.",
      "Designed UI/UX with accessibly in mind.",
      "Single Page Application using React Router.",
      "Uses Block Element Modifier (BEM) naming convention.",
      "Reusable and modular components.",
      "Mobile first and responsive design.",
      "Optimised images using Cloudinary.",
      "Uses The A11Y Project's checklist as a guideline.",
      "Tools used: Axe DevTools for accessibility and Chrome's Lighthouse for performance.",
      "Key design features: readable font size, removed unnecessary capitalisation, styled focus states, font colour-contrast, uses plain language."
    ]
  }
};

export const sploreProjectData = {
  title: "Splore",
  modifier: "splore",
  technologies: ["Communications", "Press"],

  projectTile: {
    path: "projects/splore-2018",
    filterCategory: FILTER_ID_PR,
    thumbnail: { src: Image.sploreBanner, alt: "splore 2018 festival banner" },
    excerpt:
      "Splore is a boutique music and arts festival situated on the shores of Tapapakanga Park.",
  },

  projectPage: {
    projectType: "Intern",
    projectYear: "2018",
    images: [{ src: Image.sploreBanner, alt: "splore 2018 festival banner" }],
    projectDescription:
      ["At the end of 2017 I was brought onboard as a press assistant for Splore - arguably the best music festival in New Zealand."],
    links: [{ url: "http://www.splore.net/", text: "Visit site" }],
    keyFeatures: [
      "Supported the Head of PR.",
      "Coordinated artist interviews during the lead-up to and during the festival.",
      "Drafted and distributed press kits.",
      "Pitched interviews and story ideas to media.",
      "Compiled media reports.",
      "Buit and maintaned targeted media lists for mail-outs and pitches.",
      "Researched media opportunities.",
      "General administrative tasks"
    ]
  }
};

export const sailCityJumpProjectData = {
  title: "Sail City Jump",
  modifier: "sail-city-jump",
  technologies: ["Event Coordination", "Social Media"],

  projectTile: {
    path: "projects/sail-city-jump-2017",
    filterCategory: FILTER_ID_PR,
    thumbnail: {
      src: Image.sailCityJumpBanner,
      alt: "sail city jump 2017 festival banner"
    },
    excerpt:
      "Sail City Jump is a multi-day dance event featuring Lindy Hop, Balboa and Solo Jazz workshops and dance socials.",
  },

  projectPage: {
    projectType: "Freelance",
    projectYear: "2017",
    images: [
      { src: Image.sailCityJumpBanner, alt: "sail city jump 2017 festival banner" }
    ],
    projectDescription:
      [
        "Sail City Jump is a community based Swing Dance Festival held in Auckland, New Zealand.",
        "2017's edition featured Lindy Hop, Balboa and Solo Jazz workshops, international guest teachers and social events with one night dedicated to live music.",
        "That year we were lucky to have two Big Bands (Tuxedo Swing and Queen City Big Band) battle it out for us on the bandstand."
      ],
    links: [{ url: "https://www.facebook.com/events/2039384882959969/?active_tab=discussion", text: "See event page" }],
    keyFeatures: [
      "Planned event objectives, timelines and task lists.",
      "Coordinated event logistics such as: venue hire, audio and visual hire, volunteers, bands, DJs, emcees, run sheets, set-up and pack-down.",
      "Generated social media schedules and engagement through Facebook pages and events.",
      "Curated and distributed marketing collateral both digital and physical.",
      "Tracked registrations and ticket sales.",
    ]
  }
};

export const nightAtTheSavoyProjectData = {
  title: "Night at the Savoy",
  modifier: "night-at-the-savoy",
  technologies: ["Event Coordination", "Social Media"],

  projectTile: {
    path: "projects/night-at-the-savoy-2017",
    filterCategory: FILTER_ID_PR,
    thumbnail: {
      src: Image.nightAtTheSavoyBanner,
      alt: "Night at the Savoy 2017 festival banner"
    },
    excerpt:
      "Night at the Savoy was a dance event organised for Swing Out Central / Gin Mill Swing celebrating World Lindy Hop Day.",
  },

  projectPage: {
    projectType: "Freelance",
    projectYear: "2017",
    images: [
      {
        src: Image.nightAtTheSavoyBanner,
        alt: "Night at the Savoy 2017 festival banner"
      }
    ],
    projectDescription:
      [
        "Night at the Savoy was the first event I had organised for Swing Out Central / Gin Mill Swing - a Swing Dance school based in Auckland, New Zealand",
        "The event itself brought in around 200 dancers and spectators.",
        "It featured a selection of Lindy Hop performances, fun competitions, social dancing and a talk about the history of Lindy Hop from one of the founding members of the New Zealand's Lindy Hop scene"],
    links: [
      { url: "https://www.facebook.com/events/220801418420563", text: 'See event page' }
    ],
    keyFeatures: [
      "Planned event objectives, timelines and task lists.",
      "Coordinated and oversaw event aspects such as: logistics, budgets, venue hire, audio and visual hire, volunteers, bands, DJs, emcees, set-up and pack-down.",
      "Generated social media schedules and engagement through Facebook pages and events.",
      "Curated and distributed marketing material.",
      "Tracked registrations and ticket sales."
    ]
  }
};
