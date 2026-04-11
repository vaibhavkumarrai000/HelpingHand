# Helping Hand

Helping Hand is a React + TypeScript landing site for finding and booking experts, with a local Node.js + MongoDB backend for review storage. The app is centered around Instagram-based contact, a services showcase, expert cards, testimonials, and a premium review submission flow.

Live site: https://helpinghandio.netlify.app/

## What This Project Contains

- Frontend landing page built with Vite, React, Tailwind CSS, and shadcn/ui primitives.
- Animated hero section with auto-sliding background images.
- Services, reasons, expert directory, testimonials, Instagram CTA, and footer sections.
- Testimonials powered by a backend API at `http://localhost:5000/api/reviews`.
- Premium review form with interactive stars and a custom carousel display.
- Separate backend folder with Express, Mongoose, CORS, and dotenv.

## How To Run

### Frontend

```bash
npm install
npm run dev
```

Frontend scripts available in the root package:

- `npm run dev` - start the Vite dev server
- `npm run build` - create a production build
- `npm run build:dev` - build in development mode
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint
- `npm run test` - run Vitest once
- `npm run test:watch` - run Vitest in watch mode

The Vite server is configured on port `8080`.

### Backend

```bash
cd backend
npm install
npm start
```

The backend runs on port `5000` and expects a `MONGO_URI` environment variable in `backend/.env`.

