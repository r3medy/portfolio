export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  url?: string;
  github?: string;
  content: string;
}

export const projects: Project[] = [
  {
    slug: "freelancing-platform",
    title: "Freelancing Platform",
    description:
      "A full-stack freelance marketplace platform connecting clients with independent professionals, featuring real-time chat, proposal management, and role-based workflows built with React 19 and Slim Framework.",
    tags: ["JavaScript", "React.js", "PHP", "MySQL"],
    year: "2025",
    github: "https://github.com/r3medy/swe-project",
    content: `
# Freelance Marketplace Platform

## Overview
A modern, full-stack freelance marketplace platform connecting clients with independent professionals. The application facilitates the entire freelance lifecycle—from job posting and discovery, to proposal submission and real-time communication. Built with robust role-based access control, the platform serves three distinct user groups: Clients looking to hire, Freelancers seeking opportunities, and Administrators governing the ecosystem.

## Key Features
- **Role-Based Workflows**: Tailored experiences for Clients (posting jobs, reviewing proposals), Freelancers (browsing opportunities, submitting pitches), and Administrators (moderating posts and managing users).
- **Comprehensive Job Board**: Users can browse, filter, save, and apply to job listings categorized by skills and interests via a dynamic tagging system.
- **Real-Time Communication**: Integrated chat functionality enables seamless and instant messaging between clients and freelancers to discuss project details.
- **Proposal Management System**: Streamlined interface for freelancers to submit tailored proposals and for clients to review, accept, or reject bids.
- **Secure Authentication & Profiles**: Robust session management, secure login/registration, and customizable user profiles with profile pictures and portfolios.
- **Admin Moderation Tools**: Dedicated control panels for administrators to review pending posts, manage registered users, and curate taxonomy tags.
- **Modern UI/UX**: Fully responsive interface featuring dark/light mode support, compound UI components, smooth navigation, and toast notifications.

## Technical Architecture

### Frontend
- **Framework**: React 19 utilizing the latest features and Vite for optimized builds.
- **Routing**: React Router for dynamic client-side navigation.
- **Styling**: Tailwind CSS for responsive, utility-first design, alongside custom CSS variables.
- **Validation & Data Integrity**: Zod schemas for rigorous client-side form validation.
- **Component Patterns**: Advanced React patterns including compound components, isolated state hooks, and widespread memoization for performance optimization.

### Backend
- **Core HTTP Framework**: Slim Framework 4 (PHP-based) serving as a lightweight, fast, and secure RESTful API.
- **Dependency Management**: PHP-DI used extensively for efficient dependency injection and loose coupling.
`,
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "A meticulously crafted, dark-themed developer portfolio built with Next.js 16 and Tailwind CSS v4. Features a custom ASCII art hero section, smooth Framer Motion animations, and a Markdown-powered static blog engine for case studies.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Motion"],
    year: "2026",
    github: "https://github.com/r3medy/portfolio",
    content: `
## Overview

A personal portfolio website acting as both a digital resume and an interactive canvas. The site utilizes a dark monochrome aesthetic built entirely from scratch, specifically tailored for maximum readability, subtle elegance, and a zero-latency feel across sections and case studies.

## Design Philosophy

The aesthetic vision draws heavily from terminal-inspired brutalism while blending modern web refinements. The monochrome palette \`#030303\` base paired with \`#FAFAFA\` text creates a meticulously engineered contrast curve. Typography combines the sharp utilitarian structure of **Geist Sans** for standard body text with the elegance of **Playfair Display** for high-accent keyword highlighting. The highlight of the hero section features a fully responsive, CSS opacity-gradient braille typography mimicking a black hole density cloud.

## Technical Architecture

Built purely for speed and clean abstraction:
- **Framework Core**: **Next.js 16** and **React 19** utilizing App Router.
- **Styling**: Complete utility-first approach with the newly released **Tailwind CSS v4** without any bloated UI component libraries.
- **Animations**: Silky interaction layers, staggered mount effects, and scroll-triggers powered by **Framer Motion**.
- **Content Integration**: Completely detached Markdown content architecture powered by \`react-markdown\` and \`remark-gfm\`, statically generated via \`generateStaticParams\` for instant sub-page routing.
`,
  },
];
