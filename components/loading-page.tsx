"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingPage() {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return ""
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex flex-col items-center justify-center px-8">
      {/* Star in bottom right */}
      <div className="absolute bottom-8 right-8 text-yellow-300 text-2xl animate-pulse">✦</div>

      {/* Loading image */}
      <div className="mb-8 rounded-lg overflow-hidden shadow-2xl">
        <Image
          src="/images/loading-image.png"
          alt="Loading visualization"
          width={600}
          height={400}
          className="object-cover"
        />
      </div>

      {/* Loading text with animated dots */}
      <div className="text-white text-2xl md:text-3xl font-light italic">loading minuet{dots}</div>
    </div>
  )
}
