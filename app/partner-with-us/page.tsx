"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

function DarkModeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      if (theme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-black border border-gray-200 dark:border-gray-700 shadow transition-colors duration-300 focus:outline-none"
    >
      <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ opacity: theme === 'light' ? 1 : 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ opacity: theme === 'dark' ? 1 : 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

export default function PartnerWithUsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate async submit
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#e6f7ff] dark:from-[#181c20] dark:to-[#222] flex flex-col">
      {/* Header with logo and home button */}
      <header className="w-full z-40 border-b bg-background/80 backdrop-blur-md sticky top-0">
        <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center">
              <img src="/images/handshake.png" alt="Handshake" className="h-8 w-auto mr-2" style={{height: '2.5rem', objectFit: 'contain'}} />
            </a>
            <a href="/" className="text-xl font-bold leading-tight">
              <span className="flex flex-col">
                <span>
                  ProL<span className="text-blue-600">i</span><span className="text-blue-600">i</span>nk
                </span>
                <span>
                  Co<span className="text-blue-600">nn</span>ect
                </span>
              </span>
            </a>
          </div>
        </div>
      </header>
      {/* Custom Dark/Light Toggle Button - fixed top right */}
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/handshake.png"
            alt="Partnership handshake"
            fill
            className="object-cover w-full h-full blur-md scale-105 opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-[#00A3E0]/10 dark:from-black/70 dark:to-[#00A3E0]/10" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center px-4 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00A3E0] mb-4 drop-shadow-lg">
            Let's Build the Future of Local Services — Together
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-4">
            ProLiink Connect is growing fast. We're looking for visionary investors and sponsors who want to shape Africa's service economy.
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
            Whether you're a funder, corporate sponsor, or startup ally — we'd love to hear from you. Fill in the form below and we'll get in touch to explore how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="flex-1 flex items-center justify-center py-8 px-2">
        <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden animate-fade-in-up">
          {/* Optional: Image on left for desktop */}
          <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-[#00A3E0]/10 to-[#4A4A4A]/10 p-8">
            <Image
              src="/images/handshake.png"
              alt="Business partnership"
              width={320}
              height={320}
              className="rounded-xl object-contain shadow-lg"
            />
          </div>
          {/* Form on right */}
          <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
            {!submitted ? (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input id="fullname" name="fullname" type="text" required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#00A3E0] focus:border-[#00A3E0] transition" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#00A3E0] focus:border-[#00A3E0] transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-gray-700 dark:text-gray-400">(optional)</span></label>
                    <input id="phone" name="phone" type="tel" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#00A3E0] focus:border-[#00A3E0] transition" />
                  </div>
                  <div>
                    <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-1">Organization or Company Name</label>
                    <input id="org" name="org" type="text" required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#00A3E0] focus:border-[#00A3E0] transition" />
                  </div>
                </div>
                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">Type of Partnership</label>
                  <select id="partnershipType" name="partnershipType" required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#00A3E0] focus:border-[#00A3E0] transition">
                    <option value="">Select...</option>
                    <option value="Investor">Investor</option>
                    <option value="Sponsor">Sponsor</option>
                    <option value="Strategic Partner">Strategic Partner</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#00A3E0] focus:border-[#00A3E0] transition" placeholder="Tell us a bit about your interest or intent..."></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-md bg-[#00A3E0] text-white font-semibold text-lg shadow-md hover:bg-[#0089BD] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : "Let's Talk"}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-[#00A3E0] mb-4">Thank you for reaching out!</h3>
                <p className="text-lg text-gray-700 mb-2">Our team will contact you within 24–48 hours.</p>
                <p className="text-base text-gray-500">We appreciate your interest in partnering with ProLiink Connect.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

// Animations
// Add this to your global CSS if not present:
// .animate-fade-in-up { animation: fadeInUp 0.7s both; }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } } 