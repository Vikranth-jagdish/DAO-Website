"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Events", href: "/events" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Mission", href: "/mission" },
  { name: "Student Benefits", href: "/student-benefits" },
  { name: "Gallery", href: "/gallery" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-50 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-5xl rounded-2xl border backdrop-blur-lg lg:px-8"
          )}
        >
          <div className="relative flex items-center justify-between gap-4 py-3 lg:py-4">
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Image
                  src="/daopng.png"
                  alt="DAO Community Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-lg font-bold">DAO Community</span>
              </Link>
            </div>

            {/* Center: Nav Items (Desktop) */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              <ul className="flex gap-8 text-base font-medium">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "duration-150 whitespace-nowrap px-2 py-1",
                          isActive
                            ? "text-accent-foreground font-semibold underline underline-offset-4"
                            : "text-muted-foreground hover:text-accent-foreground"
                        )}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: Mobile Menu Toggle */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-50 -m-2.5 -mr-4 block cursor-pointer p-2.5"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={cn(
            "absolute top-full mt-2 w-full lg:hidden transition-all duration-300",
            menuState
              ? "block opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-2"
          )}
        >
          <div className="mx-2 sm:mx-4 rounded-3xl border border-white/20 bg-background/95 backdrop-blur-xl p-6 shadow-2xl shadow-zinc-300/20">
            <ul className="space-y-6 text-lg font-medium">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block duration-150",
                        isActive
                          ? "text-accent-foreground font-semibold underline underline-offset-4"
                          : "text-muted-foreground hover:text-accent-foreground"
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
