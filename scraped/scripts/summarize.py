import json

with open('scraped/analysis_report.json', 'r', encoding='utf-8') as f:
    report = json.load(f)

for page, data in report.items():
    print('=' * 60)
    print(f'PAGE: {page.upper()} - {data["title"]}')
    print('=' * 60)
    print('--- HEADINGS ---')
    for h in data['headings']:
        if h['text']:
            print(f"[{h['tag']}] {h['text']}")
    print('\n--- PARAGRAPHS (First 15) ---')
    for p in data['paragraphs'][:15]:
        print(f"- {p}")
    print('\n--- FORMS ---')
    for form in data['forms']:
        print(f"Form ID: {form['id']}, Inputs: {len(form['inputs'])}")
        for inp in form['inputs']:
            print(f"   [{inp['tag']} / {inp['type']}] name={inp['name']}, placeholder={inp['placeholder']}, val={inp['value']}")
    print('\n--- IMAGES ---')
    for img in data['images']:
        print(f"   {img['src']} (alt: {img['alt']})")
    print('\n\n')
