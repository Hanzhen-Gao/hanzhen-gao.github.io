---
name: Hanzhen Gao
description: Developer and artist portfolio — cyberpunk neon, asymmetric composition, electric art school energy.
colors:
  electric-blue: "#4f8ef7"
  neon-orchid: "#7b5ef8"
  ink-depth: "#0f1117"
  studio-dark: "#1a1d27"
  studio-ash: "#e4e6f0"
  light-ash: "#b0b4cc"
  faded-ash: "#7a7f99"
  ghost-border: "#ffffff10"
  faint-divide: "#ffffff14"
typography:
  display:
    fontFamily: "Archivo, 'Noto Sans SC', sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, 'Noto Sans SC', sans-serif"
    fontSize: "clamp(1.5rem, 3.2vw, 1.9rem)"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, Consolas, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  sm: "6px"
  md: "10px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "64px"
components:
  skill-tag:
    backgroundColor: "{colors.studio-dark}"
    textColor: "{colors.studio-ash}"
    rounded: "{rounded.sm}"
    padding: "6px 14px"
  project-card:
    backgroundColor: "{colors.studio-dark}"
    textColor: "{colors.studio-ash}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  nav-link:
    textColor: "{colors.faded-ash}"
  nav-link-hover:
    textColor: "{colors.electric-blue}"
  button-primary:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.ink-depth}"
    rounded: "{rounded.md}"
    padding: "13px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.studio-ash}"
    rounded: "{rounded.md}"
    padding: "13px 24px"
---

# Design System: Hanzhen Gao

## 1. Overview

**Creative North Star: "The Electric Canvas"**

An art school graduate's digital atelier: deep-space dark backgrounds charged with electric blue and violet neon, surfaces that float rather than anchor, compositions that break the center axis on purpose. This is not a minimalist portfolio that hides behind restraint; it is work that makes a case through its own visual confidence.

The system rests on a single deep background layer (Ink Depth) with one luminous surface layer floating above it (Studio Dark), tied together by two neon accent colors that function as paint on canvas: Electric Blue for links, interaction, and primary attention; Neon Orchid used structurally in gradients only. Ghost borders at 6-8% white transparency define edges without mass, letting glass and void coexist. The result should evoke a night-studio screen, not a corporate design tool.

This system explicitly rejects: clean white Apple-style minimalism (restraint without intent), flat SaaS enterprise layouts (feature-list grids, beige confidence), warm cream tones (the AI-generated default of 2026), and academic resume formatting. These are not cautionary notes; they are the aesthetic competition. If the page could be mistaken for any of them, it has failed.

**Key Characteristics:**
- Deep-space near-black background with a single tonal surface layer
- Dual neon accents with strict roles: Electric Blue for interaction, Neon Orchid for gradients only
- Ghost borders: transparency-only edge definition, no drop shadows
- Asymmetric composition as deliberate signal: a two-column hero (lead + status panel) and a sticky title-column section grid, never a centered top-to-bottom stack
- Motion as texture: animation is part of the visual language, not an optional layer

**Layout Architecture:**
- **Hero**: a two-column split, not a centered title. Left = name + tagline + one-line intro + CTA buttons. Right = a frosted status panel (avatar, identity, terminal-style info rows, social links).
- **Sections**: an asymmetric grid of `minmax(150px, 0.55fr) minmax(0, 2.2fr)` — a sticky title column on the left, content on the right. Collapses to a single column below 760px.
- **Skills**: grouped by domain (frontend / scripting / tooling), each group a labeled cluster of tags, never one flat undifferentiated wall.
- **Projects**: a responsive card grid (`repeat(auto-fit, minmax(260px, 1fr))`); each card carries a name, description, technical tags, and an action link.
- **Contact**: full-width link blocks (label + value + arrow), not inline text links.

## 2. Colors: The Electric Palette

A two-accent neon system on a deep dark ground. Both accents are saturated and cool-blue-shifted. No warm neutrals, no muted backgrounds.

### Primary
- **Electric Blue** (`#4f8ef7`): Link color, hover activation, interactive accent. The primary attention signal. Used on no more than 15% of any screen surface.
- **Neon Orchid** (`#7b5ef8`): Gradient co-anchor — appears in the avatar identity mark and hero gradient treatments only. Never used as a flat block color on its own.

### Neutral
- **Ink Depth** (`#0f1117`): Body background. The canvas everything rests on.
- **Studio Dark** (`#1a1d27`): Surface layer for cards, header, and skill tags. Approximately 6% lighter than Ink Depth; perceived as floating above the canvas.
- **Studio Ash** (`#e4e6f0`): Primary text. Cool blue-gray rather than white, preventing optical harshness on dark backgrounds.
- **Light Ash** (`#b0b4cc`): Secondary text — body paragraphs, softer content areas.
- **Faded Ash** (`#7a7f99`): Tertiary — navigation links at rest, footer, timestamps. Low emphasis only.
- **Ghost Border** (`#ffffff10`): Card and container edges. 6% white transparency; massless.
- **Faint Divide** (`#ffffff14`): Slightly stronger ghost at 8% white — skill tag borders and section heading rules.

