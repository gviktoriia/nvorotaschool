"use client";

import Carousel from "./Carousel";
import Features from "./Features";

const Gallery = () => {
  return (
    <section
      className="max-container padding-container flex flex-col justify-center items-center relative"
      style={{
        backgroundColor: "#f5f7fa",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="flex flex-col sm:flex-row gap-x-16">
        <Features />
        <Carousel />
      </div>
    </section>
  );
};

export default Gallery;
