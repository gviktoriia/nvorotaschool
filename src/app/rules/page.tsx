"use client";

import Navbar from "@/components/Hero/Navbar";
import Rules from "@/components/Rules/Rules";

const page = () => {
  return <section className="bg-black">
    <Navbar />
    <div className="bg-white">
        <Rules headText="Правила прийому до Нижньоворітського ЗЗСО" bgColor="white" textColor="black" />
      </div>
  </section>;
};

export default page;
