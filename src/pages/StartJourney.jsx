import React, { useMemo, useState } from "react";
import { ArrowLeft, AudioLines, Check, Mic, Send, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const languageOptions = [
  { id: "english", label: "Nigerian English" },
  { id: "mixed", label: "English + Pidgin" },
  { id: "pidgin", label: "Pidgin" },
];

const prompts = {
  english: {
    eyebrow: "Boosty Agent",
    title: "Tell us what you need. We’ll help you get the case ready.",
    intro:
      "Start by talking or typing. You don’t need to know the technical details yet.",
    placeholder: "For example: I need solar for my shop and I want to finance it…",
    greeting:
      "Hi. I’ll be your Boosty Agent. Is this for your home or business?",
  },
  mixed: {
    eyebrow: "Boosty Agent",
    title: "Tell us wetin you need. We’ll help you get everything ready.",
    intro:
      "Talk or type however feels natural. You no need know all the technical details yet.",
    placeholder: "For example: I need solar for my shop and I wan finance am…",
    greeting:
      "Hi. I’ll be your Boosty Agent. Na for your home or business?",
  },
  pidgin: {
    eyebrow: "Boosty Agent",
    title: "Tell us wetin you need. Make we help you prepare everything.",
    intro:
      "You fit talk or type. No worry if you no know the technical side yet.",
    placeholder: "For example: I need sola for my shop and I wan pay small-small…",
    greeting:
      "Hi. I go be your Boosty Agent. Na for house or business?",
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
    location: "",
    financing: "Interested",
    installerQuote: false,
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
      {
        role: "agent",
        text:
          language === "english"
            ? "Got it. Next I’ll ask a few short questions so we can prepare your solar financing case."
            : language === "pidgin"
            ? "I hear you. I go ask you small small questions so we fit prepare your solar financing case."
            : "Got it. I’ll ask you a few short questions make we prepare your solar financing case properly.",
      },
    ]);

    const lower = clean.toLowerCase();
    setDetails((current) => ({
      ...current,
      customerType:
        lower.includes("shop") || lower.includes("business")
          ? "Business"
          : lower.includes("home") || lower.includes("house")
          ? "Home"
          : current.customerType,
      installerQuote:
        lower.includes("quote") || lower.includes("installer")
          ? true
          : current.installerQuote,
    }));

    setMessage("");
  };

  const checklist = [
    { label: "Basic project information", done: Boolean(details.customerType) },
    { label: "Location", done: Boolean(details.location) },
    { label: "Energy needs / current power situation", done: false },
    { label: "Installer quote or system proposal", done: details.installerQuote },
    { label: "Financing documents", done: false },
  ];

  return (
    <main className="min-h-screen bg-[#F6F8F6] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-[24px] md:px-[48px]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#202D2D] text-sm font-semibold mb-8"
        >
          <ArrowLeft size={17} />
          Back to Boosty
        </Link>

        <div className="grid lg:grid-cols-[1.45fr_0.75fr] gap-6 items-start">
          <section className="bg-white rounded-[24px] border border-[#DCE6E3] overflow-hidden">
            <div className="bg-[#F3B921] p-6 md:p-8">
              <p className="font-bold text-sm uppercase tracking-[0.12em] text-[#202D2D]/70">
                {copy.eyebrow}
              </p>
              <h1 className="text-[32px] md:text-[44px] leading-[1.08] font-bold text-[#202D2D] mt-3 max-w-2xl">
                {copy.title}
              </h1>
              <p className="mt-4 text-[#202D2D] max-w-xl">{copy.intro}</p>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {languageOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => changeLanguage(option.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                      language === option.id
                        ? "bg-[#202D2D] text-white border-[#202D2D]"
                        : "bg-white text-[#202D2D] border-[#B8C9C5] hover:border-[#202D2D]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-[#202D2D] mb-2">
                  How did you get here?
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setSource("direct")}
                    className={`text-left rounded-xl border p-4 ${
                      source === "direct"
                        ? "border-[#202D2D] bg-[#F3F8F8]"
                        : "border-[#DCE6E3]"
                    }`}
                  >
                    <span className="font-bold block">I need solar</span>
                    <span className="text-sm text-gray-600">Start a new Boosty case</span>
                  </button>
                  <button
                    onClick={() => setSource("installer")}
                    className={`text-left rounded-xl border p-4 ${
                      source === "installer"
                        ? "border-[#202D2D] bg-[#F3F8F8]"
                        : "border-[#DCE6E3]"
                    }`}
                  >
                    <span className="font-bold block">An installer referred me</span>
                    <span className="text-sm text-gray-600">Continue with an existing quote</span>
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-[#F3F8F8] p-4 md:p-5 min-h-[290px] flex flex-col">
                <div className="space-y-3 flex-1">
                  {messages.map((item, index) => (
                    <div
                      key={index}
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm md:text-base ${
                        item.role === "agent"
                          ? "bg-white text-[#202D2D] rounded-tl-sm"
                          : "bg-[#202D2D] text-white ml-auto rounded-tr-sm"
                      }`}
                    >
                      {item.text}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex gap-2 items-end">
                  <button
                    type="button"
                    className="shrink-0 w-12 h-12 rounded-full bg-[#F3B921] text-[#202D2D] flex items-center justify-center"
                    aria-label="Talk to Boosty Agent"
                    title="Voice connection will be added in the next build slice"
                  >
                    <Mic size={21} />
                  </button>
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
          </section>

          <aside className="space-y-4">
            <div className="bg-[#202D2D] text-white rounded-[24px] p-6">
              <div className="flex items-center gap-2 text-[#F3B921] mb-3">
                <AudioLines size={20} />
                <span className="font-bold">Your case</span>
              </div>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-white/60">Journey</dt>
                  <dd className="font-semibold mt-1">
                    {source === "installer" ? "Installer referred" : "Direct customer"}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/60">Customer type</dt>
                  <dd className="font-semibold mt-1">
                    {details.customerType || "Not captured yet"}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/60">Financing</dt>
                  <dd className="font-semibold mt-1">{details.financing}</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white rounded-[24px] border border-[#DCE6E3] p-6">
              <h2 className="font-bold text-xl text-[#202D2D]">What we still need</h2>
              <p className="text-sm text-gray-600 mt-1 mb-5">
                We’ll keep this short and update it as you talk.
              </p>
              <div className="space-y-3">
                {checklist.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center border ${
                        item.done
                          ? "bg-[#202D2D] border-[#202D2D] text-white"
                          : "border-[#B8C9C5] text-transparent"
                      }`}
                    >
                      <Check size={13} />
                    </span>
                    <span className={item.done ? "text-gray-500 line-through" : "text-[#202D2D]"}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-full border-2 border-[#202D2D] px-4 py-3 font-bold text-[#202D2D] flex items-center justify-center gap-2 hover:bg-[#F3F8F8]"
              >
                <Upload size={18} />
                Add a document
              </button>
            </div>

            <p className="text-xs text-gray-500 px-2">
              Boosty helps prepare your case. Final system design, financing approval and installation remain subject to human and partner review.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default StartJourney;
