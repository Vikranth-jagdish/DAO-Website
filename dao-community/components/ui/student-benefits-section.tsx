'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    id: 1,
    icon: '🎓',
    title: 'Free Education',
    description: 'Access to comprehensive blockchain courses, workshops, and certification programs',
    color: 'accentCyan'
  },
  {
    id: 2,
    icon: '💼',
    title: 'Career Opportunities',
    description: 'Direct connections to blockchain companies and internship opportunities',
    color: 'accentPurple'
  },
  {
    id: 3,
    icon: '🌐',
    title: 'Networking',
    description: 'Connect with industry professionals, founders, and like-minded students',
    color: 'accentMagenta'
  },
  {
    id: 4,
    icon: '🚀',
    title: 'Project Support',
    description: 'Funding and mentorship for your blockchain and Web3 project ideas',
    color: 'accentCyan'
  },
  {
    id: 5,
    icon: '🏆',
    title: 'Competitions',
    description: 'Participate in hackathons, coding challenges, and innovation contests',
    color: 'accentPurple'
  },
  {
    id: 6,
    icon: '📚',
    title: 'Resources',
    description: 'Access to premium tools, platforms, and educational materials',
    color: 'accentMagenta'
  }
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0], index: number }) {
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
      <div className={`glass-card p-10 rounded-xl border border-${benefit.color}/20 hover:border-${benefit.color}/40 transition-all duration-300 backdrop-blur-md bg-daoSurface/30 h-full text-center`}>
        <div className="text-8xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
          {benefit.icon}
        </div>
        
        <h3 className={`font-orbitron text-2xl font-bold text-textPrimary group-hover:text-${benefit.color} transition-colors duration-300 mb-6`}>
          {benefit.title}
        </h3>
        
        <p className="text-textSecondary text-lg leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}

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
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-4xl md:text-6xl lg:text-8xl font-bold text-textPrimary mb-8"
          >
            STUDENT <span className="text-accentCyan">BENEFITS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textSecondary max-w-5xl mx-auto text-xl md:text-2xl leading-relaxed mb-8"
          >
            Unlock exclusive opportunities and resources designed to accelerate your blockchain journey and transform your career prospects
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-accentCyan to-accentPurple mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="glass-card p-8 rounded-xl border border-accentCyan/20 backdrop-blur-md bg-daoSurface/20 mb-8">
            <h3 className="font-orbitron text-2xl font-bold text-textPrimary mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-textSecondary mb-6 max-w-2xl mx-auto">
              Join thousands of students already building the future of finance and technology
            </p>
            <button className="neon-button px-10 py-4 rounded-lg font-sharetech font-bold text-lg text-daoBg bg-accentCyan hover:bg-accentPurple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accentCyan/30">
              JOIN THE COMMUNITY
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 