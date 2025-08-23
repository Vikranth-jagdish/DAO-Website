"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight, Sparkles, Zap } from "lucide-react";

const EventsSection: React.FC = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.96,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay: index * 0.2,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay: 0.1,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay: 0.6,
      },
    },
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden py-10">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-primary/8 to-secondary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/6 to-accent/4 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Premium Hero Header */}
            <motion.div className="text-center mb-16" variants={headerVariants}>
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-6 h-6 text-primary/60 mr-3" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                  DAO Events
                </h1>
                <motion.div
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <Zap className="w-6 h-6 text-secondary/60 ml-3" />
                </motion.div>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Discover the future of decentralized innovation through our
                community gatherings, workshops, and blockchain technology
                showcases
              </p>
            </motion.div>

            {/* Premium Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
              {/* Past Events Card */}
              <motion.div
                custom={0}
                variants={cardVariants}
                className="group cursor-pointer"
                onClick={() => handleNavigation("/events/past-events")}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-border/40 hover:border-primary/30 transition-all duration-500 h-[500px] group">
                  {/* Background Image with Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: "url('/gallery/image2.jpg')",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/20"></div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        boxShadow: "0 0 60px hsl(var(--primary) / 0.25)",
                      }}
                    />
                  </div>

                  {/* Header Section */}
                  <div className="absolute top-4 left-4 right-4 z-20">
                    <div className="bg-background/80 backdrop-blur-md rounded-xl p-4 border border-border/40 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                            <Calendar className="w-5 h-5 text-primary" />
                          </div>
                          <h2 className="text-xl font-bold text-foreground">
                            Past Events
                          </h2>
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        >
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-background/90 backdrop-blur-md rounded-xl p-5 border border-border/40 shadow-xl">
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          <span className="font-medium">
                            Historical Archives
                          </span>
                        </div>
                        <p className="text-foreground leading-relaxed text-base">
                          Explore our journey through groundbreaking DeFi
                          workshops, NFT exhibitions, smart contract hackathons,
                          and community governance sessions that shaped our DAO.
                        </p>
                        <motion.div
                          className="flex items-center text-primary font-semibold text-base"
                          whileHover={{ x: 4 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        >
                          <span>View Past Events</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Upcoming Events Card */}
              <motion.div
                custom={1}
                variants={cardVariants}
                className="group cursor-pointer"
                onClick={() => handleNavigation("/events/upcomming-events")}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-border/40 hover:border-secondary/30 transition-all duration-500 h-[500px] group">
                  {/* Background Image with Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: "url('/gallery/image1.jpg')",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/20"></div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        boxShadow: "0 0 60px hsl(var(--secondary) / 0.25)",
                      }}
                    />
                  </div>

                  {/* Header Section */}
                  <div className="absolute top-4 left-4 right-4 z-20">
                    <div className="bg-background/80 backdrop-blur-md rounded-xl p-4 border border-border/40 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mr-3">
                            <Sparkles className="w-5 h-5 text-secondary" />
                          </div>
                          <h2 className="text-xl font-bold text-foreground">
                            Upcoming Events
                          </h2>
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        >
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors duration-300" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-background/90 backdrop-blur-md rounded-xl p-5 border border-border/40 shadow-xl">
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2 text-secondary" />
                          <span className="font-medium">Next Generation</span>
                        </div>
                        <p className="text-foreground leading-relaxed text-base">
                          Join us for cutting-edge Web3 conferences, DAO
                          governance workshops, DeFi protocol launches, and
                          exclusive alpha testing sessions for the future of
                          finance.
                        </p>
                        <motion.div
                          className="flex items-center text-secondary font-semibold text-base"
                          whileHover={{ x: 4 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        >
                          <span>Discover Events</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Premium Bottom CTA */}
            <motion.div className="text-center" variants={ctaVariants}>
              <p className="text-lg text-muted-foreground mb-5 font-light">
                Building the decentralized future, one event at a time
              </p>
              <div className="flex items-center justify-center space-x-3">
                <motion.div
                  className="w-3 h-3 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-3 h-3 bg-secondary rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                />
                <motion.div
                  className="w-3 h-3 bg-accent rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
