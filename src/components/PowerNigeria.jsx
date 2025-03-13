import React from "react";

const PowerNigeria = () => {
  return (
    <section className="min-h-max py-[80px] pt-[34rem] lg:pt-[10rem] grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center px-6 md:px-36 gap-14 ">
      <div className="w-full">
        <img
          src="/powering.png"
          alt="Powering Nigeria"
          className="w-full h-[365px]"
        />
      </div>
      <div className="w-full lg:w-[90%] mt-0 md:mt-0">
        <h2 className="text-[30px] leading-[40px] font-bold">
          Powering Nigeria, One Solar System at a Time
        </h2>
        <p className="leading-[24px] mt-5">
          Millions in Nigeria face unreliable electricity, rising petrol costs,
          and the complexity of adopting solar energy. Boosty’s Solar Assistant
          simplifies energy calculations, customizes solutions, and offers
          flexible financing to make clean energy accessible.
        </p>
      </div>
    </section>
  );
};

export default PowerNigeria;
