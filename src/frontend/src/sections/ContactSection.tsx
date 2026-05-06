import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

// Replace YOUR_FORM_ID with your actual Formspree form ID from formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqewqnqq";

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

type FormValues = {
  name: string;
  email: string;
  message: string;
};

// Glow styles for focused/blurred neon inputs
const glowFocus = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  color: "pink" | "violet",
) => {
  const border =
    color === "pink"
      ? "oklch(0.68 0.26 317 / 0.5)"
      : "oklch(0.55 0.24 274 / 0.5)";
  const shadow =
    color === "pink"
      ? "0 0 15px oklch(0.68 0.26 317 / 0.1)"
      : "0 0 15px oklch(0.55 0.24 274 / 0.1)";
  e.currentTarget.style.borderColor = border;
  e.currentTarget.style.boxShadow = shadow;
};

const glowBlur = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  hasError: boolean,
) => {
  e.currentTarget.style.borderColor = hasError
    ? "oklch(0.68 0.26 317 / 0.7)"
    : "oklch(0.93 0 0 / 0.08)";
  e.currentTarget.style.boxShadow = "none";
};

export function ContactSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const contentRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(false);

  // Refs for manually restoring border after validation
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onBlur" });

  // Register field refs so we can spread RHF props
  const {
    ref: nameRHFRef,
    onBlur: nameOnBlur,
    ...nameRest
  } = register("name", {
    required: "Name is required.",
    minLength: { value: 2, message: "Name must be at least 2 characters." },
  });

  const {
    ref: emailRHFRef,
    onBlur: emailOnBlur,
    ...emailRest
  } = register("email", {
    required: "Email is required.",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address.",
    },
  });

  const {
    ref: messageRHFRef,
    onBlur: messageOnBlur,
    ...messageRest
  } = register("message", {
    required: "Message is required.",
    minLength: {
      value: 10,
      message: "Message must be at least 10 characters.",
    },
  });

  // 3-second cooldown after successful submission
  useEffect(() => {
    if (!submitted) return;
    setCooldown(true);
    const timer = setTimeout(() => setCooldown(false), 3000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      if (!res.ok) throw new Error("Server returned an error response.");
      reset();
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  const isDisabled = isSubmitting || cooldown;

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
                <p
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.72 0.19 165)" }}
                  data-ocid="contact.success_state"
                >
                  Message sent! I&apos;ll get back to you soon.
                </p>
                <p className="text-muted-foreground text-sm">
                  Thank you for reaching out. I&apos;ll respond within 24 hours!
                </p>
                <button
                  type="button"
                  disabled={cooldown}
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError(null);
                  }}
                  className="btn-outline-neon px-6 py-2.5 rounded-full text-sm font-semibold mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {cooldown ? "Please wait..." : "Send Another"}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
                aria-label="Contact form"
                noValidate
              >
                <h3
                  className="text-lg font-bold text-foreground mb-1"
                  style={{ fontFamily: "Poppins, Sora, sans-serif" }}
                >
                  Send a Message
                </h3>

                {/* Name */}
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
                    data-ocid="contact.name_input"
                    placeholder="Nivarithika M"
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 transition-smooth focus:outline-none"
                    style={{
                      background: "oklch(0.08 0 0 / 0.6)",
                      border: errors.name
                        ? "1px solid oklch(0.68 0.26 317 / 0.7)"
                        : "1px solid oklch(0.93 0 0 / 0.08)",
                    }}
                    onFocus={(e) => glowFocus(e, "pink")}
                    onBlur={(e) => {
                      nameOnBlur(e);
                      glowBlur(e, !!errors.name);
                    }}
                    ref={(el) => {
                      nameRef.current = el;
                      nameRHFRef(el);
                    }}
                    {...nameRest}
                  />
                  {errors.name && (
                    <p
                      className="text-xs font-medium"
                      style={{ color: "#FF4D8D" }}
                      data-ocid="contact.name_field_error"
                      role="alert"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
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
                    data-ocid="contact.email_input"
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 transition-smooth focus:outline-none"
                    style={{
                      background: "oklch(0.08 0 0 / 0.6)",
                      border: errors.email
                        ? "1px solid oklch(0.68 0.26 317 / 0.7)"
                        : "1px solid oklch(0.93 0 0 / 0.08)",
                    }}
                    onFocus={(e) => glowFocus(e, "violet")}
                    onBlur={(e) => {
                      emailOnBlur(e);
                      glowBlur(e, !!errors.email);
                    }}
                    ref={(el) => {
                      emailRef.current = el;
                      emailRHFRef(el);
                    }}
                    {...emailRest}
                  />
                  {errors.email && (
                    <p
                      className="text-xs font-medium"
                      style={{ color: "#FF4D8D" }}
                      data-ocid="contact.email_field_error"
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium text-muted-foreground tracking-wide"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    data-ocid="contact.message_textarea"
                    placeholder="Tell me what's on your mind..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 transition-smooth focus:outline-none resize-none"
                    style={{
                      background: "oklch(0.08 0 0 / 0.6)",
                      border: errors.message
                        ? "1px solid oklch(0.68 0.26 317 / 0.7)"
                        : "1px solid oklch(0.93 0 0 / 0.08)",
                    }}
                    onFocus={(e) => glowFocus(e, "pink")}
                    onBlur={(e) => {
                      messageOnBlur(e);
                      glowBlur(e, !!errors.message);
                    }}
                    ref={(el) => {
                      messageRef.current = el;
                      messageRHFRef(el);
                    }}
                    {...messageRest}
                  />
                  {errors.message && (
                    <p
                      className="text-xs font-medium"
                      style={{ color: "#FF4D8D" }}
                      data-ocid="contact.message_field_error"
                      role="alert"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit error */}
                {submitError && (
                  <p
                    className="text-xs font-medium text-center px-3 py-2 rounded-lg"
                    style={{
                      color: "#FF4D8D",
                      background: "oklch(0.68 0.26 317 / 0.08)",
                      border: "1px solid oklch(0.68 0.26 317 / 0.2)",
                    }}
                    data-ocid="contact.error_state"
                    role="alert"
                  >
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={isDisabled}
                  className="btn-neon w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div
                        className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                        aria-hidden="true"
                      />
                      <span data-ocid="contact.loading_state">Sending...</span>
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
