'use client';

import { motion } from 'framer-motion';
import { Tilt } from './tilt';
import { Spotlight } from './spotlight';
import BeamShooter from './beam-shooter';
import { Button as MovingBorderButton } from './moving-border';

const events = [
  {
    id: 1,
    name: 'DeFi Summit 2025',
    description: 'Exploring the future of decentralized finance and blockchain innovation',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 2,
    name: 'Web3 Development Workshop',
    description: 'Hands-on blockchain development and smart contract creation',
    date: 'April 2, 2025',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 3,
    name: 'DAO Governance Forum',
    description: 'Building the future of decentralized autonomous organizations',
    date: 'April 20, 2025',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 4,
    name: 'NFT & Metaverse Expo',
    description: 'Digital assets and virtual worlds reshaping the internet',
    date: 'May 8, 2025',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&h=300&fit=crop&crop=center'
  }
];

function TimelineCard({ event, index }: { event: typeof events[0], index: number }) {
  const isTop = index % 2 === 0;
  
  return (
    <div className="relative flex flex-col items-center h-auto">
      {/* Card positioned above timeline (for top cards) */}
      {isTop && (
        <div className="relative mb-16 w-80">
          <Tilt
            rotationFactor={6}
            isRevese
            springOptions={{
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2,
            }}
            className="group relative rounded-xl"
          >
            <Spotlight
              className="z-10 from-accentCyan/50 via-accentPurple/30 to-transparent blur-2xl"
              size={240}
              springOptions={{
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
              }}
            />
            <div className="glass-card p-6 rounded-xl border border-accentCyan/20 hover:border-accentCyan/40 transition-all duration-300 backdrop-blur-md bg-daoSurface/30">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="space-y-6">
                <h3 className="font-orbitron text-xl md:text-2xl font-bold text-textPrimary group-hover:text-accentCyan transition-colors duration-300 leading-relaxed">
                  {event.name}
                </h3>
                <p className="text-base md:text-lg text-textSecondary leading-loose">
                  {event.description}
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      )}

      {/* Connection line from card to timeline */}
      {isTop && (
        <div className="w-px h-12 bg-gradient-to-b from-accentCyan/50 to-transparent opacity-60"></div>
      )}

      {/* Timeline dot and date - always in center */}
      <div className="relative flex flex-col items-center">
                {/* Date positioned above dot with moving border */}
        <div className="text-center mb-4">
          <div className="relative">
            <MovingBorderButton
              borderRadius="1rem"
              className="bg-daoSurface/90 text-accentCyan hover:text-white transition-colors duration-300 backdrop-blur-md border-0 shadow-lg shadow-accentCyan/40"
              containerClassName="h-12 w-36 px-4 relative"
              borderClassName="h-6 w-6 opacity-90 bg-white rounded-full shadow-[0_0_15px_#1FB6FF,0_0_25px_#1FB6FF] animate-pulse"
              duration={2000}
            >
              <span className="text-xs font-sharetech uppercase tracking-wider font-bold relative z-10">
                {event.date}
              </span>
            </MovingBorderButton>
            {/* Additional glow layer for subtle enhancement */}
            <div className="absolute inset-0 rounded-2xl border border-accentCyan/30 pointer-events-none shadow-[0_0_10px_#1FB6FF]"></div>
          </div>
        </div>
        
        {/* Timeline dot */}
        <div className="w-6 h-6 bg-gradient-to-r from-accentCyan via-accentPurple to-accentMagenta rounded-full border-2 border-daoBg shadow-lg shadow-accentCyan/50 z-20 relative">
          <div className="w-full h-full bg-gradient-to-r from-accentCyan via-accentPurple to-accentMagenta rounded-full animate-pulse"></div>
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-accentCyan/30 animate-ping"></div>
        </div>
      </div>

      {/* Connection line from timeline to card (for bottom cards) */}
      {!isTop && (
        <div className="w-px h-12 bg-gradient-to-t from-accentCyan/50 to-transparent opacity-60"></div>
      )}

      {/* Card positioned below timeline (for bottom cards) */}
      {!isTop && (
        <div className="relative mt-16 w-80">
          <Tilt
            rotationFactor={6}
            isRevese
            springOptions={{
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2,
            }}
            className="group relative rounded-xl"
          >
            <Spotlight
              className="z-10 from-accentCyan/50 via-accentPurple/30 to-transparent blur-2xl"
              size={240}
              springOptions={{
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
              }}
            />
            <div className="glass-card p-8 rounded-xl border border-accentCyan/20 hover:border-accentCyan/40 transition-all duration-300 backdrop-blur-md bg-daoSurface/30">
              <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="space-y-6">
                <h3 className="font-orbitron text-xl md:text-2xl font-bold text-textPrimary group-hover:text-accentCyan transition-colors duration-300 leading-relaxed">
                  {event.name}
                </h3>
                <p className="text-base md:text-lg text-textSecondary leading-loose">
                  {event.description}
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      )}
    </div>
  );
}

