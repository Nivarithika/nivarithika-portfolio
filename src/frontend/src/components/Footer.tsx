import { Heart, Linkedin, Mail, Phone } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();
const HOSTNAME = typeof window !== "undefined" ? window.location.hostname : "";

const SOCIAL_LINKS = [
  {
    href: "mailto:nivarithika@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "tel:+917604950610",
    icon: Phone,
    label: "Phone",
  },
  {
    href: "https://www.linkedin.com/in/nivarithika-m-a61301327",
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
];

export function Footer() {
  return (
    <footer
      data-ocid="footer"
      className="relative z-10 border-t"
      style={{
        background: "oklch(0.08 0 0 / 0.95)",
        backdropFilter: "blur(20px)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      {/* Gradient divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p
              className="text-lg font-display font-bold text-gradient"
              style={{ fontFamily: "Sora, Poppins, sans-serif" }}
            >
              Nivarithika M
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Developer · Creator · Innovator
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="w-9 h-9 flex items-center justify-center rounded-full glassmorphic text-muted-foreground hover:text-foreground hover:border-neon-pink glow-hover transition-smooth"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Credits */}
          <div className="text-center md:text-right text-xs text-muted-foreground">
            <p className="flex items-center gap-1 justify-center md:justify-end">
              Designed &amp; Built by{" "}
              <span className="text-gradient font-semibold">Nivarithika M</span>
            </p>
            <p className="mt-1 flex items-center gap-1 justify-center md:justify-end">
              © {CURRENT_YEAR}. Built with{" "}
              <Heart
                size={12}
                className="inline text-pink-400"
                fill="currentColor"
              />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(HOSTNAME)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient hover:opacity-80 transition-smooth"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
