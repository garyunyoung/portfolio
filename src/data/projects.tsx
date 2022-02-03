import * as ProjectImage from '../utilities/Cloudinary'
import { FILTER_ID_WEB, FILTER_ID_PR } from './constants'

interface Thumbnail {
  src: string
  alt: string
}

interface Link {
  href: string
  text: string
}

interface Image {
  src: string
  alt: string
}

interface ImageSet {
  src: string
  alt: string
  modifier: 'mobile' | 'tablet' | 'desktop'
}

interface Shared {
  id: string
  path: string
  title: string
  technologies: string[]
}

interface Tile {
  category: 'web' | 'pr'
  excerpt: string
  thumbnail: Thumbnail
}

interface Page {
  type: string
  year: string
  description: string[]
  features: string[]
  links: Link[]
  imageSets?: ImageSet[][]
  mobileImages?: Image[]
  desktopImages?: Image[]
}

interface Data {
  shared: Shared
  tile: Tile
  page: Page
}

export const stitchedData: Data = {
  shared: {
    id: 'stitched',
    path: '/projects/stitched',
    title: 'Stitched',
    technologies: [
      'Elixir',
      'Phoenix LiveView',
      'JavaScript',
      'React',
      'SCSS',
      'HTML'
    ]
  },

  tile: {
    category: FILTER_ID_WEB,
    excerpt:
      'Stitched is an eco-friendly, made to measure, curtain + blind start-up focused on redefining home interiors by using 3D visualisation, augmented reality, and machine learning.',
    thumbnail: {
      src: ProjectImage.stitchedHomepageDesktop,
      alt: 'Stitched Home Page'
    }
  },

  page: {
    type: 'Front-end developer',
    year: '2019 - 2021',
    description: [
      'I joined Stitched in 2019, where I started as a front-end intern helping with a site redesign, to becoming a valuable member of their development team tackling most of their front-end features.',
      'Stitched is based in London, United Kingdom.'
    ],
    features: [
      'Built and deployed front-end changes for a site redesign that involved custom reusable CMS components.',
      'Built the front-end using Elixir / Phoenix LiveView, JS / React, SCSS and HTML/embedded Elixir along with two senior developers.',
      'Experience with Kanban methodology, CI / CD (Google Cloud & Docker then Kubernetes)',
      'Exposed to Ruby / Ruby on Rails and Redux.',
      'Exerience with unit and integration testing.',
      'Used Git for version control.',
      'Pair programmed with senior back-end and full-stack developers.',
      'Worked closely with the UX/UI designer to implement designs created on Figma, as well as collaborating to find ways to improve user experience.',
      'Approached designs with a mobile-first and responsive methodology.',
      'Approached features with a focus on maintainable and reusable code.'
    ],
    links: [
      {
        href: 'https://www.stitched.co.uk/',
        text: 'Visit site'
      }
    ],
    imageSets: [
      [
        {
          src: ProjectImage.stitchedFabricDesktop,
          modifier: 'desktop',
          alt: ''
        },
        {
          src: ProjectImage.stitchedFabricTablet,
          modifier: 'tablet',
          alt: ''
        },
        {
          src: ProjectImage.stitchedFabricMobile,
          modifier: 'mobile',
          alt: ''
        }
      ],
      [
        {
          src: ProjectImage.stitchedCurtainsDesktop,
          modifier: 'desktop',
          alt: ''
        },
        {
          src: ProjectImage.stitchedCurtainsTablet,
          modifier: 'tablet',
          alt: ''
        },
        {
          src: ProjectImage.stitchedCurtainsMobile,
          modifier: 'mobile',
          alt: ''
        }
      ],
      [
        {
          src: ProjectImage.stitchedHomesDesktop,
          modifier: 'desktop',
          alt: ''
        },
        {
          src: ProjectImage.stitchedHomesTablet,
          modifier: 'tablet',
          alt: ''
        },
        {
          src: ProjectImage.stitchedHomesMobile,
          modifier: 'mobile',
          alt: ''
        }
      ]
    ]
  }
}

