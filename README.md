# Sensiv Cinematics — Website

A static, dependency-free rebuild of the Sensiv Cinematics site. Plain HTML/CSS/JS — no build step required.

## Structure

```
sensiv-cinematics/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── signal-scene.jpg     (testing section — live signal panel)
    ├── studio.jpg            (post-production section — studio photo)
    ├── work-1.jpg             (work grid — "The Silent Hour")
    ├── work-2.jpg             (work grid — "Meridian — Ad Campaign")
    ├── work-3.jpg             (work grid — "Northbound")
    └── work-4.jpg             (work grid — "Aperture")
```

## Adding your own images

Drop image files into `/images` using the **exact filenames** listed above (jpg, png, or webp all work — just update the extension in `index.html` if it's not `.jpg`). Each slot is a CSS `background-image`, so:

- Recommended aspect ratios: `signal-scene.jpg` ~16:10 landscape, `studio.jpg` ~4:5 portrait, `work-*.jpg` ~16:10 landscape.
- If a file is missing, the panel just falls back to its solid background color — nothing breaks.
- Large images will be slow to load; export at roughly 1600px on the long edge for web use.

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths behave exactly like production:
  ```
  npx serve .
  ```
  or
  ```
  python3 -m http.server 8000
  ```

## Deploying with GitHub Pages

1. Create a new GitHub repo and push this folder's contents to it (`index.html` at the repo root).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Notes

- Fonts (Outfit, Manrope, IBM Plex Mono) load from Google Fonts via `<link>` tags in `index.html` — no local font files needed.
- All copy, colors, and layout are placeholders reconstructed from screenshots; edit directly in `index.html` / `css/style.css`.
