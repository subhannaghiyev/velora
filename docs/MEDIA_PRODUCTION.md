# Velora Media Production Handbook

> This document governs the production of every visual asset for the Velora platform.
> It is a working production guide, not a style reference. Style reference lives in `docs/ART_DIRECTION.md`.
> Every asset produced for Velora — video, photography, poster, banner — begins here.

---

## 1. Production Overview

This is the Spring/Summer 2026 (`ss26`) collection launch package. It establishes the visual identity for the first public version of the platform. Every asset produced under this brief must be usable together without visual inconsistency.

The visual register: a luxury Italian atelier captured through the lens of a film photographer. Warm. Tactile. Deliberate. Nothing performative. The camera is interested in material, not people.

**References (visual register, not direct references):**
- Loro Piana campaign photography — material intimacy
- The Row — restraint and negative space
- COS — architectural precision in fabric
- Aesop — object + environment storytelling
- Apple product photography — lit from a single direction, absolute sharpness on the subject plane

---

## 2. Naming Convention

Every asset file follows this exact structure. No exceptions.

```
velora_{collection}_{subject-slug}_{angle}_{colorway}_{version}.{ext}
```

### Segments

| Segment | Format | Values |
|---|---|---|
| `collection` | lowercase | `ss26`, `fw26`, `core`, `limited` |
| `subject-slug` | kebab-case | `linen-jacket`, `hero-background`, `brand-story` |
| `angle` | kebab-case | see Angle Codes below |
| `colorway` | lowercase | `natural`, `charcoal`, `ecru`, `slate`, `ivory`, `campaign` |
| `version` | `v` + integer | `v1`, `v2`, `v3` |
| `ext` | lowercase | `jpg`, `webp`, `avif`, `mp4`, `mov`, `png` |

### Angle Codes

| Code | Meaning |
|---|---|
| `front` | Face-on, zero angle |
| `side-3q` | 30–45° off-axis (three-quarter) |
| `back` | Rear face |
| `detail-shoulder` | Close-up: shoulder/collar area |
| `detail-sleeve` | Close-up: sleeve and cuff |
| `detail-hem` | Close-up: hem or trouser break |
| `detail-construction` | Close-up: visible seam, button, lining |
| `fabric-macro` | Extreme close-up: weave texture |
| `flat-editorial` | Flat lay, styled on textured surface |
| `hanging` | Garment on hook/rail, architectural environment |
| `folded` | Garment folded and presented |
| `context-env` | Garment in environment, partial composition |
| `poster` | Hero or campaign poster frame |
| `banner-hero` | Wide editorial banner (21:9 or 16:9) |
| `banner-newsletter` | Newsletter header format |
| `bg-dark` | Dark environment background |
| `bg-3d-preview` | Designer preview background |

### Examples

```
velora_ss26_linen-jacket_front_natural_v1.webp
velora_ss26_linen-jacket_fabric-macro_natural_v1.webp
velora_ss26_hero-background_poster_campaign_v1.webp
velora_ss26_brand-story_banner-hero_campaign_v1.webp
velora_ss26_hero-background_front_campaign_v1.mp4
velora_ss26_3d-preview_bg-dark_campaign_v1.webp
```

---

## 3. Folder Structure

All production assets live in `frontend/public/` so Next.js can serve them directly. Source files (Higgsfield raw outputs, masters) live in `frontend/src/assets/` and are never committed to the repository if they exceed 10MB — use Git LFS or asset storage.

```
frontend/
├── public/
│   ├── videos/
│   │   ├── hero/
│   │   │   └── velora_ss26_hero-background_front_campaign_v1.mp4
│   │   └── campaigns/
│   │       └── (future campaign clips)
│   ├── images/
│   │   ├── editorial/
│   │   │   ├── velora_ss26_brand-story_banner-hero_campaign_v1.webp
│   │   │   ├── velora_ss26_craftsmanship_detail-construction_natural_v1.webp
│   │   │   └── (8 editorial campaign images)
│   │   ├── products/
│   │   │   ├── velora_ss26_linen-jacket_front_natural_v1.webp
│   │   │   ├── velora_ss26_linen-jacket_detail-shoulder_natural_v1.webp
│   │   │   └── (12 product images)
│   │   └── collections/
│   │       └── velora_ss26_collection_banner-hero_natural_v1.webp
│   └── posters/
│       └── velora_ss26_hero-background_poster_campaign_v1.webp
│
└── src/assets/
    ├── videos/
    │   ├── hero/            — source/master video files (Git LFS)
    │   └── campaigns/       — campaign video source files (Git LFS)
    ├── images/
    │   ├── editorial/       — full-resolution Higgsfield outputs
    │   ├── products/        — full-resolution product photography
    │   └── collections/     — collection photography
    ├── posters/             — poster source files
    └── textures/            — material swatches for 3D (Sprint 7)
```

---

## 4. Export Formats and Technical Specifications

### Video

| Parameter | Value |
|---|---|
| Resolution | 3840 × 2160 (4K UHD) |
| Frame rate | 24fps (not 23.976 — use exactly 24) |
| Codec | H.265 (HEVC) |
| Bitrate | 40–60 Mbps for master; web delivery at 8–12 Mbps |
| Color space | sRGB (Rec.709 for delivery) |
| Duration | 12–16 seconds exactly |
| Loop | First and last frames must be pixel-identical |
| Audio | None (muted) |
| Delivery formats | `.mp4` (H.265), `.webm` (VP9 fallback) |
| Web delivery | 1920 × 1080 compressed (H.265, ~8 Mbps) for initial load |
| Master | Lossless ProRes 4444 at full 4K, retained in asset storage |

**Loop integrity check:** export a 5-second clip containing the last 2.5 seconds and first 2.5 seconds joined. It must be visually seamless at the join point.

### Primary Images

| Parameter | Value |
|---|---|
| Primary format | WebP (production delivery) |
| Secondary format | AVIF (for browsers with support — Next.js serves via `<Image>`) |
| Fallback format | JPEG (for legacy) |
| Minimum resolution | 2400px on the long edge for all product images |
| Hero/Campaign minimum | 3840px on the long edge |
| Poster minimum | 3840 × 2160 (matches video frame) |
| Color space | sRGB |
| WebP quality | 85–90% (visually lossless) |
| AVIF quality | 80–85% (higher compression efficiency) |
| JPEG quality | 90% (fallback only) |

### Compression Rules

**For product images (WebP):**
- Target file size: under 200KB per image at delivery size
- Never compress below 80% WebP quality — artifacts read as carelessness on a luxury platform
- Resize to display dimensions before compressing — never serve a 3840px image for a 400px slot

