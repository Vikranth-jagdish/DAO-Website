'use client';

import { motion } from 'framer-motion';
import { BackgroundPaths } from './background-paths';
import { CustomersSection } from './customers-section';
import { Button as MovingBorderButton } from './moving-border';

const blockchainSponsors = [
  {
    src: "/Sponsors/image-removebg-preview (5).png",
    alt: "Sponsor Logo 1",
    height: 40,
  },
  {
    src: "/Sponsors/building-agents-google-gemini-llamaindex_1.original-removebg-preview.png",
    alt: "Google Gemini & LlamaIndex",
    height: 40,
  },
  {
    src: "/Sponsors/RELIANCE-LOGO.png",
    alt: "Reliance",
    height: 40,
  },
];



export function SponsorsSection() {
  return (
    <section className="relative bg-gradient-to-b from-daoBg via-daoSurface/10 to-daoBg min-h-screen py-32 px-8 md:px-16 lg:px-24" style={{ marginTop: '200px' }}>
      {/* Background Paths */}
      <BackgroundPaths />
      
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
            className="text-textSecondary text-xl md:text-2xl leading-relaxed mb-16 md:mb-20 text-center w-full"
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

        {/* Sponsors Logos */}
        <div style={{ marginTop: '10rem', marginBottom: '8rem' }}>
          <CustomersSection customers={blockchainSponsors} />
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
          style={{ marginTop: '12rem', marginBottom: '4rem', paddingTop: '2rem', paddingBottom: '2rem' }}
        >
          <MovingBorderButton
            borderRadius="1rem"
            className="bg-transparent border-0 text-textPrimary hover:text-accentMagenta transition-colors duration-300 backdrop-blur-md"
            containerClassName="h-16 w-56 relative"
            borderClassName="h-6 w-6 opacity-90 bg-gradient-to-r from-accentMagenta via-accentPurple to-accentCyan rounded-full shadow-[0_0_15px_#FF3D8F,0_0_25px_#A76EFF] animate-pulse"
            duration={3000}
          >
            <span className="font-sharetech uppercase tracking-wider font-bold text-sm relative z-10" style={{ padding: '1rem 1.5rem' }}>
              Become a Sponsor
            </span>
          </MovingBorderButton>
        </motion.div>
      </div>
    </section>
  );
} 