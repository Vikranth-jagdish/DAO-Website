"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight, Sparkles, Zap } from "lucide-react";

const EventsSection: React.FC = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden mt-15">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <motion.div
        ref={containerRef}
        className="relative z-10 container mx-auto px-6 py-16 min-h-screen flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-muted-foreground/70 mr-3" />
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              DAO Events
            </h1>
            <Zap className="w-8 h-8 text-muted-foreground/70 ml-3" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the future of decentralized innovation through our
            community gatherings, workshops, and blockchain technology
            showcases.
          </p>
        </motion.div>

        {/* Events Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
          {/* Past Events Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            className="group cursor-pointer"
            onClick={() => handleNavigation("/events/past-events")}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-primary/20 border border-muted hover:border-primary/30 transition-all duration-500 h-[600px]">
              {/* Full Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/gallery/image2.jpg')",
                }} /* REPLACE WITH YOUR IMAGE */
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/70 to-transparent"></div>
              </div>

              {/* Card Header */}
              <div className="absolute top-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center justify-between bg-background/70 backdrop-blur-sm rounded-xl p-4 border border-muted">
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-muted-foreground mr-3" />
                    <h2 className="text-2xl font-bold text-foreground">
                      Past Events
                    </h2>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-muted shadow-lg shadow-secondary/10">
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">Historical Archives</span>
                    </div>
                    <p className="text-foreground leading-relaxed text-lg">
                      Explore our journey through groundbreaking DeFi workshops,
                      NFT exhibitions, smart contract hackathons, and community
                      governance sessions that shaped our DAO.
                    </p>
                    <div className="flex items-center text-primary font-semibold text-lg">
                      <span>View Past Events</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
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
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-primary/20 border border-muted hover:border-primary/30 transition-all duration-500 h-[600px]">
              {/* Full Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/gallery/image1.jpg')",
                }} /* REPLACE WITH YOUR IMAGE */
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/70 to-transparent"></div>
              </div>

              {/* Card Header */}
              <div className="absolute top-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center justify-between bg-background/70 backdrop-blur-sm rounded-xl p-4 border border-muted">
                  <div className="flex items-center">
                    <Sparkles className="w-6 h-6 text-muted-foreground mr-3" />
                    <h2 className="text-2xl font-bold text-foreground">
                      Upcoming Events
                    </h2>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-muted shadow-lg shadow-secondary/10">
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">Next Generation</span>
                    </div>
                    <p className="text-foreground leading-relaxed text-lg">
                      Join us for cutting-edge Web3 conferences, DAO governance
                      workshops, DeFi protocol launches, and exclusive alpha
                      testing sessions for the future of finance.
                    </p>
                    <div className="flex items-center text-primary font-semibold text-lg">
                      <span>Discover Events</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.4 },
            },
          }}
        >
          <p className="text-muted-foreground text-lg">
            Building the decentralized future, one event at a time
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-400"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventsSection;
