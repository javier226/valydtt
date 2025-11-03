
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Copy, CheckCircle2, Gift, Users, TrendingUp, Star, Sparkles, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FoundersProgram() {
  const [copied, setCopied] = useState(false);
  const [showSecretInput, setShowSecretInput] = useState(false);
  const [secretCode, setSecretCode] = useState("");
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const referralLink = "https://valyd.network/join/AX947K2";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSecretSubmit = (e) => {
    e.preventDefault();
    // Secret codes that unlock the reward
    const validCodes = ["GENESIS", "PROOF", "VALYD2025", "FOUNDING"];
    if (validCodes.includes(secretCode.toUpperCase())) {
      setSecretUnlocked(true);
      setShowSecretInput(false);
    } else {
      setSecretCode("");
    }
  };

  const leaderboard = [
    { rank: 1, name: "Sarah M.", referrals: 47, badge: "🥇" },
    { rank: 2, name: "Mike R.", referrals: 38, badge: "🥈" },
    { rank: 3, name: "Emma W.", referrals: 32, badge: "🥉" },
    { rank: 4, name: "You (Alex)", referrals: 12, badge: "✨" },
    { rank: 5, name: "John D.", referrals: 11, badge: "" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Founders Program</h2>
          <p className="text-gray-400">Earn rewards for verified referrals</p>
        </div>
      </div>

      {/* Hero Card */}
      <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-400/30 backdrop-blur-xl">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0"
            >
              <Trophy className="w-12 h-12 text-white" />
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Join the Founders Circle</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Help build the Valyd Network. Earn badges, rewards, and exclusive access for every verified referral. Early supporters get lifetime benefits.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm">
                  🎖️ Lifetime Founding Member Badge
                </div>
                <div className="px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm">
                  💎 Exclusive Features
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Secret Easter Egg Trigger - MOVED HERE */}
      {!secretUnlocked && (
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="cursor-pointer"
                  onClick={() => setShowSecretInput(!showSecretInput)}
                >
                  <Sparkles className="w-5 h-5 text-violet-400" />
                </motion.div>
                <p className="text-sm text-gray-400">
                  {showSecretInput ? "Enter the secret code..." : "Something special is hidden here..."}
                </p>
              </div>
            </div>
            
            <AnimatePresence>
              {showSecretInput && (
                <motion.form
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  onSubmit={handleSecretSubmit}
                  className="overflow-hidden"
                >
                  <div className="flex gap-2">
                    <Input
                      value={secretCode}
                      onChange={(e) => setSecretCode(e.target.value)}
                      placeholder="Enter code (hint: it's in the name)"
                      className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      autoFocus
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
                    >
                      Unlock
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Try: GENESIS, PROOF, VALYD2025, or FOUNDING
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      )}

      {/* Secret Unlocked Reward */}
      <AnimatePresence>
        {secretUnlocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
          >
            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/30 backdrop-blur-xl overflow-hidden relative">
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center"
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">🎉 Secret Unlocked!</h3>
                  <h4 className="text-xl font-semibold text-purple-300 mb-4">Genesis Member Status</h4>
                  <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                    Congratulations! You've discovered the secret. As a Genesis Member, you receive:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
                    {[
                      "🌟 Lifetime Pro Account (Free Forever)",
                      "🔮 Early Access to All New Features",
                      "💎 Exclusive Genesis Badge NFT",
                      "🎯 Priority Support & Direct Dev Access",
                      "🏆 Special Role in Valyd Community",
                      "⚡ 10x Referral Rewards Multiplier",
                    ].map((reward, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="p-3 rounded-lg bg-purple-500/20 border border-purple-400/30 text-left"
                      >
                        <span className="text-purple-200 text-sm font-medium">{reward}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-400/30 max-w-2xl mx-auto">
                    <p className="text-xs text-purple-300">
                      <Lock className="w-3 h-3 inline mr-1" />
                      This reward is permanent and tied to your verified identity. Share wisely.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { icon: Users, label: "Your Referrals", value: "12", color: "text-blue-400" },
          { icon: CheckCircle2, label: "Verified", value: "9", color: "text-green-400" },
          { icon: Trophy, label: "Rank", value: "#4", color: "text-amber-400" },
          { icon: Star, label: "Points", value: "1,840", color: "text-violet-400" },
        ].map((stat, i) => (
          <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Referral Link */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardHeader className="border-b border-white/10">
            <CardTitle className="text-white">Your Referral Link</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-400 text-sm mb-4">
              Share this link to invite others. You'll earn rewards when they verify their identity.
            </p>
            <div className="flex gap-2">
              <div className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm truncate">
                {referralLink}
              </div>
              <Button
                onClick={handleCopy}
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Rewards */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardHeader className="border-b border-white/10">
            <CardTitle className="text-white flex items-center gap-2">
              <Gift className="w-5 h-5 text-violet-400" />
              Available Rewards
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { name: "Exclusive Badge", points: 100, unlocked: true },
                { name: "Early Feature Access", points: 500, unlocked: true },
                { name: "Premium Storage (50GB)", points: 1000, unlocked: true },
                { name: "Lifetime Pro Account", points: 5000, unlocked: false },
              ].map((reward, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    reward.unlocked ? "bg-green-500/10 border border-green-400/30" : "bg-white/5 border border-white/10"
                  }`}
                >
                  <div>
                    <div className="text-white font-medium text-sm">{reward.name}</div>
                    <div className="text-xs text-gray-400">{reward.points} points</div>
                  </div>
                  {reward.unlocked ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  ) : (
                    <div className="text-xs text-gray-500">Locked</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboard */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="border-b border-white/10">
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            Founders Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-white/10">
            {leaderboard.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-4 flex items-center gap-4 ${
                  entry.name.includes("You") ? "bg-blue-500/10" : "hover:bg-white/5"
                } transition-colors`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-white flex-shrink-0">
                  {entry.badge || `#${entry.rank}`}
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">{entry.name}</div>
                  <div className="text-sm text-gray-400">{entry.referrals} verified referrals</div>
                </div>
                {entry.rank <= 3 && <Star className="w-5 h-5 text-amber-400" />}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
