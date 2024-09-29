"use client";

import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-row gap-x-10 justify-center">
      <div>
        <p
          style={{
            color: "white",
            fontSize: "12px",
          }}
        >
          school-internat@ukr.net
        </p>
        <p
          style={{
            color: "white",
            fontSize: "12px",
          }}
        >
          +380954885057
        </p>
      </div>
      <div>
        <a
          href="https://www.facebook.com/share/YjxJqXeDKvw3iWMm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook_icon.svg"
            width={20}
            height={20}
            alt="facebook група"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
