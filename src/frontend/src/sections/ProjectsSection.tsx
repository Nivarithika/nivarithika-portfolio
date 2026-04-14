import { Code2, ExternalLink, Leaf, Sprout, Terminal } from "lucide-react";

const project = {
  title: "Green Tech Loofah",
  category: "Salesforce · Academic Project",
  status: "In Progress",
  description:
    "Green Tech Loofah is an eco-friendly business idea developed as part of my academic Salesforce project. This project focuses on replacing plastic scrubbers with natural loofah products. It promotes sustainability, reduces plastic waste, and supports rural farmers by creating income opportunities.",
  tools: ["Salesforce", "CRM", "Business Analysis"],
  highlights: [
    "Salesforce CRM setup",
    "Business process mapping",
    "Sales pipeline design",
    "Customer management",
    "Product (loofah) catalog",
    "Eco-friendly brand ops",
  ],
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4"
      aria-label="Projects"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            What I've Built
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora, Poppins, sans-serif" }}
          >
            <span className="text-foreground">My </span>
            <span
              style={{
                background: "linear-gradient(135deg, #FF4D8D 0%, #7A5CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
          <div
            className="w-32 h-0.5 mx-auto mt-6"
            style={{
              background: "linear-gradient(90deg, #FF4D8D 0%, #7A5CFF 100%)",
            }}
          />
        </div>

        {/* Project Card — always rendered, no conditional logic */}
        <div
          data-ocid="projects.card"
          className="relative rounded-2xl overflow-visible"
          style={{
            background: "rgba(13,13,13,0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(34,197,94,0.35)",
            boxShadow:
              "0 0 40px rgba(34,197,94,0.12), 0 0 80px rgba(122,92,255,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Green top gradient bar */}
          <div
            className="h-1 w-full rounded-t-2xl"
            style={{
              background:
                "linear-gradient(90deg, #22c55e 0%, #16a34a 40%, #7A5CFF 100%)",
            }}
          />

          <div className="p-6 md:p-10">
            {/* Icon + Title Row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-6">
              <div className="flex items-center gap-4">
                {/* Eco icon box */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(34,197,94,0.18) 0%, rgba(22,163,74,0.12) 100%)",
                    border: "1px solid rgba(34,197,94,0.4)",
                    boxShadow: "0 0 24px rgba(34,197,94,0.2)",
                  }}
                >
                  <Leaf size={28} style={{ color: "#22c55e" }} />
                </div>

                <div>
                  {/* Category badge */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(34,197,94,0.12)",
                        color: "#22c55e",
                        border: "1px solid rgba(34,197,94,0.3)",
                      }}
                    >
                      Academic Project
                    </span>
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(122,92,255,0.1)",
                        color: "#9B8AFF",
                        border: "1px solid rgba(122,92,255,0.25)",
                      }}
                    >
                      Salesforce
                    </span>
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-foreground"
                    style={{ fontFamily: "Sora, Poppins, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Status badge */}
              <span
                className="text-xs font-bold px-4 py-2 rounded-full self-start flex items-center gap-2 flex-shrink-0"
                style={{
                  background: "rgba(255,77,141,0.1)",
                  color: "#FF4D8D",
                  border: "1px solid rgba(255,77,141,0.35)",
                  boxShadow: "0 0 12px rgba(255,77,141,0.15)",
                }}
                data-ocid="projects.status_badge"
              >
                <span
                  className="w-2 h-2 rounded-full inline-block animate-pulse"
                  style={{ background: "#FF4D8D" }}
                />
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              {project.description}
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {project.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  <Sprout
                    size={13}
                    style={{ color: "#22c55e", flexShrink: 0 }}
                  />
                  {h}
                </div>
              ))}
            </div>

            {/* Tech stack + View Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <div
                  className="flex items-center gap-1.5 text-xs mr-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  <Terminal size={12} />
                  <span>Tools:</span>
                </div>
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(34,197,94,0.08)",
                      color: "#22c55e",
                      border: "1px solid rgba(34,197,94,0.22)",
                    }}
                  >
                    <Code2 size={11} />
                    {tool}
                  </span>
                ))}
              </div>

              {/* View Details button */}
              <button
                data-ocid="projects.view_details_button"
                type="button"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #22c55e 0%, #7A5CFF 100%)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(34,197,94,0.25)",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 32px rgba(34,197,94,0.5), 0 0 16px rgba(122,92,255,0.3)";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 20px rgba(34,197,94,0.25)";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(0)";
                }}
              >
                <ExternalLink size={14} />
                View Details
              </button>
            </div>
          </div>

          {/* Bottom decorative leaf accent */}
          <div
            className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #22c55e 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Bottom note */}
        <p
          className="text-center text-xs mt-8"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          More projects coming soon — currently focused on this Salesforce
          academic build.
        </p>
      </div>
    </section>
  );
}
