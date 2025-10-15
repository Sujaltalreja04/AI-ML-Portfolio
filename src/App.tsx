import { lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';

const Scene3D = lazy(() => import('./components/3d/Scene3D').then(module => ({ default: module.Scene3D })));
const AboutSection = lazy(() => import('./components/sections/AboutSection').then(module => ({ default: module.AboutSection })));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection').then(module => ({ default: module.ProjectsSection })));
const SkillsSection = lazy(() => import('./components/sections/SkillsSection').then(module => ({ default: module.SkillsSection })));
const ContactSection = lazy(() => import('./components/sections/ContactSection').then(module => ({ default: module.ContactSection })));

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-gray-400">Loading...</div>
          </div>
        }>
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </Suspense>
      </main>

      <footer className="relative z-10 py-6 md:py-8 text-center text-gray-500 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            © 2025 SUJAL TALREJA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
