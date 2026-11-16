import json

with open('scraped/analysis_report.json', 'r', encoding='utf-8') as f:
    report = json.load(f)

for page in ['home', 'about']:
    data = report[page]
    print('=' * 60)
    print(f'PAGE: {page.upper()} - {data["title"]}')
    print('=' * 60)
    print('--- HEADINGS ---')
    for h in data['headings']:
        if h['text']:
            print(f"[{h['tag']}] {h['text']}")
    print('\n--- PARAGRAPHS ---')
    for p in data['paragraphs'][:30]:
        print(f"- {p}")
    print('\n--- IMAGES ---')
    for img in data['images']:
        print(f"   {img['src']}")
    print('\n--- FORMS ---')
    for form in data['forms']:
        print(f"Form: {form}")
