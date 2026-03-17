# ✦ Developer Portfolio

A meticulously crafted, dark-themed developer portfolio built with Next.js 16 and Tailwind CSS v4. Features a custom braille-based ASCII art hero section, smooth Framer Motion animations, and a Markdown-powered static blog engine for case studies.

## ✨ Features

- **Monochrome Brutalist Aesthetic**: A carefully engineered dark theme using `#030303` base colors and high-contrast typography.
- **Dynamic ASCII Art**: A fully responsive, CSS opacity-gradient braille typography hero section mimicking a black hole.
- **Fluid Animations**: Staggered mount effects and scroll-triggers powered by Framer Motion.
- **Markdown Project Pages**: Completely detached Markdown content architecture rendered with `react-markdown` and `remark-gfm`.
- **Maximum Performance**: Statically generated (SSG) for zero-latency page loads and 100/100/100/100 Lighthouse scores.
- **Responsive Design**: Tailored experiences across mobile, tablet, and desktop viewports.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Content**: `react-markdown`, `remark-gfm`
- **Icons**: `react-icons`

## 🚀 Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/r3medy/portfolio.git
cd portfolio-nextjs
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
├── app/                  # Next.js App Router pages and layouts
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Main landing page assembly
│   └── projects/         # Dynamic routing for project case studies
├── components/           # Reusable UI components
│   ├── ascii-art.tsx     # Hero section ASCII rendering
│   ├── hero-section.tsx  # Landing page hero
│   ├── navbar.tsx        # Sticky navigation bar
│   ├── project-card.tsx  # Reusable project display card
│   ├── tech-stack.tsx    # Skills grid with react-icons
│   └── ...
├── data/                 # Static data and content
│   ├── projects.ts       # Project definitions and Markdown content
│   └── tech-stack.ts     # Tech stack definitions
└── public/               # Static assets (CV, project images)
```

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/new). The static generation ensures maximum performance out of the box.

```bash
npm run build
npm run start
```

## 🤝 Contact

- [GitHub](https://github.com/r3medy)
- [LinkedIn](https://linkedin.com/in/yousef-adel00/)
- Email: 355yousef.adel@gmail.com
