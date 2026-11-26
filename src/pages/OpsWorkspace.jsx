import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  MessageCircle,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  Upload,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import BoostyButton from "../components/ui/BoostyButton";

const cases = [
  { id:"BST-001", customer:"Unique Oby Integrated", type:"Business", stage:"Documents needed", attention:"2 items missing", next:"Bank statement + ID", waitingOn:"Customer", updated:"12 min ago", priority:"attention" },
  { id:"BST-002", customer:"Ike Ventures", type:"Business", stage:"Boosty review", attention:"Review documents", next:"Confirm company details", waitingOn:"Boosty", updated:"1 hr ago", priority:"attention" },
  { id:"BST-003", customer:"Demo Home Project", type:"Home", stage:"Financing partner review", attention:"No action", next:"Await lender feedback", waitingOn:"Financing partner", updated:"Yesterday", priority:"waiting" },
  { id:"BST-004", customer:"Akinola Stores", type:"Business", stage:"Documents needed", attention:"1 item missing", next:"Utility bill", waitingOn:"Customer", updated:"Yesterday", priority:"attention" },
  { id:"BST-005", customer:"Dayo Residence", type:"Home", stage:"Boosty review", attention:"Ready for review", next:"Confirm extracted details", waitingOn:"Boosty", updated:"2 days ago", priority:"attention" },
  { id:"BST-006", customer:"Westgate Pharmacy", type:"Business", stage:"Financing partner review", attention:"No action", next:"Await offer letter", waitingOn:"Financing partner", updated:"2 days ago", priority:"waiting" },
  { id:"BST-007", customer:"Mira Foods", type:"Business", stage:"Installation", attention:"Schedule install", next:"Confirm installation date", waitingOn:"Boosty", updated:"3 days ago", priority:"attention" },
  { id:"BST-008", customer:"Efe Residence", type:"Home", stage:"Installed", attention:"No action", next:"After-sales support", waitingOn:"None", updated:"5 days ago", priority:"done" },
  { id:"BST-009", customer:"Tobi Ventures", type:"Business", stage:"Documents needed", attention:"3 items missing", next:"CAC + ID + utility bill", waitingOn:"Customer", updated:"6 days ago", priority:"attention" },
  { id:"BST-010", customer:"Greenline Clinic", type:"Business", stage:"Boosty review", attention:"Review lender package", next:"Approve submission", waitingOn:"Boosty", updated:"1 week ago", priority:"attention" },
  { id:"BST-011", customer:"Ada Residence", type:"Home", stage:"Financing partner review", attention:"No action", next:"Await due diligence", waitingOn:"Financing partner", updated:"1 week ago", priority:"waiting" },
  { id:"BST-012", customer:"Kingsway Mini Mart", type:"Business", stage:"Installed", attention:"No action", next:"Maintenance tracking", waitingOn:"None", updated:"2 weeks ago", priority:"done" },
];

const filters = [
  { id:"attention", label:"Needs attention" },
  { id:"all", label:"All active" },
  { id:"waiting", label:"Waiting" },
  { id:"done", label:"Installed" },
];

const mobileTabs = [
  { id:"overview", label:"Overview" },
  { id:"documents", label:"Documents" },
  { id:"chat", label:"Chat" },
  { id:"timeline", label:"Timeline" },
];

