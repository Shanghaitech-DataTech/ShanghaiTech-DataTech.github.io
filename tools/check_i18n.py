#!/usr/bin/env python3
"""Check that index.html and the translations in script/script.js agree.

The page defaults to English and only swaps text in via JavaScript, so the
text written inside every data-lang element in index.html must equal the
English translation; otherwise visitors with a stale cached script.js (or no
JS at all) see whatever the HTML says.

Usage:
    python3 tools/check_i18n.py          # report problems, exit 1 if any
    python3 tools/check_i18n.py --fix    # rewrite index.html defaults to match `en`
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HTML = ROOT / "index.html"
JS = ROOT / "script" / "script.js"
CJK = re.compile(r"[一-鿿]")
# A data-lang element whose content is plain text (no nested tags).
PLAIN_ELEM = re.compile(r'(data-lang="(\w+)"[^>]*>)(\s*)([^<]*?)(\s*)(</)')


def load_translations():
    js = JS.read_text(encoding="utf-8")
    en_start, zh_start = js.index("    en: {"), js.index("    zh: {")
    entry = re.compile(r'^\s+(\w+):\s*"((?:[^"\\]|\\.)*)",?\s*$', re.M)
    en = dict(entry.findall(js[en_start:zh_start]))
    zh = dict(entry.findall(js[zh_start:]))
    unescape = lambda d: {k: v.replace('\\"', '"') for k, v in d.items()}
    return unescape(en), unescape(zh)


def main():
    fix = "--fix" in sys.argv
    en, zh = load_translations()
    html = HTML.read_text(encoding="utf-8")
    used = set(re.findall(r'data-lang="(\w+)"', html))
    problems = []

    for k in sorted(used - set(en)):
        problems.append(f"key '{k}' used in index.html but missing from en")
    for k in sorted(used - set(zh)):
        problems.append(f"key '{k}' used in index.html but missing from zh")
    for k in sorted(set(en) ^ set(zh)):
        problems.append(f"key '{k}' present in only one of en/zh")
    for k, v in sorted(en.items()):
        if CJK.search(v):
            problems.append(f"en['{k}'] contains Chinese: {v}")

    def check(m):
        head, key, lead, text, trail, close = m.groups()
        want = en.get(key)
        if want is None or "<" in want or " ".join(text.split()) == want:
            return m.group(0)
        if not fix:
            problems.append(f"index.html default for '{key}' is '{text}', en is '{want}'")
        return f"{head}{lead}{want}{trail}{close}"

    new_html = PLAIN_ELEM.sub(check, html)
    if fix and new_html != html:
        HTML.write_text(new_html, encoding="utf-8")
        print("index.html defaults synced to en translations")

    for p in problems:
        print("ERROR:", p)
    if problems:
        sys.exit(1)
    print(f"OK: {len(used)} keys, en/zh in sync, index.html defaults match en")


if __name__ == "__main__":
    main()
