# Velora Design Bible

> **Wear Your Identity.**

This document is the permanent source of truth for every design decision made on the Velora platform. It defines not just what the product looks like, but why it looks that way and what it must never become.

---

## 1. Product Vision

Velora is not a fashion store. It is a personal expression studio disguised as one.

Most e-commerce platforms present clothing as inventory. Velora presents clothing as a starting point. The shopper arrives not to browse and buy, but to discover, personalize, and claim. Every interaction is designed to deepen that sense of authorship — the feeling that what ends up in the cart is genuinely theirs.

The 3D designer is not a feature layered on top of a conventional shop. It is the product. Everything else — the catalog, the cart, the checkout — exists to support the moment when a person stands in front of a digital garment and makes it their own.

**The experience the user should feel:** unhurried confidence. They are not navigating a store; they are making something.

---

## 2. Brand Philosophy

**Velora exists at the intersection of craft and technology.**

The brand is premium without being cold. It carries the restraint of luxury fashion — quiet confidence, considered use of space, nothing excessive — while remaining approachable and human. Velora does not perform exclusivity through barriers; it earns it through quality.

**Three words that define the brand character:**

- **Precise** — Nothing accidental. Every element earns its place.
- **Immersive** — The user is pulled in, not pushed through.
- **Personal** — The platform reflects the user, not the other way around.

The brand does not shout. It does not use urgency tactics, countdown timers, or discount badges. It trusts the product to speak.

---

## 3. Design Principles

These principles govern every design decision, from micro-interactions to full-page layouts.

### 3.1 Intentionality Over Decoration

Every visual element must serve a function. Decoration for its own sake is a failure of design. If a line, shadow, color, or motion cannot be justified by the experience it creates, it is removed.

### 3.2 Restraint as Luxury

The clearest signal of a premium product is what is not there. Velora's interface uses space generously, surfaces sparingly, and never competes with the product being presented. The garment is always the hero.

### 3.3 Continuity of Experience

The transition from browsing to configuring to ordering must feel like a single, unbroken experience — not a series of page loads. Interactions should connect to one another. The user should never feel like they left one app and entered another.

### 3.4 Honest Feedback

Every action produces an immediate, clear response. The interface never leaves the user wondering whether something worked. Loading states, error states, and success states are designed with the same care as the idle state.

### 3.5 Accessibility as Baseline

Accessibility is not a compliance checkbox. It is a design constraint applied from the beginning. An interface that only works for one type of user is a broken interface.

---

## 4. Visual Language

The visual language of Velora is defined by three qualities: **depth, precision, and restraint**.

Depth is expressed through the 3D canvas — the literal rendering of garments in three dimensions — and through subtle layering in the flat UI: gentle elevation, careful shadow, considered z-axis. The interface has volume without being heavy.

Precision is expressed through layout. Grids are strict. Alignment is exact. Typography is measured. Nothing is approximated.

Restraint is expressed through what is absent. Gradients are used with purpose. Effects are earned. The palette is limited. Ornament is eliminated.

---

## 5. Color Philosophy

Velora's color palette is rooted in the language of high fashion: neutrals dominate, with a single carefully chosen accent that carries all intent.

**Principles:**

- **Neutrals carry the surface.** Backgrounds, containers, and structural elements live in a tight range of whites, off-whites, near-blacks, and warm grays. These tones recede so that content can advance.
- **One accent, used with discipline.** A single brand accent color is applied to primary calls to action, active states, and key interactive moments. It does not appear as decoration. It appears when the user needs to take action or when the interface is communicating a result.
- **Color conveys meaning.** System colors — success, warning, error — are reserved for semantic use only. They are never co-opted for decorative purposes.
- **Dark mode is first-class.** The dark palette is not an afterthought or an inversion. It is designed independently to preserve the same sense of depth and luxury in low-light environments.
- **Color never carries information alone.** For every place color communicates state, there is a secondary signal: an icon, a label, a shape change. Users who cannot distinguish color do not miss information.

---

## 6. Typography Principles

