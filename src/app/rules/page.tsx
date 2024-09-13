"use client";

import Navbar from "@/components/Hero/Navbar";
import Rules from "@/components/Rules/Rules";
import WorkingHours from "@/components/WorkingHours/WorkingHours";

const page = () => {
  return (
    <section className="bg-black">
      <Navbar />
      <div className="bg-white">
        <Rules
          headText="Правила прийому до Нижньоворітського ліцею"
          bgColor="white"
          textColor="black"
        />
        <WorkingHours bgColor="white" />
      </div>
    </section>
  );
};

export default page;
