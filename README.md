# CyfroSec landing redesign

A separate, static Next.js landing page for www.cyfrosec.com. The existing `cyfro-landing-page` repository remains unchanged. This project uses the approved copy from the live site, tightened for length, and the product's own screenshots and demo data.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Build the static site with `pnpm build`; the export is written to `out/`.

## Project structure

- `app/page.tsx` composes the page: hero, problem, approach, platform, CyfroAI Engine, audiences, security, questions and closing call to action.
- `app/globals.css` holds the visual system (tokens, type, layout) and every section's styles.
- `components/content.ts` holds all copy, navigation and links in one place.
- `components/HeroRadar.tsx` is the hero illustration: the rings of the logo as code, infrastructure and network layers, with a scan sweep and the exposures to fix first. It uses only SVG and CSS, and is hidden below 1080px.
- `components/ExploitChart.tsx` draws the 23,667-square CVE chart on a canvas.
- `components/ArchitectureDiagram.tsx` measures the node positions and draws the connectors between them.
- `components/FindingExplainer.tsx` highlights the part of the example finding that matches each CyfroAI Engine capability.
- `components/AudienceViews.tsx` shows one product view per role.
- `public/brand/` holds the official wordmark without the tagline, in brand blue and in white.
- `public/product/dashboard.png` is the product dashboard screenshot from the current site.

## Design system

- **Type:** Schibsted Grotesk for text and IBM Plex Mono for technical data. Both are self-hosted at build time through `next/font`.
- **Colour:** ink navy and warm paper as the base. Brand blue (`#0278ae` / `#039be0`) and brand orange (`#fe701a`, deepened to `#e85d0c` on light backgrounds for contrast) are used as signals, not decoration.
- **Layout:** a 1200px container with one section rhythm. Sections alternate between paper, white and ink to separate chapters.
- **Motion:** used only where it explains something (the hero scan, the CVE chart reveal, data flow in the architecture diagram). All motion respects `prefers-reduced-motion`.

## Content sources

- The CVE statistic cites Recorded Future, _H1 2025 Malware and Vulnerability Trends_.
- The dashboard, CyfroAssistant, executive summary and findings views use data from CyfroSec demo environments and are captioned as such.
- The CyfroAI Engine example uses CVE-2024-6387 (OpenSSH "regreSSHion") with details from the public NVD record. The live site's screenshot labels CVE-2024-6394 as an OpenSSH issue. That CVE is actually a lollms-webui path traversal flaw, so it was not reused.

## Links and launch notes

Until this standalone site replaces the current site, demo, product, documentation, company and legal links point to the existing `www.cyfrosec.com` pages. Review those destinations as part of launch. The homepage needs no server runtime or API keys.

## GitHub Pages proposal preview

The workflow in `.github/workflows/deploy.yml` builds and publishes the static site after each push to `main`, or when run manually. In the repository's **Settings → Pages**, set the build source to **GitHub Actions**. The build sets `NEXT_PUBLIC_BASE_PATH` to the repository name, so assets resolve from the project URL: `https://cyfrosec.github.io/cyfrosec-landing-proposal/`.

This proposal repository and its Pages site are public. Do not add secrets or internal customer data. To build locally at the same subpath, run `NEXT_PUBLIC_BASE_PATH=/cyfrosec-landing-proposal pnpm build`.
