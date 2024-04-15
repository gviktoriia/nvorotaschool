"use client";
require("dotenv").config();

import { GoogleMapsEmbed } from "@next/third-parties/google";

interface WorkingHoursProps {
  bgColor: string;
}

const WorkingHours: React.FC<WorkingHoursProps> = (props) => {
  return (
    <section
      className="max-container padding-container flex flex-col justify-center items-center relative"
      style={{
        backgroundColor: props.bgColor,
        paddingTop: "80px",
        paddingBottom: "80px",
        width: "100%",
      }}
    >
      <p
        style={{
          color: "black",
          fontSize: "20px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Час роботи: Пн-Пт 8:00-16:00
      </p>
      <GoogleMapsEmbed
        apiKey="AIzaSyBpQ_Xll2OqAvDzlY2KMX3muflnps7IEeY"
        height={300}
        width="100%"
        mode="place"
        q="Нижньоворітський ЗЗСО, Нижні Ворота, Закарпатська область, 89130"
      />
    </section>
  );
};

export default WorkingHours;
