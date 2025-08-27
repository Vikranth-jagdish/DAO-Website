"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FollowInstagramDialog } from "./FollowInstagramDialog";
import ImageTrail from "@/components/reactbits/Animations/ImageTrail/ImageTrail";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import TextType from "@/components/reactbits/TextAnimations/TextType/TextType";

export default function HeroSection() {
  // Professional animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const subheadingVariant = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
      <div className="relative z-30 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* ImageTrail Interactive Area */}
        <div className="absolute inset-0 z-10">
          <ImageTrail
            items={[
              "/gallery/image6.jpg",
              "/gallery/image9.jpg",
              "/gallery/image10.jpg",
              "/gallery/image1.jpg",
              "/gallery/image5.jpg",
            ]}
            variant={4}
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto text-center relative z-20 px-4"
        >
          {/* Premium Headline */}
          <div className="my-16">
            <TextType
              text={[
                "Building the Future of Web3",
                "Decentralized Innovation Starts Here",
                "Join the Blockchain Revolution",
                "Empowering Digital Transformation",
              ]}
              typingSpeed={60}
              pauseDuration={2000}
              deletingSpeed={40}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-primary font-bold text-5xl md:text-6xl lg:text-7xl"
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight tracking-tight"
              textColors={["#ffffff", "#e2e8f0", "#f1f5f9", "#cbd5e1"]}
              loop={true}
              startOnVisible={true}
            />
          </div>

          {/* Professional Subheading */}
          <motion.p
            variants={subheadingVariant}
            className="mx-auto mb-12 max-w-4xl text-xl sm:text-2xl lg:text-3xl text-slate-200 leading-relaxed font-medium tracking-wide"
          >
            Connect with innovators, builders, and blockchain enthusiasts
            shaping the future of{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
              decentralized technology
            </span>
          </motion.p>

          {/* Premium CTA Button */}
          <HeroFollowCTA />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent z-15" />
    </section>
  );
}

// CTA component with Instagram dialog
const HeroFollowCTA: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.95 },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
          },
        }}
        className="flex justify-center"
      >
        <HoverBorderGradient
          onClick={() => setOpen(true)}
          containerClassName="rounded-full"
          className="bg-card/90 backdrop-blur-sm text-card-foreground flex items-center space-x-3 px-10 py-5 text-xl font-bold border border-primary/20 hover:border-primary/40 transition-all duration-300"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Explore & Join Our Community
          </span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="h-6 w-6 text-primary" />
          </motion.div>
        </HoverBorderGradient>
      </motion.div>

      <FollowInstagramDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};
