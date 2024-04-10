"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../../constants";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flexCenter max-container padding-container relative z-30 py-5 gap-20 bg-transparent border-y-white border-b-2">
      <Link href="/" className="ml-10">
        <Image src="/Logo School 2.png" alt="Лого" width={50} height={50} />
      </Link>
      <ul className={`h-full gap-10 lg:flex ${isMenuOpen ? "" : "hidden"}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              key={link.key}
              className="regular-20 flexCenter cursor-pointer pb-1.5 text-white transition-all hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Image
        src={"/menu.svg"}
        alt="Меню"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full min-h-full bg-black z-50 flex flex-col justify-center items-center">
          <div className="flex justify-end w-full px-6 mt-8">
            <Image
              src={"/icon_cross.png"}
              width={20}
              height={20}
              alt="Закрити меню"
              onClick={toggleMenu} 
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-6 text-white text-center mb-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-lg"
                onClick={toggleMenu} 
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
