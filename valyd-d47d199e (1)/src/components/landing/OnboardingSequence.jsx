import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const sequences = [
  "Verifying signal…",
  "Generating encryption keys…",
  "Private cloud initialized…",
  "Identity Agent waking…",
];

export default function OnboardingSequence({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < sequences.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(finalTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6"
    >
      {/* Pulsing loader orb */}
      <motion.div
        className="relative w-32 h-32 mb-12"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 blur-xl opacity-50" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      </motion.div>

      {/* Text sequence with fade transitions */}
      <div className="h-32 flex items-center">
        <AnimatePresence mode="wait">
          {currentIndex < sequences.length && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl text-white font-light tracking-wide">
                {sequences[currentIndex]}
              </p>
              
              {/* Progress dots */}
              <div className="flex gap-2 justify-center mt-6">
                {sequences.map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === currentIndex ? "bg-blue-400" : "bg-gray-600"
                    }`}
                    animate={{
                      scale: i === currentIndex ? [1, 1.5, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: i === currentIndex ? Infinity : 0,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scanning effect lines */}
      <motion.div
        className="absolute inset-0 overflow-hidden opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              top: `${20 + i * 20}%`,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}