**For hero images / banners (WebP):**
- Target file size: under 400KB at 1920px width
- Source master: lossless WebP or PNG, stored separately

**For posters (WebP lossless):**
- The poster is the first visible frame — compression artifacts are unacceptable
- Lossless WebP: file size is secondary to quality
- Maximum acceptable size: 1MB

### Color Profile

**Input:** sRGB (Higgsfield outputs are sRGB by default)

**Grading adjustments to apply post-generation:**
- Color temperature: push warm (toward 6000K) if output reads cool
- Saturation: reduce 10–15% uniformly (most AI generation over-saturates)
- Black point: set to 10–12/255 (lift shadows slightly)
- White point: recover blown highlights if present
- Curve: gentle S-curve (lift shadows 5%, pull highlights 3%)

**Never:** convert to P3 or ProPhoto for web delivery. sRGB only.

### Versioning

- All assets start at `v1`
- A version increment (`v2`, `v3`) is triggered by: color correction, cropping change, subject replacement
- Do not increment for file format changes (exporting to AVIF from a v1 WebP is still v1)
- Maintain a version log in this document under §10 (Asset Registry)

---

## 5. Hero Video Shot List

**Brief:** A 12–16 second seamless loop. One continuous camera movement. The subject is a natural linen jacket. The movement reveals material quality — the viewer should want to touch the fabric by the time the loop completes.

**Environment:** Worn limestone surface or aged concrete ledge. Natural directional light entering from upper left. Warm afternoon temperature (approximately 3pm Mediterranean).

**Loop method:** The camera begins at approximately 120cm from the shoulder area of the jacket and performs a slow linear push-in dolly to approximately 60cm, arriving at a tight framing of the shoulder seam and upper sleeve. The motion covers the full 12–16 seconds. The loop is achieved by the shot holding on the arrival frame for 12 frames, then the clip plays from beginning — the slow motion means the transition is invisible at standard viewing speed.

---

### Shot 1 — Approach / Opening (0:00 – 0:04)

| | |
|---|---|
| **Camera** | 135mm equivalent, f/4.0 |
| **Start position** | 120cm from garment, center-frame on the jacket's upper body |
| **End position** | 85cm, reframing slightly right so shoulder seam is at left-third |
| **Movement** | Linear dolly push-in, 4.0 seconds, perfectly smooth |
| **Lighting** | Key light at 45° upper-left, filling the shoulder and sleeve. Fill at right 30%. Background in ambient shadow. |
| **Fabric state** | Jacket lying flat on surface, left arm extended slightly, visible natural wrinkle at elbow |
| **Purpose** | Establish the garment and the environment. The viewer sees what we are looking at. |
| **Transition** | Continuous — no cut |

---

### Shot 2 — Reveal (0:04 – 0:08)

| | |
|---|---|
| **Camera** | 135mm equivalent, f/3.5 |
| **Start position** | Continuous from Shot 1 arrival (85cm) |
| **End position** | 60cm, tight on the shoulder seam area, weave visible |
| **Movement** | Continued push-in, now slower — approximately 60% of Shot 1 speed |
| **Lighting** | Same setup. At this proximity, the fabric weave catches the key light directionally — the linen grain becomes visible |
| **Fabric state** | The natural fold at the shoulder seam reads clearly. The shadow under the fold communicates fabric weight. |
| **Purpose** | The material reveal. This is the moment that communicates quality. |
| **Transition** | Continuous — no cut |

---

### Shot 3 — Settle / Loop Point (0:08 – 0:14)

| | |
|---|---|
| **Camera** | 135mm equivalent, f/3.5 |
| **Position** | Holding at 60cm, no movement |
| **Movement** | Hold. 6 seconds of stillness. |
| **Lighting** | Identical to Shot 2 |
| **Fabric state** | A very slow, barely perceptible fabric settle — as if the garment has just been placed and is finding its final position |
| **Purpose** | The pause. After the reveal, space. Lets the viewer process the material quality. Creates the loop point. |
| **Transition** | Loop point — final frame matches Shot 1 opening frame through careful composition |

---

## 6. Higgsfield Prompts

### Master Lighting & Camera Specification

Apply this to every prompt. It is the Velora visual standard. Do not deviate from it.

```
LIGHTING SETUP:
- Primary key light: large soft source (150cm softbox equivalent), positioned 45° above and 30-45° to the left of subject
- Fill light: same type, right side, 30% intensity of key light
- Background: ambient only, 0.5-1.0 stops darker than key reading — background falls back, subject comes forward
- No: neon, colored gel, ring flash, catch lights that read as artificial, three-point even studio lighting

CAMERA SPECIFICATION:
- Focal length: 85-135mm full-frame equivalent
- Depth of field: shallow to medium — subject in sharp focus, background out of focus with smooth bokeh
- No: wide angle, fisheye, extreme telephoto compression
- Lens character: slightly warm (vintage-adjacent coating), no clinical digital sharpness

COLOR GRADING TARGET (post-generation):
- Temperature: 5600-6200K, warm not cool
- Saturation: 85-90% of native
- Blacks: lifted — minimum 10/255, no crushed shadows
- Highlights: recovered — no blown whites
- Contrast: moderate S-curve, not lifted midtones
- Vignette: none
```

---

### MASTER NEGATIVE PROMPT (include in every generation)

```
watermark, text overlay, logo, fashion mannequin, dress form, headless mannequin, 
plastic materials, vinyl, synthetic sheen, neon light, colored gel, ring flash, 
pure white background, seamless paper sweep, fluorescent studio, cold light, 
blue-tinted light, smiling face, person looking at camera, lifestyle setting, 
coffee cup, phone, laptop, office, park, beach, shopping bag, price tag, 
oversaturated colors, artificial vignette, extreme HDR, tone-mapped, cartoon, 
illustration, painting, drawing, digital art obvious, CGI obvious, plastic physics, 
unrealistic fabric drape, stock photography look, commercial advertising, 
wide angle lens distortion, fisheye, busy bokeh, distracting background detail, 
motion blur on fabric, double exposure, composite art, glitch, watercolor, 
neon gradient, chromatic aberration, lens flare, light leaks, grain overdone
```

---

### PROMPT 001 — Hero Video

**Asset:** `velora_ss26_hero-background_front_campaign_v1.mp4`
**Purpose:** Landing page full-bleed background video
**Duration:** 12–14 seconds, loopable
**Resolution:** 3840 × 2160, 24fps

