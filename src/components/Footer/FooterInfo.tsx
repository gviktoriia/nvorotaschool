"use client";

import Address from "./Address";
import Contact from "./Contact";

const FooterInfo = () => {
  return (
    <div
      className="flex flex-row sm:gap-x-16 md:gap-x-28 lg:gap-x-64 xs:flex-col xs:text-center relative"
      style={{
        width: "100%",
        borderBottom: "1px solid #e4ebf3",
        backgroundColor: "#000000",
        paddingTop: "80px",
        paddingBottom: "80px",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Address />
      <Contact />
    </div>
  );
};

export default FooterInfo;
