# ThatsmyEV — Standalone Export

Static build of the premium landing experience.

## Contents

- `index.html` — single page with **inline CSS + JS**
- `assets/` — optional local copies (not required; page uses Storebox CDN)

## Open

Double-click `index.html`, or serve locally:

```bash
npx serve standalone
# or
npx http-server standalone -p 5500 -c-1
```

Then open the printed URL (e.g. http://localhost:5500).

## Notes

- Custom styles and app logic are fully inline in `index.html`.
- GSAP + ScrollTrigger and Google Fonts load from CDN.
- Images, logos, and hero video load from `https://media.storebox.ai/...` (same media map as `src/data/media.ts`).
