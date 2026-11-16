from bs4 import BeautifulSoup
import re

with open('scraped/html/home.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# Find main content container
entry_content = soup.find('div', class_='entry-content') or soup.find('main') or soup.body

print('Main tag:', entry_content.name, entry_content.get('class'))

# Print direct children of entry_content or top level containers
children = [c for c in entry_content.find_all(recursive=False) if c.name]
print(f'Direct children count: {len(children)}')
for i, child in enumerate(children):
    classes = ' '.join(child.get('class', []))
    print(f'Child {i}: <{child.name} class="{classes}">')

# If children is small or 1, let's look inside
if len(children) == 1:
    subchildren = [c for c in children[0].find_all(recursive=False) if c.name]
    print(f'Subchildren count: {len(subchildren)}')
    for i, sc in enumerate(subchildren):
        classes = ' '.join(sc.get('class', []))
        text_preview = ' | '.join(list(sc.stripped_strings)[:5])
        print(f'Subchild {i}: <{sc.name} class="{classes}"> -> {text_preview[:120]}')
