with open('src/App.jsx') as f:
    content = f.read()

changes = []

# 1. Remove the image block entirely (banner img + its overlay tints)
old_image_block = '''      <div className="relative h-48 md:h-64">
        <img src="/contact-banner.jpg" alt="Contact ENAMOS SECURITY"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.background="#0a1730"; }} />
        <div className="absolute inset-0" style={{ background: "rgba(10,23,48,0.55)" }} />
        <div className="absolute inset-x-0 bottom-0 h-full" style={{ background: "linear-gradient(180deg, transparent 0%, transparent 20%, rgba(5,11,23,0.5) 50%, rgba(5,11,23,0.85) 78%, #050b17 100%)" }} />
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">
          <h2 className="text-4xl md:text-5xl text-white mb-3 pt-2" style={{ fontFamily: "'DM Serif Display',serif" }}>'''

new_hero_no_image = '''      <div>
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-2">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-white/20">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl text-white mb-3" style={{ fontFamily: "'DM Serif Display',serif" }}>'''

changes.append(('Remove image, restore pill, fix padding', content.count(old_image_block)))
content = content.replace(old_image_block, new_hero_no_image)

for label, n in changes:
    print(f'{label}: {n}')

if all(n > 0 for _, n in changes):
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('Image removed — clean solid navy hero with badge restored.')
else:
    print('No match — nothing written. Paste: grep -n "contact-banner.jpg" -B 3 -A 15 src/App.jsx')
