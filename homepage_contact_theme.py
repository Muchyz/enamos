with open('src/App.jsx') as f:
    content = f.read()

changes = []

# 1. Form section background -> navy gradient
old = 'style={{ background: "linear-gradient(160deg,#fef2f2,#fafafa,#eff6ff)" }}'
new = 'style={{ background: "linear-gradient(180deg, #050b17 0%, #0a1730 55%, #102a4d 100%)" }}'
changes.append(('Section bg', content.count(old)))
content = content.replace(old, new)

# 2. Card wrapper -> solid white + blue top accent stripe
old = '<div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">'
new = '''<div className="relative rounded-3xl p-8 md:p-10" style={{ background: "#ffffff", boxShadow: "0 25px 60px -15px rgba(0,0,0,0.5)", border: "1px solid #ffffff" }}>
                <div className="absolute top-0 left-8 right-8 h-1 rounded-full" style={{ background: "linear-gradient(90deg,#2563eb,#1e3a8a)" }} />'''
changes.append(('Card wrapper', content.count(old)))
content = content.replace(old, new)

# 3. Red/navy gradients -> blue-only (icon box + submit button, 2 matches)
old = 'style={{ background: "linear-gradient(135deg,#dc2626,#1e3a8a)" }}'
new = 'style={{ background: "linear-gradient(135deg,#2563eb,#1e40af)" }}'
changes.append(('Icon/button gradient', content.count(old)))
content = content.replace(old, new)

# 4. Labels -> navy color, no gray (5 matches)
old = 'className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider"'
new = 'className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "#1e3a8a" }}'
changes.append(('Labels', content.count(old)))
content = content.replace(old, new)

# 5. Text/tel/email inputs -> crisp white with blue focus (3 matches)
old = 'className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 bg-gray-50 transition-all" />'
new = 'className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500" />'
changes.append(('Text inputs', content.count(old)))
content = content.replace(old, new)

# 6. Select dropdown
old = 'className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 bg-gray-50 transition-all">'
new = 'className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500">'
changes.append(('Select', content.count(old)))
content = content.replace(old, new)

# 7. Textarea
old = 'className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 bg-gray-50 resize-none transition-all" />'
new = 'className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white resize-none transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500" />'
changes.append(('Textarea', content.count(old)))
content = content.replace(old, new)

# 8. "Get In Touch" side panel -> match navy family
old = 'style={{ background: "linear-gradient(160deg,#0f172a,#1e1b4b)" }}'
new = 'style={{ background: "linear-gradient(180deg, #050b17 0%, #0a1730 45%, #102a4d 100%)" }}'
changes.append(('Get In Touch panel', content.count(old)))
content = content.replace(old, new)

# 9. Email entry -> single info@enamos.co.ke (match ContactPage)
old = '{ icon: Mail, color: "#1e3a8a", bg: "#eff6ff", label: "Email Us", lines: [{text: "enamossecsolutions@gmail.com", href: "mailto:enamossecsolutions@gmail.com"}, {text: "info@enamossecurity.co.ke", href: "mailto:info@enamossecurity.co.ke"}] },'
new = '{ icon: Mail, color: "#1e3a8a", bg: "#eff6ff", label: "Email Us", lines: [{text: "info@enamos.co.ke", href: "mailto:info@enamos.co.ke"}] },'
changes.append(('Email fix', content.count(old)))
content = content.replace(old, new)

# 10. Trust icons red -> blue
old = '<t.icon className="w-4 h-4 mx-auto mb-1 text-red-500" />'
new = '<t.icon className="w-4 h-4 mx-auto mb-1 text-blue-600" />'
changes.append(('Trust icons', content.count(old)))
content = content.replace(old, new)

for label, n in changes:
    print(f'{label}: {n}')

if all(n > 0 for _, n in changes):
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('All patches applied — homepage contact section now matches /contact theme.')
else:
    print('One or more patterns did not match — nothing written. Check the 0-count line(s) above.')
