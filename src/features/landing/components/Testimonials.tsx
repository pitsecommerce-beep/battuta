import { SectionHeader } from '@/components/ui/SectionHeader'
import { useReveal } from '@/hooks/useReveal'
import { Star } from 'lucide-react'

interface Testimonial {
  text: string
  name: string
  role: string
  initials: string
  gradient: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: '"Battuta transformó cómo manejamos nuestras ventas por WhatsApp. Pasamos de perder mensajes a cerrar 3x más ventas con la IA respondiendo al instante."',
    name: 'Laura Castillo',
    role: 'CEO, ModaExpress',
    initials: 'LC',
    gradient: 'from-brand-500 to-accent-500',
  },
  {
    text: '"El control de inventario sincronizado con los pedidos de Instagram es brutal. Antes tardábamos horas actualizando stock, ahora es automático."',
    name: 'Miguel Rodríguez',
    role: 'Fundador, UrbanShop',
    initials: 'MR',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    text: '"Lo mejor es la trazabilidad completa: desde que el cliente escribe hasta que recibe su paquete. Battuta nos dio visibilidad total de la operación."',
    name: 'Ana Sofía Méndez',
    role: 'COO, GreenMarket',
    initials: 'AS',
    gradient: 'from-emerald-500 to-green-600',
  },
]

function Stars(): React.JSX.Element {
  return (
    <div className="mb-4 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export function Testimonials(): React.JSX.Element {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="border-y border-surface-200/50 bg-surface-50/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Testimonios"
          title={
            <>
              Lo que dicen
              <br />
              <span className="gradient-text">nuestros clientes</span>
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal ${i ? `reveal-delay-${i}` : ''} rounded-2xl border border-surface-200 bg-surface-50 p-6 transition-all duration-300 hover:border-surface-300 hover:bg-surface-100 sm:p-8`}
            >
              <Stars />
              <p className="mb-6 leading-relaxed text-text-secondary">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white ${t.gradient}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">{t.name}</div>
                  <div className="text-xs text-text-tertiary">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
