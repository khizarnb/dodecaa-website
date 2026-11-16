from bs4 import BeautifulSoup
import json
import re

def parse_page(filename, page_name):
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    # Header
    header = soup.find('header')
    header_data = {}
    if header:
        header_data = {
            'logo': [img.get('src') for img in header.find_all('img')],
            'links': [{'text': a.get_text(strip=True), 'href': a.get('href')} for a in header.find_all('a') if a.get_text(strip=True)]
        }
        
    # Footer
    footer = soup.find('footer')
    footer_data = {}
    if footer:
        footer_data = {
            'text': list(footer.stripped_strings),
            'links': [{'text': a.get_text(strip=True), 'href': a.get('href')} for a in footer.find_all('a') if a.get_text(strip=True)],
            'images': [img.get('src') for img in footer.find_all('img')]
        }
        
    # Main container
    main_con = soup.find('div', class_=re.compile(r'elementor-\d+'))
    sections = []
    if main_con:
        # direct children or e-parent
        parents = main_con.find_all('div', class_=re.compile(r'e-parent'), recursive=False)
        if not parents:
            parents = [c for c in main_con.find_all(recursive=False) if c.name == 'div']
            
        for idx, p in enumerate(parents):
            p_id = p.get('id', '')
            p_class = p.get('class', [])
            
            # extract text
            texts = list(p.stripped_strings)
            # extract images
            imgs = []
            for img in p.find_all('img'):
                imgs.append({'src': img.get('src'), 'alt': img.get('alt'), 'class': img.get('class')})
            # extract links & buttons
            btns = []
            for a in p.find_all(['a', 'button']):
                t = a.get_text(strip=True)
                if t:
                    btns.append({'text': t, 'href': a.get('href'), 'class': a.get('class')})
            # extract forms
            forms = []
            for form in p.find_all('form'):
                inputs = []
                for inp in form.find_all(['input', 'textarea', 'select']):
                    inputs.append({
                        'tag': inp.name,
                        'type': inp.get('type'),
                        'name': inp.get('name'),
                        'placeholder': inp.get('placeholder')
                    })
                forms.append(inputs)

            sections.append({
                'index': idx,
                'class': p_class,
                'id': p_id,
                'texts': texts,
                'images': imgs,
                'buttons': btns,
                'forms': forms
            })
            
    return {
        'page': page_name,
        'header': header_data,
        'sections': sections,
        'footer': footer_data
    }

for p in ['home', 'about', 'products', 'contact', 'buy', 'sell']:
    res = parse_page(f'scraped/html/{p}.html', p)
    with open(f'scraped/parsed_{p}.json', 'w', encoding='utf-8') as out:
        json.dump(res, out, indent=2)
    print(f"Parsed {p}: {len(res['sections'])} sections found.")

print("All pages parsed successfully.")
