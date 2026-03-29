# Brutalist Streetwear Archive

An experimental, avant-garde single-page editorial web experience designed with a raw, brutalist aesthetic. Inspired by extreme UI/UX concepts, underground fashion "zines", and post-punk manifestos.

## ⚠️ The Aesthetic

This website deliberately breaks standard UI conventions:
- **No Smooth Scrolling**: Navigation implements "Paper-Tear" blind jumps, mimicking a torn magazine.
- **Destructive Cursor**: Active cursor is replaced by a custom GSAP crosshair that permanently stamps the page layout upon clicking, acting as digital vandalism.
- **CCTV Storefront**: Product catalogues are displayed through a simulated closed-circuit surveillance camera grid with realtime timestamps, heavy scanlines, and CRT distortion filters.
- **GSAP Chaos**: Parallax images scatter, texts infinitely crawl, and images aggressively explode on scroll.
- **Raw Media**: Uses raw photography (Moshpits, concrete brutalism, streetwear cuts) heavily degraded directly in CSS via `mix-blend-mode` ink-blending, grayscales, and brutal saturation.

## Tech Stack
- **HTML5** & **Vanilla CSS3**
- **JavaScript**
- **GSAP 3.12.2** & **ScrollTrigger** (for parallax, marquees, and cut-scene transitions)

## Setup
No build steps required. It's a pure front-end static layout.
1. Clone the repository.
2. Open `index.html` in any modern browser. 
3. (Optional) Run a local server for testing cross-origin/fonts (e.g. `npx serve .` or `python -m http.server`).

## Deployment (GitHub Pages)
This project is perfectly tailored for immediate hosting on **GitHub Pages**.
Go to your Repository Settings -> Pages -> Source: Deploy from branch (`main` or `master`) -> `/root` folder. The site will be instantly live.
