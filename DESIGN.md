# Design System: AIHQ.in

This document describes the design system and visual rules for AIHQ.in, following the Google Stitch DESIGN.md format. It ensures consistency and aesthetic quality across the project.

## 1. Principles
- **Minimalist & Focused**: Content should take center stage. Use whitespace generously to let elements breathe.
- **High Contrast & Accessible**: Ensure text is readable. Avoid pure blacks (`#000000`) and pure whites (`#ffffff`) for large backgrounds; prefer tinted darks and off-whites.
- **Intentional Motion**: Use subtle animations (like slow transitions or slight scales on hover) that feel considered, not distracting.

## 2. Color
We use a refined, mostly monochromatic palette that feels deep and premium.

- **Background (Light Mode)**: Off-white, never pure white (e.g., `#fafafa` or `hsl(0, 0%, 98%)`).
- **Background (Dark Elements)**: Tinted dark grey/black, never pure black (e.g., `#0a0a0a` or `hsl(0, 0%, 4%)`).
- **Text (Primary)**: High contrast against the background, but slightly softened (e.g., `#171717` on light, `#ededed` on dark).
- **Text (Muted)**: For secondary information (e.g., `#737373` on light, `#a3a3a3` on dark).
- **Accents**: Subtle usage of color only when necessary for semantic meaning or specific brand highlights.

## 3. Typography
- **Font Family**: A clean, modern sans-serif (e.g., Inter, Geist, or the system default sans-serif).
- **Headings**: Tight tracking (`tracking-tighter`), bold weights (`font-bold`), and large sizes for impact.
- **Body**: Relaxed leading (`leading-relaxed`) for readability.
- **Details**: Uppercase with wide tracking (`uppercase tracking-widest`) for small labels or metaphysical metadata (e.g., "INDIA 🇮🇳").

## 4. Spacing and Elevation
- **Spacing**: Use a generous 8pt/4pt grid system. Sections should have substantial vertical padding (e.g., `py-24` or `py-32`).
- **Elevation**: Rely on borders (`border-border`) and background color contrast rather than heavy drop shadows to separate sections. Avoid nested cards.

## 5. Components

### Buttons
- Solid backgrounds with high contrast text.
- Medium to large sizes (`size="lg"`).
- Medium font weight.
- Subtle hover transitions (opacity or slight background color shift).

### Links
- Inline text links should have a subtle underline or border-bottom that deepens on hover.
- Navigation links use muted colors that transition to foreground colors on hover.

## 6. Do's and Don'ts
- **DO** use `border-y` to create crisp horizontal separations between full-width sections.
- **DO** use muted text for secondary descriptions to establish clear visual hierarchy.
- **DON'T** use `bg-black` or `#000000` for backgrounds. Use a tinted dark neutral like `bg-neutral-950` or `#0a0a0a`.
- **DON'T** rely on generic tech illustrations. Use purposeful imagery, like the tinted India map.
