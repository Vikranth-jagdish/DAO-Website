'use client';

import { motion } from 'framer-motion';
import { Carousel } from './carousel';

const pastEventsSlides = [
  {
    title: "Blockchain Fundamentals Workshop",
    button: "View Highlights",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center"
  },
  {
    title: "Smart Contract Bootcamp", 
    button: "View Highlights",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center"
  },
  {
    title: "DeFi Deep Dive Summit",
    button: "View Highlights", 
    src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&crop=center"
  },
  {
    title: "NFT Creator Workshop",
    button: "View Highlights",
    src: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&h=600&fit=crop&crop=center"
  },
  {
    title: "Web3 Gaming Conference",
    button: "View Highlights",
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&crop=center"
  }
];

const pastEventsStats = [
  { label: "Events Hosted", value: "25+" },
  { label: "Total Attendees", value: "2,500+" },
  { label: "Hours of Content", value: "150+" },
  { label: "Industry Speakers", value: "50+" }
];

function StatsCard({ stat, index }: { stat: typeof pastEventsStats[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="glass-card p-8 rounded-xl border border-accentPurple/20 hover:border-accentPurple/40 transition-all duration-300 backdrop-blur-md bg-daoSurface/30 h-full text-center">
        <div className="space-y-4">
          <div className="text-4xl md:text-5xl font-orbitron font-bold text-accentPurple">
            {stat.value}
          </div>
          <div className="text-lg font-sharetech text-textSecondary uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PastEventsSection() {
  return (
    <section className="relative bg-gradient-to-b from-daoBg via-daoSurface/10 to-daoBg min-h-screen py-32 px-8 md:px-16 lg:px-24" style={{ marginTop: '200px' }}>
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accentPurple/50 to-transparent"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-8">
        <div className="grid-pattern"></div>
      </div>
      
      {/* Side decorations */}
      <div className="absolute left-0 top-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-accentPurple to-transparent transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-accentPurple to-transparent transform -translate-y-1/2"></div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-4xl md:text-6xl lg:text-8xl font-bold text-textPrimary mb-8"
          >
            PAST <span className="text-accentPurple">EVENTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textSecondary text-xl md:text-2xl leading-relaxed mb-8 text-center w-full"
          >
            Celebrating our successful journey in blockchain education and community building
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-accentPurple to-accentMagenta mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Carousel Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex justify-center items-center min-h-[80vh]">
            <Carousel slides={pastEventsSlides} />
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pastEventsStats.map((stat, index) => (
            <StatsCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 