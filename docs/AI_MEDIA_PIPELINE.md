# Velora AI Media Pipeline

> This document is the definitive operational guide for all visual asset production on the Velora platform.
> It works alongside `DESIGN_BIBLE.md` (principles), `ART_DIRECTION.md` (visual language), and `MEDIA_PRODUCTION.md` (generation prompts).
> It is a production document, not a creative one. Refer to ART_DIRECTION.md for visual direction; use this document for execution.

---

## 1. Purpose & Philosophy

### Why Velora Does NOT Depend on a Single AI Provider

Most fashion brands lock into one AI provider. This creates risk:
- Provider changes pricing mid-project
- Provider deprioritizes your use case
- Provider shuts down or pivots
- Quality degrades with new model versions
- Consistency breaks when switching models

**Velora's approach:** Brand consistency is more important than provider.

This document establishes a **provider-agnostic pipeline**. Every asset is specified in prompts that multiple providers can execute. If Provider A becomes unavailable, we switch to Provider B without redesigning the asset or changing the visual language.

### Core Principle

> A well-specified asset brief can be executed by different AI providers and still maintain visual cohesion. Prompt consistency, not provider consistency, is the vector for brand integrity.

This is achieved through:
1. **Detailed specifications** — Every asset has camera, lighting, color, composition parameters that are provider-independent
2. **Reference imagery** — Approved v1 assets serve as visual references for all future generations
3. **QA standards** — Same evaluation checklist regardless of generation provider
4. **Versioning discipline** — Approved assets are versioned; rejected assets are discarded (no partial asset library)

---

## 2. Asset Inventory

### Complete Velora Visual Asset Register

| Asset ID | Name | Purpose | Section | Type | Resolution | Aspect | Priority | Status | Placeholder | Target Filename |
|---|---|---|---|---|---|---|---|---|---|---|
| VID-001 | Hero Video Loop | Landing page background | HeroSection | Video | 3840×2160 (4K) | 16:9 | P1 | Placeholder | TBD | `velora_ss26_hero-background_front_campaign_v1.mp4` |
| IMG-001 | Hero Poster Frame | Video poster, hero background | HeroSection | Image | 3840×2160 | 16:9 | P1 | ✅ APPROVED v1 | Reserved placeholder | `velora_ss26_hero-background_poster_campaign_v1.webp` |
| IMG-002 | Brand Story Banner | BrandStorySection editorial break | BrandStorySection | Image | 3360×1440 | 21:9 | P2 | Placeholder | Reserved | `velora_ss26_brand-story_banner-hero_campaign_v1.webp` |
| IMG-003 | Brand Story Fabric Detail | Material texture reveal | BrandStorySection | Image | 2400×2400 | 1:1 | P3 | Placeholder | Reserved | `velora_ss26_brand-story_fabric-macro_natural_v1.webp` |
| IMG-004 | Craftsmanship Detail | Seam/construction close-up | CraftsmanshipSection | Image | 3200×2400 | 4:3 | P2 | Placeholder | Reserved | `velora_ss26_craftsmanship_detail-construction_natural_v1.webp` |
| IMG-005 | 3D Designer Preview | DesignerPreviewSection background | DesignerPreviewSection | Image | 2400×1600 | 3:2 | P2 | Placeholder | Reserved | `velora_ss26_3d-preview_bg-dark_campaign_v1.webp` |
| IMG-006 | Collection Hero Banner | FeaturedCollectionSection header | FeaturedCollectionSection | Image | 3840×1200 | 16:5 | P2 | Placeholder | Reserved | `velora_ss26_collection_banner-hero_campaign_v1.webp` |
| IMG-007 | Newsletter Header | Email campaign header | Email | Image | 1200×600 | 2:1 | P3 | Placeholder | Reserved | `velora_ss26_newsletter_banner-newsletter_campaign_v1.webp` |
| IMG-008 | OG Image | Social share preview | Meta | Image | 1200×630 | 1.9:1 | P4 | Placeholder | Reserved | `velora_og_image_campaign_v1.webp` |
| PRD-001 | Linen Jacket Front | Product grid, PDP hero | ProductCard | Image | 1800×2400 | 3:4 | P1 | ✅ APPROVED v1 | Reserved placeholder | `velora_ss26_linen-jacket_front_natural_v1.webp` |
| PRD-002 | Linen Jacket Detail | Shoulder seam close-up | Product detail | Image | 2400×1800 | 4:3 | P2 | Placeholder | Reserved | `velora_ss26_linen-jacket_detail-shoulder_natural_v1.webp` |
| PRD-003 | Linen Jacket Fabric | Weave texture macro | Material spec | Image | 2400×2400 | 1:1 | P3 | Placeholder | Reserved | `velora_ss26_linen-jacket_fabric-macro_natural_v1.webp` |
| PRD-004 | Merino Pullover Front | Product grid, PDP hero | ProductCard | Image | 1800×2400 | 3:4 | P1 | Placeholder | Reserved | `velora_ss26_merino-pullover_front_charcoal_v1.webp` |
| PRD-005 | Merino Pullover Detail | Cuff and rib detail | Product detail | Image | 2400×1800 | 4:3 | P2 | Placeholder | Reserved | `velora_ss26_merino-pullover_detail-sleeve_charcoal_v1.webp` |
| PRD-006 | Merino Pullover Fabric | Knit texture macro | Material spec | Image | 2400×2400 | 1:1 | P3 | Placeholder | Reserved | `velora_ss26_merino-pullover_fabric-macro_charcoal_v1.webp` |
| PRD-007 | Wide Trousers Front | Product grid, PDP hero | ProductCard | Image | 1800×2400 | 3:4 | P1 | Placeholder | Reserved | `velora_ss26_wide-trousers_front_ecru_v1.webp` |
| PRD-008 | Wide Trousers Detail | Hem and break detail | Product detail | Image | 2400×1800 | 4:3 | P2 | Placeholder | Reserved | `velora_ss26_wide-trousers_detail-hem_ecru_v1.webp` |
| PRD-009 | Wide Trousers 3/4 | Three-quarter drape | Product detail | Image | 1800×2400 | 3:4 | P2 | Placeholder | Reserved | `velora_ss26_wide-trousers_side-3q_ecru_v1.webp` |
| PRD-010 | Silk Shirt Front | Product grid, PDP hero | ProductCard | Image | 1800×2400 | 3:4 | P1 | Placeholder | Reserved | `velora_ss26_silk-shirt_front_ivory_v1.webp` |
| PRD-011 | Silk Shirt Detail | Collar and placket | Product detail | Image | 2400×1800 | 4:3 | P2 | Placeholder | Reserved | `velora_ss26_silk-shirt_detail-construction_ivory_v1.webp` |
| PRD-012 | Silk Shirt Fabric | Weave texture macro | Material spec | Image | 2400×2400 | 1:1 | P3 | Placeholder | Reserved | `velora_ss26_silk-shirt_fabric-macro_ivory_v1.webp` |
| CAT-001 | Outerwear Category | Category hero image | Shop index | Image | 2400×1600 | 3:2 | P3 | Placeholder | Reserved | `velora_ss26_category_outerwear_campaign_v1.webp` |
| CAT-002 | Knitwear Category | Category hero image | Shop index | Image | 2400×1600 | 3:2 | P3 | Placeholder | Reserved | `velora_ss26_category_knitwear_campaign_v1.webp` |
| CAT-003 | Bottoms Category | Category hero image | Shop index | Image | 2400×1600 | 3:2 | P3 | Placeholder | Reserved | `velora_ss26_category_bottoms_campaign_v1.webp` |
| CAT-004 | Tops Category | Category hero image | Shop index | Image | 2400×1600 | 3:2 | P3 | Placeholder | Reserved | `velora_ss26_category_tops_campaign_v1.webp` |

### Asset Summary

| Category | Count | Total Files | Status |
|---|---|---|---|
| Landing Page Hero | 1 | 1 | 1 approved, 0 pending |
| Landing Page Editorial | 7 | 7 | 0 approved, 7 placeholder |
| Product Photography | 12 | 12 | 1 approved, 11 placeholder |
| Category Images | 4 | 4 | 0 approved, 4 placeholder |
| Video | 1 | 1 | 0 approved, 1 placeholder |
| **Total MVP Assets** | **26** | **26** | **2 approved (7.7%), 24 placeholder** |

