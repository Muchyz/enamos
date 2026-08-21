with open('src/App.jsx') as f:
    content = f.read()

changes = []

# 1. Wrap the whole contact section (image + heading + form) in one continuous navy background
old_section = '<section id="contact" className="overflow-hidden">'
new_section = '<section id="contact" className="overflow-hidden" style={{ background: "linear-gradient(180deg, #050b17 0%, #0a1730 40%, #102a4d 70%, #0a1730 100%)" }}>'
changes.append(('Section wrapper bg', content.count(old_section)))
content = content.replace(old_section, new_section)

# 2. Remove the separate background from the heading text wrapper (now inherits from section)
old_heading_wrap = '<div style={{ background: "linear-gradient(180deg, #050b17 0%, #0a1730 55%, #102a4d 100%)" }}>\n        <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">'
new_heading_wrap = '<div>\n        <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">'
changes.append(('Heading wrapper bg removed', content.count(old_heading_wrap)))
content = content.replace(old_heading_wrap, new_heading_wrap)

# 3. Remove the separate background from the form section wrapper (now inherits from section)
old_form_wrap = '<div className="py-16" style={{ background: "linear-gradient(180deg, #050b17 0%, #0a1730 55%, #102a4d 100%)" }}>'
new_form_wrap = '<div className="py-16">'
changes.append(('Form wrapper bg removed', content.count(old_form_wrap)))
content = content.replace(old_form_wrap, new_form_wrap)

for label, n in changes:
    print(f'{label}: {n}')

if all(n > 0 for _, n in changes):
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('All backgrounds unified onto one shared parent — no more seams.')
else:
    print('One or more patterns did not match — nothing written. Check the 0-count line(s) above.')
