# Mobile & Quality Overhaul Changelog (2026 Edition)
**Repository**: `niranjanpotter.github.io`  
**Branch**: `feat/mobile-overhaul`  
**Date**: November 2026  
**Auditor & Implementation**: Antigravity Full-Stack Agent  

---

## Executive Summary
This overhaul resolves critical mobile layout breakages, horizontal scroll blowouts, unstyled article pages, redundant 1.6MB duplicate clones, and missing self-hosted assets across the MuleSoft Enterprise Knowledge Hub. All changes strictly adhere to zero-content-loss rules and maintain 100% desktop fidelity (`>= 1024px`).

---

## Phase-by-Phase Deliverables

### Phase 1: Stop the Bleeding (Stylesheet, Duplicates & Diagram Overflow)
- **Unified Article Stylesheet**: Created `assets/css/article.css` featuring dark/light mode CSS variables, responsive container (`max-width: 1050px`), Plus Jakarta Sans and JetBrains Mono typography, sticky glassmorphic navigation, FAQ accordion cards, code blocks, and related topics grid.
- **Git Tracking Fix**: Removed `assets/` and `data/` from `.gitignore`. Previously, `assets/` was untracked, causing `assets/style.css` to 404 on GitHub Pages and leaving all 20 article pages unstyled.
- **Article Pages Updated**: All 20 standalone technical guides updated to link to `assets/css/article.css` and use unified typography.
- **Duplicate Page Elimination**: Replaced duplicate 1.7 MB clones (`guide.html`, `integrationmind.html`, and `integrationmind/index.html`) with `<1 KB` zero-delay redirect stubs (`<meta http-equiv="refresh" content="0; url=/">`, canonical link to root, `robots: noindex`, and instant `window.location.replace('/')` fallback). Saved over 5.1 MB of repository bloat.
- **Sitemap Optimization**: Cleaned `sitemap.xml` from 23 entries to 21 valid, canonical 200-OK URLs (removed duplicate `guide.html` and `integrationmind.html`).
- **SVG Diagram Responsiveness**: Removed `min-width: 680px` from `.responsive-svg` in `index.html`. Replaced with `max-width: 100%; height: auto; display: block;`. Added interactive "⤢ Expand" button on every diagram wrapper and a full-screen Lightbox modal for detailed diagram inspection on mobile devices.
- **Theme Color Meta**: Added responsive theme-color meta tags (`#090D16` dark, `#ffffff` light) and `color-scheme: dark light` across all pages.
- **Commit**: `fix(mobile): article stylesheet, duplicate pages, svg overflow` (`f1017b0`)

### Phase 2: Mobile Navigation & Off-Canvas Module Drawer
- **Responsive Breakpoints**:
  - Mobile: `< 640px`
  - Tablet: `640px - 1023px`
  - Desktop: `>= 1024px` (visually untouched, 100% preserved)
- **Mobile Header**: On viewports `< 1024px`, the header compacts into a brand logo on the left and quick action buttons on the right: Mobile Search trigger (`🔍`), Theme toggle (`🌓`), and Hamburger navigation button (`☰`).
- **Off-Canvas Navigation Drawer**: On viewports `< 1024px`, `#toc-sidebar` transforms from a static page element into a hardware-accelerated slide-out drawer (`transform: translateX(-100%)` to `translateX(0)` with backdrop blur overlay). Features a dedicated close button (`✕`), closes on outside click, closes on ESC key, and auto-closes when any module link is tapped.
- **Floating Action Buttons (FAB)**:
  - Bottom-left: "☰ Modules" button (minimum 48x48px touch target) for one-tap drawer access while reading.
  - Bottom-right: "↑" Back-to-top floating button, automatically revealed when scrolled past 400px.
- **Commit**: `feat(mobile): hamburger header, off-canvas module drawer, mobile search` (`0c01853`)

