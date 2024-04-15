"use client";

import Image from "next/image";

const Address = () => {
  return (
    <div className="flex flex-row gap-x-6 xs:w-100% xs:justify-center xs:mb-8">
      <Image src="/Logo School 2.png" width={30} height={30} alt="Логотип" />
      <p
        style={{
          color: "white",
          fontSize: "12px",
          maxWidth: "300px",
        }}
      >
        89130, вул. Центральна 116, с. Нижні Ворота Мукачівський район
        Закарпатська область
      </p>
    </div>
  );
};

export default Address;
