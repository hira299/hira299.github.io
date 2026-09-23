# hira299.github.io

Source for [hira299.github.io](https://hira299.github.io/), the portfolio of **Hira Ahmed**, an AI Engineer who builds production LLM pipelines, AI agents, and automations, and also provides n8n automation and B2B SaaS QA services.

The site explains the work in depth (services, case studies, projects, and research) and links out to the profiles where clients can hire or verify it.

## Tech stack

- [Next.js](https://nextjs.org/) 15 with the App Router and TypeScript
- Tailwind CSS 4 (via PostCSS) plus hand-written CSS in `app/globals.css`
- MDX content rendered at build time with `next-mdx-remote` and `gray-matter`
- Static export (`output: "export"`) hosted on GitHub Pages

There is no server runtime, database, or API. Everything is pre-rendered HTML.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site written to out/
npm run lint
```

Requires Node.js 20 or newer.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which installs dependencies with `npm ci`, builds the static export, and publishes `out/` with the official GitHub Pages actions. The repository's Pages source must be set to **GitHub Actions**.

## Site structure

| Route | Purpose |
| --- | --- |
| `/` | Positioning, proof metrics, services, case studies, projects, research, experience |
| `/ai-automation`, `/n8n-automation`, `/ai-agents` | Automation service pages |
| `/qa-testing`, `/api-testing`, `/multitenant-qa` | QA service pages |
| `/case-studies` and 5 case-study pages | Engineering write-ups |
| `/projects` | All projects with demos and code links |
| `/about`, `/faq`, `/contact` | Background, buyer questions, hiring options |

```
app/            routes, layout, sitemap.ts, robots.ts
components/     shared UI and the service / case-study page templates
content/        MDX: case studies, services, FAQ
data/           structured facts: profile, services, projects, experience, research, links
lib/            metadata, structured data, site config, MDX loader
public/         icons, Open Graph image, images
```

## Content source

Facts live in one place and pages read from them:

- `data/*.ts`: structured facts (metrics, roles, projects, links)
- `content/**/*.mdx`: long-form writing (case studies, service methodology, FAQ)

Content is based on Hira's own verified portfolio material. Metrics are shown only as documented, with context. Nothing is invented: no testimonials, logos, or statistics that aren't supported by source material.

## SEO / GEO

- Unique title, description, canonical URL, Open Graph, and Twitter metadata per page (`lib/metadata.ts`)
- `sitemap.xml` and `robots.txt` generated from `app/sitemap.ts` and `app/robots.ts`
- JSON-LD structured data (`lib/structured-data.ts`, rendered by `components/JsonLd.tsx`)
- Important content is real HTML text, not images or canvas
- Service pages answer real buyer questions in plain language, with internal links between services, case studies, and contact

## Confidentiality

This repository is public. It must never contain confidential client material: internal URLs, credentials, API keys, customer data, ticket IDs, raw payloads, private screenshots, or proprietary code. Client names appear only with permission. Findings are described at the level of behavior, not implementation. `.gitignore` and `.cursorignore` are extra safety nets, not a substitute for keeping private material out of the project.

## Author

**Hira Ahmed**, AI Engineer · AI Automation & QA, Karachi, Pakistan

- Portfolio: [hira299.github.io](https://hira299.github.io/)
- LinkedIn: [hira-ahmed-4068402a7](https://www.linkedin.com/in/hira-ahmed-4068402a7)
- Upwork: [Hira A.](https://www.upwork.com/freelancers/~0178616a4e00b82166)
- Fiverr: [hira299](https://www.fiverr.com/hira299)
- GitHub: [hira299](https://github.com/hira299)

## License

[MIT](LICENSE)
