#!/usr/bin/env python3
"""
scripts/build.py - Build & Asset Hash Script for MuleSoft Hub
Computes sha256 content hashes of CSS/JS assets, creates hashed copies,
and updates index.html references for aggressive caching / cache-busting.
"""

import os
import re
import hashlib
import shutil

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS_DIR = os.path.join(ROOT_DIR, "assets")
CSS_DIR = os.path.join(ASSETS_DIR, "css")
JS_DIR = os.path.join(ASSETS_DIR, "js")
INDEX_PATH = os.path.join(ROOT_DIR, "index.html")

def get_hash(filepath):
    with open(filepath, "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()[:8]

def build():
    print("=== MuleSoft Hub Asset Build ===")
    
    hub_css = os.path.join(CSS_DIR, "hub.css")
    fonts_css = os.path.join(CSS_DIR, "fonts.css")
    hub_js = os.path.join(JS_DIR, "hub.js")
    
    if not os.path.exists(hub_css) or not os.path.exists(hub_js):
        print("Error: assets/css/hub.css or assets/js/hub.js missing!")
        return 1

    css_hash = get_hash(hub_css)
    js_hash = get_hash(hub_js)
    
    hashed_css_name = f"hub.{css_hash}.css"
    hashed_js_name = f"hub.{js_hash}.js"
    
    shutil.copy2(hub_css, os.path.join(CSS_DIR, hashed_css_name))
    shutil.copy2(hub_js, os.path.join(JS_DIR, hashed_js_name))
    
    print(f"Generated {hashed_css_name} (hash: {css_hash})")
    print(f"Generated {hashed_js_name} (hash: {js_hash})")
    
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    # Update CSS reference
    html = re.sub(
        r'href="assets/css/hub(?:\.[a-f0-9]+)?\.css"',
        f'href="assets/css/{hashed_css_name}"',
        html
    )
    # Update preload reference
    html = re.sub(
        r'href="assets/css/hub(?:\.[a-f0-9]+)?\.css"\s+as="style"',
        f'href="assets/css/{hashed_css_name}" as="style"',
        html
    )
    # Update JS reference
    html = re.sub(
        r'src="assets/js/hub(?:\.[a-f0-9]+)?\.js"',
        f'src="assets/js/{hashed_js_name}"',
        html
    )

    with open(INDEX_PATH, "w", encoding="utf-8") as f:
        f.write(html)
        
    print(f"Updated index.html references to {hashed_css_name} and {hashed_js_name}.")
    print("Build complete!")
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(build())
