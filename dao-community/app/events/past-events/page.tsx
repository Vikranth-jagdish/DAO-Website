"use client";

import { useState, useRef, useEffect, useCallback } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { pastEvents, Event } from "@/constans/pastevents";

export default function PastEventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeDialog = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Close dialog on escape key press or outside click
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    if (selectedEvent) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedEvent, closeDialog]);

  // --- PREMIUM ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const cardItemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94], // Premium cubic-bezier
      },
    },
  };

  const dialogOverlayVariants = {
    hidden: {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      backdropFilter: "blur(12px)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const dialogContentVariants = {
    hidden: {
      scale: 0.94,
      opacity: 0,
      y: 30,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      },
    },
    exit: {
      scale: 0.94,
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textContentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const textItemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-background py-26 px-4 sm:px-6 lg:px-8">
      {/* Premium Back Button */}

      <div className="max-w-7xl mx-auto">
        {/* Premium Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1,
          }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Past <span className="text-primary">Events</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Relive the memorable moments from our previous gatherings and
            community milestones
          </motion.p>
        </motion.div>

        {/* Premium Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {pastEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={cardItemVariants}
              className="cursor-pointer group"
              onClick={() => handleCardClick(event)}
              layoutId={`card-container-${event.id}`}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
            >
              <div className="h-full bg-background border border-border rounded-2xl shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 relative">
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      boxShadow: "0 0 40px hsl(var(--primary) / 0.15)",
                    }}
                  />
                </div>

                {/* Image Section */}
                <div className="relative aspect-video w-full bg-muted/20 overflow-hidden">
                  <Image
                    src={event.images[0]}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {event.shortDescription}
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <div className="flex items-center mr-2">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                    </div>
                    {event.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Modal Dialog */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Premium Backdrop */}
              <motion.div
                className="fixed inset-0 bg-background/90"
                variants={dialogOverlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={closeDialog}
              />

              {/* Premium Dialog Content */}
              <motion.div
                ref={dialogRef}
                variants={dialogContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layoutId={`card-container-${selectedEvent.id}`}
                className="relative z-50 bg-background rounded-3xl border border-border shadow-2xl w-full max-w-6xl mx-auto overflow-hidden flex flex-col lg:flex-row"
              >
                {/* Image Section */}
                <div className="lg:w-1/2 bg-muted/20 relative flex-shrink-0 flex items-center justify-center overflow-hidden h-[50vh] lg:h-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.2,
                    }}
                    className="w-full h-full"
                  >
                    <Image
                      src={selectedEvent.images[0]}
                      alt={selectedEvent.title}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
                  <motion.div
                    variants={textContentVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1"
                  >
                    <motion.h2
                      variants={textItemVariants}
                      className="text-3xl lg:text-4xl font-bold text-foreground mb-3 leading-tight"
                    >
                      {selectedEvent.title}
                    </motion.h2>
                    <motion.div
                      variants={textItemVariants}
                      className="flex items-center gap-3 text-muted-foreground mb-8"
                    >
                      <span className="text-base">{selectedEvent.date}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                      <span className="text-primary text-sm font-medium">
                        Past Event
                      </span>
                    </motion.div>
                    <motion.p
                      variants={textItemVariants}
                      className="text-foreground/90 leading-relaxed whitespace-pre-wrap text-base lg:text-lg"
                    >
                      {selectedEvent.fullDescription}
                    </motion.p>
                  </motion.div>

                  {/* Premium Action Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.6,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    }}
                    className="mt-8 pt-8 border-t border-border/30 flex-shrink-0"
                  >
                    <button
                      onClick={closeDialog}
                      className="w-full lg:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background font-medium"
                      aria-label="Close dialog"
                    >
                      Close Preview
                    </button>
                  </motion.div>
                </div>

                {/* Premium Close Button */}
                <motion.button
                  onClick={closeDialog}
                  className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-all duration-300 p-3 rounded-full shadow-lg hover:shadow-xl border border-border/40 z-20"
                  whileHover={{
                    scale: 1.05,
                    rotate: 90,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 },
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.4,
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                >
                  <X size={20} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
