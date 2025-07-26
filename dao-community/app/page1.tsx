'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Home as HomeIcon, Calendar, Users, Award, Target, Phone } from 'lucide-react';
import HeroFuturistic from '../components/hero-futuristic';
import { EventsSection } from '../components/ui/events-section';
import { PastEventsSection } from '../components/ui/past-events-section';
import { SponsorsSection } from '../components/ui/sponsors-section';
import { StudentBenefitsSection } from '../components/ui/student-benefits-section';
import { VisionMissionSection } from '../components/ui/vision-mission-section';
import { FooterSection } from '../components/ui/footer-section';
import { AnimeNavBar } from '../components/ui/anime-navbar';

const navItems = [
  { name: "Home", url: "#home", icon: HomeIcon },
  { name: "Events", url: "#events", icon: Calendar },
  { name: "Past Events", url: "#past-events", icon: Users },
  { name: "Sponsors", url: "#sponsors", icon: Award },
  { name: "Benefits", url: "#benefits", icon: Target },
  { name: "Contact", url: "#contact", icon: Phone },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-daoBg relative min-h-screen" style={{ margin: 0, padding: 0, border: 'none', outline: 'none' }}>
      {/* Anime Navbar */}
      <AnimeNavBar items={navItems} defaultActive="Home" />
      
      {/* Floating particles background for the entire page */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accentCyan rounded-full floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Mouse glow effect */}
      <motion.div
        className="fixed w-72 h-72 rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(31, 182, 255, 0.1) 0%, transparent 70%)',
          left: mousePosition.x - 144,
          top: mousePosition.y - 144,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Section - Full screen 3D component */}
      <div id="home" className="relative z-20">
        <HeroFuturistic />
      </div>

      {/* Upcoming Events Section */}
      <div id="events" className="relative z-30 mt-48">
        <EventsSection />
      </div>

      {/* Past Events Section */}
      <div id="past-events" className="relative z-30">
        <PastEventsSection />
      </div>

      {/* Sponsors Section */}
      <div id="sponsors" className="relative z-30">
        <SponsorsSection />
      </div>

      {/* Student Benefits Section */}
      <div id="benefits" className="relative z-30">
        <StudentBenefitsSection />
      </div>

      {/* Vision and Mission Section */}
      <div id="vision" className="relative z-30">
        <VisionMissionSection />
      </div>

      {/* Footer Section */}
      <div id="contact" className="relative z-30">
        <FooterSection />
      </div>
    </div>
  );
}
