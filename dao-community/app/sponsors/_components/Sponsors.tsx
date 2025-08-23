"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { sponsorNames } from "@/constans/SponsorDetails";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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
    scale: 1.02,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const textVariants = {
  hover: {
    scale: 1.05,
    color: "hsl(var(--primary))",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const shimmerVariants = {
  initial: { x: "-100%" },
  hover: {
    x: "100%",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const SponsorsPage: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 120,
              delay: 0.2,
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sponsors
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl md:max-w-4xl mx-auto leading-relaxed font-light">
              Trusted organizations shaping the future of decentralized
              innovation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24 md:pb-32 flex-1" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {sponsorNames.map((sponsor) => (
              <motion.div
                key={sponsor}
                className="group relative h-72 md:h-80 rounded-3xl overflow-hidden
                           bg-gradient-to-br from-card/95 to-muted/30
                           border border-border/40 backdrop-blur-sm
                           hover:border-primary/40 transition-colors duration-500"
                variants={cardVariants}
                whileHover="hover"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100"
                  variants={shimmerVariants}
                  initial="initial"
                  whileHover="hover"
                  style={{
                    transform: "skewX(-25deg)",
                  }}
                />

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      boxShadow: "0 0 40px hsl(var(--primary) / 0.15)",
                    }}
                  />
                </div>

                {/* Content Container */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8">
                  {/* Logo Container */}
                  <motion.div
                    className="relative w-full h-40 md:h-44 lg:h-48 flex items-center justify-center mb-5 md:mb-6"
                    variants={imageVariants}
                  >
                    <Image
                      src={`/Sponsors/${sponsor.toLowerCase()}logo.png`}
                      alt={`${sponsor} logo`}
                      fill
                      className="object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                      quality={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </motion.div>

                  {/* Sponsor Name */}
                  <motion.div
                    className="text-center px-2"
                    variants={textVariants}
                  >
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground tracking-wide">
                      {sponsor}
                    </h3>
                  </motion.div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
