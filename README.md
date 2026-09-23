# CyfroSec landing redesign

A separate, static Next.js landing page project. The existing `cyfro-landing-page` repository remains unchanged. This project reuses its CyfroSec brand images and references approved public content and routes.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Build the static site with `pnpm build`; the export is written to `out/`.

## Project structure

- `app/page.tsx` composes the complete landing page.
- `app/globals.css` contains the visual system and responsive layouts.
- `components/` contains the header, flow diagram, illustrative product preview, footer, and reusable copy.
- `public/cyfrosec-mark.png` and `app/icon.png` are copied from the existing CyfroSec project.

The page covers the three-source flow, CyfroAI prioritization, mission and vision, problem framing, platform workflow, product areas, audiences, deployment controls, questions, and the demo CTA. The product preview is explicitly labeled **illustrative**; it does not represent a live customer environment or claim measured results.

## Links and launch notes

Until this standalone site replaces the current site, demo, product, documentation, company, and legal links point to the existing `www.cyfrosec.com` pages. Review those destinations as part of launch. The homepage itself needs no server runtime or API keys.

## GitHub Pages proposal preview

The workflow in `.github/workflows/deploy.yml` builds and publishes the static site after each push to `main`, or when run manually. In the repository's **Settings → Pages**, set the build source to **GitHub Actions**. The build sets `NEXT_PUBLIC_BASE_PATH` to the repository name, so assets resolve from the project URL: `https://cyfrosec.github.io/cyfrosec-landing-proposal/`.

This proposal repository and its Pages site are public. Do not add secrets or internal customer data. To build locally at the same subpath, run `NEXT_PUBLIC_BASE_PATH=/cyfrosec-landing-proposal pnpm build`.
