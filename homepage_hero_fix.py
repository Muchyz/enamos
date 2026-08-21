with open('src/App.jsx') as f:
    content = f.read()

old_hero = '''      <div className="relative h-64 md:h-80">
        <img src="/contact-banner.jpg" alt="Contact ENAMOS SECURITY"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.background="#0a1730"; }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,11,23,0.92) 0%, rgba(10,23,48,0.85) 45%, rgba(127,29,29,0.55) 78%, rgba(220,38,38,0.5) 100%)" }} />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-white/20">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl text-white mb-3" style={{ fontFamily: "'DM Serif Display',serif" }}>
              Let's Build Your<br />
              <span style={{ background: "linear-gradient(135deg,#fca5a5,#bfdbfe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Security Plan
              </span>
            </h2>
            <p className="text-white/70 text-sm max-w-md">Free site assessment and custom quote. Our team responds within 2 hours.</p>
          </div>
        </div>
      </div>'''

new_hero = '''      <div className="relative h-48 md:h-64">
        <img src="/contact-banner.jpg" alt="Contact ENAMOS SECURITY"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.background="#0a1730"; }} />
        <div className="absolute inset-x-0 bottom-0 h-16" style={{ background: "linear-gradient(180deg, transparent 0%, #050b17 100%)" }} />
      </div>
      <div style={{ background: "linear-gradient(180deg, #050b17 0%, #0a1730 55%, #102a4d 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-white/20">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl text-white mb-3" style={{ fontFamily: "'DM Serif Display',serif" }}>
            Let's Build Your<br />
            <span style={{ background: "linear-gradient(135deg,#fca5a5,#bfdbfe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Security Plan
            </span>
          </h2>
          <p className="text-white/70 text-sm max-w-md">Free site assessment and custom quote. Our team responds within 2 hours.</p>
        </div>
      </div>'''

n = content.count(old_hero)
print('Hero restructure match:', n)
if n:
    content = content.replace(old_hero, new_hero)
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('Banner image now shows clean and full, heading text moved below it into the navy section — no more overlap.')
else:
    print('No match — nothing written. Paste: grep -n "contact-banner.jpg" -A 20 src/App.jsx')
