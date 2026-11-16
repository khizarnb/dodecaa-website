import os
import re
import json
import urllib.request
from urllib.parse import urlparse

os.makedirs('scraped/assets', exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

with open('scraped/images_list.json', 'r') as f:
    images = json.load(f)

for img_url in images:
    filename = os.path.basename(urlparse(img_url).path)
    target_path = os.path.join('scraped/assets', filename)
    if not os.path.exists(target_path):
        try:
            req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(req) as resp, open(target_path, 'wb') as out:
                out.write(resp.read())
            print(f'Downloaded: {filename}')
        except Exception as e:
            print(f'Failed {filename}: {e}')
    else:
        print(f'Already exists: {filename}')

print('Asset download complete.')
