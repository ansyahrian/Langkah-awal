import { ShieldCheck, Star, Zap, Nfc, LifeBuoy } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Bangun Kredibilitas Usaha",
    desc: "Review positif membantu calon pelanggan jauh lebih percaya dan yakin memilih usaha Anda",
  },
  {
    icon: Star,
    title: "Akses Review Instan",
    desc: "Pelanggan langsung diarahkan ke halaman Google Review tanpa repot mencari nama tempat secara manual.",
  },
  {
    icon: Zap,
    title: "Tanpa Aplikasi",
    desc: "Tidak butuh instal aplikasi apa pun. Cukup sekali tap (NFC) atau scan (QR code).",
  },
  {
    icon: Nfc,
    title: "Teknologi Ganda NFC & QR",
    desc: "Kompatibel dengan semua jenis smartphone modern berkat kombinasi chip NFC dan kode QR dalam satu kartu",
  },
  {
    icon: LifeBuoy,
    title: "Siap Pakai & Bergaransi (atau: Dukungan Penuh untuk Reseller)",
    desc: "Dilengkapi panduan aktivasi, dukungan teknis, dan jaminan kartu berfungsi maksimal.",
  },
]

export function Features() {
  return (
    <section id="keunggulan" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Solusi Praktis Raih Review Positif & Kepercayaan Calon Customer</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Kenapa ini penting? 
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
