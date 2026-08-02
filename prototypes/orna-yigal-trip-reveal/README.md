# Orna & Yigal — Trip Reveal Prototype

A 23-screen visual prototype for the full Orna & Yigal trip Story Reveal, built on the Naoshima prototype's component baseline.

> Plain HTML / CSS / JS. No build step. No external dependencies. Open `index.html` and navigate with the on-screen buttons or ← / → arrow keys.

## How to Open

```
open prototypes/orna-yigal-trip-reveal/index.html
```

## What It Shows

23 destination screens in trip-route order, each a complete Story Reveal frame:
hero photograph, iOS-style status bar, 23-segment progress bar at top, identity overlay (EN + JP name + day label), ivory details card, 3–5 characteristics + icons, peeking avatar, italic *tap to close* hint.

The interactive player also includes looping background music that starts after the user's first story interaction, stops on exit, and exposes a session-persistent mute/unmute control.

The active screen renders at 402 × 874 (iPhone 16/17 Pro artboard) displayed at 1.4× scale for review.

## Route + Screen Map

| # | File | Destination | Day label |
| --- | --- | --- | --- |
| 1 | `01_narita_arrival.png` | Narita / 成田 | Arrival |
| 2 | `02_tokyo_station_exit.png` | Tokyo / 東京 | Day 1 |
| 3 | `03_tokyo_backstreet_v1.png` | Tokyo / 東京 | Day 2 |
| 4 | `04_tokyo_shibuya_crossing.png` | Tokyo / 東京 | Day 3 |
| 5 | `05_hakone_morning_mist.png` | Hakone / 箱根 | Day 5 |
| 6 | `06_hakone_torii_dusk.png` | Hakone / 箱根 | Day 6 |
| 7 | `07_kawaguchiko_fuji.png` | Kawaguchiko / 河口湖 | Day 7 |
| 8 | `08_matsumoto_castle.png` | Matsumoto / 松本 | Day 8 |
| 9 | `09_takayama_old_town_v1.png` | Takayama / 高山 | Day 9 |
| 10 | `10_takayama_old_town_v2.png` | Takayama / 高山 | Day 10 |
| 11 | `11_kanazawa_garden_v1.png` | Kanazawa / 金沢 | Day 11 |
| 12 | `12_kanazawa_garden_v2.png` | Kanazawa / 金沢 | Day 12 |
| 13 | `13_kyoto_temple_gate.png` | Kyoto / 京都 | Day 13 |
| 14 | `14_kyoto_machiya_passage.png` | Kyoto / 京都 | Day 14 |
| 15 | `15_okayama_korakuen.png` | Okayama / 岡山 | Day 15 |
| 16 | `16_naoshima_v1.png` | Naoshima / 直島 | Day 16 |
| 17 | `17_naoshima_v2.png` | Naoshima / 直島 | Day 16 |
| 18 | `18_teshima_rice_fields.png` | Teshima / 豊島 | Day 17 |
| 19 | `19_hiroshima_riverside.png` | Hiroshima / 広島 | Day 18 |
| 20 | `20_osaka_food_street.png` | Osaka / 大阪 | Day 19 |
| 21 | `21_osaka_takoyaki.png` | Osaka / 大阪 | Day 19 |
| 22 | `22_tokyo_return.png` | Tokyo / 東京 | Day 20 · Return |
| 23 | `23_narita_departure.png` | Narita / 成田 | Departure |

The user-provided route lists 14 stops; the 23 images = 14 chapters × 1–4 visual moments each. Tokyo is intentionally distinct at arrival (Day 1 station-morning) vs return (Day 20 night). Narita is intentionally distinct as arrival transit vs departure transit. Teshima sits between Naoshima and Hiroshima on the chronology from the Orna & Yigal sample trip, even though it's not listed as a separate step in the 14-stop route — it's a same-island ferry sibling to Naoshima.

## Characteristic + Icon Mapping per Screen

All icon keys come straight from `../../data/icon_keys.json`. No invented keys.

