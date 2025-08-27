import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

// Define events clearly
const events = [
  {
    name: "Blocktalk",
    date: "September 1, 2025",
    description:
      "Get ready for an insightful session on blockchain technology!",
    image: "/timeline/blocktalk.png",
  },
  {
    name: "Neural DAO",
    date: "September 18-19, 2025",
    description:
      "Explore the intersection of AI and Decentralized Autonomous Organizations.",
    image: "/timeline/neuraldao.png",
  },
  {
    name: "Stock Market",
    date: "September 24-26, 2025",
    description: "A live story based high stakes crypto trading event.",
    image: "/events/upcomming2.jpeg",
  },
  {
    name: "Crypto Trading Seminar",
    date: "October 21, 2025",
    description: "Deep dive into the world of crypto trading with our seminar!",
    image: "/events/upcomming1.jpg",
  },
  {
    name: "Defy'26",
    date: "January 8-10, 2026",
    description: "Mark your calendars for our flagship event of the new year!",
    image: "/events/defy26.jpg",
  },
  {
    name: "Solidity 101",
    date: "February 2, 2026",
    description: "Kickstart your Web3 journey with Solidity fundamentals!",
    image: "/events/upcomming3.jpeg",
  },
];

// Utility: Convert date string → comparable Date object (takes first day for ranges)
const parseDate = (dateStr: string) => {
  const firstDate = dateStr.split(",")[0].split("-")[0].trim();
  return new Date(`${firstDate}, ${dateStr.split(",").slice(-1)[0]}`);
};

export function TimelineDemo() {
  // Sort events by date
  const sortedEvents = [...events].sort(
    (a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime()
  );

  // Map into Timeline format
  const data = sortedEvents.map((event) => ({
    title: event.name,
    content: (
      <div className="bg-transparent p-6">
        <p className="text-xs md:text-sm text-primary font-semibold mb-3 uppercase tracking-wide">
          {event.date}
        </p>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
          {event.description}
        </p>
        {/* Seamless image blending with background */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="relative">
            <Image
              alt={`${event.name} image`}
              src={event.image}
              width={800}
              height={600}
              className="w-full h-auto object-contain transition-transform duration-300"
              style={{
                aspectRatio: "auto",
                maxHeight: "400px",
              }}
              priority
            />
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen w-full bg-background text-foreground py-8 px-4 md:px-12">
      <div className="w-full mx-auto">
        <Timeline data={data} />
      </div>
    </div>
  );
}
