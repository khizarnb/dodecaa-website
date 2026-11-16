import os
import re
import json
import urllib.request
from urllib.parse import urlparse

os.makedirs('scraped/assets', exist_ok=True)
pages = ['home', 'about', 'products', 'contact', 'buy', 'sell']

all_images = set()

for page in pages:
    filepath = f'scraped/html/{page}.html'
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # find all image urls
    imgs = re.findall(r'https?://[^\s"\'()<>]+\.(?:png|jpg|jpeg|svg|webp)', html, re.IGNORECASE)
    for img in imgs:
        if 'dodecaa.com' in img:
            all_images.add(img)

print(f'Total unique images from dodecaa.com: {len(all_images)}')
with open('scraped/images_list.json', 'w') as f:
    json.dump(sorted(list(all_images)), f, indent=2)

for img in sorted(list(all_images)):
    print(img)
