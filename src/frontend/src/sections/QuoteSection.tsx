import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

const PARTICLES = [
  {
    id: "p0",
    size: 4,
    color: "oklch(0.68 0.26 317)",
    left: "10%",
    top: "20%",
    delay: "0s",
    duration: "4s",
  },
  {
    id: "p1",
    size: 6,
    color: "oklch(0.55 0.24 274)",
    left: "25%",
    top: "40%",
    delay: "0.8s",
    duration: "5s",
  },
  {
    id: "p2",
    size: 8,
    color: "oklch(0.68 0.26 317)",
    left: "40%",
    top: "20%",
    delay: "1.6s",
    duration: "6s",
  },
  {
    id: "p3",
    size: 10,
    color: "oklch(0.55 0.24 274)",
    left: "55%",
    top: "60%",
    delay: "2.4s",
    duration: "7s",
  },
  {
    id: "p4",
    size: 12,
    color: "oklch(0.68 0.26 317)",
    left: "70%",
    top: "40%",
    delay: "3.2s",
    duration: "8s",
  },
  {
    id: "p5",
    size: 14,
    color: "oklch(0.55 0.24 274)",
    left: "85%",
    top: "20%",
    delay: "4s",
    duration: "9s",
  },
];

export function QuoteSection() {
  const contentRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="quote"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Opening Quote"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #0D0D0D 0%, oklch(0.12 0.08 317) 30%, oklch(0.10 0.06 274) 60%, #0D0D0D 100%)",
          backgroundSize: "400% 400%",
          animation: "gradient-move 8s ease infinite",
        }}
      />

      {/* Radial glow overlay */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.68 0.26 317 / 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Decorative particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-20 animate-float-slow pointer-events-none"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Content */}
      <div
        ref={contentRef}
        className="reveal text-center max-w-3xl mx-auto px-6 py-12"
      >
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div
            className="h-px w-16 md:w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.68 0.26 317 / 0.6))",
            }}
          />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold">
            ✦ Words to Live By ✦
          </span>
          <div
            className="h-px w-16 md:w-24"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.55 0.24 274 / 0.6), transparent)",
            }}
          />
        </div>

        {/* The quote */}
        <blockquote className="relative">
          <span
            className="absolute -top-8 -left-4 text-8xl leading-none opacity-10 select-none"
            style={{ color: "#FF4D8D", fontFamily: "Georgia, serif" }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <p
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-6"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-foreground">I may start </span>
            <span className="text-gradient-pink">small</span>
            <span className="text-foreground">, but my </span>
            <span className="text-gradient">dreams</span>
            <span className="text-foreground"> are built to grow </span>
            <span className="text-gradient-violet">beyond limits</span>
            <span className="text-foreground">.</span>
          </p>

          <span
            className="absolute -bottom-4 -right-4 text-8xl leading-none opacity-10 select-none"
            style={{ color: "#7A5CFF", fontFamily: "Georgia, serif" }}
            aria-hidden="true"
          >
            &rdquo;
          </span>
        </blockquote>

        {/* Attribution */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="section-divider w-24 mx-auto" />
          <p
            className="text-base md:text-lg font-semibold tracking-wider"
            style={{
              fontFamily: "Sora, Poppins, sans-serif",
              background: "linear-gradient(135deg, #FF4D8D, #7A5CFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            — Nivarithika M
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <ChevronDown
          size={20}
          className="text-muted-foreground"
          aria-hidden="true"
        />
      </div>

      <style>{`
        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
