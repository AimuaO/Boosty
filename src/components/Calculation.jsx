import React from "react";

const Calculation = () => {
  return (
    <section className="pr-[128px]">
      <div className="bg-boosty_green text-white rounded-r-[16px] py-[96px] pl-[230px] pr-[120px] grid grid-cols-2 items-center h-[495px] gap-[82px]">
        <div className="">
          <h2 className="text-[30px] font-[700]">Get Solar in 3 Easy Steps </h2>
          <button className="px-[24px] py-[10px] bg-[#E8F2F2] mt-[24px] font-[700] leading-[24px] text-[#202D2D] rounded-[99px] border-2 border-boosty_green hover:border-boosty_yellow duration-200 h-[44px]">
            Start Your Journey Now
          </button>
        </div>

        <div className="border border-[#769090] p-[47px] space-y-[24px] rounded-[8px]">
          <div className="flex items-center justify- gap-5 w-full">
            <img src="/1icon.svg" alt="" />
            <p className="leading-[24px]">
              Use the Solar Assistant to estimate your energy needs and savings.
            </p>
          </div>
          <div className="flex items-center justify- gap-5 w-full">
            <img src="/2icon.svg" alt="" />
            <p className="leading-[24px]">
              Customize your system, and explore financing options.
            </p>
          </div>
          <div className="flex items-center justify- gap-5 w-full">
            <img src="/2icon.svg" alt="" />
            <p className="leading-[24px]">
              Schedule installation and enjoy reliable, clean energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculation;
