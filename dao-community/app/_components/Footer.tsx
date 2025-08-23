"use client";

import { quickLinks } from "@/constans/quickLins";
import { socials } from "@/constans/Social";
import { motion, useInView } from "framer-motion";
import { FollowInstagramDialog } from "./FollowInstagramDialog";
import { Mail, Globe, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
    },
  },
};

export function FooterSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const contactItems = [
    {
      icon: Mail,
      text: "chennai.daocommunity@vit.ac.in",
      link: "mailto:chennai.daocommunity@vit.ac.in",
    },
    {
      icon: Globe,
      text: "daocommunity.in",
      link: "daocommunity.in",
    },
    {
      icon: MapPin,
      text: "VIT Chennai, Tamil Nadu, India",
      link: "https://www.google.com/maps/place/Vellore+Institute+of+Technology,+Chennai/",
    },
  ];

  return (
    <footer
      ref={ref}
      className="relative bg-background border-t border-border/40"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Brand Section */}
            <motion.div
              className="sm:col-span-2 lg:col-span-1 space-y-6"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className="relative w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden group"
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <Image
                    src="/daopng.png"
                    alt="DAO Community Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">
                    DAO Community
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    VIT Chennai
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Empowering the next generation of blockchain innovators through
                education, community, and hands-on experience in Web3
                technologies.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-3">
                {socials.map(({ name, icon: Icon, link }) => (
                  <motion.a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-11 h-11 rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center overflow-hidden"
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />

                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                      style={{
                        boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
                        background: "hsl(var(--primary) / 0.1)",
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h4 className="text-lg font-bold text-primary">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 relative"
                    >
                      {/* Hover arrow that doesn't shift baseline */}
                      <motion.span
                        className="absolute -left-5 opacity-0 group-hover:opacity-100 group-hover:-left-6 flex items-center justify-center text-primary"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      >
                        <ArrowRight className="w-3 h-3" />
                      </motion.span>
                      <span className="pl-0 group-hover:underline underline-offset-4 decoration-primary/50">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h4 className="text-lg font-bold text-primary">Get in Touch</h4>
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, text, link }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target={link.startsWith("http") ? "_blank" : "_self"}
                    rel={link.startsWith("http") ? "noopener noreferrer" : ""}
                    className="group flex items-start space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                    whileHover={{
                      x: 2,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                  >
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="group-hover:underline underline-offset-4 decoration-primary/50 break-words">
                      {text}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter/CTA Section */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h4 className="text-lg font-bold text-primary">Stay Updated</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Join our community to stay updated with the latest Web3
                innovations, events, and opportunities.
              </p>
              <FooterFollowCTA />
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-border/40"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <p className="text-muted-foreground text-sm text-center sm:text-left">
                © {new Date().getFullYear()} DAO Community VIT Chennai. All
                rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center">
                Built with{" "}
                <motion.span
                  className="mx-1 text-red-500"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ❤️
                </motion.span>{" "}
                for the blockchain future
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <FooterFollowDialogHost />
    </footer>
  );
}

const FooterFollowDialogContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

const FooterFollowDialogHost: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <FooterFollowDialogContext.Provider value={{ open, setOpen }}>
      <FollowInstagramDialog open={open} onClose={() => setOpen(false)} />
    </FooterFollowDialogContext.Provider>
  );
};

const FooterFollowCTA: React.FC = () => {
  const ctx = React.useContext(FooterFollowDialogContext);
  const [localOpen, setLocalOpen] = React.useState(false);
  // Fallback if context not yet mounted
  const open = ctx?.open ?? localOpen;
  const setOpen = ctx?.setOpen ?? setLocalOpen;
  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="inline-flex items-center px-4 py-2 bg-primary/10 hover:bg-primary/15 border border-primary/20 rounded-xl text-primary font-medium text-sm transition-all duration-300"
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        Follow Us (Recruitment Updates)
        <ArrowRight className="w-4 h-4 ml-2" />
      </motion.button>
      {/* Local dialog fallback if provider missing */}
      {!ctx && (
        <FollowInstagramDialog open={open} onClose={() => setOpen(false)} />
      )}
    </>
  );
};
