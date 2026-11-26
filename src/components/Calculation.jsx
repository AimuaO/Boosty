import React from "react";
import { Link } from "react-router-dom";
import BoostyButton from "./ui/BoostyButton";

const Calculation = () => {
  return (
    <section className="pr-0 lg:pr-[128px]">
      <div className="bg-boosty_green text-white rounded-r-0 lg:rounded-r-[16px] py-[80px] lg:py-[96px] pl-[35px] md:pl-[108px] lg:pl-[230px] pr-[35px] md:pr-[59px] lg:pr-[120px] grid grid-cols-1 lg:grid-cols-2 items-center h-max lg:min-h-[495px] gap-6 lg:gap-[82px]">
        <div>
          <h2 className="text-[30px] font-[700]">From “I need solar” to a case that’s ready for review.</h2>
          <p className="mt-4 text-white/80 max-w-md">
            Boosty helps you organise the information, documents and next steps without making you figure everything out alone.
          </p>
          <BoostyButton as={Link} to="/start" variant="secondary" className="mt-6">
            Start your journey
          </BoostyButton>
        </div>

        <div className="border border-[#769090] p-[16px] lg:p-[47px] space-y-[24px] rounded-[8px]">
          <div className="flex items-center gap-5 w-full">
            <img src="/1icon.svg" alt="" />
            <p className="leading-[24px] pr-4 lg:pr-0">
              Tell us what you need by voice or text, in the way you naturally speak.
            </p>
          </div>
          <div className="flex items-center gap-5 w-full">
            <img src="/2icon.svg" alt="" />
            <p className="leading-[24px] pr-4 lg:pr-0">
              We organise your project information and show you what is still needed.
            </p>
          </div>
          <div className="flex items-center gap-5 w-full">
            <img src="/3icon.svg" alt="" />
            <p className="leading-[24px] pr-4 lg:pr-0">
              Boosty reviews the case and coordinates the right financing and installation next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculation;
