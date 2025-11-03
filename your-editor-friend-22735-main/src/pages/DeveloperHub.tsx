import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Bot,
  Code2,
  Download,
  Search,
  Copy,
  Check,
  BookOpen,
  GitBranch,
  Sparkles,
  Keyboard,
  PlugZap,
  CloudLightning,
  Wrench,
  FileCode2,
  Boxes,
  Flame,
  Gauge,
  Rocket,
  Wand2,
  RefreshCw,
  BookText,
  BarChart3,
  ShieldCheck,
  Hammer,
} from "lucide-react";

/**
 * Valyd — Developer Hub (Pull, not Push)
 * Single-file React + Tailwind page designed to make developers want to build immediately.
 * Philosophy: code-first, frictionless sandbox key, zero sales forms, everything copyable.
 * Replace placeholders with your real endpoints when ready.
 */
export default function DeveloperHub() {
  const [apiKey, setApiKey] = useState<string>("");
  const [copied, setCopied] = useState<string>("");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"quickstart" | "playground" | "templates" | "packages" | "changelog">("quickstart");
  const [req, setReq] = useState({
    method: "POST",
    url: "https://api.valyd.sbx/auth/sessions",
    body: JSON.stringify({ redirect_uri: "https://localhost:5173/callback" }, null, 2),
  });
  const [resp, setResp] = useState<string>("");

  useEffect(() => {
    // Mint a local sandbox key (client-side mock). Replace with real key issuance.
    const k = "valyd_sbx_" + Math.random().toString(36).slice(2, 10) + "_" + Math.random().toString(36).slice(2, 10);
    setApiKey(k);
  }, []);

  function copy(text: string, tag?: string) {
    navigator.clipboard.writeText(text);
    setCopied(tag || text);
    setTimeout(() => setCopied(""), 1200);
  }

  async function runPlayground() {
    // Mock a latency + response. Swap with fetch(...) when backend is ready.
    setResp("⌛ Running...");
    await new Promise((r) => setTimeout(r, 600));
    setResp(
      JSON.stringify(
        {
          id: "sess_abc123",
          status: "pending_user",
          next: { redirect: "https://valyd.sbx/handshake?token=..." },
        },
        null,
        2
      )
    );
  }

  const curl = useMemo(() => {
    return [
      `curl -X POST \\\n  '${req.url}' \\\n  -H 'Authorization: Bearer ${apiKey || "VALYD_API_KEY"}' \\\n  -H 'Content-Type: application/json' \\\n  -d '${req.body.replace(/\n/g, "").replace(/\s{2,}/g, " ")}'`,
    ].join("\n");
  }, [req, apiKey]);

  const nodeSnippet = `import fetch from 'node-fetch';\n\nconst res = await fetch('${req.url}', {\n  method: '${req.method}',\n  headers: {\n    Authorization: 'Bearer ${apiKey || "VALYD_API_KEY"}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify(${JSON.stringify(JSON.parse(req.body), null, 2)})\n});\nconsole.log(await res.json());`;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Command Palette */}
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} onNavigate={setActiveTab} />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6" />
            <span className="font-semibold">Valyd — Developer</span>
          </div>
          <div className="flex items-center gap-3">
            <kbd className="hidden md:inline-flex items-center gap-1 text-xs text-white/60 border border-white/15 rounded-md px-2 py-1">
              <Keyboard className="w-3 h-3" /> Ctrl / ⌘ K
            </kbd>
            <button
              onClick={() => setPaletteOpen(true)}
              className="text-sm bg-white/10 hover:bg-white/15 rounded-xl px-3 py-2 inline-flex items-center gap-2"
            >
              <Search className="w-4 h-4" /> Command Palette
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(62,121,250,0.25),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Open the hood. Start building in ~60 seconds.</h1>
              <p className="text-white/70 mt-4">
                Instant sandbox key. Copyable curl. Working examples. No sales forms. Your data, your agent — just code.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                <Pill icon={ShieldCheck} label="Privacy-first" />
                <Pill icon={PlugZap} label="Drop-in SSO" />
                <Pill icon={Flame} label="ZK-ready proofs" />
              </div>
            </div>
            <div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2"><Terminal className="w-4 h-4"/><span className="font-medium">Your sandbox key</span></div>
                  <button onClick={() => copy(apiKey, "key")} className="text-sm inline-flex items-center gap-1 text-blue-400 hover:text-blue-300">
                    {copied === "key" ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4"/>} {copied === "key" ? "Copied" : "Copy"}
                  </button>
                </div>
                <code className="block bg-neutral-900/70 border border-white/10 rounded-xl p-3 text-xs truncate">{apiKey || "valyd_sbx_xxx"}</code>
                <div className="mt-4 text-xs text-white/60">Set <span className="text-white">VALYD_API_KEY</span> in your env — free sandbox, no credit card.</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10 border-b border-white/10 flex flex-wrap gap-2">
            <TabButton active={activeTab === "quickstart"} onClick={() => setActiveTab("quickstart")} icon={Rocket} label="Quickstart" />
            <TabButton active={activeTab === "playground"} onClick={() => setActiveTab("playground")} icon={Wrench} label="Playground" />
            <TabButton active={activeTab === "templates"} onClick={() => setActiveTab("templates")} icon={Boxes} label="Templates" />
            <TabButton active={activeTab === "packages"} onClick={() => setActiveTab("packages")} icon={Download} label="Packages" />
            <TabButton active={activeTab === "changelog"} onClick={() => setActiveTab("changelog")} icon={RefreshCw} label="Changelog & Status" />
          </div>

          <div className="mt-6">
            {activeTab === "quickstart" && <Quickstart apiKey={apiKey} curl={curl} nodeSnippet={nodeSnippet} onCopy={copy} copied={copied} />}
            {activeTab === "playground" && <Playground req={req} setReq={setReq} resp={resp} run={runPlayground} curl={curl} onCopy={copy} copied={copied} />}
            {activeTab === "templates" && <Templates />}
            {activeTab === "packages" && <Packages onCopy={copy} copied={copied} />}
            {activeTab === "changelog" && <Changelog />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Pill({ icon: Icon, label }: any) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-sm text-white/80">
      <Icon className="w-4 h-4" /> {label}
    </div>
  );
}

