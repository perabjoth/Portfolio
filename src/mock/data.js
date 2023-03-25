import { nanoid } from 'nanoid';
import {isMobile} from 'react-device-detect';

const mobileString = isMobile ? 'Mobile' : '';
// HEAD DATA
export const headData = {
  title: 'Perabjoth Singh Bajwa', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Why are you looking me up? Well, since you\'re already here, come and visit my site.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Mr',
  name: 'Perabjoth Singh Bajwa',
  subtitle: "The software developer you need.",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'Perabjoth Singh Bajwa Software Developer.jpg', // e.g:
  paragraphOne: 'Experienced Implementation Consultant with a demonstrated history of working in the computer software industry.',
  paragraphTwo: 'Skilled in Web Development, Databases, Computer Science, and Communication.',
  paragraphThree: 'I am passionate about learning new technologies as well as making them run as fast as possible.',
  resume: 'https://www.dropbox.com/s/cp62qbk8eebs85f/Perabjoth%20Singh%20Bajwa.pdf?dl=1', // if no resume, the button will not show up
  aboutButton: 'Download Resume',
  url: 'https://www.linkedin.com/in/perabjoth'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: `TicTacToe${mobileString}.PNG`,
    title: 'React Tic Tac Toe',
    info: 'This was my first dive into learning React',
    info2: 'I followed the basic React tutorial found at https://reactjs.org/tutorial/tutorial.html. After completing the basic tutorial, I carried on adding features and adjusting the game to learn more about React.',
    url: 'https://perabjoth.github.io/TicTacToe/',
    repo: 'https://github.com/perabjoth/TicTacToe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: `REVVSuite${mobileString}.png`,
    title: 'REVV Suite (Crypto P2E)',
    info: 'After my successful endeavor to build a React App, I decided to pursue something more challenging.',
    info2: 'This is where I built a suite of tools for a crypto play to earn game called REVV Racing. This uses react along with mongoDB and a server-less backend for data retrieval and few APIs.',
    url: 'https://perabjoth.github.io/REVV-Suite/',
    repo: 'https://github.com/perabjoth/REVV-Suite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: `phpBBForum${mobileString}.PNG`,
    title: 'phpBB Forum',
    info: 'In addition to regular software development. I also delve into numerous CMS systems such as WordPress, SquareSpace...etc.',
    info2: 'A lesser known option is phpBB which is forum software. Here you have a completely customized and optimized version.',
    url: 'https://www.400zforum.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
  url: 'https://www.linkedin.com/in/perabjoth',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/perabjoth',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/perabjoth',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
