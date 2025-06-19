"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

interface TeamCardProps {
  name: string
  role: string
  quote: string
  index: number
  image?: string
  linkedin?: string
}

export function TeamCard({ name, role, quote, index, image, linkedin }: TeamCardProps) {
  const [tiltAngle, setTiltAngle] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = (y - centerY) / 20
    const tiltY = (centerX - x) / 20

    setTiltAngle({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTiltAngle({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden min-h-[340px] md:min-h-[360px] flex flex-col justify-center"
      style={{
        transform: `perspective(1000px) rotateX(${tiltAngle.x}deg) rotateY(${tiltAngle.y}deg)`,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Card-wide dimmed background image if provided */}
      {image && (
        <img
          src={image}
          alt={name + " card background"}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
          style={{ filter: 'brightness(0.3) grayscale(1)' }}
        />
      )}
      <div className="flex flex-col items-center text-center space-y-4 relative z-10 mt-52">
        <div>
          <h3 className="text-white font-semibold text-xl">{name}</h3>
          <p className="text-[#00A3E0] text-sm">{role}</p>
        </div>
        <p className="text-white/80 italic text-sm">"{quote}"</p>
        <div className="flex space-x-4 mt-2">
          <a
            href={linkedin || "#"}
            className="text-white/70 hover:text-[#00A3E0] transition-colors duration-300"
            aria-label={`${name}'s LinkedIn profile`}
            target="_blank" rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-[#00A3E0] transition-colors duration-300"
            aria-label={`Email ${name}`}
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
