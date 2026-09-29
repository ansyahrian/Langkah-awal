import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Features } from "@/components/features"
import { SupplierHighlight } from "@/components/supplier-highlight"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <Features />
        <SupplierHighlight />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
