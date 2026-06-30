# MANARAH Frontend

Next.js PWA for the MANARAH Islamic learning and competition platform.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

App runs at **http://localhost:3000**.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Environment

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `http://localhost:4000/api` | Backend API base URL |

## Project structure

```
src/
├── app/          # Next.js App Router pages
├── components/
│   ├── ui/       # Button, Input, Card, Badge
│   └── layout/   # Header, Footer, MobileNav, SiteLayout
├── hooks/        # Custom React hooks
├── lib/          # Utilities, API client
└── types/        # Shared TypeScript types
```

## Design system (FE-002)

| Token | Value |
|---|---|
| Primary | `#0E7A3E` |
| Secondary | `#C8A542` |
| Text | `#333333` |

Import UI components from `@/components/ui`.

## Task cards

See [FRONTEND_TASK_CARDS.md](../FRONTEND_TASK_CARDS.md) in the project root.
