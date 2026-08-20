path = "src/App.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

if "duly incorporated and registered" in content:
    print("Already updated - no changes made.")
    raise SystemExit(0)

old1 = """              ENAMOS SECURITY SERVICES LIMITED is a Kenyan company dedicated to the provision of excellent security services. We are capable of dealing with all your security needs and offer a complete range of planning, system analysis and design as well as executive services.
            </p>"""
new1 = """              ENAMOS SECURITY SERVICES LIMITED is duly incorporated and registered under the Companies Act, Chapter 486, Laws of Kenya. We are a Kenyan-based company specializing in quality, nationwide security services, delivering a complete range of planning, system analysis, design and executive protection tailored to every client.
            </p>"""

old2 = """              Driven by our vision, mission and values \u2014 our commitment to uphold compliance and zero-tolerance approach on corruption signals how we operate: ethically and responsibly. We partner with international companies to equip our clients with the best solutions available.
            </p>"""
new2 = """              We pride ourselves on providing well-trained security personnel for every private security and protection need. Our services span specialized VIP protection, security consultancy, guard force training, commercial and industrial protection, private investigations, free security surveys, and dog patrol services.
            </p>"""

old3 = """              Our Management is complimented by reputable managers with years of experience in the security industry. Our General Manager boasts of over <span className="font-semibold text-gray-700">35 years experience</span> in the industry, with a foot in training and membership in the industry's Professional Association.
            </p>"""
new3 = """              Our mission is to exceed the specific and customized security needs of our clients, delivering the highest quality of professional private security services built on trust and confidence. Our General Manager brings over <span className="font-semibold text-gray-700">35 years experience</span> in the industry, with standing membership in recognized security professional associations.
            </p>"""

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

print("Homepage About section rewritten successfully.")
