import React from "react";
import { Mic } from "lucide-react";
import { useSolarAssistant } from "../context/SolarAssistantContext";

const LandingComponent = () => {
  const { actions, t } = useSolarAssistant();

  const handleStartClick = () => {
    actions.setView("voiceSelection");
  };

  return (
    <div className="bg-white w-[85vw] max-w-lg h-auto rounded-3xl p-4 md:p-6 flex items-center justify-between gap-3 md:gap-6 shadow-md">
      <div className="flex items-center">
        <img
          src="/boosty.gif"
          alt="Assistant Logo"
          className="w-14 h-14 md:w-16 md:h-16"
        />
      </div>

      <div className="flex-1">
        <button
          onClick={handleStartClick}
          className="bg-gray-800 text-yellow-400 text-base md:text-lg rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center justify-center gap-2 w-full transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <Mic size={20} className="text-yellow-400" />
          {t.tapHereToTalk}
        </button>
      </div>
    </div>
  );
};

export default LandingComponent;