| # | Destination | Characteristics → icons |
| --- | --- | --- |
| 1 | Narita | Airport arrival · `airplane`, Onward transit · `suitcase`, Train rides · `train` |
| 2 | Tokyo (arrival) | Train rides · `train`, Local neighborhoods · `neighborhood`, City lights · `city_lights`, Food culture · `food` |
| 3 | Tokyo (backstreet) | Night streets · `night_street`, City lights · `city_lights`, Local neighborhoods · `neighborhood`, Cafe culture · `cafe`, Food culture · `food` |
| 4 | Tokyo (Shibuya) | City lights · `city_lights`, Pop culture · `pop_culture`, Night streets · `night_street` |
| 5 | Hakone (mist) | Lake calm · `lake`, Onsen relaxation · `onsen`, Ryokan stays · `ryokan`, Forest paths · `forest_path` |
| 6 | Hakone (torii) | Torii gates · `torii`, Lake views · `lake`, Sunset coast · `sunset`, Hot spring town · `onsen` |
| 7 | Kawaguchiko | Fuji views · `fuji`, Lake calm · `lake`, Mountain air · `mountain`, Ryokan stays · `ryokan` |
| 8 | Matsumoto | Castle town · `castle`, Mountain ridges · `mountain`, Autumn colors · `autumn`, Wooden townscape · `traditional_house` |
| 9 | Takayama (V1) | Edo-era streets · `traditional_house`, Market energy · `market`, Craft culture · `craft`, Food culture · `food` |
| 10 | Takayama (V2) | Wooden townscape · `traditional_house`, Flagstone streets · `stone_path`, Local neighborhoods · `neighborhood`, Mountain air · `mountain` |
| 11 | Kanazawa (V1) | Garden walks · `garden`, Autumn colors · `autumn`, Tea streets · `tea`, Craft culture · `craft` |
| 12 | Kanazawa (V2) | Garden walks · `garden`, Stone paths · `stone_path`, Autumn colors · `autumn`, Wooden townscape · `traditional_house` |
| 13 | Kyoto (gate) | Temple gardens · `temple`, Quiet rituals · `garden`, Forest paths · `forest_path` |
| 14 | Kyoto (passage) | Old streets · `traditional_house`, Tea streets · `tea`, Flagstone streets · `stone_path`, Quiet rituals · `temple` |
| 15 | Okayama | Garden walks · `garden`, Castle town · `castle`, Lake views · `lake`, Autumn colors · `autumn` |
| 16 | Naoshima (V1) | Art island · `island`, Ferry crossings · `ferry`, Concrete architecture · `concrete_architecture`, Sunset coast · `sunset`, Sea air · `sea` |
| 17 | Naoshima (V2) | Art by the sea · `art_museum`, Concrete architecture · `concrete_architecture`, Island silence · `island`, Sunset coast · `sunset` |
| 18 | Teshima | Art island · `island`, Ferry crossings · `ferry`, Quiet paths · `forest_path`, Sunset coast · `sunset` |
| 19 | Hiroshima | Peace memory · `memory`, Sunset coast · `sunset`, Streetcar streets · `streetcar`, Riverside · `lake` |
| 20 | Osaka (food street) | Night streets · `night_street`, Street food · `food`, Canal town · `canal`, City lights · `city_lights`, Market energy · `market` |
| 21 | Osaka (takoyaki) | Street food · `food`, Market energy · `market`, Night snacks · `night_street` |
| 22 | Tokyo (return) | Night streets · `night_street`, Local neighborhoods · `neighborhood`, Cafe culture · `cafe`, City lights · `city_lights` |
| 23 | Narita (departure) | Train rides · `train`, Onward transit · `suitcase`, Airport gateway · `airplane` |

## File Layout

```
prototypes/orna-yigal-trip-reveal/
├── README.md
├── index.html
├── styles.css
├── script.js                       ← 23 screen definitions + renderer
└── assets/
    ├── images/                     ← 23 hero photos, route-ordered names
    ├── icons/                      ← 45 icon PNGs, keyed by name (airplane.png, etc.)
    └── avatar/avatar.png           ← transparent character, copied from Naoshima preview
```

## What Matches the Naoshima Baseline

| Element | Source |
| --- | --- |
| Frame dimensions | 402 × 874 displayed at 1.4× |
| Status bar + 9:41 typography | Naoshima v15 |
| Identity overlay (EN/JP/day) | Naoshima v15 — 30/22/12px, light weights |
| Details card | `#faf5eb` ivory, 30px top radius, soft shadow |
| Item pair pattern | Label-left + icon-right, 18px label / 54px icon |
| Item grid positions | Fixed: pos-1..5 at the Naoshima coordinates |
| Avatar | 121×121 at (316, 786), rotated -30°, transparent |
| Tap-to-close | 13px italic, color `#8d877d` |
| Soft Figma-like elevation | Yes |

## What's Different

- **23-segment progress bar** instead of 5 — represents the full trip duration.
- **Hero rendered via `<img class="hero">` with `object-fit: cover`** — preserves the 9:16 source aspect without distortion.
- **No bottom scrim** on most screens — the details card always covers the lower portion, so the lower-band darkening from the closed Naoshima state isn't needed.
- **Nav controls below the screen** (prev / next + counter "X / 23") so the prototype reads as a player rather than a single screen.

## Known Limitations / Open Items

- **All 23 screens show the "expanded" state** (with details card). The closed state isn't separately demonstrated in this prototype.
- **Some Hiroshima icons stretch:** the `lake` icon stands in for "Riverside" because there is no `river` icon in the registry. Similarly `forest_path` stands in for "Quiet paths" on Teshima. Both are PRD §24-style stretches, not new icons.
- **Avatar position** is the same on every screen — no per-screen adjustment for hero composition.
- **23-segment progress bar at 2px height** is visually thin at 402px width; works but not refined.

## How to Add / Adjust Screens

In `script.js`, edit the `SCREENS` array. Each entry needs:

```js
{
  image: "filename_under_assets_images.png",
  name_en: "Destination",
  name_jp: "kanji",        // optional
  day: "Day N",            // short chapter label
  characteristics: [
    { label: "Short label", icon: "icon_key" },   // 3–5 entries
  ],
}
```

Valid `icon` keys are filenames (without `.png`) under `assets/icons/`. The full list is in `../../data/icon_keys.json`.
