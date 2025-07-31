"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Assuming you might want the button to link somewhere

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
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        // Removed blur-sm from here
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay (acting as the "shadow" for readability) */}
      {/* Changed bg-transparent to bg-black/60 for a semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

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
            className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Shape the Future of{" "}
            <span className="text-primary">
              Decentralized Autonomous Organizations
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mb-10 max-w-3xl text-lg text-gray-300 sm:text-xl lg:text-2xl"
          >
            Dive into a vibrant community where collective intelligence drives
            innovation. Connect, collaborate, and contribute to groundbreaking
            projects that redefine the digital landscape.
          </motion.p>

          <motion.div variants={item}>
            <Link href="/join" passHref>
              {" "}
              {/* Added Link for navigation */}
              <Button
                size="lg"
                className="group bg-primary px-10 py-7 text-xl font-bold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Explore & Join Us
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
