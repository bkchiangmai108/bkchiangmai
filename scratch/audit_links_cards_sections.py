import re
import os
from bs4 import BeautifulSoup

html_file = r"f:\Web Design\bk-chiang-mai-v3\src\index.html"
faqs_file = r"f:\Web Design\bk-chiang-mai-v3\src\faqs.html"

with open(html_file, "r", encoding="utf-8") as f:
    index_content = f.read()

with open(faqs_file, "r", encoding="utf-8") as f:
    faqs_content = f.read()

index_soup = BeautifulSoup(index_content, "html.parser")
faqs_soup = BeautifulSoup(faqs_content, "html.parser")

print("=== INDEX.HTML ALL IDs ===")
all_ids = set()
for tag in index_soup.find_all(id=True):
    all_ids.add(tag['id'])

print(f"Total IDs in index.html: {len(all_ids)}")

print("\n=== INDEX.HTML ANCHOR LINKS (href starting with #) ===")
anchor_links = index_soup.find_all('a', href=re.compile(r'^#'))
broken_anchors = []
valid_anchors = []

for a in anchor_links:
    href = a['href']
    target_id = href[1:]
    text = a.get_text(strip=True) or str(a)
    if target_id and target_id not in all_ids:
        broken_anchors.append((href, text, a.sourceline if hasattr(a, 'sourceline') else 'N/A'))
    else:
        valid_anchors.append((href, text))

print(f"Found {len(anchor_links)} anchor links.")
if broken_anchors:
    print(f"BROKEN ANCHORS ({len(broken_anchors)}):")
    for href, text, line in broken_anchors:
        print(f"  Href: '{href}' | Text: '{text}' | Line: {line}")
else:
    print("All # anchor links point to existing IDs!")

print("\n=== INDEX.HTML HTML LINKS WITH href TO OTHER FILES OR URLS ===")
all_a_href = index_soup.find_all('a', href=True)
for a in all_a_href:
    href = a['href']
    if not href.startswith('#') and not href.startswith('javascript:') and not href.startswith('tel:') and not href.startswith('mailto:'):
        print(f"  Link href: '{href}' | Text: '{a.get_text(strip=True)[:40]}'")

print("\n=== SEARCHING FOR ONCLICK AND DATA-TARGET ATTRIBUTES ===")
onclick_tags = index_soup.find_all(attrs={"onclick": True})
print(f"Total elements with onclick: {len(onclick_tags)}")
for tag in onclick_tags:
    oc = tag['onclick']
    if 'scroll' in oc or 'open' in oc or 'show' in oc or 'modal' in oc or 'filter' in oc or 'tab' in oc or 'toggle' in oc:
        print(f"  Tag: <{tag.name}> | onclick: '{oc}' | Text: '{tag.get_text(strip=True)[:30]}'")

print("\n=== FAQS.HTML ANCHOR & NAVIGATION LINKS ===")
faqs_ids = set(tag['id'] for tag in faqs_soup.find_all(id=True))
faqs_anchors = faqs_soup.find_all('a', href=True)
for a in faqs_anchors:
    href = a['href']
    if href.startswith('#'):
        tid = href[1:]
        if tid and tid not in faqs_ids:
            print(f"  BROKEN in faqs.html: href='{href}' | Text: '{a.get_text(strip=True)}'")
    else:
        print(f"  faqs.html external link href='{href}' | Text: '{a.get_text(strip=True)[:40]}'")
