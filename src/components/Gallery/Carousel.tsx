"use client";

import Image from "next/image";
import React from "react";

const images = [
  "/photo_patr.jpg",
  "/photo_voluntary.jpg",
  "/photo_afterclass.jpg",
  "/60000152.jpg",
  "/o70QvTFXRRc.jpg",
];

const Carousel = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {images.map((imageUrl, index) => (
        <Image priority
          key={index}
          src={imageUrl}
          width={500}
          height={500}
          alt={`Зображення ${index}`}
          style={{
            marginBottom: "20px",
          }}
        />
      ))}
    </div>
  );
};

export default Carousel;
