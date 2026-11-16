import os
import re
from bs4 import BeautifulSoup
import json

pages = ['home', 'about', 'products', 'contact', 'buy', 'sell']

report = {}

for page in pages:
    filepath = f'scraped/html/{page}.html'
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # Title
    title = soup.title.string if soup.title else ''
    
    # Header navigation
    nav_links = []
    nav = soup.find('nav')
    if nav:
        for a in nav.find_all('a'):
            nav_links.append({'text': a.get_text(strip=True), 'href': a.get('href')})
    
    # Main sections / Headings
    headings = []
    for h in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
        headings.append({
            'tag': h.name,
            'text': h.get_text(strip=True),
            'class': h.get('class', [])
        })
    
    # Forms
    forms = []
    for form in soup.find_all('form'):
        form_info = {
            'id': form.get('id'),
            'class': form.get('class'),
            'inputs': []
        }
        for inp in form.find_all(['input', 'textarea', 'select', 'button']):
            form_info['inputs'].append({
                'tag': inp.name,
                'type': inp.get('type'),
                'name': inp.get('name'),
                'placeholder': inp.get('placeholder'),
                'value': inp.get('value'),
                'text': inp.get_text(strip=True)
            })
        forms.append(form_info)
        
    # Images with src and alt
    images = []
    for img in soup.find_all('img'):
        images.append({
            'src': img.get('src'),
            'alt': img.get('alt'),
            'class': img.get('class')
        })
        
    # Text blocks (paragraphs, lists)
    paragraphs = [p.get_text(strip=True) for p in soup.find_all('p') if p.get_text(strip=True)]
    
    report[page] = {
        'title': title,
        'headings': headings,
        'nav_links': nav_links[:10],
        'forms': forms,
        'image_count': len(images),
        'images': images,
        'paragraphs': paragraphs
    }

with open('scraped/analysis_report.json', 'w', encoding='utf-8') as f:
    json.dump(report, f, indent=2)

print('Analysis complete! Check scraped/analysis_report.json')
