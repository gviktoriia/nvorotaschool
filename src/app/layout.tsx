import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Нижньоворітський ліцей",
  description:
    "Нижньоворітський ліцей - школа з широким спектром методик, що успішно навчає дітей та підтримує розвиток громадянської позиції української молоді.",
  keywords: ["Нижньоворітський ліцей", "Нижні Ворота", "ліцей", "освіта"],
  icons: { icon: "./Logo School 2.png", shortcut: "./Logo School 2.png" },
  alternates: {
    canonical: "https://nvorota-school.pp.ua/",
  },
  openGraph: {
    url: "https://nvorota-school.pp.ua/",
    siteName: "Нижньоворітський ліцей",
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
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <body className="bg-transparent">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
