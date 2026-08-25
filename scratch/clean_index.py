import re

file_path = "src/index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern to clean up duplicate cards from BK Sudesh Didi to closing </div> of senior cards section
old_pattern = re.compile(
    r'(<button onclick="openSeniorPopup\(\'sudesh-didi\'\)".*?<\/button>)\s*<span data-i18n="seniors_btn_more">.*?<!-- Didi Jayanti Kirpalani -->\s*<div class="senior-card.*?'
    r'<button onclick="openSeniorPopup\(\'jayanti-kirpalani\'\)".*?<\/button>\s*<\/div>',
    re.DOTALL
)

if old_pattern.search(content):
    new_content = old_pattern.sub(r'\1\n                      </div>', content)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("SUCCESS: Cleaned up duplicate cards")
else:
    print("PATTERN NOT FOUND")
