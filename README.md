# Saga Goaltending — Builder Gold

The **Builder Gold Goalie Development Program** — an interactive training app plus source workbook content, built as a sellable 8-module goalie training product.

## The interactive app (`app/`)

**Live at: https://hardie29-byte.github.io/Saga-goaltending-/**

A full working training app — no build step, no dependencies. It's hosted free on GitHub Pages (served from the `gh-pages` branch); it also runs by simply opening `app/index.html` in a browser.

**To update the live site:** push app changes to `main` (the workflow republishes automatically), or run the "Publish app to GitHub Pages" workflow from the Actions tab, or push the `app/` files to the `gh-pages` branch directly.

**Features:**
- **Profiles** — each goalie creates a profile on the login screen; multiple profiles can share a device
- **Module dropdowns** — click a module (e.g. Crease Movement & Skating) to expand its lessons, exactly like a course platform
- **Video lessons** — labeled placeholder slots (e.g. `INSERT VIDEO: shuffle technique`) until you paste real embed URLs into `app/content.js`; checkmark appears when a user marks it watched
- **Module tests** — auto-graded 5-question tests built from each module's content; 80% to pass, checkmark on completion, best score tracked
- **Personal progress checker** — green checkmarks per lesson, per-module counts (e.g. 5/7), an overall progress bar, and a My Progress page with a per-module breakdown (mini progress bars + test scores) that jumps back into any module

**To add your videos:** open `app/content.js`, find the lesson, and set `videoUrl` to a YouTube/Vimeo embed URL. Everything else (modules, lessons, test questions, pass threshold) is edited in the same file.

**Note on storage:** each user's progress is saved automatically in their browser (localStorage). To carry progress across a user's devices or add paid accounts later, swap the four storage methods at the top of `app/app.js` for API calls to a backend (Firebase/Supabase); the rest of the app doesn't change.

## Repo map

| Path | What it is |
|---|---|
| [`app/`](app/) | The interactive training app — profiles, module dropdowns, videos, tests, checkmarks, personal progress page. |
| [`workbook/BUILDER-GOLD-WORKBOOK.md`](workbook/BUILDER-GOLD-WORKBOOK.md) | The complete workbook — paste-ready for a PDF/print template or a Thinkific course. All media marked with `[INSERT VIDEO: ...]` / `[INSERT IMAGE: ...]` placeholders. |
| [`product/PRODUCT-FOUNDATION.md`](product/PRODUCT-FOUNDATION.md) | Product setup: positioning, pricing tiers, sales page copy, media shot list, licensing, and launch checklist. |

## Workbook structure

**Block 1 — Foundations:** 1. Stance & Ready Position · 2. Crease Movement & Skating · 3. Angles & Depth Management · 4. Rebound Control

**Block 2 — Reading the Game:** 5. Reading the Release · 6. Puck Tracking · 7. Post Play · 8. Puck Handling

Every module follows the same template: **Objective → Estimated time → Step-by-step instructions → Coaching cues → Common mistakes → Media placeholders → Quick self-check → Coach sign-off → Notes.**

## How to use

1. Open `workbook/BUILDER-GOLD-WORKBOOK.md` and paste module-by-module (or whole) into your workbook template.
2. Replace each `[INSERT ...]` placeholder with the matching video/image — the full shot list is in the product foundation doc.
3. Work through `product/PRODUCT-FOUNDATION.md` to price, package, and launch.
