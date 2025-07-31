"use client";

import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Disc,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";

export function FooterSection() {
  const socials = [
    {
      name: "Discord",
      icon: Disc,
      link: "#", // Add actual links here
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "#",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "#",
    },
    {
      name: "GitHub",
      icon: Github,
      link: "#",
    },
  ];

  const contactItems = [
    {
      icon: Mail,
      text: "hello@daocommunity.org",
      link: "mailto:hello@daocommunity.org",
    },
    {
      icon: Globe,
      text: "www.daocommunity.org",
      link: "https://www.daocommunity.org",
    },
    {
      icon: MapPin,
      text: "Global Community",
      link: "#", // Or a link to a contact page if relevant
    },
  ];

  const quickLinks = ["About Us", "Events", "Benefits", "Sponsors", "Contact"];

  return (
    <footer
      className="relative py-24 px-8 md:px-16 lg:px-24 bg-background"
      // Using Tailwind's border-t and border-border
      style={{
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Background Grid - using a custom utility for the grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-grid" // `bg-grid` will be a custom utility or defined in global.css
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--border-strong)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border-strong)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center bg-primary" // bg-primary
                whileHover={{ rotate: 15 }}
              >
                {/* SVG icon using text-primary-foreground */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-primary-foreground" // text-primary-foreground
                >
                  <path
                    fill="currentColor"
                    d="M12 2L2 7v10l10 5l10-5V7L12 2m0 2.8L20 9v6l-8 4l-8-4V9l8-4.2M12 12l-5 2v3l5 2l5-2v-3l-5-2z"
                  />
                </svg>
              </motion.div>
              <h3 className="font-bold text-3xl text-foreground">
                {" "}
                {/* text-foreground */}
                DAO <span className="text-primary">COMMUNITY</span>{" "}
                {/* text-primary */}
              </h3>
            </div>
            <p className="text-lg leading-relaxed mb-6 max-w-md text-muted-foreground">
              {" "}
              {/* text-muted-foreground */}
              Empowering the next generation of blockchain innovators through
              education, community building, and hands-on experience.
            </p>
            <div className="flex space-x-4">
              {socials.map(({ name, icon: Icon, link }) => (
                <motion.a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer relative overflow-hidden group
                             bg-muted border border-border" // bg-muted, border-border
                >
                  <Icon className="w-5 h-5 text-primary" /> {/* text-primary */}
                  <motion.div
                    className="absolute inset-0 opacity-0 bg-primary/10 border border-primary/20" // bg-primary/10, border-primary/20
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.2 },
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="font-bold text-xl mb-6 text-primary">
              {" "}
              {/* text-primary */}
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link}
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="relative"
                >
                  <a
                    href="#" // Add actual link paths here
                    className="text-lg flex items-center group text-muted-foreground hover:text-foreground transition-colors" // text-muted-foreground, hover:text-foreground
                  >
                    <motion.span
                      className="absolute left-0 opacity-0 -translate-x-4 text-primary" // text-primary
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
                    <span className="ml-4 group-hover:underline">{link}</span>
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
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="font-bold text-xl mb-6 text-primary">
              {" "}
              {/* text-primary */}
              Get in Touch
            </h4>
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, text, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target={link.startsWith("http") ? "_blank" : "_self"}
                  rel={link.startsWith("http") ? "noopener noreferrer" : ""}
                  whileHover={{
                    scale: 1.02,
                    x: 3,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      duration: 0.2,
                    },
                  }}
                  className="flex items-start group text-muted-foreground hover:text-foreground transition-colors" // text-muted-foreground, hover:text-foreground
                >
                  <Icon className="w-5 h-5 mr-3 mt-0.5 text-primary" />{" "}
                  {/* text-primary */}
                  <p className="text-lg group-hover:underline">{text}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="pt-8 border-t border-border" // border-t, border-border
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              className="text-center md:text-left text-muted-foreground" // text-muted-foreground
              whileHover={{
                scale: 1.01,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              © {new Date().getFullYear()} DAO Community. All rights reserved.
              Built with <span className="text-destructive">❤️</span> for the
              blockchain future.
            </motion.p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service"].map((item, index) => (
                <motion.a
                  key={index}
                  href="#" // Add actual links here
                  className="relative text-muted-foreground hover:text-foreground transition-colors" // text-muted-foreground, hover:text-foreground
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-px bg-primary" // bg-primary
                    whileHover={{
                      width: "100%",
                      transition: {
                        duration: 0.3,
                      },
                    }}
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
