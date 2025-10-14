import { Scene3D } from './components/3d/Scene3D';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <Scene3D />
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-8 text-center text-gray-500 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p style={{ fontFamily: 'Orbitron, sans-serif' }}>
            © 2025 SUJAL TALREJA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
