"use client";

import { quickLinks } from "@/constans/quickLins";
import { socials } from "@/constans/Social";
import { motion } from "framer-motion";
import { Mail, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FooterSection() {
  const contactItems = [
    {
      icon: Mail,
      text: "chennai.daocommunity@vit.ac.in",
      link: "mailto:chennai.daocommunity@vit.ac.in",
    },
    {
      icon: Globe,
      text: "www.daocommunity.org",
      link: "https://www.daocommunity.org",
    },
    {
      icon: MapPin,
      text: "Mambakkam, Tamil Nadu, India", // Updated to a more specific location
      link: "https://www.google.com/maps/place/Vellore+Institute+of+Technology,+Chennai/",
    },
  ];

  return (
    <footer
      // UPDATED: Responsive vertical padding
      className="relative py-16 md:py-24 px-8 md:px-16 lg:px-24 bg-background"
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
              "linear-gradient(to right, hsl(var(--border-strong)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border-strong)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* UPDATED: Responsive gap and bottom margin */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2" // Changed from lg:col-span-2 to md:col-span-2 for better tablet layout
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center"
                whileHover={{ rotate: 15 }}
              >
                <Image
                  src={"/daopng.png"}
                  height={200}
                  width={200}
                  alt="logo"
                />
              </motion.div>
              {/* UPDATED: Responsive text size */}
              <h3 className="font-bold text-2xl sm:text-3xl text-foreground">
                DAO <span className="text-primary">COMMUNITY</span>
              </h3>
            </div>
            <p className="text-lg leading-relaxed mb-6 max-w-md text-muted-foreground">
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
                  className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer relative overflow-hidden group bg-muted border border-border"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <motion.div
                    className="absolute inset-0 opacity-0 bg-primary/10 border border-primary/20"
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
            <h4 className="font-bold text-xl mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className="text-lg flex items-center group text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <motion.span
                      className="absolute left-0 opacity-0 -translate-x-4 text-primary"
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
                    <span className="ml-4 group-hover:underline">
                      {item.name}
                    </span>
                  </Link>
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
                  className="flex items-start group text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  {/* UPDATED: Added 'break-all' to prevent text overflow */}
                  <p className="text-lg group-hover:underline break-all">
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
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              className="text-center md:text-left text-muted-foreground"
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3 },
              }}
            >
              © {new Date().getFullYear()} DAO Community. All rights reserved.
              Built with <span className="text-destructive">❤️</span> for the
              blockchain future.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
