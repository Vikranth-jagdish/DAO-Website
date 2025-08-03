import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { AnimatedGroup } from "@/components/ui/animated-group"
import Image from "next/image"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export interface CustomerLogo {
  src: string
  alt: string
  height: number
}

interface CustomersSectionProps {
  customers: CustomerLogo[]
  className?: string
}

export function CustomersSection({ customers = [], className }: CustomersSectionProps) {
  return (
    <section className={`bg-transparent py-0 relative z-10 ${className ?? ""}`}>
      <div className="group relative w-full flex flex-col items-center justify-center px-6">
        <div className="absolute inset-0 z-20 flex scale-95 items-center justify-center opacity-100 duration-500 group-hover:scale-100 group-hover:opacity-0">
          <Link
            href="#"
            className="block text-sm duration-150 hover:opacity-75 text-accentMagenta font-sharetech uppercase tracking-wider"
          >
            <span>Meet Our Sponsors</span>
            <ChevronRight className="ml-1 inline-block size-3" />
          </Link>
        </div>
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="blur-sm group-hover:blur-none w-full max-w-7xl flex flex-row items-center justify-center gap-8 md:gap-12 transition-all duration-500 group-hover:opacity-100 relative z-10"
        >
          {customers.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-12 md:p-16 glass-card rounded-2xl border border-accentMagenta/20 hover:border-accentMagenta/40 transition-all duration-300 backdrop-blur-md bg-daoSurface/30 h-[300px] w-[350px] md:h-[350px] md:w-[400px]">
              <Image
                className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                src={logo.src}
                alt={logo.alt}
                style={{ 
                  maxWidth: '400px',
                  maxHeight: '250px'
                }}
              />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
} 