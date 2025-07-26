import { Award, Calendar, HomeIcon, Phone, Target, Users } from "lucide-react";
import React from "react";

const NavBar = () => {
  return <div></div>;
};

export default NavBar;
const navItems = [
  { name: "Home", url: "#home", icon: HomeIcon },
  { name: "Events", url: "#events", icon: Calendar },
  { name: "Past Events", url: "#past-events", icon: Users },
  { name: "Sponsors", url: "#sponsors", icon: Award },
  { name: "Benefits", url: "#benefits", icon: Target },
  { name: "Contact", url: "#contact", icon: Phone },
];
