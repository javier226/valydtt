
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, User, IdCard, Briefcase, GraduationCap, Brain, Trophy, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  {
    id: "verified-human",
    icon: User,
    name: "Verified Human",
    description: "Face-verified identity proving you're a real person, not a bot or AI.",
    status: "active",
    color: "from-green-400 to-emerald-500",
    earnedDate: "January 15, 2025",
  },
  {
    id: "ai-agent",
    icon: Brain,
    name: "Valyd AI Agent",
    description: "Your private AI agent is active and protecting your data.",
    status: "active",
    color: "from-blue-400 to-violet-500",
    earnedDate: "January 15, 2025",
  },
  {
    id: "founding-member",
    icon: Trophy,
    name: "Founding Member",
    description: "Early adopter of the Valyd Network. Access to exclusive features.",
    status: "active",
    color: "from-amber-400 to-orange-500",
    earnedDate: "January 15, 2025",
  },
  {
    id: "kyc",
    icon: IdCard,
    name: "KYC Verification",
    description: "Government-issued ID verification for enhanced trust.",
    status: "coming-soon",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "employment",
    icon: Briefcase,
    name: "Employment Verified",
    description: "Verified professional credentials and work history.",
    status: "coming-soon",
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Education Verified",
    description: "Verified educational credentials and degrees.",
    status: "coming-soon",
    color: "from-indigo-400 to-purple-500",
  },
];

export default function MyBadges() {
  const [selectedBadge, setSelectedBadge] = useState(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">My Credentials</h2>
          <p className="text-gray-400">Proofs & verifications</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardContent className="p-4">
            <div className="text-3xl font-bold text-white mb-1">
              {badges.filter((b) => b.status === "active").length}
            </div>
            <div className="text-sm text-gray-400">Active Badges</div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardContent className="p-4">
            <div className="text-3xl font-bold text-violet-400 mb-1">
              {badges.filter((b) => b.status === "coming-soon").length}
            </div>
            <div className="text-sm text-gray-400">Coming Soon</div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardContent className="p-4">
            <div className="text-3xl font-bold text-blue-400 mb-1">85%</div>
            <div className="text-sm text-gray-400">Trust Score</div>
          </CardContent>
        </Card>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedBadge(badge)}
            className="cursor-pointer"
          >
            <Card
              className={`group relative overflow-hidden transition-all duration-300 ${
                badge.status === "active"
                  ? "bg-white/5 border-white/10 hover:border-white/30"
                  : "bg-white/5 border-white/10 opacity-60"
              } backdrop-blur-xl`}
            >
              <CardContent className="p-6">
                {/* Status indicator */}
                {badge.status === "coming-soon" && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-violet-500/20 text-violet-400 border border-violet-400/30">
                      Soon
                    </span>
                  </div>
                )}

                {/* Badge Icon */}
                <div className="relative mb-4">
                  <motion.div
                    className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${badge.color} p-1`}
                    whileHover={{ scale: 1.05 }}
                    animate={
                      badge.status === "active"
                        ? {
                            boxShadow: [
                              "0 0 20px rgba(59, 130, 246, 0.3)",
                              "0 0 40px rgba(139, 92, 246, 0.5)",
                              "0 0 20px rgba(59, 130, 246, 0.3)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: badge.status === "active" ? Infinity : 0,
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-[#0B0F1A] flex items-center justify-center">
                      <badge.icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Badge Info */}
                <div className="text-center">
                  <h3 className="text-white font-semibold mb-2">{badge.name}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{badge.description}</p>
                  {badge.status === "active" && badge.earnedDate && (
                    <p className="text-xs text-gray-500 mt-3">Earned {badge.earnedDate}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Badge Detail Modal */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBadge(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full"
            >
              <Card className="bg-[#0B0F1A]/95 border-white/20 backdrop-blur-xl">
                <CardContent className="p-8">
                  <button
                    onClick={() => setSelectedBadge(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="text-center">
                    <motion.div
                      className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${selectedBadge.color} p-1 mb-6`}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.5)",
                          "0 0 60px rgba(139, 92, 246, 0.7)",
                          "0 0 20px rgba(59, 130, 246, 0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-full h-full rounded-full bg-[#0B0F1A] flex items-center justify-center">
                        <selectedBadge.icon className="w-14 h-14 text-white" />
                      </div>
                    </motion.div>

                    <h2 className="text-2xl font-bold text-white mb-3">{selectedBadge.name}</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">{selectedBadge.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Status</span>
                        <span
                          className={`px-3 py-1 rounded-full ${
                            selectedBadge.status === "active"
                              ? "bg-green-500/20 text-green-400 border border-green-400/30"
                              : "bg-violet-500/20 text-violet-400 border border-violet-400/30"
                          }`}
                        >
                          {selectedBadge.status === "active" ? "Active" : "Coming Soon"}
                        </span>
                      </div>

                      {selectedBadge.earnedDate && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Earned Date</span>
                          <span className="text-white">{selectedBadge.earnedDate}</span>
                        </div>
                      )}
                    </div>

                    {selectedBadge.status === "coming-soon" && (
                      <div className="mt-6 p-4 rounded-lg bg-violet-500/10 border border-violet-400/30">
                        <p className="text-sm text-violet-300">
                          This verification will be available soon. Stay tuned!
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
