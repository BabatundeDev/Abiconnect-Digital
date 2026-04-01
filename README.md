# AbiConnect Digital
 
A strategy-led digital marketing agency website built with React, Vite, and Tailwind CSS. Deployed on Vercel.
 
---
 
## About the Project
 
AbiConnect Digital is a Lagos-based digital marketing agency focused on serving education-focused brands and growth-driven businesses across real estate, serviced apartments, and beyond. The website showcases the agency's services, case studies, and provides a contact channel for prospective clients.
 
---
 
## Pages
 
The website consists of 5 pages:
 
**Home** — Hero section with CTA, services overview, why AbiConnect section, and 4-step process approach.
 
**About** — Agency story, core values (Strategy First, Results-Oriented, Partnership Mindset), and areas of expertise.
 
**Services** — Detailed breakdown of 4 core services: Social Media Strategy, Paid Advertising (Meta & TikTok), Content Strategy & Brand Storytelling, and Influencer & Campaign Management.
 
**Portfolio** — 3 case studies with challenges, approaches, and key results across Education, Real Estate, and Business Services sectors.
 
**Contact** — Contact form with service selection, email and location info, and a "What to Expect" breakdown.
 
---
 
## Tech Stack
 
- **React** with React Router DOM for client-side routing
- **Vite** as the build tool
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vercel** for deployment
 
---
 
## Project Structure
 
```
src/
├── assets/
│   └── images/
│       ├── image2.jpg
│       ├── image3.jpg
│       ├── image4.jpg
│       ├── project1.jpg
│       ├── project2.png
│       └── project3.jpg
├── components/
│   └── figma/
│       └── ImageWithFallback.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── PortfolioPage.jsx
│   └── ContactPage.jsx
└── App.jsx
```
 
---
 
## Key Features
 
**Scroll Reveal Animations** — Every page uses a custom `useScrollReveal` hook built on the native `IntersectionObserver` API (no external library). Elements animate in with directional transitions (up, left, right) and staggered delays as the user scrolls.
 
**Smooth Transitions** — All interactive elements include hover transitions: card lifts, icon animations, button glow effects, and animated underlines on links.
 
**ScrollToTop on Navigation** — A `ScrollToTop` component resets the scroll position to the top on every route change, ensuring a clean page experience.
 
**SPA Routing Fix** — A `vercel.json` rewrite rule ensures all routes resolve correctly on refresh and direct URL access, preventing 404 errors in production.
 
---
