path = "src/pages/AboutPage.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

if "Human Resource" in content:
    print("Already updated - no changes made.")
    raise SystemExit(0)

old_grid = '<div className="grid md:grid-cols-3 gap-8">'
new_grid = '<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">'
if old_grid not in content:
    print("ERROR: grid marker not found, aborting.")
    raise SystemExit(1)
content = content.replace(old_grid, new_grid, 1)

card1_old = '{ icon: Shield, color: "#fca5a5", title: "Safety and Quality", desc: "Safety and quality are the top priorities considered as we render every service to our clients. We never compromise." },'
card1_new = '{ icon: Users, color: "#fca5a5", title: "Human Resource", desc: "We endeavor to hire and maintain highly trained and well-motivated security personnel across every deployment." },'

card2_old = '{ icon: Users, color: "#93c5fd", title: "Commitment to People Development", desc: "We strive to work as a team so as to create value to the customer and invest in employee growth and career development." },'
card2_new = '{ icon: Shield, color: "#93c5fd", title: "Absolute Integrity", desc: "We deliver true value for our clients through open liaison and consultation, with zero tolerance for corruption." },\n                { icon: Award, color: "#6ee7b7", title: "Solution Provider", desc: "We use proprietary processes and extensive experience to deliver expert solutions, improving safety and reducing risk and loss." },'

card3_old = '{ icon: Award, color: "#6ee7b7", title: "Professionalism", desc: "As a company we are always determined to constantly achieve high standards in everything we do and have. Excellence is non-negotiable." },'
card3_new = '{ icon: Cpu, color: "#fcd34d", title: "Innovation", desc: "We are a professional and progressive company, proactive in delivering forward-thinking security solutions to our clients." },'

pairs = [(card1_old, card1_new), (card2_old, card2_new), (card3_old, card3_new)]
missing = [old for old, new in pairs if old not in content]
if missing:
    print("ERROR: markers not found, aborting. No changes made.")
    for m in missing:
        print(" - missing:", m[:80])
    raise SystemExit(1)

for old, new in pairs:
    content = content.replace(old, new, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Core Values section updated successfully.")
