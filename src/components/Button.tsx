type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
};

const Button = ({ type, title, variant }: ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant}`} type={type}>
      <label className="bold-20 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
