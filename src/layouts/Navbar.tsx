import { useState, useCallback } from 'react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#features', label: 'Funcionalidades' },
  { href: '#how-it-works', label: 'Cómo funciona' },
  { href: '#pricing', label: 'Planes' },
  { href: '#testimonials', label: 'Testimonios' },
]

export function Navbar(): React.JSX.Element {
  const scrolled = useScrolledPast(50)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-surface-200/60 bg-surface-0/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button as="a" href="#" variant="ghost" size="sm">
            Iniciar sesión
          </Button>
          <Button as="a" href="#pricing" size="sm">
            Comenzar gratis
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-text-secondary transition hover:bg-surface-100 hover:text-text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú de navegación"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-surface-200/60 bg-surface-0/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 border-b-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition hover:bg-surface-100 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-surface-200 pt-3">
            <Button as="a" href="#" variant="ghost">
              Iniciar sesión
            </Button>
            <Button as="a" href="#pricing">
              Comenzar gratis
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
