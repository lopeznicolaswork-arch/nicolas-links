import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NoduxSection } from './components/NoduxSection';
import { PodiumsSection } from './components/PodiumsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { PageBackground } from './components/ui/PageBackground';

export const App: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-250 overflow-x-hidden">
      
      {/* Full-Page Dynamic Multi-Toned Background with marked contrast */}
      <PageBackground isDark={isDark} />

      {/* Responsive Glass Navbar */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Content: Max-w-6xl for optimal widescreen & responsive layout */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12 pb-20">
        <Hero />
        <NoduxSection />
        <PodiumsSection />
        <LeadershipSection />
        <CredentialsSection />
        <ExperienceSection />
        <Footer />
      </main>

    </div>
  );
};

export default App;
