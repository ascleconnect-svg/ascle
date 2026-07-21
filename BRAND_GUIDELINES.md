# ASCLE BRAND GUIDELINES

## Visual Identity & Design System — v1.0

| Version | Author | Date | Companion Doc |
|---|---|---|---|
| 1.0 | Product & Brand Design | July 21, 2026 | [PRD.md](PRD.md) |

> **Sourcing note:** Font pairing and palette logic below are grounded in the `ui-ux-pro-max` design-intelligence database (`Classic Elegant` serif+sans pairing; `Luxury/Premium Brand` dark+gold palette pattern; `Sustainable Energy` nature-green pattern; WCAG contrast rules). No stock palette in the database is an exact match for the Ascle mark, so the hex values in §3 are a custom system derived from the supplied logo artwork and cross-checked against those closest analogs — treat them as the working standard, not a literal database lookup.

---

## 1. Brand Foundation

### 1.1 Positioning
Ascle is a **premium, trust-first home healthcare concierge** — not a discount clinic app. Every visual decision should read as *calm, competent, and unhurried*, in deliberate contrast to the chaos of Lagos traffic and the anxiety of counterfeit medical practitioners the [PRD](PRD.md) identifies as core pain points. The brand should feel closer to a private members' club or a boutique bank than a mass-market ride-hailing app, while remaining legible and fast on low-tier Android hardware.

### 1.2 Brand Attributes
| Attribute | Expressed As | Avoid |
|---|---|---|
| Trustworthy | Deep forest green, verified badges, restrained motion | Neon colors, gamified badges |
| Premium | Serif wordmark, generous whitespace, gold accents used sparingly | Gold overused as a base color; anything "flashy" |
| Calm | Muted, high-contrast dark theme; slow, deliberate transitions | Bright alert-red as a brand color; bouncy/playful easing |
| Rooted / Nigerian | Leaf motif (growth, wellness, indigenous care), warm real photography | Generic global stock-photo doctors; cold clinical blue |

### 1.3 Tagline Lockup
The reference lockup (`GLITZHEALTH TECHNOLOGIES LTD. PRESENTS` / `Ascle` / `We go live August`) establishes three fixed type roles that recur across all brand touchpoints — **eyebrow**, **wordmark**, **accent line** — defined formally in §4.

---

## 2. Logo

### 2.1 Construction
- **Wordmark:** "Ascle" set in a high-contrast serif (see §4 — Playfair Display is the production-safe Google Fonts equivalent to the display face in the artwork), in warm off-white.
- **Leaf mark:** A single leaf glyph integrated into the ascender/counter of the "A," symbolizing growth, vitality, and natural/home-based care. This is the only place brand green-on-green iconography is permitted at small scale.
- **Divider rule:** A thin, gold horizontal rule (~120–160px at desktop scale, 1–2px stroke) separates the wordmark from supporting copy. Never render this rule in any color other than Ascle Gold.
- **Eyebrow / accent text:** Small-caps, wide letter-tracking (≈0.15–0.2em), used above the wordmark (presenter/eyebrow, in muted gray) and below it (accent line, in Ascle Mint).

### 2.2 Clearspace & Minimum Size
- Clearspace on all sides = the height of the leaf glyph (treat it as the "x" unit).
- Minimum digital size: 96px wide (full lockup with tagline), 32px wide (wordmark only), 24px (icon/leaf mark alone — app icon, favicon, loading spinner).

### 2.3 Approved Variants
| Variant | Background | Wordmark Color | Use Case |
|---|---|---|---|
| Primary | Forest 950 (`#0A1F16`) | Cream (`#F7F4EA`) | Splash screens, marketing, dark-mode apps |
| Reversed | White / Neutral 50 | Forest 900 (`#0C2A1C`) | Light-mode dashboards, printed collateral, invoices |
| Monochrome | Any single brand color | Single flat color, no gradients | Watermarks, embossing, single-color print |
| Icon-only (leaf mark) | Forest 950 or transparent | Cream or Mint | App icon, favicon, push-notification icon, loading state |

### 2.4 Don'ts
- Don't recolor the leaf independently of the wordmark.
- Don't add drop shadows, bevels, or outer glows.
- Don't stretch, skew, or condense the lockup to fit a container — resize proportionally or use the icon-only mark instead.
- Don't place the primary (dark) lockup on a busy photo without a solid or gradient-scrim underlay meeting the contrast ratios in §3.4.
- Don't substitute the gold divider rule with any other accent color.

---

## 3. Color System

### 3.1 Core Palette

| Token | Hex | Role |
|---|---|---|
| **Forest 950** | `#0A1F16` | Primary brand surface — dark backgrounds, splash, nav bars |
| **Forest 900** | `#0C2A1C` | Elevated dark surface / reversed-wordmark color on light bg |
| **Forest 700** | `#155238` | Primary interactive (buttons, links) on light-mode UI |
| **Forest 500** | `#1E7A50` | Hover/pressed states, secondary emphasis |
| **Cream** | `#F7F4EA` | Primary text/wordmark on dark surfaces; light-mode page background |
| **Ascle Gold** | `#C9A227` | Divider rules, premium/subscription accents, badges — **accent only, never a base surface** |
| **Ascle Mint** | `#34D399` | Accent copy, success state, "Normal" lab-result indicator, live/active status |
| **Neutral Gray** | `#8B9A93` | Small-caps eyebrow text, secondary/muted labels, disabled states |

