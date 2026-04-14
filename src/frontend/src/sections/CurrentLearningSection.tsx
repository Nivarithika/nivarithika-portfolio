import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

const CURRENT_LEARNING = [
  {
    icon: "🇯🇵",
    title: "Japanese Language Learning",
    description:
      "Actively working through hiragana, katakana, and beginner kanji to reach N5 proficiency.",
    color: "pink",
  },
  {
    icon: "📊",
    title: "Infosys Virtual Internship – Data Analyst Course",
    description:
      "Completing a virtual internship with Infosys to build hands-on data analysis skills and industry exposure.",
    color: "violet",
  },
  {
    icon: "🎨",
    title: "Colour Theory",
    description:
      "Studying how colours communicate emotion, hierarchy, and identity — preparing for future design internship work.",
    color: "pink",
  },
];

export function CurrentLearningSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useStaggeredAnimation({ baseDelay: 130 });

  return (
    <section
      id="current-learning"
      className="relative py-24 px-4"
      aria-label="Current Learning"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 30%, oklch(0.55 0.24 274 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Always Growing
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-gradient-pink">Current</span>
            <span className="text-foreground"> Learning</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            These are the things I'm actively working on right now — not
            finished, not perfect, just passionately in progress.
          </p>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRENT_LEARNING.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`current-learning-card-${i}`}
              className="reveal glassmorphic-card rounded-2xl p-7 flex flex-col gap-4 card-hover-neon group"
              style={{
                border: `1px solid ${
                  item.color === "pink"
                    ? "oklch(0.68 0.26 317 / 0.14)"
                    : "oklch(0.55 0.24 274 / 0.14)"
                }`,
              }}
            >
              {/* Icon bubble */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    item.color === "pink"
                      ? "oklch(0.68 0.26 317 / 0.12)"
                      : "oklch(0.55 0.24 274 / 0.12)",
                  border: `1px solid ${
                    item.color === "pink"
                      ? "oklch(0.68 0.26 317 / 0.3)"
                      : "oklch(0.55 0.24 274 / 0.3)"
                  }`,
                }}
              >
                {item.icon}
              </div>

              {/* Label */}
              <span
                className="text-xs font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full self-start"
                style={{
                  background:
                    item.color === "pink"
                      ? "oklch(0.68 0.26 317 / 0.1)"
                      : "oklch(0.55 0.24 274 / 0.1)",
                  color: item.color === "pink" ? "#FF4D8D" : "#9B8AFF",
                }}
              >
                In Progress
              </span>

              {/* Title */}
              <h3
                className="text-lg font-bold text-foreground leading-snug"
                style={{ fontFamily: "Poppins, Sora, sans-serif" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Decorative bottom bar */}
              <div
                className="h-0.5 w-12 rounded-full mt-1 transition-all duration-300 group-hover:w-full"
                style={{
                  background:
                    item.color === "pink"
                      ? "linear-gradient(90deg, #FF4D8D, transparent)"
                      : "linear-gradient(90deg, #7A5CFF, transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
