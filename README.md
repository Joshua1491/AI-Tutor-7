# AI Tutor 7

## Quick start

```bash
pnpm i && pnpm dev
```

## Environment variables

| Name           | Purpose         |
| -------------- | --------------- |
| OPENAI_API_KEY | Chat completion |

_This repo follows the **Code-Guardian** ruleset (see `docs/rules.md`)._

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Setup

```bash
pnpm i
pnpm dev
```

## Repo Rules & Features

- Feature-slice folder structure (`src/app/(main)/dashboard`)
- Tailwind CSS with shadcn-ui preset & Inter font
- Strict TypeScript, ESLint (Next.js config), Prettier & Husky pre-commit (`pnpm lint`, `pnpm test`, `prettier --check .`)
- Vitest + React Testing Library (`pnpm test`)
- Dynamic `chart.js` loading for eco-efficiency
- GitHub Actions CI running lint, test & build
