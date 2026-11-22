# ShanghaiTech-DataTach
Homepage source code of ShanghaiTech DataTech Club

Applied [WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) as background.

## Adding or editing content (EN/ZH)

Every translatable element in `index.html` has a `data-lang="key"`, with translations in `script/script.js` (`translations.en` / `translations.zh`).

- The text written inside the element in `index.html` **must be the English version** (the page defaults to English; JS only swaps in text afterwards, so stale caches or JS failures show the HTML text).
- Add each new key to **both** `en` and `zh`.
- Run `python3 tools/check_i18n.py` before committing (`--fix` copies `en` values into `index.html`). CI runs the same check on every PR.

## Site structure

| URL | Source | Notes |
| --- | --- | --- |
| `/` | `index.html` | Homepage; achievements / papers / activities are previews |
| `/awards/` | `awards/index.html` | All awards, grouped by category (`data-category`) |
| `/papers/` | `papers/index.html` | Papers |
| `/activities/` | `activities/index.html` | Activities |
| `/column/` | `column/index.html` | Placeholder (empty); contribution spec in `column/README.md` |

Shared styles live in `css/site.css`, shared scripts in `script/script.js`. Sub-pages use the same `data-lang` i18n mechanism (checked by `tools/check_i18n.py`).

### Prize totals

Totals are computed by `script/script.js` from `script/awards-data.js` (one row per award: `[id, category, prize, "USD"|"CNY"]`, amount `0` and currency `""` for non-cash awards). English shows USD, Chinese shows RMB, converted with `USD_CNY_RATE` (top of `script.js`).

Home page shows a fixed selection (top 9 awards by prize, latest 6 activities, latest 3 papers, latest 3 column articles); the full lists are on the sub-pages. **When adding an award:** add a row to `script/awards-data.js`, add the card to `awards/index.html` under its category section, and add it to `index.html` only if it ranks in the top 9 by prize (then drop the card that falls out).
