# Akshatha P — Full Stack Developer Portfolio

A modern, responsive, editorial developer portfolio showcasing my skills, background, education, and software projects. Built with a focus on clean typography, responsive design, smooth interactions, and direct access to live applications and source code.

---

## 🌐 Live Website

- **Portfolio URL:** [https://home-fix.vercel.app/](https://home-fix.vercel.app/) *(Deployed on Vercel)*

---

## ✨ Features

- **Responsive Visual System**: Mobile-first design adapted for 375px through 1920px viewports.
- **Editorial Typography & Dark/Light Contrast**: High-contrast button styles and accessible typography hierarchy.
- **Hero & Interactive Focus Section**: Highlighting current full-stack focus and engineering goals.
- **Interactive Tech Stack Flip Cards**: Flip card components detailing skill categories and proficiency levels.
- **Featured Project Showcase**: Showcase of four live production projects with live demos and repository links.
- **Resume Actions**: Dedicated **View Resume ↗** (opens in new tab) and **Download Resume ↓** actions.
- **Contact Form (EmailJS)**: Direct client-side message dispatching with input validation and feedback toasts.
- **Developer Easter Egg**: Interactive Konami code shortcut activating secret toast status.

---

## 🚀 Projects

The portfolio showcases four featured full-stack projects:

| Project | Description | Live Demo | Repository |
| :--- | :--- | :--- | :--- |
| **Home Fix** | Full-stack home-service marketplace connecting customers with local professionals for booking, scheduling, and payments. | [Live Demo ↗](https://home-fix.vercel.app/) | [GitHub ↗](https://github.com/Akshatha2312/home_fix.git) |
| **Cravory** | Multi-vendor bakery e-commerce marketplace featuring customer, baker, and admin portals with catalog and order tracking. | [Live Demo ↗](https://cravory-beta.vercel.app/) | [GitHub ↗](https://github.com/Akshatha2312) |
| **Click Pilot** | Link management and traffic analytics SaaS providing customizable links, password protection, SSRF safeguards, and click analytics. | [Live Demo ↗](https://click-pilot.vercel.app/) | [GitHub ↗](https://github.com/Akshatha2312/click-pilot.git) |
| **The Action Guardrail** | Safety-first interaction patterns demo highlighting state guardrails and action confirmations. | [Live Demo ↗](https://the-action-guardrail.vercel.app/) | [GitHub ↗](https://github.com/Akshatha2312/The-Action-Guardrail.git) |

---

## 🛠️ Tech Stack

- **Frontend Core:** React 19, JavaScript (ES6+), HTML5, Vanilla CSS3 (Custom Design System)
- **Routing & Motion:** React Router DOM v7, Framer Motion
- **Styling Utility:** Tailwind CSS v4
- **Icons & Communications:** Lucide React, EmailJS Browser
- **Build Tool & Bundler:** Vite v8
- **Version Control & Hosting:** Git, GitHub, Vercel

---

## 📁 Project Structure

```text
Akshatha/
├── public/
│   ├── Akshatha_Resume.pdf    # Static PDF asset for resume actions
│   ├── favicon.svg            # Site favicon
│   └── icons.svg
├── src/
│   ├── assets/                # Images and PDF media
│   ├── App.css                # Custom CSS variables, contrast utilities & flip-card styles
│   ├── App.jsx                # Main application component & section views
│   ├── emailjsService.js      # EmailJS client integration
│   ├── index.css              # Global baseline typography & Tailwind imports
│   └── main.jsx               # Application entry point
├── .env.example               # Environment variable templates
├── index.html                 # HTML document root with meta description
├── package.json
└── vite.config.js
```

---

## 🛠️ Local Development & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Akshatha2312/Akshatha_P-Portfolio-.git
   cd Akshatha_P-Portfolio-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional):**
   Copy `.env.example` to `.env` and fill in your EmailJS keys if configuring custom contact form dispatch:
   ```bash
   cp .env.example .env
   ```

4. **Start the local dev server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🎨 Design Approach

- **Editorial Clarity**: High-contrast typography, crisp line borders, and balanced whitespace.
- **Accessible Contrast**: Strict `.btn-primary` (dark bg + white text) and `.btn-secondary` (white bg + dark text) contrast rules across all states (`:hover`, `:active`, `:focus`).
- **No Overflow**: Full width container boundaries (`max-w-[1400px]`) preventing horizontal scrolling.
- **Mobile First**: Fluid layouts engineered for mobile, tablet, laptop, and desktop viewports.
