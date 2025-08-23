"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { FollowInstagramDialog } from "@/app/_components/FollowInstagramDialog";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      mass: 0.8,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function MissionVisionPage() {
  const visionRef = React.useRef(null);
  const missionRef = React.useRef(null);
  const ctaRef = React.useRef(null);

  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

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
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Vision
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Guiding principles that shape our community and drive innovation
              forward
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-2" ref={visionRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
          >
            {/* Vision Text */}
            <motion.div className="space-y-8" variants={textVariants}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Our Vision
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We envision a future where every student understands the
                  transformative power of blockchain and Web3 technologies,
                  creating a passionate network of innovators ready to shape
                  tomorrow&apos;s digital landscape.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Through immersive experiences and collaborative learning, we
                  bridge the gap between curiosity and innovation—empowering the
                  next generation to explore, create, and lead in the
                  decentralized world.
                </p>
              </div>
            </motion.div>

            {/* Vision Image */}
            <motion.div
              className="relative group"
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-card/80 to-background/60 backdrop-blur-sm rounded-3xl border border-border/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <motion.div
                  className="relative p-8 lg:p-12"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <Image
                    src="/blockchain.png"
                    alt="Vision - Blockchain Innovation"
                    width={500}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </motion.div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      boxShadow: "0 0 60px hsl(var(--primary) / 0.25)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-24" ref={missionRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
          >
            {/* Mission Image */}
            <motion.div
              className="relative group lg:order-first"
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-card/80 to-background/60 backdrop-blur-sm rounded-3xl border border-border/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
                <motion.div
                  className="relative p-8 lg:p-12"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <Image
                    src="/blockchain3.png"
                    alt="Mission - Community Building"
                    width={500}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      boxShadow: "0 0 60px hsl(var(--secondary) / 0.25)",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Mission Text */}
            <motion.div className="space-y-8" variants={textVariants}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mb-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our mission is to democratize blockchain education, making it
                  accessible and engaging for students at every level. We
                  organize transformative workshops, seminars, and host
                  industry-leading Web3 events.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Beyond technology, we cultivate essential leadership skills
                  through hands-on event organization, fostering teamwork,
                  communication, and innovation that extends far beyond the
                  blockchain realm.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-24" ref={ctaRef}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative group"
            variants={cardVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-card/90 to-background/70 backdrop-blur-sm rounded-3xl border border-border/40 p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Shape the Future?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join a community of innovators, builders, and visionaries who
                  are redefining what&apos;s possible in the decentralized
                  world.
                </p>

                <MissionFollowCTA />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    boxShadow: "0 0 80px hsl(var(--primary) / 0.3)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const MissionFollowCTA: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <motion.button
        className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
      >
        Follow Us For Recruitment Updates
      </motion.button>
      <FollowInstagramDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};
