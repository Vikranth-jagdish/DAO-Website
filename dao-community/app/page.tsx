'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-daoBg relative overflow-hidden">
      {/* Floating particles */}
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

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
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

      {/* Stats Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 px-6 lg:px-12 mt-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { label: 'Total Volume', value: '$2.4M', change: '+12.3%', color: 'cyan' },
              { label: 'Active Members', value: '1,247', change: '+5.7%', color: 'purple' },
              { label: 'Proposals', value: '89', change: '+2.1%', color: 'magenta' },
              { label: 'Chain Count', value: '7', change: '+1', color: 'cyan' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 lg:p-6 text-center hover-glow-cyan"
              >
                <div className="text-xs font-sharetech text-textSecondary uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <div className={`text-xl lg:text-2xl font-bold font-orbitron mb-1 ${
                  stat.color === 'cyan' ? 'text-accentCyan' : 
                  stat.color === 'purple' ? 'text-accentPurple' : 'text-accentMagenta'
                }`}>
                  {stat.value}
                </div>
                <div className="text-xs text-green-400 font-sharetech">
                  {stat.change}
                </div>
                <div className="data-bar mt-3"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Hero Section */}
      <motion.section
        style={{ y }}
        className="relative z-10 px-6 lg:px-12 py-12 lg:py-16"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <Image
              src="/dao loo nblack full.png"
              alt="DAO Community Full Logo"
              width={300}
              height={150}
              className="mx-auto filter brightness-150"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-6 leading-tight"
          >
            <span className="glow-cyan">DECENTRALIZED</span>
            <br />
            <span className="text-textPrimary">GOVERNANCE</span>
            <br />
            <span className="glow-purple">PROTOCOL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base lg:text-lg font-orbitron text-textSecondary max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Advanced DeFi infrastructure for the next generation of decentralized applications. 
            Stake, govern, and earn with cutting-edge blockchain technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-button px-8 py-4 rounded-lg font-orbitron text-sm uppercase tracking-wider w-full sm:w-auto"
            >
              Launch App
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-4 rounded-lg font-orbitron text-sm uppercase tracking-wider text-accentCyan hover-glow-cyan w-full sm:w-auto"
            >
              View Analytics
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Dashboard Cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 lg:px-12 py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Governance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 lg:p-8 hover-glow-cyan"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg lg:text-xl font-bold font-orbitron glow-cyan">GOVERNANCE</h3>
                <div className="w-3 h-3 bg-accentMagenta rounded-full pulse-glow-cyan"></div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">Active Proposals</span>
                  <span className="text-accentCyan font-orbitron">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">Your Voting Power</span>
                  <span className="text-accentPurple font-orbitron text-sm">2,457 DAO</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">Participation Rate</span>
                  <span className="text-green-400 font-orbitron text-sm">78.3%</span>
                </div>
              </div>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full glass-surface py-3 rounded-lg font-orbitron text-xs uppercase tracking-wider text-accentCyan hover-glow-cyan"
                >
                  View Proposals
                </motion.button>
              </div>
            </motion.div>

            {/* Staking Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 lg:p-8 hover-glow-purple"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg lg:text-xl font-bold font-orbitron glow-purple">STAKING</h3>
                <div className="w-3 h-3 bg-accentCyan rounded-full pulse-glow-purple"></div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">Your Stake</span>
                  <span className="text-accentPurple font-orbitron text-sm">1,234 DAO</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">APY</span>
                  <span className="text-green-400 font-orbitron text-sm">12.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">Rewards</span>
                  <span className="text-accentCyan font-orbitron text-sm">45.67 DAO</span>
                </div>
              </div>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full glass-surface py-3 rounded-lg font-orbitron text-xs uppercase tracking-wider text-accentPurple hover-glow-purple"
                >
                  Manage Stake
                </motion.button>
              </div>
            </motion.div>

            {/* Community Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 lg:p-8 hover-glow-cyan"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg lg:text-xl font-bold font-orbitron glow-cyan">COMMUNITY</h3>
                <div className="w-3 h-3 bg-accentMagenta rounded-full pulse-glow-cyan"></div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">Members Online</span>
                  <span className="text-green-400 font-orbitron text-sm">247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">Active Discussions</span>
                  <span className="text-accentCyan font-orbitron text-sm">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">Your Reputation</span>
                  <span className="text-accentPurple font-orbitron text-sm">1,547</span>
                </div>
              </div>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full glass-surface py-3 rounded-lg font-orbitron text-xs uppercase tracking-wider text-accentCyan hover-glow-cyan"
                >
                  Join Discord
                </motion.button>
              </div>
            </motion.div>

            {/* Analytics Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 lg:p-8 hover-glow-purple"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg lg:text-xl font-bold font-orbitron glow-purple">ANALYTICS</h3>
                <div className="w-3 h-3 bg-accentCyan rounded-full pulse-glow-purple"></div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">24h Volume</span>
                  <span className="text-accentPurple font-orbitron text-sm">$142.3K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">Price Change</span>
                  <span className="text-green-400 font-orbitron text-sm">+8.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-textSecondary font-sharetech text-sm">Market Cap</span>
                  <span className="text-accentCyan font-orbitron text-sm">$5.2M</span>
                </div>
              </div>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full glass-surface py-3 rounded-lg font-orbitron text-xs uppercase tracking-wider text-accentPurple hover-glow-purple"
                >
                  View Charts
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 lg:px-12 py-12 lg:py-16"
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
              Experience the future of decentralized governance. Connect your wallet and become part of the protocol.
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
  );
}
