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
      color: "var(--primary)",
      hoverColor: "var(--chart-1)",
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "var(--chart-2)",
      hoverColor: "var(--chart-3)",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "var(--chart-4)",
      hoverColor: "var(--chart-5)",
    },
    {
      name: "GitHub",
      icon: Github,
      color: "var(--primary)",
      hoverColor: "var(--chart-1)",
    },
  ];

  const contactItems = [
    {
      icon: Mail,
      text: "hello@daocommunity.org",
      color: "var(--primary)",
    },
    {
      icon: Globe,
      text: "www.daocommunity.org",
      color: "var(--chart-2)",
    },
    {
      icon: MapPin,
      text: "Global Community",
      color: "var(--chart-4)",
    },
  ];

  return (
    <footer
      className="relative py-24 px-8 md:px-16 lg:px-24 bg-background"
      style={{
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
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
                className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center"
                style={{ backgroundColor: "var(--primary)" }}
                whileHover={{ rotate: 15 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  style={{ color: "var(--primary-foreground)" }}
                >
                  <path
                    fill="currentColor"
                    d="M12 2L2 7v10l10 5l10-5V7L12 2m0 2.8L20 9v6l-8 4l-8-4V9l8-4.2M12 12l-5 2v3l5 2l5-2v-3l-5-2z"
                  />
                </svg>
              </motion.div>
              <h3
                className="font-bold text-3xl"
                style={{ color: "var(--foreground)" }}
              >
                DAO <span style={{ color: "var(--primary)" }}>COMMUNITY</span>
              </h3>
            </div>
            <p
              className="text-lg leading-relaxed mb-6 max-w-md"
              style={{ color: "var(--muted-foreground)" }}
            >
              Empowering the next generation of blockchain innovators through
              education, community building, and hands-on experience.
            </p>
            <div className="flex space-x-4">
              {socials.map(({ name, icon: Icon, color, hoverColor }) => (
                <motion.a
                  key={name}
                  href="#"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    backgroundColor: hoverColor,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer relative overflow-hidden group"
                  style={{
                    backgroundColor: `${color}10`,
                    border: `1px solid ${color}20`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                  <motion.div
                    className="absolute inset-0 opacity-0"
                    style={{ backgroundColor: "var(--foreground)" }}
                    whileHover={{
                      opacity: 0.1,
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
            <h4
              className="font-bold text-xl mb-6"
              style={{ color: "var(--chart-2)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Events", "Benefits", "Sponsors", "Contact"].map(
                (link) => (
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
                      className="text-lg flex items-center group"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      <motion.span
                        className="absolute left-0 opacity-0 -translate-x-4"
                        style={{ color: "var(--primary)" }}
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
                      <span
                        className="ml-4 group-hover:underline"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {link}
                      </span>
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4
              className="font-bold text-xl mb-6"
              style={{ color: "var(--chart-4)" }}
            >
              Get in Touch
            </h4>
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, text, color }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    scale: 1.02,
                    x: 3,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      duration: 0.2,
                    },
                  }}
                  className="flex items-start group"
                >
                  <Icon className="w-5 h-5 mr-3 mt-0.5" style={{ color }} />
                  <p
                    className="text-lg group-hover:underline"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {text}
                  </p>
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
          className="pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              className="text-center md:text-left"
              style={{ color: "var(--muted-foreground)" }}
              whileHover={{
                scale: 1.01,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              © 2025 DAO Community. All rights reserved. Built with{" "}
              <span style={{ color: "var(--destructive)" }}>❤️</span> for the
              blockchain future.
            </motion.p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service"].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="relative"
                  style={{ color: "var(--muted-foreground)" }}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-px"
                    style={{ backgroundColor: "var(--primary)" }}
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
