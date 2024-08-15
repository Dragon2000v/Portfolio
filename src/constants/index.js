import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  express,
  sql,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  watchcharm,
  tasksproapi,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  // {
  //   title: 'React Native Developer',
  //   icon: mobile,
  // },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full-Stack Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Express',
    icon: express,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Three JS',
  //   icon: threejs,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
  {
    name: 'SQL',
    icon: sql,
  },
];

const experiences = [
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Insiders',
  //   icon: starbucks,
  //   iconBg: '#383E56',
  //   date: 'March 2020 - April 2021',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'React Native Developer',
  //   company_name: 'Tesla',
  //   icon: tesla,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2021 - Feb 2022',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#383E56',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
  //   name: 'Sara Lee',
  //   designation: 'CFO',
  //   company: 'Acme Co',
  //   image: 'https://randomuser.me/api/portraits/women/4.jpg',
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: 'Chris Brown',
  //   designation: 'COO',
  //   company: 'DEF Corp',
  //   image: 'https://randomuser.me/api/portraits/men/5.jpg',
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: 'Lisa Wang',
  //   designation: 'CTO',
  //   company: '456 Enterprises',
  //   image: 'https://randomuser.me/api/portraits/women/6.jpg',
  // },
];

const projects = [
  {
    name: 'Rent Car ',
    description:
      'This is an application for a company that provides car rental services in Ukraine. The app has three pages: the home page, the directory page, and the classifieds page.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux toolkit',
        color: 'green-text-gradient',
      },
      {
        name: 'axios',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/Dragon2000v/Car-rental',
  },
  {
    name: 'Watch Charm',
    description:
      'Luxury watch store with adaptive layout. Role: Team Lead,gallery section developer.Build project on github, check for build errors and live page performance.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: watchcharm,
    source_code_link: 'https://github.com/Dragon2000v/70-china-time',
  },
  {
    name: 'task-pro-backend',
    description:
      'Backend written to work with user and tables, repeating the functionality of Trello',
    tags: [
      {
        name: 'node.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: tasksproapi,
    source_code_link: 'https://github.com/DmytroLysachenko/task-pro-backend',
  },
];

export { services, technologies, experiences, testimonials, projects };
