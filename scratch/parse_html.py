from html.parser import HTMLParser
import sys

class FindModalParent(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.modal_parent_chain = None

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        tag_id = attrs_dict.get('id')
        self.stack.append((tag, tag_id))
        if tag_id == 'seniorBioModal':
            # Save a copy of the stack up to this point
            self.modal_parent_chain = list(self.stack)

    def handle_endtag(self, tag):
        if self.stack:
            # We want to match the popped tag. Sometimes HTML has mismatched tags, 
            # but standard stack.pop() is a good baseline.
            self.stack.pop()

parser = FindModalParent()
with open(r'f:\Web Design\bk-chiang-mai-v3\src\index.html', 'r', encoding='utf-8', errors='ignore') as f:
    parser.feed(f.read())

if parser.modal_parent_chain:
    print("Found parent chain for #seniorBioModal:")
    for tag, tag_id in parser.modal_parent_chain:
        print(f" - <{tag} id='{tag_id}'>")
else:
    print("Could not find #seniorBioModal")