export function EventsSection() {
  return (
    <section className="relative bg-gradient-to-b from-daoBg via-daoSurface/10 to-daoBg min-h-screen py-32 px-8 md:px-16 lg:px-24 overflow-x-auto">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accentCyan/50 to-transparent"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern"></div>
      </div>
      
      {/* Side decorations */}
      <div className="absolute left-0 top-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-accentCyan to-transparent transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-accentCyan to-transparent transform -translate-y-1/2"></div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 w-full" style={{ marginTop: '200px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-4xl md:text-6xl lg:text-8xl font-bold text-textPrimary mb-8"
          >
            UPCOMING <span className="text-accentCyan">EVENTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textSecondary text-xl md:text-2xl leading-relaxed mb-16 text-center w-full"
          >
            Follow our journey through the evolution of blockchain technology and witness the future unfold
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-accentCyan to-accentPurple mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative mb-20" style={{ marginTop: '150px' }}>
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Animated Beam Timeline Container */}
            <div className="relative py-24">
              {/* Timeline Events with beam running through their dots */}
              <div className="flex justify-between items-center px-8">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.8, y: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.3 + 2, // Delay after beam animation
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="flex-1 max-w-sm mx-3 relative z-10"
                  >
                    <TimelineCard event={event} index={index} />
                  </motion.div>
                ))}
              </div>
              
              {/* Beam positioned to run through the timeline dots */}
              <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
                <BeamShooter 
                  delay={1}
                  duration={4}
                  height="8px"
                  fromColor="#FFFFFF"
                  viaColor="#00FFFF"
                  toColor="#FFFFFF"
                  className="z-0"
                />
                {/* Additional neon glow effect */}
                <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 -translate-x-1">
                  <div className="w-full h-4 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-lg opacity-60 animate-pulse"></div>
                </div>
                <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
                  <div className="w-full h-2 bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent blur-md opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-12 px-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center space-x-4">
                {/* Mobile timeline dot */}
                <div className="w-4 h-4 bg-accentCyan rounded-full border-2 border-daoBg shadow-lg shadow-accentCyan/50 flex-shrink-0">
                  <div className="w-full h-full bg-accentCyan rounded-full animate-pulse"></div>
                </div>
                
                {/* Mobile card */}
                <div className="flex-1">
                  <Tilt
                    rotationFactor={4}
                    isRevese
                    springOptions={{
                      stiffness: 26.7,
                      damping: 4.1,
                      mass: 0.2,
                    }}
                    className="group relative rounded-xl"
                  >
                    <Spotlight
                      className="z-10 from-accentCyan/50 via-accentPurple/30 to-transparent blur-2xl"
                      size={200}
                      springOptions={{
                        stiffness: 26.7,
                        damping: 4.1,
                        mass: 0.2,
                      }}
                    />
                                                  <div className="glass-card p-6 rounded-xl border border-accentCyan/20 hover:border-accentCyan/40 transition-all duration-300 backdrop-blur-md bg-daoSurface/30">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-sharetech text-accentCyan uppercase tracking-wider px-2 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/20">
                          {event.date}
                        </span>
                      </div>
                                                      <h3 className="font-orbitron text-lg md:text-xl font-bold text-textPrimary group-hover:text-accentCyan transition-colors duration-300 leading-relaxed mb-4">
                                  {event.name}
                                </h3>
                                <p className="text-sm md:text-base text-textSecondary leading-loose">
                                  {event.description}
                                </p>
                    </div>
                  </Tilt>
                </div>
              </div>
              
              {/* Vertical line connector for mobile (except last item) */}
              {index < events.length - 1 && (
                <div className="absolute left-2 top-12 w-px h-12 bg-gradient-to-b from-accentCyan to-transparent opacity-60 transform -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
} 