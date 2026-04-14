import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import { Heart, Lightbulb, Target, TrendingUp } from "lucide-react";

const VISION_PILLARS = [
  {
    icon: Target,
    title: "Career Goal",
    description:
      "Aspiring to build a career in data analysis and technology, targeting a salary package of 12 LPA through continuous skill development and real-world experience.",
    color: "pink",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "I value experience over titles. Every challenge is a stepping stone — I am committed to constant learning, whether through MOOCs, projects, or hands-on work.",
    color: "violet",
  },
  {
    icon: Heart,
    title: "Core Values",
    description:
      "Integrity, curiosity, and perseverance are the values I carry. I believe in doing meaningful work that positively impacts people's lives.",
    color: "pink",
  },
  {
    icon: Lightbulb,
    title: "Build Something Meaningful",
    description:
      "My ultimate ambition is to build something that matters — a startup, a product, or a solution that addresses a real problem and creates lasting value.",
    color: "violet",
  },
];

export function VisionSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const introRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });
  const pillarsRef = useStaggeredAnimation({ baseDelay: 120 });

  return (
    <section
      id="vision"
      className="relative py-24 px-4"
      aria-label="Career Vision"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.68 0.26 317 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Where I&apos;m Headed
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-gradient-pink">Career </span>
            <span className="text-foreground">&amp; </span>
            <span className="text-gradient-violet">Vision</span>
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Intro statement */}
        <div
          ref={introRef}
          className="reveal glassmorphic-card rounded-2xl p-6 md:p-10 text-center mb-12"
          style={{
            border: "1px solid oklch(0.68 0.26 317 / 0.15)",
            background: "oklch(0.09 0.02 317 / 0.4)",
          }}
        >
          <p
            className="text-xl md:text-2xl font-bold leading-relaxed"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-muted-foreground">
              I am driven by a burning desire to enter the{" "}
            </span>
            <span className="text-gradient">startup and working world</span>
            <span className="text-muted-foreground">
              {" "}
              — not just for a job, but to{" "}
            </span>
            <span className="text-gradient-pink">build my own story</span>
            <span className="text-muted-foreground">
              {" "}
              and make an impact that lasts.
            </span>
          </p>
        </div>

        {/* Vision pillars */}
        <div ref={pillarsRef} className="grid sm:grid-cols-2 gap-5">
          {VISION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="reveal glassmorphic-card rounded-2xl p-6 flex gap-5 card-hover-neon group"
                style={{
                  border: `1px solid ${
                    pillar.color === "pink"
                      ? "oklch(0.68 0.26 317 / 0.12)"
                      : "oklch(0.55 0.24 274 / 0.12)"
                  }`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      pillar.color === "pink"
                        ? "oklch(0.68 0.26 317 / 0.12)"
                        : "oklch(0.55 0.24 274 / 0.12)",
                    border: `1px solid ${
                      pillar.color === "pink"
                        ? "oklch(0.68 0.26 317 / 0.3)"
                        : "oklch(0.55 0.24 274 / 0.3)"
                    }`,
                  }}
                >
                  <Icon
                    size={20}
                    style={{
                      color: pillar.color === "pink" ? "#FF4D8D" : "#7A5CFF",
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-base font-bold text-foreground mb-2"
                    style={{ fontFamily: "Poppins, Sora, sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