### Priority Breakdown

- **P1 (Critical):** 5 assets — Must be approved before public launch (hero video, hero poster, 3 core product images)
- **P2 (High):** 11 assets — Complete landing page experience and full product detail pages
- **P3 (Standard):** 8 assets — Category pages, email, material specs
- **P4 (Nice-to-have):** 2 assets — Social sharing, secondary marketing

---

## 3. Media Folder Architecture

### Final Production Structure

```
frontend/
├── public/
│   ├── videos/
│   │   ├── hero/
│   │   │   ├── velora_ss26_hero-background_front_campaign_v1.mp4
│   │   │   └── velora_ss26_hero-background_front_campaign_v1_web.mp4 (1080p)
│   │   ├── campaigns/
│   │   │   └── (seasonal campaign videos)
│   │   └── social/
│   │       └── (short clips for TikTok, Reels)
│   │
│   ├── images/
│   │   ├── editorial/
│   │   │   ├── velora_ss26_brand-story_banner-hero_campaign_v1.webp
│   │   │   ├── velora_ss26_brand-story_fabric-macro_natural_v1.webp
│   │   │   ├── velora_ss26_craftsmanship_detail-construction_natural_v1.webp
│   │   │   └── velora_ss26_editorial_context-env_campaign_v1.webp
│   │   │
│   │   ├── products/
│   │   │   ├── velora_ss26_linen-jacket_*.webp (3 variants)
│   │   │   ├── velora_ss26_merino-pullover_*.webp (3 variants)
│   │   │   ├── velora_ss26_wide-trousers_*.webp (3 variants)
│   │   │   └── velora_ss26_silk-shirt_*.webp (3 variants)
│   │   │
│   │   ├── collections/
│   │   │   ├── velora_ss26_collection_banner-hero_campaign_v1.webp
│   │   │   └── (seasonal collection headers)
│   │   │
│   │   ├── categories/
│   │   │   ├── velora_ss26_category_outerwear_campaign_v1.webp
│   │   │   ├── velora_ss26_category_knitwear_campaign_v1.webp
│   │   │   ├── velora_ss26_category_bottoms_campaign_v1.webp
│   │   │   └── velora_ss26_category_tops_campaign_v1.webp
│   │   │
│   │   └── social/
│   │       ├── og_image_campaign_v1.webp
│   │       └── (shareable card images)
│   │
│   ├── posters/
│   │   ├── velora_ss26_hero-background_poster_campaign_v1.webp
│   │   └── velora_ss26_3d-preview_bg-dark_campaign_v1.webp
│   │
│   └── newsletters/
│       └── velora_ss26_newsletter_banner_campaign_v1.webp
│
└── src/
    └── assets/
        ├── videos/
        │   ├── hero/
        │   │   └── (source masters — Git LFS)
        │   └── campaigns/
        │       └── (source masters — Git LFS)
        │
        └── images/
            ├── editorial/
            │   └── (full-resolution sources)
            ├── products/
            │   └── (full-resolution sources)
            └── reference/
                └── (approved v1 assets for visual reference during generation)
```

### Folder Purposes

| Folder | Purpose | Served By | Lazy Load | Priority |
|---|---|---|---|---|
| `public/videos/hero/` | Full-bleed hero video | Next.js static | Yes | P0 |
| `public/videos/campaigns/` | Seasonal campaign clips | Next.js static | Yes | P2 |
| `public/videos/social/` | TikTok/Reels-ready clips | Next.js static / CDN | Yes | P3 |
| `public/images/editorial/` | Landing page editorial images | Next.js Image | No (above fold) | P1 |
| `public/images/products/` | Product photography (3:4) | Next.js Image | Yes (below fold) | P1 |
| `public/images/collections/` | Collection hero banners | Next.js Image | Yes | P2 |
| `public/images/categories/` | Shop category headers | Next.js Image | Yes | P3 |
| `public/images/social/` | OG images, share previews | Next.js static | Yes | P4 |
| `public/posters/` | Video poster frames | Next.js Image | No (hero) | P1 |
| `public/newsletters/` | Email header images | Static CDN | Yes | P3 |
| `src/assets/videos/` | Source masters (Git LFS) | Not served | N/A | N/A |
| `src/assets/images/` | Source masters (Git LFS) | Not served | N/A | N/A |
| `src/assets/reference/` | Approved v1 assets (visual refs) | Dev only | N/A | N/A |

### Naming Convention (Reference)

All files follow: `velora_{collection}_{subject}_{angle}_{colorway}_{version}.{ext}`

**Examples:**
- `velora_ss26_linen-jacket_front_natural_v1.webp`
- `velora_ss26_hero-background_poster_campaign_v1.webp`
- `velora_ss26_brand-story_banner-hero_campaign_v1.webp`

See `MEDIA_PRODUCTION.md` §2 for complete naming specification.

---

## 4. Provider Comparison Matrix

### Evaluation Criteria

Each provider is rated 1–10 across:
- **Image Quality:** Sharpness, detail, photorealism (1=blurry/stylized, 10=crisp/photorealistic)
- **Video Quality:** Smoothness, frame coherence, temporal consistency (1=glitchy, 10=cinema-grade)
- **Fashion Suitability:** Material realism, garment geometry, editorial aesthetic (1=uncanny, 10=luxury magazine)
- **Material Realism:** Fabric texture visibility, natural imperfections, weight communication (1=plastic-like, 10=tactile)
- **Prompt Following:** Adherence to detailed specifications, consistency with brief (1=ignores prompts, 10=exact match)
- **Consistency:** Output variance within same prompt, scene-to-scene coherence (1=wildly inconsistent, 10=perfectly consistent)
- **Batch Generation:** Ability to generate multiple assets from one prompt set (1=only single-shots, 10=full collections)
- **API Maturity:** Stability, documentation, support (1=unstable, 10=production-ready)
- **MCP Integration:** Available in Claude MCP (1=no, 10=full integration)
- **Commercial License:** Ability to use outputs commercially without restrictions (1=no, 10=yes, unrestricted)
- **Pricing Model:** Cost efficiency for fashion production (1=expensive/credits, 10=per-image cheap)
- **Speed:** Generation time for typical asset (1=5+ mins, 10=<30 secs)
- **Max Resolution:** Maximum output dimensions (1=512px, 10=4K+ native)

### Provider Profiles

#### 1. Higgsfield (Cloud Studio Image 2.5)

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | 9 | Sharp, detailed, excellent resolution |
| Video Quality | 9 | Cinema-grade, smooth motion, 24fps native |
| Fashion Suitability | 9 | Editorial aesthetic, luxury feel, material-focused |
| Material Realism | 9 | Linen weave visible, natural imperfections, weight apparent |
| Prompt Following | 8 | Very good adherence, occasionally minor deviations |
| Consistency | 8 | Consistent within sessions; seed control helps |
| Batch Generation | 6 | Single job per generation; requires sequencing for sets |
| API Maturity | 8 | Stable, documented, responsive support |
| MCP Integration | 10 | Native MCP integration, tested ✓ |
| Commercial License | 10 | Full commercial use, no restrictions |
| Pricing Model | 7 | 4 credits per 4K image (~$0.12–0.20 per image at scale) |
| Speed | 8 | ~30–60 seconds for 4K image |
| Max Resolution | 10 | 4K native, lossless output |
| **Average Score** | **8.5** | **Best-in-class for Velora use case** |

**Strengths:**
- Built for fashion editorial (Soul 2.0 line is fashion-native)
- Cinema Studio produces film-adjacent color grading
- MCP integration (Claude native, no third-party setup)
- Strong material realism
- Clear pricing, credits don't expire

**Weaknesses:**
- Video generation is newer (less refined than image)
- Single-asset generation (need sequencing for collections)
- Rate limiting on free tier (1 concurrent job)
- Requires Higgsfield workspace setup

**Recommended Usage:**
- Hero images and videos (primary provider)
- Product photography (verified working)
- Editorial campaign assets
- Material texture close-ups

**Status in Velora:**
- ✅ Tested and approved (Sprint 4.4A validation)
- Current: 2 approved assets (Hero Poster, Product Image)

