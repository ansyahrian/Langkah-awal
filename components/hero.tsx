import Image from "next/image"
import { Star, Nfc, QrCode, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
            Google Review
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tingkatkan Review & Kembangkan Bisnis Anda.
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Esan Creative membantu bisnis mendapatkan lebih banyak ulasan Google dengan pengalaman yang simpel melalui
            teknologi NFC + QR.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#produk">
                Lihat Produk <span aria-hidden="true">→</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
              <a href="#cara-kerja">Pelajari Cara Kerja</a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
            <li className="inline-flex items-center gap-2">
              <Nfc className="h-4 w-4 text-primary" aria-hidden="true" /> Teknologi NFC &amp; QR
            </li>
            <li className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" aria-hidden="true" /> Langsung ke Google Review
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" /> Aman &amp; praktis
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-xl">
            <Image
              src="/esan-google-review-card.png"
              alt="Kartu Google Review Esan Creative dengan NFC dan QR code"
              width={1417}
              height={945}
              className="h-full w-full rounded-2xl object-cover"
              priority
            />
          </div>

          <div className="absolute -left-3 top-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-left-6">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">Google Review</p>
          </div>

          <div className="absolute -bottom-3 right-2 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:right-4">
            <QrCode className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold">Tap &amp; Scan</span>
          </div>
        </div>
      </div>
    </section>
  )
}
