import React from "react";
import { motion } from "framer-motion";

export default function SleepingOrb() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle ring */}
      <motion.div
        className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-400/20 to-violet-400/20 blur-2xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Core orb - breathing effect */}
      <motion.div
        className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600
                   shadow-2xl shadow-blue-500/50"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/40 to-transparent" />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Particle orbits */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) translateY(-${80 + i * 20}px)`,
            }}
          />
        </motion.div>
      ))}

      {/* Pulsing data lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="0.5"
          strokeDasharray="2 4"
          animate={{
            strokeDashoffset: [0, 100],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}