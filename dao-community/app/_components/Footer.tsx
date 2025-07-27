"use client";

import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Disc,
} from "lucide-react";

export function FooterSection() {
  const socials = [
    { name: "Discord", icon: Disc, color: "primary" },
    { name: "Twitter", icon: Twitter, color: "secondary" },
    { name: "LinkedIn", icon: Linkedin, color: "accent" },
    { name: "GitHub", icon: Github, color: "primary" },
  ];

  return (
    <footer className="relative bg-background py-24 px-8 md:px-16 lg:px-24" style={{ marginTop: "200px" }}>
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted/30 to-transparent" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern" />

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="font-orbitron text-3xl font-bold text-foreground mb-6">
              DAO <span className="text-primary">COMMUNITY</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
              Empowering the next generation of blockchain innovators through education, community building, and hands-on experience.
            </p>
            <div className="flex space-x-4">
              {socials.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name}
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-lg bg-${color}/10 border border-${color}/20 flex items-center justify-center cursor-pointer relative overflow-hidden`}
                >
                  <Icon className={`w-5 h-5 text-${color}`} />
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0"
                    whileHover={{
                      opacity: 0.1,
                      transition: { duration: 0.2 },
                    }}
                  />
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
            <h4 className="font-orbitron text-xl font-bold text-secondary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Events", "Benefits", "Sponsors", "Contact"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="relative"
                >
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg flex items-center"
                  >
                    <motion.span
                      className="absolute left-0 opacity-0 -translate-x-4"
                      initial={{ opacity: 0, x: -16 }}
                      whileHover={{
                        opacity: 1,
                        x: -12,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 20,
                          duration: 0.3,
                        },
                      }}
                    >
                      →
                    </motion.span>
                    <span className="ml-4">{link}</span>
                  </a>
                </motion.li>
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
            <h4 className="font-orbitron text-xl font-bold text-accent mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              {[
                { icon: "📧", text: "hello@daocommunity.org" },
                { icon: "🌐", text: "www.daocommunity.org" },
                { icon: "📍", text: "Global Community" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="flex items-start"
                >
                  <span className="mr-2 text-lg">{item.icon}</span>
                  <motion.p
                    className="text-muted-foreground text-lg"
                    whileHover={{
                      x: 3,
                      transition: { type: "spring", stiffness: 500 },
                    }}
                  >
                    {item.text}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-muted/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              className="text-muted-foreground text-center md:text-left"
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            >
              © 2025 DAO Community. All rights reserved. Built with ❤️ for the blockchain future.
            </motion.p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service"].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-foreground relative"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-px bg-muted-foreground"
                    whileHover={{ width: "100%", transition: { duration: 0.3 } }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
