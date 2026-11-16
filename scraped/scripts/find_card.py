from bs4 import BeautifulSoup

with open('scraped/html/products.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

for h in soup.find_all('h2'):
    if 'Computer Parts' in h.get_text():
        # print parents
        p = h.parent
        for _ in range(4):
            if p:
                print('TAG:', p.name, 'CLASS:', p.get('class'), 'ID:', p.get('data-id'))
                p = p.parent
        break
