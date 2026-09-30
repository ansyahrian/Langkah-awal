import { Button } from "@/components/ui/button"

export function SupplierHighlight() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-8 rounded-3xl border border-border bg-primary p-8 text-primary-foreground sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
              Keuntungan Produk
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Akses supplier dengan harga mulai Rp25.000.
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
              Bangun peluang reseller Anda dengan akses supplier kartu NFC / QR dan harga yang lebih terjangkau.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full">
              <a href="#produk">
                Mulai Jadi Reseller <span aria-hidden="true">→</span>
              </a>
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-primary-foreground/10 p-10 text-center">
            <span className="font-display text-5xl font-extrabold sm:text-6xl">Rp25.000</span>
            <span className="mt-2 text-sm text-primary-foreground/80">Harga akses supplier mulai</span>
          </div>
        </div>
      </div>
    </section>
  )
}
