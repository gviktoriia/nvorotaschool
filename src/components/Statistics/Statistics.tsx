"use client";

const Statistics = () => {
  return (
    <section
      className="max-container padding-container flex flex-col justify-center items-center relative"
      style={{
        backgroundColor: "#141414",
      }}
    >
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-32 gap-y-32 mt-16 mb-16 mr-5 ml-5">
        <div className="text-center w-full sm:w-1/4">
          <p className="text-white bold-40 mb-3">296</p>
          <p className="text-white regular-18">Учнів</p>
        </div>
        <div className="text-center w-full sm:w-1/4">
          <p className="text-white bold-40 mb-3 ">40</p>
          <p className="text-white regular-18">Педагогів</p>
        </div>
        <div className="text-center w-full sm:w-1/4">
          <p className="text-white bold-40 mb-3">22115703</p>
          <p className="text-white regular-18">Код ЄДРПОУ</p>
        </div>
        <div className="text-center w-full sm:w-1/4">
          <p className="text-white bold-40 mb-3">1950</p>
          <p className="text-white regular-18">Рік заснування</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
