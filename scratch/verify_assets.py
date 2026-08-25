import os
import re
from pathlib import Path

# Workspace Root
ROOT = Path(r"f:\Web Design\bk-chiang-mai-v3")
SRC_DIR = ROOT / "src"
DATA_DIR = SRC_DIR / "data"

html_files = [
    SRC_DIR / "index.html",
    SRC_DIR / "faqs.html",
    SRC_DIR / "virtues wheel-EngThai-04.html"
]

data_files = [
    DATA_DIR / "articles-data.js",
    DATA_DIR / "music-data.js",
    DATA_DIR / "seniors-data.js"
]

print("=== Starting Project Scan for Errors and Broken Assets ===")

# Check if data directory or files are missing
for df in data_files:
    if not df.exists():
        print(f"[ERROR] Data file does not exist: {df}")

# Find references in HTML files
asset_regexes = [
    re.compile(r'(?:src|href|poster)=["\']([^"\']+)["\']'),
    re.compile(r'url\(["\']?([^"\'\)]+)["\']?\)'),
    # For data structures in JS embedded in HTML or external files
    re.compile(r'[\'"](\.\./assets/[^\'"]+)[\'"]'),
    re.compile(r'[\'"](assets/[^\'"]+)[\'"]'),
]

checked_count = 0
missing_count = 0
warnings_count = 0

# Helper to normalize and check path
def check_asset(ref, file_source):
    global checked_count, missing_count, warnings_count
    # Skip web urls (http/https), mailto, tel, hashtags, inline javascript, fonts from cdn, data: urls
    if (ref.startswith("http://") or 
        ref.startswith("https://") or 
        ref.startswith("mailto:") or 
        ref.startswith("tel:") or 
        ref.startswith("#") or 
        ref.startswith("javascript:") or 
        ref.startswith("data:")):
        return

    # Clean query strings or hashes
    ref_clean = ref.split("?")[0].split("#")[0]
    
    # Resolve relative path based on the file source
    source_dir = Path(file_source).parent
    target_path = (source_dir / ref_clean).resolve()

    checked_count += 1

    # Check if exists
    if not target_path.exists():
        # Maybe check relative to root or src
        alternative_paths = [
            ROOT / ref_clean,
            SRC_DIR / ref_clean,
            ROOT / ref_clean.lstrip("/")
        ]
        found_alt = False
        for alt in alternative_paths:
            if alt.resolve().exists():
                print(f"[WARN] File '{ref}' in '{file_source}' not found at relative path but found at: {alt}")
                warnings_count += 1
                found_alt = True
                break
        
        if not found_alt:
            print(f"[ERROR] Broken reference: '{ref}' in file '{file_source}' (Resolved path: {target_path})")
            missing_count += 1
    else:
        # Check size and format guidelines
        size_bytes = target_path.stat().st_size
        size_mb = size_bytes / (1024 * 1024)
        
        # Check for our journey images: journey-*.webp and size under 150KB
        if "Our-Journey" in str(target_path):
            if not target_path.name.endswith(".webp"):
                print(f"[WARN] Journey image is not .webp: {target_path.name} ({target_path.suffix}) - Size: {size_mb:.2f} MB")
                warnings_count += 1
            elif size_bytes > 150 * 1024:
                print(f"[WARN] Journey image exceeds 150KB: {target_path.name} - Size: {size_bytes/1024:.2f} KB")
                warnings_count += 1

        # Check other images size
        elif target_path.suffix.lower() in ['.png', '.jpg', '.jpeg', '.webp']:
            if size_bytes > 1024 * 1024: # 1MB warning
                print(f"[WARN] Image is very large: {target_path.name} - Size: {size_mb:.2f} MB")
                warnings_count += 1

# Scan HTML files
for html_file in html_files:
    if not html_file.exists():
        print(f"[ERROR] HTML file does not exist: {html_file}")
        continue
    
    print(f"\nScanning: {html_file.name}")
    try:
        content = html_file.read_text(encoding="utf-8")
    except Exception as e:
        print(f"[ERROR] Could not read {html_file}: {e}")
        continue

    # Find all patterns
    found_refs = []
    for r in asset_regexes:
        found_refs.extend(r.findall(content))
    
    # Unique list
    found_refs = list(set(found_refs))
    
    for ref in found_refs:
        check_asset(ref, html_file)

# Scan data files (.js)
for js_file in data_files:
    if not js_file.exists():
        continue
    
    print(f"\nScanning Data file: {js_file.name}")
    try:
        content = js_file.read_text(encoding="utf-8")
    except Exception as e:
        print(f"[ERROR] Could not read {js_file}: {e}")
        continue
    
    found_refs = []
    # Search for relative paths like ../assets/... or assets/... in quotes
    ref_pattern = re.compile(r'["\'](\.\./assets/[^"\']+)["\']')
    found_refs.extend(ref_pattern.findall(content))
    ref_pattern2 = re.compile(r'["\'](assets/[^"\']+)["\']')
    found_refs.extend(ref_pattern2.findall(content))
    
    found_refs = list(set(found_refs))
    for ref in found_refs:
        check_asset(ref, js_file)

print("\n=== Scan Complete ===")
print(f"Total checked: {checked_count}")
print(f"Total broken (Errors): {missing_count}")
print(f"Total warnings (Warns): {warnings_count}")
