---
name: Igor P. Ribeiro — Black & Red
description: Pure black portfolio with restrained red accents and a soft pointer-following light.
colors:
  background: "#000000"
  text: "#ededed"
  primary: "#e62323"
  primary-hover: "#be1515"
  muted: "#ababab"
  surface: "#0d0d0d"
  surface-hover: "#1a1a1a"
  rule: "#2b2b2b"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(44px, 6vw, 80px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist, Archivo, sans-serif"
    fontSize: "17px"
    lineHeight: 1.75
rounded:
  project: "16px"
  control: "8px"
---

## Overview
The user explicitly replaced the light ground with true black. Floema informs the open composition; Kleanity and iMarketina inform restrained content entrances. Text, bilingual facts, project accounts and native document scrolling stay central.

## Colors
Main ground, header and footer are #000000. Pale red accents keep actions readable. Text uses warm off-white and neutral gray. Tonal project surfaces are almost black. No white tiles or decorative grids.

## Typography
Archivo headings, Geist body. The three-paragraph summary explains mobile/full-stack practice, Globalsys application domains and native/backend/release experience. No invented metrics or client claims.

## Layout
The 1280px open document contains identity, summary, technologies, projects, experience and education. Technologies remain immediately after the summary. The Globalsys entry links to the five technical accounts. At 850px and below, the identity and navigation wrap; the technology grid collapses at 480px.

## Elevation & Depth
One subtle red light follows a fine pointer behind content. It uses the existing AmbientBackground component, with 8% interpolation toward the latest pointer position. Animation frames stop when settled, when the pointer leaves or focus is lost. Coarse pointers and reduced motion suppress it. No decorative grid, ambient loops, custom cursor replacement or pointer interception.

## Shapes
Projects use rounded tonal surfaces. Technology logos sit directly on the background without individual square tiles. The native group has a divider rather than an isolated gradient box. Apple and Expo render white on black; brand colors remain on other marks.

## Components
Header, portfolio routes, Tools and footer share dark tokens. Focus remains visible. Home content entrances trigger once per individual item: 800ms masked titles, 800ms project arrivals, 650ms lateral technology groups, 750ms experience entries and 700ms copy. Icons settle over 2600ms with 80ms stagger capped at 320ms. Reduced motion disables these spatial effects; focus cancels item entrances. Content is visible by default.

Previous technology direction (commit 91bd3b8) had category selection and orbiting logos. It is historical evidence for a future revision; it is not restored in this task. The user plans to supply further technology-layout ideas.

## Do's and Don'ts
Preserve real content, confidentiality and EN/PT parity. Keep native scrolling. Do not restore the light page ground, viewport scenes, scroll locks, fake app screens or giant decorative footer text. Keep pointer motion subtle and behind readable content.

The user explicitly rejects pink and rose tones: accents are true red #e62323, hover #be1515, with white button labels and neutral grayscale text. The pointer light uses red rgba(190,25,25,.17). React and React Native use the local React SVG; React web and Electron desktop have separate technology groups. Satro is the fifth project, confirmed by Igor as a Globalsys desktop application using Electron. Its public description states only that fact, with no invented functionality or metrics.

### Responsive navigation checks

The navigation collapses through 850px and closes automatically when crossing back to 851px or wider, restoring page scroll and inert states. The dropdown scrolls within the remaining viewport height in landscape. Escape restores focus to its trigger. Language controls are 44px wide in the collapsed header. Tools places its page heading on its own block with 32px vertical spacing. Verified in Chromium through ego-lite at 320, 390, 768, 1024 and 1440px, with portrait/landscape menu checks; this is viewport emulation, not physical-device validation.
