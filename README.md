# FlowUp Heating Ltd — Website

Static multi-page website for FlowUp Heating Ltd.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `services.html` | Services |
| `about.html` | About |
| `contact.html` | Contact Us |

## Project structure

```
flowup/
├── index.html, services.html, about.html, contact.html
├── content/site.js          # ★ All copy, contact info, navigation, credit
├── js/
│   ├── layout.js            # Header, footer, meta, mobile nav
│   ├── pages.js             # Page body content
│   ├── icons.js             # SVG icons
│   └── init.js              # Bootstrap
├── css/                     # Styles (variables, base, components, layout)
└── assets/images/ + icons/
```

## Updating content

Edit **`content/site.js`**:

- `navigation` — menu labels and page links
- `contact` — address, phone, email, hours
- `services`, `about`, `hero` — page copy
- `credit` — footer designer credit (name & URL)
- `meta.pages` — per-page title and description

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

## Credit

Footer credit is configured in `content/site.js` under `credit` (links to [kshams.uk](https://kshams.uk)).
