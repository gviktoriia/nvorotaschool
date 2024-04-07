"use client";
import Carousel from "./Carousel";
import Features from "./Features";
const Gallery = () => {
  return (
    <section
      className="max-container padding-container flex flex-col justify-center items-center relative"
      style={{
        backgroundColor: "#f5f7fa",
      }}
    >
      <div className="flex row">
        <Features />
      </div>
    </section>
  );
};

export default Gallery;
