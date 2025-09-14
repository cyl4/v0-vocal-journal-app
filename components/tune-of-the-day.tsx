"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TuneOfTheDay() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-purple-900 border-2 border-orange-300 rounded-3xl p-6">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-orange-300 text-xl font-medium">tune of the day</h2>

        <div className="flex space-x-2">
          <Button
            onClick={togglePlayback}
            className="w-8 h-8 rounded-full bg-orange-300 hover:bg-orange-400 text-purple-900 flex items-center justify-center text-sm transition-all duration-300"
          >
            {isPlaying ? "⏸" : "▶"}
          </Button>

          <Button
            onClick={() => setIsPlaying(false)}
            className="w-8 h-8 rounded-full bg-orange-300 hover:bg-orange-400 text-purple-900 flex items-center justify-center text-sm transition-all duration-300"
          >
            ⏹
          </Button>
        </div>
      </div>

      <div className="text-orange-200 leading-relaxed">
        <p className="italic mb-4">
          {"<chatbot will introduce a vibe and then give a generated song from sona- we have backend for this>"}
        </p>

        <div className="bg-purple-800 rounded-2xl p-4">
          <p className="mb-3">
            Based on today's voice log, I sense a contemplative and hopeful energy. Here's a song that captures your
            current mood:
          </p>

          <div className="bg-purple-700 rounded-xl p-3">
            <h3 className="font-medium text-orange-300 mb-2">"Gentle Reflections"</h3>
            <p className="text-sm">
              A soothing melody with soft piano and ambient sounds, perfect for your thoughtful state of mind today.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
