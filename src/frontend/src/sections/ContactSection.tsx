import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "nivarithika@gmail.com",
    href: "mailto:nivarithika@gmail.com",
    color: "pink",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7604950610",
    href: "tel:+917604950610",
    color: "violet",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "nivarithika-m",
    href: "https://www.linkedin.com/in/nivarithika-m-a61301327",
    color: "pink",
  },
];

export function ContactSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const contentRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 pb-32"
      aria-label="Contact"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 80%, oklch(0.55 0.24 274 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Let&apos;s Connect
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-foreground">Get In </span>
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Whether you want to collaborate, discuss ideas, or just say hello —
            I&apos;d love to hear from you.
          </p>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        <div ref={contentRef} className="reveal grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <div
              className="glassmorphic-card rounded-2xl p-6 mb-2"
              style={{ border: "1px solid oklch(0.68 0.26 317 / 0.12)" }}
            >
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "Poppins, Sora, sans-serif" }}
              >
                Contact Info
              </h3>
              <p className="text-sm text-muted-foreground">
                Feel free to reach out through any of these channels. I
                typically respond within 24 hours.
              </p>
            </div>

            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  data-ocid={`contact-${item.label.toLowerCase()}`}
                  className="glassmorphic-card rounded-2xl p-5 flex items-center gap-4 card-hover-neon group transition-smooth"
                  style={{
                    border: `1px solid ${
                      item.color === "pink"
                        ? "oklch(0.68 0.26 317 / 0.12)"
                        : "oklch(0.55 0.24 274 / 0.12)"
                    }`,
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background:
                        item.color === "pink"
                          ? "oklch(0.68 0.26 317 / 0.12)"
                          : "oklch(0.55 0.24 274 / 0.12)",
                      border: `1px solid ${
                        item.color === "pink"
                          ? "oklch(0.68 0.26 317 / 0.3)"
                          : "oklch(0.55 0.24 274 / 0.3)"
                      }`,
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        color: item.color === "pink" ? "#FF4D8D" : "#7A5CFF",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact form */}
          <div
            className="glassmorphic-card rounded-2xl p-6 md:p-8"
            style={{ border: "1px solid oklch(0.55 0.24 274 / 0.15)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.68 0.26 317 / 0.15)" }}
                >
                  <CheckCircle
                    size={32}
                    style={{ color: "#FF4D8D" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-xl font-bold text-foreground"
                  style={{ fontFamily: "Sora, Poppins, sans-serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thank you for reaching out. I&apos;ll get back to you soon!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-neon px-6 py-2.5 rounded-full text-sm font-semibold mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                aria-label="Contact form"
              >
                <h3
                  className="text-lg font-bold text-foreground mb-1"
                  style={{ fontFamily: "Poppins, Sora, sans-serif" }}
                >
                  Send a Message
                </h3>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-medium text-muted-foreground tracking-wide"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    data-ocid="contact-name-input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Nivarithika M"
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 transition-smooth focus:outline-none"
                    style={{
                      background: "oklch(0.08 0 0 / 0.6)",
                      border: "1px solid oklch(0.93 0 0 / 0.08)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.68 0.26 317 / 0.5)";
                      e.currentTarget.style.boxShadow =
                        "0 0 15px oklch(0.68 0.26 317 / 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.93 0 0 / 0.08)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-medium text-muted-foreground tracking-wide"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    data-ocid="contact-email-input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="hello@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 transition-smooth focus:outline-none"
                    style={{
                      background: "oklch(0.08 0 0 / 0.6)",
                      border: "1px solid oklch(0.93 0 0 / 0.08)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.55 0.24 274 / 0.5)";
                      e.currentTarget.style.boxShadow =
                        "0 0 15px oklch(0.55 0.24 274 / 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.93 0 0 / 0.08)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium text-muted-foreground tracking-wide"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    data-ocid="contact-message-input"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me what's on your mind..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 transition-smooth focus:outline-none resize-none"
                    style={{
                      background: "oklch(0.08 0 0 / 0.6)",
                      border: "1px solid oklch(0.93 0 0 / 0.08)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.68 0.26 317 / 0.5)";
                      e.currentTarget.style.boxShadow =
                        "0 0 15px oklch(0.68 0.26 317 / 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.93 0 0 / 0.08)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  data-ocid="contact-submit"
                  disabled={submitting}
                  className="btn-neon w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div
                        className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
