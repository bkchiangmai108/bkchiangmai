import re

with open(r'f:\Web Design\bk-chiang-mai-v3\src\index.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

print(f"Total characters: {len(content)}")
print(f"Total lines: {len(content.splitlines())}")

# Search for sections or divs or height styles
for i, line in enumerate(content.splitlines()):
    if 'bk-soul-point' in line:
        print(f"Line {i+1}: {line[:100]}")
    if 'min-h-' in line or 'h-[' in line or 'vh' in line or 'height:' in line:
        if '100vh' in line or '200' in line or '300' in line or 'section' in line.lower() or 'id=' in line:
            print(f"Height Line {i+1}: {line[:120]}")
