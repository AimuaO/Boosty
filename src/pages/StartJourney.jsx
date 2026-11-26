import React, { useMemo, useState } from "react";
import { ArrowLeft, Camera, Check, FileText, Mic, Send, Sparkles, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const languageOptions = [
  { id: "english", label: "Nigerian English" },
  { id: "mixed", label: "English + Pidgin" },
  { id: "pidgin", label: "Pidgin" },
];

const prompts = {
  english: {
    title: "Tell me what you need. I’ll help with the rest.",
    intro: "You can talk, type or send documents. No long forms.",
    placeholder: "Type here, or tap the mic and talk…",
    greeting: "Hi 👋🏾 I’ll be your Boosty Agent. Is this for your home or business?",
    afterReply: "Got it. You can keep talking normally. I’ll organise the details as we go.",
    sendDoc: "Just send what you have. I’ll sort it and tell you what’s still missing.",
  },
  mixed: {
    title: "Tell me wetin you need. I’ll help with the rest.",
    intro: "Talk, type or send documents. No long form wahala.",
    placeholder: "Type here, or tap the mic make we talk…",
    greeting: "Hi 👋🏾 I’ll be your Boosty Agent. Na for your home or business?",
    afterReply: "Got it. Just keep talking normally. I’ll arrange everything as we go.",
    sendDoc: "Send wetin you get first. I’ll sort am and tell you the small thing wey remain.",
  },
  pidgin: {
    title: "Tell me wetin you need. Make I help you handle the rest.",
    intro: "You fit talk, type or send document. No long form wahala.",
    placeholder: "Type here, or tap the mic make we talk…",
    greeting: "Hi 👋🏾 I go be your Boosty Agent. Na for house or business?",
    afterReply: "I hear you. Just dey talk normally. I go arrange everything as we dey go.",
    sendDoc: "Send wetin you get first. I go sort am and tell you wetin remain.",
  },
};

const StartJourney = () => {
  const [language, setLanguage] = useState("mixed");
  const [source, setSource] = useState("direct");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(() => [
    { role: "agent", text: prompts.mixed.greeting },
  ]);
  const [details, setDetails] = useState({
    customerType: "",
    financing: "Interested",
    documentsReceived: 0,
  });

  const copy = useMemo(() => prompts[language], [language]);

  const changeLanguage = (next) => {
    setLanguage(next);
    setMessages([{ role: "agent", text: prompts[next].greeting }]);
  };

  const sendMessage = () => {
    const clean = message.trim();
    if (!clean) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: clean },
      { role: "agent", text: copy.afterReply },
    ]);

    const lower = clean.toLowerCase();
    setDetails((current) => ({
      ...current,
      customerType:
        lower.includes("shop") || lower.includes("business") || lower.includes("office")
          ? "Business"
          : lower.includes("home") || lower.includes("house")
          ? "Home"
          : current.customerType,
    }));

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
            ? "Nice, I’ve got it. I’ll check what information I can pull from it so you don’t have to type it again."
            : language === "pidgin"
            ? "Nice, I don get am. I go check wetin I fit collect from inside so you no go type am again."
            : "Nice, I’ve got it. I’ll pull out the useful details so you no need type them again.",
      },
    ]);

    setDetails((current) => ({
      ...current,
      documentsReceived: current.documentsReceived + 1,
    }));
  };

  const progress = details.customerType ? 35 : 18;

  return (
    <main className="min-h-screen bg-[#F6F8F6] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-[20px] md:px-[40px]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#202D2D] text-sm font-semibold mb-6"
        >
          <ArrowLeft size={17} />
          Back
        </Link>

        <section className="bg-white rounded-[28px] overflow-hidden border border-[#DCE6E3] shadow-sm">
          <div className="bg-[#F3B921] px-5 py-6 md:px-8 md:py-7 flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden shrink-0">
              <img src="/boosty.gif" alt="Boosty Agent" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#202D2D]/70">Boosty Agent</p>
              <h1 className="text-[28px] md:text-[38px] leading-tight font-bold text-[#202D2D] mt-1">
                {copy.title}
              </h1>
              <p className="mt-2 text-[#202D2D]/80 text-sm md:text-base">{copy.intro}</p>
            </div>
          </div>

          <div className="p-5 md:p-8">
            <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
              {languageOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => changeLanguage(option.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                    language === option.id
                      ? "bg-[#202D2D] text-white border-[#202D2D]"
                      : "bg-white text-[#202D2D] border-[#B8C9C5]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-3 mb-5">
              <button
                onClick={() => setSource("direct")}
                className={`text-left rounded-2xl border p-4 ${
                  source === "direct"
                    ? "border-[#202D2D] bg-[#F3F8F8]"
                    : "border-[#DCE6E3]"
                }`}
              >
                <span className="font-bold block text-[#202D2D]">I need solar</span>
                <span className="text-sm text-gray-600">Start here</span>
              </button>
              <button
                onClick={() => setSource("installer")}
                className={`text-left rounded-2xl border p-4 ${
                  source === "installer"
                    ? "border-[#202D2D] bg-[#F3F8F8]"
                    : "border-[#DCE6E3]"
                }`}
              >
                <span className="font-bold block text-[#202D2D]">An installer sent me</span>
                <span className="text-sm text-gray-600">Continue with a quote or proposal</span>
              </button>
            </div>

            <div className="rounded-[24px] bg-[#F3F8F8] p-4 md:p-5 min-h-[330px] flex flex-col">
              <div className="space-y-3 flex-1">
                {messages.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    {item.role === "agent" && (
                      <div className="w-8 h-8 rounded-full bg-white overflow-hidden shrink-0 border border-[#DCE6E3]">
                        <img src="/boosty.gif" alt="" className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div
                      className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm md:text-base ${
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
                    className="rounded-2xl bg-[#F3B921] text-[#202D2D] px-3 py-3 font-semibold flex items-center justify-center gap-2 text-sm"
                  >
                    <Mic size={18} />
                    Talk
                  </button>
                  <button
                    type="button"
                    onClick={simulateDocument}
                    className="rounded-2xl bg-white border border-[#C8D7D3] text-[#202D2D] px-3 py-3 font-semibold flex items-center justify-center gap-2 text-sm"
                  >
                    <Camera size={18} />
                    Photo
                  </button>
                  <button
                    type="button"
                    onClick={simulateDocument}
                    className="rounded-2xl bg-white border border-[#C8D7D3] text-[#202D2D] px-3 py-3 font-semibold flex items-center justify-center gap-2 text-sm"
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
                    className="flex-1 resize-none rounded-2xl border border-[#C8D7D3] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F3B921]"
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

            <div className="mt-5 grid lg:grid-cols-[1fr_0.95fr] gap-4">
              <div className="rounded-2xl border border-[#DCE6E3] p-5 bg-white">
                <div className="flex items-start gap-3">
                  <Sparkles size={20} className="text-[#202D2D] mt-0.5" />
                  <div>
                    <h2 className="font-bold text-[#202D2D]">You don’t need to organise anything first.</h2>
                    <p className="text-sm text-gray-600 mt-1">{copy.sendDoc}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#F3F8F8] px-3 py-2 text-xs font-semibold text-[#202D2D]">CAC documents</span>
                  <span className="rounded-full bg-[#F3F8F8] px-3 py-2 text-xs font-semibold text-[#202D2D]">Bank statements</span>
                  <span className="rounded-full bg-[#F3F8F8] px-3 py-2 text-xs font-semibold text-[#202D2D]">ID</span>
                  <span className="rounded-full bg-[#F3F8F8] px-3 py-2 text-xs font-semibold text-[#202D2D]">Utility bill</span>
                </div>
              </div>

              <div className="rounded-2xl bg-[#202D2D] text-white p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-[0.1em]">Your progress</p>
                    <p className="font-bold text-lg mt-1">Getting things ready</p>
                  </div>
                  <span className="text-[#F3B921] font-bold">{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/15 mt-4 overflow-hidden">
                  <div className="h-full bg-[#F3B921] rounded-full" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Check size={15} className="text-[#F3B921]" />
                    <span>{source === "installer" ? "Installer referral noted" : "Journey started"}</span>
                  </div>
                  {details.customerType && (
                    <div className="flex items-center gap-2">
                      <Check size={15} className="text-[#F3B921]" />
                      <span>{details.customerType} customer</span>
                    </div>
                  )}
                  {details.documentsReceived > 0 && (
                    <div className="flex items-center gap-2">
                      <Check size={15} className="text-[#F3B921]" />
                      <span>{details.documentsReceived} document{details.documentsReceived > 1 ? "s" : ""} received</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-[#FFF8E2] border border-[#F3B921]/30 p-5 flex items-start gap-3">
              <FileText size={20} className="text-[#202D2D] mt-0.5" />
              <div>
                <h3 className="font-bold text-[#202D2D]">When we need proof of identity</h3>
                <p className="text-sm text-gray-700 mt-1">
                  We’ll ask for one accepted ID when it becomes relevant. For the current FCMB process, that can be NIN, international passport, driver’s licence or voter’s card.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-5">
              Boosty helps prepare and organise your application. Final financing approval and final system design remain subject to partner and human review.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default StartJourney;
