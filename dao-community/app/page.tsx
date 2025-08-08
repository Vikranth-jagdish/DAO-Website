import React from "react";
import { TimelineDemo } from "./_components/TimeLine";
import HeroSection from "./_components/Hero";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen">
        <HeroSection />
      </div>
      <div className="">
        <TimelineDemo />
      </div>
    </>
  );
};

export default HomePage;