```
VELORA HERO VIDEO — PRODUCTION PROMPT

A 12-14 second continuous dolly push-in video shot in 4K at 24fps.

Subject: A natural-colorway tailored linen jacket lies flat on the surface of a worn 
limestone ledge, left arm extended slightly, visible natural fold at the shoulder seam. 
The jacket occupies the left 60% of the frame. The right 40% is the limestone surface.

Environment: Minimal interior with aged stone ledge. A single window out of frame at 
upper left casts warm directional natural light (simulating late afternoon, 5600-6200K). 
The background is in ambient shadow, slightly underexposed.

Camera movement: Begins at approximately 120cm from the garment, centered on the jacket's 
upper body (shoulder and chest). Performs a slow, perfectly smooth linear dolly push-in 
to arrive at 60cm — tight framing on the shoulder seam and upper sleeve — over 12-14 
seconds. Movement is imperceptibly slow. No acceleration or deceleration — constant 
speed throughout.

The movement reveals: as the camera approaches, the linen weave grain becomes visible. 
The directional key light catches the texture of the fabric — raised threads lighter, 
recessed threads darker. The natural fold at the shoulder seam casts a precise shadow 
that communicates fabric weight.

At the arrival frame (60cm): the shoulder seam occupies the left-center of the frame. 
The linen texture fills the majority of the image. Fine weave detail is visible. 
The background falls completely out of focus.

Loop design: The final frame of the video must match the opening frame in composition 
and lighting. The clip is designed to loop invisibly — the transition from end to start 
is seamless because the camera movement is so slow that the jump is imperceptible at 
normal viewing speed.

Lighting: Key light 45° upper-left, large softbox. Fill right at 30%. 
No rim light. No background light. 
Background in natural ambient.

Lens: 135mm equivalent, f/4.0. Smooth, clean bokeh.

Fabric behavior: Linen jacket is at rest. No movement in the fabric itself.
Very subtle ambient room air movement may cause the lightest surface fibers to 
shift — this is acceptable and desirable if it reads as physical, not CGI.

Color: Warm, film-adjacent. Matte linen surface. 
Not digital-sharp. Not oversaturated.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### PROMPT 002 — Hero Poster Frame

**Asset:** `velora_ss26_hero-background_poster_campaign_v1.webp`
**Purpose:** Video poster (shown before video loads), HeroSection background
**Format:** Lossless WebP, 3840 × 2160

```
VELORA HERO POSTER

Still image, 16:9 (3840x2160). This is the opening frame of the hero video.

Subject: Natural-colorway tailored linen jacket on worn limestone ledge. 
Camera at 120cm distance, centered on upper body of jacket.
Left arm of jacket extended slightly. Natural fold at shoulder visible.
Jacket occupies left 60% of frame. Limestone surface occupies right 40%.

The scene reads as: a single garment in quiet repose, waiting to be discovered.
There is no urgency. No styling. No arrangement that reads as performative.
The jacket simply exists in this space, the way a well-made thing occupies a room.

Lighting: Key light 45° upper-left, very soft and large. Warm afternoon temperature.
Deep shadow on the right side of the garment — not detail-blocking, 
but enough contrast to read the three-dimensional form of the jacket.
Background in ambient, slightly underexposed.

Camera: 135mm equivalent. f/5.6 (enough depth to keep the full jacket shoulder 
region sharp, background falls away smoothly).

Color: Film-adjacent warmth. Matte linen. Lifted blacks. 
The image could be a still from a 1990s Armani campaign — that era of restraint.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### PROMPT 003 — Brand Story Campaign Image (Wide)

**Asset:** `velora_ss26_brand-story_banner-hero_campaign_v1.webp`
**Purpose:** BrandStorySection full-width editorial image break (21:9 crop)
**Format:** WebP 90%, minimum 3360 × 1440

```
VELORA BRAND STORY — EDITORIAL BANNER

Ultra-wide editorial image (21:9 format). This image interrupts the flow of text 
like a magazine spread. It does not illustrate the copy — it exists in the same 
register as the copy.

Subject: A pair of wide-leg linen trousers in ecru, draped over the arm of a 
weathered wooden chair. The chair is against a wall of aged plaster. 
Morning light enters from the left. The trousers fall naturally — the waistband 
rests on the chair arm, the legs fall toward the floor, creating a long sweep 
of fabric across the lower left of the frame.

Composition: The trouser fabric occupies the left 40% of the image.
The plaster wall occupies the right 60%. The right side of the image is deliberately 
open — almost entirely negative space. This is intentional editorial breathing room.

The mood: Quiet morning. Something placed and forgotten, or something waiting 
to be worn. No person present. The garment exists in the space with the 
same weight as the furniture.

Lighting: Raking light from upper-left window (out of frame), 
casting long diagonal shadow across the plaster wall. 
The light catches the linen texture on the trouser legs.

Lens: 85mm, f/5.6. Full fabric in focus, wall background slightly soft.

Color: Very warm morning light. The plaster wall has warm undertones (cream, not white).
The ecru linen appears richer in this light.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### PROMPT 004 — Brand Story Fabric Detail

**Asset:** `velora_ss26_brand-story_fabric-macro_natural_v1.webp`
**Purpose:** Close-up for brand story craftsmanship section, alternate CampaignImage
**Format:** WebP 90%, minimum 2400 × 2400 (square crop to 1:1)

```
VELORA BRAND STORY — FABRIC MACRO

Extreme close-up of natural linen weave. The entire frame is fabric.
No garment shape visible — only texture.

The linen weave fills the frame completely. Raised weft threads catch the 
directional key light and appear lighter. The warp threads in the recesses 
appear slightly darker, creating visible texture dimensionality.

At this scale, slight natural irregularities in the weave are visible — 
small variations in thread thickness and spacing that read as handmade 
quality rather than industrial uniformity. These imperfections are assets.

A very subtle natural crease crosses the lower-right quadrant — evidence of 
real fabric, not a CGI render.

Lighting: Extreme raking — key light at 80° from the surface plane 
(almost parallel to the fabric). This creates maximum texture revelation. 
Fill at 20% prevents full shadow on the weave recesses.

Lens: 100mm macro equivalent. f/2.8. The plane of focus runs parallel 
to the fabric surface. Texture is sharp from edge to edge in the focus plane. 
Very shallow depth — slight blur at the extreme foreground edge.

Color: Natural linen — warm undyed cream. 
No cool white. No bleached appearance.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above) + "synthetic fiber, perfect uniformity, machine-perfect weave, polyester, nylon"*

---

