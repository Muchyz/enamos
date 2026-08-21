with open('src/pages/ContactPage.jsx') as f:
    content = f.read()

old = '<div style={{ paddingTop: "96px", background: "linear-gradient(180deg, #050b17 0%, #0a1730 35%, #102a4d 65%, #0a1730 100%)" }}>'
new = '''<div className="relative" style={{ paddingTop: "96px", background: "linear-gradient(180deg, #050b17 0%, #0a1730 35%, #102a4d 65%, #0a1730 100%)" }}>
      <div className="absolute top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "#dc2626" }} />
      <div className="absolute top-96 -right-24 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "#38bdf8" }} />'''

n1 = content.count(old)
content = content.replace(old, new)

old_badge = '<div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full" style={{ background: "rgba(220,38,38,0.15)", border: "1px solid rgba(248,113,113,0.4)" }}>'
new_badge = '<div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full backdrop-blur-sm" style={{ background: "rgba(220,38,38,0.12)", border: "1px solid rgba(248,113,113,0.35)", boxShadow: "0 4px 20px -4px rgba(220,38,38,0.3)" }}>'
n2 = content.count(old_badge)
content = content.replace(old_badge, new_badge)

old_h1 = """<h1 className="text-4xl sm:text-5xl mb-5 leading-[1.15] text-white" style={{ fontFamily: "'DM Serif Display',serif" }}>"""
new_h1 = """<div className="h-1 w-14 rounded-full mb-5" style={{ background: "linear-gradient(90deg,#38bdf8,#dc2626)" }} />
              <h1 className="text-4xl sm:text-5xl mb-5 leading-[1.15] text-white" style={{ fontFamily: "'DM Serif Display',serif" }}>"""
n3 = content.count(old_h1)
content = content.replace(old_h1, new_h1)

print('Glow accents:', n1, '| Badge polished:', n2, '| Accent divider:', n3)
if n1 and n2 and n3:
    with open('src/pages/ContactPage.jsx', 'w') as f:
        f.write(content)
    print('Hero polished with subtle glow accents, refined badge, and accent divider.')
else:
    print('Mismatch — one pattern did not match, nothing written.')
