with open('src/pages/ContactPage.jsx') as f:
    content = f.read()

old = '''          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">'''
new = '''          <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-24 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">'''

n = content.count(old)
print('Match found:', n)
if n > 0:
    content = content.replace(old, new)
    with open('src/pages/ContactPage.jsx', 'w') as f:
        f.write(content)
    print('Added bottom padding for badge clearance.')
else:
    print('No match — paste: grep -n "py-16 md:py-24" src/pages/ContactPage.jsx')
