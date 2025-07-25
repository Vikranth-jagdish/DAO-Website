'use client';

import { motion } from 'framer-motion';

export function VisionMissionSection() {
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
            VISION & <span className="text-accentPurple">MISSION</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textSecondary max-w-5xl mx-auto text-xl md:text-2xl leading-relaxed mb-8"
          >
            Shaping the future of decentralized technology through education, innovation, and community empowerment
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-accentPurple to-accentCyan mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-10 rounded-xl border border-accentCyan/20 backdrop-blur-md bg-daoSurface/30 h-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-accentCyan to-accentPurple flex items-center justify-center">
                  <span className="text-3xl">👁️</span>
                </div>
                <h3 className="font-orbitron text-3xl font-bold text-accentCyan mb-6">
                  VISION
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-textPrimary text-lg leading-relaxed">
                  To become the leading global community empowering students to understand, 
                  innovate, and lead in the decentralized future.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accentCyan rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-textSecondary">
                      Bridge the gap between traditional education and blockchain technology
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accentCyan rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-textSecondary">
                      Create a global network of blockchain-literate professionals
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accentCyan rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-textSecondary">
                      Foster innovation in decentralized technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-10 rounded-xl border border-accentPurple/20 backdrop-blur-md bg-daoSurface/30 h-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-accentPurple to-accentMagenta flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="font-orbitron text-3xl font-bold text-accentPurple mb-6">
                  MISSION
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-textPrimary text-lg leading-relaxed">
                  To democratize blockchain education through hands-on learning, community building, 
                  and real-world project experience.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accentPurple rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-textSecondary">
                      Provide accessible blockchain education to students worldwide
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accentPurple rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-textSecondary">
                      Connect students with industry leaders and opportunities
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accentPurple rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-textSecondary">
                      Support student-led blockchain projects and startups
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              OUR <span className="text-accentMagenta">VALUES</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Innovation', icon: '💡', color: 'accentCyan' },
              { title: 'Collaboration', icon: '🤝', color: 'accentPurple' },
              { title: 'Transparency', icon: '🔍', color: 'accentMagenta' },
              { title: 'Empowerment', icon: '⚡', color: 'accentCyan' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className={`glass-card p-6 rounded-xl border border-${value.color}/20 hover:border-${value.color}/40 transition-all duration-300 backdrop-blur-md bg-daoSurface/20`}>
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className={`font-orbitron text-lg font-bold text-${value.color}`}>
                    {value.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 