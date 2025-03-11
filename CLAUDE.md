# CLAUDE.md - CV Website Project Guide

## Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Code Style & Conventions
- **TypeScript**: Use strict typing with proper interfaces/types
- **Component Structure**: React components use named exports
- **Imports**: Group imports - React, libraries, then local paths
- **Path Aliases**: Use `@/` alias (e.g., `@/components`, `@/lib`)
- **Component Props**: Define using React.ComponentProps + custom types
- **Styling**: Use Tailwind CSS with shadcn/ui components
- **File Organization**: 
  - UI components in `components/ui/`
  - Utility functions in `lib/`
- **Formatting**: Use space indentation, no trailing commas
- **Error Handling**: Prefer early returns for error states
- **Naming**: Use camelCase for variables/functions, PascalCase for components

## Architecture
- Next.js 15 with React 19 and TypeScript
- Component library: shadcn/ui with Tailwind CSS
- App Router architecture