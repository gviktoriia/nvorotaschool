"use client";

type ButtonProps = {
  title: string;
  function: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-800 pr-4 pl-4"
      onClick={props.function}
    >
      {props.title}
    </button>
  );
};

export default Button;
