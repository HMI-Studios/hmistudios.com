# HMI Studios — Eleventy Site

This is the React-free, duplication-free version of the site. Eleventy takes
everything in `src/` and outputs plain static HTML into `_site/` — that's
what you upload (or auto-deploy, see below).

## Quick start

```bash
npm install
npm run dev      # local dev server with live reload, http://localhost:8080
npm run build    # outputs final static site to _site/
```

## The big idea

Instead of every page repeating the `<nav>`, `<head>`, and `<footer>`, those
live **once** in `src/_includes/base.njk`. Every page just says
`layout: base.njk` at the top and Eleventy wraps it automatically.

Instead of hardcoding each game/book/song into HTML, the actual content
lives in `src/_data/*.js` as plain JS arrays of objects. The page templates
just loop over the data. Add a new game by adding one object to
`src/_data/games.js` — no HTML touched at all.

## Folder map

```
src/
├── _includes/
│   ├── base.njk          ← nav + head + footer (the layout every page uses)
│   ├── project-card.njk  ← one card's markup, reused everywhere
│   └── grid-card.njk     ← misc. software card markup
├── _data/
│   ├── games.js          ← array of game objects
│   ├── music.js          ← array of music release objects
│   ├── books.js          ← array of book objects
│   ├── misc.js            ← array of misc. software objects
│   └── members.js        ← array of member objects (bio, projects, links)
├── css/style.css         ← unchanged from the v2 design, copied as-is
├── img/                  ← put real screenshots/photos here
├── index.njk             ← home page
├── games/index.njk       ← /games/
├── music/index.njk       ← /music/
├── books/index.njk       ← /books/
└── members/
    ├── index.njk         ← /members/  (the team grid)
    └── about.njk         ← THE INTERESTING FILE, see below
```

## The trick: `about.njk` generates ALL member pages

`src/members/about.njk` is a single file, but it uses Eleventy's
**pagination** feature to loop over every entry in `members.js` and spit out
a separate page for each one:

```
/members/kjniemela/
/members/mocqoro/
/members/izra/
```

To add a new member, you do **not** create a new HTML file. You add one
object to the array in `src/_data/members.js` (name, bio, role, links,
projects) and Eleventy generates their About page automatically on the next
build. This is the main thing that used to require React and now doesn't.

## Adding content — cheat sheet

| Want to add...        | Edit this file              |
|------------------------|------------------------------|
| A new game              | `src/_data/games.js`         |
| A new music release      | `src/_data/music.js`         |
| A new book               | `src/_data/books.js`         |
| A new misc. software project | `src/_data/misc.js`     |
| A new member (+ auto About page) | `src/_data/members.js` |
| Real screenshots/photos  | drop in `src/img/`, reference path in the data file |

You will basically never need to touch a `.njk` file again once this is set
up — just edit the data files.

## Clean URLs

Pages live in folders (`games/index.njk` → `/games/`) instead of
`games.html`. This is what gives you the `/games/` style URL with no file
extension, which both looks nicer and is what GitHub Pages + most hosts
expect for clean URLs. No router needed, no JS needed — it's just how the
files are laid out on disk.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which:
1. Runs `npx @11ty/eleventy` on every push to `main`
2. Uploads the resulting `_site/` folder
3. Deploys it to GitHub Pages automatically

In your repo settings → Pages, set the source to **GitHub Actions** (not
"Deploy from a branch"). After that, every push to `main` rebuilds and
redeploys automatically — no manual build step, no committing the `_site`
folder, no React Router 404 hacks, and real static HTML for every route so
SEO works normally.

## What's different from plain HTML

Nothing about the *output* — view-source on any page and it's plain HTML,
identical in spirit to the raw version. The only difference is you maintain
~9 small template/data files instead of N duplicated HTML files, and
Eleventy assembles the final HTML at build time.
