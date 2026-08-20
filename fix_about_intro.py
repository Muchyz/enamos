path = "src/pages/AboutPage.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

if "duly incorporated and registered" in content:
    print("Already updated - no changes made.")
    raise SystemExit(0)

old1 = """<p>ENAMOS SECURITY SERVICES LIMITED is a Kenyan company dedicated to the provision of excellent security services. We are capable of dealing with all your security needs and offer a complete range of planning, system analysis and design as well as executive services.</p>"""
new1 = """<p>ENAMOS SECURITY SERVICES LIMITED is duly incorporated and registered under the Companies Act, Chapter 486, Laws of Kenya. We are a Kenyan-based company specializing in quality, nationwide security services. Whether it is an extra pair of eyes, an imposing presence, crowd control at a major event, or daily guarding for a business premise, ENAMOS SECURITY SERVICES delivers a complete range of planning, system analysis, design and executive protection services tailored to every client.</p>"""

old2 = """<p>Driven by our vision, mission and values \u2014 our commitment to uphold compliance and zero-tolerance approach on corruption signals how we operate: ethically and responsibly. We partner with international companies to equip our clients with the best solutions available.</p>"""
new2 = """<p>We pride ourselves on providing well-trained security personnel for every private security and protection need. Top-level management, combined with friendly and reliable customer service, is the cornerstone of the guarding services and private protection we deliver to every client. Our range extends across specialized VIP protection, security consultancy, guard force training programs, commercial and industrial protection, private investigations, free security surveys, and dog patrol services.</p>"""

old3 = """<p>Our Management is complemented by reputable managers with years of experience in the security industry. Our General Manager boasts of over <span className="font-semibold text-gray-700">35 years experience</span> in the industry, with a foot in training and membership in the industry's Professional Association.</p>"""
new3 = """<p>Our mission is to exceed the specific and customized security needs of our clients by delivering the highest quality of professional private security services, built on trust and confidence. Our vision is to become the security company of choice in and outside Kenya, offering services tailor-made to suit individual client needs. Our Management team is complemented by reputable, experienced professionals, with over <span className="font-semibold text-gray-700">35 years</span> of combined industry experience and standing membership in recognized security professional associations.</p>"""

pairs = [(old1, new1), (old2, new2), (old3, new3)]
missing = [old for old, new in pairs if old not in content]
if missing:
    print(f"ERROR: {len(missing)} marker(s) not found, aborting. No changes made.")
    for m in missing:
        print(" - missing:", m[:100])
    raise SystemExit(1)

for old, new in pairs:
    content = content.replace(old, new, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("About intro rewritten successfully.")
