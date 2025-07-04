"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Briefcase, Calendar, CreditCard, Star, ChevronRight, MessageCircle } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"

export default function ServiceProvidersPage() {
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
          </div>
        </div>
      </header>

      <main className="flex-1">
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
                <p className="text-xl text-gray-700 dark:text-muted-foreground">
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
                    src="/images/proliink meet.png"
                    alt="Proliink Meet"
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
                <p className="max-w-[700px] text-gray-700 dark:text-muted-foreground">
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
                  <p className="text-gray-700 dark:text-muted-foreground">{benefit.description}</p>
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
                <p className="max-w-[700px] text-gray-700 dark:text-muted-foreground">
                  Hear from service professionals who have grown their business with ProLiink Connect.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="ProLiink helped me double my monthly bookings. The platform's scheduling system is incredibly efficient, and clients are easier to deal with. Payments come through fast and securely."
                name="Sipho Ndlovu"
                role="Master Electrician"
                rating={5}
                date="March 15, 2024"
                projectDetails="Completed 150+ electrical installations and repairs through ProLiink Connect"
                imageUrl="/images/providers/sipho.jpg"
                verified={true}
                likes={42}
              />
              <TestimonialCard
                quote="I've been able to grow my plumbing business without spending on advertising. The platform brings me quality clients and the verification system ensures mutual trust. The support team is always helpful."
                name="Thabo Molefe"
                role="Licensed Plumber"
                rating={5}
                date="March 10, 2024"
                projectDetails="Specializes in emergency repairs and installations, 200+ jobs completed"
                imageUrl="/images/providers/thabo.jpg"
                verified={true}
                likes={38}
              />
              <TestimonialCard
                quote="As a handyman, I love the flexibility. I can choose jobs that fit my schedule and skills. The payment process is seamless, and the platform helps me showcase my diverse range of services."
                name="John Smith"
                role="Professional Handyman"
                rating={5}
                date="March 12, 2024"
                projectDetails="Expert in home repairs and maintenance, 180+ satisfied customers"
                imageUrl="/images/providers/john.jpg"
                verified={true}
                likes={35}
              />
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
      </main>

      <footer className="w-full border-t py-6 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700 dark:text-muted-foreground">© 2024 ProLiink Connect. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-700 dark:text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
