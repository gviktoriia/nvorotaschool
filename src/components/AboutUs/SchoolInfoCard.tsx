"use client";

import ParagraphText from "./ParagraphText";

const SchoolInfoCard = () => {
  const paragraphs = [
    "Ліцензований обсяг кількості осіб, які можуть навчатися у закладі – 350.",
    "Фактична кількість учнів станом на перше вересня 2024 року - 185.",
    "Мовою освітнього процесу в закладі освіти, згідно зі cтатутом школи є українська мова.",
  ];
  return (
    <div className="max-w-4xl bg-gray-800 p-4 text-white rounded-lg mr-auto ml-auto">
      {paragraphs.map((text, index) => (
        <ParagraphText key={index} text={text} />
      ))}
    </div>
  );
};

export default SchoolInfoCard;
