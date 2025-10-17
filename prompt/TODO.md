# TODO

## Foundation & Tooling
- **Audit project dependencies**: Review `package.json` to ensure Next.js App Router, Tailwind CSS, Zustand, Prisma, Supabase, Jest, ESLint, and related tooling align with Hireo requirements.
- **Configure path aliases**: Verify `tsconfig.json` and Next.js config expose clean aliases for `@/src/domain`, `@/src/application`, `@/src/infrastructure`, and `@/src/presentation` to support Clean Architecture.
- **Establish code quality gates**: Set up ESLint with `eslint-config-next`, Prettier rules, and Husky pre-commit hooks for lint/test enforcement.
- **Initialize testing stack**: Add Jest + React Testing Library presets with sample tests for components, presenters, and hooks.
- **Set up storybook or component catalog**: Provide playground for atomic design components using mock data.

## Architecture & Folder Structure
- **Confirm Clean Architecture layers**: Align `src/domain`, `src/application`, `src/infrastructure`, `src/presentation` with clear boundaries and dependency rules.
- **Create atomic design folders**: Within `src/presentation/components`, scaffold `atoms/`, `molecules/`, `organisms/`, `templates/`, `layouts/`, and `providers/` with index barrels.
- **Document architecture conventions**: Update `README.md` to describe layering, naming, and presenter patterns from `prompt/CREATE_PAGE_PATTERN.md`.
- **Introduce shared types**: Define base TypeScript interfaces for freelancers, clients, jobs, categories in `src/domain/models/`.

## Styling & Design System
- **Tailwind configuration review**: Extend `tailwind.config.js` with brand palette, typography scale, spacing, and dark mode support.
- **Global styles**: Consolidate CSS variables in `public/styles/index.css` for light/dark themes and semantic tokens.
- **Typography & iconography**: Integrate Google Fonts (e.g., Inter & Prompt) and icon set (Lucide/Phosphor) with reusable atom components.
- **Theme provider refinement**: Ensure `ThemeProvider` supports system sync, persistence, and keyboard accessibility for toggling.

## State Management & Data Layer
- **Set up Zustand stores**: Create modular stores in `src/presentation/stores/` for auth, master data, UI preferences, and landing page state with persist middleware (localforage).
- **Mock data services**: Build client-side repositories in `src/infrastructure/mocks/` returning typed mock payloads for freelancers, gigs, testimonials, blog posts, etc.
- **Master data seed**: Centralize mock master data constants in `src/domain/constants/` for categories, skills, packages, price ranges.
- **Integrate presenters with mocks**: Update presenter factories to inject mock repositories before real Supabase integration.

## Layout & Navigation
- **Implement `MainLayout`**: Create `src/presentation/components/layouts/MainLayout.tsx` with header, footer, theme toggle, and responsive containers.
- **Header requirements**: Include logo, primary navigation, search trigger, language switcher, auth CTA, and sticky behavior.
- **Footer requirements**: Provide company info, quick links, resources, social media, newsletter signup using atomic components.
- **Navigation config**: Define route metadata in `src/domain/config/navigation.ts` for consistent nav generation.

## Routing & Pages
- **Metadata strategy**: Update `app/layout.tsx` metadata and create helper for open graph, twitter cards, structured data.
- **Landing page scaffold**: Generate `app/(marketing)/page.tsx` following `prompt/CREATE_PAGE_PATTERN.md` with presenter/view/hook structure.
- **Dynamic segments plan**: Outline next pages (`/freelancers`, `/jobs`, `/packages/[slug]`, `/blog/[slug]`) in a roadmap document.
- **404 & error boundaries**: Implement custom error and not-found pages using design system components.

## Landing Page Content
- **Hero section**: Design immersive hero with search form, CTA buttons, trust badges.
- **Category showcase**: Display master data categories with filtering chips using Zustand state.
- **Featured freelancers**: Render carousel/grid with mock freelancer cards and rating data.
- **How it works**: Present step-by-step process for clients and freelancers.
- **Testimonials & success stories**: Include slider with quotes, company logos, metrics.
- **Pricing & packages**: Showcase tiered plans with comparison table.
- **Blog & insights**: Surface latest articles from mock data.
- **FAQ & support**: Provide accordion with curated questions.

## Forms & Validation
- **Form building blocks**: Create `FormField`, `FormControl`, `FormMessage` atoms integrated with `react-hook-form` and `zod` schemas.
- **Contact & newsletter flows**: Implement client-side forms with validation, submit handlers logging to console for now.
- **Search interaction**: Build search bar component with debounced Zustand state updates.

## Accessibility & Performance
- **A11y audit**: Ensure semantic HTML, aria labels, keyboard navigation, and focus management.
- **Performance budget**: Track core web vitals, lazy-load heavy sections, and optimize images via Next.js `Image`.
- **SEO enhancements**: Add structured data JSON-LD, meta tags, canonical URLs, sitemap plan.

## Documentation & Delivery
- **Contributor guide**: Document development workflow, scripts, testing commands.
- **Changelog strategy**: Prepare `CHANGELOG.md` template with Keep a Changelog format.
- **Deployment pipeline**: Outline Vercel deployment steps, environment variables, and Supabase setup checklist.
