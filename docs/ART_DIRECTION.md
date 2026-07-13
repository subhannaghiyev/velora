# Velora Art Direction

> This document is the single source of truth for every visual decision on the Velora platform.
> It governs landing pages, components, animations, photography, video, Higgsfield assets, 3D scenes, and UI states.
> Any contributor — human or AI — producing visual work for Velora must read and follow this document before starting.

---

## 1. Brand Personality

### Who Velora Is

Velora occupies a specific position: a luxury fashion platform built for people who want authorship over what they wear, not just ownership. The brand does not sell clothing in the conventional sense. It sells the act of making something yours.

The closest analogy is a bespoke atelier that has been digitized — not in the sterile, feature-heavy sense of software, but in the sense that every interaction carries the weight and care of something made by hand.

### How the Brand Should Feel

- **Calm.** There is no urgency on this platform. No countdown. No "Only 3 left." The calm is intentional. It signals confidence.
- **Precise.** Every element is placed for a reason. Spacing is not approximate. Typography is not set carelessly. Precision communicates craft.
- **Considered.** Decisions read as deliberate. The kind of restraint that takes experience — knowing what to remove, not just what to add.
- **Personal.** The platform reflects the user's identity, not a brand identity imposed on them. The UI steps back so the garment and the user's choices can step forward.
- **Unhurried.** The word that most accurately describes the desired experience state. Not slow. Not indifferent. Unhurried — the pace of someone who already knows what they want.

### How the Brand Must Never Feel

- **Aggressive.** No pushy CTAs. No high-contrast alert patterns used for non-emergency purposes.
- **Startup-like.** No product hunt energy. No "we're disrupting fashion." No launch badges, no confetti, no social proof counters.
- **Clinical.** No pure white interfaces with hairline borders and Helvetica Neue. That is a tech company, not a fashion house.
- **Opulent in a performative way.** No gold leaf patterns, no faux-velvet textures, no ostentatious serif logos. Luxury is communicated through restraint, not decoration.
- **Fast.** Fast means cheap. Every visual rhythm should feel like it has time to exist.

### Emotional Keywords

The following words describe the precise emotional territory Velora occupies. When making a visual decision, test it against these:

`Considered` · `Warm` · `Tactile` · `Quiet` · `Editorial` · `Precise` · `Earned` · `Mature` · `Grounded` · `Intentional`

---

## 2. Visual Language

### Minimalism

Minimalism on Velora is not an aesthetic choice. It is the logical outcome of the decision that the garment is always the most important thing on the page. Every element that is not the product or a direct path to interacting with the product is a candidate for removal.

This means: no decorative lines, no icon clusters, no section separators unless they serve a functional grouping purpose, no background patterns, no border-radius decoration. The minimum number of elements to communicate the intended hierarchy is the correct number of elements.

### Luxury

Luxury in digital design is expressed through what is absent, not what is present. Generous whitespace signals that content deserves individual attention. Restraint in color signals that what appears in color carries meaning. Unhurried animation signals confidence.

The comparison: a single garment on a wide table in a quiet shop versus a wall of hanging merchandise in a sale environment. The garment on the table communicates a different price point through nothing but its surroundings.

### Editorial

Editorial layout means that pages read like a magazine spread, not a product grid. Sections have deliberate pacing. Headline sizes shift dramatically between levels. Asymmetric compositions are the norm. The eye is guided, not dumped into a grid and left to scan.

Editorial does not mean decorative. An editorial layout can be entirely text and space. The distinction is in the intentionality of where each element sits on the page.

### Timeless

No trend-driven design decisions. No gradients that belong to a specific year. No rounded corners that signal "2023 app design." No flat icon styles that will look dated in 18 months.

The test: would this visual decision look considered in five years? If yes, proceed. If the answer depends on it being "in style right now," it is wrong for this platform.

### Fashion-First

Every layout decision exists in service of the product. When a garment image is present, it is the largest, most visually dominant element on the page. Nothing around it competes. The typography is there to name it. The space is there to honor it. The interface is there to allow the user to interact with it.

### Calm

No visual noise. No competing elements. No multiple things demanding attention simultaneously. One primary action per page view. One visual accent per section. The experience should be navigable with peripheral vision.

### Confident

Decisive spacing. No tentative element placement. No design choices that say "we weren't sure where to put this." If something's position seems uncertain, it should not exist. Confidence in design reads as confidence in the brand.

### Modern

Clean geometry. Contemporary, variable-weight typography. Digital-native but not cold. Modern means built for today's screen but not dependent on today's trend. It means precise rendering, sharp edges where edges exist, and smooth transitions that respect the physical metaphor without mimicking it.

