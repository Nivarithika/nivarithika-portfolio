import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

const ACTIVITIES = [
  {
    icon: "🌸",
    title: "Exploring IKIGAI",
    description:
      "Diving deep into the Japanese philosophy of purpose and meaning through reading — uncovering what truly drives a fulfilling life.",
    color: "pink",
  },
  {
    icon: "🎙️",
    title: "Book Talk",
    description:
      "Shared insights and led a discussion in the club about a chosen book, sparking curiosity and thoughtful conversation among members.",
    color: "violet",
  },
];

export function MemberOfClubSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const cardRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });
  const activitiesRef = useStaggeredAnimation({ baseDelay: 130 });
  const quoteRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="member-of-club"
      className="relative py-24 px-4"
      aria-label="Member of a Club"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 20% 60%, oklch(0.68 0.26 317 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Community &amp; Growth
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-gradient-pink">Member</span>
            <span className="text-foreground"> of a Club</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Where curiosity meets community — growing through shared knowledge,
            meaningful conversations, and the power of books.
          </p>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Main Reader's Club card */}
        <div ref={cardRef} className="reveal mb-8">
          <div
            className="glassmorphic-card rounded-2xl p-8 md:p-10 card-hover-neon group"
            style={{
              border: "1px solid oklch(0.68 0.26 317 / 0.18)",
              boxShadow: "0 0 40px oklch(0.68 0.26 317 / 0.06)",
            }}
          >
            {/* Club header row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
              {/* Icon bubble — animate-float */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 animate-float"
                style={{
                  background: "oklch(0.68 0.26 317 / 0.12)",
                  border: "1px solid oklch(0.68 0.26 317 / 0.35)",
                  boxShadow: "0 0 24px oklch(0.68 0.26 317 / 0.18)",
                }}
              >
                📚
              </div>

              {/* Club name + badge */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-foreground"
                    style={{ fontFamily: "Poppins, Sora, sans-serif" }}
                  >
                    Reader&apos;s Club
                  </h3>
                  {/* Active Member badge */}
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full animate-glow-pulse"
                    style={{
                      background: "oklch(0.68 0.26 317 / 0.12)",
                      color: "#FF4D8D",
                      border: "1px solid oklch(0.68 0.26 317 / 0.4)",
                      boxShadow:
                        "0 0 10px oklch(0.68 0.26 317 / 0.3), inset 0 0 6px oklch(0.68 0.26 317 / 0.08)",
                    }}
                    data-ocid="club-active-badge"
                  >
                    ✦ Active Member
                  </span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  An active member of the Reader&apos;s Club where a love for
                  books sparked an ongoing journey of discovery and growth.
                </p>
              </div>
            </div>

            {/* Activities sub-grid */}
            <div
              ref={activitiesRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8"
            >
              {ACTIVITIES.map((act, i) => (
                <div
                  key={act.title}
                  data-ocid={`club-activity-${i}`}
                  className="reveal rounded-xl p-5 flex gap-4 group/act transition-all duration-300"
                  style={{
                    background:
                      act.color === "pink"
                        ? "oklch(0.68 0.26 317 / 0.05)"
                        : "oklch(0.55 0.24 274 / 0.05)",
                    border: `1px solid ${
                      act.color === "pink"
                        ? "oklch(0.68 0.26 317 / 0.12)"
                        : "oklch(0.55 0.24 274 / 0.12)"
                    }`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover/act:scale-110"
                    style={{
                      background:
                        act.color === "pink"
                          ? "oklch(0.68 0.26 317 / 0.1)"
                          : "oklch(0.55 0.24 274 / 0.1)",
                    }}
                  >
                    {act.icon}
                  </div>
                  <div className="min-w-0">
                    <h4
                      className="text-sm font-bold mb-1"
                      style={{
                        color: act.color === "pink" ? "#FF4D8D" : "#9B8AFF",
                        fontFamily: "Poppins, Sora, sans-serif",
                      }}
                    >
                      {act.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* AGAINST ALL ODDS ongoing project highlight */}
            <div
              className="reveal rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.68 0.26 317 / 0.07) 0%, oklch(0.55 0.24 274 / 0.07) 100%)",
                border: "1px solid oklch(0.68 0.26 317 / 0.25)",
                boxShadow: "0 0 30px oklch(0.68 0.26 317 / 0.08)",
              }}
              data-ocid="club-ongoing-project"
            >
              {/* Book icon with glow */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 animate-glow-pulse"
                style={{
                  background: "oklch(0.68 0.26 317 / 0.14)",
                  border: "1px solid oklch(0.68 0.26 317 / 0.4)",
                  boxShadow: "0 0 18px oklch(0.68 0.26 317 / 0.22)",
                }}
              >
                📖
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                    style={{
                      background: "oklch(0.68 0.26 317 / 0.12)",
                      color: "#FF4D8D",
                      border: "1px solid oklch(0.68 0.26 317 / 0.3)",
                    }}
                  >
                    Ongoing Project
                  </span>
                </div>
                <p
                  className="text-base md:text-lg font-bold"
                  style={{
                    fontFamily: "Poppins, Sora, sans-serif",
                    background:
                      "linear-gradient(90deg, #FF4D8D 0%, #7A5CFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Compiling a book called &quot;AGAINST ALL ODDS&quot;
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  A personal writing project born from the stories and
                  reflections discovered through reading — currently in
                  progress.
                </p>
              </div>

              {/* Glowing live indicator */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className="w-2.5 h-2.5 rounded-full animate-glow-pulse"
                  style={{
                    background: "#FF4D8D",
                    boxShadow: "0 0 8px #FF4D8D",
                  }}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: "#FF4D8D" }}
                >
                  In Writing
                </span>
              </div>
            </div>

            {/* Decorative bottom bar */}
            <div
              className="h-0.5 w-16 rounded-full mt-8 transition-all duration-500 group-hover:w-full"
              style={{
                background:
                  "linear-gradient(90deg, #FF4D8D, #7A5CFF, transparent)",
              }}
            />
          </div>
        </div>

        {/* Japanese Quote Card */}
        <div ref={quoteRef} className="reveal" data-ocid="club-japanese-quote">
          <div
            className="glassmorphic-card rounded-2xl px-8 py-10 text-center relative overflow-hidden"
            style={{
              border: "1px solid oklch(0.68 0.26 317 / 0.22)",
              boxShadow:
                "0 0 50px oklch(0.68 0.26 317 / 0.08), inset 0 0 30px oklch(0.55 0.24 274 / 0.04)",
            }}
          >
            {/* Subtle background glow blobs */}
            <div
              className="absolute -top-8 -left-8 w-40 h-40 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.68 0.26 317 / 0.1) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.55 0.24 274 / 0.1) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
              aria-hidden="true"
            />

            {/* Decorative top label */}
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-6">
              ✦ A Quote to Live By ✦
            </p>

            {/* Japanese characters — main focus */}
            <p
              className="font-bold leading-tight mb-5"
              style={{
                fontFamily: "Sora, Poppins, sans-serif",
                fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
                background: "linear-gradient(135deg, #FF4D8D 0%, #7A5CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 18px oklch(0.68 0.26 317 / 0.35))",
                letterSpacing: "0.08em",
              }}
            >
              「夢は大きく、歩みは着実に。」
            </p>

            {/* Divider line */}
            <div
              className="w-20 h-px mx-auto mb-5 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #FF4D8D, #7A5CFF, transparent)",
              }}
            />

            {/* Romanized reading */}
            <p
              className="text-sm md:text-base font-medium mb-3 italic"
              style={{
                fontFamily: "Poppins, Sora, sans-serif",
                color: "#9B8AFF",
                letterSpacing: "0.05em",
              }}
            >
              Yume wa ōkiku, ayumi wa chakujitsu ni.
            </p>

            {/* English translation */}
            <p
              className="text-xs md:text-sm text-muted-foreground"
              style={{
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              &ldquo;Dream big, walk steadily.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
