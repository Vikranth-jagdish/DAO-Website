"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Mail } from "lucide-react";

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
    image: "/sponsors/openai.png",
    shortDescription: "Pioneering AI research and deployment",
    fullDescription:
      "OpenAI is an AI research and deployment company dedicated to ensuring artificial general intelligence benefits all of humanity. We're building safe and beneficial AGI while ensuring its benefits are widely distributed.",
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
    image: "/Sponsors/RELIANCE-LOGO.png",
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

const categoryColors: Record<string, string> = {
  "AI & Research": "bg-[oklch(0.488_0.243_264.376)]",
  Technology: "bg-[oklch(0.696_0.17_162.48)]",
  "Cloud Computing": "bg-[oklch(0.769_0.188_70.08)]",
  Blockchain: "bg-[oklch(0.627_0.265_303.9)]",
  Hardware: "bg-[oklch(0.645_0.246_16.439)]",
  Fintech: "bg-[oklch(0.541_0.281_293.009)]",
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const SponsorsPage: React.FC = () => {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(sponsors.map((s) => s.category))),
  ];

  const filteredSponsors =
    activeCategory === "All"
      ? sponsors
      : sponsors.filter((sponsor) => sponsor.category === activeCategory);

  return (
    <div className="min-h-screen bg-[oklch(0.141_0.005_285.823)]">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[oklch(0.985_0_0)] mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our{" "}
            <span className="text-[oklch(0.541_0.281_293.009)]">Sponsors</span>
          </motion.h1>
          <motion.p
            className="text-xl text-[oklch(0.705_0.015_286.067)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Visionary partners powering the future of decentralized technology
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[oklch(0.541_0.281_293.009)] text-[oklch(0.969_0.016_293.756)] shadow-md"
                    : "bg-[oklch(0.21_0.006_285.885)] text-[oklch(0.985_0_0)] hover:bg-[oklch(0.274_0.006_286.033)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Sponsors Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index % 3}
                whileHover="hover"
                onClick={() => setSelectedSponsor(sponsor)}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 ${
                    categoryColors[sponsor.category]
                  } opacity-90 group-hover:opacity-100 transition-opacity`}
                />

                {/* Sponsor Content */}
                <div className="relative h-full flex flex-col justify-between p-6 text-[oklch(0.985_0_0)]">
                  <div>
                    <div className="w-16 h-16 mb-4 bg-[oklch(1_0_0/20%)] rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl font-bold">
                        {sponsor.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
                    <p className="text-sm opacity-90">
                      {sponsor.shortDescription}
                    </p>
                  </div>

                  {/* Category Badge */}
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-[oklch(1_0_0/20%)] rounded-full backdrop-blur-sm">
                      {sponsor.category}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[oklch(0_0_0)] bg-opacity-0 group-hover:bg-opacity-20 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsor Modal */}
      <AnimatePresence>
        {selectedSponsor && (
          <>
            <motion.div
              className="fixed inset-0 bg-[oklch(0_0_0)] bg-opacity-50 z-40 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedSponsor(null)}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                className="bg-[oklch(0.21_0.006_285.885)] rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSponsor(null)}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[oklch(0.274_0.006_286.033)] hover:bg-[oklch(0.541_0.281_293.009)] transition-colors"
                >
                  <X className="w-5 h-5 text-[oklch(0.985_0_0)]" />
                </button>

                {/* Modal Content */}
                <div className="p-8 pt-16">
                  {/* Header with Gradient */}
                  <div
                    className={`${
                      categoryColors[selectedSponsor.category]
                    } rounded-2xl p-8 mb-8 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[oklch(1_0_0/10%)] backdrop-blur-sm" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                      <div className="w-24 h-24 bg-[oklch(0.985_0_0)] rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold text-[oklch(0.141_0.005_285.823)]">
                          {selectedSponsor.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-[oklch(0.985_0_0)] mb-2">
                          {selectedSponsor.name}
                        </h2>
                        <p className="text-[oklch(0.985_0_0/90%)]">
                          {selectedSponsor.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sponsor Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-[oklch(0.985_0_0)] mb-4">
                        About {selectedSponsor.name}
                      </h3>
                      <p className="text-[oklch(0.705_0.015_286.067)] leading-relaxed">
                        {selectedSponsor.fullDescription}
                      </p>
                    </div>

                    <div className="space-y-6">
                      {/* Category */}
                      <div>
                        <h4 className="text-sm font-medium text-[oklch(0.705_0.015_286.067)] mb-1">
                          Category
                        </h4>
                        <p className="text-[oklch(0.985_0_0)] font-medium">
                          {selectedSponsor.category}
                        </p>
                      </div>

                      {/* Website */}
                      <div>
                        <h4 className="text-sm font-medium text-[oklch(0.705_0.015_286.067)] mb-1">
                          Website
                        </h4>
                        <a
                          href={selectedSponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[oklch(0.541_0.281_293.009)] hover:text-[oklch(0.488_0.243_264.376)] font-medium"
                        >
                          {new URL(selectedSponsor.website).hostname}
                          <ExternalLink className="w-4 h-4 ml-1.5" />
                        </a>
                      </div>

                      {/* Contact */}
                      <div>
                        <h4 className="text-sm font-medium text-[oklch(0.705_0.015_286.067)] mb-1">
                          Contact
                        </h4>
                        <a
                          href={`mailto:${selectedSponsor.contact}`}
                          className="inline-flex items-center text-[oklch(0.985_0_0)] hover:text-[oklch(0.541_0.281_293.009)] font-medium"
                        >
                          {selectedSponsor.contact}
                          <Mail className="w-4 h-4 ml-1.5" />
                        </a>
                      </div>

                      {/* CTA Buttons */}
                      <div className="pt-4 space-y-3">
                        <a
                          href={selectedSponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-3 bg-[oklch(0.541_0.281_293.009)] hover:bg-[oklch(0.488_0.243_264.376)] text-[oklch(0.985_0_0)] font-medium rounded-lg text-center transition-colors"
                        >
                          Visit Website
                        </a>
                        <a
                          href={`mailto:${selectedSponsor.contact}`}
                          className="block w-full px-4 py-3 border border-[oklch(0.274_0.006_286.033)] hover:border-[oklch(0.541_0.281_293.009)] text-[oklch(0.985_0_0)] font-medium rounded-lg text-center transition-colors"
                        >
                          Contact Sponsor
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SponsorsPage;
