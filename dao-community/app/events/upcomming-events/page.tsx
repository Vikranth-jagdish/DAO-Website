"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowLeft } from "lucide-react";
import { upcomingEvents, Event } from "@/constans/upcommingevents";

export default function UpcomingEventsPage() {
  const router = useRouter();
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

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };
  const cardItemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95, filter: "blur(4px)" },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 15, stiffness: 120, mass: 0.5 },
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };
  const dialogOverlayVariants = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: {
      opacity: 1,
      backdropFilter: "blur(8px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };
  const dialogContentVariants = {
    hidden: {
      scale: 0.95,
      opacity: 0,
      y: 40,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        delay: 0.1,
        duration: 0.7,
      },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      y: 30,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };
  const textContentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };
  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 mt-15 sm:mt-20">
      {/* --- Back Button --- */}
      <motion.button
        onClick={() => router.back()}
        className="hidden sm:flex absolute top-5 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-50 items-center justify-center p-2 bg-background/60 backdrop-blur-sm rounded-full text-foreground hover:bg-muted/80 transition-all duration-300 shadow-md"
        aria-label="Go back to the previous page"
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
          delay: 0.5,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={20} />
      </motion.button>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 100,
            duration: 0.8,
            delay: 0.2,
          }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Upcoming <span className="text-primary">Events</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Get ready for our next wave of exciting gatherings and workshops.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={cardItemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer group"
              onClick={() => handleCardClick(event)}
              layoutId={`card-container-${event.id}`}
            >
              <div className="h-full bg-muted/90 border border-border/30 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/50 relative">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute -inset-2 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-transparent rounded-2xl" />
                  </div>
                </div>

                <div className="relative aspect-video w-full bg-muted/10">
                  <Image
                    src={event.images[0]}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {event.shortDescription}
                  </p>
                  <div className="text-sm text-primary font-medium flex items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {event.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="fixed inset-0 z-[1000] flex items-start justify-center p-4 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="fixed inset-0 bg-background/80"
                variants={dialogOverlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={closeDialog}
              />

              <motion.div
                ref={dialogRef}
                variants={dialogContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layoutId={`card-container-${selectedEvent.id}`}
                className="relative z-50 bg-muted/60 rounded-2xl border border-border/50 w-full max-w-6xl mx-auto overflow-hidden flex flex-col lg:flex-row my-auto"
              >
                <div className="lg:w-1/2 bg-muted/10 relative flex-shrink-0 flex items-center justify-center overflow-hidden h-[50vh] lg:h-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={selectedEvent.images[0]}
                      alt={selectedEvent.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </div>

                <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col">
                  <motion.div
                    variants={textContentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h2
                      variants={textItemVariants}
                      className="text-3xl lg:text-4xl font-bold text-foreground mb-2"
                    >
                      {selectedEvent.title}
                    </motion.h2>
                    <motion.div
                      variants={textItemVariants}
                      className="flex items-center gap-3 text-muted-foreground mb-6"
                    >
                      <span>{selectedEvent.date}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                    </motion.div>
                    <motion.p
                      variants={textItemVariants}
                      className="text-foreground/90 leading-relaxed whitespace-pre-wrap mb-4"
                    >
                      {selectedEvent.fullDescription}
                    </motion.p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.6,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                    className="mt-8 pt-6 border-t border-border/20 flex-shrink-0"
                  >
                    <button
                      onClick={closeDialog}
                      className="w-full lg:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
                      aria-label="Close dialog"
                    >
                      Close Preview
                    </button>
                  </motion.div>
                </div>

                <motion.button
                  onClick={closeDialog}
                  className="absolute top-4 right-4 bg-background/80 text-muted-foreground hover:text-foreground transition-all p-2 rounded-full shadow-md hover:shadow-lg z-20"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.4 },
                  }}
                >
                  <X size={24} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
