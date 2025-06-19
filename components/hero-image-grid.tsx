import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "/images/applinces r3.jpg",
  "/images/cleaning 3.jpg",
  "/images/haidresser 5.webp",
  "/images/security 3.jpg",
  "/images/spa treatment 5.jpg",
  "/images/electrician.png",
]

const GRID_SIZE = 3
const TOTAL_CARDS = GRID_SIZE * GRID_SIZE

export function HeroImageGrid() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="grid grid-cols-3 grid-rows-2 gap-3 w-full max-w-3xl p-2"
        style={{ aspectRatio: "3 / 2" }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="relative rounded-xl shadow-lg bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center aspect-square min-h-0 min-w-0 overflow-hidden"
          >
            {i < images.length ? (
              <>
                <img
                  src={images[i]}
                  alt={images[i].split("/").pop()?.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ") || "Hero Card"}
                  className="object-cover w-full h-full rounded-xl brightness-50"
                />
                <div className="absolute inset-0 bg-black/70 rounded-xl z-10" />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
} 