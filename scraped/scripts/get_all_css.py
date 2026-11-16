from bs4 import BeautifulSoup
import re
import urllib.request
import os

pages = ['about', 'products', 'contact', 'buy', 'sell']
all_css_links = set()

for page in pages:
    with open(f'scraped/html/{page}.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    for l in soup.find_all('link', rel='stylesheet'):
        href = l.get('href')
        if 'elementor/css/post-' in href:
            all_css_links.add(href.split('?')[0])

print('Elementor CSS links in other pages:')
for link in all_css_links:
    print(' ', link)

headers = {'User-Agent': 'Mozilla/5.0'}
additional_css = ''
for u in all_css_links:
    fname = os.path.basename(u)
    fpath = f'scraped/css/{fname}'
    if not os.path.exists(fpath):
        try:
            req = urllib.request.Request(u, headers=headers)
            with urllib.request.urlopen(req) as resp:
                c = resp.read().decode('utf-8', errors='ignore')
                with open(fpath, 'w', encoding='utf-8') as out:
                    out.write(c)
                additional_css += c + '\n'
                print(f'Downloaded {fname}')
        except Exception as e:
            print(f'Failed {fname}: {e}')
    else:
        with open(fpath, 'r', encoding='utf-8') as f:
            additional_css += f.read() + '\n'

bgs = re.findall(r'url\([\'"]?([^\'"\)]+)[\'"]?\)', additional_css)
for bg in set(bgs):
    print('  Discovered CSS URL:', bg)
