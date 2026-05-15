# ElectFirm

> Modern, responsive web presence for a professional electrical services company — built with React, Tailwind CSS v4, and Three.js.

## Why This Exists

ElectFirm needed a digital presence that matched their reputation: trustworthy, professional, and modern. This site replaces outdated print materials with a fast, accessible web experience that works on every device — from a homeowner's phone to a contractor's desktop.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + Vite 8 |
| **Routing** | React Router v7 |
| **Styling** | Tailwind CSS v4 + CSS custom properties |
| **Animations** | Framer Motion, GSAP, Lenis |
| **3D Graphics** | Three.js + React Three Fiber + Drei |
| **State** | Zustand |
| **Forms** | React Hook Form + Zod |
| **UI** | Radix UI primitives, Lucide icons |
| **Content** | React Markdown + Gray Matter |
| **Notifications** | Sonner |
| **Performance** | Web Vitals, code splitting, image optimization |
| **Build** | Vite 8, Tailwind CSS v4, PostCSS |

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — the site runs with hot module reload.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint across the codebase |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/           # Skeleton loaders, base elements
│   ├── Layout.jsx    # App shell: nav, footer, theme toggle
│   └── Scene3D.jsx   # Three.js interactive background
├── pages/            # Route-level page components
├── store/            # Zustand state (theme, etc.)
├── hooks/            # Custom React hooks
├── lib/              # Animation helpers, utilities
├── App.jsx           # Root component with router
└── main.jsx          # Entry point
```

## Features

- **Light/Dark theme** — persists preference, respects system setting
- **Responsive design** — mobile-first, works on all screen sizes
- **3D interactive scene** — Three.js background on landing page
- **Animations** — scroll-triggered reveals, smooth page transitions
- **Contact form** — validated with React Hook Form + Zod
- **Accessibility** — semantic HTML, keyboard navigation, ARIA labels
- **Performance** — lazy-loaded routes, optimized assets, Web Vitals tracking

## License

MIT
