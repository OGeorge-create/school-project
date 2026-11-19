# A-Z Waterproofing & Construction — Project Documentation

## 1. Overview

**A-Z Waterproofing and Construction** is a commercial and residential waterproofing materials supplier and contractor based in **Kumasi, Ghana**. The business supplies high-grade waterproofing products and construction materials engineered to keep buildings safe, dry, and leak-free through tropical rainy seasons.

The website has been converted into a **100% standalone, zero-dependency static website** (Pure HTML5, CSS3, and Vanilla JavaScript). It requires **no Node.js, no npm packages, no Vite bundler, and no build processes**.

---

## 2. Directory Structure

```text
furnish-v1.0.0/
├── index.html            # Home page (Hero slider, featured products, rainproofing banner)
├── about.html            # About Us (Company story, mission, core values, leadership team)
├── products.html         # Catalog (Retail & wholesale coatings, D.P.C, primers, sealants)
├── testimonials.html     # Client reviews & testimonials from Kumasi and across Ghana
├── contact.html          # Contact info, Kumasi address, quote request form, map
├── README.md             # Quick start guide
├── PROJECT_DOCUMENTATION.md # Technical documentation (this file)
└── assets/
    ├── css/
    │   └── style.css     # Complete compiled stylesheet (Bootstrap 5.3 + custom theme tokens)
    ├── js/
    │   └── main.js       # Standalone vanilla JavaScript (Swiper carousel initialization)
    ├── images/           # Product photos, hero slider assets, avatars, and covers
    │   ├── avatar/       # Team and reviewer photos
    │   └── slider/       # Cutout imagery for hero banners
    ├── bootstrap-icons.woff
    └── bootstrap-icons.woff2
```

---

## 3. Technology Stack (Zero-Dependency)

| Component | Implementation | Notes |
| :--- | :--- | :--- |
| **Markup** | HTML5 Semantic Elements | Standard semantic markup across all 5 pages. |
| **Styling** | `assets/css/style.css` | Standalone compiled stylesheet containing all Bootstrap 5.3 components, customized colors, Poppins typography, non-rounded styling, and responsive positioning utilities. |
| **Iconography** | Bootstrap Icons & Webfonts | Vector icon font referenced via local woff/woff2 files in `assets/`. |
| **Carousels** | Swiper 11 (via CDN) + `assets/js/main.js` | Dynamic attribute-driven carousel initialization (`data-speed`, `data-space-between`, `data-breakpoints`). |
| **Interactive UI** | Bootstrap 5.3 (via CDN) | Powers mobile offcanvas drawer menus, forms, and modals. |
| **Page Preloader** | Pure CSS + Vanilla JS | Minimalist geometric sliding-box loader animation (Uiverse by alexruix) with smooth overlay fade-out. |

---

## 4. Product Catalog Breakdown

The site showcases key retail and contractor wholesale building materials:
- **Polyurethane Waterproof Paint (Big Bucket)** — GH₵ 850.00 (Wholesale bulk tier: GH₵ 780.00)
- **High-Adhesion Primer 5kg** — GH₵ 220.00 (Wholesale bulk tier: GH₵ 195.00)
- **Heavy-Duty D.P.C (Damp Proof Course Roll)** — GH₵ 180.00 (Wholesale bulk tier: GH₵ 155.00)
- **Cementitious Waterproof Slurry (20kg Bag)** — GH₵ 310.00 (Wholesale bulk tier: GH₵ 280.00)
- **Waterproof Roof & Crack Sealant (5L)** — GH₵ 195.00 (Wholesale bulk tier: GH₵ 170.00)
- **Self-Adhesive Bitumen Flashing Tape (10m)** — GH₵ 140.00 (Wholesale bulk tier: GH₵ 120.00)

---

## 5. How to Deploy & Use

- **Local Preview**: Double-click [index.html](file:///c:/Users/O.G/Downloads/Compressed/furnish-v1.0.0/index.html) to view the website in any browser.
- **Production Hosting**: Upload the contents of this folder directly to any host (cPanel, Apache, Nginx, Netlify, GitHub Pages, Vercel) without running `npm install` or `npm run build`.