### PROMPT 005 — Craftsmanship Section Detail

**Asset:** `velora_ss26_craftsmanship_detail-construction_natural_v1.webp`
**Purpose:** Craftsmanship section visual (CampaignImage, 4:3 crop)
**Format:** WebP 90%, minimum 3200 × 2400

```
VELORA CRAFTSMANSHIP — SEAM DETAIL

A close-up of the interior of a tailored jacket at the shoulder seam.
The jacket is held open slightly to reveal the internal construction: 
a clean felled seam, the canvas interfacing, the hand-stitched pad stitching 
on the chest canvas.

The detail that must be visible: a single line of hand-stitching running 
parallel to the seam, executed with natural thread on the canvas. 
This is the detail that distinguishes bespoke from ready-to-wear.

A hand (from the left, out of frame except for two fingers) holds the 
lapel back gently to reveal the interior. The hand is well-kept but 
not manicured — real hands, not model hands.

Lighting: Close directional light (45° upper-left) revealing the three-dimensional 
quality of the canvas and stitching. The shadow inside each stitch hole 
communicates depth and intentionality.

Lens: 100mm macro, f/3.5. The stitching detail is in sharp focus.
The surrounding fabric falls away softly.

Color: Interior fabric in natural cream linen. 
Stitching in natural ecru thread. 
The hand is warm-toned skin, neutral light.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above) + "machine stitching, synthetic lining, polyester, glue"*

---

### PROMPT 006 — Designer Preview Background (Dark)

**Asset:** `velora_ss26_3d-preview_bg-dark_campaign_v1.webp`
**Purpose:** DesignerPreviewSection HeroPoster — dark background for 3D preview area
**Format:** WebP lossless, minimum 2400 × 1600 (3:2)

```
VELORA 3D DESIGNER — PREVIEW BACKGROUND

A dark, architectural still image. This image will sit behind the 3D designer 
interface — it is a suggestion of space and precision, not a literal environment.

Subject: A single wooden tailor's dress form (vintage, not plastic), 
set against a wall of dark-painted plaster. The form is unclothed. 
A soft side light from the left creates a single, clean highlight 
along the shoulder and the curved hip. The rest falls into deep shadow.

The image should read as: craftsmanship, precision, intention.
The space belongs to the work. Not a showroom. A studio.

The dress form occupies the right-center of the frame. 
The left 40% is the dark wall, with only the ambient edge of the light.
The bottom third is the studio floor — dark concrete or dark-stained wood.

Lighting: Single key light from far left, relatively narrow — not a broad 
ambient fill. A focused directional that creates a clear light-to-shadow 
transition across the form. Background is nearly black.

Lens: 85mm equivalent. f/4.0. The form is fully sharp. Background and 
foreground fall dark and soft.

Color: Very dark. Near-black background (#111110 reference). 
The key highlight on the form shoulder reads as warm — the wood 
of the form has a slight honey-amber color in the light.
Dark sections should remain detail-visible (lifted blacks — avoid crushing to pure black).
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above) + "modern plastic dress form, white background, bright light, showroom, retail, 3D render obvious, chrome, metallic"*

---

### PROMPT 007 — Collection Banner

**Asset:** `velora_ss26_collection_banner-hero_campaign_v1.webp`
**Purpose:** Collection page header (16:5 crop), FeaturedCollection visual
**Format:** WebP 90%, minimum 3840 × 1200

```
VELORA COLLECTION BANNER — SS26

An extremely wide panoramic editorial image (16:5 aspect ratio).

Subject: Three garments arranged in a composed, editorial manner on a 
long natural stone shelf or ledge. Left to right:
1. A natural linen jacket, folded flat, arms tucked beneath, positioned on stone
2. A merino pullover in charcoal, laid loosely beside the jacket with a natural fold
3. Wide-leg ecru trousers, folded in half lengthwise and placed at the far right

The three garments read as a family — same environment, different materials, 
same warm tone palette. Together they communicate a collection, not individual items.

The stone shelf runs the full width of the image. Above: a pale plaster wall with 
very subtle texture. Below: implied stone floor, in soft shadow.

Lighting: Long, even raking light from the left side — because this image is so wide, 
the light must travel the full width. The leftmost garment (jacket) is 
in full key light. The middle garment (pullover) is in three-quarter light. 
The rightmost garment (trousers) is in slightly darker, more ambient light — 
as if the light source is to the left and falls off naturally.

This natural falloff across the image communicates genuine environmental light, 
not studio setup.

Lens: 50mm equivalent (wider for the panoramic format, but not wide-angle character).
f/8.0. Everything is in focus.

Color: Warm afternoon. Stone is warm gray. Plaster is warm cream.
The three fabric colorways — natural, charcoal, ecru — read distinctly 
but harmoniously in this light.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### PROMPT 008 — Newsletter Banner

**Asset:** `velora_ss26_newsletter_banner-newsletter_campaign_v1.webp`
**Purpose:** Email newsletter header (600 × 300px delivery, 2:1 ratio)
**Format:** WebP 90%, minimum 1200 × 600

```
VELORA NEWSLETTER BANNER

A minimal, 2:1 editorial image for email header use.

Subject: A single folded merino wool pullover in charcoal, placed on 
a worn wooden surface. The fold runs horizontally across the 
lower-center of the image. Above the sweater: warm negative space 
(the wooden surface continues up into the frame).

The image has large, calm breathing room. The pullover is positioned 
in the lower 40% of the frame, centered. The upper 60% is the textured 
wooden surface in ambient light — slightly darker than the pullover, 
giving it a subtle sense of weight and depth.

This is an image about quiet quality. A well-made object in a 
considered space.

Lighting: Very even, soft window light from upper-left. 
No strong shadows — this is a gentle light that wraps the 
form without drama.

Lens: 85mm, f/5.6. The pullover is fully sharp. 
The wood grain has subtle texture in focus.

Color: The charcoal pullover reads as deep, rich neutral. 
The wood surface is a warm mid-tone. 
Overall temperature: 5800K, slightly warm.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### PROMPT 009 — Editorial Environmental

**Asset:** `velora_ss26_editorial_context-env_campaign_v1.webp`
**Purpose:** General editorial use — brand identity, social, future editorial sections
**Format:** WebP 90%, 3:2, minimum 2400 × 1600

