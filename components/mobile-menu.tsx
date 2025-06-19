"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
  providerLink?: string
}

export function MobileMenu({ links, providerLink }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" className="text-foreground hover:text-blue-600">
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-150"
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white dark:bg-gray-900 border-l border-foreground z-50 transform transition-transform duration-150 ease-in-out backdrop-blur-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-foreground">
            <span className="text-xl font-bold leading-tight">
              <span className="flex flex-col">
                <span>
                  ProL<span className="text-[#38bdf8]">i</span><span className="text-blue-600">i</span>nk
                </span>
                <span>
                  Co<span className="text-blue-600">nn</span>ect
                </span>
              </span>
            </span>
            <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu" className="text-foreground hover:text-blue-600">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="/services"
              className="text-foreground hover:text-blue-600 py-2 text-lg font-medium"
              onClick={closeMenu}
            >
              Services
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-blue-600 py-2 text-lg font-medium"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            {providerLink && (
              <Link
                href={providerLink}
                className="text-foreground hover:text-blue-600 py-2 text-lg font-medium"
                onClick={closeMenu}
              >
                Become a Service Provider
              </Link>
            )}
          </nav>

          <div className="mt-auto p-4 border-t border-foreground">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Switch theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
