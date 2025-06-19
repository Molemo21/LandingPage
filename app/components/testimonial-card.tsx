import { useState } from 'react'
import { motion } from "framer-motion"
import { Star, ThumbsUp, Share2, Badge, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  rating: number
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
  date,
  projectDetails,
  imageUrl,
  verified = false,
  likes = 0
}: TestimonialCardProps) {
  const [likeCount, setLikeCount] = useState(likes)
  const [hasLiked, setHasLiked] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleLike = () => {
    if (!hasLiked) {
      setLikeCount(prev => prev + 1)
      setHasLiked(true)
    }
  }

  return (
    <motion.div
      className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm bg-card hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Rating and Date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
            />
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          {date}
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-700 dark:text-muted-foreground">"{quote}"</p>

      {/* Project Details if available */}
      {projectDetails && (
        <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
          <strong>Project:</strong> {projectDetails}
        </div>
      )}

      {/* Profile Section */}
      <div className="flex items-center space-x-3">
        <div className="relative h-12 w-12">
          {imageUrl && !imageError ? (
            <Image
              src={imageUrl}
              alt={name}
              width={48}
              height={48}
              className="rounded-full object-cover"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
              {name.charAt(0)}
            </div>
          )}
          {verified && (
            <Badge className="absolute -bottom-1 -right-1 h-5 w-5 text-blue-500" />
          )}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <p className="font-medium">{name}</p>
            {verified && (
              <span className="text-xs text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">
                Verified Provider
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>

      {/* Interaction Buttons */}
      <div className="flex items-center space-x-4 pt-2 border-t">
        <Button
          variant="ghost"
          size="sm"
          className={`gap-2 ${hasLiked ? 'text-blue-500' : ''}`}
          onClick={handleLike}
        >
          <ThumbsUp className="h-4 w-4" />
          <span>{likeCount}</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: `${name}'s Review of ProLiink Connect`,
                text: quote,
                url: window.location.href,
              })
            }
          }}
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>
    </motion.div>
  )
} 