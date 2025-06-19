"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Truck,
  Smartphone,
  MessageSquare,
  CreditCard,
  Globe,
  Search,
  MessageCircle,
  Calendar,
  Clock,
  Shield,
  Star,
  ChevronRight,
  ArrowLeftRight,
  Wrench,
  Zap,
  SprayCanIcon as Spray,
  Hammer,
  Paintbrush,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronLeft,
  Mail,
} from "lucide-react"
import { HorizontalScrollBackground } from "@/components/horizontal-scroll-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { FadeInSection } from "@/components/fade-in-section"
import { ContactForm } from "@/components/contact-form"
import { ServiceCard } from "@/components/service-card"
import { useState, useRef, useEffect } from "react"
import { HeroImageGrid } from "@/components/hero-image-grid"
import { Fragment } from "react"

export default function LandingPage() {
  const [exploreOpen, setExploreOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const joinlistRef = useRef(null)
  const [showSplash, setShowSplash] = useState(true)
  const [fadeSplash, setFadeSplash] = useState(false)
  const [contentReady, setContentReady] = useState(false)
  const [showBanner, setShowBanner] = useState(true)

  // Splash screen logic: only show on first load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.sessionStorage.getItem('splashShown')) {
        setShowSplash(false)
        return
      }
      // Show splash, then fade out after 5.5s
      const timer = setTimeout(() => {
        setFadeSplash(true)
        setTimeout(() => {
          setShowSplash(false)
          window.sessionStorage.setItem('splashShown', 'true')
        }, 700)
      }, 5500)
      return () => clearTimeout(timer)
    }
  }, [])

  // When splash is gone, trigger content fade-in
  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => setContentReady(true), 10)
    }
  }, [showSplash])

  // Smooth scroll handler for Joinlist
  const handleJoinlistClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const el = document.getElementById("joinlist")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Navigation links
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#about-us", label: "About Us" },
    { href: "#partners", label: "Partners" },
    { href: "#why-choose-us", label: "Why Choose Us" },
  ]

  return (
    <div className={`flex min-h-screen flex-col transition-all duration-700 ${showSplash ? 'opacity-0 blur-sm' : contentReady ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
      {/* Promotional Banner */}
      {showBanner && (
        <div className="relative w-full bg-gradient-to-r from-[#00A3E0] to-[#4A4A4A] text-white px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 z-50">
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-2">
            <span className="font-bold text-lg sm:text-xl">New! Book Trusted Home Services Instantly</span>
            <span className="text-sm sm:text-base opacity-90">Try ProLiink Connect for fast, reliable plumbing, electrical, cleaning, and more—now available in your area.</span>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <Link href="/services">
              <Button className="bg-white text-[#00A3E0] hover:bg-blue-50 font-semibold px-4 py-2 rounded shadow">Book Now</Button>
            </Link>
            <button
              className="ml-2 text-white/80 hover:text-white text-2xl font-bold px-2 focus:outline-none"
              aria-label="Dismiss banner"
              onClick={() => setShowBanner(false)}
              style={{ lineHeight: 1 }}
            >
              ×
            </button>
          </div>
        </div>
      )}
      {/* Splash Screen Overlay */}
      {showSplash && (
        <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a1626] transition-opacity duration-700 ${fadeSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <img src="/images/handshake.png" alt="Loading" className="w-80 h-80 object-contain animate-pulse mb-6" />
          <span className={`text-3xl font-bold text-white transition-opacity duration-700 ${fadeSplash ? 'opacity-0' : 'opacity-100'} animate-fade-in-out`}>Welcome</span>
        </div>
      )}
      <header className="sticky top-0 z-40 border-b border-foreground !bg-white dark:!bg-gray-900">
        <div className="container relative flex h-16 items-center justify-between py-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/handshake.png" alt="Handshake" className="h-8 w-auto mr-2" style={{height: '2.5rem', objectFit: 'contain'}} />
            <Link href="/" className="text-xl font-bold leading-tight">
              <span className="flex flex-col">
                <span>
                  ProL<span className="text-[#38bdf8]">i</span><span className="text-blue-600">i</span>nk
                </span>
                <span>
                  Co<span className="text-blue-600">nn</span>ect
                </span>
              </span>
            </Link>
          </div>
          {/* Center: Explore button */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6">
            <div className="relative flex items-center gap-2">
              <Button
                className="bg-transparent text-foreground hover:text-blue-600 px-4"
                onClick={() => setExploreOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={exploreOpen}
              >
                Explore
              </Button>
              {exploreOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-56 rounded-lg !bg-white dark:!bg-gray-900 border border-foreground z-50 transition-all duration-300 ease-in-out"
                  style={{ transformOrigin: 'top left' }}
                  onMouseLeave={() => setExploreOpen(false)}
                >
                  <div className="flex flex-col gap-2 p-2">
                    <Button variant="ghost" className="justify-start w-full text-foreground hover:text-blue-600" onClick={() => { window.location.href = '/services'; setExploreOpen(false); }}>
                      Services
                    </Button>
                    <Button variant="ghost" className="justify-start w-full text-foreground hover:text-blue-600" onClick={() => { document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); setExploreOpen(false); }}>
                      Features
                    </Button>
                    <Button variant="ghost" className="justify-start w-full text-foreground hover:text-blue-600" onClick={() => { document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); setExploreOpen(false); }}>
                      How It Works
                    </Button>
                    <Button variant="ghost" className="justify-start w-full text-foreground hover:text-blue-600" onClick={() => { window.location.href = '/about'; setExploreOpen(false); }}>
                      About Us
                    </Button>
                    <Button variant="ghost" className="justify-start w-full text-foreground hover:text-blue-600" onClick={() => { document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' }); setExploreOpen(false); }}>
                      Partners
                    </Button>
                    <Button variant="ghost" className="justify-start w-full text-foreground hover:text-blue-600" onClick={() => { document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' }); setExploreOpen(false); }}>
                      Why Choose Us
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </nav>
          {/* Right: Nav actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Button className="bg-transparent text-foreground hover:text-blue-600 px-4" onClick={handleJoinlistClick}>
                Joinlist
              </Button>
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="h-6 w-6 text-foreground hover:text-blue-600 transition-colors" />
              </Link>
              <ThemeToggle />
            </div>
            {/* Mobile: Show left arrow instead of hamburger menu */}
            <div className="md:hidden">
              <button onClick={() => setDrawerOpen(true)} aria-label="Open navigation drawer">
                <ChevronLeft className="h-8 w-8 text-foreground" />
              </button>
            </div>
            {/* Desktop: Keep MobileMenu hidden on mobile */}
            {/* <MobileMenu links={navLinks} providerLink="/service-providers" /> */}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Horizontal Scrolling Background */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden flex items-center justify-center">
          {/* Become a Service Provider button - top right */}
          <div className="absolute top-6 right-6 z-20">
            <Link href="/service-providers">
              <Button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#222] transition-colors font-semibold">
                Become a Service Provider
              </Button>
            </Link>
          </div>
          {/* Embedded Google Map background */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6716.017913457315!2d28.78869956889474!3d-31.586448832919153!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1750036523139!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%', filter: 'brightness(0.12) grayscale(1)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
          <div className="relative w-full flex items-center justify-center" style={{minHeight: '350px'}}>
            <HeroImageGrid />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-2 drop-shadow">
                The smart way to <span className="text-[#00A3E0]">link</span> professionals and clients
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-center text-gray-200 mb-4 max-w-xl">
                Connect with trusted experts in your area, all in one place
              </p>
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="w-full py-12 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Popular services</h2>
              <Link href="/services" className="text-blue-600 hover:underline whitespace-nowrap text-base font-medium">
                View all services
              </Link>
            </div>
            {/* Mobile horizontal scrollable carousel */}
            <div className="relative md:hidden">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-900/80 rounded-full shadow p-2 border border-gray-200 dark:border-gray-700"
                style={{ left: '-12px' }}
                onClick={() => {
                  const el = document.getElementById('popular-scroll');
                  if (el) el.scrollBy({ left: -el.offsetWidth * 0.8, behavior: 'smooth' });
                }}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6 text-blue-600" />
              </button>
              <div
                id="popular-scroll"
                className="flex overflow-x-auto hide-scrollbar gap-4 snap-x snap-mandatory scroll-smooth px-2"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                <div className="flex gap-4 min-w-full" style={{ minWidth: '100%' }}>
                  <div className="min-w-[80vw] max-w-xs snap-center flex-shrink-0">
                    <ServiceCard
                      icon={<Wrench className="h-6 w-6" />}
                      title="Plumbing"
                      description="Professional plumbing services for your home or business."
                      subcategories={["Leaks", "Pipe repairs", "Geyser installations", "Drainage", "Toilet repairs"]}
                      index={0}
                      slug="plumbing"
                      image="/images/plumber 33.jpg"
                    />
                  </div>
                  <div className="min-w-[80vw] max-w-xs snap-center flex-shrink-0">
                    <ServiceCard
                      icon={<Zap className="h-6 w-6" />}
                      title="Electrical Services"
                      description="Licensed electricians for all your electrical needs."
                      subcategories={["Fault finding", "Wiring", "Light fittings", "Compliance certificates", "Power outages"]}
                      index={1}
                      slug="electrical"
                      image="/images/electrician 5.jpg"
                    />
                  </div>
                  <div className="min-w-[80vw] max-w-xs snap-center flex-shrink-0">
                    <ServiceCard
                      icon={<Spray className="h-6 w-6" />}
                      title="Home Cleaning"
                      description="Professional cleaning services to keep your space spotless."
                      subcategories={["Deep cleaning", "Move-in/move-out", "Recurring services", "Window cleaning"]}
                      index={2}
                      slug="home-cleaning"
                      image="/images/cleaning 3.jpg"
                    />
                  </div>
                  <div className="min-w-[80vw] max-w-xs snap-center flex-shrink-0">
                    <ServiceCard
                      icon={<Hammer className="h-6 w-6" />}
                      title="Appliance Repairs"
                      description="Expert repair services for all household appliances."
                      subcategories={["Fridges", "Ovens", "Washing machines", "Dishwashers", "Microwaves"]}
                      index={3}
                      slug="appliance-repairs"
                      image="/images/applinces r3.jpg"
                    />
                  </div>
                  <div className="min-w-[80vw] max-w-xs snap-center flex-shrink-0">
                    <ServiceCard
                      icon={<Paintbrush className="h-6 w-6" />}
                      title="Painting & Renovations"
                      description="Transform your space with professional painting and renovation services."
                      subcategories={["Interior painting", "Exterior painting", "Plastering", "Touch-ups", "Wallpaper"]}
                      index={4}
                      slug="painting-renovations"
                      image="/images/painter 3.jpg"
                    />
                  </div>
                </div>
              </div>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-900/80 rounded-full shadow p-2 border border-gray-200 dark:border-gray-700"
                style={{ right: '-12px' }}
                onClick={() => {
                  const el = document.getElementById('popular-scroll');
                  if (el) el.scrollBy({ left: el.offsetWidth * 0.8, behavior: 'smooth' });
                }}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </button>
            </div>
            {/* Desktop grid with arrows */}
            <div className="relative hidden md:block">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-900/80 rounded-full shadow p-2 border border-gray-200 dark:border-gray-700"
                style={{ left: '-18px' }}
                onClick={() => {
                  const el = document.getElementById('popular-scroll-desktop');
                  if (el) el.scrollBy({ left: -el.offsetWidth * 0.8, behavior: 'smooth' });
                }}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6 text-blue-600" />
              </button>
              <div
                id="popular-scroll-desktop"
                className="grid grid-cols-5 gap-6 overflow-x-auto hide-scrollbar px-2"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                <ServiceCard
                  icon={<Wrench className="h-6 w-6" />}
                  title="Plumbing"
                  description="Professional plumbing services for your home or business."
                  subcategories={["Leaks", "Pipe repairs", "Geyser installations", "Drainage", "Toilet repairs"]}
                  index={0}
                  slug="plumbing"
                  image="/images/plumber 33.jpg"
                />
                <ServiceCard
                  icon={<Zap className="h-6 w-6" />}
                  title="Electrical Services"
                  description="Licensed electricians for all your electrical needs."
                  subcategories={["Fault finding", "Wiring", "Light fittings", "Compliance certificates", "Power outages"]}
                  index={1}
                  slug="electrical"
                  image="/images/electrician 5.jpg"
                />
                <ServiceCard
                  icon={<Spray className="h-6 w-6" />}
                  title="Home Cleaning"
                  description="Professional cleaning services to keep your space spotless."
                  subcategories={["Deep cleaning", "Move-in/move-out", "Recurring services", "Window cleaning"]}
                  index={2}
                  slug="home-cleaning"
                  image="/images/cleaning 3.jpg"
                />
                <ServiceCard
                  icon={<Hammer className="h-6 w-6" />}
                  title="Appliance Repairs"
                  description="Expert repair services for all household appliances."
                  subcategories={["Fridges", "Ovens", "Washing machines", "Dishwashers", "Microwaves"]}
                  index={3}
                  slug="appliance-repairs"
                  image="/images/applinces r3.jpg"
                />
                <ServiceCard
                  icon={<Paintbrush className="h-6 w-6" />}
                  title="Painting & Renovations"
                  description="Transform your space with professional painting and renovation services."
                  subcategories={["Interior painting", "Exterior painting", "Plastering", "Touch-ups", "Wallpaper"]}
                  index={4}
                  slug="painting-renovations"
                  image="/images/painter 3.jpg"
                />
              </div>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-900/80 rounded-full shadow p-2 border border-gray-200 dark:border-gray-700"
                style={{ right: '-18px' }}
                onClick={() => {
                  const el = document.getElementById('popular-scroll-desktop');
                  if (el) el.scrollBy({ left: el.offsetWidth * 0.8, behavior: 'smooth' });
                }}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark:bg-[#0f172a] text-slate-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Visual Card/Illustration */}
              <div className="w-full flex items-center justify-center mb-8 md:mb-0 h-full">
                <div className="w-full max-w-xs md:max-w-sm aspect-[4/5] rounded-xl shadow-lg border border-gray-800 overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#334155] flex items-center justify-center">
                  <img src="/images/prof.png" alt="What We Offer" className="w-full h-full object-cover object-center" />
                </div>
              </div>
              {/* Right: Features List */}
              <div className="flex flex-col gap-6 w-full">
                <div className="mb-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">What We Offer</h2>
                  <p className="text-lg text-gray-700 dark:text-slate-300">Discover a smarter way to book trusted local services.</p>
                </div>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/80 shadow transition hover:scale-105 hover:bg-gray-800/90 duration-300">
                    <CheckCircle className="h-7 w-7 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Verified Professionals</h3>
                      <p className="text-slate-400 text-base">All providers are carefully vetted for trust and reliability.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/80 shadow transition hover:scale-105 hover:bg-gray-800/90 duration-300">
                    <Calendar className="h-7 w-7 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Fast & Flexible Booking</h3>
                      <p className="text-slate-400 text-base">Schedule services exactly when you need them — no hassle.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/80 shadow transition hover:scale-105 hover:bg-gray-800/90 duration-300">
                    <Smartphone className="h-7 w-7 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">User-Friendly Platform</h3>
                      <p className="text-slate-400 text-base">Seamlessly browse, book, and manage services from your phone or computer.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/80 shadow transition hover:scale-105 hover:bg-gray-800/90 duration-300">
                    <MessageSquare className="h-7 w-7 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Clear Communication</h3>
                      <p className="text-slate-400 text-base">Chat directly with service providers for updates and details.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/80 shadow transition hover:scale-105 hover:bg-gray-800/90 duration-300">
                    <Shield className="h-7 w-7 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Secure & Transparent Payments</h3>
                      <p className="text-slate-400 text-base">Pay safely online with clear pricing and no surprise fees.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/80 shadow transition hover:scale-105 hover:bg-gray-800/90 duration-300">
                    <Globe className="h-7 w-7 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Wide Service Coverage</h3>
                      <p className="text-slate-400 text-base">Find qualified professionals in your region — with more joining every day.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16">
              {/* Left: Steps */}
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gray-900 dark:text-white">How It Works</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#00A3E0] mb-1">1. Browse</h3>
                    <p className="text-gray-700 dark:text-muted-foreground text-base">Find the right service or contractor for your specific needs from our extensive network.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#00A3E0] mb-1">2. Connect</h3>
                    <p className="text-gray-700 dark:text-muted-foreground text-base">Send a request and chat directly with providers to discuss your requirements.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#00A3E0] mb-1">3. Book</h3>
                    <p className="text-gray-700 dark:text-muted-foreground text-base">Confirm your booking, get the job done, and enjoy hassle-free service.</p>
                  </div>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src="/images/handshake.png"
                  alt="How it works handshake"
                  className="w-full max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px] h-auto object-contain drop-shadow-xl rounded-xl"
                  style={{ minHeight: '120px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why People Trust Our Platform
                </h2>
                <p className="max-w-[900px] text-gray-700 dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers who rely on our platform for their service needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Save Time</h3>
                  <p className="text-gray-700 dark:text-muted-foreground">
                    We make finding reliable services effortless, saving you hours of research and phone calls.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Guaranteed Quality</h3>
                  <p className="text-gray-700 dark:text-muted-foreground">
                    Avoid scams and poor service with our vetted professionals and quality guarantee.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Dedicated Support</h3>
                  <p className="text-gray-700 dark:text-muted-foreground">
                    Our customer service team is always ready to help with any questions or issues.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Star className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Real Reviews</h3>
                  <p className="text-gray-700 dark:text-muted-foreground">
                    Make informed decisions based on authentic reviews from real users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="w-full py-12 md:py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#4A4A4A] dark:text-white">
                Our Trusted Partners
              </h2>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
                Proudly supported by industry leaders who share our vision
              </p>
            </div>

            <div className="overflow-hidden">
              <div className="flex animate-scroll-x">
                {[...Array(2)].map((_, trackIndex) => (
                  <div key={trackIndex} className="flex items-center flex-nowrap">
                    {[
                      {
                        name: "Deviare",
                        logo: "/images/partners/deviare.png",
                        width: 180,
                      },
                      {
                        name: "Liquid Intelligent Technologies",
                        logo: "/images/partners/liquid_intelligent_technologies_logo.jpg",
                        width: 220,
                      },
                      {
                        name: "King Sabata Dalindyebo TVET College",
                        logo: "/images/partners/king_sabata_dalindyebo_tvet_college.jpg",
                        width: 200,
                      },
                      {
                        name: "King Sabata Dalindyebo Municipality",
                        logo: "/images/partners/king_sabata_dalindyebo_municipality.png",
                        width: 180,
                      },
                      {
                        name: "BUCO",
                        logo: "/images/partners/buco.jpeg",
                        width: 180,
                      },
                    ].map((partner, index) => (
                      <div key={`${trackIndex}-${index}`} className="flex items-center justify-center mx-8">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          className="h-20 w-auto object-contain"
                          style={{ maxWidth: partner.width + "px" }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" className="gap-2 border-[#00A3E0] text-[#00A3E0] hover:bg-[#00A3E0]/10" asChild>
                <Link href="/partner-with-us">
                  <ArrowLeftRight className="h-4 w-4" />
                  Become a Partner
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="joinlist" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#00A3E0] to-[#4A4A4A] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form below to be part of the community.
                </p>
              </div>
              <div className="w-full max-w-md mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold">
                <span className="flex flex-col">
                  <span>ProL<span className="text-blue-600">ii</span>nk</span>
                  <span>Co<span className="text-blue-600">nn</span>ect</span>
                </span>
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-muted-foreground">
                The smart way to link professionals and clients.
              </p>
              <img src="/images/handshake.png" alt="Handshake" className="mt-4 h-10 w-auto" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="#plumbing" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                    Plumbing
                  </Link>
                </li>
                <li>
                  <Link href="#electrical" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link href="#gardening" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                    Gardening
                  </Link>
                </li>
                <li>
                  <Link href="#hair-styling" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                    Hair Styling
                  </Link>
                </li>
                <li>
                  <Link href="#painting" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                    Painting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Contact Us</h3>
              <address className="mt-2 not-italic text-sm text-gray-700 dark:text-muted-foreground">
                <p>49 Leeds Street</p>
                <p>Cnr Leeds & Creister street</p>
                <p>Mthatha, Eastern Cape</p>
                <p>5099</p>
                <p className="mt-2">
                  <span className="block">Email: support@proliinkconnect.co.za</span>
                  <span className="block">Phone: +27 78 128 3697</span>
                </p>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
            <div className="flex justify-center gap-6 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/proliink-connect-sa" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-gray-700 dark:text-muted-foreground">© 2024 ProLiink Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex flex-row-reverse">
          <div className="bg-white dark:bg-gray-900 w-64 h-full shadow-lg p-6 flex flex-col gap-4 animate-slide-in-right">
            <div className="flex justify-end mb-2">
              <ThemeToggle />
            </div>
            <button className="self-end mb-4" onClick={() => setDrawerOpen(false)} aria-label="Close navigation drawer">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600" onClick={() => setDrawerOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/service-providers" className="text-lg font-medium text-blue-600 hover:underline" onClick={() => setDrawerOpen(false)}>
              Become a Service Provider
            </Link>
            <Button className="bg-[#00A3E0] text-white mt-4" onClick={handleJoinlistClick}>
              Joinlist
            </Button>
          </div>
          <div className="flex-1" onClick={() => setDrawerOpen(false)} />
        </div>
      )}
    </div>
  )
}
