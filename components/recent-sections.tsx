"use client"

import { useState } from "react"

export default function RecentSections() {
  const [playingTune, setPlayingTune] = useState<number | null>(null)

  const recentHues = [
    "bg-gradient-to-br from-purple-400 to-pink-400",
    "bg-gradient-to-br from-yellow-300 to-orange-400",
    "bg-gradient-to-br from-orange-400 to-red-400",
    "bg-gradient-to-br from-green-400 to-teal-400",
  ]

  const recentTunes = [
    "Peaceful Morning Melody",
    "Energetic Afternoon Beat",
    "Contemplative Evening Song",
    "Motivational Daily Anthem",
  ]

  const handleTunePlay = (index: number) => {
    if (playingTune === index) {
      setPlayingTune(null) // Stop playing
    } else {
      setPlayingTune(index) // Start playing
    }
  }

  return (
    <div className="space-y-6">
      {/* Recent Hues */}
      <div className="bg-purple-900 border-2 border-orange-300 rounded-3xl p-6">
        <h2 className="text-orange-300 text-2xl font-bold mb-4">recent hues</h2>
        <div className="flex space-x-4">
          {recentHues.map((hue, index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-full ${hue} cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              title={`Hue from ${7 - index} days ago`}
            />
          ))}
        </div>
      </div>

      {/* Recent Tunes */}
      <div className="bg-purple-900 border-2 border-orange-300 rounded-3xl p-6">
        <h2 className="text-orange-300 text-2xl font-bold mb-4">recent tunes</h2>
        <div className="text-orange-200 space-y-2">
          <p className="italic">{"<insert list of generated songs from previous voice logs>"}</p>
          {recentTunes.map((tune, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b border-orange-300/30 hover:bg-purple-800/50 rounded px-2 transition-all duration-200"
            >
              <span className="flex-1">{tune}</span>
              <button
                onClick={() => handleTunePlay(index)}
                className={`text-orange-300 hover:text-orange-100 transition-all duration-200 transform hover:scale-110 ${
                  playingTune === index ? "text-green-400" : ""
                }`}
                title={playingTune === index ? "Stop" : "Play"}
              >
                {playingTune === index ? "⏸" : "▶"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
