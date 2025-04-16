import React, { useState, useEffect } from "react";
import { X, Mic, Settings } from "lucide-react";

const SolarAssistant = ({ buttonText = "Tap here to start talking" }) => {
  // View states: 'landing', 'voice', 'voiceSelection', 'appliance', 'form'
  const [view, setView] = useState("landing");
  const [businessType, setBusinessType] = useState("business");
  const [address, setAddress] = useState("");
  const [budget, setBudget] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState("bright");

  // Appliance form state
  const [applianceName, setApplianceName] = useState("Freezer");
  const [quantity, setQuantity] = useState("1");
  const [dayHours, setDayHours] = useState("8 hours");
  const [nightHours, setNightHours] = useState("3 hours");
  const [wattage, setWattage] = useState("800 W");

  // Voice options
  const voices = [
    { id: "sonny", name: "Sonny", mood: "Calm" },
    { id: "bright", name: "Bright", mood: "Energetic" },
    { id: "lucky", name: "Lucky", mood: "Lively" },
  ];

  // Web Speech API implementation for voice recognition
  const startListening = () => {
    setIsListening(true);

    // Check if browser supports Web Speech API
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = "en-NG"; // Set to English (Nigeria) if available
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Recognized speech:", transcript);
        // Process the speech result
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      // Fallback for browsers that don't support speech recognition
      console.log("Speech recognition not supported");
      setTimeout(() => {
        setIsListening(false);
      }, 3000);
    }
  };

  // Landing view - this is the small chat bubble with "Tap here to start talking"
  const renderLanding = () => (
    <div className="bg-white w-full lg:w-[460px] h-[153.99px] rounded-3xl px-6 py-6 lg:px-8 flex items-center gap-3 lg:gap-[24px] shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/boosty.gif" alt="" className="w-[59.9px] h-[57.863px]" />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setView("voiceSelection")}
          className="bg-[#202D2D] text-[#F5C13CE0] text-base lg:text-[18px] rounded-full px-6 py-[10px] flex items-center justify-center gap-0 lg:gap-2 w-full h-[44px] leading-[26px] font-[700]"
        >
          <img
            src="/voiceIcon.png"
            className="hidden lg:block w-[20px] h-[20px] mr-2"
          />
          {buttonText}
        </button>
      </div>
    </div>
  );

  // Voice selection screen - full page with voice options (like Image 1)
  const renderVoiceSelection = () => (
    <div className="fixed inset-0  flex flex-col items-center justify-center p-4 z-50 bg-[#F3B921E0]">
      <div className="absolute top-4 left-4 flex space-x-2">
        <button className="bg-gray-800 text-white rounded-full px-4 py-1">
          Pidgin
        </button>
        <button className="text-gray-700 rounded-full px-4 py-1">
          English
        </button>
      </div>

      <h2 className="text-2xl font-bold text-center mb-8">Choose a voice</h2>

      <div className="bg-white rounded-full p-16 mb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col space-y-1 items-center">
            {[1, 2, 3, 4, 5].map((bar) => (
              <div
                key={bar}
                className="bg-yellow-600 w-2 h-10 rounded-full"
                style={{
                  height: `${15 + Math.random() * 10}px`,
                  margin: "0 2px",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mb-16 relative">
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700">
          &lt;
        </button>

        <div className="flex space-x-16">
          {voices.map((voice) => (
            <div
              key={voice.id}
              onClick={() => setSelectedVoice(voice.id)}
              className={`text-center cursor-pointer ${
                selectedVoice === voice.id
                  ? "text-gray-800 font-bold"
                  : "text-gray-600"
              }`}
            >
              <p
                className={`text-lg ${
                  selectedVoice === voice.id ? "font-bold" : ""
                }`}
              >
                {voice.name}
              </p>
              <p className="text-sm">{voice.mood}</p>
            </div>
          ))}
        </div>

        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700">
          &gt;
        </button>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => setView("landing")}
          className="bg-white text-gray-800 rounded-full px-10 py-2 "
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setView("voice");
            startListening();
          }}
          className="bg-gray-800 text-white rounded-full px-10 py-2 "
        >
          Done
        </button>
      </div>
    </div>
  );

  // Voice interface with microphone (Image 2)
  const renderVoiceInterface = () => (
    <div className="fixed inset-0 bg-yellow-400 flex flex-col items-center justify-center p-4 z-50">
      <div className="absolute top-4 right-4">
        <button onClick={() => setView("appliance")} className="text-gray-700">
          <Settings size={24} />
        </button>
      </div>

      <div className="bg-white rounded-full p-16 mb-12 ">
        <div className={`flex flex-col items-center`}>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((bar) => (
              <div
                key={bar}
                className="bg-yellow-600 w-2 h-10 rounded-full"
                style={{
                  height: isListening ? `${20 + Math.random() * 20}px` : "20px",
                  transition: "height 0.2s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <button
          onClick={() => setIsListening(false)}
          className="bg-yellow-400 rounded-full p-4"
        >
          <X size={24} />
        </button>
        <button
          onClick={() => startListening()}
          className="bg-yellow-400 rounded-full p-4"
        >
          <Mic size={24} />
        </button>
      </div>
    </div>
  );

  // Appliance form (like Image 4)
  const renderApplianceForm = () => (
    <div className="fixed inset-0 bg-yellow-400 flex flex-col items-center justify-center p-4 z-50">
      <div className="absolute top-4 right-4">
        <button onClick={() => setView("form")} className="text-gray-700">
          <Settings size={24} />
        </button>
      </div>

      <div className="bg-white w-full max-w-md rounded-lg p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Name of Item</label>
            <input
              type="text"
              value={applianceName}
              onChange={(e) => setApplianceName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Day Hours</label>
            <input
              type="text"
              value={dayHours}
              onChange={(e) => setDayHours(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Night Hours</label>
            <input
              type="text"
              value={nightHours}
              onChange={(e) => setNightHours(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Wattage</label>
            <input
              type="text"
              value={wattage}
              onChange={(e) => setWattage(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => setView("landing")}
            className="bg-white border border-gray-500 text-gray-800 rounded-full px-4 py-2"
          >
            Confirm details
          </button>
        </div>
      </div>
    </div>
  );

  // Form interface (this comes from your original code)
  const renderForm = () => (
    <div className="bg-white w-full md:w-full lg:w-[434px] min-h-max lg:min-h-[523px] rounded-2xl absolute text-base py-[24px] -top-16 lg:-top-44 right-0">
      {/* Top section with icon and speech bubble */}
      <div className="flex items-center gap-3 justify-between px-4 md:px-6">
        {/* Custom icon */}
        <img src="/boosty.gif" alt="" className="w-[59.9px] h-[57.863px]" />

        {/* Speech bubble */}
        <div className="relative ml-4">
          <img
            src="/bubble.svg"
            alt=""
            className="w-max md:w-[296px] h-[78px]"
          />
          <span className="absolute inset-0 flex items-center justify-center font-bold leading-[32px] text-[12px] md:text-base">
            Wetin you wan use Solar do?
          </span>
        </div>
      </div>

      {/* Form content */}
      <form className="pt-10 px-4 md:px-6">
        <div className="bg-[#F8F6F4] border-[0.2px] border-boosty_yellow rounded-xl p-[24px]">
          {/* Radio buttons */}
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 gap-4 md:gap-0 mb-8 w-full">
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
              <span className="text-gray-800 font-medium ml-3 w-max text-sm md:text-base">
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
              <span className="text-gray-800 font-medium ml-3 w-max text-sm md:text-base">
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 text-[14.5px] md:text-base py-3 border border-[#A6A0A3] rounded-md focus:outline-none"
            />
          </div>

          {/* Budget input */}
          <div className="mb-6">
            <label className="block text-gray-800 text-lg mb-2">
              What's Your Budget? (Naira)
            </label>
            <input
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-4 text-[14.5px] md:text-base py-3 border border-[#A6A0A3] rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="my-6 h-[.5px] w-full bg-boosty_yellow" />
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={() => setView("landing")}
            className="px-[24px] py-[10px] text-boosty_yellow text-lg font-medium bg-body_text rounded-full hover:bg-boosty_green border border-boosty_green hover:border-boosty_yellow duration-150 transition-all ease-linear"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );

  // Main render method
  return (
    <>
      {view === "landing" && renderLanding()}
      {view === "voiceSelection" && renderVoiceSelection()}
      {view === "voice" && renderVoiceInterface()}
      {view === "appliance" && renderApplianceForm()}
      {view === "form" && renderForm()}
    </>
  );
};

export default SolarAssistant;
