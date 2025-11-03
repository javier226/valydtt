import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, AlertTriangle, Key, CheckCircle2, Chrome, Sparkles } from "lucide-react";

export default function ExtensionView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Valyd Sentinel</h2>
          <p className="text-gray-400">Your AI agent, watching your back online</p>
        </div>
      </div>

      {/* Hero Card */}
      <Card className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-400/30 backdrop-blur-xl overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left side - Icon */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative w-32 h-32 flex-shrink-0"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-500/30 blur-2xl" />
              
              {/* Main shield */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/50">
                <Shield className="w-16 h-16 text-white" />
              </div>

              {/* Scanning effect */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute top-0 left-1/2 w-1 h-16 bg-gradient-to-b from-emerald-400 to-transparent blur-sm transform -translate-x-1/2" />
              </motion.div>
            </motion.div>

            {/* Right side - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Valyd Agent — Now Watching Your Back Online
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                The Valyd Extension connects your private AI to your browsing experience. 
                It protects you from fakes and fraud, manages your passwords and credentials, 
                and verifies every interaction through proofs instead of trust.
              </p>
              <p className="text-emerald-300 font-medium text-lg mb-6">
                When a site, message, or offer isn't real, your agent knows — before you click.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-2xl shadow-emerald-500/50"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Install Extension Beta
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tagline */}
      <div className="text-center py-4">
        <p className="text-2xl font-light text-gray-400 italic">
          "Proof in every tab."
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Key,
            title: "Autofill Credentials",
            description: "Safely autofill verified credentials and passwords with cryptographic proofs.",
            color: "from-blue-400 to-cyan-500",
          },
          {
            icon: AlertTriangle,
            title: "Detect Scams",
            description: "Flag fakes, deepfakes, scams, and spoofed sites instantly in real-time.",
            color: "from-red-400 to-orange-500",
          },
          {
            icon: CheckCircle2,
            title: "Verify Everything",
            description: "Check every page, message, or link for authenticity before you interact.",
            color: "from-green-400 to-emerald-500",
          },
          {
            icon: Lock,
            title: "Stay Private",
            description: "Your data never leaves your node. Everything stays encrypted and secure.",
            color: "from-purple-400 to-violet-500",
          },
        ].map((feature, i) => (
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

      {/* How It Works */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Agent Lives in Your Cloud",
                description: "Your Valyd Agent runs in your private cloud—secure, encrypted, and always available.",
              },
              {
                step: "2",
                title: "Extension is the Gateway",
                description: "The browser extension connects your agent to the internet, watching every interaction.",
              },
              {
                step: "3",
                title: "Background Protection",
                description: "Your agent runs proof checks in the background, so you never have to ask 'Is this real?'",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Agent in Action - Visual Preview */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Sentinel in Action</h3>
          
          {/* Browser mockup */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            {/* Browser chrome */}
            <div className="bg-gray-800/50 border-b border-white/10 p-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 bg-gray-700/50 rounded px-4 py-1.5 ml-2">
                <span className="text-gray-400 text-xs">https://suspicious-site.com</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Content area with warning */}
            <div className="p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="relative bg-red-500/10 border border-red-400/30 rounded-lg p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">⚠️ Valyd Sentinel Alert</h4>
                    <p className="text-red-300 mb-4">
                      This site is not verified and may be a phishing attempt. The domain was registered 2 days ago and mimics a known brand.
                    </p>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="border-red-400/30 text-red-400 hover:bg-red-500/10">
                        Block Site
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Safe indicator example */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6 bg-green-500/10 border border-green-400/30 rounded-lg p-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-green-300 text-sm">
                      <span className="font-semibold">Verified:</span> This login form uses cryptographic proofs. Your agent can autofill safely.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Features List */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardContent className="p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              What Your Sentinel Does
            </h3>
            <ul className="space-y-3">
              {[
                "Autofill verified credentials and passwords safely",
                "Check every page, message, or link for authenticity",
                "Run background proof checks automatically",
                "Flag fakes, deepfakes, scams, and spoofed sites",
                "Cross-reference known scams or spoofed domains",
                "Protect your identity without revealing raw data",
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
            <h3 className="text-white font-semibold mb-4">Privacy Guarantee</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">Your Data Stays Yours</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    The extension never sends your passwords or credentials to any server. Everything stays encrypted in your private cloud.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">Zero-Knowledge Architecture</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Not even Valyd can see what you're browsing or what credentials you're using. Your agent works entirely for you.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border-emerald-400/30 backdrop-blur-xl">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Bring Your AI Agent Anywhere You Go Online
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Install the Valyd Sentinel extension and let your private AI protect you across the web. 
            Available now in beta for Chrome, Edge, and Brave.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-2xl shadow-emerald-500/50"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Install Extension Beta
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-400/30 text-emerald-400 hover:bg-emerald-500/10"
            >
              View Documentation
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Proof travels with you. • Free during beta
          </p>
        </CardContent>
      </Card>
    </div>
  );
}