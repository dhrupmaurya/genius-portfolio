
import { HeroSection } from "@/components/ui/HeroSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { SkillsSection } from "@/components/ui/SkillsSection";
import { ProjectsSection } from "@/components/ui/ProjectsSection";
import { EducationSection } from "@/components/ui/EducationSection";
import { Footer } from "@/components/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <Footer />
    </div>
  );
};

export default Index;