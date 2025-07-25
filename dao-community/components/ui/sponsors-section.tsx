'use client';

import { motion } from 'framer-motion';

const sponsors = [
  {
    id: 1,
    name: 'Ethereum Foundation',
    tier: 'Platinum',
    logo: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=200&h=100&fit=crop&crop=center'
  },
  {
    id: 2,
    name: 'Polygon Labs',
    tier: 'Gold',
    logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=100&fit=crop&crop=center'
  },
  {
    id: 3,
    name: 'Chainlink',
    tier: 'Gold',
    logo: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=200&h=100&fit=crop&crop=center'
  },
  {
    id: 4,
    name: 'Uniswap Labs',
    tier: 'Silver',
    logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=200&h=100&fit=crop&crop=center'
  },
  {
    id: 5,
    name: 'Aave',
    tier: 'Silver',
    logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=100&fit=crop&crop=center'
  },
  {
    id: 6,
    name: 'ConsenSys',
    tier: 'Bronze',
    logo: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=200&h=100&fit=crop&crop=center'
  }
];

const tierColors = {
  Platinum: 'accentCyan',
  Gold: 'accentMagenta',
  Silver: 'accentPurple',
  Bronze: 'amber-500'
};

function SponsorCard({ sponsor, index }: { sponsor: typeof sponsors[0], index: number }) {
  const tierColor = tierColors[sponsor.tier as keyof typeof tierColors];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={`glass-card p-8 rounded-xl border border-${tierColor}/20 hover:border-${tierColor}/40 transition-all duration-300 backdrop-blur-md bg-daoSurface/30 h-full flex flex-col items-center justify-center text-center`}>
        <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden bg-textPrimary/5 flex items-center justify-center">
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        
        <span className={`text-sm font-sharetech text-${tierColor} uppercase tracking-wider px-4 py-2 rounded-full bg-${tierColor}/10 border border-${tierColor}/20 mb-4`}>
          {sponsor.tier}
        </span>
        
        <h3 className={`font-orbitron text-xl font-bold text-textPrimary group-hover:text-${tierColor} transition-colors duration-300`}>
          {sponsor.name}
        </h3>
      </div>
    </motion.div>
  );
}

export function SponsorsSection() {
  return (
    <section className="relative bg-gradient-to-b from-daoBg via-daoSurface/10 to-daoBg min-h-screen py-32 px-8 md:px-16 lg:px-24" style={{ marginTop: '200px' }}>
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accentMagenta/50 to-transparent"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-8">
        <div className="grid-pattern"></div>
      </div>
      
      {/* Side decorations */}
      <div className="absolute left-0 top-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-accentMagenta to-transparent transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-accentMagenta to-transparent transform -translate-y-1/2"></div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-4xl md:text-6xl lg:text-8xl font-bold text-textPrimary mb-8"
          >
            OUR <span className="text-accentMagenta">SPONSORS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textSecondary max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed mb-8"
          >
            Proud partners supporting our mission to advance blockchain education and innovation across the globe
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-accentMagenta to-accentPurple mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="neon-button px-10 py-4 rounded-lg font-sharetech font-bold text-lg text-daoBg bg-accentMagenta hover:bg-accentPurple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accentMagenta/30">
            BECOME A SPONSOR
          </button>
        </motion.div>
      </div>
    </section>
  );
} 