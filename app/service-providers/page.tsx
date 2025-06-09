"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Briefcase, Calendar, CreditCard, Star, ChevronRight, MessageCircle, Search, User, LogOut } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { generateMockServiceProviders } from "@/lib/mock-data"
import { ServiceProviderCard } from "@/components/service-provider-card"
import { ServiceProviderModal } from "@/components/service-provider-modal"
import { AuthenticatedView } from "@/components/auth/AuthenticatedView"
import { useAuth } from "@/components/auth/AuthContext"
import { LoginModal } from "@/components/auth/LoginModal"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ServiceProvidersPage() {
  const { isAuthenticated, logout, user } = useAuth()
  const [showLoginModal, setShowLoginModal] = useState(false)
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const service = searchParams.get('service');
  const problem = searchParams.get('problem');
  const fromSearch = searchParams.get('fromSearch');

  const [providers, setProviders] = useState<any[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (category) {
      const filteredProviders = generateMockServiceProviders(category);
      setProviders(filteredProviders);
    }
  }, [category]);

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
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user?.profileImage || ""} alt={user?.fullName || "User"} />
                      <AvatarFallback className="bg-[#00A3E0]/10">
                        <User className="h-5 w-5 text-[#00A3E0]" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {user?.fullName && (
                        <p className="font-medium">{user.fullName}</p>
                      )}
                      {user?.email && (
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-red-600 cursor-pointer"
                    onClick={logout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost"
                onClick={() => setShowLoginModal(true)}
                className="text-[#00A3E0] hover:text-[#00A3E0]/80"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {fromSearch ? (
          <div className="container py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Service Providers</h1>
              {category && service && problem && (
                <p className="text-muted-foreground">
                  Showing results for {service} services in {category} category - {problem}
                </p>
              )}
            </div>

            <AuthenticatedView providerCount={providers.length}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {providers.map((provider) => (
                  <ServiceProviderCard
                    key={provider.id}
                    provider={provider}
                    onViewDetails={() => {
                      setSelectedProvider(provider);
                      setShowModal(true);
                    }}
                  />
                ))}
              </div>
            </AuthenticatedView>
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-r from-[#f8fafc] to-[#e0f2fe] dark:from-gray-900 dark:to-gray-800">
              <div className="container relative z-10 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                      Grow Your Business with ProL<span className="text-[#00A3E0]">ii</span>nk Co
                      <span className="text-[#00A3E0]">nn</span>ect
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Join a trusted network of service professionals and get matched with real clients near you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      
                      <Button size="lg" variant="outline" className="bg-white text-[#00A3E0] hover:bg-[#0089BD] text-black" asChild>
                        <Link href="/how-it-works">Learn How It Works</Link>
                      </Button>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-xl">
                      <img
                        src="/images/proliink%20meet.png"
                        alt="Service provider receiving job notification"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#00A3E0]/20 to-transparent"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Join ProLiink Connect?</h2>
                    <p className="max-w-[700px] text-muted-foreground">
                      Our platform is designed to help service providers like you grow their business and increase income.
                    </p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <Briefcase className="h-12 w-12 text-[#00A3E0]" />,
                      title: "Steady Work Opportunities",
                      description: "Get job requests from real clients in your area—no cold calling needed.",
                    },
                    {
                      icon: <CreditCard className="h-12 w-12 text-[#00A3E0]" />,
                      title: "Verified Payments",
                      description: "Get paid quickly and securely through our platform.",
                    },
                    {
                      icon: <Star className="h-12 w-12 text-[#00A3E0]" />,
                      title: "Build Your Reputation",
                      description: "Earn reviews, boost your profile, and attract more clients.",
                    },
                    {
                      icon: <Calendar className="h-12 w-12 text-[#00A3E0]" />,
                      title: "Work on Your Terms",
                      description: "Choose the jobs you want, when you want them.",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Providers Say</h2>
                    <p className="max-w-[700px] text-muted-foreground">
                      Hear from service professionals who have grown their business with ProLiink Connect.
                    </p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      quote:
                        "ProLiink helped me double my monthly bookings. Clients are easier to deal with and payments come through fast.",
                      name: "Sipho Ndlovu",
                      role: "Electrician",
                    },
                    {
                      quote:
                        "I've been able to grow my plumbing business without spending on advertising. The platform brings me quality clients.",
                      name: "Thabo Molefe",
                      role: "Plumber",
                    },
                    {
                      quote:
                        "As a handyman, I love the flexibility. I can choose jobs that fit my schedule and skills, and the payment process is seamless.",
                      name: "John Smith",
                      role: "Handyman",
                    },
                  ].map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm bg-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground">"{testimonial.quote}"</p>
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div>
                          <p className="text-sm font-medium">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#00A3E0] to-[#4A4A4A] text-white">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Ready to take control of your schedule and grow your income?
                    </h2>
                    <p className="max-w-[700px] mx-auto text-xl">
                      Join thousands of service providers who are building successful businesses with ProLiink Connect.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Button size="lg" className="bg-white text-[#00A3E0] hover:bg-gray-100">
                      Become a Service Provider <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Talk to Our Team <MessageCircle className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      
      {selectedProvider && (
        <ServiceProviderModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          provider={selectedProvider}
        />
      )}

      <footer className="w-full border-t py-6 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2024 ProLiink Connect. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