export const stitchedArData: Data = {
  shared: {
    id: 'stitched-ar',
    path: '/projects/stitched-ar',
    title: 'Stitched Ar',
    technologies: ['Swift', 'SwiftUI']
  },

  tile: {
    category: FILTER_ID_WEB,
    excerpt:
      'Stitched Ar is an augmented reality mobile application that lets users visualise and measure curtains in their own home.',
    thumbnail: {
      src: ProjectImage.stitchedArHomepage,
      alt: 'Stitched Ar Home Page'
    }
  },

  page: {
    type: 'Front-end developer',
    year: '2020',
    description: [
      'While working for Stitched I helped develop the front-end of an augmented reality app.',
      'The app allows users to visualise curtains in their home using Ar.',
      'Users are provided measurements based on the visualisation.',
      'The app also allows users to order curtains and sample fabrics using Apple Pay.',
      '* This app is only avaliable for download in the United Kingdom. See the demo links below the mobile images for an example of how the app works.'
    ],
    features: [
      'Built the front-end of the app using Swift / SwiftUI based on design provided by the UI designer.',
      'Worked closely with a senior developer while they implemented the Ar capabilites.',
      'Tested on various iOS devices and screen sizes.',
      'Challenges: No prior experience with app development.'
    ],
    links: [
      {
        href: 'https://apps.apple.com/gb/app/stitched-ar/id1461104538',
        text: 'View in app store'
      },
      {
        href: 'https://drive.google.com/file/d/1V79ak7lZGta91WAPVZhYcK4M8w3TOur3/view?usp=sharing',
        text: 'See demo'
      }
    ],
    mobileImages: [
      {
        src: ProjectImage.stitchedArMeasure,
        alt: ''
      },
      {
        src: ProjectImage.stitchedArCurtain,
        alt: ''
      },
      {
        src: ProjectImage.stitchedArConfirmMeasurements,
        alt: ''
      },
      {
        src: ProjectImage.stitchedArCheckout,
        alt: ''
      }
    ]
  }
}

export const theBethsData: Data = {
  shared: {
    id: 'the-beths',
    path: '/projects/the-beths',
    title: 'The Beths',
    technologies: ['Next.js', 'React', 'SCSS', 'HTML']
  },

  tile: {
    category: FILTER_ID_WEB,
    thumbnail: {
      src: ProjectImage.theBethsHomepageDesktop,
      alt: 'The Beths Home Page'
    },
    excerpt:
      'The Beths are an award-winning indie pop band based in Auckland, New Zealand.'
  },

  page: {
    type: 'Freelance',
    year: '2019 - Current',
    description: [
      'This was the first website I took on early in my coding journey.',
      'I noticed that the band could do with a new website and thought it would be a good way to develop and test out my newly learned web development skills.',
      '*Ongoing maintenance and design based on requests and feeback from band and management.'
    ],
    features: [
      'Designed UI/UX.',
      'Built using NextJS, Sanity.io, SCSS and Git. Deployed on Heroku.',
      'Backend is built using Sanity.io, an open-source, API-based content managenent system (CMS).',
      'Integrated Google Analytics using Google Tag Manager.',
      'Integrated Mailchimp and Songkick widgets.',
      'Added a GDPR banner that enables/disables analytics.',
      'Mobile first and responsive design.',
      'Uses Block Element Modifier (BEM) naming convention.'
    ],
    links: [
      { href: 'https://thebeths.com/', text: 'Visit site' }
    ],
    desktopImages: [
      {
        src: ProjectImage.theBethsHomepageDesktop,
        alt: 'The Beths Home Page'
      }
    ],
    mobileImages: [
      {
        src: ProjectImage.theBethsHomepageMobile,
        alt: ''
      },
      {
        src: ProjectImage.theBethsWatchMobile,
        alt: ''
      },
      {
        src: ProjectImage.theBethsMerchMobile,
        alt: ''
      },
      {
        src: ProjectImage.theBethsContactMobile,
        alt: ''
      }
    ]
  }
}

