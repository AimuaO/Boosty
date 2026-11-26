import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import BoostyButton from "./ui/BoostyButton";

const HeroSection = () => {
  return (
    <section className="mt-[60px] lg:mt-[80px] bg-[#F3B921] text-[#202D2D] overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[1.02fr_0.98fr] items-stretch">
        <div className="px-[28px] md:px-[72px] lg:pl-[128px] lg:pr-[72px] py-[72px] md:py-[92px] lg:py-[112px] flex flex-col justify-center">
          <p className="font-bold uppercase tracking-[0.12em] text-sm text-[#202D2D]/65 mb-4">
            Solar + financing, without the runaround
          </p>
          <h1 className="text-[42px] md:text-[58px] lg:text-[64px] font-bold leading-[1.02] max-w-[760px]">
            Tell Boosty what you need. We’ll help you get there.
          </h1>
          <p className="mt-6 text-[18px] md:text-[20px] leading-[1.55] max-w-[680px] font-semibold text-[#202D2D]/85">
            Talk, type or send what you have. Boosty helps organise your solar project, financing steps and documents, then stays with you through installation and support.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start">
            <BoostyButton as={Link} to="/start" className="min-w-[190px]">
              Start with Boosty
              <ArrowRight size={18} />
            </BoostyButton>
            <div className="text-sm font-semibold text-[#202D2D]/70 pt-3">
              English, Pidgin, voice or text
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-[680px]">
            {["No long forms to start","Financing guidance built in","Support after installation"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm font-semibold">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[650px] bg-[#D9E9E7]">
          <img
            src="/powering.png"
            alt="Reliable solar power for homes and businesses"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#202D2D]/55 via-transparent to-transparent" />

          <div className="absolute left-5 right-5 bottom-5 md:left-8 md:right-8 md:bottom-8">
            <div className="bg-white/95 backdrop-blur rounded-[24px] p-5 md:p-6 shadow-xl max-w-[470px] ml-auto">
              <div className="flex items-center gap-3">
                <img src="/boosty.gif" alt="" className="w-11 h-11 object-contain" />
                <div>
                  <p className="font-bold">Start where you are</p>
                  <p className="text-sm text-[#667572] mt-0.5">
                    “I need solar for my shop” is enough to begin.
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-[#F3F8F8] p-4 text-sm leading-6">
                Boosty will ask only what is needed, one step at a time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
