# 🏛️ Riad Tajania — Digital Brochure & Partner Platform

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start%20%26%20Router-FF4154?logo=tanstack&logoColor=white)](https://tanstack.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Private-lightgrey.svg)]()

> **An intimate luxury boutique riad in the heart of Marrakech Medina.**  
> Official digital brochure and B2B partnership presentation for travel agencies, DMCs, tour operators, and luxury travel advisors.

---

## 📖 Overview

**Riad Tajania** is an exclusive boutique property nestled in the historic Medina of Marrakech, steps from Bahia Palace, El Badi Palace, and Jemaa El-Fna Square. Featuring four individually curated suites accommodating up to eight guests, Riad Tajania combines authentic Moroccan architecture with modern European boutique elegance.

This web application serves as both an **interactive digital brochure for guests** and a **B2B partnership portal** for international travel professionals.

---

## ✨ Key Features

- 🌐 **Multilingual Support**: Real-time client-side language switching between **English (`en`)**, **French (`fr`)**, and **Italian (`it`)**.
- 🛏️ **Suites & Spaces Showcase**: Detailed galleries, room specifications, and amenity breakdowns for:
  - *Suite Amal* · *Suite Habiba* · *Suite Jasmine* · *Suite Tajania*
  - Central Courtyard & Plunge Pool, Rooftop Solarium & Dining Terrace.
- 🤝 **B2B Partnership Hub**: Tailored information for DMCs, tour operators, and luxury travel advisors, including commission structures, private buyout terms, and customized itineraries.
- 🛎️ **Curated Guest Experiences**: Showcases bespoke concierge services, private dining, cooking masterclasses, wellness/hammam sessions, and desert/Atlas excursions.
- 📱 **Refined Luxury Aesthetics**: Crafted with warm Moroccan tones, elegant typography, smooth micro-animations, and full mobile-first responsiveness.
- ⚡ **Modern Full-Stack Architecture**: Server-Side Rendering (SSR) via **TanStack Start**, file-based routing, and **Nitro** engine with Vercel deployment support.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [TanStack Start](https://tanstack.com/start/latest) |
| **Routing & SSR** | [TanStack Router](https://tanstack.com/router/latest) (file-based routing) |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design System |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) Primitives, Lucide Icons, Embla Carousel |
| **State & Data** | [TanStack React Query](https://tanstack.com/query/latest), React Hook Form, Zod |
| **Backend & Services**| [Supabase](https://supabase.com/) (Database / Lead collection) |
| **Build & Dev Server**| [Vite 7](https://vitejs.dev/) + [Nitro](https://nitro.build/) engine |

---

## 📁 Project Structure

```text
riad-tajania-brochure/
├── public/                  # Static assets & favicon icons
├── src/
│   ├── assets/              # Images, photography & media assets
│   ├── components/          # Reusable UI components & Radix wrappers
│   │   └── ui/              # Buttons, dialogs, dropdowns, carousels, etc.
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Core utilities & translation bundles
│   │   ├── translations.tsx # Multilingual dictionaries (EN, FR, IT)
│   │   └── utils.ts         # Utility helpers (cn, formatting)
│   ├── routes/              # TanStack Start file-based routes
│   │   ├── __root.tsx       # Root layout, HTML shell, SEO meta & header
│   │   ├── index.tsx        # Main brochure landing page & interactive sections
│   │   └── sitemap[.]xml.ts # Dynamic XML sitemap generator
│   ├── router.tsx           # Router instance configuration
│   ├── server.ts            # SSR entry handler
│   ├── start.ts             # TanStack Start runtime entry
│   └── styles.css           # Global typography & Tailwind styles
├── .env.example             # Environment variables template
├── components.json          # shadcn/ui configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite + TanStack Start configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (Node 20+ recommended) or **Bun** / **pnpm**
- **Git**

### 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/your-username/riad-tajania-brochure.git
cd riad-tajania-brochure

# Install packages
npm install
# or with bun:
bun install
```

### 2. Configure Environment Variables

Copy the sample `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Run Development Server

```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:3000` (or the port specified in terminal).

---

## 📜 Available Scripts

- `npm run dev` — Starts the local Vite development server with Hot Module Replacement (HMR).
- `npm run build` — Builds the production bundle and SSR assets via Vite & Nitro.
- `npm run preview` — Previews the production build locally.
- `npm run lint` — Runs ESLint to check for code style and syntax issues.
- `npm run format` — Formats all source files using Prettier.

---

## 🌐 Internationalization (i18n)

Translations are organized in [`src/lib/translations.tsx`](file:///d:/Projects/riad-tajania-brochure/src/lib/translations.tsx). To add or update copy:

1. Locate the target section key (`meta`, `hero`, `about`, `suites`, `spaces`, `experiences`, `partnership`, `contact`).
2. Update the corresponding string under the respective language object (`en`, `fr`, or `it`).

---

## 📍 Location & Contact

- **Location**: Medina, Marrakech, Morocco (Near Bahia Palace & El Badi Palace)
- **Concept**: 4-Suite Private Luxury Riad (Capacity: 8 guests)
- **Website / Inquiries**: Available through the brochure contact form

---

## 📄 License

This project is proprietary and confidential. All rights reserved by **Riad Tajania**.
