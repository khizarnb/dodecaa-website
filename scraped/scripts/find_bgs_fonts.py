import re
from bs4 import BeautifulSoup
import json

pages = ['home', 'about', 'products', 'contact', 'buy', 'sell']

for page in pages:
    with open(f'scraped/html/{page}.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    # find all style tags
    soup = BeautifulSoup(html, 'html.parser')
    styles = soup.find_all('style')
    all_css = '\n'.join([s.get_text() for s in styles])
    
    # find background-image urls
    bg_urls = re.findall(r'background(?:-image)?\s*:[^;}]*url\([\'"]?([^\'"\)]+)[\'"]?\)', all_css)
    # also inline styles
    inline_bgs = re.findall(r'background(?:-image)?\s*:[^;"]*url\([\'"]?([^\'"\)]+)[\'"]?\)', html)
    
    unique_bgs = sorted(list(set(bg_urls + inline_bgs)))
    print(f'=== {page.upper()} BACKGROUNDS ===')
    for u in unique_bgs:
        if 'dodecaa.com' in u or 'uploads' in u:
            print('  BG:', u)
            
    # Also find font families
    fonts = re.findall(r'font-family\s*:\s*([^;!}]+)', all_css)
    clean_fonts = set([f.strip().strip('"\'') for f in fonts if len(f.strip()) < 50])
    print(f'=== {page.upper()} FONTS ===')
    print('  Fonts:', list(clean_fonts)[:10])