```
VELORA EDITORIAL — ENVIRONMENT

A garment in its natural state of use — not styled, not posed.

Subject: A silk blend shirt in ivory, hanging from a single brass hook 
on a dark-painted wall. The hook is at approximately 180cm height. 
The shirt hangs naturally — slightly twisted at the collar, 
the body following gravity into a clean drape, cuffs unbutton open.

No person visible. A pair of hands (out of frame except for the wrists) 
have just hung the shirt — the subtle motion of the fabric settling is 
implied by the slight animation of the collar.

The room: dark walls (charcoal or deep forest green plaster), 
old herringbone parquet floor visible at the bottom quarter of frame.
A single, narrow vertical window out of frame to the right casts 
a single column of warm light that crosses the shirt at a diagonal.

The shirt catches this light: the silk creates a clear, 
moving specular highlight along the diagonal of the light column.
The rest of the shirt falls in warm ambient shadow.

This image reads as: a moment between wearing. 
A garment given space to exist. A quiet room.

Lens: 85mm, f/3.5. The shirt is in sharp focus.
The room background is soft — identifiable but not distracting.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

## 7. Product Image Prompts — SS26 Collection

**Collection brief:** The Spring/Summer 2026 launch collection. Four hero products, three images each (12 total). All images share the same lighting setup, background environment, and color grade.

**Consistent environment for all product images:**
A long natural stone shelf or narrow limestone ledge, set against a warm-toned aged plaster wall. The shelf is at approximately waist height. Natural afternoon light from upper left (45° key, 30% fill). Background slightly underexposed.

---

### P01 — Tailored Linen Jacket, Front

**Asset:** `velora_ss26_linen-jacket_front_natural_v1.webp`
**Format:** WebP 90%, 3:4, minimum 1800 × 2400

```
PRODUCT SHOT — TAILORED LINEN JACKET — FRONT

Subject: A natural-colorway tailored linen jacket, single-breasted, 
two-button, sitting flat on a limestone ledge. The jacket is 
laid face-up, arms slightly extended — not folded tight. 
The collar is turned up very slightly on one side 
(a gesture of informality, not carelessness).

The jacket occupies 65% of the frame width. 
Significant negative space above, below, and to the right.

The primary visual information: the jacket's silhouette, 
the lapel width and shape, the button placement, 
the natural crease of linen along the chest.

Lighting: Full Velora standard setup. Key light fully illuminates 
the jacket face. The shadow at the sides of the jacket 
communicates its three-dimensional volume.

The linen texture is visible at full frame — a viewer should be 
able to evaluate the material from this image.

Lens: 85mm, f/5.6. Full jacket in sharp focus. 
Background and foreground stone soft.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### P02 — Tailored Linen Jacket, Shoulder Detail

**Asset:** `velora_ss26_linen-jacket_detail-shoulder_natural_v1.webp`
**Format:** WebP 90%, 4:3, minimum 2400 × 1800

```
PRODUCT SHOT — LINEN JACKET — SHOULDER SEAM DETAIL

A close-up of the shoulder and collar area of the natural linen jacket.
Camera at approximately 30-40cm from the garment.

Primary focus: the set of the shoulder seam — where the sleeve joins 
the jacket body. This seam is the most technically demanding part of 
a tailored jacket and the one that most clearly communicates construction quality.
The seam should be visible, clean, and flat — no puckers, 
no excess fabric, a precise join.

Secondary focus: the linen weave texture at the lapel area. 
The natural slight nub of the linen is visible in the key light.

The jacket is in the same position as P01 — this is a crop-in, 
visually consistent with the front shot.

Lighting: Identical standard setup. The raking key light 
catches the shoulder seam, creating a very precise line of shadow 
that communicates its three-dimensional form.

Lens: 135mm, f/3.5. The shoulder seam plane is fully sharp. 
The sleeve falls out of focus slightly below the shot.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### P03 — Tailored Linen Jacket, Fabric Macro

**Asset:** `velora_ss26_linen-jacket_fabric-macro_natural_v1.webp`
**Format:** WebP 90%, 1:1, minimum 2400 × 2400

```
PRODUCT SHOT — LINEN JACKET — FABRIC MACRO

Extreme close-up. The frame is entirely the linen fabric of the jacket chest area.
No garment shape, no buttons, no seams — only weave texture.

The natural linen weave fills the complete frame. 
Raised threads in the cross-lighting appear lighter.
Recessed threads appear slightly darker.
The structure of the weave is fully legible — the viewer can see 
how the fabric is constructed.

A very subtle natural crease at the lower-left communicates 
that this is real fabric, not a CGI texture.

Lighting: Maximum raking — key light almost parallel to the fabric surface 
(75-80° from surface plane). This position creates the greatest texture revelation.
Fill at 15% — just enough to prevent total shadow in the weave valleys.

Lens: 100mm macro equivalent, f/2.0. 
The focus plane is the fabric surface — extremely shallow depth of field. 
The fabric texture in the center of frame is sharp. 
The extreme edges of the frame blur softly.

Color: Natural linen — warm undyed cream. 
No bleached or pure-white appearance. 
The warmth of the weave must be visible.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above) + "perfect uniform weave, CGI texture, polyester, synthetic, machine-flat fabric"*

---

### P04 — Merino Knit Pullover, Front

**Asset:** `velora_ss26_merino-pullover_front_charcoal_v1.webp`
**Format:** WebP 90%, 3:4, minimum 1800 × 2400

```
PRODUCT SHOT — MERINO KNIT PULLOVER — FRONT

Subject: A charcoal merino wool pullover, crew neck, 
long sleeves, laid flat on a limestone ledge. 
Face up, sleeves extended slightly to the sides.

The charcoal color is deep — not black, not gray, but a warm dark charcoal 
with slight blue undertone that reads as neutral in warm light.

Primary visual: the pullover's silhouette, the rib texture at cuffs and hem, 
the crew neck collar, the body's natural relaxed drape.

The merino knit surface is visible: a fine gauge knit 
with subtle surface fuzz — the hallmark of quality merino. 
This fuzz is not pilling. It is the natural bloom of new merino fiber.

The key light from upper-left catches this surface fuzz, 
creating a very subtle luminosity around the raised areas of the knit.

Lens: 85mm, f/5.6. Full pullover sharp.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above) + "acrylic, scratchy texture, pilling, synthetic knit"*

---

### P05 — Merino Knit Pullover, Cuff Detail

**Asset:** `velora_ss26_merino-pullover_detail-sleeve_charcoal_v1.webp`
**Format:** WebP 90%, 4:3, minimum 2400 × 1800

```
PRODUCT SHOT — MERINO PULLOVER — CUFF AND RIB DETAIL

Close-up of the right cuff and forearm area of the charcoal pullover.
The ribbed cuff is the primary subject — a 3x3 rib knit (alternating three 
knit and three purl stitches), relaxed at the end of the sleeve.

