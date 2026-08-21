with open('src/pages/ContactPage.jsx') as f:
    content = f.read()

old = '''              <div className="flex items-center gap-6 font-mono text-xs text-white/40 tracking-wider">
                <div><span className="text-white text-base font-semibold block">24/7</span>DISPATCH</div>
                <div className="w-px h-8 bg-white/10" />
                <div><span className="text-white text-base font-semibold block">2 hrs</span>RESPONSE</div>
                <div className="w-px h-8 bg-white/10" />
                <div><span className="text-white text-base font-semibold block">2</span>BRANCHES</div>
              </div>'''

new = '''              <div className="grid grid-cols-3 gap-3 text-center font-mono text-xs text-white/40 tracking-wider border-t border-white/10 pt-6">
                <div><span className="text-white text-base font-semibold block mb-1">24/7</span>DISPATCH</div>
                <div><span className="text-white text-base font-semibold block mb-1">2 hrs</span>RESPONSE</div>
                <div><span className="text-white text-base font-semibold block mb-1">2</span>BRANCHES</div>
              </div>'''

n = content.count(old)
print('Match found:', n)
if n > 0:
    content = content.replace(old, new)
    with open('src/pages/ContactPage.jsx', 'w') as f:
        f.write(content)
    print('Stats row fixed.')
else:
    print('No match — paste: grep -n "24/7" -B3 -A3 src/pages/ContactPage.jsx')
