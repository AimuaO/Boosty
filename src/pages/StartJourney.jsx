import React, { useMemo, useRef, useState } from "react";
import { ArrowLeft, Camera, Check, ChevronDown, Mic, Paperclip, Send, Upload, X } from "lucide-react";
import { Link } from "react-router-dom";

const languageOptions = [
  { id: "english", label: "Nigerian English", short: "English" },
  { id: "mixed", label: "English + Pidgin", short: "English + Pidgin" },
  { id: "pidgin", label: "Pidgin", short: "Pidgin" },
];

const prompts = {
  english: {
    firstQuestion: "Are you coming directly to Boosty, or did an installer refer you?",
    secondQuestion: "Got it. Is this for your home or business?",
    afterReply: "Got it. I’ll organise the details as we go.",
    documentReply: "Nice. I’ve got it. I’ll pull out the useful details so you don’t have to type them again.",
    placeholder: "Message Boosty…",
  },
  mixed: {
    firstQuestion: "You come directly to Boosty, or na installer refer you?",
    secondQuestion: "Got it. Na for your home or business?",
    afterReply: "Got it. I’ll arrange everything as we go.",
    documentReply: "Nice. I’ve got it. I’ll pull out the useful details so you no need type them again.",
    placeholder: "Message Boosty…",
  },
  pidgin: {
    firstQuestion: "You come directly to Boosty, or na installer send you?",
    secondQuestion: "I hear you. Na for house or business?",
    afterReply: "I hear you. I go arrange everything as we dey go.",
    documentReply: "Nice. I don get am. I go pull the useful details so you no go type am again.",
    placeholder: "Message Boosty…",
  },
};

