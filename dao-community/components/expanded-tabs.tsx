"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Tab {
  title: string;
  icon: LucideIcon;
  href: string;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
  href?: never;
}

type TabItem = Tab | Separator;

interface ExpandedTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? "0.5rem" : 0,
    paddingLeft: isSelected ? "1.25rem" : "0.5rem",
    paddingRight: isSelected ? "1.25rem" : "0.5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

export function ExpandedTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
}: ExpandedTabsProps) {
  const pathname = usePathname();
  const outsideClickRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(outsideClickRef as React.RefObject<HTMLElement>, () => {
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    onChange?.(index);
  };

  const Separator = () => (
    <div className="h-[24px] w-px bg-border" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex gap-2 rounded-2xl border bg-background p-2 shadow-sm",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;

        // MODIFIED LINE: Check if the current pathname starts with the tab's href.
        // Handles the root path ("/") as a special case for an exact match.
        const isActive =
          tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);

        return (
          <Link
            key={tab.title}
            href={tab.href}
            onClick={() => handleSelect(index)}
          >
            <motion.button
              variants={buttonVariants}
              initial={false}
              animate="animate"
              custom={isActive}
              transition={transition}
              className={cn(
                "relative flex items-center rounded-2xl transition-all duration-300",
                "px-2 py-2 text-sm", // Mobile
                "sm:px-4 sm:py-2.5 sm:text-base", // Small screens and up
                "md:px-6 md:py-2.5 md:text-lg", // Medium screens and up
                isActive
                  ? cn("bg-muted", activeColor)
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={20} className="sm:size-5 md:size-6 shrink-0" />
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.span
                    variants={spanVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                    className="ml-1 sm:ml-2 md:ml-3 overflow-hidden whitespace-nowrap hidden sm:inline"
                  >
                    {tab.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </Link>
        );
      })}
    </div>
  );
}
