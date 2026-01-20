import { useState, useRef } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import MusicModal from '@/components/MusicModal';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicModal, setShowMusicModal] = useState(true);

  const handleMusicChoice = (playMusic: boolean) => {
    setShowMusicModal(false);

    if (!audioRef.current) return;

    if (playMusic) {
      audioRef.current.volume = 0.15;
      audioRef.current.loop = true;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* SINGLE audio source */}
      <audio ref={audioRef} src="/audio/ambient.mp3" />

      <ParticleBackground />

      <MusicModal isOpen={showMusicModal} onChoice={handleMusicChoice} />

      <Navbar isPlaying={isPlaying} onToggleMusic={toggleMusic} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
