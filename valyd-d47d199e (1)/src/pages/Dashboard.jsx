import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import MyAgent from "../components/dashboard/MyAgent";
import MyCloud from "../components/dashboard/MyCloud";
import MyBadges from "../components/dashboard/MyBadges";
import MessagingView from "../components/dashboard/MessagingView";
import SocialView from "../components/dashboard/SocialView";
import TaskAgentsView from "../components/dashboard/TaskAgentsView";
import FoundersProgram from "../components/dashboard/FoundersProgram";
import SettingsView from "../components/dashboard/SettingsView";
import ExtensionView from "../components/dashboard/ExtensionView";

export default function Dashboard() {
  const [activeView, setActiveView] = useState("agent");
  const [userName] = useState("Alex");

  const renderView = () => {
    switch (activeView) {
      case "agent":
        return <MyAgent />;
      case "extension":
        return <ExtensionView />;
      case "cloud":
        return <MyCloud />;
      case "badges":
        return <MyBadges />;
      case "messaging":
        return <MessagingView />;
      case "social":
        return <SocialView />;
      case "tasks":
        return <TaskAgentsView />;
      case "founders":
        return <FoundersProgram />;
      case "settings":
        return <SettingsView userName={userName} />;
      default:
        return <MyAgent />;
    }
  };

  return (
    <DashboardLayout activeView={activeView} setActiveView={setActiveView} userName={userName}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
    </DashboardLayout>
  );
}