import { useState } from "react";
import { Camera, MessageSquare, Tag, Check, ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { BrandIcon, brandLabel } from "@/components/alignum/BrandIcon";
import { toast } from "sonner";

type ChannelKey = "whatsapp" | "viber" | "telegram";
type PresenceKey = "instagram" | "facebook" | "gmail" | "tiktok";

const channelOptions: ChannelKey[] = ["whatsapp", "viber", "telegram"];
const presenceOptions: PresenceKey[] = ["instagram", "facebook", "gmail", "tiktok"];

const Alignum = () => {
  const [channels, setChannels] = useState<ChannelKey[]>([]);
  const [presence, setPresence] = useState<PresenceKey[]>([]);
  const [openChannels, setOpenChannels] = useState(false);
  const [openPresence, setOpenPresence] = useState(false);
  const [approval, setApproval] = useState<"ask" | "auto">("ask");
  const [initiative, setInitiative] = useState<"own" | "sent">("own");

  const toggle = <T extends string>(arr: T[], v: T, set: (a: T[]) => void) => {
    set(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch soon.", {
      description: "Alfie is getting ready for you.",
    });
  };

  return (
    <div
      className="min-h-screen font-sans antialiased text-neutral-900"
      style={{
        backgroundColor: "#fafaf7",
        // override design tokens locally so shadcn primitives feel light here
      }}
    >
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#fafaf7]/80 border-b border-neutral-200/60">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/alignum" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-lg">Alignum</span>
          </a>
          <a
            href="#start"
            className="text-sm font-medium px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
          >
            Get started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Meet Alfie — your AI assistant for hairdressers
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Do what you do <span className="italic font-serif text-neutral-700">the best,</span>
            <br />
            and we take care of <span className="text-neutral-900 underline decoration-amber-400 decoration-[6px] underline-offset-4">the rest.</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Alignum is a calm, modern AI assistant built for hairdressers.
            Send a quick message — Alfie turns it into posts, emails, and updates that keep your clients close.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 lg:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-neutral-900 text-white text-sm font-semibold flex items-center justify-center">1</span>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">All you need to do</span>
              </div>
              <h2 className="text-2xl font-semibold mb-6">Send a quick message</h2>

              <ul className="space-y-4 mb-8">
                {[
                  { icon: <Camera className="w-4 h-4" />, text: "Snap a photo of the hair and send it" },
                  { icon: <MessageSquare className="w-4 h-4" />, text: "Text: \"I'll be on holiday next week\"" },
                  { icon: <Tag className="w-4 h-4" />, text: "Text: \"3-day discount on hair coloring\"" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <span className="mt-0.5 w-7 h-7 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-neutral-800 leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-neutral-500 mb-3">From the apps you already use</p>
              <div className="flex items-center gap-3">
                {(["whatsapp", "viber", "telegram"] as const).map(b => (
                  <div key={b} className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-50 border border-neutral-200">
                    <BrandIcon name={b} size={18} />
                    <span className="text-sm font-medium">{brandLabel(b)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-neutral-900 text-white rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-amber-400 text-neutral-900 text-sm font-semibold flex items-center justify-center">2</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Alfie takes care of</span>
                </div>
                <h2 className="text-2xl font-semibold mb-6">Turning it into reach</h2>

                <ul className="space-y-4 mb-8">
                  {[
                    { brand: "instagram" as const, text: "Crafts an Instagram post from your photo" },
                    { brand: "facebook"  as const, text: "Publishes the 3-day coloring discount on Facebook" },
                    { brand: "gmail"     as const, text: "Emails your clients about your holiday next week" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                      <span className="mt-0.5 w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                        <BrandIcon name={item.brand} size={16} />
                      </span>
                      <span className="leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-neutral-400 mb-3">Published where your clients are</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {(["instagram", "facebook", "gmail", "tiktok"] as const).map(b => (
                    <div key={b} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">
                      <BrandIcon name={b} size={18} />
                      <span className="text-sm font-medium">{brandLabel(b)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="start" className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">Set up Alfie</h2>
            <p className="text-neutral-600">A few quick choices and you're ready.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-neutral-200/80 p-8 lg:p-10 shadow-sm space-y-8">
            {/* I use */}
            <MultiSelect
              label="I use"
              placeholder="Pick your messaging apps"
              options={channelOptions}
              selected={channels}
              open={openChannels}
              setOpen={setOpenChannels}
              onToggle={(v) => toggle(channels, v, setChannels)}
            />

            {/* I want to be present on */}
            <MultiSelect
              label="I want to be present on"
              placeholder="Pick your channels"
              options={presenceOptions}
              selected={presence}
              open={openPresence}
              setOpen={setOpenPresence}
              onToggle={(v) => toggle(presence, v, setPresence)}
            />

            {/* Approval */}
            <RadioGroup<"ask" | "auto">
              label="Approval"
              value={approval}
              onChange={setApproval}
              options={[
                { value: "ask",  title: "Always ask for approval", desc: "Alfie checks with you before posting." },
                { value: "auto", title: "Be autonomous",           desc: "Alfie publishes without asking." },
              ]}
            />

            {/* Initiative */}
            <RadioGroup<"own" | "sent">
              label="Initiative"
              value={initiative}
              onChange={setInitiative}
              options={[
                { value: "own",  title: "Have own initiatives",  desc: "Alfie suggests posts proactively." },
                { value: "sent", title: "Only use sent content", desc: "Alfie only acts on what you send." },
              ]}
            />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-neutral-900 text-white text-base font-medium hover:bg-neutral-800 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              Let's go <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200/60 py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-neutral-900">Alignum</span>
            <span className="text-neutral-400">— Alfie, your AI assistant</span>
          </div>
          <span>© {new Date().getFullYear()} Alignum. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

/* ---------- Subcomponents ---------- */

interface MultiSelectProps<T extends string> {
  label: string;
  placeholder: string;
  options: T[];
  selected: T[];
  open: boolean;
  setOpen: (v: boolean) => void;
  onToggle: (v: T) => void;
}

function MultiSelect<T extends string>({ label, placeholder, options, selected, open, setOpen, onToggle }: MultiSelectProps<T>) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-2">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors text-left"
        >
          <div className="flex items-center gap-2 flex-wrap min-h-[24px]">
            {selected.length === 0 ? (
              <span className="text-neutral-400">{placeholder}</span>
            ) : (
              selected.map(s => (
                <span key={s} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-sm font-medium">
                  <BrandIcon name={s as any} size={14} />
                  {brandLabel(s)}
                </span>
              ))
            )}
          </div>
          <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="absolute z-10 mt-2 w-full rounded-2xl border border-neutral-200 bg-white shadow-lg p-2">
            {options.map(opt => {
              const isSel = selected.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => onToggle(opt)}
                  className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <BrandIcon name={opt as any} size={18} />
                    <span className="font-medium">{brandLabel(opt)}</span>
                  </span>
                  <span className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${isSel ? "bg-neutral-900 border-neutral-900" : "border-neutral-300"}`}>
                    {isSel && <Check className="w-3 h-3 text-white" />}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

interface RadioOption<T extends string> { value: T; title: string; desc: string; }
interface RadioGroupProps<T extends string> {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: RadioOption<T>[];
}

function RadioGroup<T extends string>({ label, value, onChange, options }: RadioGroupProps<T>) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-2">{label}</label>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map(opt => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`text-left p-4 rounded-2xl border transition-all ${
                active
                  ? "border-neutral-900 bg-neutral-50 ring-2 ring-neutral-900/5"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${active ? "border-neutral-900" : "border-neutral-300"}`}>
                  {active && <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />}
                </span>
                <div>
                  <div className="font-medium text-neutral-900">{opt.title}</div>
                  <div className="text-sm text-neutral-500 mt-0.5">{opt.desc}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Alignum;