### Named Rules
**The No-Warm Rule.** No warm-tinted neutrals anywhere in the system. Beige, sand, cream, parchment: prohibited at any opacity. Every neutral in this palette is cool-blue-shifted to reinforce the electric, nocturnal character of the work.

**The Two-Signal Rule.** Electric Blue is the primary interaction signal. Neon Orchid is structural, appearing only inside gradients alongside Electric Blue. They do not appear at full opacity on the same surface simultaneously outside of gradient contexts.

## 3. Typography: The Industrial Poster

**Display Font:** Archivo (variable, used at `font-stretch: 125%` expanded + 800 weight) with Noto Sans SC fallback for CJK
**Body Font:** Noto Sans SC (思源黑体) — carries both Chinese and Latin body text
**Label / Mono Font:** JetBrains Mono — technical labels, links, metadata

**Character:** An industrial-poster pairing. Latin headings render in Archivo pushed wide and heavy (expanded grotesque, the sharp hard-edged voice of screen-printed signage); Chinese headings fall through to Noto Sans SC at 800 weight, staying dense and structural. Body text is Noto Sans SC, clean and fully bilingual. Monospace appears as a deliberate technical signal on skill tags, links, and the tagline — earned here because the subject is a developer, not borrowed as costume.

### Hierarchy
- **Display** (Archivo, 800, expanded 125%, clamp 2.5–4rem, lh 1.02, ls -0.02em, uppercase): Name headline in the page header. Single use per page.
- **Headline** (Archivo/Noto SC, 800, expanded 125%, clamp 1.5–1.9rem, lh 1.3, ls -0.01em): Section titles (h2). Separated by a 1px ghost rule (`#ffffff12`) at the bottom edge.
- **Title** (Archivo, 700, expanded 110%, 1.15rem): Project card headings (h3). Subordinate to Headline.
- **Body** (Noto Sans SC, 400, 1rem, lh 1.75): Paragraph copy. Container caps line length near 65ch.
- **Label** (JetBrains Mono, 500, 0.85rem, ls 0.01em): Skill tags, footer, contact links, card detail links.

### Named Rules
**The Type Gap Rule.** The Display-to-Headline step (clamp max 4rem to 1.9rem) is a strong ~2x ratio. Preserve it. Do not flatten the scale by inserting intermediate heading sizes between them; the tension between the large name and the quiet section headings is deliberate.

**The Expanded-Headline Rule.** All Latin display and headline type is pushed to `font-stretch: 125%`. The width is the signature, not a decoration. Never render headings at normal width; the expansion is what carries the industrial-poster voice.

**The Mono-Is-Earned Rule.** Monospace is reserved for genuinely technical content (skill names, code-adjacent labels, URLs, the developer tagline). Never use it for Chinese prose or as a decorative texture; mono on non-technical body copy reads as costume.

## 4. Elevation

This system uses tonal layering plus targeted neon glow, not ambient drop shadows. Resting depth comes from the luminosity contrast between Ink Depth (background) and Studio Dark (surface), and from Ghost Border edges that give surfaces presence without mass. A fixed background layer adds atmosphere: corner radial blooms (Electric Blue top-left, Neon Orchid top-right, a fainter blue bottom-right) over a faint 46px scan grid.

### Glow Vocabulary
Glow is the system's only "shadow." It must read as emitted light, not cast shadow:
- **Interactive glow** (`box-shadow: 0 0 32px rgba(79,142,247,0.30)`, token `--glow-blue`): cards, contact blocks, and links on hover; communicates activation.
- **Hero glow** (`text-shadow: 0 0 38px rgba(79,142,247,0.42), 0 0 80px rgba(123,94,248,0.22)`): the hero name only; the single sanctioned resting glow.
- **Panel glow** (`box-shadow: var(--glow-blue), 0 24px 60px rgba(0,0,0,0.45)`): lifts the frosted status panel off the canvas.

### Named Rules
**The Flat-By-Default Rule.** Static section surfaces are flat at rest; depth comes from tone and border, not cast shadow. Glow appears on interaction (hover, focus), with one exception below.

**The Hero Glow Exception.** The hero name carries a resting neon glow as the page's single focal moment. It is the only static glow in the system; every other glow must be earned by interaction.

**The Frosted Glass Exception.** `backdrop-filter: blur` is reserved for exactly two floating surfaces: the fixed nav bar and the hero status panel. Both are functional "floating above content" layers, not decoration. All other surfaces (project cards, skill tags, contact blocks, section backgrounds) stay solid. Never glass a static section background.

## 5. Components

### Hero Status Panel
The signature component: a frosted card anchoring the hero's right column.
- **Surface:** translucent Studio Dark (`--glass-bg`, ~62% opacity) with `backdrop-filter: blur(16px) saturate(150%)`, 1px Faint Divide border, 16px radius.
- **Elevation:** Panel glow (see Elevation).
- **Contents (top to bottom):** avatar (64px) + identity (name, status with neon dot) → a ruled block of terminal-style info rows (`key` Faded Ash, `value` Studio Ash, mono, space-between) → a row of mono social links.

