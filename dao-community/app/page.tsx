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

      {/* Content sections below the hero */}
      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <Image
                src="/daologoo.png"
                alt="DAO Community Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-2 border-accentCyan pulse-glow-cyan"></div>
            </div>
            <span className="text-lg font-bold font-sharetech glow-cyan">DAO.COMMUNITY</span>
          </motion.div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'Dashboard', href: '#dashboard' },
              { name: 'Analytics', href: '#analytics' },
              { name: 'Community', href: '#community' },
              { name: 'Governance', href: '#governance' },
              { name: 'Connect', href: '#connect' }
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-textSecondary hover:text-accentCyan transition-all duration-300 relative group font-orbitron text-sm uppercase tracking-widest"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accentCyan group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-textSecondary hover:text-accentCyan transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </motion.nav>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 lg:px-12 py-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 lg:p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-orbitron mb-6 glow-cyan">
                THE FUTURE OF GOVERNANCE
              </h2>
              <p className="text-lg font-orbitron text-textSecondary mb-8 leading-relaxed">
                Experience the next generation of decentralized autonomous organizations. 
                Built with cutting-edge blockchain technology for transparent, efficient, and democratic governance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="glass-surface p-6 rounded-lg">
                  <h3 className="font-orbitron text-accentCyan text-lg mb-2">TRANSPARENT</h3>
                  <p className="text-textSecondary text-sm">All decisions visible on-chain</p>
                </div>
                <div className="glass-surface p-6 rounded-lg">
                  <h3 className="font-orbitron text-accentPurple text-lg mb-2">SECURE</h3>
                  <p className="text-textSecondary text-sm">Protected by blockchain technology</p>
                </div>
                <div className="glass-surface p-6 rounded-lg">
                  <h3 className="font-orbitron text-accentMagenta text-lg mb-2">DEMOCRATIC</h3>
                  <p className="text-textSecondary text-sm">Every member has a voice</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 lg:px-12 py-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 lg:p-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-orbitron mb-6 glow-cyan">
                JOIN THE REVOLUTION
              </h2>
              <p className="text-base lg:text-lg font-orbitron text-textSecondary mb-8 leading-relaxed">
                Connect your wallet and become part of the decentralized future.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neon-button px-8 lg:px-12 py-4 rounded-lg font-orbitron text-base lg:text-lg uppercase tracking-wider"
              >
                Connect Wallet
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 lg:px-12 py-8 lg:py-12 mt-16"
        >
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-6 lg:p-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="relative">
                    <Image
                      src="/daologoo.png"
                      alt="DAO Community Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div className="absolute inset-0 rounded-full border border-accentCyan"></div>
                  </div>
                  <span className="font-sharetech text-textSecondary">DAO.COMMUNITY</span>
                </div>
                
                <div className="flex space-x-6 text-textSecondary">
                  {[
                    { name: 'Discord', href: '#' },
                    { name: 'Twitter', href: '#' },
                    { name: 'GitHub', href: '#' },
                    { name: 'Medium', href: '#' }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      className="hover:text-accentCyan transition-colors duration-300 font-orbitron text-sm"
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="text-center text-textSecondary mt-6 lg:mt-8 font-sharetech text-sm">
                © 2024 DAO Community Protocol. Decentralizing governance infrastructure.
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
