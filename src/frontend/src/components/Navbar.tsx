import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#vision", label: "Vision" },
  { href: "#creative", label: "Creative" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glassmorphic-strong shadow-glass border-b"
          : "bg-transparent"
      }`}
      style={{
        borderColor: scrolled ? "rgba(255,255,255,0.06)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <span
              className="text-xl md:text-2xl font-bold group-hover:text-gradient transition-all duration-300"
              style={{ fontFamily: "Sora, Poppins, sans-serif" }}
            >
              <span className="text-gradient">N</span>
              <span className="text-foreground group-hover:text-gradient">
                ivarithika M
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            data-ocid="nav-links"
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth pb-1"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              data-ocid="nav-cta"
              className="btn-neon px-5 py-2 rounded-full text-sm font-semibold text-white"
            >
              Let&apos;s Talk
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-ocid="nav-hamburger"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        data-ocid="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "oklch(0.08 0 0 / 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: isOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left w-full px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-smooth"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="btn-neon mt-2 px-5 py-3 rounded-xl text-sm font-semibold text-white w-full"
          >
            Let&apos;s Talk
          </button>
        </nav>
      </div>
    </header>
  );
}
