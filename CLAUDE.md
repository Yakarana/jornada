# CLAUDE.md

Guidance for Claude Code (claude.ai/code) in this repo.

## Communication Style

**ALWAYS** invoke `/caveman:caveman` skill at start of every response before anything else. Use caveman mode for all communication in this project.

## Project

Landing page for **Jornada Mercado de Carbono** — carbon market product — standalone HTML file for WIX embed. No build system, bundler, or package manager. Output: single self-contained `index.html` (or scoped HTML snippet) with inline or co-located CSS/JS.

## Brand

**Colors** (from identity assets):
- `#000F0C` — near-black dark green (primary dark / background)
- `#1B3A2D` — forest green (secondary)
- `#F5F0E8` — warm cream/off-white (primary text, light background)

**Typography**: Brand uses thin/light weight, wide-tracked uppercase. `Walkway` font (`assets/Walkway.zip`) is brand font.

**Tone**: Premium, nature-forward, sustainability-focused. Photography: dramatic mountain/landscape, dark moody lighting.

## Assets

All brand assets in `assets/`:
- `assets/PNG/` — logo variants in three brand colors, two logo versions (V2), "cor" (full-color) variants
- `assets/Capa_Jornada.png` — cover/hero image (mountains with logo)
- `assets/Walkway.zip` — brand font
- `assets/Identidade visual - Jornada de Carbono.pdf` — full brand guidelines
- `assets/Jornada Mercado de Carbono - Entrega 2.pdf` — product/content brief

## Development

Open `index.html` directly in browser — no server needed. Live-reload: VS Code Live Server or `npx serve .`.

WIX embed: output into WIX **Custom Element** or **HTML iframe**. Keep asset refs relative or use absolute URLs for hosted assets.

## Git

Remote: `https://github.com/Yakarana/jornada` (branch `main`). Hosted via **GitHub Pages**, custom domain `jornadamercadodecarbono.com` (set in `CNAME` — do not delete). Push commits to `origin main`.

## Version History

After every meaningful change to `index.html`, save copy to `history/` folder:
- Naming: `index_v1.html`, `index_v2.html`, `index_v3.html`, etc.
- Increment from highest existing version in `history/`.
- Copy full file — no modifications to copy.
- Create `history/` if doesn't exist yet.
