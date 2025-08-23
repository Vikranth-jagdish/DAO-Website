"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  // Professional animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const headlineVariant = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for premium feel
      },
    },
  };

  const subheadingVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const ctaVariant = {
    hidden: {
      opacity: 0,
      y: 25,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Premium Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50 z-10" />

      {/* Content Container */}
      <div className="relative z-20 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto text-center"
        >
          {/* Premium Headline */}
          <motion.h1
            variants={headlineVariant}
            className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Shape the Future of{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Decentralized Innovation
            </span>
          </motion.h1>

          {/* Professional Subheading */}
          <motion.p
            variants={subheadingVariant}
            className="mx-auto mb-12 max-w-4xl text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light"
          >
            Join a vibrant community where collective intelligence drives
            breakthrough innovation. Connect, collaborate, and contribute to
            groundbreaking projects that redefine the digital landscape and
            shape tomorrow&apos;s decentralized future.
          </motion.p>

          {/* Premium CTA Button */}
          <motion.div variants={ctaVariant} className="flex justify-center">
            <Link href="#about" passHref>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-background text-foreground px-10 py-7 text-xl font-bold rounded-xl border border-border/40 hover:bg-background/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20"
                >
                  {/* Button Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                  {/* Button Content */}
                  <span className="relative z-10 flex items-center">
                    Explore & Join Our Community
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2 duration-300" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent z-15" />
    </section>
  );
}
