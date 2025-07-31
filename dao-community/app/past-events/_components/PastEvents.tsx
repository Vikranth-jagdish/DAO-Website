"use client";

import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Blockchain Fundamentals Workshop",
    image: "/blockchain.jpg",
    highlightsUrl: "#",
  },
  {
    title: "Smart Contract Bootcamp",
    image: "/smartcontract.jpg",
    highlightsUrl: "#",
  },
];

export default function PastEvents() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest mb-4">
          PAST EVENTS
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg md:text-xl mb-16">
          Celebrating our shared learning, innovation, and community building
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden group bg-muted"
            >
              {/* Background Image */}
              <Image
                src={event.image}
                alt={event.title}
                width={1200}
                height={600}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">
                  {event.title}
                </h2>
                <Link
                  href={event.highlightsUrl}
                  className="bg-background text-foreground font-medium px-4 py-2 rounded-full hover:bg-muted transition"
                >
                  View Highlights
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
