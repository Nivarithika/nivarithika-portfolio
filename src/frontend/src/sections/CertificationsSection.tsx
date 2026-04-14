import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import { Award, Trophy } from "lucide-react";

const CERTIFICATIONS = [
  {
    name: "NPTEL Certification",
    issuer: "NPTEL — IIT Platform",
    description:
      "Completed an online certification course through the National Programme on Technology Enhanced Learning.",
    icon: "🏛️",
    color: "pink",
    isAward: false,
  },
  {
    name: "Infosys Certification",
    issuer: "Infosys Springboard",
    description:
      "Earned a certification from Infosys, demonstrating proficiency in technology fundamentals and digital skills.",
    icon: "💼",
    color: "violet",
    isAward: false,
  },
  {
    name: "Excel Certification",
    issuer: "UpGrad",
    description:
      "Completed Microsoft Excel certification through UpGrad, covering data analysis, formulas, and visualization.",
    icon: "📊",
    color: "pink",
    isAward: false,
  },
  {
    name: "College Annual Day – Olimayam",
    issuer: "K.S.Rangasamy College of Technology",
    description:
      "Received a framed photo recognition at the college annual day (Olimayam) for attending and proudly representing the team. Won 3rd place for the team member's innovative idea — a memorable milestone celebrating creativity and teamwork.",
    icon: "🏆",
    color: "violet",
    isAward: true,
  },
];

export function CertificationsSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const listRef = useStaggeredAnimation({ baseDelay: 120 });

  return (
    <section
      id="certifications"
      className="relative py-24 px-4"
      aria-label="Certifications & Achievements"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 40%, oklch(0.68 0.26 317 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Recognition &amp; Achievements
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-gradient-violet">Certifications</span>
            <span className="text-foreground"> &amp; Awards</span>
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Certifications list */}
        <div ref={listRef} className="space-y-4">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.name}
              data-ocid={`cert-item-${i}`}
              className="reveal glassmorphic-card rounded-2xl p-5 md:p-6 flex items-start gap-5 card-hover-neon group"
              style={{
                border: `1px solid ${
                  cert.color === "pink"
                    ? "oklch(0.68 0.26 317 / 0.12)"
                    : "oklch(0.55 0.24 274 / 0.12)"
                }`,
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    cert.color === "pink"
                      ? "oklch(0.68 0.26 317 / 0.12)"
                      : "oklch(0.55 0.24 274 / 0.12)",
                  border: `1px solid ${
                    cert.color === "pink"
                      ? "oklch(0.68 0.26 317 / 0.3)"
                      : "oklch(0.55 0.24 274 / 0.3)"
                  }`,
                }}
              >
                {cert.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                  <h3
                    className="text-base md:text-lg font-bold text-foreground"
                    style={{ fontFamily: "Poppins, Sora, sans-serif" }}
                  >
                    {cert.name}
                  </h3>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full self-start"
                    style={{
                      background:
                        cert.color === "pink"
                          ? "oklch(0.68 0.26 317 / 0.1)"
                          : "oklch(0.55 0.24 274 / 0.1)",
                      color: cert.color === "pink" ? "#FF4D8D" : "#9B8AFF",
                    }}
                  >
                    {cert.issuer}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Badge check */}
              {cert.isAward ? (
                <Trophy
                  size={18}
                  className="flex-shrink-0 mt-1 opacity-40 group-hover:opacity-80 transition-smooth"
                  style={{ color: "#7A5CFF" }}
                  aria-hidden="true"
                />
              ) : (
                <Award
                  size={18}
                  className="flex-shrink-0 mt-1 opacity-40 group-hover:opacity-80 transition-smooth"
                  style={{
                    color: cert.color === "pink" ? "#FF4D8D" : "#7A5CFF",
                  }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
