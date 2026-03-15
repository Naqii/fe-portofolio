# Frontend Setup – Next.js App Router

A modern frontend starter template built with **Next.js**, **React**, **Tailwind CSS**, and **HeroUI**.
This project is designed as a clean starting point for building scalable frontend applications using the latest React and Next.js architecture.

The template focuses on:

- modern project structure
- server-first architecture
- reusable UI layer
- fast development workflow
- maintainable codebase

---

# Tech Stack

Core technologies used in this project:

- **Next.js** (Page Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **HeroUI**
- **Framer Motion**

Developer tooling:

- **ESLint**
- **Prettier**
- **Husky**
- **lint-staged**

These tools provide a modern environment for building performant and maintainable frontend applications.

---

# Project Structure

```
.
├── public
│   └── static assets
│
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── providers.tsx
│   │
│   └── hero.ts
│
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

### `src/app`

Contains the **Next.js App Router** structure.

- `layout.tsx`
  Root layout used by the application.

- `page.tsx`
  The main entry page.

- `providers.tsx`
  Contains application-level providers such as UI providers.

- `globals.css`
  Global styles and Tailwind imports.

---

# Installation

Clone the repository:

```
git clone <repository-url>
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

# Tailwind + HeroUI Setup

The project integrates **HeroUI** with **Tailwind CSS** to provide a flexible UI component system.

Key configuration includes:

- Tailwind configuration
- HeroUI plugin integration
- global styling
- UI provider setup

Providers are registered inside:

```
src/app/providers.tsx
```

and injected in the root layout.

---

# Development Philosophy

This starter template follows several architectural principles:

### Server-first components

Next.js server components are used by default to improve performance and reduce client-side JavaScript.

### Client components for interaction

Interactive UI components (buttons, forms, animations) are isolated as client components.

### UI abstraction

UI libraries are wrapped inside reusable components to avoid tight coupling with third-party libraries.

---

# Scripts

```
npm run dev
```

Start development server.

```
npm run build
```

Build production bundle.

```
npm run start
```

Run production server.

```
npm run lint
```

Run ESLint.

---

## Code Formatting

This project uses ESLint and Prettier to maintain consistent code style.

Run formatting:

npm run format

Run lint check:

npm run lint

Automatically fix lint issues:

npm run lint:fix

## Git Hooks

This project uses Husky and lint-staged to enforce code quality before commits.

When a commit is created:

- ESLint automatically checks staged JavaScript and TypeScript files
- Prettier formats staged files
- the commit is blocked if lint errors are found

This helps maintain a consistent codebase and prevents broken code from entering the repository.

# Future Improvements

This template is intentionally minimal.
Recommended improvements include:

- component folder structure
- UI abstraction layer
- environment configuration
- API layer
- testing setup
- CI/CD configuration

---

# License

MIT
