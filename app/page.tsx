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
} from "lucide-react"
import { HorizontalScrollBackground } from "@/components/horizontal-scroll-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { FadeInSection } from "@/components/fade-in-section"
import { ContactForm } from "@/components/contact-form"

export default function LandingPage() {
  // Navigation links
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#about-us", label: "About Us" },
    { href: "#partners", label: "Partners" },
    { href: "#why-choose-us", label: "Why Choose Us" },
  ]

  // Images for the hero background
  const heroBackgroundImages = [
    "/images/painter.png",
    "/images/electrician.png",
    "/images/hairdresser.webp",
    "/images/spa-treatment.png",
    "/images/gardener.webp",
    "/images/plumber.webp",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold leading-tight">
              <span className="flex flex-col">
                <span>
                  ProL<span className="text-blue-600">ii</span>nk
                </span>
                <span>
                  Co<span className="text-blue-600">nn</span>ect
                </span>
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Button variant="outline" className="border-[#00A3E0] text-[#00A3E0] hover:bg-[#00A3E0]/10" asChild>
                <Link href="/service-providers">Become a Service Provider</Link>
              </Button>
              <ThemeToggle />
            </div>
            <MobileMenu links={navLinks} providerLink="/service-providers" />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Horizontal Scrolling Background */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          <HorizontalScrollBackground images={heroBackgroundImages} />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Connecting You with Trusted Professionals for Fast, Safe, and Reliable Services.
              </h1>
              <p className="max-w-[600px] mx-auto text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
                The smart way to link professionals and clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
                  asChild
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 gradient-bg-light dark:gradient-bg-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4A4A4A]">
                  What We Bring to the Table
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers everything you need to find and book reliable services with confidence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-card">
                <CheckCircle className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Verified Providers</h3>
                <p className="text-center text-muted-foreground">
                  All service providers are thoroughly vetted and verified for your safety and peace of mind.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-card">
                <Truck className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Fast & Flexible</h3>
                <p className="text-center text-muted-foreground">
                  Book services for when you need them, with flexible scheduling and quick response times.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-card">
                <Smartphone className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Easy-to-Use Platform</h3>
                <p className="text-center text-muted-foreground">
                  Our intuitive web and mobile interfaces make finding and booking services a breeze.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-card">
                <MessageSquare className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Transparent Communication</h3>
                <p className="text-center text-muted-foreground">
                  Direct messaging with service providers ensures clear communication throughout the process.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-card">
                <CreditCard className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Secure Payments</h3>
                <p className="text-center text-muted-foreground">
                  Pay securely through our platform with transparent pricing and no hidden fees.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-card">
                <Globe className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Wide Coverage</h3>
                <p className="text-center text-muted-foreground">
                  Available across multiple regions with a growing network of qualified professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Finding and booking services has never been easier. Just follow these simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Search className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Browse</h3>
                <p className="text-center text-muted-foreground">
                  Find the right service or contractor for your specific needs from our extensive network.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <MessageCircle className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-center text-muted-foreground">
                  Send a request and chat directly with providers to discuss your requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Calendar className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Book</h3>
                <p className="text-center text-muted-foreground">
                  Confirm your booking, get the job done, and enjoy hassle-free service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="w-full py-12 md:py-24 lg:py-32 gradient-bg-light dark:gradient-bg-dark">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeInSection>
                <div className="space-y-6">
                  <h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    style={{ color: "#4A4A4A" }}
                  >
                    About ProL<span className="text-[#00A3E0]">ii</span>nk Co<span className="text-[#00A3E0]">nn</span>ect
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      ProLiink Connect is a pioneering platform that bridges the gap between skilled professionals and
                      clients seeking quality services. We've created a marketplace where finding the right service
                      provider is as simple as a few clicks, eliminating the frustration and uncertainty that often
                      comes with hiring professionals.
                    </p>
                    <p className="text-muted-foreground">
                      Founded in 2024, our mission has always been to empower both service providers and customers
                      through technology. We believe that everyone deserves access to reliable, skilled professionals,
                      and that talented service providers deserve a platform that helps them grow their business and
                      connect with clients who value their expertise.
                    </p>
                    <p className="text-muted-foreground">
                      Since our launch, we've grown to serve communities across Eastern Cape and beyond, with thousands
                      of successful service connections made through our platform. Our commitment to quality,
                      transparency, and customer satisfaction remains at the heart of everything we do, as we continue
                      to expand our network and improve our services.
                    </p>
                  </div>
                  <div>
                    <Button className="bg-[#00A3E0] hover:bg-[#0089BD]" asChild>
                      <Link href="/about">
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={300}>
                <div className="relative">
                  {/* Blurred gradient background */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#00A3E0]/30 to-[#4A4A4A]/30 rounded-xl blur-xl"></div>

                  {/* Image with gradient overlay */}
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <div className="aspect-[4/3] w-full">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250519_0959_Professional%20Home%20Services_simple_compose_01jvkrr8ctf4ft0z41ss9dvhby-ZuJkIHvwUUNvAcrOmG0Whja0KV5RIg.png"
                        alt="ProLiink service professionals greeting a customer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#00A3E0]/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
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
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers who rely on our platform for their service needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Save Time</h3>
                  <p className="text-muted-foreground">
                    We make finding reliable services effortless, saving you hours of research and phone calls.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Guaranteed Quality</h3>
                  <p className="text-muted-foreground">
                    Avoid scams and poor service with our vetted professionals and quality guarantee.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Our customer service team is always ready to help with any questions or issues.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Star className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Real Reviews</h3>
                  <p className="text-muted-foreground">
                    Make informed decisions based on authentic reviews from real users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg-light dark:gradient-bg-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4A4A4A]">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what people are saying about our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm bg-card">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "I found a trustworthy electrician in under 10 minutes—amazing platform!"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <p className="text-sm font-medium">Noxolo Mjokovane</p>
                    <p className="text-xs text-muted-foreground">Homeowner</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm bg-card">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "As a plumber, this platform has connected me with quality clients and streamlined my business."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <p className="text-sm font-medium">Msa Potelwa</p>
                    <p className="text-xs text-muted-foreground">Service Provider</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm bg-card">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The secure payment system and clear communication tools make this the best service platform I've
                  used."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <p className="text-sm font-medium">Emily Chen</p>
                    <p className="text-xs text-muted-foreground">Business Owner</p>
                  </div>
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
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#4A4A4A] to-[#00A3E0] dark:from-gray-900 dark:to-gray-800 text-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-center mb-8">
                Have questions or need assistance? Our team is here to help. Reach out to us using the information
                below.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p>support@proliinkconnect.co.za</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p>+27 78 128 3697</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-blue-black text-white">
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
                ProL<span className="text-blue-600">ii</span>nk Co<span className="text-blue-600">nn</span>ect
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The smart way to link professionals and clients.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="#about-us" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="#plumbing" className="text-sm text-muted-foreground hover:text-foreground">
                    Plumbing
                  </Link>
                </li>
                <li>
                  <Link href="#electrical" className="text-sm text-muted-foreground hover:text-foreground">
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link href="#gardening" className="text-sm text-muted-foreground hover:text-foreground">
                    Gardening
                  </Link>
                </li>
                <li>
                  <Link href="#hair-styling" className="text-sm text-muted-foreground hover:text-foreground">
                    Hair Styling
                  </Link>
                </li>
                <li>
                  <Link href="#painting" className="text-sm text-muted-foreground hover:text-foreground">
                    Painting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Contact Us</h3>
              <address className="mt-2 not-italic text-sm text-muted-foreground">
                <p>49 Leeds Street</p>
                <p>Cnr Leeds & Creister street</p>
                <p>Mthatha, Eastern Cape</p>
                <p>5099</p>
                <p className="mt-2">
                  <span className="block">Email: support@proliinkconnect.com</span>
                  <span className="block">Phone: +27 78 128 3697</span>
                </p>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2024 ProLiink Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
