import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Blocktalk - September 1st, 2025",
      content: (
        <div className="bg p-4 rounded-xl">
          <p className="text-muted-foreground text-sm md:text-base font-normal mb-8">
            Get ready for an insightful session on blockchain technology!
          </p>
          <Image
            alt="Blocktalk event image"
            src={`/timeline/blocktalk.png`}
            width={700}
            height={500}
            className="rounded-lg object-cover w-full shadow"
          />
        </div>
      ),
    },
    {
      title: "Voyage - September 24th , 25th and  26 th, 2025",
      content: (
        <div className="bg p-4 rounded-xl">
          <p className="text-muted-foreground text-base md:text-lg font-normal mb-8">
            Embark on a journey of discovery with our multi-day event!
          </p>
          <Image
            alt="Voyage event image"
            src={`/timeline/voyage.png`}
            width={700}
            height={500}
            className="rounded-lg object-cover w-full shadow"
          />
        </div>
      ),
    },
    {
      title: "Neural DAO - September 18th, 19th, 2025",
      content: (
        <div className="bg p-4 rounded-xl">
          <p className="text-muted-foreground text-sm md:text-base font-normal mb-8">
            Explore the intersection of AI and Decentralized Autonomous
            Organizations.
          </p>
          <Image
            alt="Neural DAO event image"
            src={`/timeline/neuraldao.png`}
            width={700}
            height={500}
            className="rounded-lg object-cover w-full shadow"
          />
        </div>
      ),
    },
    {
      title: "Crypto Trading Seminar - October 21st, 2025",
      content: (
        <div className="bg p-4 rounded-xl">
          <p className="text-muted-foreground text-sm md:text-base font-normal mb-8">
            Deep dive into the world of crypto trading with our seminar!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="Crypto Trading Seminar image 1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="Crypto Trading Seminar image 2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Defy'26 - January 8th, 9th, 10th, 2026",
      content: (
        <div className="bg p-4 rounded-xl">
          <p className="text-muted-foreground text-sm md:text-base font-normal mb-4">
            Mark your calendars for our flagship event of the new year!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="Defy'26 image 1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="Defy'26 image 2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Solidity 101 - February 2nd, 2026",
      content: (
        <div className="bg p-4 rounded-xl">
          <p className="text-muted-foreground text-sm md:text-base font-normal mb-4">
            Kickstart your Web3 journey with Solidity fundamentals!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="Solidity 101 image 1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="Solidity 101 image 2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground py-8 px-4 md:px-12">
      <div className="w-full mx-auto">
        <Timeline data={data} />
      </div>
    </div>
  );
}