### Buttons (CTA)
Mono-label actions in the hero.
- **Shape:** 8px radius, 13px 24px padding, mono 500-600.
- **Primary:** Electric Blue fill, near-black text (`#06080f`). Hover: strong blue glow + 2px lift.
- **Ghost:** transparent, Studio Ash text, 1px Faint Divide border. Hover: border + text shift to Electric Blue, soft glow + 2px lift.

### Skill Groups
Skills are grouped by domain, never a flat undifferentiated wall.
- **Group label:** mono, uppercase, 0.78rem, 0.08em tracking, Faded Ash.
- **Tags:** mono, Studio Dark fill, 1px Faint Divide border, 6px radius, 7px 15px padding. Hover: border + text shift to Electric Blue with soft glow.

### Project Cards
Portfolio cards in a responsive `auto-fit` grid (`minmax(260px, 1fr)`).
- **Shape:** 12px radius, Studio Dark fill, 1px Ghost Border, flex column.
- **Content order:** name (Archivo 700 expanded) → description (Light Ash) → technical tags (mono pills, 5px radius) → Electric Blue action link.
- **Hover:** border to Electric Blue + interactive glow + inset hairline + 4px lift.

### Contact Links
Full-width link blocks, not inline text links.
- **Structure:** mono uppercase label (min 56px) + mono value + Electric Blue arrow, inside a Studio Dark block with Ghost Border, 10px radius.
- **Hover:** border to Electric Blue + interactive glow + 4px translateX; the arrow nudges right.

### Navigation
Fixed frosted-glass bar pinned to the top.
- **Surface:** `--glass-bg` + `backdrop-filter: blur(14px) saturate(160%)`, 1px bottom Ghost Border, full width, z-index 100.
- **Links:** mono, Faded Ash default → Electric Blue + glow on hover.

### Avatar / Identity Mark
The one surface where both accent colors appear together.
- **Placeholder (no photo):** circle, `linear-gradient(135deg, #4f8ef7, #7b5ef8)`, Archivo expanded initials, violet glow. 64px inside the hero panel.
- **With photo:** circle, `object-fit: cover`, blue glow, 1px border.
- The avatar gradient is the only permitted dual-accent surface. Do not replicate it elsewhere.

### Section Heading
Asymmetric title column with a neon underline.
- **Layout:** sits in a sticky left column of the section grid (desktop, `top: 96px`); stacks above content below 760px.
- **Type:** Archivo 800 expanded, uppercase, with a 56px Electric Blue glowing underline rule (`::after`), never a full-width divider.

## 6. Do's and Don'ts

### Do:
- **Do** use Electric Blue for all links, hover states, and interactive signals. It is the only foreground accent color.
- **Do** use Ghost Borders (1px `#ffffff10` to `#ffffff14`) as the default edge treatment on all surfaces. Borders define presence without mass.
- **Do** activate neon on hover: border-color transition to Electric Blue (`#4f8ef7`) over 0.2s is the canonical hover signal for cards and interactive blocks.
- **Do** preserve the 1.7x Display-to-Headline type scale ratio. Flat scales destroy the page hierarchy.
- **Do** treat motion as part of the visual language: entrance animations, glow pulses, and hover transitions are expected. A static page in this system reads as unfinished.
- **Do** use asymmetric composition deliberately. Off-axis layout, unequal column widths, and broken grids communicate the art school perspective.
- **Do** apply `backdrop-filter: blur` to floating overlay layers (nav drawer, modals) as a structural signal for floating surfaces.
- **Do** keep all neutrals cool-blue-shifted. Studio Ash, Light Ash, Faded Ash all lean toward blue-violet hue, not warm gray.

### Don't:
- **Don't** use warm beige, cream, sand, parchment, or ivory tones anywhere. The entire warm-neutral band is prohibited. This is the single most common AI portfolio tell and a direct contradiction of the brand.
- **Don't** design for white-background Apple-style minimalism. Restraint on a dark canvas reads as absence, not refinement.
- **Don't** build a flat SaaS enterprise layout: centered hero, icon-above-heading feature grid, bullet-list proof points. This page is not selling a product — the page itself is the product.
- **Don't** use academic or resume formatting: no two-column CV layouts, no "SKILLS / EXPERIENCE / EDUCATION" header-list structure.
- **Don't** apply glassmorphism (`backdrop-filter: blur` + translucent background) to static card or section surfaces. Glass is reserved for two functional floating layers only: the fixed nav bar and the hero status panel.
- **Don't** use `box-shadow` as ambient decoration on static cards. Glow communicates interactive state only (the hero name's resting glow is the one sanctioned exception).
- **Don't** use Neon Orchid (`#7b5ef8`) as a standalone flat accent color. It exists only as the second color in gradients alongside Electric Blue.
- **Don't** add intermediate heading sizes between Display and Headline (see the Type Gap Rule). The gap is intentional; filling it collapses the scale tension.
- **Don't** use `background-clip: text` with gradient backgrounds for text coloring. Use a solid color with weight or size emphasis instead.
