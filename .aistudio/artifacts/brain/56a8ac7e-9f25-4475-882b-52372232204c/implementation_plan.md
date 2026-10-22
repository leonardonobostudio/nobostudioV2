# Creovibe - Header & Hero Banner Section (1:1 Template Recreation)

A pixel-accurate recreation of the **Creovibe Index-4** header and hero banner (`.banner-section-four`), matching the live production template down to the exact CSS geometry, typography (`Clash Display` & `Creato Display`), native asset shapes, and zero-overflow layout discipline.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions and constraints govern this build:
> - **Banner Scope Only**: As instructed ("ojo, solo estamos haciendo el banner"), we are rendering exclusively the top navigation header and the complete hero banner section, removing any unrequested trailing sections below.
> - **Zero Visible Overflow**: Full containment with `overflow: hidden` on `.banner-section-four`, eliminating horizontal scrollbars and ensuring clean desktop/mobile viewport containment.
> - **No Floating Cart**: The floating shopping cart button is completely removed.
> - **Exact Spacing & Breathing Room**: Matching the reference inspect values with `padding: 210px 0 0` (or `padding-top: 140px` on mobile/tablet) so the banner content sits gracefully below the fixed top bar.
> - **Authentic Typography & Assets**: Loaded local `@font-face` fonts (`Clash Display Semibold` for headlines, `Creato Display Regular` for the subtitle kicker, and `Manrope` for body copy), paired with the official icon shapes (`shape28`, `shape29`, `shape30`, `shape31`, `shape32`, `shape33`).
> - **Animation Engine**: Continuous 3D Y-axis rotation (`animation: rotateY 30s linear infinite`) on the 3D beaded torus, horizontal ease-bounce (`bounce-x`) on the technical coordinate sketch, and interactive pill toggle switch.
> - **Sign Up Action**: Clicking `Sign Up ↗` or the `Hey!` card arrow opens an interactive project brief modal with full form validation.

---

## 1. Overview & Core Concept

- **What It Does**: Renders the premier digital agency banner experience featuring monumental brutalist typography, floating organic 3D shapes, and precision agency social proof.
- **Target Audience / Persona**: Creative directors, enterprise technology clients, and brand founders seeking world-class digital craft.
- **Key Value**: Delivers exact visual fidelity to the reference template while maintaining modern React component structure and interactive state.

---

## 2. User Experience & Visual Design

### Key Layout Sections

1. **Main Header (`.main-header.header-style-four`)**:
   - Fixed top bar with `#000002` obsidian background and `border-b: 1px solid #2F2F2F`.
   - **Logo**: Creovibe wordmark + geometric spiral icon mark (`images/logo.png`).
   - **Navigation**: Clean single-line text links (`Home`, `Pages`, `Service`, `Projects`, `Blog`, `Contact`) with subtle hover states.
   - **Action**: High-voltage red-orange pill button (`Sign Up`) with embedded white circular arrow icon (`↗`).

2. **Hero Banner Section (`.banner-section-four`)**:
   - `padding: 210px 0 0; position: relative; overflow: hidden;`
   - **Background Texture**: Subtle dark diagonal hatch texture (`images/banner/banner3-bg1.png`).
   - **Shape 1 (3D Torus)**: `shape29.png` positioned at `top: 224px; right: 70px;` with continuous `rotateY 30s linear infinite` 3D rotation.
   - **Banner Title Box**:
     - **Sub-title**: `— DIGITAL GROWTH` with 39px orange bar, `font-family: 'Creato Display'`, 32px font size, `#F5F7F5`.
     - **Title**: `DESIGN & <br> TECHN [shape28] LOGY` in `Clash Display`, uppercase, `160px` font size (scaling down on smaller viewports).
     - **Shape 2 (Doodle Grid)**: `shape31.png` floating beside `DESIGN &` with smooth `bounce-x` animation.
     - **Pill Slider**: `shape28.png` embedded smoothly inside `TECHN [O] LOGY` with interactive toggle state.
   - **Outer Box 2 (Information & Proof)**:
     - **Left Column**: Orange geometric brutalist arrow logo (`shape30.png`, 192px × 193px).
     - **Vertical Divider**: 194px tall hairline line (`#2F2F2F`).
     - **Agency Text**: *"We blend creative design with cutting-edge technology to build digital experiences that are visually stunning, highly functional, and built to scale."* (Manrope, 16px, line-height 28px).
     - **Social Proof**: 3 avatar portraits (`info3.jpg`, `info4.jpg`, `info5.jpg`) + circular orange `+` badge, paired with animated counter `18k+` and text `customers word.`
     - **Hey! Card**: Positioned on the right (`banner-info2`), 471px wide with `#101010` background, 20px radius, watermark circle `shape33.png`, 72px `Hey!`, 32px `Word - Class <br> Digital Agency`, and white circular button (`shape32.png`).

---

## 3. Key Product Decisions & Trade-Offs

- **Asset Serving Strategy**: Using authentic local assets (`/public/fonts/` and `/public/images/`) rather than external CDNs or approximate SVG approximations, guaranteeing zero visual drift from the reference template.
- **Strict Viewport Containment**: Setting `overflow: hidden` on both `body` and `.banner-section-four` to eradicate horizontal scrollbars while preserving full responsive fidelity.
- **Interactive Enhancement**: While maintaining the visual purity of the HTML template, we enhance the pill slider and modal with fluid state transitions so the banner feels alive and responsive.

---

## 4. Technical Architecture & Component Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                          App.tsx                                │
├────────────────────────────────┬────────────────────────────────┤
│    MainHeader.tsx              │    ContactModal.tsx            │
│  - Creovibe Logo               │  - Project Inquiry Form        │
│  - Nav Links                   │  - Focus Area Selection        │
│  - "Sign Up ↗" Button         │  - Immediate Dispatch Feedback │
├────────────────────────────────┴────────────────────────────────┤
│                     BannerSectionFour.tsx                       │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ Background Shape: banner3-bg1.png                         │  │
│  │ 3D Rotating Torus: shape29.png (animation: rotateY 30s)   │  │
│  │ Title Box:                                                │  │
│  │   - Kicker: DIGITAL GROWTH (Creato Display)               │  │
│  │   - Doodle Grid: shape31.png (animation: bounce-x)       │  │
│  │   - Headline: DESIGN & / TECHN [shape28] LOGY             │  │
│  │ Lower Box:                                                │  │
│  │   - Orange Arrow: shape30.png                             │  │
│  │   - Hairline Divider: 194px #2F2F2F                       │  │
│  │   - Statement Text & Avatar Stack (info3, info4, info5)   │  │
│  │   - Counter: 18k+ customers word                          │  │
│  │   - "Hey!" Card (shape33 watermark + shape32 arrow button)│  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Verification Plan
1. **Desktop Viewport (1440x900)**: Verify exact top spacing (210px), no horizontal scrollbars, exact font geometry (`Clash Display` / `Creato Display`), and clean asset alignment.
2. **Interactive States**: Verify `Sign Up` opens modal, pill toggle interacts, and `Hey!` card button triggers contact flow.
3. **Responsive Breakpoints**: Verify tablet and mobile viewports scale fonts without clipping or horizontal overflow.
