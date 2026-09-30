import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    tag: "Untuk Pribadi",
    name: "Paket Pribadi",
    subtitle: "1 kartu Google Review NFC / QR siap pakai",
    features: [
      "1 kartu NFC / QR Google Review",
      "Terhubung langsung ke Google Review",
      "Cocok untuk satu usaha / toko",
    ],
    note: "Harga per 1 kartu",
    badge: "Personal",
    price: "Rp30.000",
    unit: "/ 1 kartu",
    href: "https://s.shopee.co.id/9zy99JsAwj",
    featured: false,
  },
  {
    tag: "Untuk Reseller",
    name: "Paket Reseller",
    subtitle: "Isi 5 kartu — harga hemat untuk dijual kembali",
    features: [
      "10 kartu NFC / QR Google Review",
      "Harga khusus reseller (hanya Rp25.000/kartu)",
      "Bebas dijual kembali dengan margin besar",
      "Include Template Excel Database Leads",
    ],
    note: "Isi 10 kartu — setara Rp25.000/kartu",
    badge: "Paling Hemat",
    oldPrice: "Rp150.000",
    price: "Rp125.000",
    unit: "/ 5 kartu",
    save: "Hemat 30%",
    href: "https://s.shopee.co.id/50ZTC2UXs4",
    featured: true,
  },
]

export function Pricing() {
  return (
    <section id="produk" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Pilih Paket Terbaik</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Pilihan Produk</h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            Mulai dengan paket yang paling sesuai dengan tujuan bisnis Anda.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border bg-card p-8 ${
                plan.featured ? "border-primary shadow-xl ring-1 ring-primary/20" : "border-border"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{plan.tag}</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.featured ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.subtitle}</p>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-end gap-x-3 gap-y-1 border-t border-border pt-6">
                <span className="font-display text-3xl font-extrabold">{plan.price}</span>
                {plan.unit ? <span className="mb-1 text-sm text-muted-foreground">{plan.unit}</span> : null}
                {plan.oldPrice ? (
                  <span className="mb-1 text-sm text-muted-foreground line-through">{plan.oldPrice}</span>
                ) : null}
                {plan.save ? (
                  <span className="mb-1 rounded-full bg-accent/20 px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                    {plan.save}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{plan.note}</p>

              <Button
                asChild
                size="lg"
                variant={plan.featured ? "default" : "outline"}
                className={`mt-6 rounded-full ${plan.featured ? "" : "bg-transparent"}`}
              >
                <a href={plan.href} target="_blank" rel="noopener noreferrer">
                  Pilih Paket Ini <span aria-hidden="true">→</span>
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