Example backend env file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/helpinghand
```

## Frontend File Map

### Root App Flow

- [src/main.tsx](src/main.tsx) - application entry point that mounts the React tree.
- [src/App.tsx](src/App.tsx) - app shell, router setup, toasts, tooltip provider, and floating Instagram button.
- [src/pages/Index.tsx](src/pages/Index.tsx) - landing page composition.
- [src/pages/NotFound.tsx](src/pages/NotFound.tsx) - 404 page for unmatched routes.

### Landing Sections

- [src/components/Header.tsx](src/components/Header.tsx) - sticky header with desktop/mobile navigation.
- [src/components/HeroSection.tsx](src/components/HeroSection.tsx) - hero with auto-rotating background slideshow, CTA button, and slide dots.
- [src/components/ServicesCarousel.tsx](src/components/ServicesCarousel.tsx) - animated services strip with image and video cards.
- [src/components/WhyUs.tsx](src/components/WhyUs.tsx) - trust/positioning section.
- [src/components/ExpertDirectory.tsx](src/components/ExpertDirectory.tsx) - expert cards with rating, badge, and Instagram booking CTA.
- [src/components/Testimonials.tsx](src/components/Testimonials.tsx) - review display, backend fetch/post logic, carousel animation, and premium review form.
- [src/components/InstagramConnect.tsx](src/components/InstagramConnect.tsx) - Instagram booking explanation card.
- [src/components/Footer.tsx](src/components/Footer.tsx) - footer navigation and brand block.
- [src/components/FloatingInstagramButton.tsx](src/components/FloatingInstagramButton.tsx) - persistent mobile-friendly Instagram contact button.
- [src/components/AuthModal.tsx](src/components/AuthModal.tsx) - reusable login/signup modal UI, currently not mounted in the page flow.
- [src/components/NavLink.tsx](src/components/NavLink.tsx) - navigation helper component used for internal link styling.

### Shared Helpers

- [src/lib/constants.ts](src/lib/constants.ts) - shared Instagram URL constant.
- [src/lib/utils.ts](src/lib/utils.ts) - `cn()` helper for merging Tailwind classes.
- [src/hooks/use-mobile.tsx](src/hooks/use-mobile.tsx) - mobile breakpoint detection hook.
- [src/hooks/use-toast.ts](src/hooks/use-toast.ts) - toast state helper used by the UI toast system.

### Styling and App Shell

- [src/index.css](src/index.css) - Tailwind directives and design tokens.
- [src/vite-env.d.ts](src/vite-env.d.ts) - Vite type declarations.

## UI Primitives

The project includes a large generated shadcn/ui set under [src/components/ui](src/components/ui). These are reusable primitives that the landing page and modal components build on.

- [src/components/ui/accordion.tsx](src/components/ui/accordion.tsx)
- [src/components/ui/alert.tsx](src/components/ui/alert.tsx)
- [src/components/ui/alert-dialog.tsx](src/components/ui/alert-dialog.tsx)
- [src/components/ui/aspect-ratio.tsx](src/components/ui/aspect-ratio.tsx)
- [src/components/ui/avatar.tsx](src/components/ui/avatar.tsx)
- [src/components/ui/badge.tsx](src/components/ui/badge.tsx)
- [src/components/ui/breadcrumb.tsx](src/components/ui/breadcrumb.tsx)
- [src/components/ui/button.tsx](src/components/ui/button.tsx)
- [src/components/ui/calendar.tsx](src/components/ui/calendar.tsx)
- [src/components/ui/card.tsx](src/components/ui/card.tsx)
- [src/components/ui/carousel.tsx](src/components/ui/carousel.tsx)
- [src/components/ui/chart.tsx](src/components/ui/chart.tsx)
- [src/components/ui/checkbox.tsx](src/components/ui/checkbox.tsx)
- [src/components/ui/collapsible.tsx](src/components/ui/collapsible.tsx)
- [src/components/ui/command.tsx](src/components/ui/command.tsx)
- [src/components/ui/context-menu.tsx](src/components/ui/context-menu.tsx)
- [src/components/ui/dialog.tsx](src/components/ui/dialog.tsx)
- [src/components/ui/drawer.tsx](src/components/ui/drawer.tsx)
- [src/components/ui/dropdown-menu.tsx](src/components/ui/dropdown-menu.tsx)
- [src/components/ui/form.tsx](src/components/ui/form.tsx)
- [src/components/ui/hover-card.tsx](src/components/ui/hover-card.tsx)
- [src/components/ui/input.tsx](src/components/ui/input.tsx)
- [src/components/ui/input-otp.tsx](src/components/ui/input-otp.tsx)
- [src/components/ui/label.tsx](src/components/ui/label.tsx)
- [src/components/ui/menubar.tsx](src/components/ui/menubar.tsx)
- [src/components/ui/navigation-menu.tsx](src/components/ui/navigation-menu.tsx)
- [src/components/ui/pagination.tsx](src/components/ui/pagination.tsx)
- [src/components/ui/popover.tsx](src/components/ui/popover.tsx)
- [src/components/ui/progress.tsx](src/components/ui/progress.tsx)
- [src/components/ui/radio-group.tsx](src/components/ui/radio-group.tsx)
- [src/components/ui/resizable.tsx](src/components/ui/resizable.tsx)
- [src/components/ui/scroll-area.tsx](src/components/ui/scroll-area.tsx)
- [src/components/ui/select.tsx](src/components/ui/select.tsx)
- [src/components/ui/separator.tsx](src/components/ui/separator.tsx)
- [src/components/ui/sheet.tsx](src/components/ui/sheet.tsx)
- [src/components/ui/sidebar.tsx](src/components/ui/sidebar.tsx)
- [src/components/ui/skeleton.tsx](src/components/ui/skeleton.tsx)
- [src/components/ui/slider.tsx](src/components/ui/slider.tsx)
- [src/components/ui/sonner.tsx](src/components/ui/sonner.tsx)
- [src/components/ui/switch.tsx](src/components/ui/switch.tsx)
- [src/components/ui/table.tsx](src/components/ui/table.tsx)
- [src/components/ui/tabs.tsx](src/components/ui/tabs.tsx)
- [src/components/ui/textarea.tsx](src/components/ui/textarea.tsx)
- [src/components/ui/toast.tsx](src/components/ui/toast.tsx)
- [src/components/ui/toaster.tsx](src/components/ui/toaster.tsx)
- [src/components/ui/toggle.tsx](src/components/ui/toggle.tsx)
- [src/components/ui/toggle-group.tsx](src/components/ui/toggle-group.tsx)
- [src/components/ui/tooltip.tsx](src/components/ui/tooltip.tsx)
- [src/components/ui/use-toast.ts](src/components/ui/use-toast.ts)

## Backend File Map

The backend lives in the [backend](backend) folder.

- [backend/server.js](backend/server.js) - Express API server with MongoDB connection, Review schema/model, GET and POST review routes, and CORS enabled.
- [backend/package.json](backend/package.json) - backend package manifest and scripts.
- [backend/package-lock.json](backend/package-lock.json) - npm lockfile for the backend.
- [backend/.gitignore](backend/.gitignore) - ignores dependencies and local env files.
- [backend/.env](backend/.env) - local MongoDB connection string configuration.

### Backend API

- `GET /api/reviews` - returns all reviews sorted newest first.
- `POST /api/reviews` - creates a new review from `name`, `rating`, and `message`.

## Public Assets

- [public/favicon.ico](public/favicon.ico) - site favicon.
- [public/robots.txt](public/robots.txt) - crawler directives.
- [public/placeholder.svg](public/placeholder.svg) - generic fallback asset.
- [public/images/hhlogo.jpeg](public/images/hhlogo.jpeg) - Helping Hand logo.
- [public/images/hero-1.svg](public/images/hero-1.svg)
- [public/images/hero-2.svg](public/images/hero-2.svg)
- [public/images/hero-3.svg](public/images/hero-3.svg)
- [public/images/hero-4.svg](public/images/hero-4.svg)
- [public/images/hero-5.svg](public/images/hero-5.svg)
- [public/images/hero-6.svg](public/images/hero-6.svg)

## Tooling And Config

- [vite.config.ts](vite.config.ts) - Vite config, alias setup, dev server port, and lovable tagger plugin.
- [vitest.config.ts](vitest.config.ts) - Vitest config using jsdom and test setup.
- [tailwind.config.ts](tailwind.config.ts) - Tailwind theme tokens and custom animations including infinite scroll and marquee.
- [postcss.config.js](postcss.config.js) - PostCSS pipeline config.
- [eslint.config.js](eslint.config.js) - ESLint rules for TypeScript and React hooks.
- [tsconfig.json](tsconfig.json) - root TS project references and path alias config.
- [tsconfig.app.json](tsconfig.app.json) - app TypeScript config.
- [tsconfig.node.json](tsconfig.node.json) - Node-side TypeScript config.
- [components.json](components.json) - shadcn/ui configuration.
- [playwright.config.ts](playwright.config.ts) - Playwright configuration scaffold.
- [playwright-fixture.ts](playwright-fixture.ts) - Playwright test fixture re-export.
- [index.html](index.html) - Vite HTML entry point.

## Testing

- [src/test/setup.ts](src/test/setup.ts) loads Testing Library matchers and browser stubs.
- [src/test/example.test.ts](src/test/example.test.ts) is the starter Vitest example test.

Run the frontend tests:

```bash
npm run test
```

## Current Implementation Notes

- The testimonials area currently fetches reviews from the backend and also keeps a local fallback review list so the UI still renders if the API is unavailable.
- The hero background slides are set up to move automatically and have been tuned for brighter visibility.
- The testimonials form uses a premium white card style with black text, interactive star rating, and a bold submit button.
- The main app currently uses a single landing route with a 404 fallback.

## Folder Summary

```text
HelpingHand/
├─ backend/
├─ public/
├─ src/
├─ index.html
├─ package.json
├─ vite.config.ts
├─ vitest.config.ts
├─ tailwind.config.ts
├─ eslint.config.js
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ postcss.config.js
├─ components.json
├─ playwright.config.ts
├─ playwright-fixture.ts
└─ README.md
```

## Deployment

The current frontend deployment is hosted on Netlify:

https://helpinghandio.netlify.app/
