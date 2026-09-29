import { Sparkles } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-display text-base font-bold tracking-tight">Esan Creative</span>
        </a>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Esan Creative. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
