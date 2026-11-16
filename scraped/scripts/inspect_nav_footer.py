from bs4 import BeautifulSoup

with open('scraped/html/home.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

header = soup.find('header')
footer = soup.find('footer')

print('=== HEADER HTML ===')
print(str(header)[:2000])

print('\n=== FOOTER HTML ===')
print(str(footer)[:2500])
