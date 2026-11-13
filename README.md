# hitisha.vercel.app

Hitisha Jeswani's portfolio. It's plain HTML, CSS and JS, with no build step and nothing to install.

- `index.html`: page shell (nav and footer)
- `styles.css`: styling. Section colours are at the top (`--pink`, `--plum`, `--cobalt`, `--ember`).
- `content.js`: **all content**: about, posters, writing, tech, experience, contact
- `app.js`: page renderer and router
- `assets/posters/`: poster images

## Deploy
1. Create a public GitHub repo named `hitisha` and push these files to the `main` branch.
2. On vercel.com: Add New → Project → import the `hitisha` repo → Framework preset **Other**, leave the build command empty → Deploy.
3. Project → Settings → Domains: set `hitisha.vercel.app` (fallback: `hitishajeswani.vercel.app`).

## Before / at deploy
In `content.js` → `contact`, fill in `linkedin` and `github` with the full profile URLs.