---

## 3. Color Direction

### Primary Palette — Warm Neutrals

The entire surface of the platform lives in a tight range of warm-toned neutrals. These are not pure grays. They have a slight beige undertone that reads as editorial, textile, and warm — the visual equivalent of linen.

| Role | Token | Hex | Use |
|---|---|---|---|
| Page background (light) | `neutral.50` | `#FAFAF8` | Page background, section backgrounds |
| Surface | `neutral.100` | `#F5F4F2` | Cards, paper surfaces |
| Subtle tint | `neutral.150` | `#EEECE8` | Hover states, alternate rows |
| Border (light) | `neutral.200` | `#E5E2DC` | Dividers, card borders |
| Border (medium) | `neutral.300` | `#D1CEC7` | Input borders at rest |
| Placeholder | `neutral.400` | `#B8B4AC` | Disabled states, placeholders |
| Muted text | `neutral.500` | `#9E9890` | Secondary labels |
| Secondary text | `neutral.600` | `#6B6860` | Body copy secondary |
| Tertiary text | `neutral.700` | `#4A4843` | Captions |
| Primary text | `neutral.900` | `#1C1B19` | All primary text |
| Dark background | `neutral.950` | `#111110` | Dark sections, footer |

### Accent Palette — Champagne Gold

A single accent color. It appears rarely, only where it has maximum effect.

| Token | Hex | Use |
|---|---|---|
| `gold.300` | `#D4BF9C` | Light accent, hover state of outlined button |
| `gold.400` | `#C4A97C` | Primary CTA fill, focus rings, active states |
| `gold.600` | `#A88B5C` | Dark accent, button hover fill |

The gold was chosen because it reads as warm, precious, and earned — not ostentatious. It is the color of aged linen, of a worn-in leather satchel, of light on raw silk. It does not perform luxury. It suggests it.

### Background Philosophy

- Never pure white (`#FFFFFF`) as a page background. Pure white is a default, not a decision.
- Never pure black (`#000000`). Even the darkest surfaces use `neutral.950` (`#111110`) — warm near-black.
- Dark sections (e.g., the 3D designer preview section) use `neutral.950` as background. This creates separation without a jarring mode switch.
- The warm undertone persists across light and dark modes. The brand never feels cold.

### Contrast Rules

- Body text on light backgrounds: minimum 4.5:1 (WCAG 2.1 AA). `neutral.900` on `neutral.50` = 15.3:1. Always compliant.
- Large text (24px+): minimum 3:1.
- Accent gold on dark background: `gold.400` on `neutral.950` must be verified before use at small sizes. Use `gold.300` or larger text if contrast is insufficient.
- Focus rings use `gold.400` at 2px solid. Always visible. Never removed.

### Forbidden Colors

The following are prohibited in all UI contexts:

- Any neon or electric color (electric blue, lime green, hot pink, orange above 60% saturation)
- Pure red outside error states
- Any color described as "vibrant," "electric," or "pop"
- Multi-stop gradients with three or more distinct hues
- RGB rainbow patterns
- Metallic or iridescent effects

### When Accent Colors May Appear

Gold appears in exactly these contexts. Not others.

- Primary button fill (contained variant)
- Focus ring outline (2px, 35% opacity)
- Active navigation link state
- Checked input state (checkbox, radio, switch)
- Text selection highlight (20% opacity background tint)
- Hover state of secondary/outlined button border

Gold does not appear as decoration, icon color, section dividers, or background fills of any surface.

---

## 4. Typography Direction

### The Typeface

Geist Sans is the single typeface for all text on the platform. It is clean, contemporary, highly legible at all sizes, and designed for digital environments. It has variable weight support which allows smooth control from 300 (light) to 700 (bold) without switching families.

