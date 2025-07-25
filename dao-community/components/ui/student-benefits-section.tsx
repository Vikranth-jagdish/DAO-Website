'use client';

import { motion } from 'framer-motion';

export function StudentBenefitsSection() {
  return (
    <section className="relative bg-gradient-to-b from-daoBg via-daoSurface/10 to-daoBg min-h-screen py-32 px-8 md:px-16 lg:px-24" style={{ marginTop: '200px' }}>
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accentCyan/50 to-transparent"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-8">
        <div className="grid-pattern"></div>
      </div>
      
      {/* Side decorations */}
      <div className="absolute left-0 top-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-accentCyan to-transparent transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-accentCyan to-transparent transform -translate-y-1/2"></div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center py-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-4xl md:text-6xl lg:text-8xl font-bold text-textPrimary mb-8"
          >
            STUDENT <span className="text-accentCyan">BENEFITS</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-accentCyan to-accentPurple mx-auto rounded-full"
          ></motion.div>
        </div>
      </div>
    </section>
  );
} 