import React from "react";

const Benefits = () => {
  return (
    <section className="px-12 lg:px-36 py-10 lg:py-20">
      <h2 className="text-[35px] font-[700] w-full lg:w-[55%] leading-[40px]">
        Designed for Nigerians,<br /> Built for Your Energy Needs
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-14 text-[#2D2B2B] mt-8">
        <div>
          <img src="/smartsolar.svg" alt="Smart Solar Assitant" />
          <div>
            <h3 className="font-[700] leading-[21.79px] mt-3 text-sm lg:text-base">
              Smart Solar Assistant
            </h3>
            <p className="font-medium leading-[24px] mt-2 text-sm lg:text-base">
              Personalize your solar energy system in minutes.
            </p>
          </div>
        </div>
        <div>
          <img src="/wallet.svg" alt="Smart Solar Assitant" />
          <div>
            <h3 className="font-[700] leading-[21.79px] mt-3 text-sm lg:text-base">
              Flexible Financing
            </h3>
            <p className="font-medium leading-[24px] mt-2 text-sm lg:text-base">
              Buy Now, Pay Later for verified users or pay upfront.
            </p>
          </div>
        </div>
        <div>
          <img src="/endtoend.svg" alt="Smart Solar Assitant" />
          <div>
            <h3 className="font-[700] leading-[21.79px] mt-3 text-sm lg:text-base">
              End-to-End Support
            </h3>
            <p className="font-medium leading-[24px] mt-2 text-sm lg:text-base">
              From customization of solar system to professional installation.
            </p>
          </div>
        </div>
        <div>
          <img src="/co2.svg" alt="Smart Solar Assitant" />
          <div>
            <h3 className="font-[700] leading-[21.79px] mt-3 text-sm lg:text-base">
              CO2 Savings Tracker
            </h3>
            <p className="font-medium leading-[24px] mt-2 text-sm lg:text-base">
              See how you’re contributing to a greener future.
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="px-[24px] py-[10px] text-boosty_yellow text-lg font-medium bg-body_text rounded-full hover:bg-boosty_green border border-boosty_green hover:border-boosty_yellow mt-14 duration-150 transition-all ease-linear"
      >
        Start Now
      </button>
    </section>
  );
};

export default Benefits;
