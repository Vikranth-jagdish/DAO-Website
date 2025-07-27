import React from "react";
import { BentoGridDemo } from "./_components/Grid";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center "><h1>Hero Section</h1></div>
      <div className="min-h-screen flex items-center  flex-col">
        <h1 className="text-center my-30 font-bold text-4xl sm:px-20">Discover More About Us</h1>
        <BentoGridDemo />
      </div>
    </>
  );
};

export default HomePage;
