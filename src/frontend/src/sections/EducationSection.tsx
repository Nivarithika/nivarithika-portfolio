import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

const EDUCATION = [
  {
    year: "2021 – 2023",
    degree: "Higher Secondary Education (HSC)",
    institution: "AIM Matric Higher Secondary School",
    description:
      "Completed schooling with a strong foundation in Mathematics, Science, and Computer Studies. Developed an early interest in technology and logical problem-solving.",
    highlight: "Completed Schooling",
    icon: "🎓",
    color: "pink",
  },
  {
    year: "2024 – Present",
    degree: "Undergraduate Studies in Technology",
    institution: "Pursuing Bachelor's Degree",
    description:
      "Currently pursuing an undergraduate degree in technology, focusing on programming, data analysis, and software development. Actively participating in startup programs and summits.",
    highlight: "Currently Pursuing",
    icon: "💡",
    color: "violet",
  },
];

export function EducationSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const timelineRef = useStaggeredAnimation({ baseDelay: 200 });

  return (
    <section
      id="education"
      className="relative py-24 px-4"
      aria-label="Education"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 30%, oklch(0.68 0.26 317 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Academic Journey
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-foreground">My </span>
            <span className="text-gradient-violet">Education</span>
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.68 0.26 317 / 0.6) 0%, oklch(0.55 0.24 274 / 0.6) 100%)",
            }}
            aria-hidden="true"
          />

          {EDUCATION.map((item, i) => (
            <div
              key={item.degree}
              className={`reveal relative flex flex-col md:flex-row gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div
                className={`flex-1 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <div
                  className="glassmorphic-card rounded-2xl p-6 md:p-8 card-hover-neon"
                  style={{
                    border: `1px solid ${
                      item.color === "pink"
                        ? "oklch(0.68 0.26 317 / 0.2)"
                        : "oklch(0.55 0.24 274 / 0.2)"
                    }`,
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background:
                          item.color === "pink"
                            ? "oklch(0.68 0.26 317 / 0.15)"
                            : "oklch(0.55 0.24 274 / 0.15)",
                        border: `1px solid ${
                          item.color === "pink"
                            ? "oklch(0.68 0.26 317 / 0.3)"
                            : "oklch(0.55 0.24 274 / 0.3)"
                        }`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{
                        background:
                          item.color === "pink"
                            ? "oklch(0.68 0.26 317 / 0.1)"
                            : "oklch(0.55 0.24 274 / 0.1)",
                        color: item.color === "pink" ? "#FF4D8D" : "#7A5CFF",
                        border: `1px solid ${
                          item.color === "pink"
                            ? "oklch(0.68 0.26 317 / 0.3)"
                            : "oklch(0.55 0.24 274 / 0.3)"
                        }`,
                      }}
                    >
                      {item.highlight}
                    </span>
                  </div>

                  <p
                    className="text-xs text-muted-foreground tracking-wider mb-2"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {item.year}
                  </p>
                  <h3
                    className="text-lg md:text-xl font-bold text-foreground mb-1"
                    style={{ fontFamily: "Sora, Poppins, sans-serif" }}
                  >
                    {item.degree}
                  </h3>
                  <p
                    className={`text-sm font-semibold mb-3 ${
                      item.color === "pink"
                        ? "text-gradient-pink"
                        : "text-gradient-violet"
                    }`}
                    style={{ display: "inline-block" }}
                  >
                    {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center dot (desktop) */}
              <div
                className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 hidden md:block"
                style={{
                  background: item.color === "pink" ? "#FF4D8D" : "#7A5CFF",
                  borderColor: "#0D0D0D",
                  boxShadow: `0 0 12px ${item.color === "pink" ? "#FF4D8D" : "#7A5CFF"}`,
                }}
                aria-hidden="true"
              />

              {/* Spacer for alternate side */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
