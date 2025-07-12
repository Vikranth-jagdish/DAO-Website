'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeroFuturistic from '../components/hero-futuristic';

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
    <div className="min-h-screen bg-daoBg relative overflow-hidden">
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
      <HeroFuturistic />

      {/* Scroll to explore button - positioned below the 3D hero */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <button
          className="explore-btn flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300 group"
          style={{ animationDelay: '2.2s' }}
        >
          <span className="text-sm font-medium tracking-wider uppercase">Scroll to explore</span>
          <div className="explore-arrow transform group-hover:translate-y-1 transition-transform duration-300">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg">
              <path d="M11 5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6 12L11 17L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
