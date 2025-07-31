"use client";

import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta?: string;
}) => (
  <motion.div
    key={name}
    className={cn(
      "group relative flex flex-col overflow-hidden rounded-xl",
      // Light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // Dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      // DAO theme specific styling
      "bg-gradient-to-br from-daoSurface/20 to-daoSurface/5 border border-accentCyan/10",
      "hover:border-accentCyan/50 transition-all duration-500",
      // Glowing border effect on hover
      "hover:shadow-[0_0_20px_rgba(31,182,255,0.3),0_0_40px_rgba(31,182,255,0.1),inset_0_0_20px_rgba(31,182,255,0.05)]",
      "hover:scale-[1.02]",
      "glass-card",
      "min-h-[350px]",
      className
    )}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
  >
    <div>{background}</div>

    {/* Animated glow overlay */}
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accentCyan/5 via-accentPurple/5 to-accentMagenta/5 animate-pulse"></div>
    </div>

    {/* Header section - always at top */}
    <div className="relative z-10 p-6 pb-2">
      <Icon className="h-12 w-12 text-accentCyan transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-accentCyan group-hover:drop-shadow-[0_0_8px_rgba(31,182,255,0.6)] mb-4" />
      <h3 className="text-xl font-semibold text-textPrimary font-orbitron mb-3 group-hover:text-accentCyan transition-colors duration-300">
        {name}
      </h3>
    </div>

    {/* Description section - fills remaining space */}
    <div className="relative z-10 px-6 pb-6 flex-1">
      <p className="text-textSecondary leading-relaxed group-hover:text-textPrimary transition-colors duration-300">
        {description}
      </p>
    </div>

    {/* CTA button - only show if cta is provided */}
    {cta && (
      <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
        <div className="bg-gradient-to-t from-daoSurface/95 to-daoSurface/80 backdrop-blur-sm rounded-lg p-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3 rounded-lg bg-accentCyan text-daoBg font-medium text-center no-underline cursor-pointer transition-all duration-300 hover:bg-accentCyan/90 hover:scale-105 transform"
          >
            <span className="flex items-center justify-center gap-2 hover:drop-shadow-[0_0_12px_rgba(31,182,255,1)] hover:filter hover:[text-shadow:0_0_15px_rgba(31,182,255,0.8),0_0_25px_rgba(31,182,255,0.5)] transition-all duration-300">
              {cta}
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </motion.div>
);

export { BentoCard, BentoGrid };
