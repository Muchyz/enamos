with open('src/App.jsx') as f:
    content = f.read()

old_fade = '''      <div className="relative h-48 md:h-64">
        <img src="/contact-banner.jpg" alt="Contact ENAMOS SECURITY"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.background="#0a1730"; }} />
        <div className="absolute inset-x-0 bottom-0 h-full" style={{ background: "linear-gradient(180deg, transparent 0%, transparent 35%, rgba(5,11,23,0.4) 60%, rgba(5,11,23,0.8) 82%, #050b17 100%)" }} />
      </div>'''

new_fade = '''      <div className="relative h-48 md:h-64">
        <img src="/contact-banner.jpg" alt="Contact ENAMOS SECURITY"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.background="#0a1730"; }} />
        <div className="absolute inset-0" style={{ background: "rgba(10,23,48,0.55)" }} />
        <div className="absolute inset-x-0 bottom-0 h-full" style={{ background: "linear-gradient(180deg, transparent 0%, transparent 20%, rgba(5,11,23,0.5) 50%, rgba(5,11,23,0.85) 78%, #050b17 100%)" }} />
      </div>'''

n = content.count(old_fade)
print('Tint match:', n)
if n:
    content = content.replace(old_fade, new_fade)
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('Image now tinted navy across its whole height before fading to solid — colors should match the section below.')
else:
    print('No match — nothing written.')
