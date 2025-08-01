"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define event type (re-using the same type as PastEventsPage)
type Event = {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  images: string[]; // Array to support carousel, even if only one image initially
};

// Upcoming events data
const upcomingEvents: Event[] = [
  {
    id: "upc-1",
    title: "Blocktalk",
    date: "September 1st, 2025", // Current year is 2025
    shortDescription:
      "Dive deep into the fundamentals of blockchain technology.",
    fullDescription:
      "Join us for Blocktalk, an insightful session designed to demystify blockchain. Whether you're a beginner or have some prior knowledge, this workshop will cover core concepts, real-world applications, and the future trends in decentralized technologies. Get ready for interactive discussions and practical insights!",
    images: [
      "/timeline/blocktalk.png",
      "/timeline/blocktalk.png",
      "/timeline/blocktalk.png",
    ], // Placeholder, ideally unique images
  },
  {
    id: "upc-2",
    title: "Voyage",
    date: "September 2nd, 3rd, 4th, 2025",
    shortDescription:
      "An immersive multi-day event exploring various tech domains.",
    fullDescription:
      "Voyage is our flagship multi-day event, featuring a series of workshops, talks, and challenges across diverse technical domains. From AI to IoT, cybersecurity to cloud computing, prepare for an intensive learning experience designed to expand your skills and horizons. Network with experts and peers, and discover new passions.",
    images: [
      "/timeline/voyage.png",
      "/timeline/voyage.png",
      "/timeline/voyage.png",
    ], // Placeholder
  },
  {
    id: "upc-3",
    title: "Neural DAO",
    date: "September 18th, 19th, 2025",
    shortDescription:
      "Explore the intersection of AI and Decentralized Autonomous Organizations.",
    fullDescription:
      "Neural DAO will delve into the exciting synergy between Artificial Intelligence and Decentralized Autonomous Organizations. Learn how AI can enhance DAO governance, efficiency, and decision-making, and how DAOs can foster collaborative AI development. This event will feature expert talks, case studies, and brainstorming sessions.",
    images: [
      "/timeline/neuraldao.png",
      "/timeline/neuraldao.png",
      "/timeline/neuraldao.png",
    ], // Placeholder
  },
  {
    id: "upc-4",
    title: "Crypto Trading Seminar",
    date: "October 21st, 2025",
    shortDescription:
      "Master the basics of cryptocurrency trading and market analysis.",
    fullDescription:
      "This seminar provides a comprehensive introduction to cryptocurrency trading. Learn about market dynamics, technical analysis, risk management strategies, and common trading platforms. Ideal for those looking to enter the crypto space with a solid understanding of its financial aspects. (Image is a general placeholder for now.)",
    images: [
      "https://assets.aceternity.com/pro/hero-sections.png",
      "https://assets.aceternity.com/pro/hero-sections.png",
      "https://assets.aceternity.com/pro/hero-sections.png",
    ], // Using a generic placeholder for now
  },
  {
    id: "upc-5",
    title: "Defy'26",
    date: "January 8th, 9th, 10th, 2026", // Next year
    shortDescription: "Our annual hackathon and innovation challenge.",
    fullDescription:
      "Defy'26 is our signature annual hackathon, bringing together the brightest minds to build innovative solutions over three intense days. Collaborate, create, and compete for exciting prizes while tackling real-world problems. This event is a launchpad for groundbreaking projects and a hub for networking.",
    images: [
      "https://assets.aceternity.com/features-section.png",
      "https://assets.aceternity.com/features-section.png",
      "https://assets.aceternity.com/features-section.png",
    ], // Using a generic placeholder for now
  },
  {
    id: "upc-6",
    title: "Solidity 101",
    date: "February 2nd, 2026", // Next year
    shortDescription: "Kickstart your Web3 journey with Solidity fundamentals.",
    fullDescription:
      "Solidity 101 is an introductory workshop to smart contract development on the Ethereum blockchain. Learn the basics of Solidity programming, contract deployment, and interaction. This hands-on session is perfect for aspiring blockchain developers looking to build decentralized applications.",
    images: [
      "https://assets.aceternity.com/cards.png",
      "https://assets.aceternity.com/cards.png",
      "https://assets.aceternity.com/cards.png",
    ], // Using a generic placeholder for now
  },
];

export default function UpcomingEventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null); // Ref for closing dialog on outside click

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
    // Use a small timeout to allow exit animation to complete before clearing content
    setTimeout(() => setSelectedEvent(null), 300);
  }, []);

  // Close dialog on escape key press or outside click
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        closeDialog();
      }
    };

    if (isDialogOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDialogOpen, closeDialog]);

  // Animation variants (re-using the same variants as PastEventsPage)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardItem = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const dialogOverlay = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const customDialogContent = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get ready for an exciting lineup of our upcoming technical events!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={cardItem}
              whileHover="hover"
              className="cursor-pointer"
              onClick={() => handleCardClick(event)}
            >
              <div className="h-full bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                <div className="relative aspect-video w-full">
                  <Image
                    src={event.images[0]} // Display the first image as the card preview
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {event.shortDescription}
                  </p>
                  <div className="text-sm text-primary font-medium">
                    {event.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {isDialogOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                variants={dialogOverlay}
                initial="hidden"
                animate="visible"
                exit="exit"
              />

              <motion.div
                ref={dialogRef} // Assign ref to the dialog content div
                variants={customDialogContent}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative z-50 bg-card rounded-2xl shadow-2xl w-full max-w-6xl mx-auto overflow-hidden
                         flex flex-col lg:flex-row h-full max-h-[90vh]"
              >
                {selectedEvent && (
                  <>
                    {/* Single Image Section */}
                    <div className="lg:w-1/2 bg-muted/10 relative flex-shrink-0">
                      <div className="relative h-full w-full min-h-[300px] lg:min-h-[450px]">
                        <Image
                          src={selectedEvent.images[0]} // Always display the first image
                          alt={selectedEvent.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                          {selectedEvent.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                          {selectedEvent.date}
                        </p>
                        <div className="max-h-[30vh] lg:max-h-[unset] overflow-y-auto pr-2 custom-scrollbar">
                          <p className="text-foreground leading-relaxed">
                            {selectedEvent.fullDescription}
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-border/20">
                        <button
                          onClick={closeDialog}
                          className="w-full lg:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          aria-label="Close dialog"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
