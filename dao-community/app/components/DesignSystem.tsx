'use client';

import { motion } from 'framer-motion';

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-daoBg p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold font-orbitron glow-cyan mb-12 text-center">
          CRYPTO-TECH DESIGN SYSTEM
        </h1>
        
        {/* Color Palette */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold font-orbitron glow-purple mb-6">COLOR PALETTE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-daoBg rounded-lg mx-auto mb-2 border border-textSecondary"></div>
              <p className="font-sharetech text-textSecondary text-sm">DAO BG</p>
              <p className="font-sharetech text-textSecondary text-xs">#0D1B2A</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-daoSurface rounded-lg mx-auto mb-2"></div>
              <p className="font-sharetech text-textSecondary text-sm">DAO SURFACE</p>
              <p className="font-sharetech text-textSecondary text-xs">#1B263B</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accentCyan rounded-lg mx-auto mb-2"></div>
              <p className="font-sharetech text-textSecondary text-sm">ACCENT CYAN</p>
              <p className="font-sharetech text-textSecondary text-xs">#1FB6FF</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accentPurple rounded-lg mx-auto mb-2"></div>
              <p className="font-sharetech text-textSecondary text-sm">ACCENT PURPLE</p>
              <p className="font-sharetech text-textSecondary text-xs">#A76EFF</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accentMagenta rounded-lg mx-auto mb-2"></div>
              <p className="font-sharetech text-textSecondary text-sm">ACCENT MAGENTA</p>
              <p className="font-sharetech text-textSecondary text-xs">#FF3D8F</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-textPrimary rounded-lg mx-auto mb-2"></div>
              <p className="font-sharetech text-textSecondary text-sm">TEXT PRIMARY</p>
              <p className="font-sharetech text-textSecondary text-xs">#E0E0E0</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-textSecondary rounded-lg mx-auto mb-2"></div>
              <p className="font-sharetech text-textSecondary text-sm">TEXT SECONDARY</p>
              <p className="font-sharetech text-textSecondary text-xs">#A0A0A0</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg mx-auto mb-2 border border-textSecondary" style={{background: 'rgba(255,255,255,0.05)'}}></div>
              <p className="font-sharetech text-textSecondary text-sm">GLASS FROST</p>
              <p className="font-sharetech text-textSecondary text-xs">rgba(255,255,255,0.05)</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold font-orbitron glow-purple mb-6">TYPOGRAPHY</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold font-orbitron glow-cyan mb-2">ORBITRON - HEADINGS</h3>
              <p className="font-orbitron text-textSecondary">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <h3 className="text-xl font-bold font-sharetech glow-cyan mb-2">SHARE TECH MONO - MONOSPACE</h3>
              <p className="font-sharetech text-textSecondary">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <h3 className="text-xl font-bold font-michroma glow-cyan mb-2">MICHROMA - DISPLAY</h3>
              <p className="font-michroma text-textSecondary">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>

        {/* Glassmorphism Cards */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold font-orbitron glow-purple mb-6">GLASSMORPHISM CARDS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 hover-glow-cyan">
              <h3 className="font-orbitron text-accentCyan mb-2">Basic Glass Card</h3>
              <p className="font-sharetech text-textSecondary text-sm">Semi-transparent with backdrop blur</p>
            </div>
            <div className="glass-surface p-6 hover-glow-purple">
              <h3 className="font-orbitron text-accentPurple mb-2">Glass Surface</h3>
              <p className="font-sharetech text-textSecondary text-sm">Enhanced gradient surface</p>
            </div>
            <div className="glass-card p-6 neon-border-cyan">
              <h3 className="font-orbitron text-accentCyan mb-2">Neon Border</h3>
              <p className="font-sharetech text-textSecondary text-sm">With glowing cyan border</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold font-orbitron glow-purple mb-6">BUTTONS</h2>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="neon-button px-6 py-3 rounded-lg font-orbitron text-sm uppercase tracking-wider"
            >
              Primary Button
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="glass-card px-6 py-3 rounded-lg font-orbitron text-sm uppercase tracking-wider text-accentCyan hover-glow-cyan neon-border-cyan"
            >
              Secondary Button
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="glass-surface px-6 py-3 rounded-lg font-orbitron text-sm uppercase tracking-wider text-accentPurple hover-glow-purple"
            >
              Tertiary Button
            </motion.button>
          </div>
        </div>

        {/* Glow Effects */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold font-orbitron glow-purple mb-6">GLOW EFFECTS</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-orbitron glow-cyan">Cyan Glow Text</h3>
            <h3 className="text-xl font-orbitron glow-purple">Purple Glow Text</h3>
            <h3 className="text-xl font-orbitron glow-magenta">Magenta Glow Text</h3>
            <div className="flex gap-4 mt-6">
              <div className="w-16 h-16 rounded-lg border-2 border-accentCyan pulse-glow-cyan"></div>
              <div className="w-16 h-16 rounded-lg border-2 border-accentPurple pulse-glow-purple"></div>
              <div className="w-16 h-16 rounded-lg border-2 border-accentMagenta pulse-glow-cyan"></div>
            </div>
          </div>
        </div>

        {/* Data Visualization */}
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold font-orbitron glow-purple mb-6">DATA VISUALIZATION</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-sharetech text-textSecondary">Total Volume</span>
                <span className="font-orbitron text-accentCyan">$2.4M</span>
              </div>
              <div className="data-bar"></div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-sharetech text-textSecondary">Active Members</span>
                <span className="font-orbitron text-accentPurple">1,247</span>
              </div>
              <div className="data-bar"></div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-sharetech text-textSecondary">Participation Rate</span>
                <span className="font-orbitron text-green-400">78.3%</span>
              </div>
              <div className="data-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 