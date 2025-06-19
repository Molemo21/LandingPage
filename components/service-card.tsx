"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  subcategories: string[]
  index: number
  slug: string
  image?: string
}

export function ServiceCard({ icon, title, description, subcategories, index, slug, image }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className="relative flex flex-col h-full rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {image && (
          <img
            src={image}
            alt={title + ' background'}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className={"relative z-20 flex flex-col h-full p-6 text-white"}>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A3E0]/10 flex items-center justify-center text-[#00A3E0] bg-white/80">
              {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="mb-4" style={{ color: 'white', textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>{description}</p>
          <div className="mt-auto flex flex-col sm:flex-row gap-3">
            <Button variant="outline" onClick={() => setIsOpen(true)} className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
            <Button className="bg-[#00A3E0] hover:bg-[#0089BD] text-white" asChild>
              <Link href="/#joinlist">Joinlist</Link>
            </Button>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <span className="text-[#00A3E0]">{icon}</span> {title}
            </DialogTitle>
            <DialogDescription className="text-base">{description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Services Include:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {subcategories.map((subcategory, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-[#00A3E0]" />
                    <span>{subcategory}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Pricing:</h4>
              <p className="text-muted-foreground">
                Pricing varies based on the specific service and scope of work. Get a quote by booking a service.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">What to Expect:</h4>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Book your service and describe your needs</li>
                <li>2. Get matched with a qualified professional</li>
                <li>3. Confirm appointment details</li>
                <li>4. Service is completed to your satisfaction</li>
                <li>5. Pay securely through our platform</li>
              </ol>
            </div>
            <div className="pt-4">
              <Button className="w-full bg-[#00A3E0] hover:bg-[#0089BD]" asChild>
                <Link href={`/services/${slug}`}>Book This Service</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
