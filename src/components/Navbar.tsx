import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../constants";

const Navbar = () => {
  return (
    <nav className="flexCenter max-container padding-container relative z-30 py-5 gap-20 bg-transparent border-y-white border-b-2">
      <Link href="/" className="ml-10">
        <Image src="/Logo School 2.png" alt="Лого" width={50} height={50} />
      </Link>
      <ul className="hidden h-full gap-10 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-20 flexCenter cursor-pointer pb-1.5 text-white transition-all hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      {/* <div className="xl:flexCenter hidden mr-10 ml-3">
        <Button type="button" title="Вступити" variant="btn_white" />
      </div> */}

      <Image
        src="menu.svg"
        alt="Меню"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
