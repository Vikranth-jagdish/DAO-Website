"use client";

import {
  Mail,
  Globe,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  MessageCircle,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils"; // Ensure this is imported if you're using it

export function FooterSection() {
  const socialLinks = [
    { name: "Discord", icon: MessageCircle, href: "#", label: "Join Discord" },
    { name: "Twitter", icon: Twitter, href: "#", label: "Follow on Twitter" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      label: "Connect on LinkedIn",
    },
    { name: "GitHub", icon: Github, href: "#", label: "Star on GitHub" },
  ];

  return (
    <footer
      className="relative bg-background py-24 px-8 md:px-16 lg:px-24"
      style={{ marginTop: "200px" }}
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-muted-foreground/30"></div>

      <div className="max-w-7xl mx-auto relative ">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              DAO <span className="text-muted-foreground">Community</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
              Empowering blockchain innovators through community, learning, and
              experience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-md bg-background border border-muted-foreground hover:border-foreground flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <GitBranch />
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Events", "Benefits", "Sponsors", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-foreground mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4 text-muted-foreground text-lg">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-foreground" />
                <span>hello@daocommunity.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-foreground" />
                <span>www.daocommunity.org</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-foreground" />
                <span>Global Community</span>
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
          className="pt-8 border-t border-muted-foreground/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © 2025 DAO Community. Built with ❤️ for the decentralized future.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
