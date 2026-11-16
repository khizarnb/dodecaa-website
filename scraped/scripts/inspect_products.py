from bs4 import BeautifulSoup
import re

with open('scraped/html/products.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

with open('scraped/css/post-491.css', 'r', encoding='utf-8') as f:
    css = f.read()

print('URLs in post-491.css:')
for u in re.findall(r'url\([\'"]?([^\'"\)]+)[\'"]?\)', css):
    print(' ', u)

print('\nImages in products.html:')
for img in soup.find_all('img'):
    print(' ', img.get('src'))

print('\nTags with inline background in products.html:')
for tag in soup.find_all(style=re.compile(r'url')):
    print(' ', tag.name, tag.get('style'))

# Also let's check classes of the product items in products.html
for cat in soup.find_all('h2'):
    parent = cat.find_parent('div', class_=re.compile(r'elementor-element-'))
    if parent:
        p_id = parent.get('data-id')
        print(f"Heading: {cat.get_text(strip=True)} -> parent data-id: {p_id}")
        # search css for p_id
        if p_id:
            m = re.findall(rf'(\.elementor-element-{p_id}[^{{]*\{{[^}}]*\}})', css)
            for r in m:
                if 'background' in r or 'image' in r:
                    print('   ', r)
