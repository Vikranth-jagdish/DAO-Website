"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  BellIcon,
  GlobeIcon,
  PersonIcon,
  RocketIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { MagicCard } from "@/components/ui/magic-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      mass: 0.8,
    },
  },
  hover: {
    scale: 1.03,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const contentVariants = {
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const features = [
  {
    Icon: MagnifyingGlassIcon,
    name: "Career Growth & Industry Access",
    description:
      "Direct channels to tech leaders through curated sessions, workshops, and collaborations. Early access to career opportunities with clear professional pathways.",
    background: "from-primary/10 to-secondary/5",
    className: "lg:col-span-2",
  },
  {
    Icon: RocketIcon,
    name: "Hackathons & Innovation",
    description:
      "Large-scale hackathons like DEFY series with thousands of participants. Real-world experience in event management and community engagement.",
    background: "from-secondary/10 to-accent/5",
    className: "lg:col-span-1",
  },
  {
    Icon: PersonIcon,
    name: "Internship Opportunities",
    description:
      "Exclusive programs with leading tech companies and startups. Bridge academic learning with industry exposure in cutting-edge domains.",
    background: "from-accent/10 to-primary/5",
    className: "lg:col-span-1",
  },
  {
    Icon: GlobeIcon,
    name: "Collaborative Networking",
    description:
      "Peer-to-peer learning through team projects and cross-domain interactions. Build lasting relationships in Web3, AI, and emerging tech.",
    background: "from-primary/8 to-secondary/8",
    className: "lg:col-span-1",
  },
  {
    Icon: BellIcon,
    name: "Alumni Engagement & Mentorship",
    description:
      "Strong network of professionals in top-tier companies worldwide. Active engagement with guidance from industry veterans.",
    background: "from-secondary/8 to-accent/8",
    className: "lg:col-span-1",
  },
];

export default function StudentBenefitsPage() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 120,
              delay: 0.2,
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Student{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Benefits
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Exclusive opportunities and premium experiences crafted for the
              next generation of innovators
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-32" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className={feature.className}
                variants={cardVariants}
                whileHover="hover"
              >
                <MagicCard
                  className="h-full"
                  gradientSize={300}
                  gradientFrom="hsl(var(--background))"
                  gradientTo="hsl(var(--secondary))"
                  gradientColor="hsl(var(--primary) / 0.1)"
                  gradientOpacity={0.6}
                >
                  <div
                    className={`group relative overflow-hidden rounded-3xl border border-border/40 
                               bg-gradient-to-br ${feature.background} backdrop-blur-sm
                               hover:border-primary/30 transition-all duration-500 h-full`}
                    style={{
                      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          boxShadow: "0 0 40px hsl(var(--primary) / 0.25)",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <motion.div
                      className="relative p-8 lg:p-10 h-full flex flex-col"
                      variants={contentVariants}
                    >
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                          <feature.Icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                        {feature.name}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed font-light flex-grow">
                        {feature.description}
                      </p>
                    </motion.div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
