import * as Image from "./utilities/Cloudinary";

export const stitchedProject = {
  title: "Stitched",
  modifier: "stitched",
  path: "stitched",
  category: "web",
  jobType: "Front-end Developer",
  jobYear: "2019 - 2021",
  github: "n/a",
  previewImage: { src: Image.stitchedHomepageDesktop, alt: "Stitched Home Page" },
  excerpt:
    "Stitched is an eco-friendly, made to measure, curtain + blind start-up focused on redefining home interiors by using 3D visualisation, augmented reality, and machine learning.",
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
  companyDescription:
    "Stitched is an eco-friendly, made to measure, curtain + blind start-up focused on redefining home interiors by using 3D visualisation, augmented reality, and machine learning.",
  info:
    [
      "In 2019 I joined Stitched, interning as a front-end developer which then lead to a full-time contract.",
      "I was brought on to help with their site redesign but then took on other front-end features.",
      "Stitched is based in London, United Kingdom."
    ],
  links: [
    { url: "https://www.stitched.co.uk/", text: "Visit site" }
  ],
  technologies: ["Elixir", "Phoenix LiveView", "JavaScript", "React", "SCSS", "HTML"],
  keyFeatures: [
    "Built and deployed front-end changes for a site redesign that involved custom reusable CMS components.",
    "Built the front-end using Elixir / Phoenix LiveView, JS / React, SCSS and HTML/embedded Elixir along with two senior developers.",
    "Experience with Kanban methodology, CI / CD (Google Cloud & Docker then Kubernetes)",
    "Exposed to Ruby / Ruby on Rails, Redux, and unit/integration testing.",
    "Used Git for version control.",
    "Pair programmed with senior back-end and full-stack developers.",
    "Worked closely with the UX/UI designer to implement designs created on Figma, as well as collaborating to find ways to improve user experience.",
    "Approached designs with a mobile-first and responsive methodology.",
    "Approached features with a focus on maintainable and reusable code."
  ]
};

