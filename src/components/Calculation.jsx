import React from "react";

const Calculation = () => {
  return (
    <section className="text-white">
      <div className="w-full lg:w-[95%] bg-boosty_green py-12 lg:py-32 pl-10 lg:pl-60 pr-10 lg:pr-20 grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center rounded-r-[15px] lg:rounded-r-[35px]">
        <div className="mb-10 lg:mb-0">
          <h2 className="text-[35px] font-[700] leading-[45px] w-full lg:w-[65%] mb-6">
            From Calculation to Installation in 3 Simple Steps
          </h2>
          <button className="w-max h-auto px-[35px] font-bold py-[10px] rounded-full border-2 border-boosty_green hover:border-boosty_yellow flex items-center justify-center duration-200 bg-[#E8F2F2] text-[#202D2D]">
            Start Your Journey Now
          </button>
        </div>

        <div className="border border-[#769090] rounded-xl py-10 px-6 space-y-8">
          <div className="flex items-center justify-center gap-5 font-[600]">
            <img src="/1icon.svg" alt="" />
            <p className="leading-[24px] w-[70%]">
              Use the Solar Assistant to estimate your energy needs and savings.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 font-[600]">
            <img src="/2icon.svg" alt="" />
            <p className="leading-[24px] w-[70%]">
              Customize your system, and explore financing options.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 font-[600]">
            <img src="/2icon.svg" alt="" />
            <p className="leading-[24px] w-[70%]">
              Schedule installation and enjoy reliable, clean energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculation;
