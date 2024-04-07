"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="max-container padding-container flex flex-col justify-center items-center z-0 top-0 absolute"
      style={{
        height: "100vh",
        backgroundImage: 'url("School photo_1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
      }}
    >
      <h1 className="text-white regular-40 text-center justify-center max-w-lg mt-36 xs:text-2xl sm:text-5xl md:text-5xl lg:text-5xl">
        Нижньоворітський заклад загальної середньої освіти І-ІІІ ступенів
      </h1>
      <div className="mt-32">
        <div className="flex column">
          <Image
            src="/location.png"
            width={40}
            height={40}
            className="max-h-10"
            alt="Місцезнаходження"
          />
          <p className="text-white regular-18 text-center max-w-sm ml-10">
            89130, вул. Центральна 116, с. Нижні Ворота Мукачівський район
            Закарпатська область
          </p>
        </div>
        <div className="flex column mt-5">
          <Image
            src="/email.png"
            width={40}
            height={40}
            className="max-h-10"
            alt="Місцезнаходження"
          />
          <p className="text-white regular-18 text-center max-w-sm ml-10">
            nvorotascool@meta.ua
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
