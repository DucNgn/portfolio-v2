/* eslint-disable no-irregular-whitespace */
/* eslint-disable arrow-body-style */
import { navigate } from 'gatsby';
export default {
  commands: {
    echo: {
      description: 'Prints the given text to the console',
      usage: 'echo <text>',
      fn: (...args) => args.join(' '),
    },
    about: {
      description: 'About Me',
      usage: 'about',
      fn: () =>
        'About Duc:\n---\n- Software / Data Engineer\n- Dog Person 🐶\n- Based in Montreal, Canada',
    },
    github: {
      description: 'Opens my GitHub Profile.',
      usage: 'github',
      fn: () => {
        window.open('https://github.com/DucNgn', '_blank');
        return 'opening github account...';
      },
    },
    linkedin: {
      description: 'Opens my Linkedin Profile.',
      usage: 'linkedin',
      fn: () => {
        window.open('https://www.linkedin.com/in/ductringn', '_blank');
        return 'opening linkedin account...';
      },
    },
    tech: {
      description: 'Tech I worked with.',
      usage: 'tech',
      fn: () => {
        return `
                    These are the tech I've recently worked with.\n---\n
                    - Python | Django | FastAPI | Flask\n
                    - Javascript / TypeScript | React.js | Angular | Electron\n
                    - Docker | Docker Compose\n
                    - Google Cloud | Digital Ocean
                `;
      },
    },
    exp: {
      description: 'My work experience.',
      usage: 'exp',
      fn: () => {
        return `
                    My Work experience.\n---\n
                    - Software Developer Intern @DRW Trading\n
                    - Software Developer Intern @Morgan Stanley\n
                    - VP of Tech @HackConcordia\n
                    - Software Developer Intern @DRW Trading\n
                    - Undergraduate Research Assistant @CDSL (Cognitive Data Systems Lab)\n
                    - Software Developer Intern @Ericsson\n
                `;
      },
    },
    projects: {
      description: 'Projects I have worked on.',
      usage: 'projects',
      fn: () => {
        return `
                    Cool projects I have worked on.\n---\n
                    'ashterm'                         | 'terminal portfolio'   | 'javascript'
                    'octocolor'                       | 'github profile color' | 'javascript'
                    'kanna-chan'                      | 'Discord-Bot'          | 'python'
                    'wordinal'                        | 'wordle-on-terminal'   | 'javascript'
                    'weeby.py'                        | 'API-wrapper'          | 'python'
                    'gitbanner'                       | 'banner-generator'     | 'javascript'\n---\n
                `;
      },
    },
    setup: {
      description: 'My current setup',
      usage: 'setup',
      fn: () => {
        return `
                    My Current Setup\n---\n
                    - Editor: LunarVim / Sometimes VSCode\n
                    - Terminal: Alacritty with Tmux
                    - Shell: ZSH
                    - Dotfiles: https://github.com/DucNgn/dotfiles\n
                `;
      },
    },
    exit: {
      description: 'Back to the main site',
      usage: 'exit',
      fn: () => {
        return navigate('/');
      },
    },
  },
  overwrites: {
    help: {
      description: 'List all available commands',
      usage: 'help',
    },
    cd: {
      description: 'Change directory',
      usage: 'cd <directory>',
    },
    ls: {
      description: 'List files in the current directory',
      usage: 'ls',
    },
    mkdir: {
      description: 'Make a directory',
      usage: 'mkdir <directory>',
    },
    dog: {
      description: 'Get a cute dog image.',
      usage: 'dog',
    },
    exit: {
      description: 'Back to main website',
      usage: 'exit',
    },
  },
};
