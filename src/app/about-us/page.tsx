"use client";

import SchoolInfoCard from "@/components/AboutUs/SchoolInfoCard";
import Button from "@/components/Button";
import Navbar from "@/components/Hero/Navbar";

const page = () => {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/Статут-2021 (Відновлено).doc";
    anchor.download = "/Статут-2021 (Відновлено).doc";
    anchor.click();
  };

  return (
    <section className="bg-black">
      <Navbar />
      <div className="bg-white p-10">
        <h2 className="text-center justify-center bold-20 mb-6">
          Про Нижньоворітський ліцей
        </h2>
        <p className="text-center justify-center regular-18 max-w-4xl mr-auto ml-auto mb-6">
          Це провідний заклад середньої освіти в селі Нижні Ворота Мукачівського
          району Закарпатської області. Нижньоворітський ліцей має
          свою цікаву і самобутню історію. Зокрема, загальну середню освіту він
          розпочав надавати з 1950 року і працює дотепер.
        </p>
        <div className="mb-5">
          <SchoolInfoCard />
        </div>
        <p className="text-center justify-center regular-18 max-w-xl mr-auto ml-auto mb-4">
          Тут можна завантажити статут Нижньоворітського ліцею.
        </p>
        <div className="text-center justify-center">
          <Button title="Статут НЗ" function={handleDownload} />
        </div>
      </div>
    </section>
  );
};

export default page;
