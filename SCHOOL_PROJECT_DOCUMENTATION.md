# A-Z Waterproofing and Construction — Website Project Documentation

---

## 1. COVER PAGE

**Project Title:** A-Z Waterproofing and Construction — Business Website

**Student Name:** *(Your Name)*

**Email:** *(Your Email)*

**Institution:** *(Your School / College)*

**Date:** November 2026

---

## 2. TABLE OF CONTENTS

1. Cover Page
2. Table of Contents
3. Chapter 1 — Introduction
4. Chapter 2 — Literature Review / System Analysis
5. Chapter 3 — System Requirements
6. Chapter 4 — System Design
7. Chapter 5 — Implementation
8. Chapter 6 — Testing
9. Chapter 7 — Conclusion & Recommendations
10. Appendices

---

## 3. CHAPTER 1: INTRODUCTION

### 1.1 Background of the Problem

A-Z Waterproofing and Construction is a real business based in **Kumasi, Ghana**. They sell waterproofing products like polyurethane paint, primers, damp-proof course (D.P.C) rolls, and sealants. These products help protect buildings from water damage during Ghana's heavy rainy seasons.

Before this website was built, the business had no online presence. Customers had no way to see what products were available, check product categories, or contact the business from home. Everything was done in person or by phone. This made it hard for new customers to find the business and hard for the business to grow.

### 1.2 Problem Statement

The business needed a simple, professional website that:

- Shows the products they sell
- Tells people about the company
- Allows customers to request a quote or get in touch
- Works well on phones, tablets, and computers
- Loads fast without needing a server or internet hosting service to run code

There was also no documentation for how the website is built, making it hard for anyone else to understand or update it in the future.

### 1.3 Objectives

**Main Objective:**
To design and build a fully working, professional static website for A-Z Waterproofing and Construction that works on any device and can be opened directly from a web browser without any special server setup.

**Specific Objectives:**
- Build a Home page with a product image slider
- Build an About Us page explaining the company
- Build a Products page showing all 8 product items in a clean image grid
- Build a Testimonials page with customer reviews
- Build a Contact page with a quote request form
- Add a page loading animation so the site feels professional
- Add a cookie consent banner for privacy compliance
- Add a Privacy Policy page
- Make every page work correctly on mobile phones

### 1.4 Scope

This project covers the design and development of a **5-page static website** plus a Privacy Policy page (6 pages total). It does not include:

- A shopping cart or payment system (the site is a showcase, not a shop)
- A database or backend server
- An admin panel
- User login system

The site is for **display and contact purposes only.**

### 1.5 Significance

- Customers can now find the business online and browse products from anywhere
- The business looks professional and trustworthy to new clients
- The website loads fast because there is no server or database involved
- Any web developer can open and edit the files without installing any software
- The project demonstrates real-world web development skills using HTML, CSS, and JavaScript

---

## 4. CHAPTER 2: LITERATURE REVIEW / SYSTEM ANALYSIS

### 2.1 Existing Systems (What Others Do)

Many similar businesses in Ghana still rely on WhatsApp or word-of-mouth to reach customers. Some use Facebook pages, which are free but hard to customise and not professional. Some businesses use website builders like Wix or Squarespace, which cost monthly fees and limit design control.

Larger companies use full e-commerce platforms like Shopify or WooCommerce, but these are expensive, need monthly payments, need a database, and are too complex for a business that just wants to show products — not sell them online.

### 2.2 Proposed System (Improvements in This Project)

This project builds a **custom static website** that:

- Costs nothing to run (no monthly subscription needed — it can be hosted free on GitHub Pages or Netlify)
- Loads faster than any database-driven website because there is no server processing
- Can be edited with just a text editor — no special software needed
- Looks just as professional as paid website builders
- Has a product showcase instead of a shop (which is what this business actually needs)
- Includes a cookie banner and privacy policy page, which are legally required for professional websites
- Has a smooth page loading animation for a polished feel

### 2.3 Feasibility Study

