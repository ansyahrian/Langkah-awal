import { ShoppingBag, CreditCard, ScanLine, Star, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: ShoppingBag,
    title: "Pilih Produk",
    desc: "Pilih paket sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: CreditCard,
    title: "Aktifkan Kartu",
    desc: "Aktifkan kartu NFC / QR di sistem Esan Creative.",
  },
  {
    icon: ScanLine,
    title: "Scan / Tap",
    desc: "Pelanggan cukup scan QR atau tap kartu NFC.",
  },
  {
    icon: Star,
    title: "Langsung ke Review",
    desc: "Pelanggan diarahkan ke halaman Google Review.",
  },
  {
    icon: TrendingUp,
    title: "Lebih Banyak Review",
    desc: "Bangun kepercayaan dan pertumbuhan bisnis.",
  },
]

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Cara Kerja: </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          5 langkah sederhana menuju lebih banyak ulasan.
        </h2>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <step.icon className="mt-4 h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
