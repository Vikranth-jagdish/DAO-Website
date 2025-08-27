"use client";
import { useState } from "react";
import CardNav from "@/components/reactbits/Components/CardNav/CardNav";
import { FollowInstagramDialog } from "./FollowInstagramDialog";
import logo from "@/public/daopng.png";

export const CardNavBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Mission",
          ariaLabel: "Our Mission",
          href: "/mission",
        },
        {
          label: "Gallery",
          ariaLabel: "Photo Gallery",
          href: "/gallery",
        },
      ],
    },
    {
      label: "Events",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Upcoming Events",
          ariaLabel: "View Upcoming Events",
          href: "/events/upcomming-events",
        },
        {
          label: "Past Events",
          ariaLabel: "View Past Events",
          href: "/events/past-events",
        },
      ],
    },
    {
      label: "Community",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Student Benefits",
          ariaLabel: "Student Benefits",
          href: "/student-benefits",
        },
        {
          label: "Sponsors",
          ariaLabel: "Our Sponsors",
          href: "/sponsors",
        },
      ],
    },
  ];

  return (
    <>
      <CardNav
        logo={logo.src}
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        onFollowClick={() => setIsDialogOpen(true)}
      />
      <FollowInstagramDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};