const OpsWorkspace = () => {
  const [selectedId, setSelectedId] = useState(cases[0].id);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("attention");
  const [humanMode, setHumanMode] = useState(false);
  const [reply, setReply] = useState("");
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState("overview");
  const [staffUploadOpen, setStaffUploadOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [newProjectStep, setNewProjectStep] = useState("details");
  const [newProject, setNewProject] = useState({
    customerName: "",
    phone: "",
    email: "",
    type: "Business",
  });

  const selected = useMemo(
    () => cases.find((item) => item.id === selectedId) || cases[0],
    [selectedId]
  );

  const filtered = cases.filter((item) => {
    const matchesQuery = `${item.customer} ${item.id} ${item.stage}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter =
      filter === "all"
        ? item.stage !== "Installed"
        : filter === "attention"
        ? item.priority === "attention"
        : filter === "waiting"
        ? item.priority === "waiting"
        : item.priority === "done";
    return matchesQuery && matchesFilter;
  });

  const counts = {
    attention: cases.filter((item) => item.priority === "attention").length,
    all: cases.filter((item) => item.stage !== "Installed").length,
    waiting: cases.filter((item) => item.priority === "waiting").length,
    done: cases.filter((item) => item.priority === "done").length,
  };

  const openCase = (id) => {
    setSelectedId(id);
    setMobileTab("overview");
    setMobileDetailOpen(true);
  };

  const Queue = ({ mobile = false }) => (
    <aside className={`bg-white border border-[#DDE5E2] overflow-hidden flex flex-col ${
      mobile ? "rounded-none border-x-0 border-b-0 h-full" : "rounded-2xl lg:sticky lg:top-[72px] lg:h-[calc(100vh-92px)]"
    }`}>
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

        <div className="mt-3 relative">
          <div className="flex gap-2 overflow-x-auto pb-2 pr-8 snap-x">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`shrink-0 snap-start rounded-full px-4 py-2 text-xs font-bold border transition-colors ${
                  filter === item.id
                    ? "bg-[#202D2D] text-white border-[#202D2D]"
                    : "bg-white text-[#52615F] border-[#D5DEDB]"
                }`}
              >
                {item.label} {counts[item.id]}
              </button>
            ))}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>

      <div className="divide-y divide-[#EEF2F1] overflow-y-auto flex-1">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => mobile ? openCase(item.id) : setSelectedId(item.id)}
            className={`w-full text-left p-4 hover:bg-[#F8FAF9] ${
              item.id === selectedId && !mobile ? "bg-[#F3F8F8]" : ""
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
  );

  const Overview = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-[#DDE5E2] p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-[#7B8986] font-bold">{selected.id}</p>
            <h2 className="text-xl font-bold mt-1">{selected.customer}</h2>
            <p className="text-sm text-[#6F7D79] mt-1">{selected.type} customer</p>
          </div>
          <div className="rounded-full bg-[#FFF4C8] px-3 py-1.5 text-xs font-semibold">{selected.stage}</div>
        </div>

        <div className="mt-5 space-y-3">
          <div className="rounded-xl bg-[#F7F9F8] p-4">
            <p className="text-xs text-[#7B8986]">Next action</p>
            <p className="font-semibold mt-1">{selected.next}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#F7F9F8] p-4">
              <p className="text-xs text-[#7B8986]">Waiting on</p>
              <p className="font-semibold mt-1 text-sm">{selected.waitingOn}</p>
            </div>
            <div className="rounded-xl bg-[#F7F9F8] p-4">
              <p className="text-xs text-[#7B8986]">Last update</p>
              <p className="font-semibold mt-1 text-sm">{selected.updated}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#202D2D] text-white rounded-2xl p-5">
        <div className="flex items-center gap-2 text-[#F3B921]">
          <UserRound size={18} />
          <h3 className="font-bold">Needs human judgement</h3>
        </div>
        <p className="text-sm text-white/75 mt-3">
          If the AI cannot safely complete a step, this case appears in Needs attention with a short summary of what Funmi needs to decide.
        </p>
      </div>
    </div>
  );

  const Documents = () => (
    <div className="bg-white rounded-2xl border border-[#DDE5E2] p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <FileText size={18} />
          <h3 className="font-bold">Documents</h3>
        </div>
        <BoostyButton
          type="button"
          onClick={() => setStaffUploadOpen((value) => !value)}
          variant="primary"
          size="sm"
        >
          Add for customer
        </BoostyButton>
      </div>

      {staffUploadOpen && (
        <div className="mt-4 rounded-xl bg-[#F7F9F8] p-3 space-y-2">
          <button className="w-full flex items-center gap-3 rounded-lg bg-white border border-[#DDE5E2] px-3 py-3 text-left text-sm">
            <Camera size={17} />
            Take document photo
          </button>
          <button className="w-full flex items-center gap-3 rounded-lg bg-white border border-[#DDE5E2] px-3 py-3 text-left text-sm">
            <Upload size={17} />
            Choose document from device
          </button>
          <p className="text-xs text-[#75837F] px-1">
            Saved as uploaded by Boosty staff on behalf of the customer.
          </p>
        </div>
      )}

      <div className="mt-4 space-y-3 text-sm">
        <div className="flex items-center justify-between gap-4"><span className="text-[#75837F]">CAC certificate</span><span className="font-semibold flex items-center gap-1"><CheckCircle2 size={15}/> Received</span></div>
        <div className="flex items-center justify-between gap-4"><span className="text-[#75837F]">Bank statement</span><span className="font-semibold flex items-center gap-1"><CheckCircle2 size={15}/> Received</span></div>
        <div className="flex items-center justify-between gap-4"><span className="text-[#75837F]">Identity document</span><span className="font-semibold text-[#B06E00]">Missing</span></div>
        <div className="flex items-center justify-between gap-4"><span className="text-[#75837F]">Utility bill</span><span className="font-semibold text-[#B06E00]">Missing</span></div>
      </div>

      <BoostyButton className="mt-5 w-full" variant="secondary" size="sm">
        Ask customer for missing items
      </BoostyButton>
    </div>
  );

  const Chat = () => (
    <div className="bg-white rounded-2xl border border-[#DDE5E2] overflow-hidden">
      <div className="p-4 border-b border-[#E7ECEA] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MessageCircle size={18} />
          <h3 className="font-bold">Conversation</h3>
        </div>
        <button
          type="button"
          onClick={() => setHumanMode((value) => !value)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
            humanMode ? "bg-[#202D2D] text-white" : "bg-[#F3F6F5] text-[#52615F]"
          }`}
        >
          {humanMode ? "You’re in chat" : "Take over"}
        </button>
      </div>

      <div className="p-4 space-y-4 min-h-[300px]">
        <div className="max-w-[82%] rounded-2xl bg-[#F3F8F8] px-4 py-3 text-sm">
          I have sent my CAC certificate and bank statement. What else do you need?
        </div>
        <div className="max-w-[82%] ml-auto rounded-2xl bg-[#202D2D] text-white px-4 py-3 text-sm">
          We have both. We still need one accepted ID and your utility bill.
        </div>

        {!humanMode ? (
          <div className="rounded-xl border border-dashed border-[#CBD6D3] p-4 text-sm text-[#6F7D79]">
            AI handles routine replies. If judgement is needed, Funmi can take over with the full conversation and case summary.
          </div>
        ) : (
          <div className="rounded-xl bg-[#FFF8E2] p-3 text-sm text-[#5E5231]">
            Human mode is active. The customer sees your replies in this same conversation. AI can suggest drafts but will not send them automatically.
          </div>
        )}
      </div>

      {humanMode && (
        <div className="border-t border-[#E7ECEA] p-4">
          <textarea
            value={reply}
            onChange={(event) => setReply(event.target.value)}
            rows={3}
            placeholder="Reply to customer…"
            className="w-full resize-none rounded-xl border border-[#D5DEDB] px-3 py-2.5 text-sm outline-none"
          />
          <button
            type="button"
            onClick={() => setReply("")}
            className="mt-2 w-full rounded-full bg-[#202D2D] text-white py-2.5 text-sm font-semibold"
          >
            Send reply
          </button>
        </div>
      )}
    </div>
  );

  const Timeline = () => (
    <div className="bg-white rounded-2xl border border-[#DDE5E2] p-5">
      <div className="flex items-center gap-2">
        <Clock3 size={18} />
        <h3 className="font-bold">Project timeline</h3>
      </div>
      <div className="mt-4 space-y-4 text-sm">
        {[
          ["Started","Customer entered Boosty"],
          ["Documents","Initial documents being prepared"],
          ["Review","Boosty review"],
          ["Financing","Partner review"],
          ["Installation","Procurement and installation"],
        ].map(([label,note],index)=>(
          <div key={label} className="flex gap-3">
            <div className={`mt-1 w-3 h-3 rounded-full ${index < 2 ? "bg-[#F3B921]" : "bg-[#D7E0DE]"}`} />
            <div>
              <p className="font-semibold">{label}</p>
              <p className="text-[#7A8885]">{note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#F5F7F6] text-[#202D2D]">
      <div className="border-b border-[#DDE5E2] bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto h-14 px-4 md:px-6 flex items-center justify-between gap-3">
          <h1 className="text-lg font-bold">Projects</h1>
          <div className="flex items-center gap-2">
            <BoostyButton
              type="button"
              size="icon"
              variant="primary"
              onClick={() => {
                setCreateOpen(true);
                setNewProjectStep("details");
              }}
              aria-label="Create new project"
              title="Create new project"
            >
              <Plus size={18} />
            </BoostyButton>
            <Link to="/start" className="hidden sm:inline text-sm font-semibold text-[#202D2D] px-2">
              Customer view
            </Link>
            <div className="hidden md:flex items-center gap-2 text-sm text-[#667572] px-2">
              <ShieldCheck size={16} />
              Funmi
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden h-[calc(100dvh-56px)]">
        {!mobileDetailOpen ? (
          <Queue mobile />
        ) : (
          <div className="h-full flex flex-col">
            <div className="bg-white border-b border-[#DDE5E2] px-4 py-3 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setMobileDetailOpen(false)}
                className="inline-flex items-center gap-1.5 font-semibold text-sm"
              >
                <ArrowLeft size={17} />
                Projects
              </button>
              <span className="text-xs text-[#7A8885]">{selected.id}</span>
            </div>

            <div className="bg-white border-b border-[#DDE5E2] px-3 py-2 relative">
              <div className="flex gap-2 overflow-x-auto pr-8 pb-1">
                {mobileTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setMobileTab(tab.id)}
                    className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold border ${
                      mobileTab === tab.id
                        ? "bg-[#202D2D] text-white border-[#202D2D]"
                        : "bg-white text-[#52615F] border-[#D5DEDB]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {mobileTab === "overview" && <Overview />}
              {mobileTab === "documents" && <Documents />}
              {mobileTab === "chat" && <Chat />}
              {mobileTab === "timeline" && <Timeline />}
            </div>
          </div>
        )}
      </div>

      {createOpen && (
        <div className="fixed inset-0 z-50 bg-black/35 flex items-end sm:items-center justify-center">
          <div className="w-full sm:max-w-lg bg-white rounded-t-[24px] sm:rounded-[24px] shadow-2xl max-h-[90dvh] overflow-y-auto">
            <div className="px-5 py-4 border-b border-[#E7ECEA] flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-[#7B8986] font-bold">New Boosty project</p>
                <h2 className="text-xl font-bold mt-1">
                  {newProjectStep === "details" ? "Start for a customer" : "Invite customer to continue"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setCreateOpen(false)}
                className="text-sm font-semibold text-[#667572]"
              >
                Close
              </button>
            </div>

            {newProjectStep === "details" ? (
              <div className="p-5 space-y-4">
                <div>
                  <label className="text-sm font-semibold block mb-1.5">Customer or business name</label>
                  <input
                    value={newProject.customerName}
                    onChange={(e) => setNewProject((p) => ({ ...p, customerName: e.target.value }))}
                    placeholder="e.g. Akinola Stores"
                    className="w-full rounded-xl border border-[#D5DEDB] px-3 py-3 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {["Business","Home"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setNewProject((p) => ({ ...p, type }))}
                      className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold ${
                        newProject.type === type ? "border-[#202D2D] bg-[#F3F8F8]" : "border-[#DDE5E2]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="text-sm font-semibold block mb-1.5">Phone number</label>
                  <input
                    value={newProject.phone}
                    onChange={(e) => setNewProject((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="+234…"
                    className="w-full rounded-xl border border-[#D5DEDB] px-3 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold block mb-1.5">Email <span className="font-normal text-[#8A9693]">(optional)</span></label>
                  <input
                    value={newProject.email}
                    onChange={(e) => setNewProject((p) => ({ ...p, email: e.target.value }))}
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-[#D5DEDB] px-3 py-3 outline-none"
                  />
                </div>

                <div className="rounded-xl bg-[#F7F9F8] p-4 text-sm text-[#61706D]">
                  Funmi can start the case now, add documents or notes on the customer’s behalf, and invite them to take over when they are ready.
                </div>

                <BoostyButton
                  type="button"
                  onClick={() => setNewProjectStep("invite")}
                  disabled={!newProject.customerName || !newProject.phone}
                  className={`w-full ${!(newProject.customerName && newProject.phone) ? "opacity-45 cursor-not-allowed" : ""}`}
                >
                  Create project
                </BoostyButton>
              </div>
            ) : (
              <div className="p-5 space-y-4">
                <div className="rounded-2xl bg-[#F3F8F8] p-4">
                  <p className="font-bold">{newProject.customerName}</p>
                  <p className="text-sm text-[#6F7D79] mt-1">Project created by Boosty staff</p>
                </div>

                <div className="rounded-2xl border border-[#DDE5E2] p-4">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5" />
                    <div>
                      <p className="font-semibold">Customer confirms their contact</p>
                      <p className="text-sm text-[#6F7D79] mt-1">
                        Send a secure link or OTP to {newProject.phone}. The customer confirms the number, creates access, and continues the same project without starting over.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <BoostyButton className="w-full">
                    Send invite by SMS
                  </BoostyButton>
                  {newProject.email && (
                    <BoostyButton className="w-full" variant="secondary">
                      Send invite by email
                    </BoostyButton>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setCreateOpen(false);
                      setNewProject({ customerName:"", phone:"", email:"", type:"Business" });
                    }}
                    className="rounded-full text-[#5F6E6B] py-2.5 text-sm font-semibold"
                  >
                    I’ll invite them later
                  </button>
                </div>

                <p className="text-xs text-[#7A8885]">
                  Until the customer confirms access, the project remains staff-created. Boosty can still add documents, notes and progress updates on their behalf.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="hidden lg:grid max-w-7xl mx-auto p-6 grid-cols-[360px_1fr] gap-4">
        <Queue />

        <section className="space-y-4 min-w-0">
          <Overview />

          <div className="grid xl:grid-cols-[1.15fr_0.85fr] gap-4">
            <Chat />
            <div className="space-y-4">
              <Documents />
              <Timeline />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OpsWorkspace;
