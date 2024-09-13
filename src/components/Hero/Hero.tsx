"use client";

import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section
      className="max-container relative"
      style={{
        backgroundImage: 'url("School photo_1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
      }}
    >
      <Navbar />
      <div className="padding-container flex flex-col justify-center items-center z-0">
        <h1 className="text-white regular-40 text-center justify-center max-w-lg mt-48 xs:text-2xl sm:text-5xl md:text-5xl lg:text-6xl z-0">
          Нижньоворітський ліцей
        </h1>
        <div className="mt-32 mb-24">
          <div className="flex column">
            <Image
              src="/location.png"
              width={40}
              height={40}
              className="max-h-10"
              alt="Місцезнаходження"
            />
            <p className="text-white regular-18 text-center max-w-sm ml-10">
              89130, вул. Центральна 104, с. Нижні Ворота Мукачівський район
              Закарпатська область
            </p>
          </div>
          <div className="flex column mt-5">
            <Image
              src="/email.png"
              width={40}
              height={40}
              className="max-h-10"
              alt="Пошта"
            />
            <p className="text-white regular-18 text-center max-w-sm ml-10">
              school-internat@ukr.net
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
