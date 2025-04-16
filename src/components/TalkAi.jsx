import React from "react";
import SolarAssistant from "./SolarAssistantForm";

const TalkAi = () => {
  return (
    <section className="pl-[128px] pb-[120px]">
      <div className="bg-[#F3F8F8] text-white rounded-l-[16px] py-[96px] pl-[101px] pr-[271px] grid grid-cols-2 items-center h-[495px] gap-[82px]">
        <h2 className="text-body_text text-[40px] font-[700] leading-[50px] w-[80%]">
          Have more questions? The assistant can help you in seconds.
        </h2>
        <div className="flex items-center justify-center">
          <SolarAssistant buttonText="Talk to me, my friend" />
        </div>
      </div>
    </section>
  );
};

export default TalkAi;