Typography in Velora is functional hierarchy made visible.

- **Two typefaces maximum.** A serif or refined sans-serif for display headings; a neutral, high-legibility sans-serif for body and UI text. No decorative fonts.
- **Scale is the primary differentiator.** Size, weight, and tracking create hierarchy — not color or special effects. A heading is a heading because it is large and set in the display face, not because it is colored differently.
- **Body text is generous.** Line height and measure are set for comfortable reading, not space efficiency. The reader is never rushed.
- **Tracking is used for emphasis, not decoration.** Uppercase, widely-tracked text is reserved for category labels, status indicators, and UI metadata — contexts where the visual rhythm complements a short, fixed string.
- **Typography scales responsively.** Heading sizes decrease at smaller breakpoints in proportion, not arbitrarily. The scale relationship is preserved.
- **Never center body text.** Centered text is reserved for short, display-level copy: hero taglines, confirmation messages, empty state headings. Paragraphs are always left-aligned.

---

## 7. White Space Philosophy

White space is the most underused design element in e-commerce. Velora treats it as intentional structure.

- **Space signals value.** Generous space around a product communicates that it deserves attention. Tight space communicates urgency or bulk, which is antithetical to the brand.
- **Breathing room is non-negotiable.** Every section, card, and component has internal padding that is never reduced for the sake of fitting more content. Content is curated, not compressed.
- **Vertical rhythm is maintained.** Spacing values follow a defined scale. Arbitrary values are not introduced. The eye should move through a page with a consistent sense of pace.
- **Negative space is active.** A large area of empty background is not wasted space — it is directing attention toward what surrounds it.

---

## 8. Layout Philosophy

- **12-column grid for structure, exception-based layout for expression.** Most content follows the grid. Hero sections, 3D experiences, and editorial moments may break it intentionally — but only when the break serves a clear purpose.
- **Content defines container size.** Containers do not expand to fill available space when the content does not warrant it. Maximum widths exist to preserve reading comfort.
- **Mobile layout is designed separately, not derived.** The mobile experience is not a collapsed version of the desktop. Navigation, spacing, and component hierarchy are reconsidered for the smaller context.
- **Asymmetry is permitted, symmetry is not required.** Velora's layouts do not pursue symmetry for its own sake. Balanced tension is often more visually interesting than mirrored composition.

---

## 9. Motion Philosophy

Motion in Velora communicates, it does not perform.

- **Every animation has a job.** Transitions communicate spatial relationships. Reveals communicate sequence. Responses communicate state. An animation that does none of these things does not exist.
- **Subtlety is the standard.** Durations are short. Easing curves are natural. Nothing in the interface bounces, spins, or calls attention to the mechanism of animation itself.
- **Motion respects preference.** All non-essential animation is suppressed for users who have enabled reduced-motion in their operating system.
- **The 3D canvas is the exception.** The product viewer has richer, more expressive motion — rotation, material transitions, lighting shifts — because motion is the product there. It is the only context where motion is the point.
- **Page transitions are light.** Route changes use subtle fade or slide transitions that orient the user spatially without adding perceived load time.

---

## 10. Component Philosophy

- **Components have single, clear responsibilities.** A component that does two things is a candidate for splitting. A component that does ten things is a bug.
- **Composition over configuration.** Components are designed to be composed: slot-based, children-driven, with minimal and obvious props. Configuration through a wall of boolean props is avoided.
- **Variants are explicit.** When a component has variants (e.g., primary/secondary button, product card in list vs. grid), the variants are named and documented — not controlled by arbitrary prop combinations.
- **No internal layout assumptions.** A component does not dictate where it sits on a page or how it is spaced relative to siblings. Layout is the responsibility of the parent.
- **Components are owned by the design system.** UI primitives are not built ad hoc within feature folders. They live in the design system and are imported everywhere.

---

## 11. Image Philosophy

