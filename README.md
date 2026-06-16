# HMI Studios

## Quick start

```bash
npm install
npm run dev      # local dev server with live reload, http://localhost:8080
npm run build    # outputs final static site to _site/
```

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
    └── about.njk         ← /members/<member>
```
