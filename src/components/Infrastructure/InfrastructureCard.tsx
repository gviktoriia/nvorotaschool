"use client";

import Image from "next/image";

interface InfrastructureCardProps {
  title: string;
  paragraph: string;
  image?: string;
}

const InfrastructureCard: React.FC<InfrastructureCardProps> = (props) => {
  return (
    <div className="flex flex-col mb-10 w-full justify-center ml-auto mr-auto gap-x-36 md:gap-x-16 md:flex-row">
      <div className="flex flex-col">
        <h3 className="text-left bold-18 mb-2">{props.title}</h3>
        <p className="text-left regular-16 max-w-lg mb-2">{props.paragraph}</p>
      </div>
      {props.image && (
        <Image src={props.image} width={300} height={300} alt={props.title} />
      )}
    </div>
  );
};

export default InfrastructureCard;
