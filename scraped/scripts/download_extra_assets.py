import urllib.request
import os

extra_urls = [
    'https://dodecaa.com/wp-content/uploads/2025/01/Frame-1.webp',
    'https://dodecaa.com/wp-content/uploads/2025/01/Frame-7.webp',
    'https://dodecaa.com/wp-content/uploads/2025/01/Computer-Parts.webp',
    'https://dodecaa.com/wp-content/uploads/2025/01/Computer-Parts-3.webp',
    'https://dodecaa.com/wp-content/uploads/2025/01/Desktops-2.webp',
    'https://dodecaa.com/wp-content/uploads/2025/01/Mobile-Devices.webp',
    'https://dodecaa.com/wp-content/uploads/2025/01/Group-425.png'
]

os.makedirs('scraped/assets', exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0'}

for u in extra_urls:
    fname = os.path.basename(u)
    fpath = f'scraped/assets/{fname}'
    if not os.path.exists(fpath):
        try:
            req = urllib.request.Request(u, headers=headers)
            with urllib.request.urlopen(req) as resp, open(fpath, 'wb') as out:
                out.write(resp.read())
            print(f'Downloaded extra: {fname}')
        except Exception as e:
            print(f'Failed extra {fname}: {e}')
    else:
        print(f'Already exists: {fname}')
