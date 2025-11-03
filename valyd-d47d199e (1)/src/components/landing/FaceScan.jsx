import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, CheckCircle2, Scan } from "lucide-react";

export default function FaceScan({ onComplete }) {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleStartScan = () => {
    setScanning(true);
    
    // Simulate scanning progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setComplete(true);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Verify Your Identity
        </h2>
        <p className="text-gray-400 text-lg">
          Scan your face to prove you're real. (Placeholder demo only.)
        </p>
      </motion.div>

      {/* Face Scan Frame */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {/* Camera viewfinder */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-blue-400/30 overflow-hidden"
          animate={{
            borderColor: scanning 
              ? ["rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 0.8)", "rgba(59, 130, 246, 0.3)"]
              : "rgba(59, 130, 246, 0.3)",
          }}
          transition={{
            duration: 2,
            repeat: scanning ? Infinity : 0,
          }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-sm" />
          
          {/* Scanning effect */}
          {scanning && !complete && (
            <motion.div
              className="absolute inset-x-0 h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              animate={{
                y: [0, 384, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}

          {/* Grid overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            {complete ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-24 h-24 text-green-400" />
              </motion.div>
            ) : scanning ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Scan className="w-24 h-24 text-blue-400" />
              </motion.div>
            ) : (
              <Camera className="w-24 h-24 text-gray-400" />
            )}
          </div>
        </motion.div>

        {/* Corner markers */}
        {[
          { top: -2, left: -2, rotate: 0 },
          { top: -2, right: -2, rotate: 90 },
          { bottom: -2, right: -2, rotate: 180 },
          { bottom: -2, left: -2, rotate: 270 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12"
            style={pos}
            animate={{
              opacity: scanning ? [0.5, 1, 0.5] : 0.5,
            }}
            transition={{
              duration: 1.5,
              repeat: scanning ? Infinity : 0,
              delay: i * 0.2,
            }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400">
              <path
                d="M 2 8 L 2 2 L 8 2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                transform={`rotate(${pos.rotate} 12 12)`}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      {scanning && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-80 md:w-96 mt-8"
        >
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Scanning...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}

      {/* Status message */}
      {complete && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 text-lg font-medium mt-8"
        >
          ✓ Identity Verified
        </motion.p>
      )}

      {/* CTA Button */}
      {!scanning && !complete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Button
            onClick={handleStartScan}
            size="lg"
            className="px-10 py-6 bg-gradient-to-r from-blue-600 to-violet-600 
                       hover:from-blue-500 hover:to-violet-500
                       text-white text-lg font-medium rounded-full
                       shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70
                       transition-all duration-300"
          >
            Start Face Scan
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}