import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Hero/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Нижньоворітський ЗЗСО І-ІІІ Ступенів",
  description:
    "Провідний заклад загальної середньої освіти в с. Нижні Ворота Нижньоворітської ОТГ Мукачівського району Закарпатської області.",
  keywords: ["Нижньоворітський ЗЗСО", "Нижні Ворота", "школа"],
  icons: { icon: "./Logo School 2.png", shortcut: "./Logo School 2.png" },
  alternates: {
    canonical: "https://nvorota-school.pp.ua/",
  },
  openGraph: {
    url: "https://nvorota-school.pp.ua/",
    siteName: "Нижньоворітський ЗЗСО І-ІІІ ступенів",
    images: [
      {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnvorotaschool.at.ua%2F&psig=AOvVaw2ldxHjpokp4kaQ2f11KTWg&ust=1711803133855000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiyh-DBmYUDFQAAAAAdAAAAABAR",
        width: 800,
        height: 600,
      },
    ],
    locale: "uk",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="bg-transparent">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