The cuff sits at approximately 40° — partially folded back on itself, 
showing both the outer face and the interior construction at the fold edge.

The rib structure is fully legible: raised ribs in key light, 
recessed channels in shadow, communicating the elasticity and structure of the knit.

The merino surface fuzz is most visible at the fold edge — 
fibers catching the raking key light.

Lens: 100mm, f/3.5. The cuff plane is sharp. Sleeve continues out of frame.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### P06 — Merino Knit Pullover, Knit Macro

**Asset:** `velora_ss26_merino-pullover_fabric-macro_charcoal_v1.webp`
**Format:** WebP 90%, 1:1, minimum 2400 × 2400

```
PRODUCT SHOT — MERINO PULLOVER — KNIT TEXTURE MACRO

The entire frame is the merino knit body fabric. No shaping, no seams visible.
A portion of the chest area of the pullover fills the frame completely.

Fine gauge merino knit: each individual stitch is legible under the raking light.
The charcoal color deepens in the stitch valleys, lightens slightly on the 
raised portions of each stitch.

Surface fuzz: the natural bloom of new merino fibers catches the raking 
key light and creates a very subtle halo effect around the highest points 
of the knit structure. This is not pilling — it is new fiber bloom.

A single area in the lower center shows a very slight change in stitch 
direction — where the front and back panels were joined. 
This seam is invisible to the eye but the knit structure reflects it 
subtly. This is intentional — it communicates hand.

Lens: 100mm macro, f/2.0. Focus plane perfectly parallel to fabric surface.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### P07 — Wide-Leg Trousers, Front

**Asset:** `velora_ss26_wide-trousers_front_ecru_v1.webp`
**Format:** WebP 90%, 3:4, minimum 1800 × 2400

```
PRODUCT SHOT — WIDE-LEG TROUSERS — FRONT

Subject: Ecru wide-leg linen-cotton blend trousers, laid flat on limestone ledge. 
Face up, waistband at the top of the frame, hems at the bottom. 
The legs are partially open — not fully spread, just slightly apart at the hem, 
suggesting the trouser's generous width.

The trouser break — the natural fold where the trouser leg breaks over 
where the foot would be — is visible at both legs as a gentle horizontal crease.

Primary visual: the silhouette (wide, fluid, relaxed), the waistband detail 
(a single self-fabric belt loop visible at center-front), 
the trouser's natural linen-cotton drape.

The ecru color is off-white with a very slight warm yellow undertone — 
not cream, not white. Natural and undyed in appearance.

Lens: 85mm, f/5.6. Full trouser sharp.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### P08 — Wide-Leg Trousers, Hem Detail

**Asset:** `velora_ss26_wide-trousers_detail-hem_ecru_v1.webp`
**Format:** WebP 90%, 4:3, minimum 2400 × 1800

```
PRODUCT SHOT — WIDE-LEG TROUSERS — HEM AND BREAK DETAIL

Close-up of the hem area of the trousers. 
The trouser bottom — approximately 20cm of trouser leg approaching the hem.

The hem finish: a clean, precisely turned hem of approximately 4cm, 
machine-stitched on the interior with a single line of ecru thread. 
The hem lies flat and clean, no deviation, no puckering.

The trouser break: the horizontal crease that runs across the front 
of the leg at hem level — where the trouser would break on the foot. 
This crease communicates that the trouser has been worn and has found 
its natural break point.

Both legs visible at the hem area, converging slightly toward the 
bottom of the frame.

Lens: 100mm, f/4.0. Hem area fully sharp.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### P09 — Wide-Leg Trousers, Three-Quarter

**Asset:** `velora_ss26_wide-trousers_side-3q_ecru_v1.webp`
**Format:** WebP 90%, 3:4, minimum 1800 × 2400

```
PRODUCT SHOT — WIDE-LEG TROUSERS — 45° DRAPE

The trousers shown at a 45° angle — not flat but slightly rolled and 
loosely placed, as if just removed and set down. This position 
reveals the drape and volume of the trouser leg — the quality of 
the linen-cotton blend is visible in how the fabric falls.

The right leg drapes naturally toward the front. 
The left leg is behind and slightly higher.
This creates a three-dimensional composition that communicates 
the trouser's generous proportions.

The key light rakes across the front-facing leg, 
creating a long shadow down the left side that reveals depth.

Lens: 85mm, f/5.6. Full composition sharp.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### P10 — Silk Blend Shirt, Front

**Asset:** `velora_ss26_silk-shirt_front_ivory_v1.webp`
**Format:** WebP 90%, 3:4, minimum 1800 × 2400

```
PRODUCT SHOT — SILK BLEND SHIRT — FRONT

Subject: An ivory silk-blend shirt (65% silk, 35% cotton), 
laid flat on limestone ledge. Face up, buttons closed, 
collar lying flat. Sleeves extended to the sides at 
approximately 30° from the body.

The silk-cotton blend creates a fabric that is neither fully 
shiny (like pure silk) nor fully matte (like pure cotton). 
It has a soft, restrained sheen — visible in the key light 
as a gentle luminosity across the chest and sleeves.

Primary visual: the shirt's clean construction — 
the collar band, the front placket with buttons, 
the yoke at the shoulders. All must read as 
precise and considered.

The ivory color is warm white with slight golden undertone 
— not pure white, not cream, but precisely ivory.

The specular highlight on the silk-cotton surface is visible 
but not aggressive — a soft brightening that moves across 
the fabric at different viewing angles.

Lens: 85mm, f/5.6. Full shirt sharp.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### P11 — Silk Blend Shirt, Collar Detail

**Asset:** `velora_ss26_silk-shirt_detail-construction_ivory_v1.webp`
**Format:** WebP 90%, 4:3, minimum 2400 × 1800

```
PRODUCT SHOT — SILK SHIRT — COLLAR AND PLACKET DETAIL

Close-up of the collar area of the ivory silk shirt.
The collar and upper placket fill the frame.

Primary detail: The collar band — the strip of fabric that 
connects the collar to the shirt body. This is the most 
structurally demanding part of a shirt and the area where 
quality of construction is most legible. The band must be 
perfectly even, flat, and cleanly attached.

The collar itself: a classic spread collar, 
lying flat. The collar points are precise — 
no curling, no wavering.

The placket: the first two buttons are visible. 
The buttonholes are hand-finished — a slightly 
irregular buttonhole edge that reads as handwork 
rather than machine.

