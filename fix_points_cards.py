path = "src/App.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

if "Nationwide Coverage" in content:
    print("Already updated - no changes made.")
    raise SystemExit(0)

old_points = """  const points = [
    { icon: Shield, color: "#dc2626", bg: "#fef2f2", label: "Licensed & Compliant", desc: "Fully compliant with Kenyan regulations and committed to zero-tolerance on corruption." },
    { icon: Cpu, color: "#1e3a8a", bg: "#eff6ff", label: "Innovation-Driven", desc: "Continuously investing in technology and our people to bring the best solutions." },
    { icon: Users, color: "#15803d", bg: "#f0fdf4", label: "Disciplined Personnel", desc: "Senior management with Disciplined Forces experience. Military-grade training standards." },
    { icon: Globe, color: "#b45309", bg: "#fffbeb", label: "East Africa Vision", desc: "Serving Kenya and targeting expansion across East Africa markets." },
  ];"""

new_points = """  const points = [
    { icon: FileCheck, color: "#dc2626", bg: "#fef2f2", label: "PSRA Registered", desc: "Duly incorporated under Chapter 486 of the Laws of Kenya and licensed by the Private Security Regulatory Authority." },
    { icon: Radio, color: "#1e3a8a", bg: "#eff6ff", label: "24-Hour Alarm Response", desc: "Round-the-clock control room monitoring with rapid dispatch backed by modern electronic surveillance systems." },
    { icon: Users, color: "#15803d", bg: "#f0fdf4", label: "Trained Guard Force", desc: "Guards trained in patrol, first aid, firefighting, and incident reporting, supervised by experienced site managers." },
    { icon: Globe, color: "#b45309", bg: "#fffbeb", label: "Nationwide Coverage", desc: "Deployed across Nairobi, Eldoret and beyond, with free security surveys for every new client site." },
  ];"""

old_card_style = """                <div key={i} className="p-4 rounded-2xl hover:shadow-lg transition-all duration-200 overflow-hidden border-t-4"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    borderTopColor: p.color,
                    boxShadow: `0 4px 20px 0 ${p.color}20`,
                  }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3 mx-auto"
                    style={{ background: p.bg }}>
                    <p.icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <div className="text-sm font-bold text-gray-800 mb-1 text-center">{p.label}</div>
                  <div className="text-xs text-gray-500 leading-snug text-center">{p.desc}</div>
                </div>"""

new_card_style = """                <div key={i} className="p-4 rounded-2xl hover:shadow-lg transition-all duration-200 overflow-hidden flex items-start gap-3"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: `1px solid ${p.color}30`,
                    boxShadow: `0 4px 20px 0 ${p.color}20`,
                  }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: p.bg }}>
                    <p.icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-gray-800 mb-1">{p.label}</div>
                    <div className="text-xs text-gray-500 leading-snug">{p.desc}</div>
                  </div>
                </div>"""

pairs = [(old_points, new_points), (old_card_style, new_card_style)]
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

print("Points cards updated successfully.")
