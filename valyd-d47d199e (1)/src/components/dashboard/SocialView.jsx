import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Shield, Sparkles, UserCheck, Lock, CheckCircle2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SocialView() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotifyMe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would actually submit to backend
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Valyd Social</h2>
          <p className="text-gray-400">A social network for verified humans</p>
        </div>
      </div>

      {/* Coming Soon Banner */}
      <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-400/30 backdrop-blur-xl">
        <CardContent className="p-8 md:p-12 text-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center"
          >
            <Globe className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">The Bot-Free Social Network</h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Connect with real people in a space free from bots, fake accounts, and AI-generated personas. Every user is face-verified.
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
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 whitespace-nowrap"
                >
                  Join Founders List
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Be the first to know when Valyd Social launches
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
                  Thanks! We'll notify you when Valyd Social launches.
                </p>
              </div>
            </motion.div>
          )}

          <p className="text-gray-500 text-sm mt-6">
            Expected launch: Q2 2025
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: UserCheck,
            title: "100% Verified Humans",
            description: "Every account is face-verified. No bots, no fake profiles, no AI impersonators.",
            color: "from-green-400 to-emerald-500",
          },
          {
            icon: Shield,
            title: "Privacy First",
            description: "You control what you share. Your data stays encrypted and under your control.",
            color: "from-blue-400 to-violet-500",
          },
          {
            icon: Users,
            title: "Real Connections",
            description: "Build authentic relationships with verified humans in a trusted environment.",
            color: "from-purple-400 to-pink-500",
          },
          {
            icon: Globe,
            title: "Decentralized Network",
            description: "No single company owns your social graph. You do.",
            color: "from-cyan-400 to-blue-500",
          },
          {
            icon: Sparkles,
            title: "AI Assistant",
            description: "Your private AI helps you manage connections and content—securely.",
            color: "from-violet-400 to-purple-500",
          },
          {
            icon: Lock,
            title: "Credential-Gated Rooms",
            description: "Join spaces restricted by verified credentials—age, profession, education, and more.",
            color: "from-orange-400 to-red-500",
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

      {/* Credential-Gated Rooms Feature */}
      <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-400/30 backdrop-blur-xl">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Credential-Gated Rooms
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Create and join spaces that require specific verified credentials. Connect with people who share verified attributes—without revealing raw personal data.
              </p>
            </div>
          </div>

          {/* Example Rooms */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Tech Professionals",
                icon: "💼",
                requirement: "Verified employment in tech",
                members: "2,847",
                color: "from-blue-500/20 to-cyan-500/20",
                borderColor: "border-blue-400/30",
              },
              {
                name: "21+ Lounge",
                icon: "🎭",
                requirement: "Age verification required",
                members: "5,392",
                color: "from-violet-500/20 to-purple-500/20",
                borderColor: "border-violet-400/30",
              },
              {
                name: "Verified Founders",
                icon: "🚀",
                requirement: "Verified business ownership",
                members: "1,284",
                color: "from-orange-500/20 to-red-500/20",
                borderColor: "border-orange-400/30",
              },
              {
                name: "Healthcare Pros",
                icon: "⚕️",
                requirement: "Medical license verification",
                members: "3,156",
                color: "from-green-500/20 to-emerald-500/20",
                borderColor: "border-green-400/30",
              },
            ].map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Card className={`bg-gradient-to-br ${room.color} border ${room.borderColor} backdrop-blur-xl`}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{room.icon}</div>
                        <div>
                          <h4 className="text-white font-semibold">{room.name}</h4>
                          <p className="text-xs text-gray-400">{room.members} members</p>
                        </div>
                      </div>
                      <Lock className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Award className="w-3 h-3 text-violet-400" />
                      <span className="text-gray-300">{room.requirement}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-violet-500/10 border border-violet-400/30">
            <p className="text-sm text-violet-300">
              <span className="font-semibold">Zero-Knowledge Proofs:</span> Join rooms using cryptographic proofs. Your credentials are verified without revealing raw data like your exact age, employer name, or other sensitive details.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardContent className="p-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            What You Can Do
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              {[
                "Join age-restricted communities (21+, 18+)",
                "Connect with verified professionals in your field",
                "Access alumni-only spaces with degree verification",
                "Participate in credential-gated discussions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                "Create private groups with custom requirements",
                "Share content with verified audience segments",
                "Network with confidence—everyone is real",
                "Control your data and who sees what",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Vision Statement */}
      <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-400/30 backdrop-blur-xl">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            The Future of Social Media
          </h3>
          <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            Imagine a social network where you know everyone is real. Where your data is yours. 
            Where AI helps you without exploiting you. Where connections are authentic, 
            not algorithmic. That's Valyd Social.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}