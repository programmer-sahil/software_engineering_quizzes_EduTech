# EduTech Study Reels & Cheat Sheets Authoring Guide

> **Phase 07 Standard Specification**  
> Validated by `src/content/reelsRegistry.js` and `src/content/cheatSheetNormalizer.js`.

---

## 1. Cheat Sheets Authoring & Publishing

Cheat sheets are concise, high-retention revision documents designed to be read in 1–2 minutes before diploma examinations.

### Schema Structure (JSON / JavaScript)

```javascript
export const myTopicCheatSheet = {
  id: "iot-u2-cs-01",
  title: "IoT Protocol Standardization Matrix",
  subjectId: "iot",
  unitId: "2",
  unitTitle: "Unit 2: IoT Protocols",
  keyTerms: ["MQTT", "CoAP", "WebSocket", "Payload", "Broker"],
  points: [
    "MQTT is an OASIS standard messaging protocol using a Publish/Subscribe architecture over TCP.",
    "CoAP operates over UDP and is designed for constrained web devices (RFC 7252).",
    "WebSocket enables full-duplex communication over a single long-lived TCP connection.",
    "Zigbee (IEEE 802.15.4) provides low-power mesh networking for local sensor clusters."
  ],
  quickBox: "Exam Tip: Contrast MQTT (TCP, Broker-based) vs CoAP (UDP, Client-Server) for 4-mark comparison questions.",
  status: "published" // or "draft"
};
```

### Honest Reading Time Calculation
Reading times in EduTech are **never hardcoded or faked**. They are calculated using standard adult reading velocity:
$$\text{Minutes} = \max\left(1, \left\lceil \frac{\text{Total Word Count}}{200} \right\rceil\right)$$
All terms, bullet points, callouts, and explanations contribute to the exact word count.

### Print & PDF Export Architecture
- Every cheat sheet includes a **"Print / PDF"** trigger invoking `window.print()`.
- Specialized print styles in `src/styles/index.css` (`@media print`):
  - Strip navigation, drawers, interactive buttons, floating elements, and background mesh.
  - Render high-contrast black typography on white canvas.
  - Apply `page-break-inside: avoid` to keep cheat sheet blocks intact on a single page.

---

## 2. Instagram Reels & Micro-Learning Video Guide

### Strict Anti-Hallucination Policy
- **Never scrape, re-upload, auto-download, or invent Instagram posts or links.**
- Only authentic video lessons recorded and published by the verified instructor are admitted into the registry.
- Unfilled drafts (`status: 'draft'`) or entries with missing URLs are **strictly hidden from student views**.
- When 0 published reels exist for a subject or unit, the system honestly presents a *"Curated Lessons in Production"* preview card with syllabus topics and a direct WhatsApp request link, rather than misleading broken video players.

### Verified Instagram URL Validation
The validator in `src/content/reelsRegistry.js` enforces the following pattern:
```regex
^https:\/\/(www\.)?instagram\.com\/(reel|p)\/([A-Za-z0-9_-]+)\/?(\?.*)?$
```

Valid Examples:
- `https://www.instagram.com/reel/C2xyz123/`
- `https://instagram.com/reel/DA_abc456/?igsh=123`
- `https://www.instagram.com/p/C7def890/`

Invalid Examples (Rejected by validator):
- `http://instagram.com/...` (Insecure HTTP rejected)
- `https://facebook.com/...` (Incorrect platform)
- Empty strings or malformed URLs.

### Schema Structure (JSON / JavaScript)

```javascript
import { registerReel } from '../content/reelsRegistry.js';

registerReel({
  id: "reel-iot-u5-01",
  title: "Arduino Uno Pinout in 60 Seconds",
  url: "https://www.instagram.com/reel/YOUR_VERIFIED_REEL_ID/",
  platform: "instagram",
  subjectId: "iot",
  unitId: "5",
  topics: ["Arduino", "Hardware", "Pinouts"],
  thumbnail: null, // Optional authorized image path (e.g. '/assets/reels/arduino.jpg')
  durationSeconds: 58, // Exact video duration if known
  description: "Quick breakdown of 14 digital I/O pins, 6 analog inputs, and power rails on the Arduino Uno.",
  status: "published" // Change to 'published' only when verified URL is in place
});
```

### Privacy & Accessibility Rules
1. **Link-out First**: Primary action is an external button opening the official Instagram post in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
2. **Zero Autoplay**: Video embeds NEVER autoplay on page load to conserve mobile data and prevent audible disruption.
3. **Click-to-Load Embed**: Embed previews require an explicit click on *"Preview in Player"*.
4. **Resilient Thumbnails**: If no authorized thumbnail is supplied, a dark gradient fallback with the Instagram glyph is displayed (no broken media frames).

---

## 3. Instructor Checklist for Publishing New Content

- [ ] Accurate syllabus topic title.
- [ ] For cheat sheets: 3–6 reviewed revision points, key terms, and 1 memory hook.
- [ ] For reels: Official original Instagram URL tested in browser.
- [ ] Correct `subjectId` and `unitId`.
- [ ] Run `npm run test:parity` to verify schema validation and cryptographic checksums.

