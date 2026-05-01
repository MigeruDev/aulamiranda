# PrepDocente EC

<div align="center">
  <br />
  <img src="https://via.placeholder.com/150/172A6A/FFFFFF?text=PrepDocente+EC" alt="PrepDocente EC Logo" width="150" height="150" />
  <br />
  <p>
    <b>Empowering Ecuadorian Educators for the 2026 Teaching Performance Evaluation.</b>
  </p>
  <p>
    <a href="https://angular.dev/"><img src="https://img.shields.io/badge/Angular-21.0.0-DD0031.svg?style=flat-square&logo=angular" alt="Angular" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-v4-38B2AC.svg?style=flat-square&logo=tailwind-css" alt="TailwindCSS" /></a>
    <a href="https://ai.google.dev/"><img src="https://img.shields.io/badge/GenAI-Powered-FFB81C.svg?style=flat-square&logo=google" alt="GenAI" /></a>
  </p>
</div>

## 📖 Table of Contents
- [Disclaimer](#-disclaimer)
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Documentation & Design System](#-documentation--design-system)
- [Contributing](#-contributing)
- [License](#-license)

## ⚠️ Disclaimer
**PrepDocente EC** is a private, independent, and strictly non-official platform. 
It is **NOT** affiliated with the Ecuadorian Ministry of Education, INEVAL, or any other government or public entity. We do not manage official inscriptions, provide official certifications, or guarantee results on the actual evaluation. This is exclusively a formative practice environment built to aid teachers through self-paced learning and simulated tests.

## 🎯 About the Project
The 2026 Teaching Performance Evaluation brings a new, structured 4-dimensional model. **PrepDocente EC** provides a modern, accessible, and highly specialized SaaS platform where teachers can diagnose their baseline knowledge, practice with timed simulators, and receive AI-driven pedagogical feedback. 

Our mission is to reduce anxiety and increase preparedness through an ethical, freemium model (Pay-once per season) that focuses on the core competencies:
- **D1:** Effective Teaching Knowledge (Disciplinary)
- **D2:** Socio-emotional Competencies
- **D3:** Professional Responsibility
- **D4:** Learning Management Skills

## ✨ Key Features
- **Intelligent Diagnostics:** A free tier that offers a comprehensive baseline test to identify the user's strengths and weaknesses.
- **Dimension-based Simulators:** Timed test environments meticulously mimicking the pacing and pressure of the real evaluation, structured by dimensions and specialties.
- **GenAI Feedback Loop:** Integration with `@google/genai` to analyze user failures and provide instant, context-aware pedagogical explanations.
- **Actionable Dashboards:** Visual progress tracking indicating "Needs Reinforcement" or "Ready for Practice" rather than intimidating grading systems.
- **Mobile-First Accessibility:** Built following WCAG 2.2 AA standards, ensuring a seamless experience across all devices (minimum 390px width).

## 🏗 Architecture & Tech Stack
The platform leverages a robust **Domain-Driven Design (DDD)** combined with Angular's modern Standalone components structure:
- **Frontend Framework:** Angular 21
- **Styling:** Tailwind CSS v4
- **State Management:** RxJS / Signals
- **AI Integration:** `@google/genai` SDK
- **Animation:** Motion for smooth micro-interactions

## 📂 Project Structure
```text
aulamiranda/
├── src/
│   ├── app/
│   │   ├── core/         # Core singletons: Auth, GenAI Interceptors, Guards
│   │   ├── shared/       # Reusable UI: Cards, Navbars, Buttons, Directives
│   │   └── features/     # Domain-specific modules:
│   │       ├── landing/  # Public site, pricing, informative SEO pages
│   │       ├── dashboard/# User progress, study path timelines
│   │       ├── simulator/# The core test engine, timer, and post-flight reports
│   │       └── admin/    # Management of users, item banks, and finances
├── docs/                 # Functional requirements and project documentation
├── DESIGN.md             # AI Agent Design System and UI Guidelines
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)
- `npm` or `yarn`

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/aulamiranda.git
   cd aulamiranda
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Configuration:**
   Copy the `.env.example` file to create your local `.env`. You must provide your Gemini API key to enable AI features.
   ```bash
   cp .env.example .env
   # Edit .env and add your GEMINI_API_KEY
   ```
4. **Run the Development Server:**
   The start script uses `cross-env` to securely inject the API key.
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000` to view the application.

## 🎨 Documentation & Design System
All UI constraints, typography tokens, semantic color palettes, and strict compliance rules are documented centrally in our [DESIGN.md](./DESIGN.md) spec file. This file serves as the absolute source of truth for all Frontend/UX AI Agents.

For in-depth business logic, actor definitions, and full use cases, please refer to the files located in the [`docs/`](./docs/) directory.

## 🤝 Contributing
As this is a private personal project, direct contributions are restricted. However, architectural suggestions and feedback regarding the pedagogical approach are highly appreciated. 

## 📄 License
All rights reserved. This is proprietary software created for the PrepDocente EC platform.
