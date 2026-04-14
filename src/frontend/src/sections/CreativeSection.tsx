import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, PenLine, Sparkles } from "lucide-react";

export function CreativeSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const cardRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      id="creative"
      className="relative py-24 px-4"
      aria-label="Creative Work"
    >
      {/* Dreamy ambient glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.68 0.26 317 / 0.06) 0%, oklch(0.55 0.24 274 / 0.04) 50%, transparent 80%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Beyond Technology
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-foreground">Creative </span>
            <span className="text-gradient-pink">Work</span>
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Main creative card */}
        <div ref={cardRef} className="reveal">
          <div
            className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.10 0.04 317 / 0.8) 0%, oklch(0.09 0.04 274 / 0.8) 100%)",
              border: "1px solid oklch(0.68 0.26 317 / 0.2)",
              boxShadow:
                "0 0 60px oklch(0.68 0.26 317 / 0.08), 0 0 120px oklch(0.55 0.24 274 / 0.06)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Background decorative elements */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.68 0.26 317) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.55 0.24 274) 0%, transparent 70%)",
                transform: "translate(-30%, 30%)",
              }}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center gap-8">
              {/* Book icon area */}
              <div className="relative">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl animate-float"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.68 0.26 317 / 0.2), oklch(0.55 0.24 274 / 0.2))",
                    border: "1px solid oklch(0.68 0.26 317 / 0.3)",
                    boxShadow: "0 0 30px oklch(0.68 0.26 317 / 0.2)",
                    animationDuration: "4s",
                  }}
                >
                  📖
                </div>
                {/* Glow halo behind icon */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-30 -z-10"
                  style={{
                    background: "linear-gradient(135deg, #FF4D8D, #7A5CFF)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: "Sora, Poppins, sans-serif" }}
                >
                  <span className="text-foreground">Writing My Own </span>
                  <span className="text-gradient">Book</span>
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  I am working on writing my very own book — a creative endeavor
                  that blends imagination, insight, and the stories I carry
                  within me. This project represents my deepest creative voice
                  and is close to my heart.
                </p>
              </div>

              {/* Coming soon badge */}
              <div
                className="flex items-center gap-2.5 px-6 py-3 rounded-full animate-glow-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.68 0.26 317 / 0.15), oklch(0.55 0.24 274 / 0.15))",
                  border: "1px solid oklch(0.68 0.26 317 / 0.4)",
                  boxShadow: "0 0 20px oklch(0.68 0.26 317 / 0.2)",
                }}
              >
                <Sparkles
                  size={16}
                  style={{ color: "#FF4D8D" }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{
                    background: "linear-gradient(135deg, #FF4D8D, #7A5CFF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Coming Soon
                </span>
                <Sparkles
                  size={16}
                  style={{ color: "#7A5CFF" }}
                  aria-hidden="true"
                />
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { icon: PenLine, label: "Original Content" },
                  { icon: BookOpen, label: "Personal Narrative" },
                  { icon: Sparkles, label: "Creative Vision" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 text-xs font-medium text-muted-foreground glassmorphic px-4 py-2 rounded-full"
                    >
                      <Icon size={12} aria-hidden="true" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
