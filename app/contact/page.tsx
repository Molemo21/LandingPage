"use client"

import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
    }, 1200)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f0f9ff] to-[#e6f7ff] dark:from-[#181c20] dark:to-[#222] py-12 px-4">
      {/* Home button */}
      <div className="flex flex-col items-center mb-8">
        <a href="/" className="flex items-center gap-2">
          <img src="/images/handshake.png" alt="Handshake" className="h-8 w-auto mr-2" style={{height: '2.5rem', objectFit: 'contain'}} />
          <span className="text-xl font-bold leading-tight">
            <span className="flex flex-col">
              <span>
                ProL<span className="text-blue-600">i</span><span className="text-blue-600">i</span>nk
              </span>
              <span>
                Co<span className="text-blue-600">nn</span>ect
              </span>
            </span>
          </span>
        </a>
      </div>
      <div className="w-full max-w-lg bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl p-8 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-[#00A3E0] mb-2 text-center">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
        {!submitted ? (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Name</label>
              <input id="name" name="name" type="text" required className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:ring-2 focus:ring-[#00A3E0] focus:border-[#00A3E0] bg-white dark:bg-gray-800 transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:ring-2 focus:ring-[#00A3E0] focus:border-[#00A3E0] bg-white dark:bg-gray-800 transition" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Subject</label>
              <input id="subject" name="subject" type="text" required className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:ring-2 focus:ring-[#00A3E0] focus:border-[#00A3E0] bg-white dark:bg-gray-800 transition" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:ring-2 focus:ring-[#00A3E0] focus:border-[#00A3E0] bg-white dark:bg-gray-800 transition" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-md bg-[#00A3E0] text-white font-semibold text-lg shadow-md hover:bg-[#0089BD] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        ) : (
          <div className="text-center py-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-[#00A3E0] mb-4">Thank you for contacting us!</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">We'll get back to you within 24–48 hours.</p>
          </div>
        )}
      </div>
    </div>
  )
} 