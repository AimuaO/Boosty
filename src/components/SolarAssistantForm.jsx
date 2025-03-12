import { Check } from "lucide";
import React, { useState } from "react";

const SolarAssistantForm = () => {
  const [businessType, setBusinessType] = useState("business");

  return (
    <div className="bg-white md:w-full lg:w-[434px] min-h-max lg:min-h-[523px] rounded-2xl shadow-xl absolute text-base py-[24px] -top-16 lg:-top-44 right-0">
      {/* Top section with icon and speech bubble */}
      <div className="flex items-center gap-3 justify-center">
        {/* Custom icon */}
        <img src="/boosty.gif" alt="" className="w-[59.9px] h-[57.863px]" />

        {/* Speech bubble */}
        <div className="relative ml-4">
          <img src="/bubble.svg" alt="" className="w-[296px] h-[78px]" />
          <span className="absolute inset-0 flex items-center justify-center font-bold leading-[32px]">
            Wetin you wan use Solar do?
          </span>
        </div>
      </div>

      {/* Form content */}
      <form className="pt-10 px-6">
        <div className="bg-[#F8F6F4] border-[0.2px] border-boosty_yellow rounded-xl p-[24px]">
          {/* Radio buttons */}
          <div className="flex space-x-5 mb-8">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="businessType"
                  checked={businessType === "business"}
                  onChange={() => setBusinessType("business")}
                  className="opacity-0 absolute"
                />
                <div
                  className={`w-8 h-8 rounded-full border ${
                    businessType === "business"
                      ? "border-gray-800 bg-gray-800"
                      : "border-gray-300"
                  } flex items-center justify-center`}
                >
                  {businessType === "business" && (
                    <div className="w-7 h-7 text-amber-400 rounded-full flex items-center justify-center font-bold">
                      &#10003;
                    </div>
                  )}
                </div>
              </div>
              <span className="text-gray-800 font-medium ml-3 w-max">
                For My Business
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="businessType"
                  checked={businessType === "home"}
                  onChange={() => setBusinessType("home")}
                  className="opacity-0 absolute"
                />
                <div
                  className={`w-8 h-8 rounded-full border ${
                    businessType === "home"
                      ? "border-gray-800 bg-gray-800"
                      : "border-gray-300"
                  } flex items-center justify-center`}
                >
                  {businessType === "home" && (
                    <div className="w-7 h-7 text-amber-400 rounded-full flex items-center justify-center font-bold">
                      &#10003;
                    </div>
                  )}
                </div>
              </div>
              <span className="text-gray-800 font-medium ml-3 w-max">
                For My Home
              </span>
            </label>
          </div>

          {/* Address input */}
          <div className="mb-6">
            <label className="block text-gray-800 text-lg mb-2">
              What's Your Address
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Budget input */}
          <div className="mb-6">
            <label className="block text-gray-800 text-lg mb-2">
              What's Your Budget? (Naira)
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="my-6 h-[.5px] w-full bg-boosty_yellow" />
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="px-[24px] py-[10px] text-boosty_yellow text-lg font-medium bg-body_text rounded-full hover:bg-boosty_green border border-boosty_green hover:border-boosty_yellow duration-150 transition-all ease-linear"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default SolarAssistantForm;
