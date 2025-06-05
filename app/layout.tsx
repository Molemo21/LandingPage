import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ProLiink - Connect with Trusted Service Providers",
  description: "Find, hire, and connect with vetted service providers near you—on-demand.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between py-4 mx-auto">
              <div className="flex items-center gap-2">
                <a href="/" className="text-xl font-bold leading-tight flex items-center gap-2" style={{height: '2.5rem'}}>
                  <span className="flex flex-col leading-tight justify-center" style={{lineHeight: '1.2'}}>
                    <span>
                      ProL<span className="text-blue-600">ii</span>nk
                    </span>
                    <span>
                      Co<span className="text-blue-600">nn</span>ect
                    </span>
                  </span>
                  <img
                    src="/images/handshake.png"
                    alt="Handshake"
                    className="ml-2 rounded"
                    style={{ height: '2.5rem', width: 'auto', maxHeight: '40px' }}
                  />
                </a>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-sm font-medium hover:underline">Features</a>
                <a href="#how-it-works" className="text-sm font-medium hover:underline">How It Works</a>
                <a href="#partners" className="text-sm font-medium hover:underline">Partners</a>
                <a href="#why-choose-us" className="text-sm font-medium hover:underline">Why Choose Us</a>
              </nav>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-4">
                  <a href="/services" className="border border-[#00A3E0] text-[#00A3E0] hover:bg-[#00A3E0]/10 rounded px-4 py-2 text-sm font-medium transition">Explore</a>
                  <a href="/service-providers" className="border border-[#00A3E0] text-[#00A3E0] hover:bg-[#00A3E0]/10 rounded px-4 py-2 text-sm font-medium transition">Become a Service Provider</a>
                  {/* ThemeToggle can be added here if you want to keep it globally */}
                </div>
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
