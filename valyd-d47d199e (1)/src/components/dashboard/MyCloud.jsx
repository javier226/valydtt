
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Upload, Lock, FileText, Image, File, Shield, CheckCircle2, Key, Link as LinkIcon, Chrome, Apple, ChevronDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const mockFiles = [
  { name: "passport_scan.pdf", type: "pdf", size: "2.4 MB", encrypted: true, date: "2 days ago" },
  { name: "driver_license.jpg", type: "image", size: "1.8 MB", encrypted: true, date: "1 week ago" },
  { name: "diploma.pdf", type: "pdf", size: "3.1 MB", encrypted: true, date: "2 weeks ago" },
];

const linkedAccounts = [
  { id: "google", name: "Google Account", icon: Chrome, status: "connected", credentials: 47, lastSync: "2 hours ago" },
  { id: "apple", name: "Apple Keychain", icon: Apple, status: "connected", credentials: 32, lastSync: "1 day ago" },
  { id: "linkedin", name: "LinkedIn", icon: LinkIcon, status: "not-connected", credentials: 0 },
];

const uploadTypes = [
  { id: "license", label: "Driver's License", icon: "🪪" },
  { id: "password-manager", label: "Password Manager Import", icon: "🔑" },
  { id: "official", label: "Official Document", icon: "📄" },
  { id: "tickets", label: "Tickets", icon: "🎫" },
  { id: "private", label: "Private Docs", icon: "🔒" },
  { id: "other", label: "Other", icon: "📎" },
];

export default function MyCloud() {
  const [files, setFiles] = useState(mockFiles);
  const [uploading, setUploading] = useState(false);
  const storageUsed = 7.3;
  const storageTotal = 50;

  const handleUpload = (type) => {
    setUploading(true);
    setTimeout(() => {
      setFiles([
        { name: `${type}_document.pdf`, type: "pdf", size: "1.2 MB", encrypted: true, date: "Just now" },
        ...files,
      ]);
      setUploading(false);
    }, 2000);
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-5 h-5 text-red-400" />;
      case "image":
        return <Image className="w-5 h-5 text-blue-400" />;
      default:
        return <File className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Private Vault</h2>
            <p className="text-gray-400">Encrypted private storage</p>
          </div>
        </div>
        
        {/* Upload Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              disabled={uploading}
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500"
            >
              <Upload className="w-4 h-4 mr-2" />
              {uploading ? "Uploading..." : "Upload File"}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-white/10">
            <div className="px-2 py-1.5 text-xs text-gray-400 font-medium">
              Select file type
            </div>
            <DropdownMenuSeparator className="bg-white/10" />
            {uploadTypes.map((type) => (
              <DropdownMenuItem
                key={type.id}
                onClick={() => handleUpload(type.id)}
                className="text-gray-200 focus:bg-white/10 focus:text-white cursor-pointer"
              >
                <span className="mr-2">{type.icon}</span>
                {type.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Storage Info */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-300 font-medium">Storage Used</span>
            <span className="text-white font-semibold">
              {storageUsed} GB / {storageTotal} GB
            </span>
          </div>
          <Progress value={(storageUsed / storageTotal) * 100} className="h-2" />
          <p className="text-xs text-gray-500 mt-2">
            {(storageTotal - storageUsed).toFixed(1)} GB available
          </p>
        </CardContent>
      </Card>

      {/* Security Notice */}
      <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-400/30 backdrop-blur-xl">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">End-to-End Encrypted</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                All documents and credentials are encrypted and can only be accessed by your live FaceVector. Not even Valyd can decrypt your data.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Files List */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="border-b border-white/10">
          <CardTitle className="text-white">Your Documents</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-white/10">
            {files.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    {getFileIcon(file.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-medium truncate">{file.name}</h4>
                      {file.encrypted && (
                        <Lock className="w-3 h-3 text-green-400 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{file.size}</span>
                      <span>•</span>
                      <span>{file.date}</span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                        Encrypted
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 hover:text-blue-300"
                  >
                    View
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Linked Accounts Section */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="border-b border-white/10">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <LinkIcon className="w-5 h-5" />
              Linked Accounts
            </CardTitle>
            <span className="text-xs text-gray-400">Sync credentials from services</span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-white/10">
            {linkedAccounts.map((account, index) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    account.status === "connected" 
                      ? "bg-blue-500/20" 
                      : "bg-white/5"
                  }`}>
                    <account.icon className={`w-6 h-6 ${
                      account.status === "connected" 
                        ? "text-blue-400" 
                        : "text-gray-500"
                    }`} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-medium">{account.name}</h4>
                      {account.status === "connected" && (
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      {account.status === "connected" ? (
                        <>
                          <span>{account.credentials} credentials synced</span>
                          <span>•</span>
                          <span>Last sync: {account.lastSync}</span>
                        </>
                      ) : (
                        <span>Not connected</span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant={account.status === "connected" ? "ghost" : "outline"}
                    size="sm"
                    className={account.status === "connected" 
                      ? "text-gray-400 hover:text-white" 
                      : "border-blue-400/30 text-blue-400 hover:bg-blue-500/10"
                    }
                  >
                    {account.status === "connected" ? "Manage" : "Connect"}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add More Account */}
          <div className="p-4 border-t border-white/10">
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-blue-400 hover:bg-blue-500/10"
            >
              + Link Another Account
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Generate Proof Card */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold mb-1">Generate Zero-Knowledge Proof</h3>
              <p className="text-sm text-gray-400">
                Create verifiable proofs without revealing your actual documents
              </p>
            </div>
            <Button variant="outline" className="border-blue-400/30 text-blue-400 hover:bg-blue-500/10">
              Generate Proof
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
