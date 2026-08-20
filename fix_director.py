import re

path = "src/App.jsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = '<p className="text-white text-xl leading-relaxed font-medium">'
end_marker = '<div className="pt-4 border-t border-white/10 flex items-center'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("ERROR: markers not found, aborting. No changes made.")
    raise SystemExit(1)

new_block = '''<p className="text-white text-xl leading-relaxed font-medium">
                "Security is not just about gates, alarms or patrols. Security is peace of mind — knowing that when the world sleeps, someone is watching."
              </p>
              <p className="text-white/70 leading-relaxed">
                Thank you. Your trust is our greatest asset. You invite ENAMOS SECURITY SERVICES into your homes, your businesses and your communities, and we do not take this responsibility lightly. We promise to keep upgrading our technology, our training and our response times.
              </p>
              <p className="text-white/70 leading-relaxed">
                You are the heartbeat of ENAMOS SECURITY SERVICES. Day and night, in the rain and heat, you stand on the front lines and make sacrifices every single day. We are dedicated to supporting your welfare, your safety and your professional growth.
              </p>
              <p className="text-white/70 leading-relaxed">
                Safety is a shared duty. ENAMOS SECURITY SERVICES believes in strong community partnerships, standing ready to serve and protect the wider community, building a culture of alertness and mutual respect. Your safety is our watch — Protection You Can Rely On.
              </p>
              '''

new_content = content[:start_idx] + new_block + content[end_idx:]

with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Replaced block: {end_idx - start_idx} chars -> {len(new_block)} chars")
