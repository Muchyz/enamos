with open('src/pages/ContactPage.jsx') as f:
    content = f.read()

# 1. Shrink the navy backing block to a subtle peek instead of a thick bar
old_block = '''            <div className="relative pb-10 pr-6 sm:pr-10">
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full rounded-2xl" style={{ background: "linear-gradient(135deg,#1e3a8a,#0f172a)" }} />'''

new_block = '''            <div className="relative pb-10 pr-3 sm:pr-4">
              <div className="absolute -top-3 -right-3 sm:-top-3 sm:-right-3 w-[calc(100%-1.5rem)] sm:w-[calc(100%-1rem)] h-[calc(100%-2.5rem)] rounded-2xl" style={{ background: "linear-gradient(135deg,#1e3a8a,#0f172a)" }} />'''

n1 = content.count(old_block)
content = content.replace(old_block, new_block)

# 2. Reduce the excess bottom padding on the hero wrapper
old_pad = 'pt-10 pb-24 md:pt-14 md:pb-20'
new_pad = 'pt-10 pb-14 md:pt-14 md:pb-14'
n2 = content.count(old_pad)
content = content.replace(old_pad, new_pad)

print('Backing block fixed:', n1, '| Bottom padding fixed:', n2)
if n1 > 0 or n2 > 0:
    with open('src/pages/ContactPage.jsx', 'w') as f:
        f.write(content)
    print('Saved.')
else:
    print('No matches — run: grep -n "pb-24 md:pt-14\\|-top-3 -right-3" src/pages/ContactPage.jsx')