| Type | Assessment |
|:---|:---|
| **Technical** | Feasible. The site uses only HTML, CSS, and JavaScript — technologies available in every web browser. No server or database is needed. |
| **Economic** | Feasible. All tools used are free (VS Code, Bootstrap CDN, Swiper CDN). Hosting can be done for free on GitHub Pages or Netlify. |
| **Operational** | Feasible. Any staff member can open the HTML files in a browser. A basic knowledge of HTML is enough to update product names or contact details. |

---

## 5. CHAPTER 3: SYSTEM REQUIREMENTS

### 3.1 Functional Requirements

What the website must be able to do:

- **Home page** must show a product image slider with 3 slides that auto-play and have next/previous navigation
- **Products page** must show all 8 products as a clean image grid with a category label, product name, quantity selector (+ / - stepper), and an "Order via WhatsApp" button that sends order details in JSON format to WhatsApp
- **About page** must explain the company mission and show 3 core values
- **Testimonials page** must show customer reviews
- **Contact page** must have a form where customers can submit their name, email, and message
- **Every page** must show a page loading animation when it first opens
- **Every page** must show a cookie consent banner on first visit
- **Privacy Policy page** must explain how customer data is used
- **Navbar** must collapse into a slide-out menu on small screens (mobile)
- **Footer** must appear on every page with links and contact info

### 3.2 Non-Functional Requirements

| Requirement | Detail |
|:---|:---|
| **Performance** | Pages must load in under 3 seconds on a normal internet connection |
| **Responsiveness** | Site must look correct on screens from 320px wide (small phones) to 1920px wide (large monitors) |
| **Compatibility** | Must work in Chrome, Firefox, Edge, and Safari browsers |
| **Maintainability** | Code must be easy to read and update — no minified or obfuscated code for the HTML files |
| **Privacy** | Cookie consent banner must appear on first visit; consent choice must be remembered so it does not keep appearing |
| **Accessibility** | Images must have `alt` text; buttons must have proper labels |

### 3.3 Hardware / Software Requirements

**To view the website (end user):**
- Any smartphone, tablet, or computer made after 2015
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- An internet connection (to load Bootstrap and Swiper from CDN)

**To build or edit the website (developer):**
- A computer running Windows, macOS, or Linux
- **VS Code** (free text editor) — or any other text editor
- A web browser for preview
- No Node.js, no npm, no server needed

**Libraries used (all loaded from CDN — no download needed):**

| Library | Version | What it does |
|:---|:---|:---|
| Bootstrap | 5.3.3 | Provides layout grid, navbar, buttons, cards, and responsive utilities |
| Bootstrap Icons | (via style.css) | Provides icons like telephone, WhatsApp, Facebook |
| Swiper | 11 | Powers the image slider on the Home page |

---

## 6. CHAPTER 4: SYSTEM DESIGN

### 4.1 Site Architecture

The website is made of **6 HTML files** that all link to the same stylesheet and JavaScript file.

```
furnish-v1.0.0/
│
├── index.html                    ← Home page
├── about.html                    ← About Us page
├── products.html                 ← Products page
├── testimonials.html             ← Testimonials page
├── contact.html                  ← Contact page
├── privacy-policy.html           ← Privacy Policy page
│
├── SCHOOL_PROJECT_DOCUMENTATION.md   ← This file
│
└── assets/
    ├── css/
    │   └── style.css             ← All styles (Bootstrap + custom)
    ├── js/
    │   └── main.js               ← All JavaScript (loader, slider, cookie banner)
    └── images/
        ├── product-img-1.jpg     ← Product photos (1 to 8)
        ├── product-img-2.jpg
        ├── ...
        ├── about.jpg
        ├── index.jpg
        └── slider/
            ├── slider-img-1.png
            ├── slider-img-2.png
            └── slider-img-3.png
```

### 4.2 Page Flow Diagram

```
User opens any page
        │
        ▼
Page loader animation shows (box animation)
        │
        ▼
Page content loads
        │
        ▼
Loader fades out after ~700ms
        │
        ▼
Cookie banner slides up from bottom (first visit only)
        │
        ├── User clicks "Accept All"  → banner disappears, choice saved
        └── User clicks "Decline"     → banner disappears, choice saved
```

### 4.3 Navigation Flow

