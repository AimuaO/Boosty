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
    welcome: "Hi 👋🏾 I’m your Boosty Agent.",
    reassure: "No forms to fill. Just tell me what you need and I’ll guide you one step at a time.",
    question: "Is this for your home or business?",
    placeholder: "Type here, or tap the mic and talk…",
    afterReply: "Got it. I’ll organise the details as we go.",
  },
  mixed: {
    welcome: "Hi 👋🏾 I’m your Boosty Agent.",
    reassure: "No long form wahala. Just tell me wetin you need and I’ll guide you one step at a time.",
    question: "Na for your home or business?",
    placeholder: "Type here, or tap the mic make we talk…",
    afterReply: "Got it. I’ll arrange everything as we go.",
  },
  pidgin: {
    welcome: "Hi 👋🏾 I go be your Boosty Agent.",
    reassure: "No long form wahala. Just tell me wetin you need. I go guide you small small.",
    question: "Na for house or business?",
    placeholder: "Type here, or tap the mic make we talk…",
    afterReply: "I hear you. I go arrange everything as we dey go.",
  },
};

const StartJourney = () => {
  const [language, setLanguage] = useState("mixed");
  const [source, setSource] = useState("direct");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(() => [
    { role: "agent", text: prompts.mixed.question },
  ]);
  const [details, setDetails] = useState({
    customerType: "",
    documentsReceived: 0,
  });

  const copy = useMemo(() => prompts[language], [language]);
  const progress = details.customerType ? 35 : 18;

  const changeLanguage = (next) => {
    setLanguage(next);
    setMessages([{ role: "agent", text: prompts[next].question }]);
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
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FFF4C8] overflow-hidden shrink-0">
                <img src="/boosty.gif" alt="Boosty Agent" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-[#202D2D]">Boosty Agent</p>
                <p className="text-sm text-gray-600 truncate">Talk, type or send what you have.</p>
              </div>
              <div className="ml-auto text-right shrink-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-400">Progress</p>
                <p className="text-sm font-bold text-[#202D2D]">{progress}% ready</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-[#FFF8E2] px-4 py-4">
              <p className="font-bold text-[20px] leading-tight text-[#202D2D]">{copy.welcome}</p>
              <p className="mt-1.5 text-[#202D2D]/80 text-sm leading-5">{copy.reassure}</p>
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

            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => setSource("direct")}
                className={`rounded-xl px-4 py-3 text-left border ${
                  source === "direct"
                    ? "border-[#202D2D] bg-[#F3F8F8]"
                    : "border-[#DCE6E3]"
                }`}
              >
                <span className="block font-bold text-[#202D2D] text-sm">I need solar</span>
              </button>
              <button
                onClick={() => setSource("installer")}
                className={`rounded-xl px-4 py-3 text-left border ${
                  source === "installer"
                    ? "border-[#202D2D] bg-[#F3F8F8]"
                    : "border-[#DCE6E3]"
                }`}
              >
                <span className="block font-bold text-[#202D2D] text-sm">Installer sent me</span>
              </button>
            </div>
          </div>

          <div className="px-4 pb-4 md:px-6 md:pb-6">
            <div className="rounded-[20px] bg-[#F3F8F8] p-4 min-h-[300px] flex flex-col">
              <div className="space-y-3 flex-1">
                {messages.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    {item.role === "agent" && (
                      <div className="w-7 h-7 rounded-full bg-white overflow-hidden shrink-0 border border-[#DCE6E3]">
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

              <div className="mt-4">
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

            {(details.customerType || details.documentsReceived > 0) && (
              <div className="mt-4 rounded-2xl border border-[#DCE6E3] p-4">
                <p className="font-bold text-[#202D2D] text-sm">I’ve got this so far</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-[#F3F8F8] px-3 py-2 text-[#202D2D]">
                    {source === "installer" ? "Installer referral" : "New solar request"}
                  </span>
                  {details.customerType && (
                    <span className="rounded-full bg-[#F3F8F8] px-3 py-2 text-[#202D2D] flex items-center gap-1">
                      <Check size={13} />
                      {details.customerType}
                    </span>
                  )}
                  {details.documentsReceived > 0 && (
                    <span className="rounded-full bg-[#F3F8F8] px-3 py-2 text-[#202D2D] flex items-center gap-1">
                      <Check size={13} />
                      {details.documentsReceived} document{details.documentsReceived > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </div>
            )}

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
