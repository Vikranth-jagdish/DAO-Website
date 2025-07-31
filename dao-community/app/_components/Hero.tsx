"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover blur-sm"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="container mx-auto px-4 text-center"
        >
          <motion.h1
            variants={item}
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Welcome to <span className="text-primary">DAO Community</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            A decentralized future built together.
          </motion.p>

          <motion.div variants={item}>
            <Button
              size="lg"
              className="group bg-primary px-8 py-6 text-lg font-semibold hover:bg-primary/90"
            >
              Join the Community
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
