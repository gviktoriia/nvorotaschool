"use client";

import RulesCard from "./RulesCard";

interface RulesProps {
  bgColor: string;
  textColor: string;
  headText: string;
}

const Rules: React.FC<RulesProps> = (props) => {
  return (
    <section
      className="max-container padding-container flex flex-col justify-center items-center relative pt-6 pb-10"
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          color: props.textColor,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {props.headText}
      </h2>
      <div
        className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-50 mt-6"
        style={{
          width: "100%",
        }}
      >
        <RulesCard
          textColor={props.textColor}
          gradeText="Перший клас"
          rulesList={[
            "Заява батьків (опікунів)",
            "Копія свідоцтва про народження",
            "Медична довідка",
          ]}
        />
        <RulesCard
          textColor={props.textColor}
          gradeText="10 клас"
          rulesList={[
            "Заява батьків (опікунів)",
            "Особова справа здобувача освіти",
            "Свідоцтво про БЗСО та додаток",
          ]}
        />
        <RulesCard
          textColor={props.textColor}
          gradeText="Інші класи"
          rulesList={[
            "Заява батьків (опікунів)",
            "Особова справа здобувача освіти",
          ]}
        />
      </div>
    </section>
  );
};

export default Rules;
