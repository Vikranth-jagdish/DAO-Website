import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export interface Social {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}

export const socials: Social[] = [
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/daocommunity_/", // Add actual links here
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://x.com/daocommunity_?s=11",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/company/daovitcc/posts/?feedView=all",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/daovitcc",
  },
];
