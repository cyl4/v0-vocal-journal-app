"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AccountPage() {
  const [user, setUser] = useState<{ username: string; firstName: string } | null>(null)

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center">
        <div className="text-orange-200 text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Navigation />

      <main className="px-8 py-6 pb-24">
        <div className="max-w-2xl mx-auto">
          {/* Account Information */}
          <div className="bg-purple-900 border-2 border-orange-300 rounded-3xl p-8">
            <h1 className="text-orange-300 text-3xl font-medium mb-8 text-center">My Account</h1>

            <div className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-orange-300 text-lg font-medium mb-2">first name:</label>
                <div className="bg-purple-800 rounded-lg p-4 border border-orange-300">
                  <span className="text-orange-200 text-lg">[{user.firstName}]</span>
                </div>
              </div>

              {/* Username */}
              <div>
                <label className="block text-orange-300 text-lg font-medium mb-2">username:</label>
                <div className="bg-purple-800 rounded-lg p-4 border border-orange-300">
                  <span className="text-orange-200 text-lg">[{user.username}]</span>
                </div>
              </div>

              {/* Account Stats */}
              <div className="mt-8 pt-6 border-t border-orange-300">
                <h2 className="text-orange-300 text-xl font-medium mb-4">Account Statistics</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-800 rounded-lg p-4 text-center">
                    <div className="text-orange-300 text-2xl font-bold">12</div>
                    <div className="text-orange-200 text-sm">Total Entries</div>
                  </div>
                  <div className="bg-purple-800 rounded-lg p-4 text-center">
                    <div className="text-orange-300 text-2xl font-bold">8.2</div>
                    <div className="text-orange-200 text-sm">Avg Mood Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Star decoration */}
      <div className="fixed bottom-8 right-8 text-yellow-300 text-2xl animate-pulse">✦</div>
    </div>
  )
}
