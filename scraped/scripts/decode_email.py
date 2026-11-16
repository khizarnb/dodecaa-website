import re

with open('scraped/html/contact.html', 'r', encoding='utf-8') as f:
    html = f.read()

matches = re.findall(r'data-cfemail="([0-9a-fA-F]+)"', html)
for m in set(matches):
    key = int(m[:2], 16)
    decoded = ''.join([chr(int(m[i:i+2], 16) ^ key) for i in range(2, len(m), 2)])
    print('Decoded email:', decoded)
