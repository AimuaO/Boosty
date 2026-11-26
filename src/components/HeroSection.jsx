import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BoostyButton from "./ui/BoostyButton";

const HeroSection = () => {
  return (
    <section className="bg-[#F3B921E0] px-[35px] md:px-[132px] lg:px-[180px] py-[80px] md:py-[96px] lg:py-[110px] mt-[10px] lg:mt-[80px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] place-items-center gap-[64px] text-body_text min-h-[440px]">
      <div>
        <p className="font-bold uppercase tracking-[0.12em] text-sm text-[#202D2D]/70 mb-4">
          Solar + financing, made easier
        </p>
        <h1 className="text-[40px] md:text-[52px] font-[700] leading-[1.05]">
          Tell Boosty what you need. We’ll help you handle the rest.
        </h1>
        <p className="mt-[18px] leading-[26px] font-[600] text-[18px] max-w-xl">
          Talk, type or send what you have. The Boosty Agent helps organise your information and guides you through the next step without long forms.
        </p>
      </div>

      <div className="w-full max-w-[470px] bg-white rounded-[28px] p-6 md:p-7 shadow-lg">
        <div className="w-20 h-20 rounded-full bg-[#F3F8F8] flex items-center justify-center mb-5 overflow-hidden">
          <img src="/boosty.gif" alt="Boosty Agent" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-[24px] font-bold text-[#202D2D]">Start with the Boosty Agent</h2>
        <p className="text-gray-600 mt-2 mb-6">
          No long forms. No need to organise everything before you start.
        </p>
        <BoostyButton as={Link} to="/start" className="w-full">
          Talk to Boosty
          <ArrowRight size={18} />
        </BoostyButton>
      </div>
    </section>
  );
};

export default HeroSection;
