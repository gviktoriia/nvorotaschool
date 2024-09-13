"use client";

import StaffCard from "@/components/Administration/StaffCard";
import Navbar from "@/components/Hero/Navbar";
import { ADMINISTRATION, TEACHERS } from "../../../utils/staffUtil";

const page = () => {
  return (
    <section className="bg-black">
      <Navbar />
      <div className="bg-white">
        <h2 className="text-left regular-16 ml-16 pt-4">
          * Вакантні місця наразі відсутні.
        </h2>
        <h2 className="text-center justify-center bold-20 pt-4 mb-10">
          Адміністрація ліцею
        </h2>
        <div className="flex flex-col text-white justify-center text-center md:flex-row ml-16 mr-16 gap-x-24 gap-y-16">
          {ADMINISTRATION.map((admin, index) => (
            <StaffCard
              key={index}
              title={admin.title}
              rank={admin.rank}
              education={admin.education}
              date={admin.date}
            />
          ))}
        </div>
        <h2 className="text-center justify-center bold-20 pt-10 mb-10">
          Педагогічний колектив
        </h2>
        <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto text-center gap-x-28 gap-y-16 ml-16 mr-16 mb-16">
          {TEACHERS.map((teacher, index) => (
            <StaffCard
              key={index}
              title={teacher.title}
              rank={teacher.rank}
              education={teacher.education}
              date={teacher.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
