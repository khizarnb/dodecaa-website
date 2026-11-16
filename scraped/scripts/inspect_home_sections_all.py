from bs4 import BeautifulSoup
import re

with open('scraped/html/home.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

with open('scraped/css/post-2.css', 'r', encoding='utf-8') as f:
    css = f.read()

main_con = soup.find('div', class_='elementor-2')
parents = [c for c in main_con.find_all(recursive=False) if c.name == 'div']

for i, p in enumerate(parents):
    data_id = p.get('data-id')
    classes = ' '.join(p.get('class', []))
    print('='*80)
    print(f'HOME SECTION {i+1} [data-id="{data_id}"] [classes: {classes}]')
    
    # CSS matching data_id
    if data_id:
        css_rules = re.findall(rf'(\.elementor-element-{data_id}[^{{]*\{{[^}}]*\}})', css)
        for r in css_rules:
            print('  STYLE:', r)
            
    # Direct texts and widgets
    widgets = p.find_all('div', class_=re.compile(r'elementor-widget-'))
    print(f'  Widgets found: {len(widgets)}')
    for w in widgets:
        w_type = w.get('data-widget_type', 'unknown')
        w_text = ' '.join(list(w.stripped_strings))
        imgs = [img.get('src') for img in w.find_all('img')]
        print(f'    [{w_type}] {w_text[:100]} | Imgs: {imgs}')
