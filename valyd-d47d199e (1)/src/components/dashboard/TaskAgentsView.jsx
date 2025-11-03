import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calculator, Plane, DollarSign, FileText, Bot, Sparkles, CheckCircle2, Plus, Lock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TaskAgentsView() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleJoinWaitlist = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const agentTemplates = [
    {
      id: "tax",
      icon: Calculator,
      name: "Tax Agent",
      description: "Automatically organize receipts, track deductions, and prepare tax filings using your verified financial credentials.",
      credentials: ["Bank statements", "Income records", "Business expenses"],
      color: "from-blue-400 to-cyan-500",
      popular: true,
    },
    {
      id: "travel",
      icon: Plane,
      name: "Travel Agent",
      description: "Book flights, hotels, and manage itineraries using your verified passport and payment credentials.",
      credentials: ["Passport", "Payment methods", "Loyalty programs"],
      color: "from-violet-400 to-purple-500",
    },
    {
      id: "finance",
      icon: DollarSign,
      name: "Finance Agent",
      description: "Track spending, manage budgets, and optimize investments with access to your verified financial data.",
      credentials: ["Bank accounts", "Investment portfolios", "Credit cards"],
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: "legal",
      icon: FileText,
      name: "Legal Assistant",
      description: "Review contracts, manage legal documents, and ensure compliance using your verified credentials.",
      credentials: ["Legal documents", "Identity verification", "Business records"],
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Task Agents</h2>
          <p className="text-gray-400">AI that works on your behalf</p>
        </div>
      </div>

      {/* Hero Section */}
      <Card className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 border-blue-400/30 backdrop-blur-xl">
        <CardContent className="p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center"
            >
              <Bot className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automate Your Life with Secure AI Agents
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Create AI agents that complete tasks on your behalf using your verified credentials. From filing taxes to booking travel—all automated, all secure.
            </p>

            {/* Email Waitlist Form */}
            {!submitted ? (
              <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 whitespace-nowrap"
                  >
                    Join Waitlist
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Be first to access Task Agents when they launch
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto"
              >
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-green-300 text-sm">
                    Thanks! We'll notify you when Task Agents launch.
                  </p>
                </div>
              </motion.div>
            )}

            <p className="text-gray-500 text-sm mt-6">
              Expected launch: Q3 2025
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Agent Templates */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Pre-Built Agent Templates</h3>
          <span className="text-sm text-gray-400">Choose a template or build your own</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {agentTemplates.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center`}>
                      <agent.icon className="w-7 h-7 text-white" />
                    </div>
                    {agent.popular && (
                      <span className="px-3 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400 border border-amber-400/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h4 className="text-white font-bold text-lg mb-2">{agent.name}</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{agent.description}</p>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Required credentials:</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.credentials.map((cred, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Build Your Own Agent */}
      <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-400/30 backdrop-blur-xl">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Build Your Own Custom Agent
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Don't see what you need? Create custom agents tailored to your exact requirements. Define tasks, set permissions, and share with the community.
              </p>
            </div>
          </div>

          {/* Agent Builder Preview */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Agent Name</label>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-500">
                  e.g., "Property Manager"
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Agent Type</label>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-500">
                  e.g., "Real Estate"
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">What should this agent do?</label>
              <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-500 min-h-[80px]">
                Describe the tasks and automations...
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Which credentials can it access?</label>
              <div className="flex flex-wrap gap-2">
                {["Property documents", "Rental agreements", "Financial records"].map((cred, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center gap-2"
                  >
                    <Lock className="w-3 h-3" />
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500"
              disabled
            >
              Create Agent (Coming Soon)
            </Button>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-violet-500/10 border border-violet-400/30">
            <p className="text-sm text-violet-300">
              <span className="font-semibold">Agent Marketplace:</span> Once you build an agent, you can add it to the public suggestions for others to use. Earn reputation and help grow the ecosystem.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">How Task Agents Work</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Lock,
                title: "Grant Secure Access",
                description: "Choose which verified credentials your agent can access. You maintain full control.",
              },
              {
                step: "2",
                icon: Zap,
                title: "Agent Executes Tasks",
                description: "Your agent automates tasks on your behalf—filing taxes, booking travel, managing finances.",
              },
              {
                step: "3",
                icon: CheckCircle2,
                title: "Review & Approve",
                description: "Review all agent actions before they're finalized. You're always in control.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white/5 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tax Agent Deep Dive */}
      <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-400/30 backdrop-blur-xl">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Tax Agent: Never Stress About Taxes Again
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The most requested agent. Automatically track expenses, organize receipts, maximize deductions, and prepare filings—all using your verified financial credentials.
              </p>
            </div>
          </div>

          {/* What Tax Agent Does */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                What It Does
              </h4>
              <ul className="space-y-2">
                {[
                  "Auto-categorize transactions and receipts",
                  "Track business expenses and mileage",
                  "Calculate estimated quarterly taxes",
                  "Find overlooked deductions",
                  "Prepare Schedule C for self-employed",
                  "Generate audit-ready documentation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-400" />
                Credentials It Uses
              </h4>
              <ul className="space-y-2">
                {[
                  "Bank account transactions (read-only)",
                  "Credit card statements",
                  "Business expense receipts",
                  "Income records (W2, 1099, invoices)",
                  "Previous tax returns (for comparison)",
                  "Investment account summaries",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Lock className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-400/30">
            <p className="text-sm text-blue-300">
              <span className="font-semibold">Always Under Your Control:</span> Your Tax Agent can only access credentials you explicitly grant. Review every deduction before filing. Revoke access anytime.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Security & Privacy */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardContent className="p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              Security Guarantees
            </h3>
            <ul className="space-y-3">
              {[
                "Agents run in your private encrypted cloud",
                "You grant and revoke access to credentials anytime",
                "All actions logged and reviewable",
                "Agents can't modify credentials, only use them",
                "Face verification required for sensitive actions",
                "Zero-knowledge architecture—we can't see your data",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-400/30 backdrop-blur-xl">
          <CardContent className="p-6">
            <h3 className="text-white font-semibold mb-4">Why This Changes Everything</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-emerald-300 font-medium mb-2">No More Sharing Raw Credentials</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Traditional services require you to hand over passwords and documents. Task Agents use cryptographic proofs—they can access data without ever exposing raw credentials.
                </p>
              </div>
              <div>
                <h4 className="text-emerald-300 font-medium mb-2">Automation Without Risk</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Your agents work within your private cloud. They can't leak data, get hacked, or sell your information. You maintain complete control.
                </p>
              </div>
              <div>
                <h4 className="text-emerald-300 font-medium mb-2">Built on Proof, Not Trust</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Every agent action is cryptographically verified. You don't have to trust the agent—you can prove what it did.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <Card className="bg-gradient-to-br from-blue-600/20 to-violet-600/20 border-blue-400/30 backdrop-blur-xl">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            The Future of Personal Automation
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Task Agents represent a new way to interact with the digital world—where AI works for you, using your verified credentials, without compromising your privacy or security.
          </p>
          {!submitted && (
            <Button
              onClick={() => document.querySelector('input[type="email"]')?.focus()}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-2xl shadow-blue-500/50"
            >
              Join Waitlist
            </Button>
          )}
          <p className="text-gray-500 text-sm mt-4">
            Be among the first to automate your life securely
          </p>
        </CardContent>
      </Card>
    </div>
  );
}