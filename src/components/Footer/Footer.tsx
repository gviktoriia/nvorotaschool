"use client";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <section
      className="max-container padding-container flex flex-col justify-center items-center relative"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <FooterInfo />
      <p
        className="text-white"
        style={{
          fontSize: "14px",
          lineHeight: "16px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Copyright © 2024 Нижньоворітський ЗЗСО
      </p>
    </section>
  );
};

export default Footer;
