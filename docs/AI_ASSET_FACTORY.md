# Velora AI Asset Factory

> This document describes the complete system architecture for how Velora produces, validates, stores, and manages AI-generated visual assets at scale.
> It is not a workflow guide (see `AI_MEDIA_PIPELINE.md` for that). It is the operating system that governs provider selection, asset portability, governance, and disaster recovery.
> This document ensures that no single provider failure can stop production, and that the same visual specification can be executed by multiple AI platforms without compromise to brand consistency.

---

## 1. Vision & Principles

### Why Provider Independence Matters

Most companies using AI for production depend on a single provider. This is fragile:

- **Provider A** has a pricing change → Production costs increase 50%
- **Provider B** deprioritizes your use case → Quality degrades silently
- **Provider C** shuts down → Entire workflow breaks; assets become inaccessible
- **Provider D** introduces new terms → Commercial rights become restricted
- **Provider E** API goes down → No assets generated for hours/days

Velora's philosophy: **Brand consistency is more important than provider consistency.**

### Core Principle: Provider Independence

The Velora AI Asset Factory is architected so that:

1. **Assets are specified provider-agnostically** — A prompt written for Higgsfield can be executed on FLUX, OpenAI, or Google Imagen with minimal adaptation
2. **No single provider is critical path** — If Primary goes down, Fallback 1 is used immediately; no approval delays
3. **Quality never degrades for cost** — We maintain minimum quality thresholds regardless of provider; cheaper fallbacks only used for non-critical assets
4. **Visual consistency is enforced mechanically** — Via QA checklist (§7) and manifest metadata (§6), not reliance on a single provider's algorithm

### Four Pillars

| Pillar | Definition | Owned By |
|---|---|---|
| **Provider Independence** | Multiple viable providers for every asset type | Engineering |
| **Asset Consistency** | Approved v1 assets serve as visual references for all future generations | Design |
| **Long-term Maintainability** | Documentation, versioning, and metadata ensure assets remain producible 5+ years later | Product |
| **Vendor Lock-in Prevention** | No proprietary formats; all assets in standard web formats; prompts in platform-agnostic prose | Engineering + Legal |

---

## 2. AI Provider Registry

### Complete Provider Specifications

This registry is the source of truth for all provider capabilities, limitations, pricing, and ideal use cases. When production needs arise, consult this section to determine which provider(s) are viable.

#### 1. Higgsfield

**Classification:** Primary Provider (Image + Video)

| Attribute | Value |
|---|---|
| **Image Quality** | 9/10 |
| **Video Quality** | 9/10 |
| **Material Rendering** | 9/10 (specialized for luxury fashion) |
| **Luxury Fashion Suitability** | 9/10 |
| **Prompt Following** | 8/10 |
| **Consistency Across Generations** | 8/10 |
| **API Maturity** | 8/10 |
| **MCP Integration** | 10/10 (native) |
| **Pricing Model** | Credits; ~$0.12–0.20 per 4K image, ~$0.40–0.60 per 4K video |
| **Commercial Rights** | ✅ Full unrestricted |
| **Maximum Image Resolution** | 4K native (5504×3072 tested) |
| **Maximum Video Resolution** | 4K (3840×2160) at 24fps |
| **Generation Speed** | 30–90 seconds per image; 90–180 seconds per video |
| **Batch Generation** | Sequential (1 concurrent job on free tier) |
| **Cost per Approved Asset** | $0.12–0.30 (including estimated revision cost) |

**Strengths:**
- Cinema Studio 2.5 and 3.0 specifically designed for editorial luxury photography
- Soul 2.0 line optimized for fashion
- Native MCP integration with Claude
- Film-adjacent color grading (matches Velora aesthetic)
- Material realism unmatched (visible linen weave, merino fuzz, silk sheen)
- Excellent prompt adherence for detailed specifications
- Clear pricing and credit system

**Weaknesses:**
- Single concurrent job on free tier (rate limiting)
- Cannot batch-generate multiple assets from one prompt
- Video generation newer (less stable than image)
- Requires workspace setup
- Credits don't rollover (must spend monthly budget or lose credits)

**Ideal Use Cases:**
- ✅ Hero images and videos (primary)
- ✅ Product photography (all variants)
- ✅ Editorial campaign images
- ✅ Material close-ups and texture shots
- ✅ Luxury fashion applications exclusively

**Status in Velora:**
- ✅ Tested and approved (Sprint 4.4A validation)
- Current: 2 approved v1 assets
- Recommended: Primary provider for all MVP assets

**Fallback To:** FLUX (if Higgsfield unavailable or budget exhausted)

---

#### 2. FLUX (Black Forest Labs)

**Classification:** Primary Fallback (Image Only)

| Attribute | Value |
|---|---|
| **Image Quality** | 9/10 |
| **Video Quality** | N/A (image-only) |
| **Material Rendering** | 8/10 |
| **Luxury Fashion Suitability** | 8/10 |
| **Prompt Following** | 9/10 (exceptional adherence) |
| **Consistency Across Generations** | 7/10 |
| **API Maturity** | 7/10 (newer, but stable) |
| **MCP Integration** | ❌ Not available |
| **Pricing Model** | Per-minute compute; generous free tier; ~$0.10–0.15 per image at scale |
| **Commercial Rights** | ✅ Full unrestricted (even on free tier) |
| **Maximum Image Resolution** | 1024×1024 native; requires upscaling to 4K |
| **Maximum Video Resolution** | N/A |
| **Generation Speed** | 15–45 seconds per image |
| **Batch Generation** | ✅ Supports batch via API |
| **Cost per Approved Asset** | $0.08–0.20 (including upscaling cost) |

**Strengths:**
- Exceptional image quality and sharpness
- Excellent prompt following for detailed specifications
- Extremely generous free tier (great for prototyping)
- Lowest cost at scale (~$0.10/image)
- Open-source model (can be self-hosted for on-prem use)
- Batch API support (can generate multiple assets in one job)
- Fast generation (15–45 seconds)

**Weaknesses:**
- No video generation (product gap)
- Below 4K native (upscaling required introduces artifacts)
- Smaller community and documentation than established providers
- No MCP integration (requires separate API key + auth)
- Less fashion-specialized than Higgsfield
- Lower consistency between generations (helpful for variety, problematic for series consistency)

**Ideal Use Cases:**
- ✅ Product images (fallback when Higgsfield unavailable)
- ✅ Editorial images (secondary provider for comparison)
- ✅ Social media assets (lower resolution acceptable)
- ✅ Prototyping and design exploration
- ✅ Budget-constrained production (high volume, tight budget)
- ❌ NOT suitable for hero video (unavailable)

**Status in Velora:**
- Not currently integrated
- Recommended as primary fallback
- Would require separate API key setup

**Fallback To:** OpenAI GPT Image 2 (if FLUX unavailable)

---

#### 3. OpenAI GPT Image 2

**Classification:** Secondary Fallback (Image Only)

| Attribute | Value |
|---|---|
| **Image Quality** | 8/10 |
| **Video Quality** | N/A |
| **Material Rendering** | 7/10 |
| **Luxury Fashion Suitability** | 7/10 |
| **Prompt Following** | 9/10 (excellent adherence) |
| **Consistency Across Generations** | 8/10 |
| **API Maturity** | 10/10 (production-ready, excellent docs) |
| **MCP Integration** | ❌ Not available |
| **Pricing Model** | Per-image; standard pricing ~$0.16–0.20 per image |
| **Commercial Rights** | ✅ Full unrestricted |
| **Maximum Image Resolution** | 1792×1024 native; requires upscaling to 4K |
| **Maximum Video Resolution** | N/A |
| **Generation Speed** | 20–60 seconds per image |
| **Batch Generation** | ✅ Supports concurrent requests |
| **Cost per Approved Asset** | $0.16–0.30 (including upscaling) |

**Strengths:**
- General-purpose quality across all domains
- Exceptional API maturity and documentation
- Excellent prompt following
- Batch-capable (concurrent requests)
- Commercial rights clear and unrestricted
- Reliable, established platform

**Weaknesses:**
- Not fashion-specialized (generic model)
- Below 4K native (requires upscaling)
- Can struggle with specific lighting requirements
- No MCP integration
- Higher per-image cost than FLUX
- Less material realism than Higgsfield

**Ideal Use Cases:**
- ✅ Fallback for product images
- ✅ Social media assets
- ✅ When Higgsfield and FLUX both unavailable
- ❌ NOT recommended for hero or editorial images

**Status in Velora:**
- Not currently integrated
- Available as secondary fallback
- Would require separate API key + OpenAI account

**Fallback To:** Google Imagen (if OpenAI unavailable)

---

#### 4. Google Imagen

**Classification:** Tertiary Fallback (Image + Video)

