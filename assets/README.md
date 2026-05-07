# Asset Placeholders

This folder uses the following structure for all portfolio assets:

```text
public/
  assets/
    profile/
      sahil-main.jpg
      teaching-main.jpg
    teaching/
      teaching1.jpg
      teaching2.jpg
      teaching3.jpg
      teaching4.jpg
      teaching5.jpg
      teaching6.jpg
      teaching7.jpg
      teaching8.jpg
    projects/
      project1.jpg
      project2.jpg
      project3.jpg
      project4.jpg
      project5.jpg
      project6.jpg
    cv/
      SK-Sahil-CV.pdf
    og-image.png
```

## Notes
- Replace placeholder files with real images/PDF using the exact same names.
- `profile/*` is used in Hero and About sections.
- `teaching/*` is used in the teaching carousel.
- `projects/*` is used in project cards and project detail modal.
- `cv/SK-Sahil-CV.pdf` is used by the Hero `Download CV` button.
- `og-image.png` is used for social sharing metadata.

## Fallback behavior in UI
- Missing profile images show a gradient fallback card.
- Missing teaching images are automatically hidden from the slider.
- Missing project images show graceful card/modal fallback backgrounds.