### 3.2 Extended Scale (for Tailwind / Flutter ColorScheme tokens)

```
forest-50:  #E9F1EC   forest-500: #1E7A50
forest-100: #C9DCD1   forest-600: #196A44
forest-200: #A0C4AF   forest-700: #155238
forest-300: #6FA789   forest-800: #103E2A
forest-400: #3F8B66   forest-900: #0C2A1C
                       forest-950: #0A1F16

gold-100: #F3E6B8   gold-500: #C9A227   gold-700: #8F7119
mint-100: #D3F8E7   mint-500: #34D399   mint-700: #1F9E71
```

### 3.3 Semantic Tokens (map directly to the lab-result states already defined in [PRD.md §5.2](PRD.md))

| Semantic | Token | Hex | PRD Usage |
|---|---|---|---|
| `color-success` | Mint 500 | `#34D399` | `Normal` lab result, "Verified" provider badge, payment success |
| `color-warning` | Gold 500 | `#C9A227` | `Borderline` lab result, pending verification |
| `color-danger` | Red 500 | `#EF4444` | `Abnormal` lab result, Emergency Alert button, failed payment |
| `color-info` | Forest 500 | `#1E7A50` | Informational banners, in-progress states |

Do not encode meaning in color alone — every status chip pairs color with a label or icon (`Normal`/`Borderline`/`Abnormal` text, not a bare dot), per the `color-not-decorative-only` accessibility rule.

### 3.4 Accessibility & Contrast
- Cream (`#F7F4EA`) on Forest 950 (`#0A1F16`): **contrast ≈ 15.8:1** — passes AAA for all text sizes.
- Mint 500 (`#34D399`) on Forest 950: **≈ 9.2:1** — safe for body copy and UI labels, not just large display text.
- Gold 500 (`#C9A227`) on Forest 950: **≈ 6.1:1** — passes AA; reserve for accents/dividers/large text rather than long-form small body copy.
- Forest 700 (`#155238`) on white/Neutral 50: **≈ 6.6:1** — safe as the light-mode primary button/link color.
- Always re-verify with an actual contrast checker before shipping — the ratios above are directional design targets, not a substitute for automated CI accessibility checks.

### 3.5 Light Mode (Doctor/Admin Next.js Dashboards)
Per the PRD's low-bandwidth office-connection requirement, dashboards default to a **light theme** for print/legibility and lighter asset weight:
- Background: Neutral 50 (`#F7F8F7`)
- Surface/cards: White (`#FFFFFF`) with a 1px Neutral 200 border, not a heavy shadow
- Primary action: Forest 700
- Accent/premium flags: Gold 500, used sparingly (e.g., subscription-tier badges only)

---

## 4. Typography

### 4.1 Pairing
**Classic Elegant** — a high-contrast serif display paired with a neutral, highly-legible sans for UI and body copy. This is the closest documented match to the logo's serif wordmark and is explicitly recommended for premium/editorial/high-end healthcare-adjacent brands.

| Role | Typeface | Google Fonts | Weights |
|---|---|---|---|
| Display / Wordmark / Marketing Headlines | **Playfair Display** | `Playfair+Display:wght@400;500;600;700` | 600–700 for lockups, 400–500 for editorial headers |
| UI / Body / Data / Dashboards | **Inter** | `Inter:wght@300;400;500;600;700` | 400 body, 500–600 labels/buttons |

Inter was chosen (over a display-matched sans) specifically because it must render cleanly at small sizes on low-tier Android glass, has strong Latin diacritic support for Yoruba/Igbo names and localized content, and is the same face already implied by the PRD's low-bandwidth Next.js dashboard requirement.

**Import (Web):**
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
```

**Tailwind config:**
```js
fontFamily: {
  serif: ['Playfair Display', 'serif'],
  sans: ['Inter', 'sans-serif'],
}
```

**Flutter (`google_fonts` package):**
```dart
textTheme: TextTheme(
  displayLarge: GoogleFonts.playfairDisplay(fontWeight: FontWeight.w600),
  headlineMedium: GoogleFonts.playfairDisplay(fontWeight: FontWeight.w500),
  bodyLarge: GoogleFonts.inter(fontWeight: FontWeight.w400),
  labelLarge: GoogleFonts.inter(fontWeight: FontWeight.w500),
)
```

### 4.2 Type Scale (16px base, mobile-first)

| Token | Size / Line-height | Font | Use |
|---|---|---|---|
| Display | 40px / 1.15 | Playfair Display 600 | Splash, marketing hero |
| H1 | 28px / 1.2 | Playfair Display 600 | Page/screen titles |
| H2 | 22px / 1.25 | Playfair Display 500 | Section headers |
| H3 | 18px / 1.3 | Inter 600 | Card titles, form section labels |
| Body | 16px / 1.5 | Inter 400 | Default body text — never smaller for body copy |
| Label | 14px / 1.4 | Inter 500 | Buttons, chips, form labels |
| Caption / Eyebrow | 12px / 1.4, tracked +0.15em, uppercase | Inter 500 | Small-caps eyebrow text, metadata, timestamps |

### 4.3 Small-Caps Eyebrow Treatment
Reserve wide-tracked uppercase Inter (the `GLITZHEALTH TECHNOLOGIES LTD. PRESENTS` treatment) for **one supporting line per screen** — overuse flattens its impact. Color: Neutral Gray on dark, Neutral 500 (`#6B7A72`) on light.

