# BEST Machine - Injection Molding Solutions Website

A professional B2B website for BEST Machine, showcasing horizontal injection molding machines and solutions. Built with React + Tailwind CSS, optimized for migration to Astro.

## Project Overview

This project is a multi-page website for an industrial machinery manufacturer, featuring product catalogs, technical capabilities, applications, and company information.

**Design Philosophy:** Neo-Brutalist Industrialism with deep color themes, mechanical blue accents, and professional typography (DM Sans + DM Mono).

## Project Structure

```
bestmachines_homepage/
├── client/
│   ├── public/
│   │   └── __manus__/
│   │       └── version.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Navigation header with logo and CTA
│   │   │   ├── Footer.tsx          # Site footer with links
│   │   │   ├── Layout.tsx          # Main layout wrapper
│   │   │   └── ErrorBoundary.tsx   # Error handling
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # Theme provider
│   │   ├── hooks/
│   │   │   └── (custom hooks)
│   │   ├── lib/
│   │   │   └── (utility functions)
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Homepage with hero and features
│   │   │   ├── Products.tsx        # Product catalog (3-column grid)
│   │   │   ├── Applications.tsx    # Industry applications
│   │   │   ├── Capabilities.tsx    # Technical capabilities
│   │   │   ├── Company.tsx         # Company information
│   │   │   ├── Contact.tsx         # Contact form
│   │   │   └── NotFound.tsx        # 404 page
│   │   ├── App.tsx                 # Main app with routing
│   │   ├── main.tsx                # React entry point
│   │   ├── index.css               # Global styles + design tokens
│   │   └── const.ts                # Constants
│   └── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Pages and Components

### Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Hero section, features, statistics, CTA |
| Products | `/products` | 9 injection molding machines in 3-column grid |
| Applications | `/applications` | Industry use cases and solutions |
| Capabilities | `/capabilities` | Technical specifications and features |
| Company | `/company` | Company history and information |
| Contact | `/contact` | Contact form and inquiry submission |
| Not Found | `/404` | 404 error page |

### Reusable Components

- **Header.tsx** - Navigation bar with logo, menu, phone link, and quote CTA
- **Footer.tsx** - Footer with company info, links, and copyright
- **Layout.tsx** - Main layout wrapper combining Header, content, and Footer
- **ErrorBoundary.tsx** - Error handling for React components

## Design System

### Typography
- **Display Font:** DM Sans (weights: 300, 400, 500, 600)
- **Monospace Font:** DM Mono (for technical specs)
- **Font Sizes:** 11px (small), 13px (specs), 17px (card titles), 20px+ (headings)

### Color Palette
- **Primary Blue:** #1438a0 (brand color, buttons, accents)
- **Dark Navy:** #0d0d0d (text, headings)
- **Light Gray:** #bbb, #ccc (secondary text, labels)
- **Background:** #fff (cards), #f2f1ed (sections), #fafaf8 (hover)
- **Deep Blue:** #1c2d3e (product card backgrounds)

### Spacing
- Consistent 14px padding for cards
- 52px horizontal padding for sections
- 10-24px gaps between elements

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Hero section optimized for mobile (concise text)

## Image Assets

All images are hosted on CDN to avoid deployment timeouts:

### CDN Images (cloudfront)
- **Hero Images:** webp format, optimized for web
- **Application Images:** webp format, 6 images
- **Texture/Background:** webp format

### Product Images (/manus-storage/)
- **Product Cards:** jpg format, 9 images
- **Mix-blend-mode:** luminosity with 25% dark overlay
- **Aspect Ratio:** 4:3

**Image Optimization Notes:**
- All images use CDN URLs (no local files)
- webp format for hero/backgrounds (smaller file size)
- jpg format for product photos (natural compression)
- No images stored in `client/public/` (causes deployment timeout)

## Key Features

### Products Page
- **Grid Layout:** 3-column responsive grid
- **Card Design:** Image (4:3 aspect), model name, specs (vertical layout), CTA buttons
- **Filtering:** Tab-based filtering (All, Standard, High Capacity, Specialty)
- **Specs:** DM Mono font, 13px value + 10px label on separate lines
- **CTA:** Full-width "Get Quote" button + "View details" text link

### Hero Sections
- **Background:** Deep gradient + SVG machine line drawings
- **Text Overlay:** Dark overlay for readability
- **Statistics:** 4 key metrics (machine series, parts/year, production lines, experience)
- **CTA Buttons:** Primary (blue) and secondary (ghost) buttons

### Navigation
- **Header:** Fixed navigation with logo, menu items, phone link, quote button
- **Footer:** Links to all pages, company info, copyright
- **Active State:** Current page highlighted in navigation

## Styling Approach

- **Framework:** Tailwind CSS 4 with custom design tokens
- **CSS Variables:** All colors defined in `index.css` for easy theming
- **Custom Classes:** Semantic class names for major sections (`.hero`, `.card`, `.pgrid`, etc.)
- **No UI Library:** Removed shadcn/ui for cleaner codebase (use native HTML + Tailwind)

## For Astro Migration

### Recommended Changes
1. **Convert pages to Astro layouts:** Each page can become an `.astro` file
2. **Extract components:** Header, Footer, Layout are already modular
3. **Move styling:** Copy `index.css` to Astro's CSS modules
4. **Update routing:** Astro uses file-based routing (no need for wouter)
5. **Image optimization:** Use Astro's built-in image optimization

### File Mapping (React → Astro)
```
React                          Astro
client/src/pages/Home.tsx  →   src/pages/index.astro
client/src/pages/Products.tsx  →   src/pages/products.astro
client/src/components/Header.tsx  →   src/components/Header.astro
client/src/components/Footer.tsx  →   src/components/Footer.astro
client/src/index.css       →   src/styles/global.css
```

### No Breaking Changes
- All image URLs remain the same (CDN hosted)
- All styling is CSS/Tailwind (portable)
- Component structure is clean and modular
- No external API dependencies

## Development

### Install Dependencies
```bash
pnpm install
```

### Start Dev Server
```bash
pnpm dev
```

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics
- All images optimized and CDN hosted
- No local media files (prevents deployment timeout)
- Minimal JavaScript (React + Wouter only)
- Tailwind CSS with PurgeCSS for smaller bundle

## Deployment
- Hosted on Manus webdev platform
- Domain: bestmachines-v4zddxx9.manus.space
- Custom domain support available

## Contact
- Phone: +86 139 1568 2130
- Email: best@best-machine-china.com
- Website: https://bestmachines-v4zddxx9.manus.space

## License
© 2026 Zhangjiagang BEST Machinery Co., Ltd. All rights reserved.