function TabButton({ active, onClick, icon: Icon, label }: any) {
  return (
    <button onClick={onClick} className={`inline-flex items-center gap-2 px-3 py-2 text-sm rounded-t-xl border-b-2 ${active ? "border-blue-500 text-white" : "border-transparent text-white/70 hover:text-white"}`}>
      <Icon className="w-4 h-4" /> {label}
    </button>
  );
}

function Quickstart({ apiKey, curl, nodeSnippet, onCopy, copied }: any) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <Card title="1) Auth Session — curl" subtitle="Kick off a user session with the agent handshake.">
        <CodeBlock code={curl} onCopy={() => onCopy(curl, "curl")} copied={copied === "curl"} />
      </Card>
      <Card title="2) Node Example" subtitle="Same call in JavaScript/Node.">
        <CodeBlock code={nodeSnippet} onCopy={() => onCopy(nodeSnippet, "node")} copied={copied === "node"} />
      </Card>
      <Card title="3) Verify Proof (JWT)" subtitle="Server-side verification placeholder.">
        <CodeBlock
          code={`// pseudo-code\nimport { verify } from '@valyd/sdk';\nconst ok = await verify(jwt, { audience: 'your-app' });\nif(!ok) throw new Error('invalid proof');`}
          onCopy={() => onCopy("verify(jwt)", "verify")}
          copied={copied === "verify"}
        />
      </Card>
      <Card title="Docs" subtitle="Reference, guides, and examples.">
        <ul className="text-sm text-white/80 space-y-2">
          <li>• Quickstart: Auth → Proofs → Webhooks</li>
          <li>• Proof Catalog: KYC, KYB, Age 18+, Accredited Investor</li>
          <li>• Best Practices: threat models, PII minimization, ZK flows</li>
        </ul>
      </Card>
    </div>
  );
}

