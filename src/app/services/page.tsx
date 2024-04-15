"use client";

import Button from "@/components/Button";
import Navbar from "@/components/Hero/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const results = [
    "books_result_01.jpg",
    "books_result_02.jpg",
    "books_result_03.jpg",
    "books_result_04.jpg",
  ];

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href =
      "/Освітня програма Нижньоворітського ЗЗСО.docx" &&
      "Освітня програма 5-6 клас.docx";
    anchor.download =
      "/Освітня програма Нижньоворітського ЗЗСО.docx" &&
      "Освітня програма 5-6 клас.docx";
    anchor.click();
  };

  return (
    <section className="bg-black">
      <Navbar />
      <div className="bg-white pl-8 pr-8">
        <h2 className="text-center justify-center bold-20 pt-6 mb-6">
          Освітня програма
        </h2>
        <p className="text-center justify-center regular-18 max-w-xl mr-auto ml-auto mb-4">
          Тут можна ознайомитись із освітніми програмами, які втілюють у закладі
          освіти та побачити перелік освітніх компонентів, визначених освітньою
          програмою.
        </p>
        <div className="text-center justify-center pb-6">
          <Button title="Ознайомитись" function={handleDownload} />
        </div>

        <h2 className="text-center justify-center bold-20 pt-6 mb-6">
          Результати вибору підручників
        </h2>

        <div className="flex flex-col text-white justify-center text-center lg:flex-row ml-16 mr-16 mb-12 gap-x-12 gap-y-12">
          {results.map((result, index) => (
            <Image
              style={{
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              key={index}
              src={result}
              alt="books"
              width={220}
              height={100}
            />
          ))}
        </div>

        <h2 className="text-center justify-center bold-20 mb-6">
          Структура робочого тижня
        </h2>
        <p className="text-center justify-center regular-18 max-w-xl mr-auto ml-auto mb-4">
          Школа працює за 5 - денним навчальним тижнем з однозмінним навчанням.
        </p>
        <p className="text-center justify-center regular-18 max-w-xl mr-auto ml-auto mb-4">
          Тривалість уроків встановлюється відповідно до Закону України
          &quot;Про загальну середню освіту&quot;:
        </p>
        <ul className="text-center justify-center regular-18 max-w-xl mr-auto ml-auto pb-8">
          <li>1 клас - 35 хвилин</li>
          <li>2 - 4 класи - 40 хвилин</li>
          <li>5 - 11 класи - 45 хвилин</li>
        </ul>
      </div>
    </section>
  );
};

export default Page;
