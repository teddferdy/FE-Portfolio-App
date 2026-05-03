# 🚀 Teddy Ferdian — Frontend Portfolio

> Frontend Developer with fullstack experience, focused on building scalable and high-performance web and mobile applications. Proficient in React.js, React Native, and Next.js, with a track record of delivering production-ready solutions across various domains, including the banking industry.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-ff0055?logo=framer)](https://www.framer.com/motion/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Internationalization (i18n)](#internationalization-i18n)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Services](#services)
- [Animation System](#animation-system)
- [Contact Form](#contact-form)
- [Deployment](#deployment)

---

## 📖 Overview

This is a personal portfolio web application built with **Next.js App Router**. It showcases work experience, projects, skills, education, and contact information. The app supports **bilingual content (EN/ID)** with a custom i18n system, smooth **page transitions** using Framer Motion, and real-time data fetching via **TanStack Query**.

---

## ✨ Features

- 🌐 **Bilingual support** — English & Indonesian with custom i18n (no external library)
- 🎞️ **Page transitions** — Stair animation & fade transitions using Framer Motion
- 📊 **Dynamic content** — All data fetched from a backend API via TanStack Query
- 📬 **Contact form** — Sends emails via EmailJS with form validation using React Hook Form + Zod
- 🖼️ **Project showcase** — Swiper-based image carousel for work projects
- 📱 **Responsive** — Mobile-first design with Tailwind CSS
- 🧩 **Reusable components** — Built with shadcn/ui component library
- ⚡ **Optimized fonts** — JetBrains Mono via Next.js font optimization

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | JavaScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui + Radix UI |
| Animation | Framer Motion |
| Data Fetching | TanStack Query (React Query) |
| Forms | React Hook Form + Zod |
| Email | EmailJS |
| Carousel | Swiper.js |
| Icons | React Icons |
| Fonts | JetBrains Mono (Google Fonts) |

---

## 📁 Project Structure

```
├── app/                        # Next.js App Router
│   ├── layout.js               # Root layout (providers, fonts, metadata)
│   ├── page.jsx                # Home page
│   ├── services/
│   │   └── page.jsx            # Services page
│   ├── resume/
│   │   └── page.jsx            # Resume page (Experience, Education, Skills, About)
│   ├── work/
│   │   ├── page.jsx            # Work / Projects page
│   │   └── [id]/
│   │       └── page.jsx        # Work filtered by category
│   ├── certificate/
│   │   └── page.jsx            # Certificate page
│   └── contact/
│       └── page.jsx            # Contact page
│
├── components/                 # Reusable UI components
│   ├── Header.jsx              # Site header with logo & navigation
│   ├── Nav.jsx                 # Desktop navigation
│   ├── MobileNav.jsx           # Mobile navigation (Sheet/drawer)
│   ├── LanguageSwitcher.jsx    # EN/ID language toggle dropdown
│   ├── Photo.jsx               # Animated profile photo with SVG circle
│   ├── Social.jsx              # Social media icon links
│   ├── Stats.jsx               # Animated counter stats
│   ├── PageTransition.jsx      # Page fade transition wrapper
│   ├── StairTransition.jsx     # Stair animation on route change
│   ├── Stairs.jsx              # Individual stair step animations
│   ├── WorkSlideBtn.jsx        # Swiper navigation buttons
│   ├── Loading.jsx             # Global loading state provider
│   ├── HtmlLangUpdater.jsx     # Updates <html lang> on locale change
│   ├── EmptyData.jsx           # Empty state UI
│   ├── AbortController.jsx     # Error/retry UI for failed queries
│   └── ui/                     # shadcn/ui components
│
├── i18n/                       # Custom internationalization
│   ├── localProvider.jsx       # Locale context, provider & useLocale hook
│   ├── en.json                 # English translations
│   └── id.json                 # Indonesian translations
│
├── service/                    # API service functions
│   ├── home.js                 # Home page data (title, name, position)
│   ├── stats.js                # Stats/counter data
│   ├── work.js                 # Projects & work data
│   ├── experience.js           # Work experience data
│   ├── education.js            # Education data
│   ├── skills.js               # Skills data
│   ├── about-me.js             # About me data
│   ├── service.js              # Services offered data
│   └── contact.js              # Contact info data
│
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions (cn, etc.)
├── utils/                      # Helper utilities
├── assets/                     # Static assets (images)
├── public/                     # Public assets (CV PDF, etc.)
└── constants/                  # Shared constants (e.g., menus)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Yarn (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/teddferdy/FE-Portfolio-App.git
cd FE-Portfolio-App

# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
yarn build
yarn start
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
```

> Note: EmailJS credentials (service ID, template ID, public key) are currently hardcoded in `contact/page.jsx`. It is recommended to move these to environment variables for production.

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🌐 Internationalization (i18n)

This project uses a **custom i18n system** — no external library required.

### How it works

- Translation files are stored in `/i18n/en.json` and `/i18n/id.json`
- The `LocaleProvider` reads the user's saved preference from `localStorage`, falling back to the browser language
- The `useLocale()` hook exposes `{ locale, changeLocale, t }` to any component

### Usage

```jsx
import { useLocale } from "@/i18n/localProvider";

const MyComponent = () => {
  const { t, locale, changeLocale } = useLocale();

  return <p>{t("Home.greetings")}</p>;
};
```

### Translation key format

Keys follow a `"Page.key"` or `"General.key"` dot-notation:

```json
// en.json
{
  "Home": {
    "greetings": "Hello, I'm",
    "download": "Download CV"
  },
  "General": {
    "present": "Present"
  }
}
```

### Adding a new language

1. Create a new translation file, e.g. `/i18n/jp.json`
2. Add the locale to the `messages` object in `localProvider.jsx`
3. Add the option to `LANGUAGES` array in `LanguageSwitcher.jsx`

---

## 📄 Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — greeting, profile photo, stats, social links |
| `/services` | Services offered with links to filtered work |
| `/resume` | Tabbed resume — experience, education, skills, about me |
| `/work` | All projects with Swiper carousel |
| `/work/[id]` | Projects filtered by service/category |
| `/certificate` | Certificates & achievements |
| `/contact` | Contact form + contact information |

---

## 🧩 Components

### Layout Components

| Component | Description |
|---|---|
| `Header` | Logo (fetched from API) + desktop/mobile nav + language switcher |
| `Nav` | Desktop navigation with active route highlight |
| `MobileNav` | Mobile drawer navigation using shadcn Sheet |
| `LanguageSwitcher` | Dropdown to toggle EN/ID locale |

### Animation Components

| Component | Description |
|---|---|
| `PageTransition` | Wraps page content with fade-in/out on route change |
| `StairTransition` | Stair-step overlay animation on route change |
| `Stairs` | Renders 6 animated stair steps with staggered delay |
| `Photo` | Profile photo with animated SVG rotating circle |

### UI Components

| Component | Description |
|---|---|
| `Stats` | Animated number counters using `react-countup` |
| `Social` | GitHub & LinkedIn icon links |
| `WorkSlideBtn` | Previous/next buttons for Swiper carousel |
| `Loading` | Global loading overlay via context |
| `EmptyData` | Shown when API returns empty data |
| `AbortController` | Error state with retry button for failed queries |

---

## 🔌 Services

All API calls are located in the `/service/` directory and use standard `fetch`. They are consumed via **TanStack Query** for caching, loading states, and error handling.

```js
// Example service function
export const title = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/title`);
  return res.json();
};
```

### Query Key Convention

| Query Key | Service |
|---|---|
| `["title"]` | Home title, name, position |
| `["stats", locale]` | Animated stats (locale-aware) |
| `["workList"]` | All projects |
| `["getProjectByCategory", id]` | Projects by category |
| `["getListExperience"]` | Work experience |
| `["getListEducation"]` | Education history |
| `["getListSkills"]` | Skills list |
| `["getListAboutMe"]` | About me data |
| `["getListService"]` | Services offered |
| `["getContact"]` | Contact info |

---

## 🎞️ Animation System

Animations are built with **Framer Motion**. Common transition configs are extracted as constants for consistency:

```js
const PAGE_TRANSITION = { delay: 2.4, duration: 0.4, ease: "easeInOut" };
const STAIR_TRANSITION = { duration: 0.4, ease: "easeInOut" };
```

### Animation flow on route change

1. `StairTransition` — stair steps animate in from top, then fade out overlay
2. `PageTransition` — new page content fades in with slight upward slide
3. `Photo` — profile photo fades in with 2s delay on home page
4. `Stats` — counters animate up with `react-countup` on mount

---

## 📬 Contact Form

The contact form is built with:
- **React Hook Form** — form state management
- **Zod** — schema validation with translated error messages
- **EmailJS** — sends form data directly to email without a backend

### Form Fields

| Field | Validation |
|---|---|
| First Name | Required, min 2 chars |
| Last Name | Required, min 2 chars |
| Email | Required, valid email format |
| Phone Number | Required, min 4 digits, numbers only |
| Service | Required, selected from API data |
| Message | Required, min 4 chars |

---

## 🚢 Deployment

This project is optimized for deployment on **Vercel**.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Make sure to set your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

---

## 👤 Author

**Teddy Ferdian Abrar Amrullah**

- GitHub: [@Teddy-FN](https://github.com/Teddy-FN)
- LinkedIn: [teddy-ferdian-abrar-amrullah](https://www.linkedin.com/in/teddy-ferdian-abrar-amrullah)

---

> Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion