import React from "react";

const Rules = () => {
  return (
    <section
      className="max-container padding-container flex flex-col justify-center items-center relative"
      style={{
        backgroundColor: "#141414",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <h2
        style={{
          fontSize: "26px",
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Правила прийому до закладу освіти
      </h2>
      <div
        className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-50 mt-12"
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #fff",
            borderRadius: "20px",
            padding: "20px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Перший клас
          </h3>
          <ul
            style={{
              color: "white",
              fontSize: "18px",
              marginTop: "15px",
            }}
          >
            <li>Заява батьків (опікунів)</li>
            <li>Копія свідоцтва про народження</li>
            <li>Медична довідка</li>
          </ul>
        </div>
        <div
          style={{
            border: "2px solid #fff",
            borderRadius: "20px",
            padding: "20px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            10 клас
          </h3>
          <ul
            style={{
              color: "white",
              fontSize: "18px",
              marginTop: "15px",
            }}
          >
            <li>Заява батьків (опікунів)</li>
            <li>Особова справа здобувача освіти</li>
            <li>Свідоцтво про БЗСО та додаток</li>
          </ul>
        </div>
        <div
          style={{
            border: "2px solid #fff",
            borderRadius: "20px",
            padding: "20px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Інші класи
          </h3>
          <ul
            style={{
              color: "white",
              fontSize: "18px",
              marginTop: "15px",
            }}
          >
            <li>Заява батьків (опікунів)</li>
            <li>Особова справа здобувача освіти</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rules;
