import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";
import BoostyButton from "../components/ui/BoostyButton";

const partnerTypes = [
  {
    title: "Manufacturers",
    copy: "Bring dependable solar products into projects serving Nigerian homes and businesses.",
  },
  {
    title: "Retailers & distributors",
    copy: "Reach more customers through a financing-led buying journey instead of relying only on upfront payment.",
  },
  {
    title: "Installers",
    copy: "Refer customers, share quotations and audits, and stay connected as projects move from financing to installation.",
  },
];

const BecomeAPartner = () => {
  const [userType, setUserType] = useState("Manufacturer");

  return (
    <>
      <section className="mt-[60px] lg:mt-[80px] bg-[#F3B921]">
        <div className="max-w-[1240px] mx-auto px-[28px] md:px-[72px] lg:px-[88px] py-[72px] md:py-[96px] grid lg:grid-cols-[1fr_0.9fr] gap-[56px] lg:gap-[88px] items-center">
          <div>
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#202D2D]/65">Partner with Boosty</p>
            <h1 className="mt-3 text-[40px] md:text-[54px] font-bold leading-[1.05] max-w-[650px]">
              Help more people get reliable solar power.
            </h1>
            <p className="mt-5 text-[18px] leading-7 font-semibold text-[#202D2D]/80 max-w-[620px]">
              Boosty connects solar providers with customers who need a clearer path to financing, installation and support.
            </p>

            <div className="mt-8 grid gap-4">
              {partnerTypes.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle2 size={20} className="mt-1 shrink-0" />
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-sm leading-6 text-[#202D2D]/75 mt-1">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://pxeurwkhlqxhy0tq.public.blob.vercel-storage.com/boosty/site/partner-installers-v2.jpg"
              alt="Solar installers working on a rooftop project in Nigeria"
              className="w-full aspect-[4/3] object-cover rounded-[28px] shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="px-[28px] md:px-[72px] lg:px-[128px] py-[80px] md:py-[96px]">
        <div className="max-w-[1160px] mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-[48px] lg:gap-[88px] items-start">
          <div>
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#7A8885]">How it works</p>
            <h2 className="text-[32px] md:text-[42px] font-bold leading-tight mt-3">
              A straightforward path into the Boosty network.
            </h2>
            <div className="mt-7 space-y-5">
              {[
                ["01","Tell us about your business and what you provide."],
                ["02","We review fit, quality and how we can work together."],
                ["03","Once onboarded, projects can move through Boosty with clearer handoffs and customer support."],
              ].map(([n,copy]) => (
                <div key={n} className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-full bg-[#E8F2F2] border-2 border-[#374646] flex items-center justify-center font-bold text-sm shrink-0">{n}</span>
                  <p className="pt-2 text-[#52615F] leading-6">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="bg-white border border-[#DDE5E2] shadow-sm px-[24px] md:px-[32px] py-[32px] rounded-[24px]">
            <h2 className="text-[24px] md:text-[28px] leading-tight font-bold">
              Tell us about your business
            </h2>
            <p className="text-[#667572] mt-2 mb-6">We’ll review your details and get back to you.</p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                ["First name","Brite"],
                ["Last name","Solari"],
                ["Business email","you@yourbusiness.com"],
                ["Company name","Your company"],
                ["Job title","Manager"],
                ["Phone number","+234…"],
              ].map(([label,placeholder]) => (
                <label key={label} className={label === "Business email" || label === "Company name" ? "md:col-span-2" : ""}>
                  <span className="text-sm font-semibold block mb-2">{label}</span>
                  <input
                    className="p-3 border-[1.5px] border-[#C7D0CD] rounded-[10px] w-full outline-none focus:border-[#374646]"
                    type="text"
                    placeholder={placeholder}
                  />
                </label>
              ))}
            </div>

            <p className="mt-6 font-semibold">I am a</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Manufacturer","Installer","Retailer/Distributor"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`rounded-full px-4 py-2 text-sm font-bold border ${
                    userType === type
                      ? "bg-[#202D2D] text-white border-[#202D2D]"
                      : "bg-white border-[#D5DEDB] text-[#52615F]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <BoostyButton type="button" className="mt-7 w-full">
              Submit details
            </BoostyButton>
          </form>
        </div>
      </section>

      <Footer hasFAQ={false} />
    </>
  );
};

export default BecomeAPartner;
