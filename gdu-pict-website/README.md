# GDU PICT — Official Website

Website for **GameDevUtopia PICT**, the game development club at Pune Institute of Computer Technology.
React 19 + Vite + React Router, plain CSS, no backend.

## Run

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build
```

## Pages

| Route      | What's there                                                                 |
| ---------- | ---------------------------------------------------------------------------- |
| `/`        | Home: hero with the member render, then LVL 01–06 sections and the join banner |
| `/council` | Council 2026–27: one box per member                                           |
| `/#play-now` | Opens the game straight away (shareable link)                              |

## Structure

```
src/
  data/site.js        ← all page copy (about, events, wins, mentors, socials, video credit…)
  data/council.js     ← council members
  pages/              ← Home.jsx, CouncilPage.jsx
  components/         ← one component + one CSS file per section
  utils/sfx.js        ← optional 8-bit UI sounds (navbar "SFX" toggle, off by default)
  index.css           ← design tokens (colours, fonts), HUD frame, buttons, level headers
public/
  images/             ← logo, game preview, council photos
  media/              ← hero loop + full showreel (encoded from the member's Blender video)
  play/               ← built copy of the GDU Island game (generated, see below)
```

## Adding council members

1. Put photos in `public/images/council/` (square-ish portrait, e.g. 800×880).
2. Fill in `src/data/council.js`:

   ```js
   { role: "President", short: "PR", color: "gold",
     name: "Jane Doe", photo: "/images/council/president.jpg",
     linkedin: "https://linkedin.com/in/…", instagram: "" },
   ```

Cards without a photo show the role initials. Social icons stay dimmed until a link is added.
Photos also show up in the "Party select" teaser on the home page.

## The video

`public/media/hero-loop.mp4` is the render part of the member's Lamborghini video (8.2s–43s, muted,
about 2.5 MB). It loops behind the hero. `showcase-full.mp4` is the full video with sound, played in the Arcade
section. Put the member's name in `SHOWCASE.credit` in `src/data/site.js`.

## The game (GDU Island)

The source is in `../gdu-sip-game-main`. The site embeds a built copy from `public/play/` in a fullscreen
overlay, and only loads it when someone presses Play. After changing the game:

```sh
npm run build:game
```

## Deploying

This is a single-page app with real routes (`/council`), so the host must send unknown paths to `index.html`.

- **Vercel:** add `vercel.json` with `{ "rewrites": [{ "source": "/((?!play/).*)", "destination": "/index.html" }] }`
- **Netlify:** add `public/_redirects` containing `/*  /index.html  200`
- **GitHub Pages:** copy `dist/index.html` to `dist/404.html` after building

## Before going live

- Club social links live in `SOCIALS` (`src/data/site.js`): Instagram, LinkedIn and email are set.
- Add the video creator's name to `SHOWCASE.credit`.
- The **Join GDU PICT** button scrolls to the footer. Point it at a registration form when you have one
  (`src/components/InsertCoin.jsx`).
