from bs4 import BeautifulSoup

with open('scraped/html/home.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

links = soup.find_all('link', rel='stylesheet')
for l in links:
    href = l.get('href')
    if 'elementor' in href or 'uploads' in href or 'fonts' in href:
        print('CSS LINK:', href)
