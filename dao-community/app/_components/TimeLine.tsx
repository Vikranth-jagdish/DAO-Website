import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "September 2025",
      content: (
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
            Get ready for an insightful month of technical events!
          </p>
          <ul className="mb-8 space-y-2">
            <li className="text-muted-foreground text-xs md:text-sm flex gap-2 items-center">
              ✅ Blocktalk - September 1st
            </li>
            <li className="text-muted-foreground text-xs md:text-sm flex gap-2 items-center">
              ✅ Voyage - September 2nd, 3rd, 4th
            </li>
            <li className="text-muted-foreground text-xs md:text-sm flex gap-2 items-center">
              ✅ Neural DAO - September 18th, 19th
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4 items-center">
            <Image
              alt="event image"
              src={`/timeline/voyage.png`}
              width={700}
              height={500}
              className="rounded-lg object-cover w-full shadow"
            />
            <Image
              alt="event image"
              src={`/timeline/neuraldao.png`}
              width={700}
              height={500}
              className="rounded-lg object-cover w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "October 2025",
      content: (
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
            Deep dive into the world of crypto trading with our seminar!
          </p>
          <ul className="mb-8 space-y-2">
            <li className="text-muted-foreground text-xs md:text-sm flex gap-2 items-center">
              ✅ Crypto Trading Seminar - October 21st
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "January 2026",
      content: (
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Mark your calendars for our flagship event of the new year!
          </p>
          <ul className="mb-8 space-y-2">
            <li className="text-muted-foreground text-xs md:text-sm flex gap-2 items-center">
              ✅ Defy&apos;26 - January 8th, 9th, 10th
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "February 2026",
      content: (
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Kickstart your Web3 journey with Solidity fundamentals!
          </p>
          <ul className="mb-8 space-y-2">
            <li className="text-muted-foreground text-xs md:text-sm flex gap-2 items-center">
              ✅ Solidity 101 - February 2nd
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
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