- **Product images are always the largest element on the page.** Nothing competes with them for visual attention when they are present.
- **Images are never stretched or distorted.** Aspect ratios are respected. Cover crops are explicit and approved, not browser-default.
- **Image quality is non-negotiable.** The platform never displays low-resolution, pixelated, or incorrectly colored product images.
- **Images have meaningful alt text.** Every product image description enables a visually impaired user to understand what the garment looks like.
- **Skeleton states match image dimensions.** Loading placeholders match the exact size of the image being loaded. There is no layout shift on image load.

---

## 12. 3D Philosophy

The 3D experience is the distinguishing feature of the platform. It is held to a higher standard than the rest of the UI.

- **Performance before fidelity.** A 3D model that renders at 60fps with good materials is more valuable than a high-polygon model that stutters. Target frame rate is always the primary constraint.
- **The model is a canvas, not a demo.** The 3D viewer exists so the user can make decisions — color, material, personalization — not to show off technical capability. The UX around the viewer must support that decision-making, not distract from it.
- **Real-time feedback is mandatory.** Every change the user makes — color swap, material change — is reflected immediately in the 3D view. Latency between user action and visual response is unacceptable.
- **Lighting is considered, not default.** 3D scenes use intentional lighting setups that present garments accurately. Lighting communicates texture and material, not just shape.
- **Fallback is graceful.** On devices that cannot run the 3D viewer, a high-quality image gallery is provided. The user is not stranded.

---

## 13. Luxury Principles

Velora is a premium brand. These are the non-negotiable signals of that positioning.

- No countdown timers. No urgency copy. No "Only 3 left!" badges.
- No dark patterns. No disguised unsubscribe flows. No pre-checked opt-ins.
- No visual clutter in the purchase path. Between intent and completion, there is no advertising, no upselling overlay, no interruption.
- Error messages are calm and helpful, never accusatory.
- Confirmation states feel like a moment, not a notification.
- The empty cart is not an apology — it is an invitation.

---

## 14. Accessibility Principles

- **WCAG 2.1 AA is the minimum.** Contrast ratios, keyboard navigation, and screen reader compatibility are baseline requirements, not enhancements.
- **Keyboard navigation is complete.** Every interactive element is reachable and operable via keyboard. Focus states are always visible — never hidden with `outline: none` without an equivalent.
- **Focus management is intentional.** When a dialog opens, focus moves to it. When it closes, focus returns to the trigger. Modal flows are navigable entirely by keyboard.
- **ARIA is used correctly or not at all.** Incorrect ARIA is worse than no ARIA. Roles and attributes are applied only when the semantic HTML element is insufficient.
- **Reduced-motion preference is honored.** Animations that serve no functional purpose are disabled for users who have enabled the OS-level reduced-motion setting.

---

## 15. Performance Principles

- **Time to First Interaction is the primary performance metric.** The user must be able to do something useful as fast as possible.
- **Images are always optimized.** No uncompressed images are served. The Next.js Image component is used universally. WebP and AVIF are served where supported.
- **3D assets are budgeted.** Individual GLB files have a maximum size limit. Models are compressed, LOD-aware where possible, and loaded progressively.
- **No performance regression without review.** Core Web Vitals targets are tracked. Any change that degrades them requires explicit justification.
- **Bundle size is monitored.** Every new dependency is evaluated for its weight contribution. Tree-shaking is verified. Large libraries with small-use cases are replaced with purpose-built alternatives.

---

## 16. Things We Never Do

These are absolute. They are not context-dependent.

- We never use stock photography of generic people modeling generic clothing.
- We never display a spinner with no expected duration when we can provide a progress indicator or skeleton.
- We never use `!important` in CSS without a documented override justification.
- We never truncate product names without an accessible way to reveal the full text.
- We never ship a feature with a visible TODO or placeholder text.
- We never route around the design system by hardcoding one-off colors, spacing values, or font sizes.
- We never put two calls to action of equal visual weight next to each other.
- We never add animations to paths the user traverses multiple times per session (cart open, filter toggle, quantity update).
- We never display prices without a currency symbol.
- We never allow a broken state to persist silently — every error state has a clear recovery path.
