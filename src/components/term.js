/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable quotes */
import Terminal from 'react-console-emulator';
import commands from './commands/commands.js';
import React from 'react';

const Term = () => {
  const initialPrompt = 'guest@/dnguyen:~$ ';
  const cmds = commands.commands;
  const owrs = commands.overwrites;
  const terminal = React.createRef();
  const [prompt, setPrompt] = React.useState(initialPrompt);
  const [home, sethome] = React.useState('dnguyen');
  const [dir, setdir] = React.useState({
    dnguyen: [],
  });

  const getDog = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const resp = await res.json();
    return resp['message'];
  };

  const getCat = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const resp = await res.json();
    return resp[0].url;
  };

  return (
    <Terminal
      ref={terminal}
      className="container"
      welcomeMessage={[
        'Hello nerds ◔ ⌣ ◔',
        '---',
        'Welcome to my website',
        '---',
        "Type 'help' to see all available commands",
        '---',
        "Try starting with 'dog' 🐶",
        '---',
      ]}
      commands={{
        clear: {
          description: 'Clears the terminal',
          usage: '',
          fn: () => {
            terminal.current.clearStdout();
          },
        },
        dog: {
          description: 'Get a random gud boi',
          usage: '',
          fn: async () => {
            const url = await getDog();
            terminal.current.pushToStdout('Getting a gud boi just for you...\n---\n');
            terminal.current.pushToStdout(
              <img src={url} width="400px" height="380px" alt="gud-boi"></img>,
            );
          },
        },
        cat: {
          description: 'Get a random cat',
          usage: '',
          fn: async () => {
            const url = await getCat();
            terminal.current.pushToStdout('Getting a cute cat just for you...\n---\n');
            terminal.current.pushToStdout(
              <img src={url} width="400px" height="380px" alt="cute-kitty"></img>,
            );
          },
        },
        cd: {
          description: 'Change directory, not really, lol!',
          usage: 'cd <directory>',
          fn: (...args) => {
            if (args.length === 1 && args[0] === '..') {
              if (prompt === initialPrompt) {
                return 'cannot go up';
              } else {
                setPrompt(`${prompt.substring(0, prompt.lastIndexOf('/'))}:~$ `);
                sethome(
                  prompt.substring(
                    prompt.lastIndexOf('/', prompt.lastIndexOf('/') - 1) + 1,
                    prompt.lastIndexOf('/'),
                  ),
                );
                //console.log(prompt.substring(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1)+1, prompt.lastIndexOf('/')))
                //console.log(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1))
                //console.log(prompt.lastIndexOf('/'))
                return 'changed directory';
              }
            } else {
              if (dir[home].includes(args[0])) {
                setPrompt(`${`${prompt.slice(0, -4)}/${args.join('/')}:~$ `}`);
                sethome(args.join('/'));
                //console.log(prompt.slice(0, -4)+ "/" + args.join('/'))
                return 'changed directory';
              } else {
                return 'cannot find directory';
              }
            }
          },
        },
        ls: {
          description: 'List files in the current directory',
          usage: 'ls',
          fn: () => {
            if (dir[home].length === 0) {
              return 'nothing here :(\nUse mkdir to create a dir inside this one.';
            } else {
              return dir[home].join('\n');
            }
          },
        },
        mkdir: {
          description: 'Make a directory',
          usage: 'mkdir <directory>',
          fn: (...args) => {
            if (args.length === 1) {
              setdir({
                ...dir,
                [home]: [...dir[home], args[0]],
                [args[0]]: [],
              });
              return `created directory ${args[0]}.`;
            } else {
              return 'invalid arguments';
            }
          },
        },
        help: {
          description: 'List all available commands',
          usage: 'help',
          fn: () => `
                            ${Object.keys(owrs)
      .map(
        cmd =>
          `${cmd}${' '.repeat(12 - cmd.length)} | ${
            owrs[cmd].description
          }${' '.repeat(39 - owrs[cmd].description.length)} | ${
            owrs[cmd].usage
          }`,
      )
      .join('\n')}
                            ${Object.keys(cmds)
      .map(
        cmd =>
          `${cmd}${' '.repeat(12 - cmd.length)} | ${
            cmds[cmd].description
          }${' '.repeat(39 - cmds[cmd].description.length)} | ${
            cmds[cmd].usage
          }`,
      )
      .join('\n')}
                        `,
        },
        ...cmds,
      }}
      promptLabel={prompt}
      autoFocus
      style={{
        backgroundColor: null,
        minHeight: null,
        maxHeight: null,
        overflow: 'auto',
        height: '100%',
        width: '100%',
      }}
      styleEchoBack="fullInherit"
      contentStyle={{ color: '#ffb86c', fontWeight: 'normal', paddingLeft: null }} // Text colour
      promptLabelStyle={{ color: '#00FF00', fontWeight: 'normal' }} // Prompt label colour
      inputTextStyle={{ color: '#f1fa8c', fontWeight: 'normal' }}
      messageStyle={{ color: '#8be9fd', fontWeight: 'normal', paddingLeft: null }}
      scrollBehavior="auto"
      noDefaults
    />
  );
};

export default Term;
