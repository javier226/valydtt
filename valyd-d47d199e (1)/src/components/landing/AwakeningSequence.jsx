import React from "react";
import { motion } from "framer-motion";

export default function AwakeningSequence() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 flex items-center justify-center min-h-screen"
    >
      {/* Expanding orb glow */}
      <motion.div
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full 
                   bg-gradient-to-br from-blue-400 via-violet-500 to-purple-600"
        initial={{ scale: 0.5, opacity: 0.3 }}
        animate={{
          scale: [0.5, 2, 3],
          opacity: [0.3, 0.6, 0],
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
        }}
      />

      {/* Bright flash */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-violet-300/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          times: [0, 0.5, 1],
        }}
      />

      {/* Ripple waves */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-blue-400/30"
          style={{
            width: 200 + i * 50,
            height: 200 + i * 50,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{
            scale: [0, 2, 3],
            opacity: [0.8, 0.4, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Awakening text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.1] }}
        transition={{
          duration: 2,
          times: [0, 0.3, 0.7, 1],
        }}
        className="relative text-4xl md:text-6xl font-bold text-white text-center"
      >
        <motion.span
          animate={{
            textShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 40px rgba(139, 92, 246, 0.8)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{
            duration: 1,
            repeat: 2,
          }}
        >
          Awakening...
        </motion.span>
      </motion.div>
    </motion.div>
  );
}