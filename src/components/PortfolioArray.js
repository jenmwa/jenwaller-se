import todoMockup from '../assets/img/todo.webp';
import ketchupMockup from '../assets/img/ketchup.webp';
import donutMockup from '../assets/img/gootfrids.webp';
import tothemoonMockup from '../assets/img/tothemoon.webp';
import sleeqMockup from '../assets/img/sleeq.webp';
import cvMockup from '../assets/img/cv.webp';
import bravaMockup from '../assets/img/brava.webp';
import monroeMockup from '../assets/img/monroe.webp';

let portfolioItems = [
  {
    image: {
      img: todoMockup,
      alt: 'mockup of a javaScript todo App by Jenny Waller',
    },
    category: 'App',
    project: 'Todo App',
    description:
      'JavaScript todolist in vanilla javaScript for the course JavaScript Grundkurs. Add todos, categorize them, sort them and mark them as done.',
    frame: '',
    lang: 'javascript',
    scss: 'scss',
    extra: 'localstorage',
    website: 'https://jenmwa.github.io/todo-list/',
    github: 'https://github.com/jenmwa/todo-list',
  },
  {
    image: {
      img: ketchupMockup,
      alt: 'mockup of representation of mobile and desktop website Ketchup Bloggen',
    },
    category: 'website',
    project: 'ketchup blog',
    description:
      'From a given design, we were to code sprint a responsive, VUEjs, site. Team Assignment, course Graphical tools for interface design.',
    frame: 'Vue',
    lang: 'typescript',
    scss: 'scss',
    extra: 'figma',
    website: 'https://jenmwa.github.io/ketchupbloggen/',
    github: 'https://github.com/jenmwa/ketchupbloggen',
  },
  {
    image: {
      img: donutMockup,
      alt: 'mockup of representation of mobile and desktop website Gottfrids fantastiska munkar',
    },
    category: 'website',
    project: 'Donut Shop',
    description:
      'JS, HTML and SASS responsive site for the course JavaScript. A fictitious shop with products, shopping cart and checkout. Team assignment.',
    frame: '',
    lang: 'javascript',
    scss: 'scss',
    extra: '',
    website: 'https://jenmwa.github.io/GottfridsMunkar/',
    github: 'https://github.com/jenmwa/GottfridsMunkar',
  },
  {
    image: {
      img: tothemoonMockup,
      alt: 'mockup of representation of mobile and desktop website To The Moon',
    },
    category: 'website',
    project: 'To The Moon',
    description:
      'HTML & SASS responsive site for the course HTML/CSS. Fictive brief, assignment was to follow a given design and focus on structure and outcome.',
    frame: 'html',
    lang: '',
    scss: 'scss',
    extra: 'adobe',
    website: 'https://jenmwa.github.io/ToTheMoon/',
    github: 'https://github.com/jenmwa/ToTheMoon',
  },
  {
    image: {
      img: sleeqMockup,
      alt: 'mockup of graphics for SLEEQ hard seltzer',
    },
    category: 'web & graphic profile',
    project: 'SLEEQ',
    description:
      'Website based on a template with added HTML, CSS and JS, social media and graphic profile for startup company within the beverage section.',
    frame: 'html',
    lang: '',
    scss: 'css',
    extra: 'adobe',
    website: '',
    github: 'https://github.com/jenmwa/SLEEQ',
  },
  {
    image: {
      img: cvMockup,
      alt: 'mockup of representation of mobile and desktop website To The Moon',
    },
    category: 'website',
    project: 'portfolio',
    description:
      'Personal CVsite in HTML & SASS for the course HTML/CSS. HTML structure, different elements, use of images, responsive and A11y principles.',
    frame: 'html',
    lang: '',
    scss: 'scss',
    extra: 'adobe',
    website: 'https://jenmwa.github.io/cv-HTML-CSS/',
    github: 'https://github.com/jenmwa/cv-HTML-CSS',
  },
  {
    image: {
      img: bravaMockup,
      alt: 'mockup of representation of mobile and desktop website Bravå bemanning',
    },
    category: 'website',
    project: 'Bravå Bemanning',
    description:
      'Startup company that wanted a graphic, easy-to-navigate website. HTML template, CSS, color profile and use of stock images.',
    frame: 'html 5 template',
    lang: '',
    scss: 'css',
    extra: '',
    website: 'https://www.bravabemanning.se',
    github: 'https://github.com/jenmwa/brava-bemanning',
  },
  {
    image: {
      img: monroeMockup,
      alt: 'mockup of representation of mobile and desktop website Monroe Stainless',
    },
    category: 'website',
    project: 'Monroe Stainless',
    description:
      'Startup company in the brewery industry. Choice of web hosting, worked with wordpress and plugins, also photo & editing assignments.',
    frame: 'wordpress',
    lang: '',
    scss: '',
    extra: 'adobe',
    website: 'https://monroestainless.com',
    github: 'https://github.com/jenmwa/monroe-stainless',
  },
];
export default portfolioItems;