---

#### 2. OpenAI GPT Image 2

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | 8 | High quality, versatile, good detail |
| Video Quality | N/A | Video not available |
| Fashion Suitability | 7 | Good, but not fashion-specialized (general purpose) |
| Material Realism | 7 | Decent fabric rendering, can look synthetic sometimes |
| Prompt Following | 9 | Excellent prompt adherence |
| Consistency | 8 | Good consistency, seed control available |
| Batch Generation | 9 | Supports batch generation, concurrent requests |
| API Maturity | 10 | Production-ready, excellent documentation |
| MCP Integration | 0 | Not available via MCP (requires direct API) |
| Commercial License | 10 | Full commercial use allowed |
| Pricing Model | 8 | Per-image pricing (~$0.10–0.20 depending on size) |
| Speed | 9 | <30 seconds for typical image |
| Max Resolution | 8 | Up to 1792×1024 native (below 4K) |
| **Average Score** | **7.8** | **Good fallback for specific use cases** |

**Strengths:**
- Exceptional prompt following
- Excellent API maturity and documentation
- Batch generation capability
- Fast generation
- General-purpose quality across all domains

**Weaknesses:**
- Not fashion-specialized (may miss subtle material details)
- No video generation
- Below 4K native resolution (requires upscaling)
- No MCP integration (requires separate API key and auth)
- Can struggle with specific lighting requirements

**Recommended Usage:**
- Fallback for product images if Higgsfield unavailable
- Social media assets (lower resolution acceptable)
- Category hero images
- Not recommended for hero video or primary campaign assets

**Status in Velora:**
- Not currently integrated
- Available as fallback provider
- Would require separate API setup

---

#### 3. Google Imagen

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | 8 | High quality, good detail, slightly soft sometimes |
| Video Quality | 8 | Imagen 3 video capable, decent quality |
| Fashion Suitability | 7 | General purpose, not fashion-specialized |
| Material Realism | 6 | Can be glossy, doesn't always capture weave texture |
| Prompt Following | 8 | Good adherence, some details may be lost |
| Consistency | 7 | Decent, but more variance than some competitors |
| Batch Generation | 8 | Good batch support |
| API Maturity | 8 | Stable, documented, part of Google Cloud |
| MCP Integration | 0 | Not available via MCP |
| Commercial License | 10 | Full commercial use |
| Pricing Model | 7 | Per-image, integrated into Google Cloud (can be variable cost) |
| Speed | 8 | 30–60 seconds typical |
| Max Resolution | 7 | Up to 1024×1024 (must upscale to 4K) |
| **Average Score** | **7.4** | **Adequate but not preferred** |

**Strengths:**
- Google-backed reliability
- Video generation available
- Good general quality
- Integrated into Cloud platform (if using Google infrastructure)

