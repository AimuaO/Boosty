import React, { useState } from "react";

const BecomeAPartner = () => {
  const [userType, setUserType] = useState("Manufacturer");

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-yellow-500 px-[30px] lg:px-36 pt-14 lg:pt-32 pb-14 lg:pb-16 grid grid-cols-1 lg:grid-cols-2 place-content-start lg:place-content-center place-items-center gap-14">
        <div className="w-full">
          <h1 className="font-bold text-[32px] lg:text-[40px] leading-tight">
            Who Can Become a Partner?
          </h1>
          <p className="font-normal mt-3 w-full lg:w-[90%]">
            Boosty partners with businesses and individuals dedicated to
            advancing solar energy in Nigeria. You can join us if you are:
          </p>
          <div className="">
            <div className="flex gap-[1rem] mt-[2rem]">
              <div>
                <img src="solarman.svg" alt="" />
              </div>
              <div>
                <h4 className="font-[700]">Solar Manufacturers</h4>
                <p className="mt-2">
                  Provide high-quality solar panels, <br /> inverters, or
                  batteries to power homes <br /> and businesses.
                </p>
              </div>
            </div>
            <div className="flex gap-[1rem] mt-[2rem]">
              <div>
                <img src="solarretailers.svg" alt="" />
              </div>
              <div>
                <h4 className="font-[700]">Solar Retailers</h4>
                <p className="mt-2">
                  Sell solar products online or in stores <br /> and want to
                  integrate with Boosty.
                </p>
              </div>
            </div>

            <div className="flex gap-[1rem] mt-[2rem]">
              <div>
                <img src="solarinstallers.svg" alt="" />
              </div>
              <div>
                <h4 className="font-[700]">Solar Installers</h4>
                <p className="mt-2">
                  Offer professional installation services <br /> with a
                  commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <form
            className="bg-white w-full lg:w-max shadow-lg px-[25px] lg:px-[40px] py-[45px] rounded-[24px]"
            action="submit"
          >
            <h1 className="text-[19px] lg:text-[25px] font-[700] mb-4">
              Submit Your Details and We Will <br /> Reach You
            </h1>
            <div className="text-[14px] lg:text-base font-medium my-[10px]">
              <label>Business Email</label>
            </div>
            <input
              className="mb-[20px] p-[10px] border-[1.5px] border-[#A6A0A3] rounded-[8px] w-full"
              type="text"
              placeholder="you@yourbusiness.com"
              required
            />
            <div className="flex gap-[1rem] w-full">
              <div className="w-1/2">
                <div className="text-[14px] lg:text-base font-medium my-[10px]">
                  <label htmlFor="">First Name</label>
                </div>
                <input
                  className="p-[10px] placeholder:text-sm lg:placeholder:text-base border-[1.5px] border-[#A6A0A3] rounded-[8px] w-full"
                  type="text"
                  placeholder="Brite"
                />
              </div>

              <div className="w-1/2">
                <div className="text-[14px] lg:text-base font-medium my-[10px]">
                  <label htmlFor="">Last Name</label>
                </div>

                <input
                  className="p-[10px] placeholder:text-sm lg:placeholder:text-base border-[1.5px] border-[#A6A0A3] rounded-[8px] w-full"
                  type="text"
                  placeholder="Solari"
                />
              </div>
            </div>
            <div className="text-[14px] lg:text-base font-medium my-[10px] mt-[30px]">
              <label>Company Name</label>
            </div>
            <input
              className="p-[10px] placeholder:text-sm lg:placeholder:text-base border-[1.5px] border-[#A6A0A3] rounded-[8px] w-full"
              type="text"
              placeholder="Boosty"
              required
            />
            <div className="flex gap-[1rem] mt-[30px]">
              <div className="w-1/2">
                <div className="text-[14px] lg:text-base font-medium my-[10px]">
                  <label htmlFor="">Job Title</label>
                </div>
                <input
                  className="p-[10px] placeholder:text-sm lg:placeholder:text-base border-[1.5px] border-[#A6A0A3] rounded-[8px] w-full"
                  type="text"
                  placeholder="Manager"
                />
              </div>

              <div className="w-1/2">
                <div className="text-[14px] lg:text-base font-medium my-[10px]">
                  <label htmlFor="">Phone Number</label>
                </div>
                <input
                  className="p-[10px] placeholder:text-sm lg:placeholder:text-base border-[1.5px] border-[#A6A0A3] rounded-[8px] w-full"
                  type="text"
                  placeholder="+234 8833 4488"
                />
              </div>
            </div>

            <p className="mt-[30px]">Which one are you</p>
            {/* Radio buttons */}
            <div className="flex space-x-2 lg:space-x-5 mb-8 mt-2 w-full">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "Manufacturer"}
                    onChange={() => setUserType("Manufacturer")}
                    className="opacity-0 absolute"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border ${
                      userType === "Manufacturer"
                        ? "border-gray-800 bg-gray-800"
                        : "border-gray-300"
                    } flex items-center justify-center`}
                  >
                    {userType === "Manufacturer" && (
                      <div className="w-3 h-3 text-amber-400 rounded-full flex items-center justify-center font-bold">
                        &#10003;
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-gray-800 text-sm lg:text-base font-medium ml-1 lg:ml-3 w-max">
                  Manufacturer
                </span>
              </label>

              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "Installer"}
                    onChange={() => setUserType("Installer")}
                    className="opacity-0 absolute"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border ${
                      userType === "Installer"
                        ? "border-gray-800 bg-gray-800"
                        : "border-gray-300"
                    } flex items-center justify-center`}
                  >
                    {userType === "Installer" && (
                      <div className="w-3 h-3 text-amber-400 rounded-full flex items-center justify-center font-bold">
                        &#10003;
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-gray-800 text-sm lg:text-base font-medium ml-1 lg:ml-3 w-max">
                  Installer
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "Retailer/Distributor"}
                    onChange={() => setUserType("Retailer/Distributor")}
                    className="opacity-0 absolute"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border ${
                      userType === "Retailer/Distributor"
                        ? "border-gray-800 bg-gray-800"
                        : "border-gray-300"
                    } flex items-center justify-center`}
                  >
                    {userType === "Retailer/Distributor" && (
                      <div className="w-3 h-3 text-amber-400 rounded-full flex items-center justify-center font-bold">
                        &#10003;
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-gray-800 text-sm lg:text-base font-medium ml-1 lg:ml-3 w-max">
                  Distributor
                </span>
              </label>
            </div>
            <div className="flex items-center justify-end w-full">
              <div>
                <button
                  type="button"
                  className="px-[24px] py-[10px] text-boosty_yellow text-lg font-medium bg-body_text rounded-full hover:bg-boosty_green border border-boosty_green hover:border-boosty_yellow duration-150 transition-all ease-linear"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Become A Partner */}
      <div className="min-h-max py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center px-10 lg:px-36 gap-14 ">
        <div>
          <img src="/becomeapartner.svg" alt="" />
        </div>
        <div>
          <h2 className="text-[30px] lg:text-[40px] leading-tight mb-[14px] lg:mb-[20px] font-bold">
            Process to become a partner
          </h2>

          <ul className="space-y-3 w-full lg:w-[90%] list-disc pl-8 text-[15px] lg:text-base">
            <li className="leading-[1.7]">
              <span className="font-bold">Step 1:</span> Submit your business
              details using the partnership form.{" "}
            </li>
            <li>
              <span className="font-bold">Step 2:</span> Our team will review
              your application and reach out.
            </li>
            <li>
              <span className="font-bold">Step 3:</span> Onboarding and
              integration with Boosty’s platform.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BecomeAPartner;
