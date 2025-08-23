"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { upcomingEvents, type Event } from "@/constans/upcommingevents";

export default function UpcomingEventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // --- Custom Carousel State ---
  const [[page, direction], setPage] = useState([0, 0]);

  const handleCardClick = (event: Event) => {
    setPage([0, 0]); // Reset carousel to first slide on open
    setSelectedEvent(event);
  };

  const closeDialog = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // --- Close dialog on escape key press ---
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
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const dialogOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const dialogContentVariants = {
    hidden: { scale: 0.94, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 },
    },
    exit: {
      scale: 0.94,
      opacity: 0,
      y: 20,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  // --- SLIDES DATA (Specific to Neural DAO event) ---
  const neuralDaoSlides: { title: string; content: React.ReactNode }[] = [
    {
      title: "Event Overview",
      content: (
        <div className="space-y-3">
          <p>
            NeuralDAO is a 24-hour, high-intensity hackathon focused on the
            intersection of <strong>Artificial Intelligence</strong> and{" "}
            <strong>Blockchain</strong>. Hosted by The DAO Community, it is
            designed to bring together student developers, innovators, and tech
            enthusiasts to create cutting-edge solutions.
          </p>
          <p>
            The event aims to foster innovation and showcase the next generation
            of tech talent.
          </p>
        </div>
      ),
    },
    {
      title: "Key Details",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
          <li>
            <strong>Dates:</strong> September 18th - 19th, 2025
          </li>
          <li>
            <strong>Venue:</strong> VIT, Chennai
          </li>
          <li>
            <strong>Organizer:</strong> The DAO Community, a prominent Web3
            society in Chennai
          </li>
        </ul>
      ),
    },
    {
      title: "Hackathon Structure & Tracks",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">24-Hour Format:</h4>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-base">
              <li>
                <strong>24-Hour Build Sprint:</strong> Participants form teams
                to conceptualize, develop, and prototype ideas in a fast-paced
                environment
              </li>
              <li>
                <strong>Mentorship & Resources:</strong> Access to industry
                mentors and technical support to refine projects
              </li>
              <li>
                <strong>Demo & Judging:</strong> Expert panel including product
                leaders and AI/blockchain pioneers will evaluate projects
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Project Tracks:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
              <li>Artificial Intelligence</li>
              <li>Blockchain</li>
              <li>Open Innovation</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Sponsorship Tiers",
      content: (
        <div className="space-y-3">
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>
              <strong>Platinum Tier: ₹25,000+</strong>
              <br />
              Includes premium brand exposure, the opportunity to have branded
              event tracks, and speaker slots
            </li>
            <li>
              <strong>Gold Tier: ₹17,000+</strong>
              <br />
              Features prime logo placement, direct connection with talent, and
              product integration opportunities
            </li>
            <li>
              <strong>Silver Tier: ₹8,000+</strong>
              <br />
              Offers brand exposure and inclusion in the event&apos;s marketing
              campaigns
            </li>
          </ul>
          <p className="text-primary font-medium">
            Additional benefits can be negotiated.
          </p>
        </div>
      ),
    },
    {
      title: "Contact Information",
      content: (
        <div className="space-y-3">
          <p>For partnership inquiries, you can reach out to the organizers:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>
              <strong>Sanjana PS:</strong>{" "}
              <a
                href="tel:+919840371577"
                className="text-primary hover:underline"
              >
                +91 98403 71577
              </a>
            </li>
            <li>
              <strong>Surya:</strong>{" "}
              <a
                href="tel:+917010147377"
                className="text-primary hover:underline"
              >
                +91 70101 47377
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:chennai.daocommunity@vit.ac.in"
                className="text-primary hover:underline"
              >
                chennai.daocommunity@vit.ac.in
              </a>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  // --- Custom Carousel Logic ---
  const slideIndex = wrap(0, neuralDaoSlides.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const carouselVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
  };

  return (
    <div className="relative min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Upcoming <span className="text-secondary">Events</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get ready for our next wave of exciting gatherings, workshops, and
            community milestones.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={cardItemVariants}
              className="cursor-pointer group"
              onClick={() => handleCardClick(event)}
              layoutId={`card-container-${event.id}`}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            >
              <div className="h-full bg-background border border-border rounded-2xl shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 relative">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      boxShadow: "0 0 40px hsl(var(--primary) / 0.15)",
                    }}
                  />
                </div>
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {event.shortDescription}
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
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
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="fixed inset-0 bg-background/90 backdrop-blur-md"
                variants={dialogOverlayVariants}
                onClick={closeDialog}
              />

              <motion.div
                variants={dialogContentVariants}
                layoutId={`card-container-${selectedEvent.id}`}
                className="relative z-50 bg-background rounded-2xl md:rounded-3xl border border-border shadow-2xl w-full max-w-5xl mx-auto h-[85vh] md:h-[80vh] flex flex-col lg:flex-row overflow-hidden"
              >
                {/* Image Section */}
                <div className="lg:w-1/2 bg-muted/20 relative flex-shrink-0 flex items-center justify-center overflow-hidden h-56 xs:h-64 sm:h-72 md:h-[50vh] lg:h-auto">
                  <Image
                    src={selectedEvent.images[0]}
                    alt={selectedEvent.title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 flex flex-col h-full p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2 leading-tight flex-shrink-0">
                    {selectedEvent.title}
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4 flex-shrink-0">
                    <span className="text-sm">{selectedEvent.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                    <span className="text-primary text-xs font-medium">
                      Upcoming Event
                    </span>
                  </div>

                  {/* Carousel or Description */}
                  <div className="flex-1 min-h-0 relative">
                    {selectedEvent.title === "Neural DAO" ? (
                      // --- Custom Carousel Implementation ---
                      <div className="w-full h-full flex flex-col">
                        <div className="flex-1 relative overflow-hidden">
                          <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                              key={page}
                              custom={direction}
                              variants={carouselVariants}
                              initial="enter"
                              animate="center"
                              exit="exit"
                              transition={{
                                x: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                                },
                                opacity: { duration: 0.2 },
                              }}
                              drag="x"
                              dragConstraints={{ left: 0, right: 0 }}
                              dragElastic={1}
                              onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                  paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                  paginate(-1);
                                }
                              }}
                              className="absolute inset-0 w-full h-full"
                            >
                              <div className="h-full w-full rounded-xl border border-border/50 bg-muted/10 p-4 flex flex-col shadow-sm">
                                <h3 className="text-sm md:text-base font-semibold mb-2 text-foreground flex-shrink-0">
                                  {neuralDaoSlides[slideIndex].title}
                                </h3>
                                <div className="text-foreground/90 leading-relaxed space-y-2 text-xs md:text-sm flex-1 overflow-y-auto pr-2">
                                  {neuralDaoSlides[slideIndex].content}
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                        {/* Carousel Controls */}
                        <div className="flex items-center justify-center gap-4 mt-4 flex-shrink-0">
                          <button
                            onClick={() => paginate(-1)}
                            className="p-1.5 rounded-full bg-background/80 border border-border text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <div className="flex items-center justify-center gap-2">
                            {neuralDaoSlides.map((_, i) => (
                              <button
                                key={i}
                                onClick={() =>
                                  setPage([i, i > slideIndex ? 1 : -1])
                                }
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  slideIndex === i
                                    ? "w-4 bg-primary"
                                    : "bg-muted-foreground/50"
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                              />
                            ))}
                          </div>
                          <button
                            onClick={() => paginate(1)}
                            className="p-1.5 rounded-full bg-background/80 border border-border text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap text-sm lg:text-base h-full overflow-y-auto">
                        {selectedEvent.fullDescription}
                      </p>
                    )}
                  </div>
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={closeDialog}
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-all duration-300 p-2 rounded-full shadow-lg hover:shadow-xl border border-border/40 z-30"
                  whileHover={{
                    scale: 1.05,
                    rotate: 90,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                >
                  <X size={16} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