export const waldourStudiosData: Data = {
  shared: {
    id: 'waldour-studios',
    path: '/projects/waldour-studios',
    title: 'Waldour Studios',
    technologies: ['WordPress', 'PHP', 'SCSS', 'HTML']
  },

  tile: {
    category: FILTER_ID_WEB,
    thumbnail: {
      src: ProjectImage.waldourHomepageDesktop,
      alt: 'Waldour Studio Home Page'
    },
    excerpt:
      'Wardour Studios is a podcast recording studio and production company based in Central London.'
  },

  page: {
    type: 'Freelance',
    year: '2019',
    description: [
      'In 2019 I helped develop a custom WordPress theme and page templates for Waldour Studios.',
      'I was initially brought on to touch-up existing code, that then developed into a site refactor and design update.'
    ],
    features: [
      'Built custom theme and page templates based on a design provided by a UI designer.',
      'Build using PHP, SCSS, and Git for version control.',
      'Integrated with Advance Custom Fields - a free plugin - to create custom reusable PHP components.',
      'Mobile first and responsive.'
    ],
    links: [
      {
        href: 'http://wardourstudios.co.uk/',
        text: 'Visit site'
      }
    ],
    imageSets: [
      [
        {
          src: ProjectImage.waldourWhatWeDoDesktop,
          modifier: 'desktop',
          alt: ''
        },
        {
          src: ProjectImage.waldourWhatWeDoTablet,
          modifier: 'tablet',
          alt: ''
        },
        {
          src: ProjectImage.waldourWhatWeDoMobile,
          modifier: 'mobile',
          alt: ''
        }
      ]
    ]
  }
}

export const portfolioData: Data = {
  shared: {
    id: 'portfolio',
    path: '/projects/portfolio',
    title: 'Portfolio',
    technologies: ['React', 'JavaScript', 'SCSS', 'HTML']
  },

  tile: {
    category: FILTER_ID_WEB,
    thumbnail: {
      src: ProjectImage.portfolioHomepageDesktop,
      alt: 'Portfolio Home Page'
    },
    excerpt:
      "A bit meta, but I'm going to put my portfolio here as a project (an ongoing project)."
  },

  page: {
    type: 'Project',
    year: '2021 - Current',
    description: [
      'Having not updated this site in a while I noticed that the usability for both mobile and desktop could be improved.',
      'I plan on continuing to work on this site as a way to practise new and old skills.'
    ],
    features: [
      'Built using React, HTML, and SCSS. Deployed on Heroku.',
      'Designed UI/UX with accessibly in mind.',
      'Single Page Application using React Router.',
      'Uses Block Element Modifier (BEM) naming convention.',
      'Reusable and modular components.',
      'Mobile first and responsive design.',
      'Optimised images using Cloudinary.',
      "Uses The A11Y Project's checklist as a guideline.",
      "Tools used: Axe DevTools for accessibility and Chrome's Lighthouse for performance.",
      'Key design features: readable font size, removed unnecessary capitalisation, styled focus states, font colour-contrast, uses plain language.'
    ],
    links: [
      {
        href: 'https://github.com/garyunyoung/portfolio',
        text: 'See code'
      }
    ]
  }
}

export const sploreData: Data = {
  shared: {
    id: 'splore',
    path: '/projects/splore-2018',
    title: 'Splore',
    technologies: ['Communications', 'Press']
  },

  tile: {
    category: FILTER_ID_PR,
    thumbnail: {
      src: ProjectImage.sploreBanner,
      alt: 'splore 2018 festival banner'
    },
    excerpt:
      'Splore is a boutique music and arts festival situated on the shores of Tapapakanga Park.'
  },

  page: {
    type: 'Intern',
    year: '2018',
    description: [
      'At the end of 2017 I was brought onboard as a press assistant for Splore - arguably the best music festival in New Zealand.'
    ],
    features: [
      'Supported the Head of PR.',
      'Coordinated artist interviews during the lead-up to and during the festival.',
      'Drafted and distributed press kits.',
      'Pitched interviews and story ideas to media.',
      'Compiled media reports.',
      'Buit and maintaned targeted media lists for mail-outs and pitches.',
      'Researched media opportunities.',
      'General administrative tasks'
    ],
    links: [
      { href: 'http://www.splore.net/', text: 'Visit site' }
    ],
    desktopImages: [
      {
        src: ProjectImage.sploreBanner,
        alt: 'splore 2018 festival banner'
      }
    ]
  }
}

