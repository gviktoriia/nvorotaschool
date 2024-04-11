"use client";

import Button from "@/components/Button";
import Navbar from "@/components/Hero/Navbar";

const Page = () => {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/41.docx";
    anchor.download = "/41.docx";
    anchor.click();
  };

  return (
    <section className="bg-black">
      <Navbar />
      <div className="bg-white pl-10 pr-10">
        <h2 className="text-center justify-center bold-20 pt-10 mb-10">
          Освітня програма
        </h2>
        <p className="text-center justify-center regular-18 max-w-xl mr-auto ml-auto mb-4">
          Тут можна ознайомитись із освітніми програмами, які втілюють у закладі
          освіти та побачити перелік освітніх компонентів, визначених освітньою
          програмою.
        </p>
        <div className="text-center justify-center pb-10">
          <Button title="Ознайомитись" function={handleDownload} />
        </div>
        <h2 className="text-center justify-center bold-18 mb-4">
          Структура робочого тижня
        </h2>
        <p className="text-center justify-center regular-18 max-w-xl mr-auto ml-auto mb-4">
          Школа працює за 5 - денним навчальним тижнем з однозмінним навчанням.
        </p>
        <p className="text-center justify-center regular-18 max-w-xl mr-auto ml-auto mb-4">
          Тривалість уроків встановлюється відповідно до Закону України
          &quot;Про загальну середню освіту&quot;:
        </p>
        <ul className="text-center justify-center regular-18 max-w-xl mr-auto ml-auto pb-4">
          <li>1 клас - 35 хвилин</li>
          <li>2 - 4 класи - 40 хвилин</li>
          <li>5 - 11 класи - 45 хвилин</li>
        </ul>
      </div>
    </section>
  );
};

export default Page;