const StartJourney = () => {
  const [language, setLanguage] = useState("mixed");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [attachOpen, setAttachOpen] = useState(false);
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

  const textareaRef = useRef(null);
  const copy = useMemo(() => prompts[language], [language]);
  const activeLanguage = languageOptions.find((option) => option.id === language);
  const progress = details.customerType ? 35 : details.source ? 25 : details.documentsReceived > 0 ? 22 : 18;

  const changeLanguage = (next) => {
    setLanguage(next);
    setLanguageOpen(false);
    setStep("source");
    setDetails({ source: "", customerType: "", documentsReceived: 0 });
    setMessages([{ role: "agent", text: prompts[next].firstQuestion }]);
  };

  const resizeTextarea = (element) => {
    element.style.height = "auto";
    element.style.height = `${Math.min(element.scrollHeight, 132)}px`;
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
      setMessages([...nextMessages, { role: "agent", text: copy.secondQuestion }]);
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
      setMessages([...nextMessages, { role: "agent", text: copy.afterReply }]);
    } else {
      setMessages([...nextMessages, { role: "agent", text: copy.afterReply }]);
    }

    setMessage("");
    requestAnimationFrame(() => {
      if (textareaRef.current) textareaRef.current.style.height = "48px";
    });
  };

  const simulateDocument = (type) => {
    setAttachOpen(false);
    setMessages((current) => [
      ...current,
      { role: "user", text: type === "photo" ? "📷 Photo sent" : "📎 File sent" },
      { role: "agent", text: copy.documentReply },
    ]);

    setDetails((current) => ({
      ...current,
      documentsReceived: current.documentsReceived + 1,
    }));
  };

  return (
    <main className="h-[100dvh] bg-[#F7F8F6] overflow-hidden">
      <div className="max-w-3xl mx-auto h-full flex flex-col">
        <div className="sticky top-0 z-30 bg-[#F7F8F6] border-b border-[#E3E9E7]">
          <div className="px-4 md:px-6 pt-3 pb-2 flex items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[#202D2D] text-sm font-semibold"
          >
            <ArrowLeft size={17} />
            Back
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((open) => !open)}
              className="inline-flex items-center gap-1.5 text-sm text-[#52615F] hover:text-[#202D2D] px-2 py-1.5 rounded-lg"
            >
              {activeLanguage.short}
              <ChevronDown size={15} />
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-10 z-30 w-48 rounded-xl border border-[#DCE6E3] bg-white shadow-lg p-1.5">
                {languageOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => changeLanguage(option.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                      language === option.id
                        ? "bg-[#F3F8F8] font-semibold text-[#202D2D]"
                        : "text-[#52615F] hover:bg-[#F7F8F6]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="px-4 md:px-6 pb-2 bg-[#F7F8F6]">
          <div className="flex items-center gap-3">
            <span className="text-[12px] text-[#74817F] whitespace-nowrap">Getting things ready</span>
            <div className="h-1 flex-1 rounded-full bg-[#DDE4E2] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#F3B921] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
              <span className="text-[12px] font-semibold text-[#52615F]">{progress}%</span>
          </div>
        </div>

        <section className="flex-1 min-h-0 bg-white md:mx-4 md:rounded-[22px] md:border md:border-[#E3E9E7] overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto px-4 md:px-6 pt-6 pb-4 space-y-5">
              {messages.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 ${
                    item.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {item.role === "agent" && (
                    <div className="w-7 h-7 shrink-0 mt-1 overflow-hidden">
                      <img src="/boosty.gif" alt="" className="w-full h-full object-contain" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-[20px] px-4 py-3 text-[15px] leading-6 break-words whitespace-pre-wrap ${
                      item.role === "agent"
                        ? "bg-[#F3F8F8] text-[#202D2D] rounded-tl-md"
                        : "bg-[#202D2D] text-white rounded-tr-md"
                    }`}
                  >
                    {item.text}
                  </div>
                </div>
              ))}

              {details.documentsReceived > 0 && (
                <div className="pt-2 text-xs text-[#74817F] flex items-center gap-1.5">
                  <Check size={13} />
                  {details.documentsReceived} document
                  {details.documentsReceived > 1 ? "s" : ""} received
                </div>
              )}
            </div>

            <div className="sticky bottom-0 z-30 relative border-t border-[#E3E9E7] bg-white p-3 md:p-4">
              {attachOpen && (
                <div className="absolute left-3 bottom-[78px] z-20 w-44 rounded-2xl bg-white border border-[#DCE6E3] shadow-xl p-2">
                  <button
                    type="button"
                    onClick={() => simulateDocument("photo")}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F7F8F6] text-sm text-[#202D2D]"
                  >
                    <Camera size={18} />
                    Take a photo
                  </button>
                  <button
                    type="button"
                    onClick={() => simulateDocument("file")}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F7F8F6] text-sm text-[#202D2D]"
                  >
                    <Upload size={18} />
                    Upload a file
                  </button>
                </div>
              )}

              <div className="flex items-end gap-2 rounded-[24px] border border-[#CCD7D4] bg-[#FAFBFA] p-2 pl-2.5">
                <button
                  type="button"
                  onClick={() => setAttachOpen((open) => !open)}
                  className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-[#52615F] hover:bg-[#EEF3F1]"
                  aria-label="Add attachment"
                >
                  {attachOpen ? <X size={19} /> : <Paperclip size={19} />}
                </button>

                <textarea
                  ref={textareaRef}
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                    resizeTextarea(event.target);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                  rows={1}
                  placeholder={copy.placeholder}
                  className="min-h-[40px] max-h-[132px] flex-1 resize-none bg-transparent px-1 py-2 text-[15px] leading-6 text-[#202D2D] placeholder:text-[#97A19F] focus:outline-none overflow-y-auto"
                />

                <button
                  type="button"
                  className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-[#52615F] hover:bg-[#EEF3F1]"
                  aria-label="Talk"
                >
                  <Mic size={19} />
                </button>

                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={!message.trim()}
                  className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                    message.trim()
                      ? "bg-[#202D2D] text-white"
                      : "bg-[#E6EBE9] text-[#9CA7A4]"
                  }`}
                  aria-label="Send"
                >
                  <Send size={17} />
                </button>
              </div>

              <p className="text-[11px] text-[#8A9592] mt-2 px-1">
                Send what you have. We’ll only ask for what’s needed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default StartJourney;
