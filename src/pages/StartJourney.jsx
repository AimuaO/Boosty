import React, { useMemo, useState } from "react";
import { ArrowLeft, Camera, Check, Mic, Send, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const languageOptions = [
  { id: "english", label: "Nigerian English" },
  { id: "mixed", label: "English + Pidgin" },
  { id: "pidgin", label: "Pidgin" },
];

const prompts = {
  english: {
    hero: "Skip the forms. Tell me what you need, send what you have, and I’ll help you get everything ready.",
    firstQuestion: "Are you coming directly to Boosty, or did an installer refer you?",
    secondQuestion: "Got it. Is this for your home or business?",
    afterReply: "Got it. I’ll organise the details as we go.",
    placeholder: "Type here, or tap the mic and talk…",
  },
  mixed: {
    hero: "No long form wahala. Tell me wetin you need, send wetin you have, and I’ll help you get everything ready.",
    firstQuestion: "You come directly to Boosty, or na installer refer you?",
    secondQuestion: "Got it. Na for your home or business?",
    afterReply: "Got it. I’ll arrange everything as we go.",
    placeholder: "Type here, or tap the mic make we talk…",
  },
  pidgin: {
    hero: "No long form wahala. Tell me wetin you need, send wetin you get, make I help you prepare everything.",
    firstQuestion: "You come directly to Boosty, or na installer send you?",
    secondQuestion: "I hear you. Na for house or business?",
    afterReply: "I hear you. I go arrange everything as we dey go.",
    placeholder: "Type here, or tap the mic make we talk…",
  },
};

const StartJourney = () => {
  const [language, setLanguage] = useState("mixed");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState("source");
  const [messages, setMessages] = useState(() => [
    { role: "agent", text: prompts.mixed.firstQuestion },
  ]);
  const [details, setDetails] = useState({
    source: "",
    customerType: "",
    documentsReceived: 0,
  });

  const copy = useMemo(() => prompts[language], [language]);

  const progress =
    details.customerType ? 35 : details.source ? 25 : details.documentsReceived > 0 ? 22 : 18;

  const changeLanguage = (next) => {
    setLanguage(next);
    setStep("source");
    setDetails({ source: "", customerType: "", documentsReceived: 0 });
    setMessages([{ role: "agent", text: prompts[next].firstQuestion }]);
  };

  const sendMessage = () => {
    const clean = message.trim();
    if (!clean) return;

    const lower = clean.toLowerCase();
    const nextMessages = [...messages, { role: "user", text: clean }];

    if (step === "source") {
      const source =
        lower.includes("installer") || lower.includes("refer")
          ? "Installer referral"
          : "Direct to Boosty";

      setDetails((current) => ({ ...current, source }));
      setStep("customerType");
      setMessages([
        ...nextMessages,
        { role: "agent", text: copy.secondQuestion },
      ]);
    } else if (step === "customerType") {
      const customerType =
        lower.includes("shop") || lower.includes("business") || lower.includes("office")
          ? "Business"
          : lower.includes("home") || lower.includes("house")
          ? "Home"
          : "";

      setDetails((current) => ({
        ...current,
        customerType: customerType || current.customerType,
      }));
      setStep("continue");
      setMessages([
        ...nextMessages,
        { role: "agent", text: copy.afterReply },
      ]);
    } else {
      setMessages([
        ...nextMessages,
        { role: "agent", text: copy.afterReply },
      ]);
    }

    setMessage("");
  };

  const simulateDocument = () => {
    setMessages((current) => [
      ...current,
      { role: "user", text: "📎 Document sent" },
      {
        role: "agent",
        text:
          language === "english"
            ? "Nice. I’ve got it. I’ll pull out the useful details so you don’t have to type them again."
            : language === "pidgin"
            ? "Nice. I don get am. I go pull the useful details so you no go type am again."
            : "Nice. I’ve got it. I’ll pull out the useful details so you no need type them again.",
      },
    ]);

    setDetails((current) => ({
      ...current,
      documentsReceived: current.documentsReceived + 1,
    }));
  };

  return (
    <main className="min-h-screen bg-[#F6F8F6] pt-24 pb-10">
      <div className="max-w-3xl mx-auto px-[18px] md:px-[32px]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#202D2D] text-sm font-semibold mb-4"
        >
          <ArrowLeft size={17} />
          Back
        </Link>

        <section className="bg-white rounded-[24px] border border-[#DCE6E3] shadow-sm overflow-hidden">
          <div className="px-4 pt-4 md:px-6 md:pt-6">
            <div className="rounded-2xl bg-[#FFF8E2] px-4 py-4">
              <h1 className="font-bold text-[22px] md:text-[26px] leading-tight text-[#202D2D]">
                {copy.hero}
              </h1>
            </div>

            <div className="flex gap-2 overflow-x-auto py-4">
              {languageOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => changeLanguage(option.id)}
                  className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold border ${
                    language === option.id
                      ? "bg-[#202D2D] text-white border-[#202D2D]"
                      : "bg-white text-[#202D2D] border-[#C7D3D0]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 pb-4 md:px-6 md:pb-6">
            <div className="rounded-[20px] bg-[#F3F8F8] p-4 min-h-[330px] flex flex-col">
              <div className="space-y-3 flex-1">
                {messages.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    {item.role === "agent" && (
                      <div className="w-8 h-8 overflow-hidden shrink-0">
                        <img src="/boosty.gif" alt="" className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div
                      className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm ${
                        item.role === "agent"
                          ? "bg-white text-[#202D2D] rounded-tl-sm"
                          : "bg-[#202D2D] text-white ml-auto rounded-tr-sm"
                      }`}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <button
                    type="button"
                    className="rounded-xl bg-[#F3B921] text-[#202D2D] px-3 py-3 font-semibold flex items-center justify-center gap-2 text-sm"
                  >
                    <Mic size={18} />
                    Talk
                  </button>
                  <button
                    type="button"
                    onClick={simulateDocument}
                    className="rounded-xl bg-white border border-[#C8D7D3] text-[#202D2D] px-3 py-3 font-semibold flex items-center justify-center gap-2 text-sm"
                  >
                    <Camera size={18} />
                    Photo
                  </button>
                  <button
                    type="button"
                    onClick={simulateDocument}
                    className="rounded-xl bg-white border border-[#C8D7D3] text-[#202D2D] px-3 py-3 font-semibold flex items-center justify-center gap-2 text-sm"
                  >
                    <Upload size={18} />
                    File
                  </button>
                </div>

                <div className="flex gap-2 items-end">
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        sendMessage();
                      }
                    }}
                    rows={2}
                    placeholder={copy.placeholder}
                    className="flex-1 resize-none rounded-2xl border border-[#C8D7D3] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F3B921]"
                  />
                  <button
                    type="button"
                    onClick={sendMessage}
                    className="shrink-0 w-12 h-12 rounded-full bg-[#202D2D] text-white flex items-center justify-center"
                    aria-label="Send"
                  >
                    <Send size={19} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-[#202D2D] text-white p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-[0.1em]">
                    Your progress
                  </p>
                  <p className="font-bold text-lg mt-1">Getting things ready</p>
                </div>
                <span className="text-[#F3B921] font-bold">{progress}%</span>
              </div>

              <div className="h-2 rounded-full bg-white/15 mt-4 overflow-hidden">
                <div
                  className="h-full bg-[#F3B921] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#F3B921]" />
                  <span>Journey started</span>
                </div>
                {details.source && (
                  <div className="flex items-center gap-2">
                    <Check size={15} className="text-[#F3B921]" />
                    <span>{details.source}</span>
                  </div>
                )}
                {details.customerType && (
                  <div className="flex items-center gap-2">
                    <Check size={15} className="text-[#F3B921]" />
                    <span>{details.customerType}</span>
                  </div>
                )}
                {details.documentsReceived > 0 && (
                  <div className="flex items-center gap-2">
                    <Check size={15} className="text-[#F3B921]" />
                    <span>
                      {details.documentsReceived} document
                      {details.documentsReceived > 1 ? "s" : ""} received
                    </span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-[11px] leading-4 text-gray-500 mt-4">
              We’ll only ask for documents when they’re needed. Boosty helps organise the application before it goes for partner review.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default StartJourney;
