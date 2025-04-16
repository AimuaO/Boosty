import React from "react";
import SolarAssistantForm from "./SolarAssistantForm";

const HeroSection = () => {
  return (
    <section className="bg-[#F3B921E0] px-[229px] py-[120px] mt-[80px] grid grid-cols-2 place-items-center gap-[82px] text-body_text">
      <div className="">
        <h1 className="text-[40px] font-[700] leading-tight">
          Need solar? Just talk to the AI assistant 👉🏾
        </h1>
        <p className="mt-[16px] leading-[24px] font-[600] text-[18px] w-[90%]">
          Say what you need. The assistant will help you choose a system, find
          payment options, and book your installation.
        </p>
      </div>

      <div id="solar-assistant" className="">
        <SolarAssistantForm />
      </div>
    </section>
  );
};

export default HeroSection;
