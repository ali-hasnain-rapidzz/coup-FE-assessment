# Coup Frontend Assessment

This repository contains a high-fidelity implementation of a landing page Hero section, demonstrating modern frontend engineering practices with Next.js 16 and Tailwind CSS v4.

## 🚀 Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting:** ESLint

## 🏗️ Architecture & Project Structure

The project follows a feature-based architecture:

```bash
├── app/                  # Next.js App Router (pages.tsx, layout.tsx)
├── components/
│   ├── features/         # Feature-specific modules
│   │   └── hero/         # Components: Hero, Birds, HeroContent, TopLeftGlow, etc.
│   ├── ui/               # Reusable UI atoms (e.g., button.tsx)
│   ├── layout/           # Global layout components (NavBar)
│   └── icons/            # SVG Icon components
├── lib/                  # Utilities (animations.ts, utils.ts)
└── public/               # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js
- npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Development Scripts

- **`npm run dev`**: Starts the development server at `http://localhost:3000`.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Runs the built production server.

## 🎨 Implementation Details

- **Component Composition**: The Hero section is composed of dedicated sub-components (`HeroContent`, `HeroBackground`, `Birds`, `ScrollIndicator`) found in `components/features/hero`.
- **Centralized Animations**: Animation variants are standardized in `lib/animations.ts` to maintain consistency across the UI.
- **Semantic HTML**: Usage of semantic tags like `<main>` and `<section>` for better accessibility.
- **Responsive Design**: Mobile-first styling using Tailwind CSS utility classes.

## 🧪 Verification

To ensure the application is running correctly:

1.  Run `npm run dev`.
2.  Navigate to `http://localhost:3000`.
3.  Verify that the Hero section renders with the "Birds" animation and "TopLeftGlow" effect.
4.  Check responsiveness by resizing the browser window.
