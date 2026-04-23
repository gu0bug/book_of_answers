# ✧ Book of Answers ✧

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC.svg)](https://tailwindcss.com/)

[**中文文档 (Chinese)**](./README.zh-CN.md)

**Book of Answers** is a mystical, single-page web application (SPA) designed to provide cryptic but guiding answers to your deepest questions. Wrapped in a dark fantasy, parchment-and-gold aesthetic, it combines an immersive user experience with modern web technologies. 

Write down your query, consult the whispers, and let the answers find you.

## ✨ Features

- **Immersive User Experience:** Smooth state-machine-driven transitions moving seamlessly from the 'Ask' state, through a 'Transition' (featuring a rotating magic circle), to the final 'Answer' reveal.
- **Bilingual Support (i18n):** Fully supports both English and Chinese languages. The answers, UI elements, and layout dynamically adapt when switching languages seamlessly without refreshing.
- **Responsive & Fluid Design:** Mobile-first approach scaling perfectly to desktops. The layout uses flexible tailwind spacing to accommodate long answers without overflowing the container.
- **Unique Aesthetic:** Custom CSS rendering realistic parchment paper textures via SVG fractal noise (`feTurbulence`), deep void radial background gradients, and glowing gold accents.
- **Automated Deployments:** Out-of-the-box support for GitHub Pages with a pre-configured GitHub Actions workflow running on the latest Node.js 24 environment.

## 🛠 Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 + Native CSS Animations
- **Icons:** Lucide React
- **Typography:** Google Fonts (`Cinzel` & `Playfair Display`)

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed (v18+ recommended) and `npm`.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gu0bug0/book-of-answers.git
   cd book-of-answers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## 📦 Deployment (GitHub Pages)

This project contains a GitHub Actions workflow (`.github/workflows/deploy.yml`) specifically designed to build and deploy to GitHub pages seamlessly using Node.js 24.

1. Push your code to the `main` or `master` branch of your GitHub repository.
2. Ensure GitHub Pages is configured to build using **"GitHub Actions"** under your repository's `Settings > Pages > Build and deployment`.
3. The pipeline will automatically build and publish your application.

## 📜 License & Contact

- **Created by:** Guo Qiang
- **Contact Email:** gu0bug@gmail.com
- **Copyright:** © 2026 ALL RIGHTS RESERVED.
