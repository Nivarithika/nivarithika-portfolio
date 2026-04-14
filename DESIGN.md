# Design Brief: Nivarithika M Portfolio

## Tone & Purpose
Premium luxury tech showcase. Bold, modern, interactive. Dark-themed portfolio that impresses on first load with neon gradients, smooth animations, and glassmorphism depth.

## Differentiation
Neon pink-violet gradient text on deep black, floating profile image with glow halo, glassmorphism cards with backdrop blur, continuous smooth animations (fade-in, slide-up, float, parallax), and light gray text for readability.

## Color Palette (OKLCH)

| Role | Light | Dark | Usage |
|------|-------|------|-------|
| **Background** | 0.99 0 0 | 0.06 0 0 | Page background, deep black |
| **Foreground** | 0.15 0 0 | 0.93 0 0 | Text, white/light gray |
| **Card** | 1.0 0 0 | 0.12 0 0 | Section backgrounds, glassmorphic |
| **Primary (Neon Pink)** | 0.35 0 0 | 0.68 0.26 317 | Accent, neon glow effects |
| **Accent (Neon Violet)** | 0.35 0 0 | 0.55 0.24 274 | Secondary neon, gradient component |
| **Destructive** | 0.55 0.22 25 | 0.65 0.19 22 | Error states, alerts |

## Typography

| Layer | Font | Weight | Size (scale) |
|-------|------|--------|--------------|
| **Display** | Space Grotesk | 600–700 | 1.875–3.5rem |
| **Body** | Inter | 400–500 | 0.875–1.125rem |
| **Mono** | JetBrains Mono | 400–600 | 0.75–1rem |

Headings bold, modern, gradient text. Body text clean, readable (white/light gray on dark). Gradient text using `bg-clip: text` on primary display elements.

## Structural Zones

| Zone | Background | Border | Shadow | Density |
|------|-----------|--------|--------|---------|
| **Header/Nav** | 0.12 0 0 (card) | 0.20 0 0 (border, 0.2 alpha) | glow-primary on hover | Tight, fixed |
| **Hero** | 0.06 0 0 (background) | None | None | Spacious, large typography |
| **Content Sections** | 0.06 0 0 (background) | None | None | Alternating rhythm |
| **Cards** | 0.12 0 0 + glassmorphism | 0.20 0 0 (0.2 alpha) | glow-primary on hover | Moderate padding |
| **Footer** | 0.12 0 0 (card) | 0.20 0 0 (border, 0.2 alpha) | None | Tight, centered |

## Component Patterns

- **Cards**: Glassmorphic (backdrop-filter: blur, 0.1 opacity bg, 0.2 alpha border), hover glow-primary, smooth transition.
- **Buttons**: Gradient-primary or gradient-neon background, text-foreground, neon glow on hover, smooth lift (translateY -2px).
- **Text Gradient**: `text-gradient` utility class for neon pink-violet heading accents.
- **Glow Effects**: `glow-primary`, `glow-secondary`, `glow-hover` for interactive elements.
- **Profile Image**: Circular, `glow-primary` halo, `animate-float` for continuous floating motion.

## Motion & Animation

| Animation | Duration | Easing | Use Case |
|-----------|----------|--------|----------|
| `fade-in` | 600ms | ease-out | Section entry on scroll |
| `slide-up` | 600ms | ease-out | Content reveal, staggered |
| `float` | 3s | ease-in-out ∞ | Profile image, decorative blobs |
| `glow-pulse` | 2s | ease-in-out ∞ | Interactive element emphasis |

Smooth scrolling, parallax on hero, hover animations on cards and buttons. No jarring transitions.

## Elevation & Depth

Deep background (0.06 0 0) with layered cards (0.12 0 0) and glassmorphism blur (10px backdrop-filter). Neon glows create "lifted" impression without hard shadows. Floating elements enhance visual hierarchy.

## Responsive Design

- **Mobile-first**: Stacked layouts, single-column cards, large buttons (56px min).
- **Tablet** (`md:`): 2-column grids, wider cards.
- **Desktop** (`lg:`): 3-column grids, hero left-text/right-image layout.
- **Breakpoints**: `sm:` 640px, `md:` 768px, `lg:` 1024px, `2xl:` 1400px.
- **No overlapping or layout issues**: Flexbox/grid-based, proper spacing, touch targets.

## Spacing & Rhythm

- **Base unit**: 0.25rem (4px)
- **Padding**: 1rem (interior), 1.5rem (section), 2rem (hero)
- **Gaps**: 1rem (card grid), 1.5rem (section margin)
- **Breathing room**: Large vertical gaps between major sections.

## Custom Utilities

- `.gradient-primary`: Primary neon gradient
- `.gradient-neon`: Animated neon gradient
- `.text-gradient`: Gradient text (bg-clip, text-fill)
- `.glow-primary`, `.glow-secondary`: Box-shadow neon glows
- `.glow-hover`: Intensified glow on hover
- `.glassmorphic`: Frosted glass card effect
- `.transition-smooth`: 0.3s cubic-bezier ease

## Accessibility

- WCAG AA contrast: foreground-on-background ≥ 7:1 (0.93 on 0.06).
- Focus ring: neon pink (0.68 0.26 317).
- Reduced motion: Disable float/glow-pulse for `prefers-reduced-motion`.
- Touch targets: 56px minimum buttons.

## Constraints

- **No Bootstrap blue, no default shadows**: Neon palette only.
- **No color function mixing**: OKLCH values in OKLCH() only.
- **No raw hex/named colors**: All colors via CSS variables.
- **No floating without anchors**: Blobs/images have defined container.
- **Mobile-responsive first**: Test all layouts at 375px, 768px, 1200px.

## Signature Detail

Neon pink-violet gradient text on deep black background + floating profile image with glowing halo + continuous smooth animations + glassmorphism cards with backdrop blur = premium, modern, memorable portfolio experience.
