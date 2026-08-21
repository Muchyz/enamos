with open('src/App.jsx') as f:
    content = f.read()

old_fade = '''      <div className="relative h-48 md:h-64">
        <img src="/contact-banner.jpg" alt="Contact ENAMOS SECURITY"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.background="#0a1730"; }} />
        <div className="absolute inset-x-0 bottom-0 h-16" style={{ background: "linear-gradient(180deg, transparent 0%, #050b17 100%)" }} />
      </div>'''

new_fade = '''      <div className="relative h-48 md:h-64">
        <img src="/contact-banner.jpg" alt="Contact ENAMOS SECURITY"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.background="#0a1730"; }} />
        <div className="absolute inset-x-0 bottom-0 h-full" style={{ background: "linear-gradient(180deg, transparent 0%, transparent 35%, rgba(5,11,23,0.4) 60%, rgba(5,11,23,0.8) 82%, #050b17 100%)" }} />
      </div>'''

n = content.count(old_fade)
print('Fade blend match:', n)
if n:
    content = content.replace(old_fade, new_fade)
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('Fade now spans the full image height, gradually darkening into navy — no more hard seam.')
else:
    print('No match — nothing written.')
