import urllib.request
import re
import os

css_urls = [
    'https://dodecaa.com/wp-content/uploads/elementor/css/post-6.css',
    'https://dodecaa.com/wp-content/uploads/elementor/css/post-2.css',
    'https://dodecaa.com/wp-content/uploads/elementor/css/post-484.css',
    'https://dodecaa.com/wp-content/uploads/elementor/css/post-466.css',
    'https://dodecaa.com/wp-content/uploads/elementor/css/post-1597.css'
]

os.makedirs('scraped/css', exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0'}

all_css_text = ''
for u in css_urls:
    fname = os.path.basename(u.split('?')[0])
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            with open(f'scraped/css/{fname}', 'w', encoding='utf-8') as f:
                f.write(content)
            all_css_text += content + '\n'
            print(f'Downloaded {fname} ({len(content)} bytes)')
    except Exception as e:
        print(f'Failed {fname}: {e}')

# Find all background images and fonts in the downloaded elementor CSS
bgs = re.findall(r'url\([\'"]?([^\'"\)]+)[\'"]?\)', all_css_text)
print(f'Total URLs in CSS: {len(bgs)}')
for bg in set(bgs):
    print('  CSS URL:', bg)

# Colors
colors = re.findall(r'#(?:[0-9a-fA-F]{3,8})|rgba?\([^)]+\)', all_css_text)
from collections import Counter
common_colors = Counter(colors).most_common(20)
print('Common CSS colors:')
for c, count in common_colors:
    print(f'  {c}: {count}')
