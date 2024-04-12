"use client";

import Image from "next/image";

interface StaffCardProps {
  image?: string;
  title: string;
  rank?: string;
  date?: number;
  education?: string;
}

const StaffCard: React.FC<StaffCardProps> = (props) => {
  const imageUrl = props.image ? props.image : "/blue_avatar.jpg";
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
          src={imageUrl}
          width={260}
          height={350}
          alt={props.title}
          style={{
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />
        <h3 className="text-lg font-semibold mt-4 max-w-72">{props.title}</h3>
        <div className="mt-2">
          {props.rank && <p className="text-sm">{props.rank}</p>}
          {props.education && (
            <p className="text-sm">Освіта: {props.education}</p>
          )}
          {props.date && (
            <p className="text-sm">У школі працює з {props.date} року.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
