"use client";

import ParagraphText from "./ParagraphText";

const SchoolInfoCard = () => {
  const paragraphs = [
    "Ліцензований обсяг кількості осіб, які можуть навчатися у ліцеї – 350.",
    "Фактична кількість учнів станом на перше вересня 2024 року - 296",
    "Мовою освітнього процесу в ліцеї, згідно зі cтатутом є українська мова.",
  ];
  return (
    <div
      className="max-w-4xl p-4 text-white rounded-lg mr-auto ml-auto"
      style={{
        backgroundColor: "#135D66",
      }}
    >
      {paragraphs.map((text, index) => (
        <ParagraphText key={index} text={text} />
      ))}
    </div>
  );
};

export default SchoolInfoCard;
