
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

const welcomeText = [
  "Hello. I'm your private AI agent.",
  "I live in your encrypted personal cloud—no one can access me without your live face.",
  "Everything we discuss, every document you share, every credential you store—it's all protected by your unique FaceVector.",
  "Not even Valyd can decrypt your data. Only you.",
  "I'm here to help you navigate the digital world securely. Think of me as your trusted assistant in a world of deepfakes and AI imposters.",
  "Ready to explore what I can do?",
];

export default function AIWelcome() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const orbRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let currentLine = 0;
    
    const showNextLine = () => {
      if (currentLine < welcomeText.length) {
        setDisplayedLines(prev => [...prev, welcomeText[currentLine]]);
        currentLine++;
        setTimeout(showNextLine, 2000);
      } else {
        setTimeout(() => setShowButton(true), 500);
      }
    };

    setTimeout(showNextLine, 1000);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!orbRef.current) return;

      const orbRect = orbRef.current.getBoundingClientRect();
      const orbCenterX = orbRect.left + orbRect.width / 2;
      const orbCenterY = orbRect.top + orbRect.height / 2;

      const angle = Math.atan2(e.clientY - orbCenterY, e.clientX - orbCenterX);
      const distance = Math.min(
        Math.sqrt(
          Math.pow(e.clientX - orbCenterX, 2) + Math.pow(e.clientY - orbCenterY, 2)
        ) / 100,
        1
      );

      const maxMove = 4; // Maximum pixels the pupils can move
      const x = Math.cos(angle) * distance * maxMove;
      const y = Math.sin(angle) * distance * maxMove;

      setEyePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6"
    >
      {/* AI Orb with Smiley Face - now awake */}
      <motion.div
        ref={orbRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-48 h-48 mb-16"
      >
        {/* Outer glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-violet-500/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main orb */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 
                        shadow-2xl shadow-blue-500/50 flex items-center justify-center overflow-hidden">
          {/* Smiley Face */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Eyes */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex gap-6">
              {/* Left Eye */}
              <div className="relative w-4 h-4 rounded-full bg-white/30 flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 rounded-full bg-white"
                  animate={{
                    x: eyePosition.x,
                    y: eyePosition.y,
                    scaleY: [1, 0.1, 1],
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 20 },
                    y: { type: "spring", stiffness: 300, damping: 20 },
                    scaleY: {
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    },
                  }}
                />
              </div>

              {/* Right Eye */}
              <div className="relative w-4 h-4 rounded-full bg-white/30 flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 rounded-full bg-white"
                  animate={{
                    x: eyePosition.x,
                    y: eyePosition.y,
                    scaleY: [1, 0.1, 1],
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 20 },
                    y: { type: "spring", stiffness: 300, damping: 20 },
                    scaleY: {
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    },
                  }}
                />
              </div>
            </div>

            {/* Smile */}
            <svg
              className="absolute bottom-1/3"
              width="40"
              height="20"
              viewBox="0 0 40 20"
            >
              <motion.path
                d="M 5 5 Q 20 15 35 5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </svg>
          </motion.div>

          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/20 to-transparent" />
        </div>

        {/* Sparkle particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + Math.sin(i * 1.5) * 30}%`,
              left: `${20 + Math.cos(i * 1.5) * 30}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </motion.div>
        ))}

        {/* Glowing rim */}
        <motion.div
          className="absolute inset-8 rounded-full border-2 border-cyan-400/30"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Welcome text - typing effect */}
      <div className="max-w-3xl mx-auto space-y-6 mb-12">
        {displayedLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 text-center font-light leading-relaxed"
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-6 justify-center mb-12"
      >
        {[
          { icon: Shield, text: "End-to-End Encrypted" },
          { icon: Lock, text: "Zero-Knowledge Proof" },
          { icon: Sparkles, text: "Fully Private" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm"
          >
            <item.icon className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-400">{item.text}</span>
          </div>
        ))}
      </motion.div>

      {/* CTA Button */}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={() => navigate(createPageUrl("Dashboard"))}
            size="lg"
            className="relative px-10 py-6 bg-gradient-to-r from-blue-600 to-violet-600 
                       hover:from-blue-500 hover:to-violet-500
                       text-white text-lg font-medium rounded-full
                       shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70
                       transition-all duration-300 group"
          >
            <span className="flex items-center gap-3">
              Enter Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
