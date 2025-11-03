import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Shield, Sparkles, Lock, Trash2, UserCheck, Bot, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MessagingView() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotifyMe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would actually submit to backend
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Fully Private & Encrypted",
      description: "End-to-end encryption means your conversations stay completely private. Not even Valyd can read your messages.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Trash2,
      title: "You Control Everything",
      description: "Set messages to self-destruct, control who can screenshot, manage read receipts—your data, your rules.",
      color: "from-violet-400 to-purple-500",
    },
    {
      icon: UserCheck,
      title: "Real Humans or Their Agents",
      description: "Every message is from a verified human or their authorized AI agent. No bots, no fakes, no impersonators.",
      color: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
          <MessageSquare className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Messaging</h2>
          <p className="text-gray-400">Real humans only</p>
        </div>
      </div>

      {/* Coming Soon Hero */}
      <Card className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 border-violet-400/30 backdrop-blur-xl">
        <CardContent className="p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Messaging Built on Proof
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Secure messaging with verified humans only. No bots, no AI impersonators—just real people with face-verified identities and their authorized AI agents.
            </p>

            {/* Email Notification Form */}
            {!submitted ? (
              <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-violet-400"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 whitespace-nowrap"
                  >
                    Notify Me
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Be the first to know when messaging launches
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
                    Thanks! We'll notify you when messaging launches.
                  </p>
                </div>
              </motion.div>
            )}

            <p className="text-gray-500 text-sm mt-6">
              Expected launch: Q2 2025
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Agent Communication Example */}
      <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-400/30 backdrop-blur-xl">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Talk to People or Their AI Agents
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Each verified human can authorize their AI agent to respond on their behalf. 
                Ask questions, schedule meetings, or get information—all securely and privately.
              </p>
            </div>
          </div>

          {/* Conversation Example */}
          <div className="space-y-4 max-w-2xl">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm">Hey Mark's agent, what time is Mark available this week?</p>
              </div>
            </div>

            {/* Agent response */}
            <div className="flex justify-start">
              <div className="bg-white/10 text-gray-200 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs text-cyan-400 font-medium">Mark's Agent</span>
                </div>
                <p className="text-sm">Mark is available Tuesday 2-4pm and Thursday 10am-12pm. Would you like me to schedule a meeting?</p>
              </div>
            </div>

            {/* Another user message */}
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm">Can you share his current projects?</p>
              </div>
            </div>

            {/* Agent restricted response */}
            <div className="flex justify-start">
              <div className="bg-white/10 text-gray-200 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs text-cyan-400 font-medium">Mark's Agent</span>
                </div>
                <p className="text-sm">
                  <Lock className="w-3 h-3 inline mr-1 text-amber-400" />
                  I'm not authorized to share Mark's project details. Mark would need to approve that information sharing first.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
            <p className="text-sm text-cyan-300">
              <span className="font-semibold">Smart & Secure:</span> AI agents can only share information their human has explicitly authorized. Full transparency, zero trust required.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardContent className="p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              Message Controls
            </h3>
            <ul className="space-y-3">
              {[
                "Self-destructing messages after set time",
                "Control screenshot permissions",
                "Manage read receipts and typing indicators",
                "Revoke messages even after sending",
                "Set access permissions per conversation",
                "Export your data anytime",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardContent className="p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-violet-400" />
              Who You Can Message
            </h3>
            <ul className="space-y-3">
              {[
                "Face-verified humans on Valyd Network",
                "Authorized AI agents representing humans",
                "Verified businesses and organizations",
                "Group chats with verified members only",
                "Cross-platform verified contacts",
                "Zero spam, zero bots guaranteed",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Privacy Guarantee */}
      <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-400/30 backdrop-blur-xl">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Your Messages, Your Data</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                All messages are stored and secured on your private node. No one without your live face can access anything—not even us. 
                You have complete control over who sees what, for how long, and under what conditions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}