```
                        ┌─────────────┐
                        │   index.html │  (Home)
                        └──────┬──────┘
                               │  Navbar links
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
 about.html             products.html          testimonials.html
 (About Us)             (Products)             (Testimonials)
        │                      │                      │
        └──────────────────────┼──────────────────────┘
                               │
                        contact.html
                        (Contact / Quote)
                               │
                        privacy-policy.html
                        (linked from footer)
```

### 4.4 Components on Every Page

Every page has these same parts:

| Component | Description |
|:---|:---|
| **Page Loader** | Animated box loader that shows while the page is loading |
| **Navbar** | Logo on the left, navigation links in the centre, phone number and hamburger menu on the right |
| **Offcanvas Menu** | Slide-out mobile menu triggered by the hamburger icon |
| **Footer** | Company name, navigation links, social media buttons, email address, copyright notice |
| **Request a Quote button** | Fixed floating button in the bottom-right corner on every page |
| **Cookie Banner** | Slides up from the bottom on first visit (powered by `main.js`) |

### 4.5 UI Design Screenshots

> *(Add screenshots of each page here when submitting your physical or PDF copy)*

Suggested screenshots to include:
1. Home page — hero slider
2. Products page — image grid
3. About page — core values cards
4. Contact page — form
5. Privacy Policy page
6. Cookie banner (bottom of screen)
7. Mobile view — offcanvas navbar open

---

## 7. CHAPTER 5: IMPLEMENTATION

### 5.1 Tools Used

| Tool | Purpose |
|:---|:---|
| **VS Code** | Writing and editing all HTML, CSS, and JS files |
| **Bootstrap 5.3 (CDN)** | Ready-made responsive layout and UI components |
| **Swiper 11 (CDN)** | Product image slider on the Home page |
| **Bootstrap Icons** | Icon set for phone, WhatsApp, social media icons |
| **Google Chrome** | Testing and previewing the website |
| **Chrome DevTools** | Checking mobile layouts and debugging CSS |

### 5.2 Key Code Explained

#### Page Loader (`main.js` — `initializePageLoader()`)

This function runs as soon as the script loads. It finds the `#page-loader` element (the box animation div) and hides it after the page has fully loaded. It waits 700ms so the animation is visible for a moment before disappearing.

```javascript
function initializePageLoader() {
  const pageLoader = document.getElementById('page-loader');
  if (!pageLoader) return;

  const hideLoader = () => {
    pageLoader.classList.add('loaded');   // triggers CSS fade-out
    setTimeout(() => {
      pageLoader.parentNode.removeChild(pageLoader);  // removes from page
    }, 550);
  };

  window.addEventListener('load', () => {
    setTimeout(hideLoader, 700);   // wait 700ms after page load, then hide
  });

  setTimeout(hideLoader, 2500);    // safety: always hide after 2.5 seconds
}
```

#### Cookie Banner (`main.js` — `initializeCookieBanner()`)

This function checks if the user has already given their answer. If they have (stored in `localStorage`), it does nothing. If they have not, it creates the banner and adds it to the bottom of the page. When the user clicks Accept or Decline, the choice is saved and the banner slides away and is never shown again.

```javascript
function initializeCookieBanner() {
  // If user already answered, stop here
  if (localStorage.getItem('az_cookie_consent')) return;

  // Create the banner element
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  // ... (banner HTML added here)

  document.body.appendChild(banner);

  // Slide banner up after 1.2 seconds
  setTimeout(() => {
    banner.classList.add('cookie-banner--visible');
  }, 1200);

  // Handle accept / decline buttons
  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem('az_cookie_consent', 'accepted');
    // slide banner away
  });
}
```

#### Swiper Carousel (`main.js` — `initializeSwiperCarousels()`)

This function finds all elements with the class `swiper-container` on the page and reads settings from `data-` attributes on the HTML element (like speed, autoplay, number of slides). It then creates a Swiper instance for each one. This means no JavaScript needs to change when you add a new slider — you just change the HTML attributes.

```html
<!-- Example: this HTML is all that is needed to configure a slider -->
<div class="swiper-container swiper"
  data-autoplay="true"
  data-autoplay-delay="3000"
  data-navigation="true">
```

#### WhatsApp Order Checkout with JSON (`main.js` — `initializeProductOrderControls()`)

