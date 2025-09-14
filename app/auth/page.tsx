"use client"

import { useState } from "react"
import LoginForm from "@/components/login-form"
import SignUpForm from "@/components/signup-form"
import ForgotPasswordModal from "@/components/forgot-password-modal"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  return (
    <div
      className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1D0A49 0%, #2A1255 30%, #1D0A49 70%, #0F051F 100%)",
      }}
    >
      <div className="absolute bottom-8 right-8 text-2xl animate-pulse ethereal-glow" style={{ color: "#EDC28E" }}>
        ✦
      </div>

      <div className="w-full max-w-md">
        {/* Tab buttons */}
        <div className="flex mb-8 rounded-full overflow-hidden">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-4 px-6 text-lg font-medium transition-all duration-300 ${
              activeTab === "login" ? "text-white font-bold" : "text-gray-300 hover:text-white"
            }`}
            style={{
              backgroundColor: activeTab === "login" ? "#EDC28E" : "#705467",
              color: activeTab === "login" ? "#1D0A49" : "#EDC28E",
            }}
          >
            log in
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-4 px-6 text-lg font-medium transition-all duration-300 ${
              activeTab === "signup" ? "text-white font-bold" : "text-gray-300 hover:text-white"
            }`}
            style={{
              backgroundColor: activeTab === "signup" ? "#EDC28E" : "#705467",
              color: activeTab === "signup" ? "#1D0A49" : "#EDC28E",
            }}
          >
            sign up
          </button>
        </div>

        {/* Form content */}
        <div className="rounded-3xl p-8" style={{ backgroundColor: "#EDC28E" }}>
          {activeTab === "login" ? <LoginForm onForgotPassword={() => setShowForgotPassword(true)} /> : <SignUpForm />}
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />}
    </div>
  )
}
