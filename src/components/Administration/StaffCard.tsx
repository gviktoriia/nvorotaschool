"use client";

import Image from "next/image";

interface StaffCardProps {
  image: string;
  title: string;
  rank: string;
  date: number;
  education: string;
}

const StaffCard: React.FC<StaffCardProps> = (props) => {
  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        paddingBottom: "20px",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src={props.image}
          width={260}
          height={350}
          alt="Директор школи"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />
        <h3 className="text-lg font-semibold mt-4 max-w-72">{props.title}</h3>
        <div className="mt-2">
          <p className="text-sm">{props.rank}</p>
          <p className="text-sm">Освіта: {props.education}</p>
          <p className="text-sm">У школі працює з {props.date} року.</p>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
