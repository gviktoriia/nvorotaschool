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
          nvorotascool@meta.ua
        </p>
        <p
          style={{
            color: "white",
            fontSize: "12px",
          }}
        >
          +38095*******
        </p>
      </div>
      <div>
        <Image
          src="/facebook_icon.svg"
          width={20}
          height={20}
          alt="facebook група"
        />
      </div>
    </div>
  );
};

export default Contact;
