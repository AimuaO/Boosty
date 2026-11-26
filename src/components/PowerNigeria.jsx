import React from "react";

const PowerNigeria = () => {
  return (
    <section className="py-[80px] md:py-[96px] lg:py-[120px] px-[28px] md:px-[72px] lg:px-[128px]">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-[48px] lg:gap-[88px] items-center">
        <div className="relative">
          <img
            src="/powerSection.png"
            alt="Solar energy in everyday use"
            className="w-full aspect-[4/3] object-cover rounded-[28px]"
          />
          <div className="absolute -bottom-5 right-4 md:right-8 bg-[#202D2D] text-white rounded-[20px] p-4 md:p-5 max-w-[250px] shadow-xl">
            <p className="text-[#F3B921] font-bold text-sm">One relationship</p>
            <p className="mt-1 text-sm leading-5">
              From first conversation to financing, installation and after-sales.
            </p>
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#7A8885] mb-3">
            Built around real life
          </p>
          <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.15] max-w-[620px]">
            Going solar should not feel like another job.
          </h2>
          <p className="mt-5 text-[17px] leading-7 text-[#52615F] max-w-[620px]">
            Most people do not want to study solar systems, chase documents or figure out financing on their own. Boosty brings the process into one guided conversation and helps move the work forward behind the scenes.
          </p>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#F3F8F8] p-5">
              <p className="font-bold">For homes</p>
              <p className="text-sm text-[#667572] mt-2 leading-6">
                Get help understanding what you need and how to make it affordable.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F7F8F6] p-5 border border-[#E1E8E5]">
              <p className="font-bold">For businesses</p>
              <p className="text-sm text-[#667572] mt-2 leading-6">
                Keep the process moving without losing time to paperwork and follow-up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerNigeria;