export const stitchedARProject = {
  title: "Stitched AR",
  modifier: "stitched-ar",
  path: "stitched-ar",
  category: "web",
  jobType: "Front-end Developer",
  jobYear: "2020",
  github: "n/a",
  previewImage: { src: Image.stitchedARHomepage, alt: "Stitched AR Home Page" },
  excerpt: "Stitched AR is an augmented reality mobile application that lets users visualise and measure curtains in their own home.",
  mobileImages: [
    {
      src: Image.stitchedARMeasure,
      alt: ""
    },
    {
      src: Image.stitchedARCurtain,
      alt: ""
    },
    {
      src: Image.stitchedARConfirmMeasurements,
      alt: ""
    },
    {
      src: Image.stitchedARCheckout,
      alt: ""
    }
  ],
  companyDescription:
    "Stitched is an eco-friendly, made to measure, curtain + blind start-up focused on redefining home interiors by using 3D visualisation, augmented reality, and machine learning.",
  info:
    [
      "While working for Stitched I helped develop the front-end of an augmented reality app.",
      "The app allows users to visualise curtains in their home using AR.",
      "Users are provided measurements based on the visualisation.",
      "The app also allows users to order curtains and sample fabrics using Apple Pay.",
      "* This app is only avaliable for download in the United Kingdom. See the demo links below the mobile images for an example of how the app works."
    ],
  links: [
    { url: "https://apps.apple.com/gb/app/stitched-ar/id1461104538", text: 'View in app store' },
    { url: "https://drive.google.com/file/d/1V79ak7lZGta91WAPVZhYcK4M8w3TOur3/view?usp=sharing", text: 'See demo' }
  ],
  technologies: ["Swift", "SwiftUI"],
  keyFeatures: [
    "Built the front-end of the app using Swift / SwiftUI based on design provided by the UI designer.",
    "Worked closely with a senior developer while they implemented the AR capabilites.",
    "Tested on various iOS devices and screen sizes.",
    "Challenges: No prior experience with app development."
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
  previewImage: { src: Image.theBethsHomepageDesktop, alt: "The Beths Home Page" },
  excerpt:
    "The Beths are an award-winning indie pop band based in Auckland, New Zealand.",
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
  companyDescription:
    "The Beths are an award-winning indie pop band based in Auckland, New Zealand.",
  info:
    [
      "This was the first website I took on early in my coding journey.",
      "I noticed that the band could do with a new website and thought it would be a good way to develop and test out my newly learned web development skills."
    ],
  links: [{ url: "https://thebeths.com/", text: "Visit site" }],
  technologies: ["Next.js", "React", "SCSS", "HTML"],
  keyFeatures: [
    "Designed UI/UX.",
    "Built using NextJS, SCSS and Git. Deployed on Heroku.",
    "Integrated Google Analytics using Google Tag Manager.",
    "Added a GDPR banner that enables/disables analytics.",
    "Integrated Mailchimp and Songkick widgets.",
    "Ongoing maintenance and design based on requests and feeback from band and management.",
    "Mobile first and responsive."
  ]
};

export const waldourProject = {
  title: "Waldour Studios",
  modifier: "waldour-studios",
  path: "waldour-studios",
  category: "web",
  jobType: "Freelance",
  jobYear: "2019",
  github: "https://github.com/garyunyoung",
  previewImage: { src: Image.waldourHomepageDesktop, alt: "Waldour Studio Home Page" },
  excerpt:
    "Wardour Studios is a podcast recording studio and production company based in Central London.",
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
  companyDescription:
    "Wardour Studios specialises in podcast production and voiceover recording in a comfortable, creative and professional environment.",
  info:
    ["In 2019 I helped develop a custom WordPress theme and page templates for Waldour Studios.", "I was initially brought on to touch-up existing code, that then developed into a site refactor and design update."],
  links: [{ url: "https://wardourstudios.co.uk/", text: "Visit site" }],
  technologies: ["WordPress", "PHP", "SCSS", "HTML"],
  keyFeatures: [
    "Built custom theme and page templates based on a design provided by a UI designer.",
    "Build using PHP, SCSS, and Git for version control.",
    "Integrated with Advance Custom Fields - a free plugin - to create custom reusable PHP components.",
    "Mobile first and responsive."
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
  previewImage: { src: Image.sploreBanner, alt: "splore 2018 festival banner" },
  excerpt:
    "Splore is a boutique music and arts festival situated on the shores of Tapapakanga Park.",
  images: [{ src: Image.sploreBanner, alt: "splore 2018 festival banner" }],
  companyDescription:
    "Situated in a beguiling bay on the shores of Tapapakanga Park, Splore is a boutique music and arts festival like no other. An entertainment extravaganza, an unforgettable dress up party, three nights where people are invited to embrace the theme and join the mindful tribe of party animals! ",
  info:
    ["At the end of 2017 I was brought onboard as a press assistant for Splore - arguably the best music festival in New Zealand."],
  links: [{ url: "http://www.splore.net/", text: "Visit site" }],
  technologies: ["Communications", "Press"],
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
    src: Image.sailCityJumpBanner,
    alt: "sail city jump 2017 festival banner"
  },
  excerpt:
    "Sail City Jump is a multi-day dance event featuring Lindy Hop, Balboa and Solo Jazz workshops and dance socials.",
  images: [
    { src: Image.sailCityJumpBanner, alt: "sail city jump 2017 festival banner" }
  ],
  companyDescription:
    "Sail City Jump was the first Swing Dance Festival held in Auckland after a two year hiatus. 2017's edition featured two days of Lindy Hop, Balboa and Solo Jazz workshops for beginner to advance level dancers.",
  info:
    [
      "Sail City Jump is a community based Swing Dance Festival held in Auckland, New Zealand.",
      "2017's edition featured Lindy Hop, Balboa and Solo Jazz workshops, international guest teachers and social events with one night dedicated to live music.",
      "That year we were lucky to have two Big Bands (Tuxedo Swing and Queen City Big Band) battle it out for us on the bandstand."
    ],
  links: [{ url: "https://www.facebook.com/events/2039384882959969/?active_tab=discussion", text: "See event page" }],
  technologies: ["Event Coordination", "Social Media"],
  keyFeatures: [
    "Planned event objectives, timelines and task lists.",
    "Coordinated event logistics such as: venue hire, audio and visual hire, volunteers, bands, DJs, emcees, run sheets, set-up and pack-down.",
    "Generated social media schedules and engagement through Facebook pages and events.",
    "Curated and distributed marketing collateral both digital and physical.",
    "Tracked registrations and ticket sales.",
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
    src: Image.nightAtTheSavoyBanner,
    alt: "Night at the Savoy 2017 festival banner"
  },
  excerpt:
    "Night at the Savoy was a dance event organised for Swing Out Central / Gin Mill Swing celebrating World Lindy Hop Day.",
  images: [
    {
      src: Image.nightAtTheSavoyBanner,
      alt: "Night at the Savoy 2017 festival banner"
    }
  ],
  companyDescription:
    "Night at the Savoy was the first event I had organised for Swing Out Central / Gin Mill Swing - a Swing Dance school based in Auckland, New Zealand. This event focused on celebrating 'World Lindy Hop Day', a day dedicated towards the fun and charismatic sprit of a dance born out of the ballrooms of Harlem.",
  info:
    [
      "Night at the Savoy was the first event I had organised for Swing Out Central / Gin Mill Swing - a Swing Dance school based in Auckland, New Zealand",
      "The event itself brought in around 200 dancers and spectators.",
      "It featured a selection of Lindy Hop performances, fun competitions, social dancing and a talk about the history of Lindy Hop from one of the founding members of the New Zealand's Lindy Hop scene"],
  links: [
    { url: "https://www.facebook.com/events/220801418420563", text: 'See event page' }
  ],
  technologies: ["Event Coordination", "Social Media"],
  keyFeatures: [
    "Planned event objectives, timelines and task lists.",
    "Coordinated and oversaw event aspects such as: logistics, budgets, venue hire, audio and visual hire, volunteers, bands, DJs, emcees, set-up and pack-down.",
    "Generated social media schedules and engagement through Facebook pages and events.",
    "Curated and distributed marketing material.",
    "Tracked registrations and ticket sales."
  ]
};
