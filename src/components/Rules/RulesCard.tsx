"use client";

interface RulesCardProps {
    textColor: string;
    gradeText: string;
    rulesList: string[];
}

const RulesCard :React.FC<RulesCardProps> = (props) => {
  return (
    <div
      style={{
        border: `2px solid ${props.textColor}`,
        borderRadius: "20px",
        padding: "20px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          color: props.textColor,
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        {props.gradeText}
      </h3>
      <ul
        style={{
          color: props.textColor,
          fontSize: "18px",
          marginTop: "15px",
        }}
      >
        {props.rulesList.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};

export default RulesCard;
