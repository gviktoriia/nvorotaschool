"use client";

import Navbar from "@/components/Hero/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <section className="bg-black">
      <Navbar />
      <div className="bg-white">
        <h2 className="text-center justify-center bold-20 pt-10">
          Адміністрація закладу
        </h2>
        <div className="flex flex-col md:flex-row justify-content text-center">
          <div className="mt-10 text-center justify-center ml-auto mr-auto pb-8">
            <Image
              src="/hvozdak.jpg"
              width={260}
              height={350}
              alt="Директор школи"
            />
            <h3 className="text-center justify-center bold-16 w-64 pt-6">
              Директор закладу освіти Гвоздак Н.А.
            </h3>
          </div>
          <div className="md:mt-10 mt-0 text-center justify-center ml-auto mr-auto pb-8">
            <Image
              src="/malylio.jpg"
              width={260}
              height={350}
              alt="Заступник директора школи"
            />
            <h3 className="text-center justify-center bold-16 w-64 pt-6">
              Заступник директора Малильо М.Ю.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
