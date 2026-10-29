# Adding & Managing Code Scholar AI Reels via Markdown

This guide explains how to add, edit, or customize Instagram educational video lessons for **Code Scholar AI** in the EduTech Diploma Learning Hub.

The platform uses a **dynamic Markdown loader architecture**: you do **not** need to touch React components (`ReelsPage.jsx`, `ReelCard.jsx`, `FeaturedReelHeroCard.jsx`) to update or publish new videos.

---

## 1. Directory Structure

All video reels are stored as individual Markdown files inside `content/reels/`:

```text
content/reels/
├── reel_De1Dg5Myz9n.md   # Featured Reel (Homepage)
├── reel_Dbd0y4HzF2O.md   # Reel 1 (Programming)
├── reel_DcVVqenSObb.md   # Reel 2 (Web Development)
├── reel_DchPS-1zAGD.md   # Reel 3 (Data Science)
├── reel_DcrR81LzSxk.md   # Reel 4 (Automation)
├── reel_DdUcOXqTTKy.md   # Reel 5 (Career Learning)
├── reel_DeLApOByIQs.md   # Reel 6 (IoT & Embedded)
└── reel_DeYlCfpyqvz.md   # Reel 7 (Software Tools)
```

---

## 2. YAML Frontmatter Specification

Every Reel file begins with a YAML frontmatter block between `---` markers:

```yaml
---
id: "De1Dg5Myz9n"
title: "AI & Emerging Tech Overview"
description: "Featured educational reel exploring artificial intelligence, programming, and real-world technology concepts."
topic: "Artificial Intelligence"
category: "Artificial Intelligence"
instagramUrl: "https://www.instagram.com/reel/De1Dg5Myz9n/"
thumbnail: ""
localVideo: ""
featured: true
published: true
subjectId: "iot"
unitId: ""
---

Optional educational notes or transcript.
```

### Field Definitions

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | String | The Instagram shortcode ID (e.g. `De1Dg5Myz9n`) |
| `title` | String | Concise title for the reel. If left empty, defaults to `"Educational Reel"` |
| `description` | String | One to two sentence summary of what the reel teaches |
| `topic` | String | Specific syllabus or technology topic (e.g., `"Arduino"`, `"REST APIs"`) |
| `category` | String | One of the 7 official gallery categories (see below) |
| `instagramUrl`| String | Official Instagram Reel URL: `https://www.instagram.com/reel/<id>/` |
| `thumbnail` | String | Optional URL or path to a custom 9:16 poster image |
| `localVideo` | String | Optional path to an authorized local `.mp4` file for native HTML5 autoplay |
| `featured` | Boolean| Set to `true` on one reel to display it in the homepage hero |
| `published` | Boolean| Set to `true` to display in the gallery, or `false` to keep as draft |

---

## 3. Supported Categories

The gallery supports filtering across these standard categories:
1. `Artificial Intelligence`
2. `Programming`
3. `Web Development`
4. `Data Science`
5. `Automation`
6. `Career Learning`
7. `Other Technology Topics`

---

## 4. Local Video Autoplay Behavior

If an authorized MP4 copy of a Reel is available, place it in `public/videos/` and set:

```yaml
localVideo: "/videos/reel_De1Dg5Myz9n.mp4"
```

The system automatically handles:
- `autoplay`, `muted`, `playsInline`, `loop`
- Visible pause/play toggle control
- **Viewport Observer**: Pauses playback when scrolled out of view
- **Tab Inactivity**: Pauses when the student switches browser tabs
- **Reduced Motion**: Respects user's system preferences

If no local video file exists, the system automatically displays a high-fidelity topic illustration with a direct "Watch on Instagram" action and interactive modal player.

---

## 5. Verification & Testing

Verify that all Reel links and markdown files pass automated validation:

```bash
npm run test:parity
npm run build
```

