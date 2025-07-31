"use client";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  PersonIcon,
  RocketIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: MagnifyingGlassIcon,
    name: "Career Growth & Industry Access",
    description:
      "Through curated speaker sessions, workshops, and industry collaborations, DAO Community opens direct channels to tech leaders and innovators. Members gain early access to career opportunities and professional insights, helping them shape clear and confident career paths.",
    href: "https://chat.whatsapp.com/JbNHLO9WMBzCzys5xoVGfG",
    cta: "JOIN OUR COMMUNITY",
    background: (
      <div className="absolute -right-20 -top-20 opacity-60 w-40 h-40 bg-gradient-to-br from-accentCyan/20 to-accentMagenta/20 rounded-full blur-xl" />
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: RocketIcon,
    name: "Hackathons & Innovation",
    description:
      "We take pride in organizing large-scale, impact-driven hackathons like the DEFY series, which attract thousands of participants across India. From ideation to execution, our team handles end-to-end event planning, providing members with real-world experience in tech event management, logistics, and community engagement.",
    href: "/hackathons",

    background: (
      <div className="absolute -right-20 -top-20 opacity-60 w-40 h-40 bg-gradient-to-br from-accentMagenta/20 to-accentCyan/20 rounded-full blur-xl" />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: PersonIcon,
    name: "Internship Opportunities",
    description:
      "DAO Community connects students with exclusive internship programs through partnerships with leading tech companies and startups. We actively bridge the gap between academic learning and industry exposure, empowering members to gain hands-on experience in cutting-edge domains.",
    href: "/internships",

    background: (
      <div className="absolute -right-20 -top-20 opacity-60 w-40 h-40 bg-gradient-to-br from-accentCyan/20 to-accentPurple/20 rounded-full blur-xl" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Collaborative Networking",
    description:
      "The DAO ecosystem fosters collaboration through peer-to-peer learning, team-based projects, and cross-domain interactions. Members build lasting professional relationships by working together on initiatives rooted in Web3, AI, and emerging tech fields.",
    href: "/networking",

    background: (
      <div className="absolute -right-20 -top-20 opacity-60 w-40 h-40 bg-gradient-to-br from-accentPurple/20 to-accentMagenta/20 rounded-full blur-xl" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: BellIcon,
    name: "Alumni Engagement & Mentorship",
    description:
      "Our strong alumni network includes professionals in top-tier companies and startups worldwide. We maintain active engagement through community channels—ensuring our members benefit from the wisdom and guidance of those who've walked the path before.",
    href: "/mentorship",

    background: (
      <div className="absolute -right-20 -top-20 opacity-60 w-40 h-40 bg-gradient-to-br from-accentMagenta/20 to-accentPurple/20 rounded-full blur-xl" />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];

function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default function StudentBenefitsPage() {
  return (
    <div className="min-h-screen bg-daoBg py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-textPrimary mb-4">
            Student <span className="text-accentCyan">Benefits</span>
          </h1>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Discover the exclusive benefits and opportunities available to
            students in our DAO community.
          </p>
        </div>
        <BentoDemo />
      </div>
    </div>
  );
}

export { BentoDemo };