### Phase 3: Mobile Content & Component Responsiveness
- **Hero Portal Scaling**: Applied `clamp()` typography to hero headline (`clamp(1.6rem, 5vw, 2.2rem)`) and padding (`clamp(20px, 4vw, 36px)`).
- **2-Column Sizing Metric Deck**: Redesigned `.metric-deck` on mobile (`< 640px`) to display in a balanced 2-column grid (`grid-template-columns: repeat(2, 1fr)`) instead of squished or single-column layouts.
- **DataWeave Studio Lab Tabs (< 768px)**:
  - Transformed DataWeave modal into full-screen workspace (`width: 100vw; height: 100dvh;`).
  - Implemented mobile tab bar with 4 tabs: `[📥 Input]`, `[⚡ Script]`, `[📤 Output]`, and `[💡 Notes]`.
  - Automatically switches to the `[📤 Output]` tab upon clicking "▶ Run / Transform" on mobile.
- **Table Responsiveness**: Automatically wrapped all 49 documentation tables inside `.table-scroll` containers with `-webkit-overflow-scrolling: touch`.
- **Code Block Usability**: Enhanced all 49 code blocks (`pre`) with floating "📋 Copy" buttons and smooth horizontal scrolling.
- **Touch Targets**: Enforced 44px minimum touch targets on all interactive buttons, pills, links, and drawer items.
- **Commit**: `feat(mobile): responsive hero, cards, code, tables, DW playground tabs` (`6d0b2e3`)

### Phase 4: Performance, Self-Hosted Fonts & Assets
- **Self-Hosted WOFF2 Fonts**: Downloaded Google Fonts WOFF2 files directly into `fonts/` for Plus Jakarta Sans and JetBrains Mono.
- **Font Display Swap**: Created `assets/css/fonts.css` with `@font-face` rules utilizing `font-display: swap` for immediate text rendering without FOIT (Flash of Invisible Text).
- **Asset Directory Structure**: Organized into `assets/css/`, `assets/js/`, and `fonts/`.
- **Commit**: `perf(mobile): extract css/js, self-host fonts, font-display swap` (`533d884`)

### Phase 5: Verification & Testing Matrix
- Validated with automated headless Edge Chromium CDP test suite across all 4 target device viewports.
- 100% clean HTML validation across all 25 repository HTML files.

---

## Viewport Test Matrix Verification

| Device Viewport | Dimensions | Scroll Width | Inner Width | Overflow Status | Mobile Drawer | DW Tabs | Desktop View Preserved |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Samsung Galaxy S22/S23/S24** | 360 × 800 px | 360 px | 360 px | ✅ **No Overflow** | ✅ Off-canvas | ✅ Tabbed | N/A |
| **iPhone 12 / 13 / 14 / 15 / 16** | 390 × 844 px | 390 px | 390 px | ✅ **No Overflow** | ✅ Off-canvas | ✅ Tabbed | N/A |
| **iPad Mini / Air (Portrait)** | 768 × 1024 px | 768 px | 768 px | ✅ **No Overflow** | ✅ Off-canvas | ✅ Desktop 2x2 | N/A |
| **MacBook / Desktop High-Res** | 1440 × 900 px | 1425 px | 1440 px | ✅ **No Overflow** | Hidden (Sticky) | Hidden (4-col) | ✅ **100% Identical** |

---

## File Size & Performance Summary

| Metric | Before Overhaul | After Overhaul | Improvement |
| :--- | :--- | :--- | :--- |
| **`guide.html`** | 1,720 KB | 0.5 KB | **-99.97%** |
| **`integrationmind.html`** | 1,720 KB | 0.5 KB | **-99.97%** |
| **`integrationmind/index.html`** | 1,720 KB | 0.5 KB | **-99.97%** |
| **Article Page Stylesheet** | 0 KB (404 untracked) | 9.8 KB (`assets/css/article.css`) | **100% Styled** |
| **Self-Hosted WOFF2 Fonts** | Remote CDN only | 10 local `.woff2` files | **Zero 3rd-party font blocking** |
| **Mobile SVG Overflow** | 680px blowout on all 61 SVGs | Fluid responsive + Lightbox modal | **Zero horizontal blowout** |
| **Google Search Console Sitemap** | 23 URLs (2 duplicates) | 21 canonical URLs | **Clean crawl & indexing** |
