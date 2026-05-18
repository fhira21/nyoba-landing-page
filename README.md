# LaceFresh 👟 - Premium Sneaker & Shoe Restoration Landing Page

LaceFresh is a modern, highly interactive, and visually stunning single-page landing page built using **React JS**, **Tailwind CSS**, and **Framer Motion** for a luxury shoe cleaning and restoration service brand. 

Featuring custom HSL Hypebeast-inspired palettes, glassmorphic card grids, a sliding before & after gallery, process timelines, modern accordion FAQs, and gorgeous fluid floating water-droplet/bubble animations.

---

## 🎨 Brand Design & Colors
- **Cream** (`#FFF6DE`): Warm premium background canvas.
- **Soft Turquoise** (`#8BDFDD`): Clean water, sanitization, and bubble vibe.
- **Coral Orange** (`#F48F68`): Sneaker culture energy, CTAs, and accents.
- **Warm Yellow** (`#FFE394`): Premium, glowing restoration badges.

---

## ⚡ Tech Stack
- **Framework**: React JS (Vite Bundle)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (for staggered scroll reveals, parallax floats, active slides, and accordion flexes)
- **Icons**: Lucide React

---

## 📁 Key Features & Components
1. **Navbar**: Sticky glassmorphic bar that transitions smoothly on scroll; includes mobile hamburger.
2. **Hero**: Big sneakerhead headline with custom floating 3D bubble/droplet details and an interactive floating sneaker graphic.
3. **Services**: Grid cards describing 6 core care options (Deep Clean, Restoration, Whitening, etc.).
4. **Why Choose Us**: Bullet points explaining why collectors trust LaceFresh (turnaround, organic formulas).
5. **Before & After**: Interactive sliders showing sneaker restorations using high-definition comparison graphics.
6. **Process**: Alternating Chronological 4-step walkthrough: Drop-off, Inspection, Deep Clean, Ready to Wear.
7. **Testimonials**: Drag-and-swipe rating card slider.
8. **Pricing**: 3 tiered plans highlighting the "Deep Clean" (Most Popular) package.
9. **FAQ Accordion**: Smoothly expanding help grid using Framer Motion.
10. **CTA Section**: High contrast deep turquoise banner urging bookings with a 20% discount hook.
11. **Footer**: Quick links, social icons, and stylized branding details.

---

## ⚙️ Installation & Local Setup

### 1. Install Dependencies
Navigate to the root directory and install all node packages:
```bash
npm install
```

### 2. Run Local Development Server
Launch the local server:
```bash
npm run dev
```

> [!NOTE]
> **Custom Asset Copier**: On startup, Vite will automatically run the custom `copy-assets.js` script to copy the beautiful generated premium sneaker images from the agent's database directly into `src/assets/` in your workspace so you don't see any blank or missing pictures.

### 3. Build for Production
Bundle the optimized build:
```bash
npm run build
```
