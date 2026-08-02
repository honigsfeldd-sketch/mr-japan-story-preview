# Hero Images

> **Purpose of this folder.** Hero images used as the visual centerpiece of each Destination Story Reveal card.
>
> Destinations reference these via `hero_image_key` (primary) and `backup_hero_image_key` (fallback) in `../../data/destination_master_library.csv`. Art direction notes live in the same row under `hero_image_direction`.

## Conventions

- **Format:** TBD (proposal: JPG or WebP for photographic heroes, PNG only when transparency is required).
- **Aspect ratio / size:** TBD (see `../../docs/OPEN_QUESTIONS.md`).
- **Naming:** filename convention is TBD. The hero image **key** is the source of truth; the filename is a lookup detail.

## Adding a hero image

1. Add the image file to this folder using the agreed convention.
2. Make sure the destination row referencing this image has `visual_status` updated.
3. Add a note to `../../changelog.md`.

## Status

Empty. No hero images have been added yet.
