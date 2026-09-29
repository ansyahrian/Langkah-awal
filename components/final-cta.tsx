import { Sparkles, Lock, ShieldCheck, LifeBuoy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section id="mulai" className="border-t border-border">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Sparkles className="h-6 w-6" aria-hidden="true" />
        </span>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary">Siap Mulai?</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Tingkatkan review. Kembangkan bisnis.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          Gabung bersama Esan Creative dan buat pelanggan lebih mudah memberikan ulasan.
        </p>

        <Button asChild size="lg" className="mt-8 rounded-full">
          <a href="#produk">
            Mulai Sekarang <span aria-hidden="true">→</span>
          </a>
        </Button>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
          <li className="inline-flex items-center gap-2">
            <Lock className="h-4 w-4 text-primary" aria-hidden="true" /> Aman
          </li>
          <li className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" /> Terpercaya
          </li>
          <li className="inline-flex items-center gap-2">
            <LifeBuoy className="h-4 w-4 text-primary" aria-hidden="true" /> Support
          </li>
        </ul>
      </div>
    </section>
  )
}
