from bs4 import BeautifulSoup
import re

with open('scraped/html/home.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print('--- SECTIONS on HOME ---')
sections = soup.find_all('section')
print(f'Total sections: {len(sections)}')

for i, sec in enumerate(sections):
    sec_class = sec.get('class', [])
    # get all direct text
    text_pieces = [t.strip() for t in sec.stripped_strings if len(t.strip()) > 2]
    # get images
    imgs = [img.get('src') for img in sec.find_all('img')]
    bg = sec.get('style', '')
    print(f"\nSECTION {i+1} [class: {' '.join(sec_class[:3])}]:")
    print("   Images:", imgs)
    if 'background' in bg:
        print("   Background style:", bg[:120])
    print("   Text summary (first 8 items):", text_pieces[:8])

