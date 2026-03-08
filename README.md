# preethishyam.in

> Personal portfolio — terminal-themed, ASCII art, CLI animations.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org)
[![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://website-pi-liard.vercel.app)

---

## Overview

A terminal-style personal portfolio built with React.js. Every section animates in as CLI output — commands type out character by character, output streams line by line, ASCII art drops in as a block.

**Live:** [preethishyam.in](https://website-pi-liard.vercel.app)

---

## Design
```
preethi@portfolio:~$ cat design.md

terminal bg    #0d1117   (GitHub dark)
primary        #00ff41   (matrix green)  
accent         #64ffda   (cyan)
text           #e6edf3   (off-white)
muted          #8b949e   (slate)
font           Fira Code / JetBrains Mono
```

- Scanline CRT overlay
- Blinking block cursor
- `git log` format for experience
- `ls -la` format for projects
- `whoami` format for about
- macOS terminal window chrome + vim status bar

---

## Sections

| Command | Section |
|---|---|
| `ssh preethi@portfolio.dev` | Intro + ASCII name |
| `whoami --verbose` | About + tech stack |
| `ls -la ~/projects/` | Projects grid |
| `git log --oneline` | Experience timeline |

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React.js (CRA) |
| UI | Material UI v4 |
| Animations | Custom `useTerminal` hook |
| Fonts | Fira Code · JetBrains Mono |
| Deployment | Vercel |

---

## Local Setup
```bash
git clone https://github.com/Pshyam17/Preethishyam.in
cd Preethishyam.in
npm install
npm start
```

---

## License

MIT