No decorative typefaces. No serifs for display headings (serifs read as heritage; Velora's visual language is contemporary). No mixing of weights beyond what the scale dictates.

### How Typography Should Feel

Large headings should feel architectural. They occupy space with intention. The viewer should feel the weight of a sentence before reading it.

Body copy should feel generous. Line height of 1.7 means the reader is not rushing. The space between lines is as carefully considered as the text itself.

Labels and metadata should be compressed and precise. Short. Uppercase. Tracked. Never decorative — always functional.

### Type Scale

| Role | Size | Weight | Leading | Tracking |
|---|---|---|---|---|
| Display (hero h1) | 64–136px responsive | 300 | 1.0 | -0.03em |
| Headline (section h2) | 28–68px responsive | 300 | 1.1–1.2 | -0.02em |
| Title (card h3) | 28px | 400 | 1.3 | -0.01em |
| Subheading (h4) | 20px | 500 | 1.4 | -0.01em |
| Body (primary) | 16px | 400 | 1.7 | 0 |
| Body (secondary) | 14px | 400 | 1.6 | 0 |
| Label | 12px | 500 | 1.5 | +0.02em |
| Overline | 11px | 600 | 1.5 | +0.12em |
| Button | 14px | 500 | 1 | +0.01em |

### Uppercase Usage

Uppercase is reserved for category labels, overlines (maximum 6 words), navigation labels, and status indicators. These are structural signals, not stylistic choices.

Uppercase is prohibited for: headlines, subheadings, body copy, error messages, product names, confirmation messages, CTA button text.

The reason: at large sizes, uppercase reads as aggressive. At reading sizes, it reduces legibility. Uppercase is a tool for hierarchy signaling at small sizes, not a default aesthetic treatment.

### Sentence Casing

All headlines use sentence case. "Wear your identity." Not "Wear Your Identity." The exception is the brand tagline "Wear Your Identity." which functions as a proper name and is fixed.

Sentence case reads as natural, confident, and contemporary. Title case reads as formal, corporate, or dated.

### Body Text Alignment

Body copy is always left-aligned. Center alignment is reserved for display headlines, hero taglines, section labels, empty state messages, and confirmation screens — short strings where centering creates a moment. It is never applied to paragraphs.

### No Visual Noise

Typography should not fight itself. Two adjacent elements should not be the same size, weight, or color unless they are intentionally parallel (e.g., two items in a list). Hierarchy must be visible.

A page where every text block is 16px medium weight is not a design — it is an absence of one.

---

## 5. Layout Philosophy

### Breathing Space

Velora pages are not dense. They are generous. The number of elements per page view is deliberately low. This is not a limitation — it is the signal of quality. A product given space is treated as worth that space.

Minimum section padding: 96px top and bottom on desktop (`py: 12` in our spacing scale). Major sections: 192–288px top and bottom. The hero-to-first-section transition should feel like turning a page, not clicking next.

### Editorial Composition

Pages are not grids of equal-weighted content blocks. They are compositions with a reading sequence. The eye enters at the largest element and is guided to successively smaller or lighter elements. The sequence has rhythm — heavy, light, heavy, light.

Asymmetry is the default. Centered layouts exist but are used sparingly and only for short, declarative content (CTAs, empty states, confirmations). Standard page composition is asymmetric: large text left, smaller supporting copy right, or a single large headline with open right margin.

### Grid Philosophy

12-column grid. 80px horizontal gutters on desktop. 48px on tablet. 24px on mobile. The grid is infrastructure — it is not visible, and it does not dictate that every column must be filled.

Wide layout exceptions: hero sections, 3D scenes, editorial imagery, and full-bleed dark sections are permitted to break the column grid. These moments of exception are effective only because the rest of the page adheres to the grid.

### Content Density

At any given scroll position, 60–70% of the visible area is content. The remainder is space. This ratio is non-negotiable on the landing page. Product grid pages may be denser (80%) because the repetitive structure creates its own rhythm.

### Vertical Rhythm

The spacing between sections follows the 8px base unit system. All values are multiples of 8. No arbitrary pixel values in layout. This creates subconscious regularity — the eye processes the rhythm even if it cannot name it.

### Maximum Content Width

1440px. Content does not extend beyond this width. At wider viewports, the content stays centered and margins grow. This preserves the editorial composition across large displays.

---

## 6. Photography Direction

### The Style

Velora photography is editorial campaign photography, not product catalog photography. The distinction is fundamental. Catalog photography exists to show the product accurately. Campaign photography exists to communicate how the product makes you feel.

Velora photography should make the viewer want to touch the screen. It should communicate texture, weight, and quality before the user has read a single word.

### Lighting

Natural light or natural-light equivalent. Directional — from a single source at 30–45° above and to one side of the subject. This direction reveals the three-dimensional structure of fabric: how it falls, where it bunches, how the weave catches light.

Never: flash (bleaches texture, creates flat two-dimensionality). Never: ring light (creates an unnatural, cosmetic-product look). Never: fully overcast (removes depth, makes fabric look matte and lifeless). Never: backlit silhouette (fashion editorial trick — but removes the garment detail this platform depends on).

Shadows are not removed in post-processing. They communicate form. A shadow under a fold tells the viewer about the weight of the fabric.

### Close-Up Emphasis

The dominant shot type is close: fabric grain, the way a cuff meets a wrist, a button's shadow on linen, the drape at a shoulder seam. The viewer should be able to evaluate the quality of the material from the photograph.

Distances:
- Fabric detail: 5–30cm (fills the frame with texture)
- Garment detail: 30–60cm (one design feature — a pocket, a collar, a hem)
- Partial garment: 60–120cm (a sleeve and shoulder, a trouser leg and break)
- Full garment: 120–180cm (the complete piece, worn or flat)

Full-garment shots are the minority. The product grid uses them for context. The product detail page leads with close-ups.

### Subjects

The garment is the subject. If a person appears, they are partially in frame: a hand adjusting a cuff, the shoulder of a jacket, a silhouette against light. No face looking at the camera. No smile. No lifestyle narrative (coffee, phone, laughter). The garment does not require a person to justify it.

When a model is used for fit reference, the shot is from behind or in profile. The viewer's eye should go to the garment, not the person.

### Backgrounds

Environments that communicate permanence and craft: stone, concrete, worn wood, linen surfaces, natural plaster. These backgrounds have texture, age, and weight. They belong in the same visual register as the garment.

Prohibited backgrounds: pure white sweep paper, seamless colored paper, fluorescent studio environments, natural environments used as lifestyle props (cafes, offices, parks).

### Color and Post-Processing

Real colors. No heavy filters. No heavy presets. The garment in the photograph should match the garment in reality — and in the 3D viewer.

Color grading target: warm temperature (5600–6200K), slightly reduced saturation (85–90% of native), lifted blacks (no crushed shadows), recovered highlights. The visual result is film-adjacent — not digital, not over-processed.

### What Never Appears

- Stock photography
- A person's face looking at the camera
- A smile or performative expression
- Corporate lifestyle imagery
- Flat lay on white
- Fluorescent or artificial-colored lighting
- Garments on hangers in a store environment
- Low-resolution or visually compressed images

---

## 7. Video Direction

### Hero Video Style

The hero video loop communicates one idea: the quality of the material in motion. A linen jacket being placed on a chair. Silk settling onto a surface. A hand smoothing a fold. Nothing narrative. Nothing human-story. The material is the story.

Duration: 8–16 seconds. The video must be loopable — it starts and ends on a visually identical frame so the loop is invisible.

### Camera Movement

Slow, deliberate movement only. A dolly toward fabric texture. A slow arc around a hanging garment. A gentle tilt across a surface.

The camera never rushes. No quick cuts. No handheld shake (even subtle stabilizer wobble is prohibited). The movement exists to reveal — not to entertain.

Speed: real time to very slightly slowed (0.85–1.0x). No artificially slowed footage (0.25–0.5x) unless used for a single, brief material moment (a drop of fabric falling into position). Artificially slow motion reads as a technique; the goal is for the movement to read as naturally deliberate.

### Frame Rate

24fps for all non-3D video content. This carries filmic weight. 60fps is reserved for the 3D product viewer only, where smooth interactivity is required.

### Color Grading

The same targets as photography: warm, lifted, slightly desaturated, film-adjacent. The video and photography on the platform must feel like they belong to the same visual world.

### Loop Philosophy

The loop must be invisible. The first and last frames must be visually identical. No cut to black. No fade to black. No visual stitching. The user should not know when the video repeats.

### Length Recommendation

8–16 seconds. Shorter if the composition is strong and complete. Never longer than 20 seconds — the loop becomes noticeable.

### What Never Appears in Video

- A person's face looking at the camera
- Text or titles overlaid on video
- Pricing information
- Countdown timers or urgency signals
- Fast-cut montage (more than one cut per 3 seconds)
- Music that competes with the visual (ambient texture only, if any)
- Motion blur on the garment itself
- CGI-obvious elements

---

## 8. Higgsfield Guidelines

This chapter defines the exact parameters for all Higgsfield-generated assets. Every prompt derived from this project must adhere to these specifications. Consistency across a shoot is non-negotiable — a set of product images that do not share the same lighting, color grade, and background environment is not a set.

### Lighting Setup

**Key light:**
Position: 45° above and 30–45° to the left of the subject. Soft — diffused through a large source (simulated 150cm octabox or comparable). This setup reveals fabric structure: folds, seams, and weave texture become three-dimensional.

**Fill:**
Opposite side, 30% of key light intensity. Prevents total shadow block while preserving contrast and depth.

**Background:**
Naturally and slightly underexposed — 0.5 to 1 stop below the key light reading. Background should fall into ambient darkness, not compete with the subject.

**Prohibited:**
Neon practical lights. Colored gels. Ring flash. Three-point even studio lighting (this is cosmetics or product photography, not fashion). Rim lights creating a glow outline.

### Camera Lens Feeling

Equivalent focal length: 85mm to 135mm. This range renders fabric with dimensionality — slight perspective compression, background separation, clean and smooth out-of-focus areas.

At 85mm: the entire garment or a significant portion is visible. Slight background separation.
At 135mm: tighter shots, stronger background compression, suited to material close-ups.

Never: wide-angle (distorts garment geometry, exaggerates perspective). Never: fisheye. Never: extreme telephoto (flattens texture, reduces material depth).

### Composition

Subject placement: rule of thirds, slightly off-center. The garment does not fill the frame. It occupies the intended region with space around it.

Negative space: a minimum of 30% of the frame is unoccupied background. This is not empty space — it is the frame that gives the subject its weight.

Cropping: when a close-up is required, the subject fills the frame tightly. The crop shows the detail being communicated. No casual or accidental cropping.

Horizon: level unless a deliberate compositional decision requires otherwise.

### Depth of Field

For close-up material shots: f/2.0–f/3.5 equivalent. The primary texture plane is in focus; a few millimeters in front and behind fall away smoothly.

For full-garment shots: f/5.6–f/8.0. The entire piece remains in focus. Background separation is maintained but the piece is sharp end-to-end.

The out-of-focus areas should be smooth and clean — no busy bokeh, no distracting background elements even partially in frame.

### Motion

If motion is present in a generated asset, it must read as physical. Fabric settles, falls, or is adjusted by an unseen hand. No looping CGI motion that does not follow physical laws. No cartoon-like exaggeration of fabric movement.

Subtle is correct. A slow drape settling into position is a complete piece of motion content.

### Materials — Render Targets

Each material type has visual signatures that must be present for the asset to communicate quality:

**Linen:**
Visible weave grain at close range. Matte surface finish. Slight natural irregularity in the weave. Soft creasing at fold points. Color shifts slightly lighter on raised weave, darker in valleys.

**Merino wool:**
Soft sheen. Slight surface fuzz visible at edges and in cross-lighting. Deep pile that catches directional light. Color appears slightly lighter on facing surfaces, deeper in shadow.

**Silk:**
True specular highlight — a bright, defined reflection that follows the light source. Color saturation shifts at different angles (this is real silk behavior). Fluid drape. Surface is smooth with long, flowing folds, not short or rumpled.

**Cotton (structured):**
Matte surface. Defined fold structure — cotton holds its shape. Clean edges at hems and seams. Visible fabric weight in how it falls.

**Denim:**
Visible twill weave. Slight surface fuzz on the face fabric. Natural fading at fold points (creases, pockets). Deep color with slight sheen on raised areas.

### Color Grading Targets

Apply consistently to all Higgsfield outputs in a collection. These targets represent the grading applied after generation:

| Parameter | Target |
|---|---|
| Color temperature | 5600K–6200K (neutral-to-warm) |
| Tint | Neutral, very slight green offset |
| Saturation | 85–90% of native |
| Blacks | Lifted to approximately 10/255 (no crushed shadows) |
| Whites | Recovered (no blown highlights) |
| Contrast | Moderate S-curve, gentle toe and shoulder |
| Vignette | None (never apply post-vignette to Velora assets) |

### Negative Prompts

The following must be excluded from every Higgsfield generation prompt for Velora:

```
watermark, text, logo overlay, fashion mannequin, dress form, plastic, 
vinyl, synthetic sheen, neon light, colored gel, ring flash, studio 
background, white sweep, motion blur, smiling face, looking at camera, 
lifestyle setting, coffee cup, phone, office environment, park, beach, 
oversaturated color, artificial vignette, HDR processing, CGI obvious, 
unrealistic physics, cartoon, illustration, flat lay on white background, 
stock photography look, commercial advertising tone
```

### Consistency Rules

Every set of product images for a collection must share:
1. The same lighting setup (key light position, fill ratio)
2. The same background environment (or a carefully chosen variation within the same tonal range)
3. The same color grading preset applied identically
4. The same camera angle convention for the same product category
5. The same depth of field treatment for equivalent shot types

A set where images vary in color temperature, background brightness, or shadow intensity is rejected. The viewer processes inconsistency as carelessness.

### Asset Naming Convention

Every generated asset is named using this structure:

```
velora_{collection}_{product-slug}_{angle}_{colorway}_{version}.{ext}
```

**Segments:**
- `collection`: season or line identifier (`ss26`, `fw26`, `core`, `limited`)
- `product-slug`: kebab-case product name (`linen-jacket`, `merino-pullover`)
- `angle`: shot type (`front`, `back`, `side-3q`, `detail-shoulder`, `detail-fabric`, `flat`)
- `colorway`: the variant colorway (`natural`, `charcoal`, `ecru`, `slate`)
- `version`: revision number (`v1`, `v2`)

**Examples:**
```
velora_ss26_linen-jacket_front_natural_v1.jpg
velora_ss26_linen-jacket_detail-shoulder_natural_v1.jpg
velora_ss26_merino-pullover_side-3q_charcoal_v1.jpg
velora_ss26_wide-trousers_detail-fabric_ecru_v1.jpg
velora_core_silk-shirt_front_ivory_v1.jpg
```

All final delivery files are JPEG at 90% quality, sRGB color space, minimum 2400px on the long edge. Source files retained in original format.

---

## 9. Motion Language

### Principle

Motion on Velora communicates, it does not perform. Every animation has a functional justification: it reveals sequence, communicates spatial relationship, or confirms state change. An animation without a function is noise.

The target feeling is expensive and considered — like the way a well-engineered door closes. The mechanism is apparent, the result is satisfying, and nothing draws attention to itself.

### Duration Scale

These durations are exact. They are not ranges or estimates.

| Name | Duration | Use |
|---|---|---|
| Instant | 100ms | Button press state, toggle switch, checkbox |
| Fast | 150ms | Hover color transitions, icon state changes |
| Normal | 200ms | Component reveals, chip appearance, badge |
| Moderate | 300ms | Panel open/close, header scroll transition |
| Slow | 400ms | Page transition fade, scroll-triggered section reveal |
| Deliberate | 600ms | 3D scene material transitions only |

The 50ms difference between Fast and Normal is perceptible. These values are not interchangeable. Match the duration to the scale and importance of the transition.

### Easing Curves

Four easing curves. Each has a specific use case.

| Name | Curve | Use |
|---|---|---|
| Standard | `cubic-bezier(0.4, 0, 0.2, 1)` | Most transitions — both enter and exit |
| Enter | `cubic-bezier(0.0, 0, 0.2, 1)` | Elements appearing — decelerates into position |
| Exit | `cubic-bezier(0.4, 0, 1, 1)` | Elements disappearing — accelerates out |
| Sharp | `cubic-bezier(0.4, 0, 0.6, 1)` | Snappy toggle, fast acknowledgment |

No bounce curves. No spring physics that overshoot. The motion does not call attention to itself.

### Opacity

Opacity animations always go from 0 to 1 (or 1 to 0). Never from 0 to 0.8, never from 0.3 to 1. Partial opacity on appearance creates an unfinished quality.

Never animate `opacity` and `background-color` simultaneously on the same element — the compounding visual effect creates noise.

### Transforms

Reveal animations use `translateY` only — moving upward 16–32px into position as opacity increases. This is the standard scroll reveal.

Prohibited transforms in UI animations: `rotate` (unless communicating a direction change, like an accordion chevron), `scale` (feels playful, not premium), `skew` (never), `perspective` transforms in the flat UI (reserved for 3D canvas only).

### Scroll Behavior

Scroll-triggered reveal animations activate when the element is 64px inside the viewport from the bottom edge. `once: true` — elements reveal once and stay revealed. They do not re-hide on scroll up.

The scroll trigger delay matches the section complexity: simple text blocks trigger at `delay: 0`. The second element in a stagger sequence uses `delay: 0.1`. Maximum stagger delay per item: 0.15s. A sequence of 6 items should complete its entrance within 1 second of the trigger.

### Micro Interactions

| Interaction | Property | Duration |
|---|---|---|
| Link hover | `color` | 150ms, Standard |
| Button hover | `background-color` | 150ms, Standard |
| Card hover (interactive) | `box-shadow` | 200ms, Standard |
| Input focus | `border-color` | 200ms, Standard |
| Header scroll solid | `background-color`, `backdrop-filter`, `box-shadow` | 300ms, Standard |

### Hover Philosophy

Hover states communicate availability. They are not visual rewards.

The hover change is: color shift and shadow depth only. Never scale. Never lift (transform translateY). Never glow. Never outline expansion. Never underline animation (the underline is present or absent, not animated into place).

The change should be immediate in feeling — not theatrical. It acknowledges the user's cursor without performing for it.

### What Never Animates

- Elements that the user interacts with multiple times per session (cart icon, filter toggle, quantity update). These receive instant state changes, not transitions.
- Elements in the critical purchase path. The checkout form does not animate. The order confirmation is a moment, not a sequence.
- Page load content above the fold. The hero does not animate in. It is present when the page loads. Animation is for scroll reveals, not initial page appearance.

---

## 10. UI Philosophy

### Buttons

**Contained (primary):**
Accent gold fill (`gold.400`). Near-black text (`neutral.950`). No border, no glow, no shadow. Padding: 24–32px horizontal, 12–14px vertical. Font: 14px, weight 500, sentence case. Hover: `gold.500` fill, 150ms transition.

**Outlined (secondary):**
Transparent fill. 1px border — either `neutral.900` on light backgrounds or `gold.400` on dark. Same text color as border. Hover: border shifts to `gold.400`, text follows.

**Pill variant:**
Border-radius 9999px. Used only for the primary landing CTA and the 3D designer entry point. Not for navigation, not for form submission, not for cart actions. The pill shape is reserved for the platform's signature moments.

**Rules:**
- Minimum height: 44px (WCAG touch target)
- Maximum width: fit-to-content (never stretch buttons to full container width in non-form contexts)
- Never two contained buttons adjacent to each other
- No icons inside primary contained buttons unless the icon replaces the text entirely
- No loading spinner inside buttons — use a separate loading state for the section

### Inputs

Outlined variant only. Never filled. Never underline-only (standard MUI variant).

**At rest:** `neutral.300` border, `neutral.900` text, `neutral.500` placeholder.
**On focus:** `gold.400` border, 2px. Focus ring matches.
**On error:** `error.main` border, error message text below. Never just a red border without explanation.

Labels appear above the input. Never floating. Floating labels create layout instability as the input fills. The label is always visible, always in the same position.

Error messages are calm in tone. "This email address is not recognized." Not "Invalid email." Not "Error."

### Cards

Elevation 1 (`box-shadow: 0 1px 2px rgba(28,27,25,0.06)`) at rest. Elevation 2 (`0 2px 8px rgba(28,27,25,0.08)`) on hover for interactive cards.

Radius: 8px. Padding: 24px minimum, never less.

No heavy borders on cards. A 1px `neutral.200` border is acceptable. A 2px border signals selection state.

Background: `neutral.100` (paper surface). Never white unless an elevated surface above a card background.

### Navigation

Desktop: horizontal, centered in the header. Overline style — 11px, uppercase, 0.12em tracking, weight 600. Color: `neutral.600` at rest, `neutral.900` on hover. No background on hover. No underline animation. The change is color only.

Active state: same hover color. No underline. No background. The active page is distinguished by color only — this is sufficient.

Mobile: full-width drawer from the right. Same links, 18px at 400 weight, left-aligned. Generous tap targets (48px minimum height per link).

### Spacing

8px base unit. Every spacing value in the interface is a multiple of 8. The spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px. No values outside this scale without documented justification.

### Borders

1px throughout. The only context for a 2px border: error state, selected card state. No 3px+ borders anywhere.

### Radius Scale

| Token | Value | Use |
|---|---|---|
| xs | 2px | Tags, small badges |
| sm | 4px | Inputs, chips, small buttons |
| md | 8px | Cards, panels |
| lg | 12px | Dialogs, drawers |
| pill | 9999px | Signature CTAs only |

### Elevation

Three levels only. No intermediate values.

| Level | Shadow | Use |
|---|---|---|
| Resting | `0 1px 2px rgba(28,27,25,0.06)` | Cards, chips at rest |
| Elevated | `0 2px 8px rgba(28,27,25,0.08)` | Card hover, active surface |
| Floating | `0 8px 32px rgba(28,27,25,0.12)` | Dialogs, modals, drawers |

No outer glow as elevation. No colored shadows. Shadow color is always the warm near-black (`neutral.950` in rgba), not pure black.

---

## 11. Product Presentation

### The Product is the Hero

This is not a stylistic preference. It is the operational premise of the platform. Every layout decision in the product context exists in service of the garment. The interface width, the whitespace, the typography hierarchy — all of it is there to direct attention to the product.

If a design element competes with the product image for attention, that element is wrong.

### Backgrounds for Product Images

Warm neutral. The product sits on or against backgrounds in the `neutral.50` to `neutral.200` range. The background recedes. The garment advances.

No colored backgrounds. No bright white sweep. No photographer's studio visible in frame. The environment communicates permanence: aged stone, plaster, linen, weathered wood.

### Angles and Shot Order

For each product, the standard shot set is:

1. **Front 3/4:** the garment at a slight angle, 30° right of center. This is the primary grid thumbnail.
2. **Back:** for garments with significant back detail. Optional otherwise.
3. **Detail 1:** the most significant material or construction detail. Close-up.
4. **Detail 2:** secondary detail — lining, button, hem, seam. Close-up.
5. **Context:** the garment worn or placed in an environment. Partial human or none.

The grid always uses the front 3/4. The detail page leads with front 3/4, then expands to the full set.

### Composition Rules

The garment occupies 65–75% of the frame width. The remaining 25–35% is negative space on at least two edges. A garment jammed into the corners of the frame communicates volume retail, not craftsmanship.

For close-up shots: the subject fills 80–90% of the frame. The viewer should feel the texture.

### Negative Space

Negative space in product photography is not emptiness. It is the decision to let the product exist without competition. A wide shot of a well-made jacket with space around it communicates a higher price point than a crowded frame. This is not accident. It is the fundamental visual grammar of luxury retail.

### Color Accuracy

The garment in the image must match the garment as produced and as rendered in the 3D viewer. Color accuracy is non-negotiable. If the silk blend shirt in `ivory` appears warm white in photography and cool white in the 3D viewer, the product photography is wrong and must be reshot.

---

## 12. Things We Never Do

These are absolute. They do not have exceptions. They do not become acceptable in edge cases or under time pressure.

### Visual

- No glassmorphism. Frosted glass panels, semi-transparent blurred surfaces used as decorative UI elements — prohibited. (Note: a near-opaque header with subtle backdrop blur is not glassmorphism. That is a functional transition with 95%+ opacity.)
- No neon. No electric blue, electric green, hot pink, or any color that reads as luminescent or synthetic.
- No cyberpunk aesthetics. No dark chrome, no hexagonal grid patterns, no glitch effects, no scanlines.
- No gaming aesthetics. No particle effects in the UI, no lens flare, no HUD-style overlays.
- No startup illustrations. No Undraw-style vector figures. No isometric illustrations. No figurative icon packs used as section decoration.
- No floating random icons. No decorative icon arrangements used as visual interest.
- No emoji in platform UI. Emoji in user-generated content is acceptable. Never in interface copy, button labels, headings, or error messages.
- No loud gradients. No multi-hue gradients as backgrounds, no mesh gradients, no rainbow gradients. Subtle single-hue gradients within a narrow tonal range are acceptable where functionally required.
- No visual clutter. No more than one primary CTA per page view. No competing carousels. No overlapping element layers outside the 3D canvas.
- No fake luxury. No faux gold leaf patterns. No velvet texture backgrounds. No decorative serif logos. Luxury is communicated through quality and restraint, not through signifiers of luxury.
- No dark patterns. No pre-checked opt-ins, no disguised subscription flows, no urgency manipulation, no misleading button hierarchy.
- No countdown timers. Ever.
- No stock photography. A visually recognizable stock image — generic model, studio sweep, fluorescent studio lighting — undermines the entire brand in a single frame.
- No center-aligned body paragraphs. One of the clearest signs of a low-attention layout.

### Behavioral

- No urgency signals. No "Only 2 left." No "Sale ends in." No "Others are viewing this now."
- No animations on repeated paths. The cart icon does not animate every time the user opens the cart. Repeated transitions become noise.
- No inline pricing changes styled as sales (crossed-out original price, red reduced price). If there is a promotional price, it is handled through a dedicated, considered promotional design.
- No silent error states. If something fails, the interface says so clearly, calmly, and with a recovery path.

### Technical

- No hardcoded colors outside the token system.
- No arbitrary spacing values outside the 8px scale.
- No `!important` in CSS without documented override justification.
- No placeholder text shipped to production.
- No TODO comments in committed code.

---

## 13. Future Vision

After Sprint 13, a person who encounters Velora for the first time should not be able to immediately categorize it. It should not look like "a premium e-commerce site." It should look like Velora — a category of one.

The landing page, fully realized, opens with a slow video of fabric being set on a surface. The camera is close. The material is immediately identifiable as exceptional. The sound is ambient — the environment, not music. The headline appears: "Wear Your Identity." in light-weight Geist Sans at 10vw. Nothing else competes.

The 3D designer, when fully active, feels like entering a space. The garment rotates slowly until the user reaches for it. Material selection feels like touching samples. The user's configuration is saved and remembered. The garment is theirs before it is made.

The product catalog is not a grid — it is a curated sequence. Each collection is presented editorially. The typographic structure between products is as considered as the products themselves.

The checkout is quiet. One step at a time. No upselling. No distractions. The confirmation page is a moment of completion — not a notification.

Throughout, the motion is consistent: unhurried reveals, honest state transitions, no theatrical entrances. The interface behaves like a well-made object: substantial, smooth, and completely out of the way.

A visitor who experiences the full platform should come away with a single impression: this was made by people who understood what they were building, why it mattered, and how it should feel to use.

That is the visual standard. Everything produced for this platform is measured against it.

---

*This document should be read alongside `docs/DESIGN_BIBLE.md` (principles) and `docs/CODING_STANDARDS.md` (implementation rules). When a conflict appears, this document governs visual decisions; DESIGN_BIBLE.md governs philosophical ones.*
