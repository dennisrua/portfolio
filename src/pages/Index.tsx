import { useState, useEffect, useRef } from 'react';
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

// Ambient music URL (royalty-free)
const AMBIENT_MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

const Index = () => {
  const [showMusicModal, setShowMusicModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if user has already made a choice
    const musicPreference = localStorage.getItem('portfolio-music-preference');
    
    if (musicPreference === null) {
      // Show modal on first visit
      setShowMusicModal(true);
    } else if (musicPreference === 'true') {
      // Auto-play if user previously chose to play
      setHasInteracted(true);
      setIsPlaying(true);
    } else {
      setHasInteracted(true);
    }

    // Initialize audio element
    audioRef.current = new Audio(AMBIENT_MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying && hasInteracted) {
      audioRef.current.play().catch(console.error);
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, hasInteracted]);

  const handleMusicChoice = (playMusic: boolean) => {
    localStorage.setItem('portfolio-music-preference', String(playMusic));
    setShowMusicModal(false);
    setHasInteracted(true);
    setIsPlaying(playMusic);
  };

  const toggleMusic = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    localStorage.setItem('portfolio-music-preference', String(newState));
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Particle Background */}
      <ParticleBackground />

      {/* Music Consent Modal */}
      <MusicModal isOpen={showMusicModal} onChoice={handleMusicChoice} />

      {/* Navigation */}
      <Navbar isPlaying={isPlaying} onToggleMusic={toggleMusic} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
