const faqs = [
  {
    q: "Apakah pelanggan perlu menginstal aplikasi?",
    a: "Tidak. Pelanggan cukup melakukan tap kartu NFC atau scan QR menggunakan kamera ponsel, lalu langsung diarahkan ke halaman Google Review Anda.",
  },
  {
    q: "Apakah kartu bisa digunakan untuk Google Review bisnis saya?",
    a: "Ya. Kartu dapat dihubungkan langsung ke halaman Google Review bisnis Anda, sehingga setiap tap atau scan menuju lokasi bisnis yang tepat.",
  },
  {
    q: "Apa keuntungan akses supplier?",
    a: "Dengan akses supplier Anda bisa mendapatkan kartu NFC / QR berkualitas mulai Rp20.000, cocok untuk memulai bisnis reseller dengan modal terjangkau.",
  },
  {
    q: "Apakah NFC dan QR bisa digunakan bersamaan?",
    a: "Bisa. Satu kartu mendukung dua metode akses sekaligus, sehingga pelanggan bebas memilih tap NFC atau scan QR.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-primary">FAQ</p>
        <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Pertanyaan yang sering ditanyakan.
        </h2>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-border bg-card p-5 [&_svg]:open:rotate-45"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold">
                {faq.q}
                <svg
                  className="h-5 w-5 shrink-0 text-primary transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
