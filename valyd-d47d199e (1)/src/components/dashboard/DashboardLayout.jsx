
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Cloud, 
  Award, 
  MessageSquare, 
  Users, 
  Briefcase,
  Trophy,
  Settings,
  Menu,
  X,
  CheckCircle2,
  Sparkles,
  LogOut,
  Shield // Added Shield icon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

const navItems = [
  { id: "agent", icon: Brain, label: "My Agent", active: true },
  { id: "badges", icon: Award, label: "My Credentials", active: true }, // Changed label from "My Badges" to "My Credentials"
  { id: "extension", icon: Shield, label: "Valyd Sentinel", active: true },
  { id: "cloud", icon: Cloud, label: "Private Vault", active: true },
  { id: "messaging", icon: MessageSquare, label: "Messaging", active: true },
  { id: "social", icon: Users, label: "Valyd Social", active: true },
  { id: "tasks", icon: Briefcase, label: "Task Agents", active: true }, // Changed from comingSoon to active
  { id: "founders", icon: Trophy, label: "Founders Program", active: true },
  { id: "settings", icon: Settings, label: "Settings", active: true },
];

export default function DashboardLayout({ activeView, setActiveView, userName, children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(createPageUrl("Landing"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#1a0f2e] to-[#1E104A]">
      {/* Ambient background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="flex h-screen relative z-10">
        {/* Sidebar - Desktop */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="hidden lg:flex flex-col w-72 bg-white/5 backdrop-blur-xl border-r border-white/10"
        >
          {/* Logo/Brand */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Valyd</h1>
                <p className="text-xs text-gray-400">Identity Network</p>
              </div>
            </div>
          </div>

          {/* User info */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{userName[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-medium truncate">Welcome, {userName}</h3>
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                </div>
                <p className="text-sm text-gray-400">Verified Human</p>
              </div>
            </div>
          </div>

          {/* Join Waitlist Button */}
          <div className="px-4 py-4 border-b border-white/10">
            <Button
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg shadow-violet-500/30"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Join Waitlist
            </Button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Get early access to new features
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)} // Simplified as all items are now active
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeView === item.id
                      ? "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                      : "text-gray-300 hover:bg-white/5 hover:text-white" // No more "comingSoon" styling
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-white/10">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full border-red-400/30 text-red-400 hover:bg-red-500/10 hover:text-red-300"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Log Out
            </Button>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="text-xs text-gray-500 text-center">
              © 2025 Valyd
              <br />
              Proof, not promises.
            </div>
          </div>
        </motion.aside>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-[#0B0F1A]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col h-full pt-20 p-6">
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{userName[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-medium">Welcome, {userName}</h3>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-sm text-gray-400">Verified Human</p>
                  </div>
                </div>
              </div>

              {/* Mobile Join Waitlist Button */}
              <div className="mb-6">
                <Button
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg shadow-violet-500/30"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Join Waitlist
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Get early access to new features
                </p>
              </div>

              <nav className="flex-1 overflow-y-auto">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveView(item.id); // Simplified as all items are now active
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        activeView === item.id
                          ? "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                          : "text-gray-300 hover:bg-white/5 hover:text-white" // No more "comingSoon" styling
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </nav>

              {/* Mobile Logout */}
              <div className="pt-4 border-t border-white/10">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full border-red-400/30 text-red-400 hover:bg-red-500/10"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Log Out
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
