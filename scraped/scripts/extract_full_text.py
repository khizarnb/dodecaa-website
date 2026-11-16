from bs4 import BeautifulSoup
import json

def get_page_full_text(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    # Remove script and style
    for s in soup(['script', 'style', 'noscript', 'meta', 'link']):
        s.decompose()
        
    lines = [line.strip() for line in soup.get_text('\n').split('\n') if line.strip()]
    return lines

for p in ['home', 'about', 'products', 'contact', 'buy', 'sell']:
    lines = get_page_full_text(f'scraped/html/{p}.html')
    with open(f'scraped/text_{p}.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print(f'{p}: {len(lines)} lines of text extracted.')
