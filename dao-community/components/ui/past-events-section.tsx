'use client';

import { motion } from 'framer-motion';

const pastEvents = [
  {
    id: 1,
    name: 'Blockchain Fundamentals',
    description: 'Introduction to blockchain technology and cryptocurrency basics',
    date: 'December 2024',
    attendees: '150+',
    status: 'Completed'
  },
  {
    id: 2,
    name: 'Smart Contract Workshop',
    description: 'Hands-on workshop for building and deploying smart contracts',
    date: 'November 2024',
    attendees: '85+',
    status: 'Completed'
  },
  {
    id: 3,
    name: 'DeFi Deep Dive',
    description: 'Exploring decentralized finance protocols and yield farming',
    date: 'October 2024',
    attendees: '120+',
    status: 'Completed'
  }
];

function PastEventCard({ event, index }: { event: typeof pastEvents[0], index: number }) {
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
      <div className="glass-card p-6 rounded-xl border border-accentPurple/20 hover:border-accentPurple/40 transition-all duration-300 backdrop-blur-md bg-daoSurface/30 h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-sharetech text-accentPurple uppercase tracking-wider px-3 py-1 rounded-full bg-accentPurple/10 border border-accentPurple/20">
            {event.status}
          </span>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        </div>
        
        <h3 className="font-orbitron text-xl font-bold text-textPrimary group-hover:text-accentPurple transition-colors duration-300 mb-3">
          {event.name}
        </h3>
        
        <p className="text-sm text-textSecondary leading-relaxed mb-4">
          {event.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-textSecondary">{event.date}</span>
          <span className="text-accentCyan font-medium">{event.attendees} attendees</span>
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
            className="text-textSecondary max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed mb-8"
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pastEvents.map((event, index) => (
            <PastEventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl border border-accentCyan/20 backdrop-blur-md bg-daoSurface/20">
              <h3 className="font-orbitron text-3xl font-bold text-accentCyan mb-2">355+</h3>
              <p className="text-textSecondary">Total Attendees</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-accentPurple/20 backdrop-blur-md bg-daoSurface/20">
              <h3 className="font-orbitron text-3xl font-bold text-accentPurple mb-2">12</h3>
              <p className="text-textSecondary">Events Completed</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-accentMagenta/20 backdrop-blur-md bg-daoSurface/20">
              <h3 className="font-orbitron text-3xl font-bold text-accentMagenta mb-2">98%</h3>
              <p className="text-textSecondary">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 