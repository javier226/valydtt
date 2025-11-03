
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Brain, Send, Sparkles, FileText, Key, Shield, ChevronRight, Users } from "lucide-react";

const examplePrompts = [
  "Show my badges.",
  "What can I verify today?",
  "Add a new credential.",
];

const responses = {
  "Show my badges.": "You currently have 2 active badges: ✓ Verified Human and 🧠 Valyd AI Agent. You can view all badges in the My Badges section.",
  "What can I verify today?": "You can add documents or credentials to your private cloud. Messaging and Social features are coming soon, which will require additional verifications.",
  "Add a new credential.": "To add a new credential, navigate to 'My Cloud' and upload your documents. Your AI will help process and encrypt them securely.",
  "Check Missing Credentials": "I can check what credentials you're missing. Would you like me to scan your linked accounts and suggest what to import from Google or Apple?",
  "Upload Documents": "Great! I can help you securely upload and encrypt documents. What type of document would you like to store? Driver's license, passport, or something else?",
  "Explore Network": "The Valyd Network lets you interact with verified humans and AI agents. Once messaging and social features launch, you'll be able to communicate securely and delegate tasks to specialized AI agents.",
};

const suggestions = [
  {
    icon: Key,
    title: "Check what credentials you're missing",
    description: "I can scan your accounts and help import passwords from Google, Apple, or other managers to your secure cloud.",
    action: "Check Missing Credentials",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Store important documents",
    description: "Upload your driver's license, passport, or official documents. Everything encrypted with your FaceVector—no one else can access it.",
    action: "Upload Documents",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Interact with Valyd Patrons and AI agents",
    description: "Connect through our messaging network, social feeds, and AI agents designed to complete tasks on your behalf—all verified and secure.",
    action: "Explore Network",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function MyAgent() {
  const [messages, setMessages] = useState([
    {
      role: "agent",
      content: "Welcome to the Valyd Network! You are currently at validated human level—this means you can access anonymously on our networks and services that only require humanity proof. If you'd like to increase your access, add more data. I am your agent, and the more data you add, the more I can do for you. For instance, to do your taxes, I'd need your verified financial credentials. I could also help you book travel with your passport, manage investments with your portfolio access, or handle legal documents with your verified records.",
      showSuggestions: true,
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: messageText }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const response = responses[messageText] || 
        "I'm here to help! Try asking about your badges, credentials, or what features are available.";
      setMessages((prev) => [...prev, { role: "agent", content: response }]);
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">My Agent</h2>
          <p className="text-gray-400">Your private AI assistant</p>
        </div>
      </div>

      {/* Chat Interface */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardContent className="p-0">
          {/* Messages */}
          <div className="h-[600px] overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-gray-200 border border-white/10"
                  }`}
                >
                  {message.role === "agent" && (
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span className="text-xs text-violet-400 font-medium">Valyd AI</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{message.content}</p>

                  {/* Inline Suggestions */}
                  {message.showSuggestions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4 space-y-3"
                    >
                      <p className="text-xs text-gray-400 mb-3">Would you like me to help with:</p>
                      {suggestions.map((suggestion, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          onClick={() => handleSend(suggestion.action)}
                          className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${suggestion.color} flex items-center justify-center flex-shrink-0`}>
                              <suggestion.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-medium text-sm mb-1 flex items-center gap-2">
                                {suggestion.title}
                                <ChevronRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                              </h4>
                              <p className="text-xs text-gray-400 leading-relaxed">
                                {suggestion.description}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-white/10 p-4">
            {/* Quick prompts */}
            <div className="flex flex-wrap gap-2 mb-4">
              {examplePrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="px-3 py-1.5 text-xs rounded-full bg-white/5 hover:bg-white/10 
                           text-gray-300 border border-white/10 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask your agent..."
                className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
              <Button
                onClick={() => handleSend()}
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border-blue-400/30 backdrop-blur-xl">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Private & Secure</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                All data is stored and secured on your private node. No one without your live face can access anything—not even us. Your AI agent runs on end-to-end encrypted infrastructure.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
