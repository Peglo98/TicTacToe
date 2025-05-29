# Tic Tac Toe Game

A classic Tic Tac Toe game built with React and Vite, deployed on Vercel.

## Live Demo

Try it out here: [https://tic-tac-toe-lovat-xi-76.vercel.app](https://tic-tac-toe-lovat-xi-76.vercel.app)

## Table of Contents

- [Installation](#installation)  
- [Development](#development)  
- [Building for Production](#building-for-production)  
- [Project Structure](#project-structure)  
- [Technologies Used](#technologies-used)  
- [Features](#features)  
- [What I Learned](#what-i-learned)  
- [License](#license)  

## Installation

Make sure you have [Node.js](https://nodejs.org/) (v16 or later) installed.

1. Clone the repo  
   ```bash
   git clone https://github.com/Peglo98/TicTacToe.git
   cd TicTacToe
   ```
2. Install dependencies  
   ```bash
   npm install
   ```

## Development

Run the development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to play the game.

## Building for Production

Build the optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── index.html          # Main HTML template
├── package.json        # Project metadata & scripts
├── vite.config.js      # Vite configuration
├── src
│   ├── main.jsx        # Entry point
│   ├── App.jsx         # Root component
│   ├── Game.jsx        # Game logic and board
│   ├── Square.jsx      # Individual square component
│   └── styles.css      # Game styles
└── .gitignore
```

## Technologies Used

- [React](https://reactjs.org)  
- [Vite](https://vitejs.dev)  
- [JavaScript (ES6+)]  
- [CSS Grid & Flexbox]  
- [Vercel](https://vercel.com) for deployment  

## Features

- Interactive Tic Tac Toe board  
- **State Management** with React hooks  
- **Winner detection** and draw condition  
- **Restart game** functionality  
- Responsive design with CSS Grid  
- Clean and minimal UI  

## What I Learned

- **React Fundamentals**: components, props, state, and hooks (`useState`)  
- **Game Logic**: implementing win/draw conditions and managing move history  
- **Styling**: CSS Grid for layout and responsive design  
- **Tooling**: setting up and configuring Vite for a fast development experience  
- **Deployment**: deploying static React apps on Vercel with zero configuration  

## License

This project is licensed under the [MIT License](LICENSE).
