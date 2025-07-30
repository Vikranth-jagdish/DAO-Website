import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["startup-1", "startup-2", "startup-3", "startup-4"].map(
              (name, i) => (
                <Image
                  key={i}
                  src={`https://assets.aceternity.com/templates/${name}.webp`}
                  alt={`startup template ${i + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                />
              )
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more examples of beautiful designs I built.
          </p>
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
      title: "Changelog",
      content: (
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <ul className="mb-8 space-y-2">
            {[
              "✅ Card grid component",
              "✅ Startup template Aceternity",
              "✅ Random file upload lol",
              "✅ Himesh Reshammiya Music CD",
              "✅ Salman Bhai Fan Club registrations open",
            ].map((item, i) => (
              <li
                key={i}
                className="text-muted-foreground text-xs md:text-sm flex gap-2 items-center"
              >
                {item}
              </li>
            ))}
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
      <div className="w-full  mx-auto">
        <Timeline data={data} />
      </div>
    </div>
  );
}
