'use client';

import { motion } from 'framer-motion';

export function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-t from-daoSurface/20 to-daoBg py-24 px-8 md:px-16 lg:px-24" style={{ marginTop: '200px' }}>
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-textPrimary/30 to-transparent"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="font-orbitron text-3xl font-bold text-textPrimary mb-6">
              DAO <span className="text-accentCyan">COMMUNITY</span>
            </h3>
            <p className="text-textSecondary text-lg leading-relaxed mb-6 max-w-md">
              Empowering the next generation of blockchain innovators through education, 
              community building, and hands-on experience.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'Discord', color: 'accentCyan' },
                { name: 'Twitter', color: 'accentPurple' },
                { name: 'LinkedIn', color: 'accentMagenta' },
                { name: 'GitHub', color: 'accentCyan' }
              ].map((social, index) => (
                <motion.div
                  key={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-lg glass-card border border-${social.color}/20 hover:border-${social.color}/40 flex items-center justify-center cursor-pointer transition-all duration-300`}
                >
                  <div className={`w-6 h-6 bg-${social.color} rounded-sm`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-orbitron text-xl font-bold text-accentPurple mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Events', 'Benefits', 'Sponsors', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-textSecondary hover:text-accentCyan transition-colors duration-300 text-lg"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-orbitron text-xl font-bold text-accentMagenta mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-textSecondary text-lg">
                  📧 hello@daocommunity.org
                </p>
              </div>
              <div>
                <p className="text-textSecondary text-lg">
                  🌐 www.daocommunity.org
                </p>
              </div>
              <div>
                <p className="text-textSecondary text-lg">
                  📍 Global Community
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-textSecondary/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-textSecondary text-center md:text-left">
              © 2025 DAO Community. All rights reserved. Built with ❤️ for the blockchain future.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-textSecondary hover:text-accentCyan transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-textSecondary hover:text-accentCyan transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 