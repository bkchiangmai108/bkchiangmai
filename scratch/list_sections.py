import re

file_path = r"f:\Web Design\bk-chiang-mai-v3\src\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")

section_pattern = re.compile(r'<(section|header|footer)\b[^>]*id=["\']([^"\']+)["\']', re.IGNORECASE)

for i, line in enumerate(lines, 1):
    if "<section" in line or "id=" in line and "section" in line.lower():
        print(f"Line {i}: {line.strip()[:120]}")
    elif "<!--" in line and ("SECTION" in line or "1." in line or "2." in line or "Day" in line):
        print(f"Line {i} Comment: {line.strip()}")
