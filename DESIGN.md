---
name: Igor P. Ribeiro — Editorial Engineering
description: CROX-inspired editorial portfolio approved on 19 October 2026. Light surfaces, structural dark borders and orange accents; the phone entry retains its dark setting and central zoom.
colors:
  paper: "#e3e7eb"
  ink: "#1a1b1c"
  signal: "#ff5f14"
  white: "#ffffff"
  secondary-text: "#555a5d"
  rule: "#7c8082"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontWeight: 600
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "Archivo, sans-serif"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, Archivo, sans-serif"
    fontSize: "17px"
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "11px"
    lineHeight: 1.5
rounded:
  surface: "0px"
  device: "26px"
  entry-device: "38px"
  circle: "50%"
---

# Approved direction

The user approved the CROX visual language and a complete replacement of the previous portfolio architecture. The phone entry with central zoom is preserved. This document replaces Vitrine Noturna for the current site.

## Composition

Full-width sections enclosed by 3px dark rules. Hero and footer lettering serve as large typographic landmarks. Nine-column guide lines belong to the hero's technical composition. Alternate paper, white, ink and orange surfaces. Retain square controls and structured metadata. The exceptional circular elements are the platform seal and technical diagram rings.

Home: identity, mobile demonstration, positioning, two selected projects, interactive expertise, engineering principle, three-step process, contact footer.

Pages: `/work`, `/work/:slug`, `/about`, `/services`, `/process`, `/contact`, and the existing `/ferramentas`. The header navigation retains access to tools. Four project narratives preserve confidentiality and factual experience. No manufactured dates, metrics, credentials or client screenshots.

## Type and media

Archivo is the available display alternative to the reference's Apfel Grotezk. Geist supplies the introductory body voice. Hero lettering intentionally exceeds the ordinary heading scale. Ordinary headings use 32–58px; page headings 55–135px; body 15–20px; metadata 9–12px. Text inside device illustrations is scaled graphic content, not a product control.

Conceptual mobile representations use paper screens, grey device frames, orange actions and ink backgrounds; project variants may use muted grey or orange backgrounds. Captions identify every representation as conceptual and free of client data. The personal photograph is real and displayed in its original colors.

## Behavior

Header remains sticky. Active navigation uses ink fill. Mobile navigation opens under the header, supports Escape and closes after route navigation. Language remains PT/EN on every route.

Expertise buttons expose `aria-pressed` and update a polite live region. Project tiles navigate to individual accounts. Contact uses working direct links instead of a simulated form.

The phone entry stays dark with its existing geometry. Clicking or pressing Enter starts `device-enter`: 1× → 1.3× → 16×, centered on the device. The screen ends on paper to connect to the new home. Completion follows `animationend`, with immediate access for reduced motion. Background content is inert and scroll is locked during the entry.

## Responsive and accessibility

At 760px and below, navigation collapses, the hero leads with the name, and columns stack. All substantive content remains available. Controls keep visible focus, meaningful labels and practical hit areas. Transitions respect reduced motion. Use structural borders rather than decorative shadows; the conceptual device alone may cast a depth shadow.

## Home scenes — Imogen interaction reference

The home is now an isolated viewport stage below the header, inspired by Imogen's scene navigation. Eight scenes: identity, mobile system, point of view, selected work, expertise, engineering principle, process, contact. Only the active scene is rendered visibly and available to keyboard/readers; other regions use native `hidden`.

Scroll at a scene boundary requests the next/previous scene. A 350ms scale-and-mask exit finishes before the incoming scene expands over 550ms. Opaque backgrounds prevent adjacent content from showing at rest or during transitions. Wheel momentum is briefly blocked during a change. Tall content retains native scrolling within its own scene, including at high zoom and on phones; only reaching its edge allows advancement. Touch swipes, Page Up/Down, arrows, Home/End and explicit section controls provide alternate navigation. Reduced motion switches directly.

Each scene owns its composition: paper editorial title; full-height technical device room; dark statement; contained two-project gallery; white expertise index with technology logos orbiting the central icon; orange typographic principle; large three-step process; dark contact finale. Inner pages keep ordinary document scrolling. The phone entry and central zoom stay intact.

Technology orbits reuse local React Native, Expo, TypeScript, Android and Java marks, selected for each capability. A 28-second rotation with counter-rotation keeps logos upright. Hover pauses motion; hidden scenes pause it; reduced motion uses a static distributed arrangement.

## Expertise content update

Expertise now has six choices: Interface (React Native, Tailwind CSS, StyleSheet, styled-components), Native integrations (Android, iOS, Java, Kotlin, Swift), Offline data (Redux, MobX, Zustand, SQLite, Async Storage), Delivery (App Store, Google Play, Expo), Backend (Node.js, Java), Infrastructure (Oracle OCI). StyleSheet uses the React Native mark because it is a React Native API. Tool access appears exclusively in the header navigation; it is not a home scene or a footer link. Navigation collapses up to 1100px to accommodate the additional link.