This function allows customers to order any product directly via WhatsApp without needing an e-commerce backend database. It manages the quantity stepper (`+` and `-`) for each product and, upon clicking "Order via WhatsApp", packages the product name and selected quantity into a formatted JSON object. It then opens WhatsApp with this JSON payload ready to send to `0597119749`:

```javascript
const orderPayload = {
  product: productName,
  quantity: quantity
};

const jsonString = JSON.stringify(orderPayload, null, 2);
const whatsappUrl = `https://wa.me/233597119749?text=${encodeURIComponent(jsonString)}`;
window.open(whatsappUrl, '_blank');
```

### 5.3 Styling System

All styles are in one file: `assets/css/style.css`. This file contains:

1. The compiled Bootstrap 5.3 framework styles (the base of the whole layout)
2. Custom styles added at the **bottom** of the file for things Bootstrap does not cover

Custom styles added for this project:

| CSS Section | What it does |
|:---|:---|
| `.page-loader` | Full-screen white overlay that covers the page while loading |
| `.loader`, `.box1`, `.box2`, `.box3` | The animated geometric box loader (3 boxes that move and reshape) |
| `.slider-img-container`, `.slider-product-img` | Makes the hero slider images the right size and centred |
| `.product-card` | Styles the product image cards on the Products page |
| `#cookie-banner`, `.cookie-banner__*` | Styles the cookie consent banner that slides up from the bottom |
| `.policy-section`, `.policy-list` | Styles the headings and bullet lists on the Privacy Policy page |

---

## 8. CHAPTER 6: TESTING

### 6.1 Test Cases

| # | What was tested | How it was tested | Expected result | Pass / Fail |
|:--|:---|:---|:---|:---|
| 1 | Page loader shows on startup | Open any page in browser | Animated boxes show, then fade out after ~1 second | ✅ Pass |
| 2 | Slider auto-plays on Home page | Open `index.html`, wait 3 seconds | Slider moves to next slide automatically | ✅ Pass |
| 3 | Slider arrows work | Click the left and right arrows on the hero slider | Slide changes to previous or next | ✅ Pass |
| 4 | Products page shows 8 products | Open `products.html` | 8 product cards visible in a 3-column grid | ✅ Pass |
| 5 | Mobile menu opens | Resize browser to mobile width, tap the hamburger icon | Offcanvas menu slides in from the right | ✅ Pass |
| 6 | Cookie banner shows on first visit | Clear localStorage, reload any page | Cookie banner slides up after ~1.2 seconds | ✅ Pass |
| 7 | Cookie banner does not show again | Click "Accept All", reload page | Banner does not appear again | ✅ Pass |
| 8 | "Decline" button also dismisses banner | Click "Decline", reload page | Banner does not appear again | ✅ Pass |
| 9 | Privacy Policy link in footer works | Click "Privacy Policy" in footer | Opens `privacy-policy.html` | ✅ Pass |
| 10 | Contact form renders correctly | Open `contact.html` | Form with name, email, and message fields visible | ✅ Pass |
| 11 | "Request a Quote" button is always visible | Scroll down on any page | Button stays fixed in the bottom-right corner | ✅ Pass |
| 12 | Site looks correct on mobile | Open on a smartphone (or use Chrome DevTools device mode) | All pages stack correctly, text readable | ✅ Pass |
| 13 | All navigation links work | Click every link in the navbar | Each link opens the correct page | ✅ Pass |
| 14 | Footer links work | Click Home, About, Products etc. in footer | Each link opens the correct page | ✅ Pass |

### 6.2 Test Results

All 14 test cases passed. The website works correctly across:

- **Desktop** (Windows Chrome, Firefox, Edge)
- **Mobile** (tested using Chrome DevTools device emulator for iPhone SE and Samsung Galaxy S20)

No JavaScript errors were found in the browser console during testing.

---

## 9. CHAPTER 7: CONCLUSION & RECOMMENDATIONS

### 7.1 Challenges Faced