export const sailCityJumpData: Data = {
  shared: {
    id: 'sail-city-jump',
    path: '/projects/sail-city-jump-2017',
    title: 'Sail City Jump',
    technologies: ['Event Coordination', 'Social Media']
  },

  tile: {
    category: FILTER_ID_PR,
    thumbnail: {
      src: ProjectImage.sailCityJumpBanner,
      alt: 'sail city jump 2017 festival banner'
    },
    excerpt:
      'Sail City Jump is a multi-day dance event featuring Lindy Hop, Balboa and Solo Jazz workshops and dance socials.'
  },

  page: {
    type: 'Freelance',
    year: '2017',
    description: [
      'Sail City Jump is a community based Swing Dance Festival held in Auckland, New Zealand.',
      "2017's edition featured Lindy Hop, Balboa and Solo Jazz workshops, international guest teachers and social events with one night dedicated to live music.",
      'That year we were lucky to have two Big Bands (Tuxedo Swing and Queen City Big Band) battle it out for us on the bandstand.'
    ],
    features: [
      'Planned event objectives, timelines and task lists.',
      'Coordinated event logistics such as: venue hire, audio and visual hire, volunteers, bands, DJs, emcees, run sheets, set-up and pack-down.',
      'Generated social media schedules and engagement through Facebook pages and events.',
      'Curated and distributed marketing collateral both digital and physical.',
      'Tracked registrations and ticket sales.'
    ],
    links: [
      {
        href: 'https://www.facebook.com/events/2039384882959969/?active_tab=discussion',
        text: 'See event page'
      }
    ],
    desktopImages: [
      {
        src: ProjectImage.sailCityJumpBanner,
        alt: 'sail city jump 2017 festival banner'
      }
    ]
  }
}

export const nightAtTheSavoyData: Data = {
  shared: {
    id: 'night-at-the-savoy',
    path: '/projects/night-at-the-savoy-2017',
    title: 'Night at the Savoy',
    technologies: ['Event Coordination', 'Social Media']
  },

  tile: {
    category: FILTER_ID_PR,
    thumbnail: {
      src: ProjectImage.nightAtTheSavoyBanner,
      alt: 'Night at the Savoy 2017 festival banner'
    },
    excerpt:
      'Night at the Savoy was a dance event organised for Swing Out Central / Gin Mill Swing celebrating World Lindy Hop Day.'
  },

  page: {
    type: 'Freelance',
    year: '2017',
    description: [
      'Night at the Savoy was the first event I had organised for Swing Out Central / Gin Mill Swing - a Swing Dance school based in Auckland, New Zealand',
      'The event itself brought in around 200 dancers and spelinktors.',
      "It featured a selection of Lindy Hop performances, fun competitions, social dancing and a talk about the history of Lindy Hop from one of the founding members of the New Zealand's Lindy Hop scene"
    ],
    features: [
      'Planned event objectives, timelines and task lists.',
      'Coordinated and oversaw event aspects such as: logistics, budgets, venue hire, audio and visual hire, volunteers, bands, DJs, emcees, set-up and pack-down.',
      'Generated social media schedules and engagement through Facebook pages and events.',
      'Curated and distributed marketing material.',
      'Tracked registrations and ticket sales.'
    ],
    links: [
      {
        href: 'https://www.facebook.com/events/220801418420563',
        text: 'See event page'
      }
    ],
    desktopImages: [
      {
        src: ProjectImage.nightAtTheSavoyBanner,
        alt: 'Night at the Savoy 2017 festival banner'
      }
    ]
  }
}