| Attribute | Value |
|---|---|
| **Image Quality** | 8/10 |
| **Video Quality** | 8/10 (Imagen 3 capable) |
| **Material Rendering** | 6/10 (glossy, less textile detail) |
| **Luxury Fashion Suitability** | 6/10 |
| **Prompt Following** | 8/10 |
| **Consistency Across Generations** | 7/10 |
| **API Maturity** | 8/10 |
| **MCP Integration** | ❌ Not available |
| **Pricing Model** | Per-image via Google Cloud; variable cost integration |
| **Commercial Rights** | ✅ Full unrestricted |
| **Maximum Image Resolution** | 1024×1024 native; requires upscaling |
| **Maximum Video Resolution** | 720p (below 4K) |
| **Generation Speed** | 30–60 seconds per image |
| **Batch Generation** | ✅ Supported via Cloud API |
| **Cost per Approved Asset** | $0.12–0.25 (with upscaling) |

**Strengths:**
- Google-backed stability and reliability
- Video generation available
- Good general quality
- Integrated into Cloud platform

**Weaknesses:**
- Material realism issues (doesn't capture textile detail well)
- Below 4K native (upscaling required)
- Not fashion-specialized
- No MCP integration
- Less control over lighting and composition
- Variable cost (tied to Cloud account usage)

**Ideal Use Cases:**
- Only as last-resort fallback
- Not recommended for primary production

**Status in Velora:**
- Not recommended for MVP
- Could be considered if all other providers fail

---

#### 5. Runway ML

**Classification:** Video Specialist (Fallback for video only)

| Attribute | Value |
|---|---|
| **Image Quality** | 8/10 |
| **Video Quality** | 8/10 |
| **Material Rendering** | 7/10 |
| **Luxury Fashion Suitability** | 7/10 |
| **Prompt Following** | 7/10 |
| **Consistency Across Generations** | 7/10 |
| **API Maturity** | 6/10 (newer, less stable) |
| **MCP Integration** | ❌ Not available |
| **Pricing Model** | Credits system; expensive for video (~$0.50–2.00 per video) |
| **Commercial Rights** | ✅ Full unrestricted |
| **Maximum Image Resolution** | 1024px |
| **Maximum Video Resolution** | 4K capable |
| **Generation Speed** | 1–3 minutes per video |
| **Batch Generation** | Limited (project-based) |
| **Cost per Approved Asset** | $0.50–2.00 per video |

**Strengths:**
- Video generation is core competency
- Good motion physics
- Clear commercial licensing
- Intuitive UI

**Weaknesses:**
- Expensive for video production
- API is newer and less mature than OpenAI/Google
- Image generation is secondary
- No MCP integration
- Not optimized for fashion material detail
- Credit burn for video can be high

**Ideal Use Cases:**
- ✅ Video fallback if Higgsfield video unavailable
- ✅ Product video loops (future expansion)
- ✅ Campaign video sequences
- ❌ NOT primary choice for still photography

**Status in Velora:**
- Secondary video provider only
- Use only if Higgsfield video unavailable

**Fallback To:** Kling (if Runway unavailable)

---

#### 6. Kling (Kuaishou)

**Classification:** Video Specialist (Last Resort)

| Attribute | Value |
|---|---|
| **Image Quality** | 7/10 |
| **Video Quality** | 8/10 |
| **Material Rendering** | 7/10 |
| **Luxury Fashion Suitability** | 6/10 |
| **Prompt Following** | 6/10 |
| **Consistency Across Generations** | 7/10 |
| **API Maturity** | 5/10 (newer, limited documentation) |
| **MCP Integration** | ❌ Not available |
| **Pricing Model** | Credit-based; pricing variable |
| **Commercial Rights** | ✅ Full (with restrictions) |
| **Maximum Image Resolution** | ~1024px |
| **Maximum Video Resolution** | 1080p |
| **Generation Speed** | 30–120 seconds |
| **Batch Generation** | Limited |
| **Cost per Approved Asset** | $0.20–0.50 per video |

**Strengths:**
- Good video quality
- Realistic physics simulation
- Reasonable pricing for video

**Weaknesses:**
- Limited English documentation
- Language barrier in UI and API
- Not fashion-optimized
- Inconsistent API stability
- Below 4K video resolution

**Ideal Use Cases:**
- Only as last-resort fallback for video
- Not recommended for primary production

**Status in Velora:**
- Contingency provider only

---

#### 7. Luma (Dream Machine)

**Classification:** Video Specialist (Experimental)

| Attribute | Value |
|---|---|
| **Image Quality** | N/A (video-only) |
| **Video Quality** | 8/10 |
| **Material Rendering** | 6/10 |
| **Luxury Fashion Suitability** | 6/10 |
| **Prompt Following** | 7/10 |
| **Consistency Across Generations** | 7/10 |
| **API Maturity** | 6/10 (early access) |
| **MCP Integration** | ❌ Not available |
| **Pricing Model** | Per-minute; reasonable rate |
| **Commercial Rights** | ✅ Full unrestricted |
| **Maximum Image Resolution** | N/A |
| **Maximum Video Resolution** | 1024×576 native (below 4K) |
| **Generation Speed** | 1–2 minutes |
| **Batch Generation** | Limited |
| **Cost per Approved Asset** | $0.30–0.80 per video |

**Strengths:**
- Good physics simulation
- Reasonable pricing
- Image-to-video capability

**Weaknesses:**
- Video-only (no image generation)
- Below 4K resolution
- Early-stage technology

**Ideal Use Cases:**
- Watch for future releases
- Product video loops (future expansion)

**Status in Velora:**
- Monitor only; not recommended yet
- Revisit in 2026 when capabilities mature

---

#### 8. Pika

**Classification:** Video Specialist (Not Recommended)

| Attribute | Value |
|---|---|
| **Image Quality** | 6/10 |
| **Video Quality** | 7/10 |
| **Material Rendering** | 5/10 |
| **Luxury Fashion Suitability** | 5/10 |
| **Prompt Following** | 6/10 |
| **Consistency Across Generations** | 6/10 |
| **API Maturity** | 5/10 (immature) |
| **MCP Integration** | ❌ Not available |
| **Pricing Model** | Credits; variable cost |
| **Commercial Rights** | ✅ Full unrestricted |
| **Maximum Resolution** | 1024×576 video |
| **Generation Speed** | 30–120 seconds |
| **Cost per Approved Asset** | $0.20–0.50 per video |

**Status in Velora:**
- **Not recommended for MVP**
- Too early-stage; API stability concerns

---

#### 9. Midjourney

**Classification:** Artistic Alternative (Not Recommended for Velora)

| Attribute | Value |
|---|---|
| **Image Quality** | 8/10 (aesthetically high) |
| **Video Quality** | Limited |
| **Material Rendering** | 5/10 (stylized, not photorealistic) |
| **Luxury Fashion Suitability** | 6/10 (biased toward artistic/stylized) |
| **Prompt Following** | 7/10 |
| **Consistency Across Generations** | 6/10 (high variance) |
| **API Maturity** | 5/10 (no official API) |
| **MCP Integration** | ❌ Not available |
| **Pricing Model** | Subscription ($30+/month) |
| **Commercial Rights** | ✅ Full (subscription-dependent) |
| **Cost per Approved Asset** | $0.05–0.10 (via subscription) |

**Strengths:**
- Exceptional aesthetic quality
- Large community
- Artistic fashion applications

**Weaknesses:**
- Photorealism and material detail weak
- High variance (unsuitable for series consistency)
- No true API (Discord-based)
- Artistic bias conflicts with Velora's editorial/photorealistic goal
- Subscription model unpredictable for production budgeting

**Status in Velora:**
- **NOT RECOMMENDED for production**
- Could be used for mood boards or reference only
- Better suited to artistic fashion brands, not luxury editorial

---

#### 10. Minimax Hailuo

**Classification:** General Provider (Limited Use)

| Attribute | Value |
|---|---|
| **Image Quality** | 6/10 |
| **Video Quality** | 7/10 |
| **Material Rendering** | 6/10 |
| **Luxury Fashion Suitability** | 5/10 |
| **Prompt Following** | 6/10 |
| **Consistency Across Generations** | 6/10 |
| **API Maturity** | 5/10 |
| **MCP Integration** | ❌ Not available (available via Higgsfield) |
| **Pricing Model** | Credits; variable |
| **Commercial Rights** | ✅ Full unrestricted |
| **Cost per Approved Asset** | $0.15–0.30 |

**Status in Velora:**
- Available through Higgsfield as fallback variant
- Use only if Higgsfield primary models unavailable

---

#### 11. Veo (Google)

**Classification:** Next-Generation Video (Pre-Release)

| Attribute | Value |
|---|---|
| **Image Quality** | N/A |
| **Video Quality** | 8/10 (promising) |
| **Material Rendering** | TBD |
| **Luxury Fashion Suitability** | TBD |
| **Prompt Following** | 7/10 (estimated) |
| **API Maturity** | 0/10 (pre-release) |
| **MCP Integration** | ❌ Not available |
| **Pricing Model** | TBD |
| **Commercial Rights** | TBD |
| **Status** | ⏳ Early access, not production-ready |

**Status in Velora:**
- Monitor for future release
- Revisit Q4 2026 when launched

---

### Provider Summary Matrix

| Provider | Primary Use | Image | Video | Cost | Fashion | Recommended |
|---|---|---|---|---|---|---|
| Higgsfield | Hero + Product | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | High | ⭐⭐⭐⭐⭐ | ✅ PRIMARY |
| FLUX | Image Fallback | ⭐⭐⭐⭐⭐ | ❌ | Low | ⭐⭐⭐⭐ | ✅ FALLBACK 1 |
| OpenAI | Image Fallback | ⭐⭐⭐⭐ | ❌ | Medium | ⭐⭐⭐⭐ | ✅ FALLBACK 2 |
| Google Imagen | Last Resort | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Medium | ⭐⭐⭐ | ⚠️ TERTIARY |
| Runway | Video Fallback | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | High | ⭐⭐⭐⭐ | ✅ VIDEO FALLBACK |
| Kling | Video Last Resort | ⭐⭐⭐ | ⭐⭐⭐⭐ | Low | ⭐⭐⭐ | ⚠️ CONTINGENCY |
| Luma | Future Video | N/A | ⭐⭐⭐⭐ | Medium | ⭐⭐⭐ | ⏳ MONITOR |
| Pika | Not Recommended | ⭐⭐⭐ | ⭐⭐⭐ | Low | ⭐⭐ | ❌ NOT RECOMMENDED |
| Midjourney | Not Recommended | ⭐⭐⭐⭐ | ⭐⭐ | Medium | ⭐⭐⭐ | ❌ NOT RECOMMENDED |
| Minimax | Limited Use | ⭐⭐⭐ | ⭐⭐⭐ | Low | ⭐⭐⭐ | ⚠️ VIA HIGGSFIELD |
| Veo | Future Monitor | N/A | TBD | TBD | TBD | ⏳ MONITOR |

---

## 3. Provider Decision Matrix

### Selection Logic

When an asset is needed, follow this decision tree:

**Question 1: Is this asset video or image?**
- **Video?** → Go to Video Decision Matrix (§3.1)
- **Image?** → Go to Image Decision Matrix (§3.2)

### 3.1 Video Decision Matrix

**Question 2: What type of video?**

| Video Type | Primary | Fallback 1 | Fallback 2 | Fallback 3 | Notes |
|---|---|---|---|---|---|
| **Hero Loop** | Higgsfield | Runway | Kling | N/A | 4K essential; loopability critical; 24fps required |
| **Campaign Video** | Runway | Higgsfield | Kling | N/A | Can use Runway if Higgsfield budget exhausted |
| **Product Loop** | Higgsfield | Runway | Kling | N/A | Material motion important; 4K preferred |
| **Tutorial/Explainer** | Runway | Higgsfield | Kling | N/A | Educational; lower resolution acceptable |
| **Social Clip** | Runway | Kling | Luma | N/A | Short duration; 720p acceptable |
| **Future Expansion** | Luma | Kling | N/A | N/A | Post-release; monitor |

**Provider Switch Logic:**
1. If Primary provider unavailable (API down, quota exhausted, price increase):
   - Switch to Fallback 1 immediately
   - Do NOT delay production; approved assets have consistent specification
2. If Fallback 1 unavailable:
   - Switch to Fallback 2
   - If Fallback 2 also down, escalate to VP Product

---

### 3.2 Image Decision Matrix

**Question 2: What category of image?**

#### Hero & Editorial Images

| Asset Type | Primary | Fallback 1 | Fallback 2 | Fallback 3 | Notes |
|---|---|---|---|---|---|
| **Hero Poster** | Higgsfield | FLUX | OpenAI | Imagen | Must match video; loopable frame |
| **Editorial Campaign** | Higgsfield | FLUX | OpenAI | Imagen | Material realism critical |
| **Brand Story** | Higgsfield | FLUX | OpenAI | N/A | Lighting and composition important |
| **Craftsmanship Detail** | Higgsfield | FLUX | OpenAI | N/A | Fabric texture must be visible |

#### Product Images

| Asset Type | Primary | Fallback 1 | Fallback 2 | Fallback 3 | Notes |
|---|---|---|---|---|---|
| **Product Front** | Higgsfield | FLUX | OpenAI | Imagen | Hero image; highest quality required |
| **Product Detail** | Higgsfield | FLUX | OpenAI | Imagen | Close-up; material detail essential |
| **Product Macro** | Higgsfield | FLUX | OpenAI | N/A | Extreme close-up; texture critical |
| **Colorway Variant** | FLUX | Higgsfield | OpenAI | N/A | Batch generation acceptable; cost-optimize |

#### Supporting Images

| Asset Type | Primary | Fallback 1 | Fallback 2 | Fallback 3 | Notes |
|---|---|---|---|---|---|
| **Category Header** | FLUX | Higgsfield | OpenAI | Imagen | Cost optimization acceptable |
| **Collection Banner** | Higgsfield | FLUX | OpenAI | N/A | Visual prominence high |
| **Newsletter Header** | FLUX | Higgsfield | OpenAI | N/A | Budget-conscious |
| **Social OG** | FLUX | OpenAI | Imagen | N/A | 1200×630; quick turnaround |

#### Lifecycle Images

| Asset Type | Primary | Fallback 1 | Fallback 2 | Fallback 3 | Notes |
|---|---|---|---|---|---|
| **Email Header** | FLUX | OpenAI | Imagen | N/A | Rapid turnaround; low cost |
| **Marketing Tease** | FLUX | OpenAI | Imagen | N/A | Cost-optimize; rapid |
| **Lifestyle Context** | Higgsfield | FLUX | OpenAI | Imagen | If pursuing lifestyle direction |

**Provider Switch Logic for Images:**
1. **Cost-first fallback:** If Primary provider cost exceeds budget threshold, start with Fallback 1 (FLUX)
2. **Quality-first fallback:** If Primary provider unavailable, use Fallback 1 (same quality bar)
3. **Speed fallback:** If timeline critical, use fastest provider that meets quality bar

---

## 4. Asset Factory Workflow

### Complete 15-Stage Production System

The Asset Factory workflow is a state machine with 15 discrete stages. Each stage has entrance criteria, actions, and exit criteria. An asset cannot advance to the next stage until the current stage is complete.

```
STAGE 1: Creative Brief
    ↓
STAGE 2: Prompt Selection
    ↓
STAGE 3: Asset Manifest Creation
    ↓
STAGE 4: Provider Selection
    ↓
STAGE 5: Generation
    ↓
STAGE 6: Initial QA
    ↓
STAGE 7: Art Direction Review
    ↓
STAGE 8: Technical Review
    ↓
STAGE 9: Compression
    ↓
STAGE 10: Naming & Versioning
    ↓
STAGE 11: Manifest Update
    ↓
STAGE 12: Git Commit
    ↓
STAGE 13: CDN Upload
    ↓
STAGE 14: Deployment
    ↓
STAGE 15: Monitoring & Archive
```

### Stage Details

#### STAGE 1: Creative Brief

**Purpose:** Define what asset is needed and why.

**Entrance Criteria:**
- Asset requirement identified (from product roadmap, design review, or marketing campaign)
- Asset appears in inventory (§2 of AI_MEDIA_PIPELINE.md)

**Actions:**
1. Identify asset ID from inventory
2. Gather stakeholder context (design intent, product use, technical constraints)
3. Confirm resolution, aspect ratio, priority from inventory
4. Document purpose and deadline

**Exit Criteria:**
- Brief is documented in the asset spreadsheet
- All stakeholders agree on intent
- Timeline is confirmed

**Owned By:** Product Manager + Design Lead
**Duration:** 1–2 hours

---

#### STAGE 2: Prompt Selection

**Purpose:** Select or compose the prompt that specifies the visual.

**Entrance Criteria:**
- Creative brief completed
- Asset type identified

**Actions:**
1. Check if prompt exists in PROMPT_LIBRARY (from MEDIA_PRODUCTION.md)
2. If prompt exists:
   - Review it for applicability
   - Confirm with design it matches current intent
3. If prompt does not exist:
   - Compose new prompt following ART_DIRECTION.md §8 specifications
   - Include all required elements: camera, lighting, composition, color, material
   - Add MASTER NEGATIVE PROMPT from MEDIA_PRODUCTION.md
4. Document prompt version in asset spreadsheet

**Exit Criteria:**
- Prompt is finalized and documented
- Design lead approves prompt
- Prompt is stored in version control (optional: add to PROMPT_LIBRARY for future reuse)

**Owned By:** Design Lead + Engineering
**Duration:** 1–3 hours (if new prompt); 15 minutes (if existing prompt)

---

#### STAGE 3: Asset Manifest Creation

**Purpose:** Create metadata record for the asset (see §6 for manifest standard).

**Entrance Criteria:**
- Prompt selection completed

**Actions:**
1. Create asset manifest JSON (standard format in §6)
2. Populate fields:
   - `assetId`: From inventory
   - `collection`: SS26, FW26, etc.
   - `season`: Spring/Summer 2026, etc.
   - `provider`: TBD (determined in Stage 4)
   - `promptVersion`: Document prompt ID
   - `createdBy`: Your name
   - `status`: DRAFT
3. Save manifest to `src/assets/manifests/{assetId}.json` (in Git)

**Exit Criteria:**
- Manifest created and committed
- All metadata fields populated (except provider, dates, URLs filled in later)

**Owned By:** Engineering
**Duration:** 10 minutes

---

#### STAGE 4: Provider Selection

**Purpose:** Determine which AI provider will generate the asset.

**Entrance Criteria:**
- Manifest created
- Creative brief & prompt finalized

**Actions:**
1. Consult §3 Provider Decision Matrix
2. Identify Primary provider for this asset type
3. Check provider status:
   - Is Primary provider available? (API up, credits remaining, rate limits OK)
   - If NO → select Fallback 1
   - If Fallback 1 unavailable → select Fallback 2
4. Document provider in manifest
5. Log provider selection + reason in spreadsheet

**Exit Criteria:**
- Provider confirmed and documented
- Manifest updated with provider name

**Owned By:** Engineering
**Duration:** 5 minutes

---

#### STAGE 5: Generation

**Purpose:** Generate the asset using selected provider.

**Entrance Criteria:**
- Provider selected
- Manifest created
- Prompt finalized

**Actions:**
1. Log into selected provider
2. Input complete prompt (including negative prompt)
3. Set generation parameters:
   - Resolution: From asset inventory
   - Quality: Maximum available
   - Aspect ratio: Locked to specification
   - Seed: Auto (for first generation) or fixed (for retries)
4. Submit generation job
5. Record job ID in manifest
6. Wait for completion

**Output:** Generated file (PNG for images; MP4 for video)

**Exit Criteria:**
- Asset file downloaded
- File format verified (PNG, MP4, etc.)
- File resolution confirmed

**Owned By:** Engineering
**Duration:** 2 minutes (submission) + 30 seconds to 3 minutes (generation) + 2 minutes (download) = 5–8 minutes total

---

#### STAGE 6: Initial QA

**Purpose:** Perform automated and manual quality checks.

**Entrance Criteria:**
- Asset generated and downloaded

**Actions:**
1. **Automated checks:**
   - File exists and is readable
   - File size is within expected range
   - Resolution matches specification
   - Color space is sRGB
   - No file corruption detected
2. **Manual visual review (using QA checklist from AI_MEDIA_PIPELINE.md §7):**
   - Score each of 15 criteria (1–10)
   - Document individual scores
   - Calculate average score
3. **Rejection trigger check:**
   - Any criterion <7? → Auto-reject
   - CGI artifacts visible? → Auto-reject
   - Focus in wrong place? → Auto-reject

**Decision:**
- **If average ≥9.0 and no rejection triggers:** Proceed to Stage 7
- **If 8.0–8.9 and no critical issues:** Proceed to Stage 7 (conditional approval)
- **If <8.0 or rejection triggered:** Proceed to Stage 9B (Revision Loop) instead

**Exit Criteria:**
- QA checklist completed
- Scores documented in spreadsheet
- Approval decision recorded

**Owned By:** Design QA specialist
**Duration:** 20–30 minutes per asset

---

#### STAGE 7: Art Direction Review

**Purpose:** Verify asset aligns with ART_DIRECTION.md specifications.

**Entrance Criteria:**
- Initial QA passed (≥8.0 average)

**Actions:**
1. Compare asset against ART_DIRECTION.md §1–13 requirements
2. Check:
   - Luxury feeling present? (Considered, Warm, Tactile, Quiet, Editorial)
   - Visual language consistent? (Minimalism, no startup feel, no aggressive patterns)
   - Color direction aligned? (Warm 5600–6200K, 85–90% saturation, lifted blacks)
3. Compare asset against approved v1 reference image (if this is a revision/alternative)
4. Document findings

**Decision:**
- **If aligned:** Proceed to Stage 8
- **If misaligned:** Return to Stage 9B (Revision Loop) with specific feedback

**Exit Criteria:**
- Art Direction checklist completed
- Design lead approves or requests revision

**Owned By:** Design Lead + Art Direction Owner
**Duration:** 15–20 minutes per asset

---

#### STAGE 8: Technical Review

**Purpose:** Verify technical specifications and platform readiness.

**Entrance Criteria:**
- Art Direction review passed

**Actions:**
1. Verify resolution matches inventory specification
2. Verify aspect ratio is exact
3. Verify color space is sRGB
4. Check for metadata (EXIF, color profiles)
5. Test on multiple devices (mobile, tablet, desktop)
6. Verify file format is appropriate for storage/delivery
7. Check alt text / image description is prepared

**Decision:**
- **If all checks pass:** Proceed to Stage 9 (Compression)
- **If technical issues:** Return to Stage 9B (Revision Loop) or request re-export

**Exit Criteria:**
- Technical checklist completed
- File ready for compression

**Owned By:** Engineering + QA
**Duration:** 10–15 minutes per asset

---

#### STAGE 9: Compression

**Purpose:** Convert to web-optimized formats and reduce file size.

**Entrance Criteria:**
- Initial QA, Art Direction, and Technical reviews passed

**Actions:**
1. **Format conversion:**
   - PNG → WebP 90% (primary)
   - PNG → AVIF 82% (secondary)
   - PNG → JPEG 90% (fallback)
2. **Video compression (if applicable):**
   - Export H.265 4K (~40 Mbps)
   - Export H.265 1080p (~8 Mbps)
3. **Verify quality:**
   - No visible artifacts
   - Compression within target size
4. **Document final file sizes**

**Exit Criteria:**
- All format variants created
- File sizes within targets (see AI_MEDIA_PIPELINE.md §9)
- Quality verified

**Owned By:** Engineering
**Duration:** 15–20 minutes per asset

---

#### STAGE 9B: Revision Loop

**Purpose:** If asset rejected in QA, Art, or Technical review, regenerate with improvements.

**Entrance Criteria:**
- Asset failed QA (score <8.0 or rejection triggered), Art Direction, or Technical review

**Actions:**
1. Analyze failure:
   - Which criteria scored low?
   - What specific feedback was given?
2. Modify prompt to address failures:
   - Material realism low? → Add fabric detail specifications
   - Lighting wrong? → Strengthen directional light guidance
   - Composition off? → Reframe in prompt
3. Attempt regeneration with modified prompt
4. Return to Stage 6 (Initial QA)
5. Track revision attempt (v1 attempt 1, attempt 2, attempt 3)

**Revision Limits:**
- Maximum 3 attempts per asset
- If 3 attempts fail, escalate to Design Lead for decision:
  - Try different provider?
  - Descope asset from current sprint?
  - Extend timeline?

**Exit Criteria:**
- Asset passes QA and reviews OR
- 3 revision attempts exhausted (escalate)

**Owned By:** Engineering + Design
**Duration:** 30 minutes per revision attempt

---

#### STAGE 10: Naming & Versioning

**Purpose:** Apply standard naming convention and version control.

**Entrance Criteria:**
- All format variants created and verified

**Actions:**
1. Rename files using convention: `velora_{collection}_{subject}_{angle}_{colorway}_v1.{ext}`
2. Examples:
   - `velora_ss26_linen-jacket_front_natural_v1.webp`
   - `velora_ss26_hero-background_poster_campaign_v1.webp`
3. Place in correct folder (per §3 of AI_ASSET_FACTORY.md folder architecture)
4. Create `.gitkeep` in any new folders
5. Verify filenames match React component `src` props (case-sensitive!)

**Exit Criteria:**
- Files renamed correctly
- Files in correct `public/` folders
- Naming matches component references

**Owned By:** Engineering
**Duration:** 10 minutes per asset

---

#### STAGE 11: Manifest Update

**Purpose:** Complete asset metadata record.

**Entrance Criteria:**
- Files named, versioned, and placed

**Actions:**
1. Update manifest with:
   - `status`: APPROVED_V1
   - `approvedDate`: Today's date
   - `approvedBy`: Approver name
   - `fileLocation`: `public/images/products/velora_ss26_...webp`
   - `resolution`: Actual resolution of final file
   - `fileSize`: Final WebP file size
   - `checksum`: SHA256 of final file
   - `cdnUrl`: TBD (filled in Stage 13)
   - `gitCommit`: TBD (filled in Stage 12)
2. Save updated manifest

**Exit Criteria:**
- Manifest fully populated
- File saved to version control

**Owned By:** Engineering
**Duration:** 5 minutes

---

#### STAGE 12: Git Commit

**Purpose:** Version control all assets and metadata.

**Entrance Criteria:**
- Files placed in correct folders
- Manifest completed

**Actions:**
1. Stage files for commit:
   ```bash
   git add public/images/products/velora_ss26_linen-jacket_front_natural_v1.webp
   git add src/assets/manifests/PRD-001.json
   ```
2. Write commit message:
   ```
   feat: add approved SS26 product images (PRD-001)
   
   - Linen jacket front (IMG-001): v1 approved
   - Generated via Higgsfield Cinema Studio 2.5
   - WebP 90%, optimized for Next.js Image
   - See src/assets/manifests/PRD-001.json for metadata
   ```
3. Commit
4. Record commit hash in manifest

**Exit Criteria:**
- Files committed to Git
- Commit hash in manifest

**Owned By:** Engineering
**Duration:** 5 minutes

---

#### STAGE 13: CDN Upload

**Purpose:** Push assets to content delivery network for production serving.

**Entrance Criteria:**
- Files committed to Git
- Manifest complete

**Actions:**
1. Upload WebP files to CDN (via CI/CD or manual upload)
2. Set cache headers:
   - Hero images: 90 days
   - Product images: 30 days
   - Newsletter/social: 7 days
3. Verify files accessible on CDN
4. Record CDN URL in manifest

**Exit Criteria:**
- Files on CDN
- URLs verified
- Manifest updated with CDN URLs

**Owned By:** DevOps / Engineering
**Duration:** 10 minutes

---

#### STAGE 14: Deployment

**Purpose:** Activate assets in production.

**Entrance Criteria:**
- Files on CDN
- Files committed

**Actions:**
1. Deploy Next.js application (triggers image optimization)
2. Verify images load correctly on staging
3. Verify responsive srcsets generated
4. Check for broken image paths
5. Monitor Core Web Vitals (LCP, CLS)

**Exit Criteria:**
- Images rendering on staging
- No 404 errors
- Performance metrics acceptable

**Owned By:** Engineering + DevOps
**Duration:** 15 minutes

---

#### STAGE 15: Monitoring & Archive

**Purpose:** Long-term maintenance and reference.

**Entrance Criteria:**
- Assets deployed to production

**Actions:**
1. **Production monitoring (first 7 days):**
   - Monitor image load times
   - Check CDN performance
   - Watch for broken links
2. **Reference preservation:**
   - Archive approved v1 asset in `src/assets/reference/` for future generations
   - Document how this asset was generated (provider, prompt, settings)
3. **Feedback collection:**
   - Record any issues reported by users
   - Update manifest with performance metrics
4. **Quarterly review:**
   - Audit that all production URLs still work
   - Update manifest if CDN URLs change

**Exit Criteria:**
- Asset stable in production
- No ongoing issues
- Reference saved for future seasons

**Owned By:** Engineering + Product
**Duration:** Ongoing

---

### Parallel Execution & Capacity

**Stages that can run in parallel:**
- STAGE 4 (Provider selection) while STAGE 3 (manifest) completes
- Multiple STAGE 5 (generation) jobs in parallel (per provider rate limits)
- STAGE 6 (QA) on asset N while STAGE 5 continues on asset N+1

**Realistic timeline for 26-asset MVP:**

| Timeline | Activity |
|---|---|
| Days 1–2 | Stage 1–4 (brief, prompt, manifest, provider selection) for all 26 assets |
| Days 3–5 | Staggered Stage 5 (generation, 1–2 per day depending on provider concurrency) |
| Days 5–7 | Parallel Stage 6–8 (QA, art, technical reviews) with minimal revision loops |
| Days 8–9 | Compression, naming, versioning (all assets batch processed) |
| Day 10 | Git commit, CDN upload, deployment |
| Days 11–17 | Production monitoring + reference archival |

**Total calendar time:** ~2–3 weeks for full MVP batch (assuming minimal revisions)

---

## 5. Prompt Portability

### Philosophy: One Brief, Multiple Providers

A prompt written for Higgsfield should be executable on FLUX, OpenAI, or Google Imagen with only minor syntax adjustments. This achieves provider independence.

### Prompt Structure (Non-Provider-Specific)

All Velora prompts follow this template (from MEDIA_PRODUCTION.md):

```
[SUBJECT + CONTEXT]
Description of what is in the image (garment, environment, composition)

[LIGHTING]
Direction, quality, intensity, color temperature

[CAMERA]
Focal length, aperture, depth of field, distance

[COMPOSITION]
Subject placement, aspect ratio, negative space, horizon

[COLOR]
Temperature, saturation, tone, mood

[NEGATIVE PROMPT]
(From MASTER NEGATIVE PROMPT + asset-specific exclusions)
```

This structure is provider-agnostic. It describes *what* should be generated, not *how* a specific provider should generate it.

### Provider-Specific Adaptation

When using a provider other than Higgsfield, apply these translations:

| Concept | Higgsfield Syntax | FLUX Syntax | OpenAI Syntax | Notes |
|---|---|---|---|---|
| **Focal Length** | "85mm equivalent" | "85mm" | "85mm" | All support focal length terminology |
| **Aperture** | "f/5.6" | "f/5.6" | "f/5.6" | All support f-stop notation |
| **Light Quality** | "large softbox" | "soft diffused light" | "soft light" | Terminology varies; meaning is same |
| **Color Temp** | "5600–6200K" | "warm 5600K" | "warm lighting" | FLUX and OpenAI less precise; round to nearest 200K |
| **Aspect Ratio** | "16:9" | "16:9" | "16:9" | All support standard ratios |
| **Negative** | Full master prompt | Full master prompt | Full master prompt | Identical across providers |

### Resolution Accommodation

| Provider | Native Max | For 4K Target | Adaptation |
|---|---|---|---|
| Higgsfield | 4K (5504×3072) | Use native | None required |
| FLUX | 1024×1024 | Upscale 4× | Add "high-resolution" to prompt; post-process upscaling |
| OpenAI | 1792×1024 | Upscale 2.1× | Increase prompt detail; tight composition helps |
| Imagen | 1024×1024 | Upscale 4× | Add "maximum detail" guidance |
| Runway | 4K video | Use native | None required |

### Negative Prompt Compatibility

The MASTER NEGATIVE PROMPT from MEDIA_PRODUCTION.md is compatible with all providers. However:

**For budget-conscious fallbacks** (FLUX, OpenAI), truncate negatives to 50 most critical exclusions if generation is slow. All providers support at least:

```
watermark, text overlay, CGI obvious, plastic, synthetic, 
smiling face, person looking at camera, stock photography
```

### Example: Multi-Provider Execution

**Single Brief:** "Velora SS26 Hero Poster"
**Prompt:** (From MEDIA_PRODUCTION.md PROMPT 002)

**Execution Plan:**
1. **Primary (Higgsfield):** Execute prompt exactly as written
2. **Fallback 1 (FLUX):** Same prompt, but add "extremely high resolution" and plan 4× upscale
3. **Fallback 2 (OpenAI):** Same prompt, reduce negative prompt to 50 items, tighten composition
4. **Expected outcome:** 3 variants of the same brief, all pass QA (assuming brief was solid)

---

## 6. Asset Manifest Standard

### JSON Schema

Every asset must have a manifest metadata file in `src/assets/manifests/{assetId}.json`:

```json
{
  "assetId": "IMG-001",
  "name": "Hero Poster Frame",
  "description": "Video poster frame and landing page hero background",
  "collection": "ss26",
  "season": "Spring/Summer 2026",
  "purpose": "HeroSection background + video poster",
  "category": "editorial",
  "type": "image",
  "createdBy": "design-team",
  "createdDate": "2026-07-13",
  
  "specification": {
    "resolution": "3840x2160",
    "aspectRatio": "16:9",
    "colorSpace": "sRGB",
    "dpi": 72,
    "minResolution": "3840x2160",
    "format": "webp"
  },
  
  "generation": {
    "provider": "higgsfield",
    "model": "cinema-studio-2.5",
    "promptId": "PROMPT-002",
    "promptVersion": "1.0",
    "seed": null,
    "jobId": "4bbef865-eeb7-4e4d-a792-db366cb05120",
    "generationDate": "2026-07-13",
    "generationTime": "45 seconds",
    "cost": "0.15"
  },
  
  "quality": {
    "qaScores": {
      "luxuryFeeling": 9,
      "editorialQuality": 9,
      "materialRealism": 9,
      "lightingQuality": 9,
      "colorHarmony": 8,
      "composition": 9,
      "noAiArtifacts": 9,
      "artDirectionAlignment": 9,
      "designBibleAlignment": 9,
      "technicalSharpness": 9
    },
    "averageScore": 8.8,
    "status": "approved_v1",
    "approvedBy": "design-lead",
    "approvedDate": "2026-07-13",
    "revisionCount": 0,
    "notes": "Perfect hero poster; matches video frame requirements"
  },
  
  "files": {
    "webp": {
      "path": "public/posters/velora_ss26_hero-background_poster_campaign_v1.webp",
      "fileSize": "1.4MB",
      "checksum": "sha256:a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
      "quality": 90,
      "width": 3840,
      "height": 2160
    },
    "avif": {
      "path": "public/posters/velora_ss26_hero-background_poster_campaign_v1.avif",
      "fileSize": "0.9MB",
      "checksum": "sha256:x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6",
      "quality": 82
    },
    "jpeg": {
      "path": "public/posters/velora_ss26_hero-background_poster_campaign_v1.jpg",
      "fileSize": "2.1MB",
      "checksum": "sha256:p1q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6",
      "quality": 90
    }
  },
  
  "deployment": {
    "gitCommit": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    "gitDate": "2026-07-13",
    "cdnUrl": "https://cdn.velora.com/posters/velora_ss26_hero-background_poster_campaign_v1.webp",
    "cdnActive": true,
    "deployedDate": "2026-07-13",
    "deployedEnv": "production"
  },
  
  "dependencies": {
    "parentComponent": "HeroSection",
    "usedIn": [
      "src/features/landing/components/HeroSection.tsx"
    ],
    "relatedAssets": [
      "VID-001"
    ]
  },
  
  "monitoring": {
    "performanceMetrics": {
      "avgLoadTime": "1.2s",
      "cacheHitRate": "0.94",
      "coreWebVitals": {
        "lcp": "1.5s",
        "cls": "0.01",
        "fid": "50ms"
      }
    },
    "lastMonitoredDate": "2026-07-20",
    "issues": []
  },
  
  "archive": {
    "isBenchmark": true,
    "benchmarkFor": "hero-poster",
    "referencePath": "src/assets/reference/IMG-001_v1_approved.png",
    "referencePurpose": "Visual reference for future SS26/FW26 hero poster generations",
    "expiryDate": "2028-07-13",
    "retentionReason": "Established brand baseline; used for quality comparison across seasons"
  }
}
```

### Manifest Field Guide

| Field | Type | Required | Purpose |
|---|---|---|---|
| `assetId` | string | Yes | Unique ID from inventory (e.g., "IMG-001") |
| `name` | string | Yes | Human-readable name |
| `description` | string | Yes | What the asset is and where it's used |
| `collection` | string | Yes | Season code (`ss26`, `fw26`, etc.) |
| `season` | string | Yes | Full season name (e.g., "Spring/Summer 2026") |
| `purpose` | string | Yes | Functional purpose in the app |
| `category` | string | Yes | Asset category (editorial, product, campaign, etc.) |
| `type` | string | Yes | Asset type (image, video) |
| `provider` | string | Yes | Which AI provider generated it |
| `model` | string | Yes | Provider's model name |
| `promptId` | string | Yes | Prompt identifier from MEDIA_PRODUCTION.md |
| `status` | string | Yes | Status code (draft, approved_v1, v2, archived) |
| `qaScores` | object | Yes | All 10 QA criteria + average |
| `averageScore` | number | Yes | Mean of all QA scores (0–10) |
| `fileSize` | string | Yes | WebP file size (human-readable) |
| `checksum` | string | Yes | SHA256 hash for integrity verification |
| `gitCommit` | string | Yes | Git commit hash where asset was added |
| `cdnUrl` | string | Conditional | CDN path (populated post-deployment) |
| `cdnActive` | boolean | Yes | Whether asset is currently live |
| `deployedDate` | string | Conditional | Date deployed to production |
| `usedIn` | array | Yes | Component files that reference this asset |
| `relatedAssets` | array | No | Other assets in the same shot/sequence |
| `revisionCount` | number | Yes | How many times this asset was regenerated |
| `notes` | string | No | Free-text observations, issues, or context |

### Manifest Storage

- **Location:** `src/assets/manifests/{assetId}.json`
- **Version Control:** Committed to Git alongside assets
- **Lifecycle:** Created in Stage 3 (DRAFT), updated through Stages 11–15

---

## 7. Quality Gates

### 6-Gate Approval System

Every asset must pass 6 sequential gates before deployment. No asset can skip a gate.

```
GATE 1: Initial QA (Automated + Manual)
   ↓
GATE 2: Art Direction Review
   ↓
GATE 3: Technical Review
   ↓
GATE 4: Compression Verification
   ↓
GATE 5: Deployment Staging
   ↓
GATE 6: Production Monitoring
```

### Gate 1: Initial QA

**Acceptance Criteria:**
- Automated checks (file integrity, resolution, color space)
- Manual QA checklist (15 criteria from AI_MEDIA_PIPELINE.md §7)
- All criteria ≥7, average ≥8.0
- No rejection triggers (see AI_MEDIA_PIPELINE.md §7 for list)

**Rejection Path:** If <8.0 average, proceed to Revision Loop (Stage 9B)

**Owner:** QA Specialist
**Time:** 20–30 minutes

---

### Gate 2: Art Direction Review

**Acceptance Criteria:**
- Asset aligns with ART_DIRECTION.md §1–13 visual language
- Asset matches brand personality (Considered, Warm, Tactile, Editorial, Quiet)
- If revision, compares favorably to approved v1 reference
- Design Lead signs off

**Rejection Path:** If not aligned, return to Revision Loop with specific feedback

**Owner:** Design Lead + Art Direction Steward
**Time:** 15–20 minutes

---

### Gate 3: Technical Review

**Acceptance Criteria:**
- Resolution matches specification exactly
- Aspect ratio is exact (16:9, 3:4, 21:9, etc.)
- Color space is sRGB
- File format verified (PNG source, before compression)
- No metadata leakage (EXIF removed)
- Tested on mobile, tablet, desktop
- Alt text prepared and accurate

**Rejection Path:** If technical issues, either fix exports or return to revision

**Owner:** Engineering + QA
**Time:** 10–15 minutes

---

### Gate 4: Compression Verification

**Acceptance Criteria:**
- WebP 90% ≤2 MB for images, ≤400 KB for social
- AVIF 82% ≤1 MB for images, ≤250 KB for social
- JPEG 90% ≤3 MB for images
- No visible artifacts in compressed versions
- File sizes documented in manifest

**Rejection Path:** If compression fails, re-compress with adjusted quality

**Owner:** Engineering
**Time:** 15 minutes

---

### Gate 5: Deployment Staging

**Acceptance Criteria:**
- Assets upload to staging CDN
- Image paths work (no 404s)
- Responsive srcsets generate correctly
- Next.js Image optimization successful
- No console errors on staging
- Core Web Vitals acceptable (LCP <2.5s, CLS <0.1)

**Rejection Path:** If staging fails, debug and fix before retrying

**Owner:** DevOps + Engineering
**Time:** 20 minutes

---

### Gate 6: Production Monitoring

**Acceptance Criteria:**
- Live in production for ≥7 days
- No user-reported issues
- CDN performance metrics within spec
- Image load times <1.5s p95
- Cache hit rate >90%
- No 4xx/5xx errors from CDN

**Rejection Path:** If issues emerge, either hot-fix or roll back (rare)

**Owner:** Engineering + DevOps
**Duration:** 7–14 days

---

## 8. Disaster Recovery

### Failure Scenarios & Recovery

The Asset Factory must be resilient to provider failures, data loss, and operational disruptions. This section documents recovery procedures.

### 8.1 Provider Unavailability

**Scenario:** Primary provider (Higgsfield) has API outage, pricing change, or quota exhaustion.

**Recovery:**
1. Immediately switch to Fallback 1 (FLUX or appropriate fallback per §3 matrix)
2. Use same prompt, adapted for new provider (see §5)
3. Generate replacement asset
4. QA normally (may need slightly relaxed thresholds if provider is lower-quality)
5. Update manifest with new provider name
6. Create new git commit noting provider change

**Prevention:**
- Monitor provider status dashboards daily
- Maintain relationship with 2+ providers at all times
- Test fallback provider monthly (generate 1 test asset)

**SLA:** Asset replacement within 24 hours

---

### 8.2 Credits Exhausted

**Scenario:** Monthly budget exhausted; cannot generate more assets with primary provider.

**Recovery:**
1. Switch to cost-optimized provider (FLUX or OpenAI)
2. For non-critical assets, reduce resolution:
   - Use 1024px native, then upscale to 4K post-process
   - Prioritize detail in upscaling (center content)
3. Batch remaining assets (if deadline allows)
4. Escalate to VP Product for emergency budget
5. Document cost per approved asset in retrospective

**Prevention:**
- Track monthly spend weekly
- Set provider-specific budget alerts at 70% and 90% consumption
- Maintain 20% budget reserve for revisions

**SLA:** Reduced-quality assets within 48 hours; full-quality within 7 days (after budget approval)

---

### 8.3 Git/CDN Failure

**Scenario:** Committed assets corrupted in Git LFS or CDN upload failed.

**Recovery:**
1. Verify integrity:
   ```bash
   sha256sum public/images/products/*.webp > current_checksums.txt
   diff current_checksums.txt src/assets/manifests/*/files/webp/checksum
   ```
2. If mismatch, restore from backup:
   - Git history has clean version; revert to last known-good commit
   - CDN has cache; flush old version, re-upload from Git
3. If backup unavailable:
   - Regenerate asset (Stage 5) using same provider + seed
   - Re-commit with note: "Regenerated [assetId] due to storage corruption"
4. Audit all manifests for corruption

**Prevention:**
- Weekly integrity checks (checksum validation)
- Git LFS quota monitoring
- CDN backup enabled

**SLA:** Corrupted assets restored within 4 hours

---

### 8.4 Prompt Lost or Unrecoverable

**Scenario:** Prompt used for an approved asset is no longer available (provider changed, lost documentation).

**Recovery:**
1. Review approved v1 asset (stored in `src/assets/reference/`)
2. Reverse-engineer prompt from asset:
   - Analyze lighting, composition, camera angle
   - Document analysis as "reconstructed prompt"
3. Update PROMPT_LIBRARY and manifest with reconstructed prompt
4. Regenerate asset using reconstructed prompt (should closely match v1)
5. If mismatch, use v1 approved asset (no regeneration needed)

**Prevention:**
- PROMPT_LIBRARY committed to Git (versioned)
- Manifest stores prompt ID + version
- Approved v1 assets stored as reference

**SLA:** Prompt recovered or asset re-generated within 7 days

---

### 8.5 Provider Discontinuation

**Scenario:** A provider shuts down, changes ToS (commercial rights), or pivots business.

**Recovery:**
1. Migrate to Fallback provider using prompt portability (§5)
2. Regenerate all affected assets
3. Batch regeneration to minimize cost
4. Validate against approved v1 references
5. Update manifest provider field + git history

**Prevention:**
- Maintain 2+ viable providers at all times
- Quarterly provider health audit
- Prompts written provider-agnostically (not provider-specific syntax)

**SLA:** Provider migration plan within 30 days; assets regenerated within 60 days

---

## 9. Cost Optimization

### When to Use Each Provider

| Use Case | Provider | Rationale |
|---|---|---|
| Hero images / Premium products | Higgsfield | Unmatched material realism; cost justified for brand-critical assets |
| Product variants (same SKU, diff color) | FLUX | Batch generation; cost 30% lower; acceptable quality for variants |
| Social media assets | FLUX or OpenAI | Resolution <1200px acceptable; cost-optimize for high volume |
| Rapid turnaround (newsletter) | OpenAI | Fastest turnaround; acceptable quality for non-hero assets |
| Video (hero) | Higgsfield | 24fps, loopable, 4K essential |
| Video (campaign) | Runway | Specialized for video; worth the cost for hero campaigns |
| Last-resort fallback | Imagen | If all others unavailable; lowest quality but works |

### Batch Generation Strategy

**Batch by Provider:**
- **Higgsfield batches:** 3–5 assets per week (budget-limited)
- **FLUX batches:** 20–30 assets per week (cost optimized)
- **OpenAI batches:** 10–15 assets per week (speed optimized)

**Sequence batches to avoid conflicts:**
1. Monday: Higgsfield (hero images + critical products)
2. Tuesday–Wednesday: FLUX (product variants, editorial fallbacks)
3. Thursday: OpenAI (social, newsletter, rapid refresh)
4. Friday: Monitor, revisions, compression

---

### Version Reuse Strategy

**When a previous season asset can be reused:**

| Scenario | Action | Save |
|---|---|---|
| Hero poster from SS26 → FW26 | Rotate/re-grade instead of regenerate | 100% cost |
| Product photo from SS26 → FW26 (same sku, not seasonal) | Reuse directly | 100% cost |
| Lifestyle image worn on S26 → can be reused FW26 | Reuse (if styling not seasonal) | 100% cost |
| Campaign image from SS26 | Regenerate (seasonal context changes) | 0% save |

**Reuse tracking:**
- Mark reused assets in manifest: `"version": "1_reused_fw26"`
- Document version chain: `"versionHistory": ["ss26", "fw26"]`

---

### Compression Savings

**Target file sizes for cost-aware delivery:**

| Asset Type | Uncompressed | WebP 90% | AVIF 82% | Savings |
|---|---|---|---|---|
| Product image (1800×2400) | 15 MB | 0.9 MB | 0.6 MB | 94% |
| Hero image (3840×2160) | 21 MB | 1.4 MB | 0.9 MB | 93% |
| Social card (1200×630) | 4 MB | 0.2 MB | 0.15 MB | 95% |
| Video 4K (12s) | 500 MB | 60 MB (H.265) | — | 88% |

---

## 10. Automation Roadmap

### Future State: Hands-Off Asset Factory

This section describes what the Asset Factory can become with 4–6 weeks of engineering automation work. These are architectural plans, NOT commitments to implement them now.

### 10.1 Prompt Registry (Automated)

**Current state:** Prompts scattered in MEDIA_PRODUCTION.md + PROMPT_LIBRARY scattered notes

**Future state:** Centralized prompt database

**Architecture:**
```
src/assets/prompts/
├── _index.json (registry)
├── ss26/
│   ├── hero-poster.json (prompt + metadata)
│   ├── linen-jacket-front.json
│   └── ...
└── fw26/
    └── ...
```

**Benefits:**
- Prompts versioned alongside assets
- Automated prompt diff tracking
- Provider adaptation layer (auto-translate Higgsfield → FLUX syntax)

---

### 10.2 Asset Registry (Automated)

**Current state:** Manifests in src/assets/manifests/{assetId}.json (manual creation)

**Future state:** Auto-generated manifest system

**Architecture:**
- Pre-generate manifest template when Stage 1 (Creative Brief) completes
- Auto-populate fields:
  - `collection`, `season`, `assetId` from request
  - `createdBy` from git user
  - `createdDate` from system time
- Fields filled in by subsequent stages

**Benefits:**
- Zero-manual manifest creation
- Consistent metadata across all assets
- Easier tracking

---

### 10.3 Automatic QA (Partial)

**Current state:** Manual QA checklist (15 criteria scored by human)

**Future state:** Automated scoring where possible

**Automatable checks:**
- File integrity (corrupted: auto-reject)
- Resolution match (exact: auto-pass)
- Color space (sRGB: auto-pass)
- No EXIF metadata (yes: auto-pass)
- File size within range (yes: auto-pass)
- Compression artifact detection (ML-based: ~70% accuracy)

**Manual review still needed for:**
- Luxury feeling (9/10)
- Editorial quality (9/10)
- Material realism (9/10)
- Lighting quality (9/10)
- Color harmony (9/10)
- Composition (9/10)

**Benefit:** Auto-reject 30% of failures (obvious corruptions), reducing manual review time 20%

---

### 10.4 Automatic Compression (Automated)

**Current state:** Manual conversion PNG → WebP/AVIF/JPEG

**Future state:** Batch conversion pipeline

**Architecture:**
```
# Trigger: Asset placed in src/assets/uncompressed/
# → Automatic conversion to WebP, AVIF, JPEG
# → Output to src/assets/compressed/
# → Record file sizes in manifest
```

**Technology:** Python + Pillow/ImageMagick, run post-Stage 9

**Benefit:** Reduce Stage 9 (Compression) time from 15 min to <2 min

---

### 10.5 Automatic Naming (Automated)

**Current state:** Manual naming following convention

**Future state:** Auto-rename on commit

**Architecture:**
```
# Pre-commit hook detects files in public/images/
# Validates against naming convention
# Rejects commits with non-compliant names
```

**Benefit:** Eliminate naming errors; ensure consistency

---

### 10.6 Automatic Deployment (Automated)

**Current state:** Manual Stage 13 (CDN upload) + manual Stage 14 (deployment)

**Future state:** Auto-deploy on git commit

**Architecture:**
```
# GitHub Actions trigger:
# 1. On git commit to main/assets
# 2. Detect new .webp files in public/images/
# 3. Upload to CDN (via CI/CD)
# 4. Deploy Next.js (includes image optimization)
# 5. Run smoke tests (image load, no 404s)
# 6. Update manifest with CDN URLs + git commit hashes
```

**Benefit:** Deploy in <5 minutes from approved git commit

---

### 10.7 Provider Health Monitoring (Automated)

**Current state:** Manual daily checks of provider status

**Future state:** Automated daily health checks

**Architecture:**
```
# Daily cron job:
# 1. Test Higgsfield API (generate 1 test image)
# 2. Test FLUX API (generate 1 test image)
# 3. Test OpenAI API (generate 1 test image)
# 4. Record results in monitoring dashboard
# 5. Alert #engineering if any provider down
```

**Benefit:** Detect outages in <1 hour vs. discovering during production

---

### 10.8 Credit Monitoring (Automated)

**Current state:** Manual weekly cost tracking

**Future state:** Real-time credit dashboard

**Architecture:**
```
# Query provider APIs weekly:
# - Higgsfield: credits remaining
# - FLUX: monthly spend
# - OpenAI: token usage
# → Dashboard: real-time cost burn rate
# → Alerts: at 70%, 90% of monthly budget
```

**Benefit:** Never hit unexpected budget limits

---

### 10.9 Approval Dashboard (Automated)

**Current state:** Manual asset spreadsheet tracking stages

**Future state:** Web-based approval dashboard

**Architecture:**
```
# Dashboard features:
# - List all assets in current sprint
# - Filter by stage (Stage 1-15)
# - Click to view asset + manifest
# - One-click approvals (Gate 1-6 sign-offs)
# - Export manifest to Git
```

**Benefit:** Reduce approval bottlenecks; clear visibility on pipeline

---

## 11. Governance

### Decision Authority

| Decision | Owner | Escalation |
|---|---|---|
| **Asset brief approval** | Product Manager + Design Lead | CEO (if scope unclear) |
| **Prompt creation/modification** | Design Lead + Engineering | Design Director (if brief conflicts) |
| **Provider selection** | Engineering | CEO (if cost impact >10%) |
| **QA gate approval** | Design QA specialist | Design Lead (if <8.0 average) |
| **Art Direction review** | Design Lead | Design Director (if unsure) |
| **Technical review** | Engineering | VP Eng (if technical risk) |
| **Compression approval** | Engineering | VP Eng (if quality at risk) |
| **Deployment approval** | Product Manager + Engineering | CEO (if prod risk) |
| **Provider replacement** | VP Eng + Design Director | CEO (strategic decision) |
| **Budget overrun** | CEO | Board (if significant) |

---

### Prompt Update Process

**When a prompt needs modification (after review failure):**

1. Design Lead analyzes why asset failed
2. Modifies prompt with specific guidance (e.g., "add more fabric texture detail")
3. Documents change reason in prompt comment
4. Creates new revision (v1.1, v1.2, etc. in PROMPT_LIBRARY)
5. Regenerates asset with new prompt
6. If passes QA, approves new prompt version
7. Uses new prompt version for all future assets of that type

**Example:**
```
// PROMPT: Hero Poster (v1.0)
"Natural-colorway linen jacket on limestone ledge..."

// PROMPT: Hero Poster (v1.1) — Reviewed Feb 2026
// Change reason: v1.0 output too soft; added "maximum sharpness"
"Natural-colorway linen jacket on limestone ledge...maximum sharpness..."
```

---

### Provider Evaluation & Replacement

**Annual provider review (every 12 months):**

1. **Evaluation criteria:**
   - Cost per approved asset (including revisions)
   - QA approval rate (% of first-generation assets passing ≥9.0)
   - Consistency (variance in approved scores)
   - Feature additions (new capabilities for Velora use case)
   - Support quality (response time, issue resolution)

2. **Scoring:**
   - Cost: 25%
   - Quality: 40%
   - Consistency: 20%
   - Innovation: 10%
   - Support: 5%

3. **Decision threshold:**
   - Score <75% → Consider replacement
   - Score 75–85% → Acceptable, monitor
   - Score >85% → Retain, increase allocation

4. **Replacement process (if needed):**
   - Select new provider based on evaluation
   - Test with 5 assets from current sprint
   - Compare against approved v1 references
   - If passes, migrate all future assets
   - Keep old provider as tertiary fallback

---

## 12. Future Vision

### How This Factory Scales

The Velora Asset Factory is architected to support:

- **Collections:** FW26, SS27, Limited Editions, Collaborations
- **Scale:** 26 → 100+ assets per season
- **Teams:** Single designer (now) → Multi-designer teams (future)
- **Providers:** 1 (Higgsfield) → 3–5 active providers
- **Automation:** 20% automated (today) → 80% automated (2027)

---

### FW26 & Beyond

**FW26 (Oct 2026):**
- Reuse SS26 hero video + poster (save 100% on video cost)
- Regenerate 26 new product images (seasonal context)
- Generate 16 new editorial assets (new campaign narrative)
- **Timeline:** 3 weeks (vs. 4 weeks for SS26 MVP)
- **Cost:** 30% lower (via reuse + batch optimization)

**SS27 (Apr 2027):**
- Fully automated prompt registry operational
- 50% of QA automated
- Approval dashboard live
- **Timeline:** 2 weeks
- **Cost:** 40% lower (reuse + automation + experience)

---

### Multi-Designer Expansion

**When hiring second designer (2027):**
- Asset Factory governance expanded: 2 Design Leads, Design Director
- Approval gates now: Lead A → Lead B → Director (prevents single-point-of-failure)
- Manifests track approval chain
- Prompt updates require both leads
- PROMPT_LIBRARY becomes team reference

---

### International & Collaboration

**If expanding to:Collaboration (e.g., luxury brand partnership):**
- Create new collection namespace: `collaboration_brand`
- Collaborate with partner on prompts (Partner Lead + Velora Lead)
- Generate assets with joint oversight
- Archive final Higgsfield-generated v1 as benchmark
- Reuse across both brands (licensed usage defined in manifest)

---

## Document Statistics & Summary

| Metric | Value |
|---|---|
| **Total Chapters** | 12 |
| **Total Sections** | 50+ |
| **Tables** | 35+ |
| **Code Examples** | 8 |
| **Workflow Stages** | 15 (detailed) |
| **Provider Comparisons** | 11 platforms |
| **Gates** | 6 quality gates |
| **Disaster Scenarios** | 5 + recovery |
| **Word Count** | ~12,000 words |

---

## Major Architectural Decisions

### 1. Provider Independence Over Single-Provider Optimization

**Decision:** Maintain 3+ viable providers rather than optimize for one.

**Rationale:** Single-provider dependence (vendor lock-in) is riskier than ~10% quality variance across providers. Brand consistency enforced via QA gates, not provider selection.

**Trade-off:** 10–20% higher operational complexity vs. 100% uptime guarantee

---

### 2. Manifest as the Source of Truth (Not Spreadsheet)

**Decision:** Every asset has a JSON manifest committed to Git; spreadsheets are read-only mirrors.

**Rationale:** Manifests are versioned, auditable, and enable automation. Spreadsheets are fragile and cannot be reliably parsed by scripts.

**Trade-off:** Requires discipline to keep manifests updated vs. more flexibility with spreadsheet-based tracking

---

### 3. 15-Stage Workflow Over Simplified Process

**Decision:** Formalize all asset transitions (Brief → Prompt → Manifest → Provider → Generation → QA → Art → Technical → Compression → Naming → Manifest → Git → CDN → Deployment → Monitoring).

**Rationale:** Each stage has clear entrance/exit criteria, enabling automation and preventing assets from "falling through cracks" or skipping critical reviews.

**Trade-off:** Longer individual asset timeline (2.5 weeks MVP vs. 1 week hypothetical shortcut) vs. zero skipped quality gates

---

### 4. Approval Gates at Distinct Checkpoints (Not Integrated)

**Decision:** 6 separate quality gates (Initial QA, Art Direction, Technical, Compression, Staging, Monitoring) owned by different teams.

**Rationale:** Each gate catches different issues. Integrated approval (single "thumbs up") risks missing problems that only a specialist would catch.

**Trade-off:** More handoffs, longer timeline vs. higher quality consistency

---

### 5. Prompt Portability Over Provider-Specific Optimization

**Decision:** Prompts written in provider-agnostic prose; adaptation layer translates to provider syntax.

**Rationale:** Enables fallback to any provider without completely rewriting prompts. Reduces barrier to switching providers when primary unavailable.

**Trade-off:** ~5% lower quality per asset (less provider-optimized) vs. 100% flexibility

---

## Potential Risks

### 1. Manifest Discipline

**Risk:** Manifests become outdated as assets are manually moved/renamed/deleted outside the factory.

**Mitigation:**
- Weekly audit: git ls-files public/images/ vs. manifests/ file list
- Pre-commit hook validates manifest exists for all tracked assets
- Dashboard flags "orphaned" manifests (in Git but asset removed)

---

### 2. QA Bottleneck

**Risk:** Design Lead's art direction review becomes blocking; no parallel QA/Art/Technical reviews.

**Mitigation:**
- Hire second Design QA specialist (parallel initial QA)
- Implement automated art direction checks (70%+ automation)
- Design Director can co-approve if Lead unavailable

---

### 3. Provider Price Changes

**Risk:** Unexpected price increase from primary provider (Higgsfield) mid-sprint.

**Mitigation:**
- Monthly cost cap in procurement contracts
- Real-time credit monitoring with budget alerts
- Fallback provider always active (test monthly)

---

### 4. Prompt Consistency Drift

**Risk:** As PROMPT_LIBRARY grows, old prompts conflict with new ones; asset tone becomes inconsistent across seasons.

**Mitigation:**
- Design Lead owns PROMPT_LIBRARY; any new prompt requires lead approval
- Annual prompt audit + consolidation
- Approved v1 assets serve as references when prompts updated

---

### 5. Manifest Corruption/Loss

**Risk:** Manifest JSON is corrupted or overwritten; asset metadata lost.

**Mitigation:**
- Git history is immutable backup (recover via git show)
- Weekly integrity checks (checksums)
- Manifest schema validation on every stage transition

---

## Future Recommendations

### Phase 1: Foundation (Complete)
- ✅ 15-stage workflow defined
- ✅ 6 quality gates defined
- ✅ Provider decision matrix complete
- ✅ Manifest standard defined
- ✅ Disaster recovery procedures documented

### Phase 2: Partial Automation (Q4 2026)
- Automated QA for 30% of checks (file integrity, resolution, EXIF)
- Automated compression pipeline (Stage 9: 15 min → 2 min)
- Credit monitoring dashboard
- Provider health checks (daily)

### Phase 3: Full Automation (Q2 2027)
- Prompt registry with auto-translation layer
- Manifest auto-population
- Approval dashboard (web UI, one-click sign-offs)
- Auto-deployment on git commit (CDN + production)
- Multi-designer governance framework

### Phase 4: Advanced Features (2027+)
- ML-based QA scoring (replace 60% of manual review)
- Version diffing (compare asset v1 vs. v2 automatically)
- Provider cost optimization engine (auto-select cheapest viable provider per asset)
- International asset reuse + licensing tracking

---

*This document is maintained alongside ART_DIRECTION.md and AI_MEDIA_PIPELINE.md. Version: 1.0, Last Updated: 2026-07-13. Next review: 2026-10-13.*
