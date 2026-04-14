import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";

// A segment is either plain text or a styled span
type Segment =
  | { type: "text"; id: string; content: string }
  | { type: "span"; id: string; content: string; className: string };

type Paragraph = { id: string; segments: Segment[] };

const PARAGRAPHS: Paragraph[] = [
  {
    id: "p1",
    segments: [
      { type: "text", id: "p1-s0", content: "Hello! I'm " },
      {
        type: "span",
        id: "p1-s1",
        content: "Nivarithika M",
        className: "text-foreground font-semibold text-gradient-pink",
      },
      {
        type: "text",
        id: "p1-s2",
        content: ", a passionate and curious individual currently pursuing ",
      },
      {
        type: "span",
        id: "p1-s3",
        content: "B.Tech in Information Technology (2nd Year)",
        className: "text-foreground font-medium",
      },
      { type: "text", id: "p1-s4", content: " at " },
      {
        type: "span",
        id: "p1-s5",
        content: "K.S.Rangasamy College of Technology",
        className: "text-foreground font-medium",
      },
      {
        type: "text",
        id: "p1-s6",
        content:
          ". I am driven by the belief that data holds the key to solving real-world problems, and I am determined to build a career as a ",
      },
      {
        type: "span",
        id: "p1-s7",
        content: "Data Analyst",
        className: "text-foreground font-medium",
      },
      { type: "text", id: "p1-s8", content: "." },
    ],
  },
  {
    id: "p2",
    segments: [
      {
        type: "text",
        id: "p2-s0",
        content:
          "I thrive on learning, growing, and exploring new ideas. Whether it\u2019s diving deep into analytics, taking on new challenges, or immersing myself in creative pursuits, I approach everything with curiosity and dedication.",
      },
    ],
  },
  {
    id: "p3",
    segments: [
      { type: "text", id: "p3-s0", content: "My aspiration is to combine " },
      {
        type: "span",
        id: "p3-s1",
        content: "technology, data, and meaningful impact",
        className: "text-foreground font-medium",
      },
      {
        type: "text",
        id: "p3-s2",
        content:
          " \u2014 contributing to projects and organisations that make a real difference while continuously evolving as a professional.",
      },
    ],
  },
];

// Flatten a paragraph into a list of characters with their segment index
function flattenParagraph(para: Paragraph): { char: string; segIdx: number }[] {
  return para.segments.flatMap((seg, segIdx) =>
    seg.content.split("").map((char: string) => ({ char, segIdx })),
  );
}

// Pre-compute totals per paragraph (stable, not recalculated)
const PARA_TOTALS = PARAGRAPHS.map((p) => flattenParagraph(p).length);

// Render a paragraph up to `revealedChars` characters
function ParagraphTyped({
  para,
  revealedChars,
  showCursor,
}: {
  para: Paragraph;
  revealedChars: number;
  showCursor: boolean;
}) {
  const flat = flattenParagraph(para);
  const total = flat.length;
  const visible = Math.min(revealedChars, total);

  // Build per-segment revealed strings
  const segmentText: string[] = para.segments.map(() => "");
  for (let i = 0; i < visible; i++) {
    const { char, segIdx } = flat[i];
    segmentText[segIdx] += char;
  }

  // Determine which segment the cursor is currently in
  let cursorSegIdx = -1;
  if (showCursor && visible < total) {
    cursorSegIdx = flat[visible]?.segIdx ?? -1;
  } else if (showCursor && visible === total) {
    cursorSegIdx = para.segments.length - 1;
  }

  return (
    <>
      {para.segments.map((seg, idx) => {
        const text = segmentText[idx];
        if (!text && cursorSegIdx !== idx) return null;

        const cursor =
          showCursor && cursorSegIdx === idx ? (
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "2px",
                height: "1em",
                background: "oklch(0.68 0.26 317)",
                marginLeft: "1px",
                verticalAlign: "text-bottom",
              }}
            />
          ) : null;

        if (seg.type === "span") {
          return (
            <span key={seg.id} className={seg.className}>
              {text}
              {cursor}
            </span>
          );
        }
        return (
          <span key={seg.id}>
            {text}
            {cursor}
          </span>
        );
      })}
    </>
  );
}

// Static render (before animation or SSR)
function ParagraphStatic({ para }: { para: Paragraph }) {
  return (
    <>
      {para.segments.map((seg) =>
        seg.type === "span" ? (
          <span key={seg.id} className={seg.className}>
            {seg.content}
          </span>
        ) : (
          <span key={seg.id}>{seg.content}</span>
        ),
      )}
    </>
  );
}

const TYPING_SPEED_MS = 20;

export function AboutSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const cardRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });
  const sectionRef = useRef<HTMLElement>(null);

  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [revealed, setRevealed] = useState([0, 0, 0]);

  // Intersection Observer — trigger once
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  // Typing engine — sequential paragraphs
  useEffect(() => {
    if (!started || done) return;

    let paraIdx = 0;
    let charIdx = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (paraIdx >= PARAGRAPHS.length) {
        setDone(true);
        return;
      }

      const total = PARA_TOTALS[paraIdx];

      if (charIdx < total) {
        charIdx++;
        const pIdx = paraIdx;
        const cIdx = charIdx;
        setRevealed((prev) => {
          const next = [...prev];
          next[pIdx] = cIdx;
          return next;
        });
        timer = setTimeout(tick, TYPING_SPEED_MS);
      } else {
        paraIdx++;
        charIdx = 0;
        timer = setTimeout(tick, TYPING_SPEED_MS);
      }
    };

    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, [started, done]);

  // Which paragraph is currently being typed
  const activePara = done
    ? -1
    : PARAGRAPHS.findIndex((_, i) => revealed[i] < PARA_TOTALS[i]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 px-4"
      aria-label="About Me"
    >
      {/* Subtle section bg */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 60%, oklch(0.55 0.24 274 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Get To Know Me
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-gradient">About </span>
            <span className="text-foreground">Me</span>
          </h2>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          className="reveal glassmorphic-card rounded-2xl p-8 md:p-12"
          style={{
            border: "1px solid oklch(0.68 0.26 317 / 0.12)",
          }}
        >
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            {PARAGRAPHS.map((para, idx) => {
              const isActive = activePara === idx;
              const pClass = idx === 0 ? "text-base md:text-lg" : undefined;

              if (!started) {
                return (
                  <p key={para.id} className={pClass}>
                    <ParagraphStatic para={para} />
                  </p>
                );
              }

              return (
                <p key={para.id} className={pClass}>
                  <ParagraphTyped
                    para={para}
                    revealedChars={revealed[idx]}
                    showCursor={isActive}
                  />
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
