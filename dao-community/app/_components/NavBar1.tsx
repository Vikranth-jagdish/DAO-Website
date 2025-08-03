"use client";

import {
  Home,
  CalendarDays,
  Landmark,
  GraduationCap,
  Image,
  LucideIcon,
  Users,
} from "lucide-react";
import { ExpandedTabs } from "@/components/expanded-tabs";

export interface Tab {
  title: string;
  icon: LucideIcon;
  href: string;
  type?: never;
}

export interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
  href?: never;
}

export type TabItem = Tab | Separator;

const tabs: TabItem[] = [
  { title: "Home", icon: Home, href: "/" },
  { title: "Events", icon: CalendarDays, href: "/events" },
  { type: "separator" },
  { title: "Sponsors", icon: Users, href: "/sponsors" },
  { title: "Mission", icon: Landmark, href: "/mission" },
  { title: "Student Benefits", icon: GraduationCap, href: "/student-benefits" },
  { title: "Gallery", icon: Image, href: "/gallery" },
];

export default function PageTabs() {
  return (
    <div className="flex justify-center py-4">
      <ExpandedTabs tabs={tabs} />
    </div>
  );
}
