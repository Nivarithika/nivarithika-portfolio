import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import { MapPin, Rocket, Users } from "lucide-react";

const EXPERIENCES = [
  {
    title: "7-Day Startup Programme",
    location: "Dindigul, Tamil Nadu",
    description:
      "Participated in an intensive 7-day startup program organized in Dindigul. The program featured sessions by distinguished speakers including the District Collector and the CEO of KaarTech. Gained hands-on exposure to entrepreneurial thinking, startup ecosystem fundamentals, and innovation frameworks.",
    highlights: [
      "District Collector interaction",
      "KaarTech CEO session",
      "Entrepreneurship workshops",
      "Team building activities",
    ],
    icon: "🚀",
    color: "pink",
    badge: "Startup Programme",
  },
  {
    title: "Global Startup Summit",
    location: "Coimbatore, Tamil Nadu",
    description:
      "Attended the Global Startup Summit held in Coimbatore, a prestigious event bringing together entrepreneurs, investors, and innovators from across the globe. The summit provided valuable networking opportunities and exposed me to cutting-edge ideas in technology and business.",
    highlights: [
      "Global networking",
      "Startup ecosystem insights",
      "Innovation showcases",
      "Investor interactions",
    ],
    icon: "🌍",
    color: "violet",
    badge: "Global Summit",
  },
];

export function ExperienceSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const cardsRef = useStaggeredAnimation({ baseDelay: 200 });

  return (
    <section
      id="experience"
      className="relative py-24 px-4"
      aria-label="Experience & Exposure"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 60%, oklch(0.55 0.24 274 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Beyond the Classroom
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-foreground">Experience &amp; </span>
            <span className="text-gradient">Exposure</span>
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              data-ocid={`exp-${exp.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="reveal glassmorphic-card rounded-2xl p-6 md:p-8 card-hover-neon flex flex-col gap-5"
              style={{
                border: `1px solid ${
                  exp.color === "pink"
                    ? "oklch(0.68 0.26 317 / 0.15)"
                    : "oklch(0.55 0.24 274 / 0.15)"
                }`,
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background:
                      exp.color === "pink"
                        ? "oklch(0.68 0.26 317 / 0.12)"
                        : "oklch(0.55 0.24 274 / 0.12)",
                    border: `1px solid ${
                      exp.color === "pink"
                        ? "oklch(0.68 0.26 317 / 0.3)"
                        : "oklch(0.55 0.24 274 / 0.3)"
                    }`,
                  }}
                >
                  {exp.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full mb-2 inline-block"
                    style={{
                      background:
                        exp.color === "pink"
                          ? "oklch(0.68 0.26 317 / 0.1)"
                          : "oklch(0.55 0.24 274 / 0.1)",
                      color: exp.color === "pink" ? "#FF4D8D" : "#9B8AFF",
                    }}
                  >
                    {exp.badge}
                  </span>
                  <h3
                    className="text-lg font-bold text-foreground leading-snug"
                    style={{ fontFamily: "Sora, Poppins, sans-serif" }}
                  >
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                    <MapPin size={12} aria-hidden="true" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2">
                {exp.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 text-xs text-muted-foreground glassmorphic rounded-lg px-3 py-2"
                  >
                    {exp.color === "pink" ? (
                      <Rocket
                        size={11}
                        style={{ color: "#FF4D8D" }}
                        aria-hidden="true"
                      />
                    ) : (
                      <Users
                        size={11}
                        style={{ color: "#7A5CFF" }}
                        aria-hidden="true"
                      />
                    )}
                    {h}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
