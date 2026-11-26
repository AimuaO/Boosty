import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";
import BoostyButton from "../components/ui/BoostyButton";

const FundSolarProjects = () => {
  return (
    <>
      <section className="mt-[60px] lg:mt-[80px] bg-[#202D2D] text-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-[1fr_0.95fr] items-stretch">
          <div className="px-[28px] md:px-[72px] lg:pl-[88px] lg:pr-[64px] py-[72px] md:py-[96px]">
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#F3B921]">
              Fund solar projects
            </p>
            <h1 className="mt-3 text-[40px] md:text-[54px] font-bold leading-[1.05] max-w-[650px]">
              Put capital behind reliable power.
            </h1>
            <p className="mt-5 text-[18px] leading-7 text-white/80 max-w-[620px]">
              Boosty helps move solar projects for homes and businesses from interest to financing, installation and ongoing support.
            </p>

            <div className="mt-8 grid gap-4 max-w-[620px]">
              {[
                "Support real solar adoption, not just awareness.",
                "Back projects that move through a structured Boosty process.",
                "Help customers reduce dependence on unreliable and costly power alternatives.",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle2 size={19} className="text-[#F3B921] mt-1 shrink-0" />
                  <p className="text-white/85 leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[380px] lg:min-h-[610px]">
            <img
              src="https://pxeurwkhlqxhy0tq.public.blob.vercel-storage.com/boosty/site/fund-clinic-v2.jpg"
              alt="A community clinic supported by reliable solar power"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202D2D]/65 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-[28px] md:px-[72px] lg:px-[128px] py-[80px] md:py-[96px]">
        <div className="max-w-[1160px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-[48px] lg:gap-[88px] items-start">
          <div>
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#7A8885]">How Boosty creates value</p>
            <h2 className="mt-3 text-[32px] md:text-[42px] font-bold leading-tight">
              Capital is only useful when projects can actually move.
            </h2>
            <p className="mt-5 text-[#52615F] leading-7">
              Boosty sits between the customer, solar provider and financing process. We help organise the customer journey, documents and next steps so viable projects can progress with less friction.
            </p>
            <div className="mt-7 rounded-[24px] bg-[#F3F8F8] p-5">
              <p className="font-bold">Interested in funding?</p>
              <p className="text-sm text-[#667572] mt-2 leading-6">
                Share your details and investment interest. We’ll follow up with the current structure, opportunities and terms available.
              </p>
            </div>
          </div>

          <form className="bg-white border border-[#DDE5E2] rounded-[24px] p-[24px] md:p-[32px] shadow-sm">
            <h2 className="text-[24px] md:text-[28px] font-bold">Start a conversation</h2>
            <p className="text-[#667572] mt-2 mb-6">Tell us who you are and how you’re interested in participating.</p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                ["First name","Investor"],
                ["Last name","Name"],
                ["Business email","you@yourbusiness.com"],
                ["Company name","Your company"],
              ].map(([label,placeholder]) => (
                <label key={label} className={label === "Business email" || label === "Company name" ? "md:col-span-2" : ""}>
                  <span className="text-sm font-semibold block mb-2">{label}</span>
                  <input
                    className="p-3 border-[1.5px] border-[#C7D0CD] rounded-[10px] w-full outline-none focus:border-[#374646]"
                    placeholder={placeholder}
                  />
                </label>
              ))}
            </div>

            <label className="block mt-4">
              <span className="text-sm font-semibold block mb-2">What are you interested in?</span>
              <select className="p-3 border-[1.5px] border-[#C7D0CD] rounded-[10px] w-full bg-white outline-none focus:border-[#374646]">
                <option>Funding solar projects</option>
                <option>Strategic investment in Boosty</option>
                <option>Institutional financing partnership</option>
                <option>Other</option>
              </select>
            </label>

            <BoostyButton type="button" className="mt-7 w-full">
              Send my details
              <ArrowRight size={18} />
            </BoostyButton>
          </form>
        </div>
      </section>

      <Footer hasFAQ={false} />
    </>
  );
};

export default FundSolarProjects;
