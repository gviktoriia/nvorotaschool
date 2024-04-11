"use client";

interface ParagraphTextProps {
    text: string;
}

const ParagraphText: React.FC<ParagraphTextProps> = (props) => {
  return (
    <p className="text-center justify-center regular-18 max-w-4xl mr-auto ml-auto mb-4">
      {props.text}
    </p>
  );
};

export default ParagraphText;
