import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/director-matunda.jpg", caption: "Director Dr. Amos Matunda" },
  { src: "/gallery-parade-lineup.jpg", caption: "Guards on Parade at the Compound Gate" },
  { src: "/gallery-team-indoor.jpg", caption: "Team with Management" },
  { src: "/gallery-field-inspection.jpg", caption: "Field Inspection" },
  { src: "/gallery-training-session.jpg", caption: "Training Session" },
  { src: "/gallery-officers-formation.jpg", caption: "Officers Formation" },
  { src: "/gallery-squad-gathering.jpg", caption: "Squad Gathering" },
  { src: "/gallery-drill-marching.jpg", caption: "Drill Marching" },
  { src: "/gallery-supervisor-inspection.jpg", caption: "Supervisor Inspection" },
  { src: "/gallery-management-visit.jpg", caption: "Management Visit" },
  { src: "/gallery-officers-group.jpg", caption: "Officers Group" },
  { src: "/gallery-directors-briefing.jpg", caption: "Directors Briefing" },
  { src: "/gallery-full-team.jpg", caption: "Full Team Photo" },
  { src: "/gallery-officers-director.jpg", caption: "Officers with Director" },
  { src: "/gallery-leadership-team.jpg", caption: "Leadership Team" },
  { src: "/gallery-parade-formation.jpg", caption: "Parade Formation" },
  { src: "/gallery-team-lineup.jpg", caption: "Team Lineup" },
  { src: "/gallery-officers-salute.jpg", caption: "Officers Salute" },
  { src: "/gallery-recruits-group.jpg", caption: "Recruits Group" },
  { src: "/gallery-management-team.jpg", caption: "Management Team" },
  { src: "/gallery-new-recruits.jpg", caption: "New Recruits" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(
    () => setSelectedIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    []
  );
  const next = useCallback(
    () => setSelectedIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    []
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

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <p className="text-red-600 text-sm font-bold tracking-widest uppercase mb-2">
            See Us in Action
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-4 leading-tight">
            Our Gallery
          </h1>
          <p className="text-gray-500 text-lg">
            Take a look at our guards, equipment, and operations in action.
          </p>
        </div>

        {/* Stacked cards */}
        <div className="space-y-8">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setSelectedIndex(i)}
              className="group relative block w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-10 pb-4 px-5">
                <p className="text-white text-lg font-semibold text-left">{p.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <div className="max-w-4xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].caption}
              className="max-h-[75vh] w-auto mx-auto rounded-xl shadow-2xl object-contain"
            />
            <p className="text-white text-center mt-4 text-sm tracking-wide">
              {photos[selectedIndex].caption}
              <span className="text-white/40 ml-2">
                {selectedIndex + 1} / {photos.length}
              </span>
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
}
