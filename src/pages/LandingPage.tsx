import { Navbar } from '@/layouts/Navbar'
import { Footer } from '@/layouts/Footer'
import { Hero } from '@/features/landing/components/Hero'
import { LogosBar } from '@/features/landing/components/LogosBar'
import { Features } from '@/features/landing/components/Features'
import { HowItWorks } from '@/features/landing/components/HowItWorks'
import { Pricing } from '@/features/landing/components/Pricing'
import { Testimonials } from '@/features/landing/components/Testimonials'
import { FinalCta } from '@/features/landing/components/FinalCta'

export default function LandingPage(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogosBar />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
