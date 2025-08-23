# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run check` - Run Svelte type checking
- `bun run check:watch` - Run type checking in watch mode

## Project Overview

This is Thomas Chaigneau's personal website (chainyo.dev) built with SvelteKit. The site serves as both a portfolio/landing page.

## Architecture

### Core Technologies
- **SvelteKit**: Full-stack framework with file-based routing
- **MDSX**: Markdown processing with Svelte component integration
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Bits UI**: Accessible component primitives
- **Mode Watcher**: Dark/light theme management

### Project Structure

```
src/
├── routes/                 # SvelteKit routes (file-based routing)
│   ├── +layout.svelte     # Root layout with theme and toast setup
│   ├── +page.svelte       # Landing page with portfolio content
├── lib/
│   ├── components/        # Reusable Svelte components
│   │   ├── ui/           # Shadcn-style UI components
│   │   ├── markdown/     # Custom markdown renderers
│   │   └── nav/          # Navigation components
│   ├── config/           # Site and docs configuration
│   ├── types/            # TypeScript type definitions
│   └── utils.ts          # Utility functions
└── app.css              # Global styles and CSS variables
```

### Key Components

- **Documentation System**: Uses MDSX to process markdown files with embedded Svelte components
- **Navigation**: Dynamic sidebar navigation based on `docsConfig` in `src/lib/config/docs.ts`
- **UI Components**: Custom component library following Shadcn design patterns
- **Theme System**: CSS custom properties with dark/light mode support

### Styling

- Uses HSL-based CSS custom properties for theming
- Tailwind configured with custom color palette and animations
- Border beam and flickering grid animations for visual effects
- Typography plugin for markdown content styling

## Configuration Files

- `svelte.config.js`: SvelteKit configuration with MDSX preprocessing
- `mdsx.config.js`: Markdown processing configuration
- `tailwind.config.ts`: Tailwind CSS configuration with custom theme
- `components.json`: Component library configuration