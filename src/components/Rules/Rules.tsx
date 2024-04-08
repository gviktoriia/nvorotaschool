import React from "react";

const Rules = () => {
  return (
    <section
      className="max-container padding-container flex flex-col justify-center items-center relative"
      style={{
        backgroundColor: "black",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <h2
        style={{
          fontSize: "26px",
          color: "white",
        }}
      >
        Правила прийому до закладу освіти
      </h2>
      <div
        className="flex flex-row gap-8 sm:gap-16 lg:gap-50 mt-12"
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #fff",
            borderRadius: "20px",
            padding: "10px",
            width: "40%",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              color: "white",
              textDecoration: "underline",
            }}
          >
            Перший клас
          </h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div
          style={{
            border: "2px solid #fff",
            borderRadius: "20px",
            padding: "10px",
            width: "40%",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              color: "white",
              textDecoration: "underline",
            }}
          >
            10 клас
          </h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div
          style={{
            border: "2px solid #fff",
            borderRadius: "20px",
            padding: "10px",
            width: "40%",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              color: "white",
              textDecoration: "underline",
            }}
          >
            Інші класи
          </h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rules;
