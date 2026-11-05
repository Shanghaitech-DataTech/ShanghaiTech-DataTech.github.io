# ShanghaiTech-DataTach
Homepage source code of ShanghaiTech DataTech Club

Applied [WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) as background.

## Adding or editing content (EN/ZH)

Every translatable element in `index.html` has a `data-lang="key"`, with translations in `script/script.js` (`translations.en` / `translations.zh`).

- The text written inside the element in `index.html` **must be the English version** (the page defaults to English; JS only swaps in text afterwards, so stale caches or JS failures show the HTML text).
- Add each new key to **both** `en` and `zh`.
- Run `python3 tools/check_i18n.py` before committing (`--fix` copies `en` values into `index.html`). CI runs the same check on every PR.
