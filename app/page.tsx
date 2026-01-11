import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { Solution } from "@/components/landing/solution"
import { HowItWorks } from "@/components/landing/how-it-works"
import { WhoItsFor } from "@/components/landing/who-its-for"
import { Pricing } from "@/components/landing/pricing"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <WhoItsFor />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
