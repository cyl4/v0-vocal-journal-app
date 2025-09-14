"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import RecordingSection from "@/components/recording-section"
import OverviewSection from "@/components/overview-section"
import YesterdaySection from "@/components/yesterday-section"
import RecentSections from "@/components/recent-sections"

export default function HomePage() {
  const [user, setUser] = useState<{ username: string; firstName: string } | null>(null)
  const [reportStatus, setReportStatus] = useState<"idle" | "working" | "completed">("idle")
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    // Get user data
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }

    // Set current date in Eastern Time
    const now = new Date()
    const easternTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(now)
    setCurrentDate(easternTime)
  }, [])

  const handleRecordingSubmit = () => {
    setReportStatus("working")
    setTimeout(() => {
      setReportStatus("completed")
    }, 8000) // 8 seconds as requested
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Navigation />

      <main className="px-8 py-6 pb-24">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-light mb-2">
            Welcome to your <span className="italic underline">minuet</span>!
          </h1>
          <p className="text-orange-200 text-xl">{currentDate}</p>
          <div className="mt-4">
            <span className="text-orange-200 text-lg">daily report status: </span>
            <span
              className={`text-lg font-medium ${
                reportStatus === "idle"
                  ? "text-gray-300"
                  : reportStatus === "working"
                    ? "text-yellow-300"
                    : "text-green-300"
              }`}
            >
              {reportStatus}
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recording Section */}
          <RecordingSection onSubmit={handleRecordingSubmit} />

          {/* Overview Section */}
          <OverviewSection />
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Yesterday Section */}
          <YesterdaySection />

          {/* Recent Sections */}
          <RecentSections />
        </div>
      </main>

      <Footer />

      {/* Star decoration */}
      <div className="fixed bottom-8 right-8 text-yellow-300 text-2xl animate-pulse">✦</div>
    </div>
  )
}
