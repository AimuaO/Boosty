import React from "react";
import SolarAssistantForm from "./SolarAssistantForm";

const HeroSection = () => {
  return (
    <section className="h-1/2 lg:min-h-[60vh] bg-boosty_yellow mt-0 lg:mt-[80px] grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center px-16 lg:px-60 py-20 lg:pt-0">
      <div>
        <h1 className="text-body_text text-[32px] lg:text-[52px] leading-[39px] lg:leading-[60px] font-bold w-full lg:w-[90%]">
          Start Your Solar Journey with the Solar Assistant 👉🏾
        </h1>
        <p className="text-body_text leading-[20px] lg:leading-[32px] font-normal lg:font-[600] text-base lg:text-[22px] mt-2 lg:mt-5 w-full lg:w-[85%]">
          Calculate your energy needs, customize your system, and choose
          financing options.
        </p>
      </div>

      <div className="hidden lg:flex">
        <SolarAssistantForm />
      </div>
    </section>
  );
};

export default HeroSection;
