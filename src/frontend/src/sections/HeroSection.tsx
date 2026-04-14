import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Download } from "lucide-react";

export function HeroSection() {
  const textRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const imageRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16"
      aria-label="Hero"
    >
      {/* Subtle radial highlight */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, oklch(0.68 0.26 317 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text content */}
          <div
            ref={textRef}
            className="reveal-left flex-1 text-center md:text-left"
          >
            {/* Label */}
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
              ✦ Personal Portfolio ✦
            </p>

            {/* Name */}
            <h1
              className="font-bold leading-tight mb-4"
              style={{
                fontFamily: "Sora, Poppins, sans-serif",
                fontSize: "clamp(2.4rem, 7vw, 5rem)",
              }}
            >
              <span className="text-foreground">Hi, I&apos;m </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #FF4D8D 0%, #7A5CFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Nivarithika M
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg font-semibold text-muted-foreground mb-4 leading-relaxed"
              style={{ fontFamily: "Poppins, Sora, sans-serif" }}
            >
              Aspiring Data Analyst&nbsp;&nbsp;·&nbsp;&nbsp;Tech
              Enthusiast&nbsp;&nbsp;·&nbsp;&nbsp;Future Innovator
            </p>

            {/* Tagline */}
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed md:mx-0 mx-auto">
              I am passionate about learning Python and using data to solve
              real-world problems.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <button
                type="button"
                data-ocid="hero-cta-journey"
                onClick={() => scrollTo("#about")}
                className="btn-neon px-8 py-3.5 rounded-full font-semibold text-white"
              >
                View My Journey
              </button>
              <button
                type="button"
                data-ocid="hero-cta-contact"
                onClick={() => scrollTo("#contact")}
                className="btn-outline-neon px-8 py-3.5 rounded-full font-semibold"
              >
                Contact Me
              </button>
              <a
                href="/resume.pdf"
                download="Nivarithika_M_Resume.pdf"
                data-ocid="hero-cta-resume"
                aria-label="Download Resume"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.68 0.26 317 / 0.12) 0%, oklch(0.55 0.24 274 / 0.12) 100%)",
                  border: "1px solid oklch(0.68 0.26 317 / 0.45)",
                  color: "#FF4D8D",
                  boxShadow:
                    "0 0 16px oklch(0.68 0.26 317 / 0.15), inset 0 0 10px oklch(0.68 0.26 317 / 0.05)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  fontFamily: "Poppins, Sora, sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 28px oklch(0.68 0.26 317 / 0.4), inset 0 0 14px oklch(0.68 0.26 317 / 0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "oklch(0.68 0.26 317 / 0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 16px oklch(0.68 0.26 317 / 0.15), inset 0 0 10px oklch(0.68 0.26 317 / 0.05)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "oklch(0.68 0.26 317 / 0.45)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                }}
              >
                <Download size={16} strokeWidth={2.5} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 mt-10 justify-center md:justify-start">
              <a
                href="mailto:nivarithika@gmail.com"
                className="text-xs text-muted-foreground hover:text-foreground transition-smooth flex items-center gap-1.5"
                aria-label="Email Nivarithika"
              >
                <span className="text-sm">✉️</span>
                nivarithika@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/nivarithika-m-a61301327"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-smooth flex items-center gap-1.5"
                aria-label="LinkedIn Profile"
              >
                <span className="text-sm">💼</span>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — Profile image */}
          <div
            ref={imageRef}
            className="reveal-right flex-shrink-0 flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-full opacity-40 blur-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #FF4D8D, #7A5CFF)",
                }}
                aria-hidden="true"
              />

              {/* Gradient border ring */}
              <div
                className="relative rounded-full p-[3px] animate-float"
                style={{
                  background:
                    "linear-gradient(135deg, #FF4D8D 0%, #7A5CFF 100%)",
                  animationDuration: "4s",
                }}
              >
                <div
                  className="rounded-full p-[3px]"
                  style={{ background: "#0D0D0D" }}
                >
                  <img
                    src="/assets/images/profile.jpg"
                    alt="Nivarithika M — Profile"
                    className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full"
                    style={{
                      boxShadow: "inset 0 0 30px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>
              </div>

              {/* Pulsing glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-glow-pulse pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating badge */}
              <div
                className="absolute -bottom-2 -right-2 glassmorphic-card rounded-full px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 shadow-neon-pink"
                style={{ border: "1px solid rgba(255,77,141,0.3)" }}
              >
                <span>✨</span>
                <span className="text-gradient-pink">Data Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
