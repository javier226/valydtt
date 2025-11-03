import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, User, Shield, Bell, Smartphone, LogOut } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function SettingsView({ userName }) {
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(createPageUrl("Landing"));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
          <Settings className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Settings</h2>
          <p className="text-gray-400">Manage your account and preferences</p>
        </div>
      </div>

      {/* Profile Settings */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="border-b border-white/10">
          <CardTitle className="text-white flex items-center gap-2">
            <User className="w-5 h-5" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-300">Display Name</Label>
            <Input
              id="name"
              defaultValue={userName}
              className="mt-2 bg-white/5 border-white/10 text-white"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue="alex@example.com"
              className="mt-2 bg-white/5 border-white/10 text-white"
              disabled
            />
            <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="border-b border-white/10">
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Security & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium mb-1">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-400">Add an extra layer of security</p>
            </div>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium mb-1">Face ID Login</h4>
              <p className="text-sm text-gray-400">Use face verification to log in</p>
            </div>
            <Switch checked={true} disabled />
          </div>
          <div>
            <Button variant="outline" className="border-red-400/30 text-red-400 hover:bg-red-500/10">
              Change Password
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="border-b border-white/10">
          <CardTitle className="text-white flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium mb-1">Push Notifications</h4>
              <p className="text-sm text-gray-400">Receive updates about your account</p>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium mb-1">Email Updates</h4>
              <p className="text-sm text-gray-400">Get notified via email</p>
            </div>
            <Switch checked={true} />
          </div>
        </CardContent>
      </Card>

      {/* Connected Devices */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="border-b border-white/10">
          <CardTitle className="text-white flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            Connected Devices
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-white font-medium">MacBook Pro</div>
                  <div className="text-xs text-gray-400">Current device • San Francisco, CA</div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs border border-green-400/30">
                Active
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="bg-red-500/10 border-red-400/30 backdrop-blur-xl">
        <CardHeader className="border-b border-red-400/30">
          <CardTitle className="text-white flex items-center gap-2">
            <LogOut className="w-5 h-5 text-red-400" />
            Account Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-3">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full border-red-400/30 text-red-400 hover:bg-red-500/10"
          >
            Log Out
          </Button>
          <Button
            variant="outline"
            className="w-full border-red-400/30 text-red-400 hover:bg-red-500/10"
          >
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}