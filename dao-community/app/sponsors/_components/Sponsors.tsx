"use client";
import React from "react";
import { motion } from "framer-motion";
import { sponsorNames } from "@/constans/SponsorDetails";
import MagicBento from "@/components/reactbits/Components/MagicBento";

const SponsorsPage: React.FC = () => {
  // Transform sponsor names into Magic Bento card data
  const sponsorCardData = sponsorNames.map((sponsor) => ({
    title: sponsor,
    description: "Trusted partner in blockchain innovation",
    image: `/Sponsors/${sponsor.toLowerCase()}logo.png`,
    color: "hsl(var(--card))",
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-27 md:py-28">
        <div className="absolute inset-0"></div>
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

      {/* Magic Bento Sponsors Grid */}
      <div className="pb-24 md:pb-32 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 120,
            delay: 0.4,
          }}
        >
          <MagicBento
            cardData={sponsorCardData}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={false}
            textAutoHide={true}
            particleCount={8}
            spotlightRadius={350}
            glowColor="147, 51, 234"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsPage;
