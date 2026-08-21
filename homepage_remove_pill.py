with open('src/App.jsx') as f:
    content = f.read()

old_pill = '''          <span className="inline-block bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-white/20">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl text-white mb-3" style={{ fontFamily: "'DM Serif Display',serif" }}>'''

new_pill = '''          <h2 className="text-4xl md:text-5xl text-white mb-3 pt-2" style={{ fontFamily: "'DM Serif Display',serif" }}>'''

n = content.count(old_pill)
print('Pill match:', n)
if n:
    content = content.replace(old_pill, new_pill)
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('Contact Us pill removed — heading now starts directly below the banner image.')
else:
    print('No match — nothing written. Paste: grep -n "Contact Us" -A 3 -B 1 src/App.jsx')
