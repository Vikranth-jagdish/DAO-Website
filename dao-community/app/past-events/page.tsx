"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define event type
type Event = {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
};

// Enhanced dummy events data with preview images
const pastEvents: Event[] = [
  {
    id: "1",
    title: "Annual Tech Conference 2023",
    date: "October 15, 2023",
    shortDescription:
      "Our biggest gathering of tech enthusiasts and professionals.",
    fullDescription:
      "The Annual Tech Conference 2023 brought together over 1,000 attendees from across the industry. We featured keynote speakers from leading tech companies, hands-on workshops, and networking opportunities. Participants engaged in discussions about the future of technology and gained insights into emerging trends.",
    images: ["/daologoo.png", "/tech-conf-2.jpg", "/tech-conf-3.jpg"],
  },
  {
    id: "2",
    title: "Developer Workshop Series",
    date: "August 5, 2023",
    shortDescription: "Hands-on workshops for modern web development.",
    fullDescription:
      "This three-day workshop series focused on practical skills for modern web development. Participants learned about React best practices, state management, and performance optimization. Each day concluded with a collaborative coding session where attendees could apply their new skills.",
    images: ["/daologoo.png", "/workshop-2.jpg", "/workshop-3.jpg"],
  },
  {
    id: "3",
    title: "Community Hackathon",
    date: "June 20, 2023",
    shortDescription: "24-hour coding competition with exciting prizes.",
    fullDescription:
      "Our annual hackathon challenged participants to build innovative solutions to real-world problems. With over 50 teams competing, the energy was electric. Winners were awarded prizes in categories like Most Innovative, Best Design, and Most Impactful.",
    images: ["/daologoo.png", "/hackathon-2.jpg", "/hackathon-3.jpg"],
  },
  {
    id: "4",
    title: "Annual Tech Conference 2023",
    date: "October 15, 2023",
    shortDescription:
      "Our biggest gathering of tech enthusiasts and professionals.",
    fullDescription:
      "The Annual Tech Conference 2023 brought together over 1,000 attendees from across the industry. We featured keynote speakers from leading tech companies, hands-on workshops, and networking opportunities. Participants engaged in discussions about the future of technology and gained insights into emerging trends.",
    images: ["/daologoo.png", "/tech-conf-2.jpg", "/tech-conf-3.jpg"],
  },
  {
    id: "5",
    title: "Annual Tech Conference 2023",
    date: "October 15, 2023",
    shortDescription:
      "Our biggest gathering of tech enthusiasts and professionals.",
    fullDescription:
      "The Annual Tech Conference 2023 brought together over 1,000 attendees from across the industry. We featured keynote speakers from leading tech companies, hands-on workshops, and networking opportunities. Participants engaged in discussions about the future of technology and gained insights into emerging trends.",
    images: ["/daologoo.png", "/tech-conf-2.jpg", "/tech-conf-3.jpg"],
  },
  {
    id: "6",
    title: "Annual Tech Conference 2023",
    date: "October 15, 2023",
    shortDescription:
      "Our biggest gathering of tech enthusiasts and professionals.",
    fullDescription:
      "The Annual Tech Conference 2023 brought together over 1,000 attendees from across the industry. We featured keynote speakers from leading tech companies, hands-on workshops, and networking opportunities. Participants engaged in discussions about the future of technology and gained insights into emerging trends.",
    images: ["/daologoo.png", "/tech-conf-2.jpg", "/tech-conf-3.jpg"],
  },
];

export default function PastEventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for custom carousel
  const dialogRef = useRef<HTMLDivElement>(null); // Ref for closing dialog on outside click

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0); // Reset image index when a new event is selected
    setIsDialogOpen(true);
  };

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedEvent(null), 300); // Wait for animation to complete
  }, []); // Memoize closeDialog to prevent unnecessary re-renders

  // Custom carousel navigation
  const goToNextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedEvent.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const goToPrevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedEvent.images.length - 1 : prevIndex - 1
      );
    }
  };

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

  // Animation variants
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

  // const cardHover = {
  //   hover: {
  //     y: -8,
  //     scale: 1.03,
  //     transition: {
  //       duration: 0.3,
  //       ease: "easeOut",
  //     },
  //   },
  // };

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
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 mt-18">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Past Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Relive the memorable moments from our previous gatherings
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pastEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={cardItem}
              whileHover={{ scale: 1.05}} // Apply the hover variant here
              className="cursor-pointer"
              onClick={() => handleCardClick(event)}
            >
              <div className="h-full bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                <div className="relative aspect-video w-full">
                  <Image
                    src={event.images[0]}
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
                         flex flex-col lg:flex-row h-full max-h-[90vh]" // Adjusted max-h for more vertical space if needed
              >
                {selectedEvent && (
                  <>
                    {/* Image Carousel Section - Custom Implementation */}
                    <div className="lg:w-1/2 bg-muted/10 relative flex-shrink-0">
                      <div className="relative h-full w-full min-h-[300px] lg:min-h-[450px]">
                        {" "}
                        {/* Increased min-height for visuals */}
                        <Image
                          src={selectedEvent.images[currentImageIndex]}
                          alt={`Event image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Navigation Buttons */}
                        {selectedEvent.images.length > 1 && (
                          <>
                            <button
                              onClick={goToPrevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/60 p-2 rounded-full text-foreground hover:bg-background/80 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                              aria-label="Previous image"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 19l-7-7 7-7"
                                />
                              </svg>
                            </button>
                            <button
                              onClick={goToNextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/60 p-2 rounded-full text-foreground hover:bg-background/80 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                              aria-label="Next image"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </>
                        )}
                      </div>
                      {/* Dots Indicator */}
                      {selectedEvent.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                          {selectedEvent.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2.5 h-2.5 rounded-full ${
                                index === currentImageIndex
                                  ? "bg-primary"
                                  : "bg-background/60 hover:bg-background/80"
                              } transition-colors`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                      {" "}
                      {/* Added justify-between for content alignment */}
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                          {selectedEvent.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                          {selectedEvent.date}
                        </p>
                        <div className="max-h-[30vh] lg:max-h-[unset] overflow-y-auto pr-2 custom-scrollbar">
                          {" "}
                          {/* Added custom-scrollbar for styling */}
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
