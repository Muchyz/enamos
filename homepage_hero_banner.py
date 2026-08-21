with open('src/App.jsx') as f:
    content = f.read()

old_hero = '''      <div className="relative h-64 md:h-80">
        <img src="/contact-officer.jpg" alt="Contact ENAMOS SECURITY"
          className="w-full h-full object-cover object-top"
          onError={e => { e.target.style.background="#0f172a"; }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(220,38,38,0.88),rgba(30,58,138,0.82))" }} />'''

new_hero = '''      <div className="relative h-64 md:h-80">
        <img src="/contact-banner.jpg" alt="Contact ENAMOS SECURITY"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.background="#0a1730"; }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,11,23,0.92) 0%, rgba(10,23,48,0.85) 45%, rgba(127,29,29,0.55) 78%, rgba(220,38,38,0.5) 100%)" }} />'''

n = content.count(old_hero)
print('Hero banner match:', n)
if n:
    content = content.replace(old_hero, new_hero)
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('Hero now uses contact-banner.jpg with a navy-to-red gradient overlay matching the rest of the page.')
else:
    print('No match — nothing written.')
