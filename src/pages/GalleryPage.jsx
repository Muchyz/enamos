import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const photos = [
  { src: "/director-matunda.jpg", caption: "Director Dr. Amos Matunda", tag: "Leadership" },
  { src: "/gallery-parade-lineup.jpg", caption: "Guards on Parade at the Compound Gate", tag: "Operations" },
  { src: "/gallery-team-indoor.jpg", caption: "Team with Management", tag: "Leadership" },
  { src: "/gallery-field-inspection.jpg", caption: "Field Inspection", tag: "Operations" },
  { src: "/gallery-training-session.jpg", caption: "Training Session", tag: "Training" },
  { src: "/gallery-officers-formation.jpg", caption: "Officers Formation", tag: "Operations" },
  { src: "/gallery-squad-gathering.jpg", caption: "Squad Gathering", tag: "Team" },
  { src: "/gallery-drill-marching.jpg", caption: "Drill Marching", tag: "Training" },
  { src: "/gallery-supervisor-inspection.jpg", caption: "Supervisor Inspection", tag: "Operations" },
  { src: "/gallery-management-visit.jpg", caption: "Management Visit", tag: "Leadership" },
  { src: "/gallery-officers-group.jpg", caption: "Officers Group", tag: "Team" },
  { src: "/gallery-directors-briefing.jpg", caption: "Directors Briefing", tag: "Leadership" },
  { src: "/gallery-full-team.jpg", caption: "Full Team Photo", tag: "Team" },
  { src: "/gallery-officers-director.jpg", caption: "Officers with Director", tag: "Leadership" },
  { src: "/gallery-leadership-team.jpg", caption: "Leadership Team", tag: "Leadership" },
  { src: "/gallery-parade-formation.jpg", caption: "Parade Formation", tag: "Operations" },
  { src: "/gallery-team-lineup.jpg", caption: "Team Lineup", tag: "Team" },
  { src: "/gallery-officers-salute.jpg", caption: "Officers Salute", tag: "Operations" },
  { src: "/gallery-recruits-group.jpg", caption: "Recruits Group", tag: "Training" },
  { src: "/gallery-management-team.jpg", caption: "Management Team", tag: "Leadership" },
  { src: "/gallery-new-recruits.jpg", caption: "New Recruits", tag: "Training" },
];

const tags = ["All", ...Array.from(new Set(photos.map((p) => p.tag)))];

function prevIndex(i, len) { return (i - 1 + len) % len; }
function nextIndex(i, len) { return (i + 1) % len; }

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loaded, setLoaded] = useState({});
  const touchStartX = useRef(null);

  const filtered = activeTag === "All" ? photos : photos.filter((p) => p.tag === activeTag);

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(
    () => setSelectedIndex((i) => (i === null ? null : prevIndex(i, filtered.length))),
    [filtered.length]
  );
  const next = useCallback(
    () => setSelectedIndex((i) => (i === null ? null : nextIndex(i, filtered.length))),
    [filtered.length]
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, close, prev, next]);

  useEffect(() => {
    if (selectedIndex === null) return;
    [prevIndex(selectedIndex, filtered.length), nextIndex(selectedIndex, filtered.length)].forEach((i) => {
      const img = new Image();
      img.src = filtered[i].src;
    });
  }, [selectedIndex, filtered]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen pt-28 pb-24" style={{ background: "linear-gradient(160deg,#fef2f2,#fafafa,#eff6ff)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
            <Camera className="w-3.5 h-3.5" /> Our Gallery
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            ENAMOS SECURITY in{" "}
            <span style={{ background: "linear-gradient(135deg,#dc2626,#1e3a8a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Action
            </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            A look at our team, operations and commitment to security excellence across Kenya.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeTag === t
                  ? "bg-red-600 text-white shadow"
                  : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setSelectedIndex(i)}
              className="group text-left rounded-2xl overflow-hidden shadow-md hover:shadow-2xl ring-1 ring-black/5 transition-all duration-300 bg-white"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200">
                {!loaded[p.src] && (
                  <div className="absolute inset-0 animate-pulse bg-gray-200" />
                )}
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  onLoad={() => setLoaded((l) => ({ ...l, [p.src]: true }))}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                    loaded[p.src] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <div className="px-3 py-2.5">
                <p className="text-gray-800 text-xs sm:text-sm font-medium leading-snug line-clamp-2">
                  {p.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20">No photos in this category yet.</p>
        )}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn p-0"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-5 right-5 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors hidden sm:block"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <div className="w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[selectedIndex].src}
              alt={filtered[selectedIndex].caption}
              className="w-full h-full max-w-full max-h-[calc(100vh-70px)] object-contain select-none"
              draggable={false}
            />
            <p className="text-white text-center mt-3 text-sm tracking-wide px-4">
              {filtered[selectedIndex].caption}
              <span className="text-white/40 ml-2">
                {selectedIndex + 1} / {filtered.length}
              </span>
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors hidden sm:block"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
}
