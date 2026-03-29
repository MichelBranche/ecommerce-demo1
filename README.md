# 🪓 Brutalist Streetwear Archive (E-Commerce)

![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react&logoColor=black) 
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white) 
![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?logo=react-router&logoColor=white) 
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?logo=greensock&logoColor=white) 
![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=flat)

An experimental, avant-garde multi-page e-commerce web platform designed with a raw, brutalist aesthetic. Inspired by extreme UI/UX concepts, underground fashion "zines", post-punk manifestos, and industrial concrete logic.

## 🩸 The Core Concept

This website deliberately breaks standard UI conventions while maintaining high-end e-commerce functionality:
- **Paper-Tear Navigation**: Custom GSAP animations that literally rip the DOM to transition between homepage sections.
- **Premium Smooth Scrolling**: Enforced via Studio Freight's `Lenis`, generating buttery smooth physics against huge `GSAP` Parallax speeds.
- **Micro-Vandalism**: An interactive `CursorInk` class replacing the traditional mouse pointer, allowing users to "stamp" error symbols across the page.
- **Multi-Page Routing**: A full transition from SPA to MPA via `react-router-dom`. Independent `/product/:id` pages feature brutalist split-screen layouts serving dedicated data.
- **Terminal Checkout**: A fully operative cart Context API linked to an Off-Canvas brutalist drawer, resolving into a monolithic fake checkout terminal path (`/checkout`).

## 🛠 Tech Stack
This project runs entirely on modern front-end framework protocols:
- **Framework:** React + Vite
- **Routing:** React Router v6
- **State Management:** React Context API (`CartContext`)
- **Animation Engine:** GSAP (Core, ScrollTrigger, `@gsap/react`)
- **Scroll Physics:** Lenis (`lenis/react`)
- **Styling:** Pure Vanilla CSS3 (CSS Variables for Brutalist Design Tokens)

## ⚡ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/brutalist-streetwear-archive.git
   cd brutalist-streetwear-archive
   ```

2. **Install dependancies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   The application will start blazing fast via **Vite** at `http://localhost:5173/`.

### 📦 Build for Production (GitHub Pages / Vercel / Netlify)
   ```bash
   npm run build
   ```
   The optimized, minified bundle will be generated in the `/dist` directory. You can preview the production build using `npm run preview`.

## 🎨 Design Philosophy
- **Colors**: Strictly `var(--pure-black)` (#050505), `var(--grey-paper)` (#E0E0E0), and hyper-aggressive `var(--print-red)` (#FF3333).
- **Typography**: Combining `Anton` (Massive, uppercase, no-letter-spacing impact font) and `Space Mono` (developer-style terminals and small prints).
- **Image Filters**: Extensive use of `mix-blend-mode: multiply` and `grayscale(100%)` on Hover states to create physical print & zine aesthetics on digital assets.

---
*Design by MICHEL BRANCHE*
