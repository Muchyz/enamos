path = "src/App.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = """                <div key={i} className="p-4 rounded-2xl hover:shadow-lg transition-all duration-200 overflow-hidden flex items-start gap-3"
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

new = """                <div key={i} className="p-4 rounded-2xl hover:shadow-lg transition-all duration-200 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: `1px solid ${p.color}30`,
                    boxShadow: `0 4px 20px 0 ${p.color}20`,
                  }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
                    style={{ background: p.bg }}>
                    <p.icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <div className="text-sm font-bold text-gray-800 mb-1 text-left">{p.label}</div>
                  <div className="text-xs text-gray-500 leading-snug text-left">{p.desc}</div>
                </div>"""

if old not in content:
    print("ERROR: marker not found, aborting. No changes made.")
    raise SystemExit(1)

content = content.replace(old, new, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Card layout fixed successfully.")