The silk-cotton surface: at this scale, the blended weave 
is visible — the silk warp threads creating subtle lines 
of sheen across the woven surface.

Lens: 100mm, f/4.0. Collar plane fully sharp.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above)*

---

### P12 — Silk Blend Shirt, Fabric Macro

**Asset:** `velora_ss26_silk-shirt_fabric-macro_ivory_v1.webp`
**Format:** WebP 90%, 1:1, minimum 2400 × 2400

```
PRODUCT SHOT — SILK SHIRT — SILK-COTTON WEAVE MACRO

The entire frame is the silk-cotton woven surface at the shirt chest area.
A portion of the fabric approximately 5cm × 5cm fills the full frame.

The weave structure is fully legible at this scale:
silk warp threads running vertically, 
cotton weft threads running horizontally.
The silk warp threads create subtle raised lines that 
catch the raking key light as fine, precise specular highlights.
The cotton weft threads are slightly less reflective, 
reading as the structural foundation of the fabric.

The specular highlight from the key light: 
a diagonal strip of slightly brighter luminosity 
that reveals the direction and quality of the weave.

This image communicates luxury materials at the most 
intimate possible scale — the viewer can understand 
exactly what they are touching.

Lens: 100mm macro, f/2.0. 
Perfectly parallel focus plane to fabric surface.
Maximum texture reveal.
```

**Negative prompt:** *(use MASTER NEGATIVE PROMPT above) + "nylon, polyester, acrylic, poor drape, plastic feel"*

---

## 8. Review and QA Checklist

For every batch of generated assets, complete this checklist before approving for production.

### Lighting Consistency Check

Before approving any image set, view all images in the set simultaneously at the same display size.

- [ ] Key light direction is consistent across all images (upper-left in all cases)
- [ ] Fill light balance is visually consistent — shadows are similar in depth across images
- [ ] Background is underexposed to approximately the same degree in all images
- [ ] No image has a different color temperature than others in the set
- [ ] No image has obviously different contrast than others

### Color Grade Check

- [ ] Saturation is consistent across all images — no single image reads as more vivid
- [ ] Black point is lifted — no crushed shadows that lose fabric detail
- [ ] Highlights are recovered — no blown whites
- [ ] Overall warmth is consistent — no image reads as cooler than others
- [ ] No vignette visible in any image

### Composition Check

- [ ] Subject is positioned consistently (same general placement within frame)
- [ ] Negative space is present and intentional in every image — minimum 30% of frame
- [ ] No image feels cramped or crowded
- [ ] Horizon is level in all images (or consistently tilted if intentional)

### Material Quality Check

- [ ] Fabric texture is visible and reads as the correct material type
- [ ] Material-specific visual signatures are present (linen grain, merino fuzz, silk sheen)
- [ ] No plastic, synthetic, or CGI-obvious quality in any material
- [ ] Natural imperfections are present (slight weave irregularities, natural folds)

### Prohibitions Check (must all be absent)

- [ ] No watermarks or text
- [ ] No fashion mannequin or dress form
- [ ] No person's face
- [ ] No artificial or colored light source visible
- [ ] No white sweep or studio background
- [ ] No CGI-obvious elements
- [ ] No oversaturation (compare against a calibrated reference)

### Technical Check

- [ ] Resolution meets minimum specification for intended use
- [ ] Color space is sRGB
- [ ] File format is correct (WebP primary, AVIF secondary, JPEG tertiary)
- [ ] File is named correctly per naming convention
- [ ] Version number is correct
- [ ] Master source file retained in asset storage

### Video-Specific Check

- [ ] Duration is within 12–16 seconds
- [ ] Frame rate is exactly 24fps (not 23.976)
- [ ] Loop is seamless — first and last frames are visually identical
- [ ] No audio track
- [ ] Motion is smooth — no jitter, no stabilizer wobble
- [ ] No motion blur on the fabric itself
- [ ] H.265 codec confirmed

---

## 9. Export Workflow

### Video Export Steps

1. Generate master from Higgsfield at 4K, maximum quality setting
2. Apply color grade adjustments (see §4 Color Profile)
3. Export ProRes 4444 master — store in asset storage (not repository)
4. Export H.265 delivery version: 3840 × 2160, ~40 Mbps
5. Export web delivery version: 1920 × 1080, ~8 Mbps H.265
6. Export WebM fallback: 1920 × 1080, VP9
7. Export poster frame from first frame: lossless WebP, 3840 × 2160
8. Complete loop integrity check
9. Complete video QA checklist
10. Rename all files to naming convention
11. Place delivery files in `public/videos/hero/`

### Image Export Steps

1. Generate from Higgsfield at maximum resolution
2. Download source output — do not compress
3. Apply color grade adjustments (see §4)
4. Export WebP primary: quality 88%, sRGB
5. Export AVIF secondary: quality 82%, sRGB
6. Export JPEG fallback: quality 90%, sRGB, baseline
7. Complete image QA checklist
8. Rename to naming convention
9. Place in correct `public/images/` subdirectory

---

## 10. Future Asset Roadmap

### Sprint 5 — Shop / Product Catalog

