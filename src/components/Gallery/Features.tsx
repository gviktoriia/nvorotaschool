import React from "react";

const Features = () => {
  return (
    <div
      style={{
        fontSize: "24px",
        color: "#1a1b1f",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <ul
        className="gap-y-30"
        style={{
          textDecoration: "none",
        }}
      >
        <li style={{ marginBottom: "35px" }}>
          Національно-патріотичне виховання
        </li>
        <li style={{ marginBottom: "35px" }}>Волонтерська діяльність</li>
        <li style={{ marginBottom: "35px" }}>Позакласні заходи</li>
        <li style={{ marginBottom: "35px" }}>Літній англомовний табір</li>
        <li style={{ marginBottom: "35px" }}>Футбольна команда</li>
      </ul>
    </div>
  );
};

export default Features;
