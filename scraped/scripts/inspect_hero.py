from bs4 import BeautifulSoup
import re

with open('scraped/html/home.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

first_con = soup.find('div', class_='elementor-element-da10e42')
if first_con:
    print('First container classes:', first_con.get('class'))
    print('HTML snippet:')
    print(str(first_con)[:2500])

# Also let's check styles for da10e42 in post-2.css
with open('scraped/css/post-2.css', 'r', encoding='utf-8') as f:
    css = f.read()

da10e42_matches = re.findall(r'(\.elementor-element-da10e42[^{]*\{[^}]*\})', css)
print('\nCSS for da10e42:')
for m in da10e42_matches:
    print(m)
