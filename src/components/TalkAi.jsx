import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import BoostyButton from "./ui/BoostyButton";

const TalkAi = () => {
  return (
    <section className="pl-0 lg:pl-[128px] pb-[80px] lg:pb-[120px]">
      <div className="bg-[#F3F8F8] rounded-l-0 lg:rounded-l-[16px] py-[80px] md:py-[96px] pl-[35px] md:pl-[108px] lg:pl-[101px] pr-[35px] md:pr-[108px] grid grid-cols-1 lg:grid-cols-2 items-center gap-[32px] lg:gap-[82px]">
        <div>
          <h2 className="text-body_text text-[30px] lg:text-[40px] font-[700] leading-[40px] lg:leading-[50px] max-w-xl">
            Not sure where to start? Just tell us what’s going on.
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg">
            The Boosty Agent will guide the conversation and help you prepare the information needed for the next step.
          </p>
        </div>
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#DCE6E3]">
          <MessageCircle size={28} className="text-[#202D2D] mb-4" />
          <p className="font-bold text-xl text-[#202D2D]">Voice or text. English or Pidgin.</p>
          <p className="text-gray-600 mt-2 mb-5">No long technical form before you can get help.</p>
          <BoostyButton as={Link} to="/start">
            Talk to Boosty
            <ArrowRight size={18} />
          </BoostyButton>
        </div>
      </div>
    </section>
  );
};

export default TalkAi;
