import { FloatingBlobs } from "@/components/FloatingBlobs";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/sections/AboutSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ContactSection } from "@/sections/ContactSection";
import { CreativeSection } from "@/sections/CreativeSection";
import { CurrentLearningSection } from "@/sections/CurrentLearningSection";
import { EducationSection } from "@/sections/EducationSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";
import { MemberOfClubSection } from "@/sections/MemberOfClubSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { QuoteSection } from "@/sections/QuoteSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { VisionSection } from "@/sections/VisionSection";
import { useEffect } from "react";

export default function App() {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: "#0D0D0D" }}>
      {/* Ambient background blobs */}
      <FloatingBlobs />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        {/* Section 0 — Opening Quote */}
        <QuoteSection />

        {/* Section 1 — Hero */}
        <HeroSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 2 — About */}
        <AboutSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 3 — Education */}
        <EducationSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 4 — Skills */}
        <SkillsSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 5 — Projects */}
        <ProjectsSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 6 — Certifications */}
        <CertificationsSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 6b — Current Learning */}
        <CurrentLearningSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 7 — Experience */}
        <ExperienceSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 8 — Career Vision */}
        <VisionSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 9 — Creative Work */}
        <CreativeSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 10 — Member of a Club */}
        <MemberOfClubSection />

        {/* Divider */}
        <div className="section-divider mx-8 md:mx-16" />

        {/* Section 11 — Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
