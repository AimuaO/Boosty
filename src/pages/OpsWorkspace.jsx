import React, { useMemo, useState } from "react";
import { CheckCircle2, ChevronRight, Clock3, FileText, MessageCircle, Search, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    id: "BST-001",
    customer: "Unique Oby Integrated",
    type: "Business",
    stage: "Documents needed",
    attention: "2 items missing",
    next: "Bank statement + ID",
    waitingOn: "Customer",
    updated: "12 min ago",
  },
  {
    id: "BST-002",
    customer: "Ike Ventures",
    type: "Business",
    stage: "Boosty review",
    attention: "Review documents",
    next: "Confirm company details",
    waitingOn: "Boosty",
    updated: "1 hr ago",
  },
  {
    id: "BST-003",
    customer: "Demo Home Project",
    type: "Home",
    stage: "Financing partner review",
    attention: "No action",
    next: "Await lender feedback",
    waitingOn: "Financing partner",
    updated: "Yesterday",
  },
];

const OpsWorkspace = () => {
  const [selectedId, setSelectedId] = useState(cases[0].id);
  const [query, setQuery] = useState("");
  const selected = useMemo(
    () => cases.find((item) => item.id === selectedId) || cases[0],
    [selectedId]
  );
  const filtered = cases.filter((item) =>
    `${item.customer} ${item.id} ${item.stage}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F5F7F6] text-[#202D2D]">
      <div className="border-b border-[#DDE5E2] bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-[#7D8A87] font-bold">Boosty Operations</p>
            <h1 className="text-xl md:text-2xl font-bold mt-1">Customer projects</h1>
          </div>
          <Link to="/start" className="text-sm font-semibold text-[#202D2D]">
            Open customer view
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6 grid lg:grid-cols-[360px_1fr] gap-4">
        <aside className="bg-white rounded-2xl border border-[#DDE5E2] overflow-hidden">
          <div className="p-4 border-b border-[#E7ECEA]">
            <div className="flex items-center gap-2 rounded-xl border border-[#D5DEDB] px-3 py-2.5">
              <Search size={17} className="text-[#7A8885]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search customer or project"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          <div className="divide-y divide-[#EEF2F1]">
            {filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-4 hover:bg-[#F8FAF9] ${
                  item.id === selectedId ? "bg-[#F3F8F8]" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold">{item.customer}</p>
                    <p className="text-xs text-[#7A8885] mt-1">{item.id} · {item.type}</p>
                  </div>
                  <ChevronRight size={17} className="text-[#87938F] mt-1" />
                </div>
                <p className="text-sm mt-3">{item.stage}</p>
                <div className="mt-2 flex items-center justify-between gap-2 text-xs">
                  <span className={item.waitingOn === "Boosty" ? "text-[#B06E00] font-semibold" : "text-[#71807C]"}>
                    {item.attention}
                  </span>
                  <span className="text-[#9AA5A2]">{item.updated}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <section className="space-y-4">
          <div className="bg-white rounded-2xl border border-[#DDE5E2] p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-[#7B8986] font-bold">{selected.id}</p>
                <h2 className="text-2xl font-bold mt-1">{selected.customer}</h2>
                <p className="text-sm text-[#6F7D79] mt-1">{selected.type} customer</p>
              </div>
              <div className="rounded-full bg-[#FFF4C8] px-3 py-1.5 text-sm font-semibold w-fit">
                {selected.stage}
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-[#F7F9F8] p-4">
                <p className="text-xs text-[#7B8986]">Next action</p>
                <p className="font-semibold mt-1">{selected.next}</p>
              </div>
              <div className="rounded-xl bg-[#F7F9F8] p-4">
                <p className="text-xs text-[#7B8986]">Waiting on</p>
                <p className="font-semibold mt-1">{selected.waitingOn}</p>
              </div>
              <div className="rounded-xl bg-[#F7F9F8] p-4">
                <p className="text-xs text-[#7B8986]">Last update</p>
                <p className="font-semibold mt-1">{selected.updated}</p>
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-[1.15fr_0.85fr] gap-4">
            <div className="bg-white rounded-2xl border border-[#DDE5E2] overflow-hidden">
              <div className="p-5 border-b border-[#E7ECEA] flex items-center gap-2">
                <MessageCircle size={18} />
                <h3 className="font-bold">Customer conversation</h3>
              </div>
              <div className="p-5 space-y-4 min-h-[390px]">
                <div className="max-w-[78%] rounded-2xl bg-[#F3F8F8] px-4 py-3 text-sm">
                  I have sent my CAC certificate and bank statement. What else do you need?
                </div>
                <div className="max-w-[78%] ml-auto rounded-2xl bg-[#202D2D] text-white px-4 py-3 text-sm">
                  We have both. We still need one accepted ID and your utility bill.
                </div>
                <div className="rounded-xl border border-dashed border-[#CBD6D3] p-4 text-sm text-[#6F7D79]">
                  Human takeover, replies and AI-generated draft responses will live here.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-[#DDE5E2] p-5">
                <div className="flex items-center gap-2">
                  <FileText size={18} />
                  <h3 className="font-bold">Case summary</h3>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#75837F]">CAC certificate</span>
                    <span className="font-semibold flex items-center gap-1"><CheckCircle2 size={15}/> Received</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#75837F]">Bank statement</span>
                    <span className="font-semibold flex items-center gap-1"><CheckCircle2 size={15}/> Received</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#75837F]">Identity document</span>
                    <span className="font-semibold text-[#B06E00]">Missing</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#75837F]">Utility bill</span>
                    <span className="font-semibold text-[#B06E00]">Missing</span>
                  </div>
                </div>
                <button className="mt-5 w-full rounded-full bg-[#202D2D] text-white py-2.5 text-sm font-semibold">
                  Request missing items
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-[#DDE5E2] p-5">
                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  <h3 className="font-bold">Project timeline</h3>
                </div>
                <div className="mt-4 space-y-4 text-sm">
                  {[
                    ["Started", "Customer entered Boosty"],
                    ["Documents", "Initial documents being prepared"],
                    ["Review", "Boosty review"],
                    ["Financing", "Partner review"],
                    ["Installation", "Procurement and installation"],
                  ].map(([label, note], index) => (
                    <div key={label} className="flex gap-3">
                      <div className={`mt-1 w-3 h-3 rounded-full ${
                        index < 2 ? "bg-[#F3B921]" : "bg-[#D7E0DE]"
                      }`} />
                      <div>
                        <p className="font-semibold">{label}</p>
                        <p className="text-[#7A8885]">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#202D2D] text-white rounded-2xl p-5">
                <div className="flex items-center gap-2 text-[#F3B921]">
                  <UserRound size={18} />
                  <h3 className="font-bold">Needs human judgement</h3>
                </div>
                <p className="text-sm text-white/75 mt-3">
                  Anything affecting lender submission, customer promises or final system decisions stays reviewable by Boosty staff.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OpsWorkspace;
