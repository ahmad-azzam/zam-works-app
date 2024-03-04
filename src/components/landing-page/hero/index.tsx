"use client";

import React from "react";
import Slider from "./slider";

const Hero: React.FC = () => {
  return (
    <section className="h-screen bg-primary-200" id="home">
      <div className="container mx-auto">
        <Slider />
      </div>
    </section>
  );
};

export default Hero;
