"use client"

import { motion } from "framer-motion"
import { Star, Heart, CheckCircle } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  rating?: number
  index?: number
  date?: string
  projectDetails?: string
  imageUrl?: string
  verified?: boolean
  likes?: number
}

export function TestimonialCard({ 
  quote, 
  name, 
  role, 
  rating = 5, 
  index = 0,
  date,
  projectDetails,
  imageUrl,
  verified = false,
  likes = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm bg-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
          ))}
        </div>
        {verified && (
          <div className="flex items-center space-x-1 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span className="text-xs font-medium">Verified</span>
          </div>
        )}
      </div>
      
      <p className="text-muted-foreground italic">"{quote}"</p>
      
      {projectDetails && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{projectDetails}</p>
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={name} 
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
            {date && (
              <p className="text-xs text-muted-foreground">{date}</p>
            )}
          </div>
        </div>
        
        {likes > 0 && (
          <div className="flex items-center space-x-1 text-gray-500">
            <Heart className="h-4 w-4" />
            <span className="text-xs">{likes}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
