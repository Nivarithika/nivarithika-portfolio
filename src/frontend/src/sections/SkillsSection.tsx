import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import type { ReactNode } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import { SiPython } from "react-icons/si";

type SkillIcon = string | ReactNode;

const GALLERY_LINK =
  "https://drive.google.com/drive/folders/1jS0GxjknozooEDTGC_PAGw5AZpPJR-J2";

const SKILLS: {
  icon: SkillIcon;
  name: string;
  level: string;
  color: "pink" | "violet";
  link?: string;
  galleryLink?: string;
}[] = [
  {
    icon: <SiPython className="w-7 h-7" style={{ color: "#FFD43B" }} />,
    name: "Python",
    level: "Basic",
    color: "pink",
  },
  { icon: "📊", name: "Microsoft Excel", level: "Beginner", color: "violet" },
  { icon: "🧩", name: "Problem Solving", level: "Developing", color: "pink" },
  {
    icon: "🗣️",
    name: "Communication Skills",
    level: "Intermediate",
    color: "violet",
  },
  {
    icon: "🇯🇵",
    name: "Japanese Language",
    level: "N5 – Learning",
    color: "pink",
  },
  {
    icon: "🎙️",
    name: "Podcasting",
    level: "Enthusiast",
    color: "violet",
    link: "https://open.spotify.com/show/5UTElynCUOtsXXwCKrHmCh",
  },
  {
    icon: (
      <FaPencilAlt
        className="w-6 h-6"
        style={{ color: "#FF4D8D", filter: "drop-shadow(0 0 5px #FF4D8D88)" }}
      />
    ),
    name: "Drawing & Sketching",
    level: "Intermediate",
    color: "pink",
    galleryLink: GALLERY_LINK,
  },
  { icon: "📚", name: "Continuous Learning", level: "MOOC", color: "violet" },
  { icon: "✈️", name: "Travel Enthusiast", level: "Explorer", color: "pink" },
  {
    icon: "🎵",
    name: "Music & Instruments",
    level: "Exploring",
    color: "violet",
  },
  {
    icon: "🎨",
    name: "Colour Theory",
    level: "Currently Learning",
    color: "pink",
  },
  {
    icon: "🎬",
    name: "Video Editing",
    level: "Currently Learning",
    color: "violet",
  },
];

export function SkillsSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useStaggeredAnimation({ baseDelay: 80 });

  return (
    <section
      id="skills"
      className="relative py-24 px-4"
      aria-label="Skills & Interests"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 70%, oklch(0.68 0.26 317 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            What I Bring to the Table
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-gradient-pink">Skills </span>
            <span className="text-foreground">&amp; </span>
            <span className="text-gradient-violet">Interests</span>
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Skills grid */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {SKILLS.map((skill) => {
            const isPink = skill.color === "pink";
            const baseColor = isPink
              ? "oklch(0.68 0.26 317"
              : "oklch(0.55 0.24 274";
            const accentHex = isPink ? "#FF4D8D" : "#9B8AFF";

            const sharedBorder = {
              border: `1px solid ${baseColor} / 0.12)`,
            };

            const hoverEnter = (el: HTMLElement) => {
              el.style.transform = "scale(1.07) translateY(-4px)";
              el.style.boxShadow = isPink
                ? "0 0 28px 6px oklch(0.68 0.26 317 / 0.45), 0 0 12px 2px oklch(0.55 0.24 274 / 0.25)"
                : "0 0 28px 6px oklch(0.55 0.24 274 / 0.45), 0 0 12px 2px oklch(0.68 0.26 317 / 0.25)";
              el.style.borderColor = isPink
                ? "oklch(0.68 0.26 317 / 0.7)"
                : "oklch(0.55 0.24 274 / 0.7)";
            };

            const hoverLeave = (el: HTMLElement) => {
              el.style.transform = "";
              el.style.boxShadow = "";
              el.style.borderColor = isPink
                ? "oklch(0.68 0.26 317 / 0.12)"
                : "oklch(0.55 0.24 274 / 0.12)";
            };

            const cardContent = (
              <>
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${baseColor} / 0.1)`,
                    border: `1px solid ${baseColor} / 0.25)`,
                  }}
                >
                  {skill.icon}
                </div>

                {/* Name */}
                <p
                  className="text-sm font-bold text-foreground leading-tight"
                  style={{ fontFamily: "Poppins, Sora, sans-serif" }}
                >
                  {skill.name}
                </p>

                {/* Level badge */}
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: `${baseColor} / 0.08)`,
                    color: accentHex,
                    border: `1px solid ${baseColor} / 0.2)`,
                  }}
                >
                  {skill.level}
                </span>

                {/* Spotify label */}
                {skill.link && (
                  <span
                    className="text-xs text-center mt-0.5"
                    style={{ color: "#FF4D8D" }}
                  >
                    Listen on Spotify 🎧
                  </span>
                )}

                {/* Gallery button — Drawing & Sketching */}
                {skill.galleryLink && (
                  <a
                    href={skill.galleryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="drawing.gallery_link"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-1.5 w-full px-3 py-2 rounded-lg font-semibold text-xs text-white mt-0.5 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF4D8D 0%, #7A5CFF 100%)",
                      border: "1px solid oklch(0.68 0.26 317 / 0.4)",
                      boxShadow:
                        "0 0 12px 2px oklch(0.68 0.26 317 / 0.2), 0 2px 8px 0 rgba(0,0,0,0.3)",
                      fontFamily: "Poppins, Sora, sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.boxShadow =
                        "0 0 24px 5px oklch(0.68 0.26 317 / 0.45), 0 0 10px 2px oklch(0.55 0.24 274 / 0.35)";
                      el.style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.boxShadow =
                        "0 0 12px 2px oklch(0.68 0.26 317 / 0.2), 0 2px 8px 0 rgba(0,0,0,0.3)";
                      el.style.transform = "";
                    }}
                  >
                    <MdPhotoLibrary className="w-3.5 h-3.5 flex-shrink-0" />
                    View Gallery
                  </a>
                )}
              </>
            );

            // Clickable card (Spotify link)
            if (skill.link) {
              return (
                <a
                  key={skill.name}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="podcasting.card"
                  className="reveal glassmorphic-card rounded-2xl p-5 flex flex-col items-center text-center gap-3 group cursor-pointer no-underline"
                  style={{
                    ...sharedBorder,
                    transition:
                      "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => hoverEnter(e.currentTarget)}
                  onMouseLeave={(e) => hoverLeave(e.currentTarget)}
                >
                  {cardContent}
                </a>
              );
            }

            // Drawing & Sketching card (has gallery button inside)
            if (skill.galleryLink) {
              return (
                <div
                  key={skill.name}
                  data-ocid="drawing.card"
                  className="reveal glassmorphic-card rounded-2xl p-5 flex flex-col items-center text-center gap-3 group cursor-default"
                  style={{
                    ...sharedBorder,
                    transition:
                      "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => hoverEnter(e.currentTarget)}
                  onMouseLeave={(e) => hoverLeave(e.currentTarget)}
                >
                  {cardContent}
                </div>
              );
            }

            // Standard skill card
            return (
              <div
                key={skill.name}
                className="reveal glassmorphic-card rounded-2xl p-5 flex flex-col items-center text-center gap-3 card-hover-neon group cursor-default"
                style={sharedBorder}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