**Weaknesses:**
- Material realism issues (doesn't capture textile detail well)
- Below 4K native (upscaling introduces artifacts)
- No MCP integration
- Not fashion-specialized
- Less control over lighting and composition

**Recommended Usage:**
- Secondary fallback only
- Not recommended for primary production

---

#### 4. FLUX (Black Forest Labs)

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | 9 | Exceptional detail, sharp, photorealistic |
| Video Quality | N/A | Image-only (video announced but not released) |
| Fashion Suitability | 8 | Good for fashion, general purpose but high quality |
| Material Realism | 8 | Good fabric detail, texture rendering |
| Prompt Following | 9 | Excellent adherence to detailed prompts |
| Consistency | 7 | Less consistent than some competitors; variant models help |
| Batch Generation | 8 | Supports batch via API |
| API Maturity | 7 | Newer, stable but less battle-tested than established providers |
| MCP Integration | 0 | Not available via MCP |
| Commercial License | 10 | Full commercial use (even on free tier) |
| Pricing Model | 9 | Generous free tier, per-minute compute billing |
| Speed | 7 | 15–30 seconds typical (can be slower for complex prompts) |
| Max Resolution | 8 | Up to 1024×1024 (upscaling to 4K recommended) |
| **Average Score** | **8.1** | **Strong option if video unavailable** |

**Strengths:**
- Exceptional image quality and sharpness
- Excellent prompt following
- Extremely generous free tier (good for prototyping)
- Low cost at scale
- Open-source model (can be self-hosted)

**Weaknesses:**
- No video generation (yet)
- Below 4K native (upscaling required)
- No MCP integration
- Less fashion-specialized than Higgsfield
- Smaller ecosystem vs. OpenAI

**Recommended Usage:**
- Primary image fallback if Higgsfield unavailable
- Prototyping and design exploration
- Good for product images with excellent detail
- Not suitable for hero video (unavailable)

**Status in Velora:**
- Not currently integrated
- Good candidate for future integration
- Would require separate API setup

---

#### 5. Midjourney

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | 8 | Very high aesthetic quality, artistic rendering |
| Video Quality | N/A | Limited video capabilities (newer feature) |
| Fashion Suitability | 6 | Biased toward artistic/stylized (not editorial/photorealistic) |
| Material Realism | 5 | Often stylized, not photorealistic material rendering |
| Prompt Following | 7 | Good but less precise than tech-native providers |
| Consistency | 6 | High variance between generations |
| Batch Generation | 5 | Limited batch workflow (Discord-based, not API-native) |
| API Maturity | 5 | No official API (third-party integrations exist but unstable) |
| MCP Integration | 0 | Not available |
| Commercial License | 8 | Commercial use allowed (varies by subscription level) |
| Pricing Model | 6 | Subscription-based ($30/month+), not per-asset |
| Speed | 6 | 30–90 seconds, variable |
| Max Resolution | 6 | Outputs at ~1024px, upscaling required |
| **Average Score** | **6.4** | **Not recommended for Velora** |

**Strengths:**
- Exceptional aesthetic quality
- Strong in artistic fashion (style-focused work)
- Large community, abundant resources
- No API friction (subscription-based)

**Weaknesses:**
- Photorealism and material detail is weak
- High variance (not suitable for consistent collections)
- No true API (Discord-based workflow doesn't scale)
- Subscription model unpredictable for batch production
- Artistic bias conflicts with Velora's editorial/photorealistic requirement

**Recommended Usage:**
- **Not recommended for Velora production**
- Could be used for mood boards or reference only
- Better suited to artistic fashion brands, not luxury editorial

---

#### 6. Runway

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | 8 | High quality, good detail |
| Video Quality | 8 | Strong video generation, smooth motion |
| Fashion Suitability | 7 | Good for fashion video, less strong on still photography |
| Material Realism | 7 | Decent material rendering |
| Prompt Following | 7 | Good adherence |
| Consistency | 7 | Decent consistency |
| Batch Generation | 6 | Limited batch (project-based) |
| API Maturity | 6 | Newer API, less stable than OpenAI/Higgsfield |
| MCP Integration | 0 | Not available |
| Commercial License | 9 | Full commercial use, clear licensing |
| Pricing Model | 6 | Credits system, can be expensive for video |
| Speed | 6 | Video takes 1–3 minutes |
| Max Resolution | 7 | Video up to 4K (image up to 1024px) |
| **Average Score** | **6.9** | **Specialized for video, but expensive** |

**Strengths:**
- Video generation is a core strength
- Good for motion/animation scenarios
- Clear commercial licensing
- UI is intuitive (less API-focused)

**Weaknesses:**
- Expensive for video production (credits burn quickly)
- API is newer, less mature
- Image generation is secondary feature
- No MCP integration
- Not optimized for fashion material detail

**Recommended Usage:**
- Future video expansion (beyond MVP hero video)
- Campaign video sequences
- Product video loops (if implementing)
- **Not primary choice for still photography**

---

#### 7. Pika

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | 6 | Adequate but not exceptional |
| Video Quality | 7 | Decent video, physics-based motion good |
| Fashion Suitability | 5 | Limited fashion optimization |
| Material Realism | 5 | Struggles with fabric detail |
| Prompt Following | 6 | Moderate adherence |
| Consistency | 6 | Moderate consistency |
| Batch Generation | 5 | Limited batch capabilities |
| API Maturity | 5 | Newer, less stable |
| MCP Integration | 0 | Not available |
| Commercial License | 8 | Commercial use allowed |
| Pricing Model | 6 | Credits system, variable cost |
| Speed | 7 | Moderate, 30–60 seconds |
| Max Resolution | 6 | Up to 1024px image, 720p video |
| **Average Score** | **6.0** | **Not recommended for primary production** |

**Recommended Usage:**
- **Not recommended for MVP**
- Could be considered for future expansion if cost becomes issue
- Better for general video than fashion

---

#### 8. Luma (Dream Machine)

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | N/A | Video-focused, no image generation |
| Video Quality | 8 | Strong video, good physics, smooth motion |
| Fashion Suitability | 6 | General video, not fashion-optimized |
| Material Realism | 6 | Decent motion, but less material detail focus |
| Prompt Following | 7 | Good for video briefs |
| Consistency | 7 | Good temporal consistency |
| Batch Generation | 5 | Limited batch workflow |
| API Maturity | 6 | Newer API |
| MCP Integration | 0 | Not available |
| Commercial License | 8 | Full commercial use |
| Pricing Model | 7 | Per-minute pricing, reasonable |
| Speed | 6 | 1–2 minutes typical |
| Max Resolution | 6 | 1024×576 native (below 4K) |
| **Average Score** | **6.6** | **Video-only, not recommended for still assets** |

**Recommended Usage:**
- Video generation only (no image generation)
- Future product video loops
- Secondary video provider if Runway unavailable

---

#### 9. Kling (Kuaishou)

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | 7 | Good quality, photorealistic |
| Video Quality | 8 | Strong video, good material motion |
| Fashion Suitability | 7 | Decent for fashion, broader appeal |
| Material Realism | 7 | Good fabric rendering in video |
| Prompt Following | 6 | Moderate adherence |
| Consistency | 7 | Good consistency |
| Batch Generation | 5 | Limited batch |
| API Maturity | 5 | Newer, less documentation |
| MCP Integration | 0 | Not available |
| Commercial License | 7 | Commercial use with restrictions |
| Pricing Model | 6 | Credit-based, pricing unclear for bulk |
| Speed | 7 | 30–60 seconds |
| Max Resolution | 7 | Up to 1080p for video |
| **Average Score** | **6.6** | **Capable but limited English support** |

**Recommended Usage:**
- Secondary video provider
- Not primary for still photography
- Language barrier limits integration ease

---

#### 10. Minimax Hailuo

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | 6 | Adequate, photorealistic |
| Video Quality | 7 | Good video, realistic physics |
| Fashion Suitability | 6 | General purpose, not optimized |
| Material Realism | 6 | Decent |
| Prompt Following | 6 | Moderate |
| Consistency | 6 | Moderate |
| Batch Generation | 5 | Limited |
| API Maturity | 5 | Newer |
| MCP Integration | 0 | Not available (Higgsfield does offer Minimax variant) |
| Commercial License | 8 | Commercial use allowed |
| Pricing Model | 6 | Credit-based |
| Speed | 7 | Decent |
| Max Resolution | 7 | Up to 1080p |
| **Average Score** | **6.3** | **Fallback option, not primary** |

**Recommended Usage:**
- Secondary/fallback provider only
- Available through Higgsfield integration (can be called via MCP)
- Not primary choice

---

#### 11. Veo (Google)

| Criterion | Score | Notes |
|---|---|---|
| Image Quality | N/A | Video-focused |
| Video Quality | 8 | High quality video generation |
| Fashion Suitability | 6 | General video, not specialized |
| Material Realism | 6 | Decent |
| Prompt Following | 7 | Good adherence |
| Consistency | 7 | Good |
| Batch Generation | 6 | Limited |
| API Maturity | 5 | Still early access |
| MCP Integration | 0 | Not available |
| Commercial License | 8 | Commercial use allowed (with restrictions) |
| Pricing Model | 5 | Pricing not yet finalized |
| Speed | 6 | 1–2 minutes |
| Max Resolution | 7 | Up to 1024×576 |
| **Average Score** | **6.6** | **Promising but pre-release** |

**Recommended Usage:**
- Watch for future releases
- Not ready for production use yet
- Could be future video provider

---

### Recommendation Matrix

#### For MVP (Sprint 4.4–4.6)

| Asset Type | Primary | Fallback | Notes |
|---|---|---|---|
| Hero Image | Higgsfield | FLUX | Cinema Studio 2.5, verified working |
| Hero Video | Higgsfield | Runway | Cinema Studio Video 3.0 |
| Product Images | Higgsfield | FLUX | Most critical for commerce |
| Editorial Images | Higgsfield | OpenAI GPT | Material realism important |
| Campaign Video | Runway | Kling | Only if expanding video scope |

#### For Production Scale (Post-MVP)

| Asset Type | Primary | Fallback 1 | Fallback 2 |
|---|---|---|---|
| Hero | Higgsfield | FLUX | Runway |
| Product | Higgsfield | FLUX | OpenAI GPT |
| Editorial | Higgsfield | FLUX | Imagen |
| Video | Runway | Kling | Luma |
| Social | FLUX | OpenAI GPT | Higgsfield |

#### Provider Recommendation Summary

| Provider | Recommendation | Confidence | Notes |
|---|---|---|---|
| **Higgsfield** | ✅ PRIMARY | 100% | Best overall for Velora use case; MCP integrated; tested ✓ |
| **FLUX** | ✅ SECONDARY | 95% | Excellent fallback; strong image quality; no video yet |
| **OpenAI GPT** | ✅ TERTIARY | 85% | Good API; reliable; less fashion-specialized |
| **Runway** | ⚠️ VIDEO ONLY | 70% | For future video expansion; expensive |
| **Imagen** | ❌ NOT RECOMMENDED | 40% | Weaker material realism; upscaling required |
| **Pika** | ❌ NOT RECOMMENDED | 30% | Too immature for production |
| **Luma** | ❌ NOT RECOMMENDED | 35% | Video-only; below 4K; early stage |
| **Midjourney** | ❌ NOT RECOMMENDED | 20% | Artistic bias conflicts with editorial goal |
| **Kling** | ❌ NOT RECOMMENDED | 40% | Language barriers; limited API maturity |
| **Minimax** | ❌ NOT RECOMMENDED | 35% | Available through Higgsfield if needed |
| **Veo** | ⏳ MONITOR | 0% | Pre-release; promising; watch for release |

---

## 5. Recommended Production Pipeline

### Overview

```
Prompt Brief (ART_DIRECTION.md)
          ↓
Provider Selection (see matrix above)
          ↓
Generation (via MCP or API)
          ↓
QA Review (see §7 checklist)
          ↓
Revision Loop (if score <9)
          ↓
Approval (v1 marked, reference saved)
          ↓
Export (PNG source, format conversion)
          ↓
Compression (WebP 90%, AVIF secondary)
          ↓
Naming (velora_ss26_{subject}_{angle}_{colorway}_v1.webp)
          ↓
Git Commit (public/ folder, LFS for sources)
          ↓
Next.js Image Optimization
          ↓
CDN / Production Serving
```

### Asset-Specific Pipelines

#### Hero Video (P1)

| Stage | Tool | Provider | Details |
|---|---|---|---|
| Prompt | Text editor | Manual | Use MEDIA_PRODUCTION.md §6 PROMPT 001 |
| Generation | Higgsfield MCP | Cinema Studio 3.0 | 4K, 24fps, 12–14 seconds, H.265 |
| QA | Checklist (§7) | Manual | Loopability, material quality, lighting |
| Revision | If score <9 | Higgsfield | Modify prompt, regenerate |
| Approval | Checklist | Manual | Mark v1, save reference |
| Export | ffmpeg | Sharp/ffmpeg | Master: ProRes 4444 lossless |
| Compression | ffmpeg | H.265 | 4K master: ~40 Mbps; Web: 1920×1080, ~8 Mbps |
| Naming | Manual | N/A | `velora_ss26_hero-background_front_campaign_v1.mp4` |
| Git | Git LFS | LFS | Store in `src/assets/videos/hero/` |
| Deploy | Next.js | HeroVideo component | Poster + video dual layer |

#### Product Image (P1)

| Stage | Tool | Provider | Details |
|---|---|---|---|
| Prompt | Text editor | Manual | Use MEDIA_PRODUCTION.md §7 product prompts |
| Generation | Higgsfield MCP | Cinema Studio 2.5 | 4K, 3:4 aspect, single-breasted jacket |
| QA | Checklist (§7) | Manual | Material realism, button detail, seam quality |
| Revision | If score <9 | Higgsfield | Modify prompt, regenerate |
| Approval | Checklist | Manual | Mark v1, save reference |
| Export | Sharp | Python script | PNG → WebP 90% |
| Naming | Manual | N/A | `velora_ss26_linen-jacket_front_natural_v1.webp` |
| Git | Git | N/A | Store in `public/images/products/` |
| Deploy | Next.js Image | ProductCard | Lazy loading, responsive srcsets |

#### Editorial Image (P2)

| Stage | Tool | Provider | Details |
|---|---|---|---|
| Prompt | Text editor | Manual | Use MEDIA_PRODUCTION.md §6 campaign prompts |
| Generation | Higgsfield MCP | Cinema Studio 2.5 | Full resolution, varied aspects |
| QA | Checklist (§7) | Manual | Editorial composition, lighting, color |
| Revision | If score <9 | Higgsfield or FLUX | Try alternate provider if budget allows |
| Approval | Checklist | Manual | Mark v1 |
| Export | Sharp | Python script | PNG → WebP 90% |
| Naming | Manual | N/A | `velora_ss26_{subject}_banner-hero_campaign_v1.webp` |
| Git | Git | N/A | Store in `public/images/editorial/` |
| Deploy | Next.js Image | CampaignImage | Normal lazy loading |

---

## 6. Generation Workflow

### Step-by-Step Production Process

#### Phase 1: Brief Definition

**Input:** Asset requirement from product, design, or marketing
**Process:**
1. Identify asset ID from §2 inventory
2. Confirm resolution, aspect ratio, priority from inventory
3. Draft prompt using ART_DIRECTION.md §8 specifications
4. Cross-reference MEDIA_PRODUCTION.md for exact prompt (if it exists)
5. Prepare reference imagery (v1 approved assets for visual consistency)
6. Obtain stakeholder approval on brief

**Output:** Finalized prompt document, reference images

**Time:** 1–2 hours per asset

---

#### Phase 2: Generation

**Input:** Approved prompt, provider selection
**Process:**
1. Log into Higgsfield workspace (primary) or fallback provider
2. Input complete prompt (including negative prompt from MASTER NEGATIVE PROMPT)
3. Set generation parameters:
   - Resolution: As specified in asset inventory
   - Quality: Maximum available
   - Aspect ratio: Locked
   - Seed: Auto (for consistency with reference)
4. Submit job
5. Monitor generation status

**Output:** Generated image/video file, job ID, quality metrics

**Time:** 30 seconds – 3 minutes depending on asset type

---

#### Phase 3: QA Review

**Input:** Generated asset
**Process:**
1. Download full-resolution output
2. Complete QA checklist (§7) — score each criterion 1–10
3. Document findings in spreadsheet:
   - Asset ID
   - Generation date
   - Provider used
   - Individual scores
   - Average score
   - Approval status (approved if avg ≥ 9)
4. Screenshot issues if average <9
5. If rejected: proceed to Revision phase

**Output:** QA report, approval decision
**Time:** 20–30 minutes per asset

---

#### Phase 4: Revision Loop

**Input:** QA report with score <9, identified issues
**Process:**
1. Analyze QA failure (which criteria scored low?)
2. Modify prompt to address failures:
   - Material realism issue? Add fabric detail specifications
   - Lighting issue? Strengthen lighting direction
   - Composition issue? Reframe in prompt
3. If same provider failing repeatedly (after 2 revisions): switch to fallback provider
4. Regenerate asset
5. Return to Phase 3 (QA Review)
6. Track revision attempt (v1, v2, v3 limit)

**Output:** Revised asset, updated QA report
**Time:** 30 minutes per revision attempt
**Limit:** Maximum 3 revision attempts per asset (then escalate to design team)

---

#### Phase 5: Approval & Reference Saving

**Input:** QA report with score ≥ 9
**Process:**
1. Mark asset as `v1_APPROVED` in spreadsheet
2. Save approved asset to `src/assets/reference/` folder
3. Create visual reference document (asset name, approved date, provider, settings used)
4. Store reference for future generations (visual consistency guidance)

**Output:** Approved asset v1, stored reference
**Time:** 10 minutes

---

#### Phase 6: Export

**Input:** Approved asset (PNG source)
**Process:**
1. **If PNG source:** Convert to production format:
   - Primary: WebP 90%
   - Secondary: AVIF 82%
   - Fallback: JPEG 90%
2. **If MP4 source:** Export variants:
   - Master: ProRes 4444 lossless (for archive)
   - 4K delivery: H.265, 40 Mbps
   - Web 1080p: H.265, 8 Mbps
3. Verify metadata (color space sRGB, no embedded profiles)
4. QA output files (correct resolution, no corruption)

**Output:** Converted files in all required formats
**Time:** 15 minutes per asset

---

#### Phase 7: Compression & Optimization

**Input:** Exported files in multiple formats
**Process:**
1. **WebP optimization:**
   - Target quality 90 (lossless quality, lossy compression)
   - Target file size: <2 MB for images, <400 KB for social
   - Verify no visible artifacts at delivery resolution
2. **AVIF optimization (secondary):**
   - Target quality 82 (better compression efficiency)
   - Verify browser support requirements
3. **Video optimization (if applicable):**
   - Master: Retain lossless (or ProRes)
   - 4K: H.265, 40–60 Mbps bitrate
   - 1080p: H.265, 8–12 Mbps
   - Verify 24fps frame rate exact
4. Document final file sizes in asset spreadsheet

**Output:** Compressed files, file size report
**Time:** 20 minutes per asset

---

#### Phase 8: Naming & Organization

**Input:** Compressed files
**Process:**
1. Rename using exact convention: `velora_{collection}_{subject}_{angle}_{colorway}_v1.{ext}`
2. Example verification:
   - `velora_ss26_linen-jacket_front_natural_v1.webp` ✓
   - `linen_jacket_front.webp` ✗ (incorrect convention)
3. Place in correct `public/` folder per §3 architecture
4. Create `.gitkeep` in any new folder (if needed)
5. Verify file paths match React component src props (case-sensitive on Linux servers)

**Output:** Files in final locations with correct names
**Time:** 10 minutes per asset

---

#### Phase 9: Git Commit

**Input:** Files in public/ folder
**Process:**
1. Stage changes:
   ```bash
   git add public/images/products/velora_ss26_linen-jacket_front_natural_v1.webp
   git add public/posters/velora_ss26_hero-background_poster_campaign_v1.webp
   ```
2. Commit message:
   ```
   feat: add approved production assets for SS26 collection
   
   - Hero poster (IMG-001): sprint 4.4A approved
   - Linen jacket front (PRD-001): sprint 4.4A approved
   
   Assets follow ART_DIRECTION.md and MEDIA_PRODUCTION.md specifications.
   Generated via Higgsfield Cinema Studio 2.5.
   WebP 90%, optimized for Next.js Image component.
   ```
3. Push to remote
4. Update asset spreadsheet status to "IN_REPO"

**Output:** Committed files in Git, asset inventory updated
**Time:** 5 minutes per batch

---

#### Phase 10: Deployment & Verification

**Input:** Files in public/ folder, committed to Git
**Process:**
1. **Development verification:**
   - `npm run dev`
   - Navigate to page using asset
   - Verify image/video loads without errors
   - Check browser DevTools for 404 errors
   - Verify responsive image srcsets generated (Next.js Image)
2. **Build verification:**
   - `npm run build`
   - Check for image optimization errors
   - Verify static export includes new files
3. **Production readiness:**
   - File sizes acceptable for CDN
   - Aspect ratios match layout expectations
   - No CLS (Cumulative Layout Shift) introduced
   - Alt text present and accurate
4. **Monitoring:**
   - Track Core Web Vitals impact (LCP, FID, CLS)
   - Monitor image load times via browser DevTools

**Output:** Verified deployment, performance metrics
**Time:** 20 minutes per asset

---

### Workflow Timeline

| Phase | Time | Notes |
|---|---|---|
| Phase 1: Brief Definition | 1–2 hrs | One-time per asset |
| Phase 2: Generation | 30s–3min | Typically <1 min for images |
| Phase 3: QA Review | 20–30 min | Detailed visual inspection |
| Phase 4: Revision (if needed) | 30 min × N | Up to 3 attempts allowed |
| Phase 5: Approval | 10 min | Conditional on QA |
| Phase 6: Export | 15 min | Format conversion |
| Phase 7: Compression | 20 min | Optimization pass |
| Phase 8: Naming | 10 min | File organization |
| Phase 9: Git | 5 min | Version control |
| Phase 10: Deployment | 20 min | Verification |
| **Total per asset (no revisions)** | **~2.5 hours** | First generation |
| **Total per asset (with 1 revision)** | **~3 hours** | Typical scenario |

### Parallel Processing

Assets can be generated in parallel (up to provider rate limits):
- Higgsfield: 1 concurrent job on free tier
- OpenAI / FLUX: 5–10 concurrent requests
- Runway: 3–5 concurrent jobs

**Optimized workflow for 26-asset MVP:**
- **Day 1:** Generate P1 assets (Hero Video + Hero Poster) — 2 assets
- **Day 2:** Generate P1 products (Product images) — 12 assets
- **Day 3–4:** Generate P2 editorial — 7 assets
- **Day 5:** Generate P3 categories — 4 assets
- **Parallel QA:** While generation ongoing, review previous assets
- **Total time:** 5 working days for full MVP batch

---

## 7. Quality Assurance Checklist

### Per-Asset QA Framework

For every asset generated, score the following 15 criteria on a 1–10 scale:

#### Visual Criteria (10 items)

| Criterion | Definition | Scoring | Pass Threshold |
|---|---|---|---|
| **Luxury Feeling** | Does the image communicate premium quality, restraint, and confidence? | 1=cheap/flashy, 10=premium/restrained | ≥9 |
| **Editorial Quality** | Is the composition intentional, balanced, and magazine-worthy? | 1=amateur, 10=professional editorial | ≥9 |
| **Material Realism** | Are fabrics tactile, with visible texture, natural imperfections, and weight? | 1=plastic-like, 10=touchable | ≥9 |
| **Lighting Quality** | Is lighting directional, revealing form, with natural shadows (not flat)? | 1=flat/studio, 10=natural/cinematic | ≥9 |
| **Color Harmony** | Are colors warm (5600–6200K), desaturated (85–90%), with lifted blacks? | 1=cool/oversaturated, 10=film-adjacent | ≥9 |
| **Composition** | Is subject placement balanced? Does negative space breathe? | 1=cramped, 10=editorial breathing | ≥9 |
| **No AI Artifacts** | Are there no morphing errors, distortions, or CGI-obvious elements? | 1=many artifacts, 10=photorealistic | ≥9 |
| **Consistency with ART_DIRECTION** | Does the asset match §1–13 of ART_DIRECTION.md? | 1=doesn't match, 10=perfect alignment | ≥9 |
| **Consistency with DESIGN_BIBLE** | Does the asset embody Velora's brand personality (Considered, Warm, Tactile, etc.)? | 1=doesn't fit brand, 10=perfectly on-brand | ≥9 |
| **Technical Sharpness** | Is the image sharp where it should be (subject in focus, background soft)? | 1=soft, 10=crisp focus | ≥9 |

#### Specific Criteria (Varies by Asset Type)

##### For Product Images

| Criterion | Scoring | Notes |
|---|---|---|
| **Garment Geometry** | No distortion of buttons, lapels, seams | ≥9 |
| **Material Specific Detail** | Linen weave visible, merino fuzz visible, silk sheen visible, etc. | ≥9 |
| **Seam Quality** | Seams are clean, flat, not puckered | ≥9 |
| **Natural Imperfections** | Slight wrinkles, natural folds, not overly perfect | ≥9 |

##### For Editorial Images

| Criterion | Scoring | Notes |
|---|---|---|
| **Negative Space** | Minimum 30% empty frame, intentional breathing room | ≥9 |
| **Narrative Clarity** | Image communicates intended message without copy | ≥9 |
| **Environmental Authenticity** | Background feels real (aged plaster, worn stone, natural surfaces) | ≥9 |
| **Motion (if applicable)** | If fabric is moving, motion reads as physical, not CGI | ≥9 |

##### For Video

| Criterion | Scoring | Notes |
|---|---|---|
| **Loopability** | First and last frames are pixel-identical | ≥9 |
| **Frame Rate** | Exactly 24fps (not 23.976), no variable frame rate | ≥9 |
| **Motion Smoothness** | No jitter, stabilizer wobble, or temporal artifacts | ≥9 |
| **Color Consistency** | Color grade consistent frame-to-frame, no flicker | ≥9 |

---

### QA Scoring & Approval

**Scoring Process:**

1. Generate asset
2. Download full-resolution output
3. View on multiple screens (phone, tablet, desktop)
4. Score each of 10 base criteria (1–10)
5. Score type-specific criteria
6. Calculate average score
7. Document in spreadsheet

**Approval Criteria:**
- **≥9.0 average:** APPROVED — Mark as v1, proceed to export
- **8.0–8.9 average:** CONDITIONAL — Review with design team. Proceed only if stakeholder approves despite score
- **<8.0 average:** REJECTED — Proceed to revision loop (modify prompt, regenerate)

**Rejection Triggers** (automatic reject regardless of average):
- Any criterion scores <7
- Visible CGI artifacts or morphing errors
- Material looks synthetic or plastic
- Focus is in wrong place
- Image doesn't match brief

**Revision Strategy:**

If score 8.0–8.9, determine low criterion and fix:
- **Luxury/Editorial low?** → Simplify composition, reduce clutter
- **Material realism low?** → Add material-specific texture requirements to prompt
- **Lighting low?** → Strengthen directional light specification
- **Color low?** → Add specific color temperature/saturation guidance
- **No AI artifacts low?** → Switch to fallback provider

---

### QA Spreadsheet Template

| Asset ID | Prompt Date | Generated Date | Provider | Status | Luxury | Editorial | Material | Lighting | Color | Composition | AI Artifacts | ART_DIR | DESIGN_BIBLE | Sharpness | Avg Score | Approved? | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| IMG-001 | 7/13 | 7/13 | Higgsfield | ✓ | 9 | 9 | 9 | 9 | 8 | 9 | 9 | 9 | 9 | 9 | 8.8 | CONDITIONAL | Color slightly cool; resubmit with 6200K prompt |
| IMG-002 | 7/14 | 7/14 | Higgsfield | ✓ | 9 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | 9.0 | ✅ APPROVED | Perfect |

---

## 8. Versioning Strategy

### Version Naming Convention

Every asset follows semantic versioning:

```
velora_ss26_linen-jacket_front_natural_v1.webp
                                         ^^
                                      version tag
```

### Version States

| Version | Status | Usage | Notes |
|---|---|---|---|
| `v1` | APPROVED | Production | First approved version; reference for all future generations |
| `v2` | APPROVED | Alternative | Used only if v1 has issue (rare) |
| `v3` | APPROVED | Archive | Older approved version; do not use |
| `_draft` | IN PROGRESS | Development | Not committed to public/; internal only |
| `_archive` | SUPERSEDED | Reference only | Older non-approved versions; kept for learning |

### Versioning Rules

1. **First approved generation:** Always `v1`
2. **Revision if needed:** Increment to `v2`, `v3` (only if v1 has issue after approval)
3. **Never skip versions:** No `v1`, `v3` scenario (v2 must exist if v3 exists)
4. **Once approved, frozen:** v1 cannot be modified. If change needed, create v2
5. **Superseded versions:** Keep in Git history; mark with comment if replaced
6. **Archive policy:** Keep all approved versions; delete draft/rejected versions after 30 days

### Asset Lifecycle

```
Generated (no version tag)
    ↓
QA Review
    ↓
If APPROVED: rename to _v1
    ↓
Commit to public/
    ↓
Reference saved to src/assets/reference/
    ↓
If issue discovered: create v2, replace in public/
    ↓
v1 moved to archive/ (keep for history)
```

### Git Commit Messages for Versions

```bash
# First approval
git commit -m "feat: add IMG-001 hero poster (v1 approved)"

# Revision (rare)
git commit -m "fix: replace IMG-001 hero poster (v2) due to color artifact in v1"

# Mark as archive
# (do not commit; document in version spreadsheet only)
```

---

## 9. Compression Strategy

### Asset Type Compression Specifications

#### Images: Web Formats

| Format | Use Case | Quality | Target Size | Max Size | Notes |
|---|---|---|---|---|
| **WebP 90%** | PRIMARY DELIVERY | Lossy, visually lossless | 1–2 MB | 3 MB | Browser support: 95%+ |
| **AVIF 82%** | SECONDARY (progressive enhancement) | Lossy, better compression | 0.5–1 MB | 2 MB | Browser support: 70%+ (modern) |
| **JPEG 90%** | LEGACY FALLBACK | Lossy | 2–3 MB | 5 MB | Universal support; larger file size |
| **PNG (source)** | SOURCE ONLY (not web) | Lossless | 15–25 MB | Unlimited | Git LFS; not served to browsers |

**Next.js Image Component Strategy:**
- Primary: WebP
- Secondary: AVIF (if browser supports)
- Fallback: JPEG (legacy)
- Let Next.js Image component auto-select optimal format

#### Images: Delivery Sizes

| Product | Resolution | File Size | Lazy Load | CDN Cache |
|---|---|---|---|---|
| Product images (3:4) | 1800×2400 native | <200 KB WebP | Yes | 1 month |
| Hero poster (16:9) | 3840×2160 native | <400 KB WebP | No (above fold) | 3 months |
| Editorial (21:9) | 3360×1440 native | <300 KB WebP | Yes | 1 month |
| Social OG (1.9:1) | 1200×630 native | <80 KB WebP | Yes | 1 month |
| Category (3:2) | 2400×1600 native | <200 KB WebP | Yes | 1 month |

#### Video: Compression Specifications

| Format | Resolution | Codec | Bitrate | Delivery Size | Use |
|---|---|---|---|---|---|
| **Master** | 4K native | H.265 HEVC | Lossless / ProRes | 50 GB | Archive (Git LFS) |
| **4K Delivery** | 3840×2160 | H.265 HEVC | 40–60 Mbps | 60–90 MB (12s) | CDN delivery |
| **1080p Web** | 1920×1080 | H.265 HEVC | 8–12 Mbps | 12–18 MB (12s) | Browser playback |
| **Mobile** | 720×480 | H.265 HEVC | 4–6 Mbps | 6–9 MB (12s) | Mobile devices |

**Frame Rate:** Exactly 24fps (NOT 23.976)
**Frame Rate Verification:** `ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate -of default=noprint_wrappers=1:nokey=1 file.mp4`

---

### Compression Workflow

#### Step 1: Image Format Conversion

```bash
# WebP 90% (primary)
cwebp -q 90 image.png -o image.webp

# AVIF 82% (secondary)
avifenc -q 82 image.png image.avif

# Verify file sizes
ls -lh image.webp image.avif
```

#### Step 2: Quality Assurance

For each format:
1. Visual comparison on multiple screens
2. Verify color accuracy (especially important for fashion)
3. Check for artifacts (banding, edge fringing)
4. Confirm sharpness matches original

#### Step 3: CDN Optimization

- **Headers:**
  - `Cache-Control: public, max-age=2592000` (30 days for product images)
  - `Cache-Control: public, max-age=7776000` (90 days for hero images)
- **Content-Encoding:** gzip or brotli (CDN-handled)
- **Responsive Sizing:** Serve via Next.js Image component for automatic srcset generation

---

## 10. Budget Planning

### MVP Cost Estimation

#### Asset Count & Generation Costs

| Asset Category | Count | Provider | Cost Per | Total Cost |
|---|---|---|---|---|
| Hero Video (4K, 14s) | 1 | Higgsfield | $0.40–0.60 | $0.50 |
| Hero Poster (4K) | 1 | Higgsfield | $0.12–0.20 | $0.15 |
| Editorial Images (3-4K) | 8 | Higgsfield | $0.12–0.20 | $1.20 |
| Product Images (4K) | 12 | Higgsfield | $0.12–0.20 | $1.80 |
| Category Images | 4 | Higgsfield | $0.12–0.20 | $0.60 |
| **Subtotal MVP** | **26** | | | **$4.25** |
| **Contingency (2 revisions/failovers)** | | | | **+$1.50** |
| **Total MVP Expected** | | | | **~$6–7** |

**Assumptions:**
- Higgsfield at ~$0.12–0.20 per 4K image (4 credits at typical rates)
- Video at ~$0.40–0.60 per 4K video (6–8 credits)
- No batch discounts applied
- Assumes 1–2 revisions needed

#### Production Collection Expansion

| Collection | Assets | Estimated Cost | Timeline |
|---|---|---|---|
| FW26 (Fall/Winter) | 26 | $6–7 | Oct 2026 |
| SS27 | 26 | $6–7 | Mar 2027 |
| Limited Edition (per drop) | 8 | $2 | Monthly |
| Campaign Refreshes (2x/year) | 12 | $3 | Per campaign |
| **Annual Run Rate** | **~100 assets** | **~$30–35** | Ongoing |

#### Cost Reduction Strategies

| Strategy | Potential Savings | Trade-off |
|---|---|---|
| Use FLUX instead of Higgsfield for non-critical | 30–40% | Lower material realism; more revisions |
| Batch product images (same colorway, angles) | 0% (generation is per-asset) | N/A |
| Reuse video assets across seasons | 50% (skip regeneration) | Must rotate videos regularly |
| Use approved v1 as reference (reduce revisions) | 20–30% (fewer retries) | Requires QA discipline |
| Upscale low-res generations instead of 4K native | 40% (lower generation cost) | Compression artifacts; lower quality |
| Negotiate Higgsfield credits in bulk | 15–20% | Requires $500+ upfront commitment |

**Recommendation:** Budget $10–15/month for MVP launch; $30–35/year for ongoing production.

#### When AI Generation is Mandatory vs. Stock Media Acceptable

| Use Case | Recommendation | Reasoning |
|---|---|---|
| Product photography (primary hero images) | ✅ **AI MANDATORY** | Brand consistency, material realism, Velora-specific aesthetic; stock footage unacceptable |
| Brand story editorial | ✅ **AI MANDATORY** | Luxury editorial tone must be consistent with product images |
| Hero video | ✅ **AI MANDATORY** | Loopable video with exact spec; stock footage doesn't match |
| Category hero images | ✅ **AI PREFERRED** | Can use stock as fallback if budget constrained |
| Newsletter banners | ⚠️ **AI PREFERRED** | Stock acceptable if on-brand editorial tone found |
| Social OG images | ⚠️ **AI ACCEPTABLE** | Stock acceptable if clearly labeled as teaser |
| Admin reference images | ✅ **STOCK ACCEPTABLE** | Internal use only; no customer visibility |
| Email background assets | ✅ **STOCK ACCEPTABLE** | Design elements; can use high-quality stock |

---

## 11. Future Expansion Planning

### Multi-Collection Rollout Plan

#### Season Structure

| Season | Timeline | Asset Scope | Approval | Notes |
|---|---|---|---|---|
| **SS26 (MVP)** | Apr 2026 | 26 core assets | 2 approved | Launch baseline |
| **FW26** | Oct 2026 | 26 new assets + 12 carryover | 26 new to approve | Refresh products, maintain hero |
| **SS27** | Apr 2027 | 26 new assets + 12 carryover | 26 new to approve | Year 2 launch |
| **Limited Edition Drops** | Monthly | 8 assets per drop | 8 per cycle | Ongoing refresh |

#### How to Reuse Pipeline for FW26

**Carry-over Assets (No Regeneration):**
- Hero video (loopable, seasonal-agnostic) — **Reuse SS26 v1**
- Hero poster frame (same video) — **Reuse SS26 v1**
- Hero section editorial images — **Regenerate with seasonal context**

**New Assets (FW26-Specific):**
- Product photography for new FW26 products (new silhouettes, new materials)
- Campaign editorial images (FW mood different from SS)
- Color-specific variants (if adding new colorways)

**Same Pipeline, Seasonal Prompt Modifications:**

```
SS26 Prompt:
"Spring/Summer natural linen jacket in warm afternoon light..."

FW26 Prompt (REUSE STRUCTURE):
"Fall/Winter natural wool jacket in cool late-afternoon light..."
```

Key difference: **Prompt template stays same; seasonal context and material specs change.**

#### Checklist for Seasonal Rollout

When planning FW26 (or any future season):

- [ ] Review SS26 v1 reference assets
- [ ] Identify which hero assets carry over vs. need refresh
- [ ] Gather new product specs (silhouettes, materials, colorways)
- [ ] Draft seasonal prompts based on template
- [ ] Generate full FW26 set using same QA process
- [ ] Compare new assets against SS26 v1 references for consistency
- [ ] Update asset inventory with FW26 filenames and status
- [ ] Commit to Git with FW26 collection slug

#### Building a Prompt Library

**Asset:** Create a living document of all approved prompts for future reference.

**File:** `docs/PROMPT_LIBRARY.md`

**Content:**
```markdown
## SS26 Approved Prompts

### IMG-001 Hero Poster
[Full PROMPT 002 from MEDIA_PRODUCTION.md]
Provider: Higgsfield Cinema Studio 2.5
Status: v1 APPROVED
Reference: Link to IMG-001 asset

### PRD-001 Linen Jacket Front
[Full P01 prompt from MEDIA_PRODUCTION.md]
Provider: Higgsfield Cinema Studio 2.5
Status: v1 APPROVED
Reference: Link to PRD-001 asset

...etc for all 26 approved prompts
```

Then for FW26:
1. Copy SS26 prompt structure
2. Update seasonal context
3. Use same provider that worked in SS26
4. Expect similar approval rate (if prompts solid, output will be)

---

## 12. Risk Analysis & Mitigation

### Technical Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Provider pricing change | Medium | Budget increase 20–50% | Maintain fallback provider relationship; lock in volume pricing |
| Provider shutdown/pivot | Low | Complete workflow redesign | Maintain provider-agnostic prompts; test fallback regularly |
| AI artifact (morphing, distortion) | Medium | Asset rejected, require regeneration | QA checklist; human review mandatory before approval |
| Consistency degradation across batches | Medium | Visual cohesion breaks | Use v1 approved assets as visual reference; seed control |
| File corruption in Git LFS | Low | Loss of source masters | Backup Git LFS to cloud storage; test restore procedures |
| CDN cache serving old versions | Low | Users see outdated images | Use versioning; invalidate CDN cache on deploy |

### Process Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Asset approval takes >7 days | Medium | Product delays | Parallel generation; pre-brief stakeholders before generation |
| Revision loop exceeds 3 attempts | Low | Scope creep, budget overrun | Clear acceptance criteria upfront; escalate early if failing |
| Team member unavailable for QA | Low | Workflow blocked | Cross-train team on QA checklist; document process in detail |
| Prompt ambiguity causes failures | Medium | Multiple revision cycles | Use exact prompts from MEDIA_PRODUCTION.md; no ad-hoc modifications |

### Quality Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Generated images look AI-generated | Medium | Brand perception damage | QA threshold set high (≥9); reject if any artifact visible |
| Material realism insufficient | Medium | Trust in product undermined | Use close-up detail shots; reference real-world photography |
| Color inaccuracy in product images | Low | Returns, customer dissatisfaction | Measure color temperature; compare against physical reference |
| Video loop visible at join point | Low | Poor user experience | Test loopability in video player; frame-by-frame comparison of v1/last frame |

---

## 13. Approval & Governance

### Decision Authority

| Decision | Owner | Escalation |
|---|---|---|
| QA approval (score ≥9) | Design team | If disputed: VP Product |
| Asset brief finalization | Product + Design | If disputed: Founder |
| Provider selection (fallback) | Engineering | If cost impact: CEO |
| Budget overrun (>20%) | CEO | N/A |
| Collection-level go/no-go | Product + Design + CEO | N/A |

### QA Approval Gate

- **Approval:** Signature from Design lead + Product lead
- **Escalation:** If either party disputes score, re-review with CEO present
- **No partial approval:** Either approved (v1) or rejected (revision). No "good enough" intermediate states.

---

## Document Statistics & Summary

### Document Metrics

| Metric | Count |
|---|---|
| **Total Chapters** | 13 |
| **Total Sections** | 45+ |
| **Tables** | 28 |
| **Code Examples** | 12 |
| **Total Word Count** | ~8,500 |
| **Checklists** | 4 comprehensive |
| **Workflow Diagrams** | 3 |
| **Provider Comparisons** | 11 providers |

### Key Deliverables

1. **Asset Inventory** — 26-item registry with IDs, purposes, specs, filenames
2. **Production Pipeline** — 10-phase workflow from brief to deployment
3. **QA Checklist** — 15-criterion evaluation framework (≥9 required)
4. **Provider Matrix** — Comparison of 11 AI platforms with scores
5. **Compression Specifications** — WebP/AVIF/JPEG/H.265 targets
6. **Budget Estimates** — MVP $6–7; annual run rate $30–35
7. **Versioning Strategy** — Semantic versioning (v1, v2, v3)
8. **Folder Architecture** — Complete `public/` and `src/assets/` structure
9. **Seasonal Expansion Plan** — How to roll out FW26, SS27, limited editions

### Philosophy Summary

**Velora's AI Media Strategy:**
- **Provider-agnostic** — Consistency through specification, not platform
- **Approval-first** — No partial assets; v1 or rejected, no in-between
- **Documented pipeline** — Repeatable, scalable, auditable process
- **Budget-conscious** — $6–7 MVP; $30–35 annual for ongoing
- **Quality-first** — 9/10 minimum; luxury brands don't ship mediocre assets

---

## Potential Risks

### Implementation Risks

1. **Approval bottleneck:** If design team unavailable, pipeline blocks
   - **Mitigation:** Pre-schedule approval windows; document clear acceptance criteria
   
2. **Provider API changes:** Higgsfield or fallback providers modify pricing/capabilities
   - **Mitigation:** Quarterly provider health check; maintain relationship with 2+ providers

3. **Git LFS quota exceeded:** If storing all source masters, may hit LFS limits
   - **Mitigation:** Archive old versions monthly; compress ProRes masters to H.265

### Operational Risks

1. **Consistency drift over time:** As teams grow, subjective QA criteria may shift
   - **Mitigation:** Lock QA checklist in stone; regular audit against v1 reference assets

2. **Prompt library becomes outdated:** Future seasons forget why certain specifications exist
   - **Mitigation:** Document rationale in PROMPT_LIBRARY.md (why we test at f/5.6, why we use 135mm, etc.)

---

## Future Recommendations

### Phase 2 (FW26, Post-MVP)

1. **Automated QA:** Build scoring script to auto-compare new assets against v1 references (color histogram, content-aware difference)
2. **Prompt Versioning:** Create git-tracked prompt library with rationale documentation
3. **A/B Testing:** Test alternate provider (FLUX) on 10% of assets; compare approval rates
4. **Video Expansion:** Generate product video loops (8-second fabric motion per product)

### Phase 3 (SS27 & Beyond)

1. **Batch API Integration:** If volume justifies, negotiate direct API access (bypass MCP) for bulk generation
2. **CDN Strategy:** Implement image caching rules based on asset priority and shelf life
3. **Internationalization:** Translate MEDIA_PRODUCTION.md and PROMPT_LIBRARY.md for global asset teams
4. **Analytics:** Track generation cost per approved asset; measure improvement over time

### Phase 4 (Strategic)

1. **Custom Model:** If volume exceeds 200+ assets/year, consider fine-tuning a custom model on v1 approved assets
2. **On-Prem Generation:** Evaluate self-hosted infrastructure (FLUX, Stable Diffusion) vs. cloud
3. **Hybrid Human-AI:** Test using AI to pre-generate, then AI-enhanced human photography for ultimate quality

---

*This document is maintained alongside ART_DIRECTION.md and MEDIA_PRODUCTION.md. When provider capabilities change or new tools become available, update §4 Provider Comparison. When new seasonal collections launch, reference this document as the operational playbook. Version control: Document updated [DATE]. Last review: [DATE].*
