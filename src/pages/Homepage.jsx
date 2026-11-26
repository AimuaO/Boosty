import React from "react";
import HeroSection from "../components/HeroSection";
import PowerNigeria from "../components/PowerNigeria";
import Calculation from "../components/Calculation";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import TalkAi from "../components/TalkAi";

const Homepage = () => {
  const solarFAQs = [
    {
      question: "Can Boosty help me understand what solar system I need?",
      answer:
        "Yes. Start by telling Boosty about your home or business and how you use power. The conversation helps gather the right information and guides you toward the next step.",
    },
    {
      question: "Can I get help with financing?",
      answer:
        "Yes. Boosty helps customers prepare for financing, organise required information and documents, and understand what happens next. Final approval is made by the financing partner.",
    },
    {
      question: "Do I need to have all my documents before I start?",
      answer:
        "No. Start with what you have. Boosty can ask for the right items as they become relevant and help keep track of what is still needed.",
    },
    {
      question: "Is Boosty for homes and businesses?",
      answer:
        "Yes. Boosty supports residential and business customers.",
    },
    {
      question: "What happens after installation?",
      answer:
        "Your Boosty conversation stays available for support after installation, including questions about your system, maintenance, warranties and future upgrades.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <PowerNigeria />
      <Calculation />
      <TalkAi />
      <FAQ items={solarFAQs} />
      <Footer hasFAQ={true} />
    </div>
  );
};

export default Homepage;
