import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

const SKILLS = [
  { emoji: "🐍", name: "Python", level: "Basic", color: "pink" },
  { emoji: "📊", name: "Microsoft Excel", level: "Beginner", color: "violet" },
  { emoji: "🧩", name: "Problem Solving", level: "Developing", color: "pink" },
  {
    emoji: "🗣️",
    name: "Communication Skills",
    level: "Intermediate",
    color: "violet",
  },
  {
    emoji: "🇯🇵",
    name: "Japanese Language",
    level: "N5 – Learning",
    color: "pink",
  },
  { emoji: "🎙️", name: "Podcasting", level: "Enthusiast", color: "violet" },
  { emoji: "🎨", name: "Drawing", level: "Intermediate", color: "pink" },
  { emoji: "📚", name: "Continuous Learning", level: "MOOC", color: "violet" },
  { emoji: "✈️", name: "Travel Enthusiast", level: "Explorer", color: "pink" },
  {
    emoji: "🎵",
    name: "Music & Instruments",
    level: "Exploring",
    color: "violet",
  },
  {
    emoji: "🎨",
    name: "Colour Theory",
    level: "Currently Learning",
    color: "pink",
  },
  {
    emoji: "🎬",
    name: "Video Editing",
    level: "Currently Learning",
    color: "violet",
  },
];

export function SkillsSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useStaggeredAnimation({ baseDelay: 80 });

  return (
    <section
      id="skills"
      className="relative py-24 px-4"
      aria-label="Skills & Interests"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 70%, oklch(0.68 0.26 317 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            What I Bring to the Table
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-gradient-pink">Skills </span>
            <span className="text-foreground">&amp; </span>
            <span className="text-gradient-violet">Interests</span>
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Skills grid */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="reveal glassmorphic-card rounded-2xl p-5 flex flex-col items-center text-center gap-3 card-hover-neon group cursor-default"
              style={{
                border: `1px solid ${
                  skill.color === "pink"
                    ? "oklch(0.68 0.26 317 / 0.12)"
                    : "oklch(0.55 0.24 274 / 0.12)"
                }`,
              }}
            >
              {/* Emoji icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    skill.color === "pink"
                      ? "oklch(0.68 0.26 317 / 0.1)"
                      : "oklch(0.55 0.24 274 / 0.1)",
                  border: `1px solid ${
                    skill.color === "pink"
                      ? "oklch(0.68 0.26 317 / 0.25)"
                      : "oklch(0.55 0.24 274 / 0.25)"
                  }`,
                }}
              >
                {skill.emoji}
              </div>

              {/* Name */}
              <p
                className="text-sm font-bold text-foreground leading-tight"
                style={{ fontFamily: "Poppins, Sora, sans-serif" }}
              >
                {skill.name}
              </p>

              {/* Level badge */}
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  background:
                    skill.color === "pink"
                      ? "oklch(0.68 0.26 317 / 0.08)"
                      : "oklch(0.55 0.24 274 / 0.08)",
                  color: skill.color === "pink" ? "#FF4D8D" : "#9B8AFF",
                  border: `1px solid ${
                    skill.color === "pink"
                      ? "oklch(0.68 0.26 317 / 0.2)"
                      : "oklch(0.55 0.24 274 / 0.2)"
                  }`,
                }}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
