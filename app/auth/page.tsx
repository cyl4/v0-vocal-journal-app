"use client"

import { useState } from "react"
import LoginForm from "@/components/login-form"
import SignUpForm from "@/components/signup-form"
import ForgotPasswordModal from "@/components/forgot-password-modal"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center px-8">
      {/* Star in bottom right */}
      <div className="absolute bottom-8 right-8 text-yellow-300 text-2xl animate-pulse">✦</div>

      <div className="w-full max-w-md">
        {/* Tab buttons */}
        <div className="flex mb-8 rounded-full overflow-hidden">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-4 px-6 text-lg font-medium transition-all duration-300 ${
              activeTab === "login"
                ? "bg-orange-200 text-purple-900"
                : "bg-purple-600 text-orange-200 hover:bg-purple-500"
            }`}
          >
            log in
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-4 px-6 text-lg font-medium transition-all duration-300 ${
              activeTab === "signup"
                ? "bg-orange-200 text-purple-900"
                : "bg-purple-600 text-orange-200 hover:bg-purple-500"
            }`}
          >
            sign up
          </button>
        </div>

        {/* Form content */}
        <div className="bg-orange-200 rounded-3xl p-8">
          {activeTab === "login" ? <LoginForm onForgotPassword={() => setShowForgotPassword(true)} /> : <SignUpForm />}
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />}
    </div>
  )
}
