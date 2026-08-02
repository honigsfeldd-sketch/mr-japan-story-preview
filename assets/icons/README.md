# Icons

> **Purpose of this folder.** SVG icon library for destination characteristics.
>
> Every icon used in `../../data/destination_master_library.csv` (via `icon_1` … `icon_5`) must have a corresponding entry in `../../data/icon_keys.json`, which in turn points to a file in this folder.

## Conventions

- **Format:** SVG preferred. Avoid raster formats unless explicitly justified in the icon's registry entry.
- **Naming:** filename convention is TBD (see `../../docs/OPEN_QUESTIONS.md`). The icon **key** is the source of truth; the filename is a lookup detail.
- **Style:** consistent visual style across the library (line weight, corner radius, color treatment) — guidelines TBD in `../../docs/UX_DECISIONS.md`.

## Adding an icon

1. Add the SVG file to this folder.
2. Add a matching entry to `../../data/icon_keys.json` (key, label, file, tags).
3. Add a note to `../../changelog.md`.

## Status

Empty. No icons have been added yet.
