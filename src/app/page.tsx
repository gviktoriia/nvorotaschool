import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Нижньоворітський ЗЗСО І-ІІІ Ступенів",
  description:
    "Провідний заклад загальної середньої освіти в с. Нижні Ворота Нижньоворітської ОТГ Мукачівського району Закарпатської області.",
  keywords: ["Нижньоворітський ЗЗСО", "Нижні Ворота", "школа"],
  icons: { icon: "./Logo School 2.png" },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://nvorota-school.pp.ua/",
    siteName: "Нижньоворітський ЗЗСО І-ІІІ ступенів",
    images: [
      {
        url: "https://scontent.fiev8-2.fna.fbcdn.net/v/t39.30808-6/374655662_1350610312195703_632650169434485478_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CSKiHioUNjcAX-fDYzh&_nc_ht=scontent.fiev8-2.fna&oh=00_AfDOxJ5sC3OGWrQieic4PY8U9zkw-B0WOvaOHW28BakBPA&oe=660C53CA",
        width: 800,
        height: 600,
      },
    ],
    locale: "uk",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className={`mb-3 text-2xl font-regular`}>
          Нижньоворітський ЗЗСО І-ІІІ ступенів
        </h1>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h2 className={`mb-3 text-4xl font-semibold`}>
          Сайт в процесі розробки
        </h2>
      </div>
      <div className="loader"></div>
    </main>
  );
}
