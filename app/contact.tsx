import React from "react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-4">
      <div className="max-w-lg w-full bg-card rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input id="name" name="name" type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input id="email" name="email" type="email" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" name="message" className="w-full border rounded px-3 py-2" rows={4} required />
          </div>
          <button type="submit" className="w-full bg-[#00A3E0] text-white py-2 rounded hover:bg-[#0089BD]">Send Message</button>
        </form>
        <div className="mt-8 text-center text-muted-foreground">
          <p>Email: support@proliinkconnect.co.za</p>
          <p>Phone: +27 78 128 3697</p>
        </div>
      </div>
    </div>
  )
} 