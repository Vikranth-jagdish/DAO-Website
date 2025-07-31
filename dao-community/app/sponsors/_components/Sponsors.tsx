"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";

interface Sponsor {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  website: string;
  contact: string;
}

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "OpenAI",
    image: "/Sponsors/RELIANCE-LOGO.png",
    shortDescription: "Pioneering AI research and deployment",
    fullDescription:
      "OpenAI is an AI research and deployment company dedicated to ensuring artificial general intelligence benefits all of humanity. We're building safe and beneficial AGI while ensuring its benefits be widely distributed.",
    category: "AI & Research",
    website: "https://openai.com",
    contact: "partnerships@openai.com",
  },
  {
    id: 2,
    name: "Microsoft",
    image: "/sponsors/microsoft.png",
    shortDescription: "Empowering every person and organization",
    fullDescription:
      "Microsoft Corporation is a global technology leader producing software, consumer electronics, personal computers, and services. We're committed to empowering every person and organization to achieve more through technology.",
    category: "Technology",
    website: "https://microsoft.com",
    contact: "sponsors@microsoft.com",
  },
  {
    id: 3,
    name: "Google",
    image: "/sponsors/google.png",
    shortDescription: "Organizing the world's information",
    fullDescription:
      "Google specializes in internet-related services and products, including search, cloud computing, and advertising technologies. Our mission is to organize the world's information and make it universally accessible.",
    category: "Technology",
    website: "https://google.com",
    contact: "partners@google.com",
  },
  {
    id: 4,
    name: "Amazon Web Services",
    image: "/sponsors/aws.png",
    shortDescription: "World's most comprehensive cloud platform",
    fullDescription:
      "AWS offers over 200 fully featured services from data centers globally. Millions of customers trust AWS to power their infrastructure, become more agile, and lower costs.",
    category: "Cloud Computing",
    website: "https://aws.amazon.com",
    contact: "aws-partners@amazon.com",
  },
  {
    id: 5,
    name: "Ethereum Foundation",
    image: "/sponsors/ethereum.png",
    shortDescription: "Advancing Ethereum and decentralized technologies",
    fullDescription:
      "The Ethereum Foundation supports Ethereum and related technologies through funding, research, and development. We foster an open ecosystem for decentralized applications and smart contracts.",
    category: "Blockchain",
    website: "https://ethereum.org",
    contact: "foundation@ethereum.org",
  },
  {
    id: 6,
    name: "Coinbase",
    image: "/sponsors/coinbase.png",
    shortDescription: "Building the cryptoeconomy",
    fullDescription:
      "Coinbase is building the cryptoeconomy - a more fair, accessible, efficient, and transparent financial system enabled by crypto. We provide an easy, secure platform to buy, sell, and store cryptocurrency.",
    category: "Blockchain",
    website: "https://coinbase.com",
    contact: "institutional@coinbase.com",
  },
  {
    id: 7,
    name: "NVIDIA",
    image: "/sponsors/nvidia.png",
    shortDescription: "Powering the AI revolution",
    fullDescription:
      "NVIDIA is the pioneer of GPU computing, powering modern AI, data science, and creative workflows. Our platforms are reshaping industries from gaming to healthcare to autonomous vehicles.",
    category: "Hardware",
    website: "https://nvidia.com",
    contact: "developer-relations@nvidia.com",
  },
  {
    id: 8,
    name: "Stripe",
    image: "/sponsors/stripe.png",
    shortDescription: "Economic infrastructure for the internet",
    fullDescription:
      "Stripe provides the technical, fraud prevention, and banking infrastructure needed to operate online payment systems. We help businesses of all sizes accept payments and manage their online economies.",
    category: "Fintech",
    website: "https://stripe.com",
    contact: "partners@stripe.com",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const SponsorsPage: React.FC = () => {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  const handleCardClick = (sponsor: Sponsor) => {
    setSelectedSponsor(sponsor);
  };

  const handleCloseModal = () => {
    setSelectedSponsor(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-primary">Sponsors</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Visionary organizations powering our mission and community.
          </motion.p>
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer
                           flex items-end justify-start p-6 transform-gpu border border-border/50"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index % 4}
                whileHover="hover"
                onClick={() => handleCardClick(sponsor)}
              >
                {/* Background Image with Blur and Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={sponsor.image}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-cover scale-110  group-hover:scale-105 transition-all duration-500 ease-out"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Subtle dark gradient overlay for text readability */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent
                                 group-hover:from-background/95 group-hover:via-background/70 transition-opacity duration-300"
                  />
                </div>

                {/* Sponsor Content (name and short description at bottom) */}
                <div className="relative z-10 flex flex-col items-start w-full">
                  <h3 className="text-3xl font-extrabold text-foreground leading-tight">
                    {sponsor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground opacity-90 transition-opacity duration-300 mt-1">
                    {sponsor.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Sponsor Modal */}
      <AnimatePresence>
        {selectedSponsor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Overlay */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={handleCloseModal} // Click overlay to close
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-card text-foreground rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-border"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                {/* Left Section: Image and Basic Info */}
                <div className="lg:w-2/5 p-8 flex flex-col items-center justify-center bg-muted/20 border-r border-border/50">
                  {selectedSponsor.image ? (
                    <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden bg-background flex items-center justify-center shadow-lg border-4 border-primary/50">
                      <Image
                        src={selectedSponsor.image}
                        alt={`${selectedSponsor.name} logo`}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-48 mb-6 rounded-full bg-background flex items-center justify-center shadow-lg border-4 border-primary/50">
                      <span className="text-6xl font-bold text-primary">
                        {selectedSponsor.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <h2 className="text-3xl font-bold text-foreground text-center mb-2">
                    {selectedSponsor.name}
                  </h2>
                  <p className="text-md text-muted-foreground text-center">
                    {selectedSponsor.category}
                  </p>
                </div>

                {/* Right Section: Full Description and Actions */}
                <div className="lg:w-3/5 p-8 flex flex-col">
                  <div className="mb-6 space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      About {selectedSponsor.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedSponsor.shortDescription}
                    </p>
                  </div>

                  <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                    <p className="text-foreground leading-relaxed text-base">
                      {selectedSponsor.fullDescription}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border space-y-4">
                    {/* Website */}
                    <div className="flex items-center text-foreground">
                      <ExternalLink className="w-5 h-5 mr-3 text-muted-foreground" />
                      <span className="font-semibold text-sm mr-2">
                        Website:
                      </span>
                      <a
                        href={selectedSponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {new URL(selectedSponsor.website).hostname}
                      </a>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center text-foreground">
                      <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                      <span className="font-semibold text-sm mr-2">
                        Contact:
                      </span>
                      <a
                        href={`mailto:${selectedSponsor.contact}`}
                        className="text-primary hover:underline"
                      >
                        {selectedSponsor.contact}
                      </a>
                    </div>

                    {/* CTA Buttons - Custom buttons, not Shadcn's */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <a
                        href={selectedSponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 text-lg text-center font-semibold rounded-md
                                   bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        Visit Website
                      </a>
                      <a
                        href={`mailto:${selectedSponsor.contact}`}
                        className="flex-1 py-3 px-4 text-lg text-center font-semibold rounded-md
                                   border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        Contact Sponsor
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SponsorsPage;
