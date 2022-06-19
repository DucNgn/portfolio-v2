/* eslint-disable no-irregular-whitespace */
/* eslint-disable arrow-body-style */
import { navigate } from 'gatsby';
export default {
  commands: {
    echo: {
      description: 'Print the given text to the console',
      usage: 'echo <text>',
      fn: (...args) => args.join(' '),
    },
    about: {
      description: 'About Me',
      usage: '',
      fn: () =>
        'About Duc:\n---\n- Software / Data Engineer\n- Problem Solver\n- Software Internships count: 4\n- Dog Person 🐶',
    },
    edu: {
      description: 'My education',
      usage: '',
      fn: () =>
        '---\nBachelor degree of Science -- Computer Science (COOP) | Concordia University\n',
    },
    github: {
      description: 'Open my GitHub Profile',
      usage: '',
      fn: () => {
        window.open('https://github.com/DucNgn', '_blank');
        return 'opening github account...';
      },
    },
    linkedin: {
      description: 'Open my Linkedin Profile',
      usage: '',
      fn: () => {
        window.open('https://www.linkedin.com/in/ductringn', '_blank');
        return 'opening linkedin account...';
      },
    },
    focus: {
      description: 'My main focus right now',
      usage: '',
      fn: () =>
        'My main focuses right now:\n---\n- Build a distributed data crawling system as part of my internship at DRW\n- Enjoy nice Montreal summer\n- Learn GoLang (serious commitment this time)\n- Make more memes',
    },
    interests: {
      description: 'My interests',
      usage: '',
      fn: () => `My interests are:\n---\n
                - Algorithm & Data Structures         | I'm a problem solver at the core.
                - Software Development Practices      | I believe good software practices save hours or even days of work.
                - System Design & Architecture        | I'm fascinated by stuff like how Netflix scales their system for millions of users at the same time.
                - Mentoring                           | I love helping folks in tech! In the past, I've met amazing people while mentoring at Hackathons and at school.
                `,
    },
    tech: {
      description: 'Tech I worked with',
      usage: '',
      fn: () => {
        return `
                    These are the tech I've recently worked with.\n---\n
                    - Python | Django | FastAPI | Flask\n
                    - Javascript / TypeScript | React.js | Angular | Electron\n
                    - PostgreSQL | MySQL | MongoDB
                    - Docker | Docker Compose\n
                    - Google Cloud | Digital Ocean
                `;
      },
    },
    exp: {
      description: 'My work experience',
      usage: '',
      fn: () => {
        return `
                    My Work experience.\n---\n
                    - Software Developer Intern @DRW Trading         | May 2022 - August 2022\n
                    - Software Developer Intern @Morgan Stanley      | January 2022 - April 2022\n
                    - VP of Tech @HackConcordia                      | May 2021 - February 2022\n
                    - Software Developer Intern @DRW Trading         | May 2021 - August 2021\n
                    - Research Assistant @Cognitive Data Science Lab | May 2021 - August 2021\n
                    - Software Developer Intern @Ericsson            | September 2020 - April 2021\n
                `;
      },
    },
    setup: {
      description: 'My current setup',
      usage: '',
      fn: () => {
        return `
                    My Current Setup\n---\n
                    OS's                    | OSX / Linux 
                    Editor                  | LunarVim / Sometimes VSCode\n
                    Terminal Emulator       | Alacritty with Tmux\n
                    Shell                   | ZSH\n
                    Dotfiles                | https://github.com/DucNgn/dotfiles\n
                `;
      },
    },
    exit: {
      description: 'Back to the main site',
      usage: '',
      fn: () => {
        return navigate('/');
      },
    },
  },
  overwrites: {
    help: {
      description: 'List all available commands',
      usage: '',
    },
    cd: {
      description: 'Change directory',
      usage: 'cd <directory>',
    },
    ls: {
      description: 'List files in the current directory',
      usage: '',
    },
    mkdir: {
      description: 'Make a directory',
      usage: 'mkdir <directory>',
    },
    dog: {
      description: 'Get a random gud boi',
      usage: '',
    },
    cat: {
      description: 'Get a random cat',
      usage: '',
    },
  },
};
