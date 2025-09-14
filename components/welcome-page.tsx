"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface WelcomePageProps {
  onGetStarted: () => void
}

export default function WelcomePage({ onGetStarted }: WelcomePageProps) {
  const [showBackground, setShowBackground] = useState(false)
  const [showText, setShowText] = useState(false)
  const [showMinuet, setShowMinuet] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [showFrequency, setShowFrequency] = useState(false)

  useEffect(() => {
    // Staggered animations as requested
    setShowBackground(true)
    setTimeout(() => setShowText(true), 500)
    setTimeout(() => setShowMinuet(true), 1000)
    setTimeout(() => setShowButton(true), 1500)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${showBackground ? "opacity-100" : "opacity-0"}`}
        style={{
          background: "linear-gradient(135deg, #1D0A49 0%, #2A1255 30%, #1D0A49 70%, #0F051F 100%)",
        }}
      />

      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full animate-pulse floating-animation"
          style={{
            background:
              "radial-gradient(circle, rgba(237, 194, 142, 0.15) 0%, rgba(244, 175, 157, 0.08) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full animate-pulse delay-1000 floating-animation"
          style={{
            background: "radial-gradient(circle, rgba(244, 175, 157, 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full animate-pulse delay-2000"
          style={{
            background: "radial-gradient(circle, rgba(112, 84, 103, 0.2) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="absolute bottom-8 right-8 text-2xl animate-pulse ethereal-glow" style={{ color: "#EDC28E" }}>
        ✦
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Text content */}
        <div className="text-center mb-12">
          <div
            className={`text-4xl md:text-5xl font-light mb-4 transition-all duration-1000 ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ color: "#EDC28E" }}
          >
            Spend a minute with
          </div>

          {/* Minuet with special hover effect */}
          <div
            className={`relative transition-all duration-1000 ${
              showMinuet ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
            }`}
            onMouseEnter={() => setShowFrequency(true)}
            onMouseLeave={() => setShowFrequency(false)}
          >
            <h1
              className="text-6xl md:text-8xl font-script cursor-pointer ethereal-glow sparkle-effect"
              style={{
                color: "#FFFFFF",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(237, 194, 142, 0.4)",
              }}
            >
              minuet
            </h1>

            <div
              className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-end space-x-1 transition-opacity duration-300 ${
                showFrequency ? "opacity-40" : "opacity-0"
              }`}
            >
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-full animate-pulse"
                  style={{
                    backgroundColor: "#EDC28E",
                    width: "3px",
                    height: `${Math.random() * 20 + 5}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${0.5 + Math.random() * 0.5}s`,
                    boxShadow: "0 0 8px rgba(237, 194, 142, 0.6)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            onClick={onGetStarted}
            className="bg-transparent border-2 px-8 py-3 rounded-full text-lg font-light transition-all duration-300 transform hover:scale-105 dreamy-border magical-blur"
            style={{
              borderColor: "#EDC28E",
              color: "#EDC28E",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#EDC28E"
              e.currentTarget.style.color = "#1D0A49"
              e.currentTarget.style.boxShadow = "0 0 25px rgba(237, 194, 142, 0.5)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "#EDC28E"
              e.currentTarget.style.boxShadow = "0 0 20px rgba(237, 194, 142, 0.1)"
            }}
          >
            get started
          </Button>
        </div>
      </div>
    </div>
  )
}
