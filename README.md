# 💼 My Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**. Features a sleek dark/light theme toggle, smooth animations, and a modular CSS architecture.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Modular-1572B6?logo=css3&logoColor=white)

---

## ✨ Features

- 🌗 **Dark / Light Mode** — seamless theme switching with persistent preference
- 🎨 **Gradient Accents** — vibrant purple-to-pink gradient design system
- 📱 **Fully Responsive** — mobile-first layout with hamburger navigation
- ⚡ **Smooth Animations** — scroll-triggered fade-ins, morphing avatar, floating blobs
- 🧩 **Modular CSS** — styles split by component for easy maintenance

---

## 🛠️ Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Framework | React 19                |
| Bundler   | Vite 8                  |
| Styling   | Vanilla CSS (modular)   |
| Fonts     | Inter, Fira Code        |
| Linting   | ESLint 9                |

---

## 📁 Project Structure

```
my-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── styles/
│   │   ├── variables.css      # CSS custom properties & themes
│   │   ├── base.css           # Reset & body styles
│   │   ├── utilities.css      # Shared classes (.btn, .container…)
│   │   ├── animations.css     # @keyframes & scroll animations
│   │   ├── navbar.css         # Navbar, theme toggle, hamburger
│   │   ├── hero.css           # Hero section
│   │   ├── about.css          # About section
│   │   ├── skills.css         # Skills section
│   │   ├── projects.css       # Projects section
│   │   ├── contact.css        # Contact form section
│   │   ├── footer.css         # Footer section
│   │   └── responsive.css     # Media query breakpoints
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css              # Barrel file (imports only)
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Thanawat44673/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command             | Description                        |
|---------------------|------------------------------------|
| `npm run dev`       | Start development server with HMR  |
| `npm run build`     | Build for production               |
| `npm run preview`   | Preview production build locally   |
| `npm run lint`      | Run ESLint                         |

---

## 🎨 Theming

The portfolio uses CSS custom properties defined in `src/styles/variables.css`. Toggle between dark and light themes via the switch in the navbar. Theme preference is managed by `ThemeContext`.

To customize colors, edit the `:root` (dark) and `[data-theme='light']` blocks in `variables.css`.

---

## 📄 License

This project is open source and available for personal use.
