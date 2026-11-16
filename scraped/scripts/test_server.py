import urllib.request
import re

routes = ['/', '/about-us', '/products', '/contact-us', '/buy-from-us', '/sell-to-us']
for r in routes:
    req = urllib.request.Request(f'http://localhost:4173{r}', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        js_files = re.findall(r'src="([^"]+\.js)"', html)
        css_files = re.findall(r'href="([^"]+\.css)"', html)
        print(f'Route {r:14}: Status={resp.status}, JS={js_files}, CSS={css_files}')

# Check JS bundle directly
if js_files:
    js_url = f'http://localhost:4173{js_files[0]}'
    resp = urllib.request.urlopen(js_url)
    print(f'JS Bundle status: {resp.status}, size: {len(resp.read())} bytes')

# Check CSS bundle directly
if css_files:
    css_url = f'http://localhost:4173{css_files[0]}'
    resp = urllib.request.urlopen(css_url)
    print(f'CSS Bundle status: {resp.status}, size: {len(resp.read())} bytes')
