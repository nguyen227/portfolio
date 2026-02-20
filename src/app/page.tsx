import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { QuickStats } from '@/components/QuickStats';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen font-sans selection:bg-primary/20 bg-white dark:bg-black text-neutral-charcoal dark:text-white transition-colors">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6">
          <div
            className="min-h-[calc(100vh-2rem)] flex flex-col justify-center gap-0 pt-20"
            id="home"
          >
            <HeroSection />
            <QuickStats />
          </div>
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
