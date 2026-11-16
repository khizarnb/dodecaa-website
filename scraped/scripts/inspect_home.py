from bs4 import BeautifulSoup

with open('scraped/html/home.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print('--- ALL H1/H2/H3 on HOME ---')
for h in soup.find_all(['h1', 'h2', 'h3', 'h4']):
    text = h.get_text(' ', strip=True)
    if text:
        print(f"[{h.name}] {text}")

print('\n--- ALL PARAGRAPHS on HOME ---')
for p in soup.find_all('p'):
    text = p.get_text(' ', strip=True)
    if text:
        print(f"P: {text}")

print('\n--- ALL BUTTONS / LINKS WITH TEXT ---')
for a in soup.find_all('a'):
    text = a.get_text(' ', strip=True)
    href = a.get('href')
    if text and href and not href.startswith('#'):
        print(f"LINK: {text} -> {href}")