---

## 5. Iconography & Imagery

### 5.1 Icons
- Style: single-weight line icons, rounded joins/caps, 24×24 base grid — never emoji as functional icons.
- The leaf motif from the logo may recur as a decorative accent (e.g., empty-state illustrations, onboarding) but must not be used as a generic "success" icon — reserve it for brand moments only.
- Status icons for lab results/verification pair directly with the semantic tokens in §3.3.

### 5.2 Photography & Illustration
- Warm, natural light; real Nigerian patients, nurses, doctors, and phlebotomists in home/domestic settings — not sterile studio-white clinics.
- Avoid the generic "cold blue hospital" cliché; healthcare-with-warmth is the differentiator against fear of fake practitioners.
- When photography isn't available (loading/empty states), use flat, single-color leaf/organic linework in Forest or Mint, never literal medical clip-art.

---

## 6. Voice & Tone

- **Calm and competent, never alarmist** — even the Emergency Alert flow (PRD §4.3) should read as decisive and reassuring, not panicked. Use clear imperative language ("Help is on the way") over exclamation-heavy copy.
- **Plain language over jargon** — patients are 25–65, intermediate tech literacy; write prescriptions/labels/status copy the way you'd explain them to a family member, not a peer clinician.
- **Locally rooted, not gimmicky** — English is the default voice across the app; Yoruba/Igbo/Hausa/Pidgin appear only where the PRD explicitly calls for language selection (doctor discovery filters), never as decorative flavor text.
- **Trust language is specific, not vague** — prefer "MDCN-verified" / "NMCN-licensed" badges and copy over generic "trusted" or "certified" claims.

---

## 7. Motion

Per the `ui-ux-pro-max` UX guideline set, motion should be **subtle and meaningful**, never decorative:
- Standard transition duration: **150–300ms**, ease-out.
- Exit animations faster than entrance animations.
- No bounce/spring/playful physics — this is a trust/medical brand, not a consumer social app.
- Respect `prefers-reduced-motion` / platform reduce-motion settings everywhere.
- Motion should communicate state change (e.g., a lab result card flipping from "Pending" to "Normal") — never motion for its own sake.

---

## 8. Applied UI Guidance (cross-referenced to [PRD.md §6.1](PRD.md))

These structural rules are already mandated by the PRD and are restated here so brand and engineering stay aligned:

| Rule | Value | Rationale |
|---|---|---|
| Minimum touch target | ≥48dp | PRD §6.1 UI guardrails |
| Max navigation depth | 3 taps | PRD §6.1 UI guardrails |
| Outdoor legibility | High-contrast pairs only (see §3.4) | Equatorial sunlight readability, PRD §6.1 |
| Buttons | Primary = Forest 700 fill + Cream/White text; Secondary = Forest 700 outline; Gold reserved for premium/subscription CTAs only | Keeps gold rare = keeps it premium |
| Cards (light dashboards) | White surface, 1px Neutral 200 border, no heavy shadow | Matches low-bandwidth/light-page-weight requirement, PRD §5.3 |
| Status chips | Color + text label together, mapped to §3.3 semantic tokens | Accessibility — never color-only meaning |

---

## 9. Do's and Don'ts Summary

| Do | Don't |
|---|---|
| Use Forest 950/900 as the dominant dark surface | Use Ascle Gold as a background fill |
| Keep gold and mint as accent-only colors | Mix multiple accent colors in one component |
| Use Playfair Display only for headlines/wordmark | Set body copy or dense UI text in Playfair Display |
| Pair every status color with a text label | Rely on a colored dot alone to convey lab/payment status |
| Keep transitions short and purposeful (150–300ms) | Add bouncy/playful easing or decorative-only animation |
| Photograph real warm home-care moments | Use cold clinical stock photography |

---

## 10. Asset Checklist

- [ ] Primary logo — SVG, dark background variant
- [ ] Reversed logo — SVG, light background variant
- [ ] Icon-only leaf mark — SVG + PNG (512, 192, 48, 32, 16 px) for app icons/favicon
- [ ] Color tokens exported as CSS custom properties (`:root`) for Next.js
- [ ] Color tokens exported as a Flutter `ColorScheme`/`ThemeData` extension
- [ ] Tailwind config extension (`fontFamily`, `colors.forest`, `colors.gold`, `colors.mint`)
- [ ] Font files/Google Fonts imports wired into both the Flutter app and Next.js dashboards