function Playground({ req, setReq, resp, run, curl, onCopy, copied }: any) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card title="Request Builder" subtitle="Edit and run a sandbox API call.">
        <div className="grid gap-3 text-sm">
          <div className="grid md:grid-cols-3 gap-3">
            <select value={req.method} onChange={(e) => setReq({ ...req, method: e.target.value })} className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2">
              <option>POST</option>
              <option>GET</option>
              <option>DELETE</option>
            </select>
            <input value={req.url} onChange={(e) => setReq({ ...req, url: e.target.value })} className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 md:col-span-2" />
          </div>
          <textarea value={req.body} onChange={(e) => setReq({ ...req, body: e.target.value })} className="min-h-[160px] bg-neutral-900 border border-white/10 rounded-xl p-3 font-mono" />
          <div className="flex items-center gap-2">
            <button onClick={run} className="bg-blue-600 hover:bg-blue-700 rounded-xl px-3 py-2 text-sm inline-flex items-center gap-2"><CloudLightning className="w-4 h-4"/> Run</button>
            <button onClick={() => onCopy(curl, "curl2")} className="border border-white/20 hover:bg-white/10 rounded-xl px-3 py-2 text-sm inline-flex items-center gap-2">
              {copied === "curl2" ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4"/>} Copy curl
            </button>
          </div>
        </div>
      </Card>
      <Card title="Response" subtitle="Sandboxed mock output.">
        <pre className="bg-neutral-900 border border-white/10 rounded-xl p-3 text-xs overflow-auto min-h-[240px]">{resp || "// run a request to see output"}</pre>
      </Card>
    </div>
  );
}

function Templates() {
  const cards = [
    { title: "Passwordless SSO", desc: "Face-bound agent with device attestation.", tag: "Auth", icon: Rocket },
    { title: "Age 18+ (ZK)", desc: "Zero-knowledge age gate for content access.", tag: "Proof", icon: ShieldCheck },
    { title: "Creator Verification", desc: "Issue creator badges for raw video uploads.", tag: "Media", icon: Flame },
    { title: "Accredited Investor", desc: "Broker-dealer compatible proof flow.", tag: "Finance", icon: BarChart3 },
  ];
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((c, i) => (
        <TemplateCard key={i} {...c} />
      ))}
      <TemplateCard title="Request a Template" desc="Tell us what you need; we'll scaffold it." tag="Custom" icon={Wand2} />
    </div>
  );
}

function Packages({ onCopy, copied }: any) {
  const pkgs = [
    { name: "JavaScript / TypeScript", install: "npm i @valyd/sdk@next", file: "valyd.config.ts" },
    { name: "Python", install: "pip install valyd-sdk --pre", file: "valyd.toml" },
    { name: "Kotlin", install: "implementation(\"com.valyd:sdk:0.1.0-beta\")", file: "valyd.gradle" },
    { name: "CLI", install: "curl -fsSL get.valyd.sh | bash", file: "~/.valyd/config" },
  ];
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {pkgs.map((p, i) => (
        <Card key={i} title={p.name} subtitle={p.file}>
          <CodeInline code={p.install} onCopy={() => onCopy(p.install, `pkg${i}`)} copied={copied === `pkg${i}`} />
          <div className="text-xs text-white/60 mt-2">See examples for framework adapters and type-safe clients.</div>
        </Card>
      ))}
    </div>
  );
}

function Changelog() {
  const items = [
    { date: "2025-11-01", title: "SDK TS 0.6.0-next", text: "Added Proof.verify(jwt, {audience}) and webhook HMAC rotation." },
    { date: "2025-10-25", title: "Python SDK 0.1.0b6", text: "Introduced async client and retries with jitter." },
    { date: "2025-10-12", title: "CLI v0.3.2", text: "`valyd dev` tunnel for local webhook testing." },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((i, idx) => (
        <Card key={idx} title={`${i.title}`} subtitle={i.date}>
          <p className="text-sm text-white/80">{i.text}</p>
          <div className="flex items-center gap-2 mt-3 text-xs text-white/60">
            <GitBranch className="w-3 h-3"/> View on GitHub · <a className="text-blue-400 hover:text-blue-300" href="#">releases</a>
          </div>
        </Card>
      ))}
      <Card title="Status" subtitle="Uptime & incidents">
        <ul className="text-sm text-white/80 space-y-2">
          <li>• API: <span className="text-green-400">Operational</span></li>
          <li>• Webhooks: <span className="text-green-400">Operational</span></li>
          <li>• Issuer nodes: <span className="text-green-400">Operational</span></li>
        </ul>
      </Card>
      <Card title="RFCs & Roadmap" subtitle="Propose changes, track features">
        <ul className="text-sm text-white/80 space-y-2">
          <li>• RFC-12: ZK Range Proofs for Age</li>
          <li>• RFC-19: Multi-tenant org scoping</li>
          <li>• Roadmap: KYB GA, Agent Extensibility, Network Explorer v1</li>
        </ul>
      </Card>
    </div>
  );
}

