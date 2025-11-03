
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SleepingOrb from "../components/landing/SleepingOrb";
import FaceScan from "../components/landing/FaceScan";
import AwakeningSequence from "../components/landing/AwakeningSequence";
import OnboardingSequence from "../components/landing/OnboardingSequence";
import AIWelcome from "../components/landing/AIWelcome";
import { Shield, Lock, User } from "lucide-react";

export default function Landing() {
  const [stage, setStage] = useState("hero"); // hero, facescan, awakening, onboarding, welcome

  const handleGetStarted = () => {
    setStage("facescan");
  };

  const handleFaceScanComplete = () => {
    setStage("awakening");
    
    setTimeout(() => {
      setStage("onboarding");
    }, 2500);
  };

  const handleOnboardingComplete = () => {
    setStage("welcome");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#1a0f2e] to-[#1E104A]"
        animate={{
          background: stage !== "hero"
            ? "linear-gradient(to bottom right, #1a1f3a, #2a1a4a, #3a1f5a)"
            : "linear-gradient(to bottom right, #0B0F1A, #1a0f2e, #1E104A)"
        }}
        transition={{ duration: 2 }}
      />

      {/* Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Stage Content */}
      <AnimatePresence mode="wait">
        {stage === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6"
          >
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-center space-y-8 max-w-4xl"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block mb-4"
              >
                <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm">
                  <span className="text-blue-400 text-sm font-medium">Decentralized Identity Infrastructure</span>
                </div>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
                Privacy First<br />
                Proof Infrastructure
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                In a world of deepfakes, bots, and synthetic everything—<br />
                <span className="text-blue-400 font-medium">Valyd proves your identity.</span>
              </p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 justify-center mt-8"
              >
                {[
                  { icon: User, text: "Face-Verified Identity" },
                  { icon: Shield, text: "Private AI Agent" },
                  { icon: Lock, text: "Encrypted Cloud" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full 
                               bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <item.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={handleGetStarted}
                className="mt-12 group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-violet-600
                          hover:from-blue-500 hover:to-violet-500
                          rounded-full text-white font-semibold text-xl
                          shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70
                          transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400 opacity-0 
                              group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
                
                {/* Button content */}
                <span className="relative flex items-center gap-3">
                  Get Valydated
                  <span className="text-2xl">→</span>
                </span>
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-gray-500 text-sm mt-6"
              >
                No credit card required • Face verification in 30 seconds
              </motion.p>
            </motion.div>
          </motion.div>
        )}

        {stage === "facescan" && (
          <FaceScan key="facescan" onComplete={handleFaceScanComplete} />
        )}

        {stage === "awakening" && (
          <AwakeningSequence key="awakening" />
        )}

        {stage === "onboarding" && (
          <OnboardingSequence 
            key="onboarding" 
            onComplete={handleOnboardingComplete}
          />
        )}

        {stage === "welcome" && (
          <AIWelcome key="welcome" />
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-0 left-0 right-0 z-20 p-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === "hero" ? 0.5 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-500 text-sm mb-2">
          © 2025 Valyd — Proof, not promises.
        </p>
        <div className="flex justify-center gap-6 text-gray-600 text-sm">
          <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </motion.footer>
    </div>
  );
}
