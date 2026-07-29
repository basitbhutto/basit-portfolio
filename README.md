# Abdul Basit — Portfolio

A premium, single-page portfolio for **Abdul Basit**, Full Stack .NET Developer, built with vanilla HTML5, CSS3 and JavaScript (ES6) — no frameworks.

## Structure

```
portfolio/
│
├── index.html
├── css/
│   ├── style.css          # theme tokens, layout, components
│   ├── responsive.css     # breakpoints
│   └── animations.css     # keyframes + scroll-reveal system
│
├── js/
│   ├── app.js              # project data, nav, modal, forms, init
│   ├── slider.js           # gallery slider (used inside project modal)
│   ├── animation.js        # scroll reveal, particle background, counters
│   └── typing.js           # hero typewriter effect
│
├── assets/
│   ├── images/              # hero illustration, about photo, OG image
│   ├── icons/
│   ├── logo/                # logo + favicon
│   └── screenshots/         # per-project banners, thumbnails & gallery images
│
└── README.md
```

## Running locally

This is a static site — no build step required. Serve the folder with any static server, e.g.:

```bash
npx serve .
```

or open `index.html` directly in a browser.

## Replacing placeholder content

- **CV**: add your PDF at `assets/Abdul-Basit-CV.pdf` (the Download CV button links here).
- **Photos & screenshots**: swap the generated SVG placeholders in `assets/images` and `assets/screenshots/<project>` with real photography and product screenshots (JPG/PNG/WebP), keeping the same filenames or updating the paths in `js/app.js`.
- **Social links**: update the `href` values for GitHub, LinkedIn, Facebook and WhatsApp across `index.html`.
- **Project data**: edit the `PROJECTS` array at the top of `js/app.js` to update copy, tech stacks, or add/remove projects.

## Notes

- Fully responsive: desktop, laptop, tablet, mobile and small mobile.
- Custom cursor and magnetic buttons are automatically disabled on touch devices.
- Respects `prefers-reduced-motion` for animation-sensitive users.