function CommandPalette({ open, onClose, onNavigate }: any) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open ? onClose() : onNavigate && onNavigate("quickstart");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onNavigate]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const items = [
    { label: "Quickstart", tab: "quickstart" },
    { label: "Playground", tab: "playground" },
    { label: "Templates", tab: "templates" },
    { label: "Packages", tab: "packages" },
    { label: "Changelog & Status", tab: "changelog" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/60 grid place-items-center p-6">
          <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 12, opacity: 0 }} className="w-full max-w-xl bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl">
            <div className="p-3 border-b border-white/10 flex items-center gap-2">
              <Search className="w-4 h-4 text-white/70" />
              <input ref={inputRef} placeholder="Type to jump (Quickstart, Playground, Packages, …)" className="w-full bg-transparent outline-none text-sm" />
              <button onClick={onClose} className="text-white/60 hover:text-white text-sm">esc</button>
            </div>
            <div className="p-2">
              {items.map((it) => (
                <button key={it.tab} onClick={() => (onNavigate(it.tab), onClose())} className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4"/> {it.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TemplateCard({ title, desc, tag, icon: Icon }: any) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div className="text-xs text-white/60">{tag}</div>
        <Icon className="w-4 h-4 text-white/70" />
      </div>
      <div className="mt-2 font-medium">{title}</div>
      <p className="text-sm text-white/70 mt-1">{desc}</p>
      <div className="mt-3 flex items-center gap-2 text-xs">
        <a className="text-blue-400 hover:text-blue-300" href="#">Open template</a>
        <span className="text-white/40">·</span>
        <a className="text-blue-400 hover:text-blue-300" href="#">Source</a>
      </div>
    </div>
  );
}

function CodeBlock({ code, onCopy, copied }: any) {
  return (
    <div className="relative">
      <pre className="bg-neutral-900/80 border border-white/10 rounded-xl p-4 text-xs overflow-auto min-h-[140px]">
        <code>{code}</code>
      </pre>
      <button onClick={onCopy} className="absolute top-2 right-2 text-xs bg-white/10 hover:bg-white/15 rounded-lg px-2 py-1 inline-flex items-center gap-1">
        {copied ? <Check className="w-3 h-3"/> : <Copy className="w-3 h-3"/>} {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function CodeInline({ code, onCopy, copied }: any) {
  return (
    <div className="flex items-center justify-between bg-neutral-900/70 border border-white/10 rounded-xl p-3 text-xs">
      <code className="truncate">{code}</code>
      <button onClick={onCopy} className="text-xs bg-white/10 hover:bg-white/15 rounded-lg px-2 py-1 inline-flex items-center gap-1">
        {copied ? <Check className="w-3 h-3"/> : <Copy className="w-3 h-3"/>} {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function Card({ title, subtitle, children }: any) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium leading-tight">{title}</div>
          {subtitle && <div className="text-xs text-white/60">{subtitle}</div>}
        </div>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-sm text-white/70">
        <div>
          <div className="font-medium text-white">Valyd</div>
          <p className="text-white/60 mt-2">Built for developers. Copy-first docs, frictionless sandbox, no pushy forms.</p>
        </div>
        <div>
          <div className="text-white">Links</div>
          <ul className="space-y-1 mt-2">
            <li><a className="hover:text-white" href="#">GitHub</a></li>
            <li><a className="hover:text-white" href="#">Docs</a></li>
            <li><a className="hover:text-white" href="#">Status</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white">Stay in flow</div>
          <p className="text-white/60 mt-2">Subscribe to changelog via RSS or GitHub releases. No emails required.</p>
        </div>
      </div>
    </footer>
  );
}