| Challenge | How it was solved |
|:---|:---|
| The PDF template used a PHP/MySQL system — this project is a static site, so sections were adapted | Kept the same chapter structure but replaced code examples with HTML/CSS/JS |
| Making the product images the same height in the grid | Used `object-fit: cover` with a fixed `height: 220px` on the card image |
| The cookie banner was needed on every page but only has one JS function | The function is in `main.js` which every page already loads — it runs automatically on every page |
| The hero slider images appeared at different sizes | Added a `.slider-img-container` wrapper with fixed dimensions and `object-fit: contain` |
| The page loader had to disappear even if images were slow to load | Added a 2500ms safety timeout as a fallback in case `window.load` is slow |

### 7.2 Future Improvements

- **WhatsApp chat button** — add a floating WhatsApp icon so customers can message the business directly from the website
- **Google Maps embed** — embed an interactive map on the Contact page showing the exact location in Kumasi
- **Image optimisation** — compress all product images using tools like TinyPNG to make the site load faster on slow mobile data connections
- **SMS alert form** — when a customer submits the contact form, send an SMS notification to the business owner using a service like Twilio
- **Online catalogue PDF** — add a downloadable PDF price list for contractors who need to share product pricing
- **Google Analytics** — connect Google Analytics to track how many people visit the site and which products they look at most
- **Terms of Service page** — the footer currently links to a Terms of Service page that does not exist yet; this should be created

---

## 10. APPENDICES

### Appendix A: Full File List

| File | Purpose |
|:---|:---|
| `index.html` | Home page |
| `about.html` | About Us page |
| `products.html` | Products showcase page |
| `testimonials.html` | Customer testimonials page |
| `contact.html` | Contact form and location page |
| `privacy-policy.html` | Privacy Policy page |
| `assets/css/style.css` | All CSS styles (Bootstrap + custom) |
| `assets/js/main.js` | All JavaScript (loader, slider, filters, cookie banner) |
| `assets/images/favicon.png` | Website favicon icon |
| `assets/images/product-img-1.jpg` | Product image 1 |
| `assets/images/product-img-2.jpg` | Product image 2 |
| `assets/images/product-img-3.jpg` | Product image 3 |
| `assets/images/product-img-4.jpg` | Product image 4 |
| `assets/images/product-img-5.jpg` | Product image 5 |
| `assets/images/product-img-6.jpg` | Product image 6 |
| `assets/images/product-img-7.jpg` | Product image 7 |
| `assets/images/product-img-8.jpg` | Product image 8 |
| `assets/images/about.jpg` | About page photo |
| `assets/images/index.jpg` | Home page background image |
| `assets/images/slider/slider-img-1.png` | Hero slider image 1 (D.P.C roll) |
| `assets/images/slider/slider-img-2.png` | Hero slider image 2 (AZ MAX paint bucket) |
| `assets/images/slider/slider-img-3.png` | Hero slider image 3 (Primer) |

### Appendix B: JavaScript Functions Summary

| Function | File | What it does |
|:---|:---|:---|
| `initializePageLoader()` | `main.js` | Shows and hides the loading animation |
| `initializeCookieBanner()` | `main.js` | Shows the cookie consent popup on first visit |
| `initializeSwiperCarousels()` | `main.js` | Sets up all image sliders on the page |
| `initializeProductFilters()` | `main.js` | Filter buttons for products (not currently active) |

### Appendix C: User Manual

**How to open the website:**
1. Open the `furnish-v1.0.0` folder
2. Double-click `index.html`
3. The website will open in your default web browser

**How to update a product name:**
1. Open `products.html` in VS Code
2. Find the `<h3>` tag with the product name you want to change
3. Edit the text between the tags
4. Save the file
5. Refresh the browser

**How to update the phone number:**
1. The phone number appears in the navbar and footer of every page
2. Open each HTML file one by one and search for `+233 24 123 4567`
3. Replace it with the correct number
4. Save each file

**How to update the email address:**
1. Search for `info@azwaterproofing.com` in each HTML file
2. Replace with the correct email
3. Save each file

**How to reset the cookie banner (for testing):**
1. Open Chrome DevTools (press F12)
2. Go to **Application** → **Local Storage** → select the site
3. Delete the `az_cookie_consent` key
4. Refresh the page — the banner will appear again

---

*End of Documentation*