Additional product images needed when the shop page is built:
- Remaining colorway variants per product (currently only primary colorway shot)
- Back views (P##-back) for each product
- Flat lay editorial variants for collection grid alternate view
- Category header images per product category (Outerwear, Knitwear, Bottoms, Tops)

### Sprint 7 — 3D Designer

When the 3D designer is built, the following assets are needed:
- Material texture tiles per fabric type (1024 × 1024, lossless WebP) — for `src/assets/textures/`
- GLB product models with UV unwrap prepared for material swapping
- Environment HDRI for 3D scene lighting (matching ART_DIRECTION §3 warmth)

### Sprint 11 — Admin Panel

Campaign imagery for admin uploads:
- Template for how product images should be photographed (reference guide)
- Admin panel preview thumbnails for uploaded assets

### Sprint 12 — Production Polish

- `blurDataURL` placeholders for all `next/image` components (base64 encoded placeholder)
- AVIF delivery enabled in `next.config.ts` image formats
- Video transcoding pipeline for user-uploaded content (future feature, post-MVP)

### Post-MVP — Video Expansion

- Individual product video loops (each product gets its own 8-second fabric movement clip)
- Campaign videos (15-30 seconds, seasonal)
- 3D designer walkthrough (tutorial, non-looping)

---

## 11. Sprint 4.3 Asset Inventory

This is the master list of all assets to be produced for the Spring/Summer 2026 launch. Every asset listed below corresponds to a Higgsfield prompt in §6 and §7 of this document.

### Video Assets

| Asset Name | Location | Format | Resolution | Duration | Purpose | Status |
|---|---|---|---|---|---|---|
| `velora_ss26_hero-background_front_campaign_v1.mp4` | `/public/videos/hero/` | H.265 MP4 | 3840×2160 | 12–14s | Hero background autoplay video | Ready for generation |
| `velora_ss26_hero-background_front_campaign_v1_web.mp4` | `/public/videos/hero/` | H.265 MP4 | 1920×1080 | 12–14s | Web delivery (low bandwidth) | Ready for generation |

### Hero Still Images

| Asset Name | Location | Format | Resolution | Aspect | Purpose | Status |
|---|---|---|---|---|---|---|
| `velora_ss26_hero-background_poster_campaign_v1.webp` | `/public/posters/` | WebP lossless | 3840×2160 | 16:9 | Video poster frame, HeroSection background | Ready for generation |

### Campaign / Editorial Images

| Asset Name | Location | Format | Min Resolution | Aspect | Purpose | Status |
|---|---|---|---|---|---|---|
| `velora_ss26_brand-story_banner-hero_campaign_v1.webp` | `/public/images/editorial/` | WebP 90% | 3360×1440 | 21:9 | BrandStorySection wide editorial break | Ready for generation |
| `velora_ss26_brand-story_fabric-macro_natural_v1.webp` | `/public/images/editorial/` | WebP 90% | 2400×2400 | 1:1 | Brand story craftsmanship detail | Ready for generation |
| `velora_ss26_craftsmanship_detail-construction_natural_v1.webp` | `/public/images/editorial/` | WebP 90% | 3200×2400 | 4:3 | Craftsmanship seam detail | Ready for generation |
| `velora_ss26_3d-preview_bg-dark_campaign_v1.webp` | `/public/images/editorial/` | WebP 90% | 2400×1600 | 3:2 | DesignerPreviewSection background | Ready for generation |
| `velora_ss26_collection_banner-hero_campaign_v1.webp` | `/public/images/collections/` | WebP 90% | 3840×1200 | 16:5 | FeaturedCollectionSection header | Ready for generation |
| `velora_ss26_newsletter_banner-newsletter_campaign_v1.webp` | `/public/images/editorial/` | WebP 90% | 1200×600 | 2:1 | Email newsletter header | Ready for generation |
| `velora_ss26_editorial_context-env_campaign_v1.webp` | `/public/images/editorial/` | WebP 90% | 2400×1600 | 3:2 | General editorial use | Ready for generation |

### Product Photography — Tailored Linen Jacket (Natural)

| Asset Name | Location | Format | Min Resolution | Aspect | Purpose | Status |
|---|---|---|---|---|---|---|
| `velora_ss26_linen-jacket_front_natural_v1.webp` | `/public/images/products/` | WebP 90% | 1800×2400 | 3:4 | Product grid, PDP hero image | Ready for generation |
| `velora_ss26_linen-jacket_detail-shoulder_natural_v1.webp` | `/public/images/products/` | WebP 90% | 2400×1800 | 4:3 | Product detail gallery | Ready for generation |
| `velora_ss26_linen-jacket_fabric-macro_natural_v1.webp` | `/public/images/products/` | WebP 90% | 2400×2400 | 1:1 | Material specification | Ready for generation |

### Product Photography — Merino Knit Pullover (Charcoal)

| Asset Name | Location | Format | Min Resolution | Aspect | Purpose | Status |
|---|---|---|---|---|---|---|
| `velora_ss26_merino-pullover_front_charcoal_v1.webp` | `/public/images/products/` | WebP 90% | 1800×2400 | 3:4 | Product grid, PDP hero image | Ready for generation |
| `velora_ss26_merino-pullover_detail-sleeve_charcoal_v1.webp` | `/public/images/products/` | WebP 90% | 2400×1800 | 4:3 | Rib detail, product gallery | Ready for generation |
| `velora_ss26_merino-pullover_fabric-macro_charcoal_v1.webp` | `/public/images/products/` | WebP 90% | 2400×2400 | 1:1 | Material specification | Ready for generation |

### Product Photography — Wide-Leg Trousers (Ecru)

| Asset Name | Location | Format | Min Resolution | Aspect | Purpose | Status |
|---|---|---|---|---|---|---|
| `velora_ss26_wide-trousers_front_ecru_v1.webp` | `/public/images/products/` | WebP 90% | 1800×2400 | 3:4 | Product grid, PDP hero image | Ready for generation |
| `velora_ss26_wide-trousers_detail-hem_ecru_v1.webp` | `/public/images/products/` | WebP 90% | 2400×1800 | 4:3 | Hem construction detail | Ready for generation |
| `velora_ss26_wide-trousers_side-3q_ecru_v1.webp` | `/public/images/products/` | WebP 90% | 1800×2400 | 3:4 | Drape and proportion | Ready for generation |

### Product Photography — Silk Blend Shirt (Ivory)

| Asset Name | Location | Format | Min Resolution | Aspect | Purpose | Status |
|---|---|---|---|---|---|---|
| `velora_ss26_silk-shirt_front_ivory_v1.webp` | `/public/images/products/` | WebP 90% | 1800×2400 | 3:4 | Product grid, PDP hero image | Ready for generation |
| `velora_ss26_silk-shirt_detail-construction_ivory_v1.webp` | `/public/images/products/` | WebP 90% | 2400×1800 | 4:3 | Collar/placket detail | Ready for generation |
| `velora_ss26_silk-shirt_fabric-macro_ivory_v1.webp` | `/public/images/products/` | WebP 90% | 2400×2400 | 1:1 | Weave specification | Ready for generation |

### Asset Summary

- **Total video files:** 2 (1 master 4K + 1 web delivery)
- **Total image files:** 21 (1 poster + 8 editorial + 12 product)
- **Total delivery files:** 23 assets
- **Estimated delivery size (all WebP, compressed):** ~8–10 MB
- **Master source files:** retained in asset storage (Git LFS or cloud)

### Production Sequence

1. **Priority 1 — Hero:** Generate hero video and poster first (blocking landing page)
2. **Priority 2 — Campaign:** Generate all 8 editorial images (brand narrative)
3. **Priority 3 — Products:** Generate 12 product images in order (catalog readiness)
4. **Priority 4 — Supporting:** Generate designer preview, collection banner, newsletter banner

---

*This document is maintained alongside `docs/ART_DIRECTION.md`. When a production decision creates a new constraint or standard, update both documents. The ART_DIRECTION governs the "what"; this document governs the "how."*
