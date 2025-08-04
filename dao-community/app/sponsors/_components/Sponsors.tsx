"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { sponsorNames } from "@/constans/SponsorDetails";

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 30,
    rotateX: 10,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: i * 0.08,
    },
  }),
  hover: {
    scale: 1.05,
    y: -10,
    rotateX: -5,
    // ✨ CHANGE: Updated shadow to use the primary theme color for a glow effect
    boxShadow: "0 15px 35px hsl(var(--primary) / 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
};

const SponsorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground mt-6">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8,
            }}
          >
            Our <span className="text-primary">Sponsors</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            Visionary organizations powering our mission and community.
          </motion.p>
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sponsorNames.map((sponsor, index) => (
              <motion.div
                key={sponsor}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-lg
                           flex flex-col items-center justify-end p-6 border border-border/30
                           bg-gradient-to-br from-primary/10 to-background/40 backdrop-blur-sm"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                {/* Logo Image */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-8"
                  variants={imageVariants}
                >
                  <Image
                    src={`/Sponsors/${sponsor}.png`}
                    alt={`${sponsor} logo`}
                    fill
                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </motion.div>

                {/* Sponsor Name */}
                <motion.div
                  className="relative z-10 w-full text-center pt-4"
                  variants={textVariants}
                >
                  <h3 className="text-xl font-bold text-foreground px-4 py-2 rounded-lg">
                    {sponsor}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
