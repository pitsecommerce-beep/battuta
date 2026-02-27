import { SectionHeader } from '@/components/ui/SectionHeader'
import { useReveal } from '@/hooks/useReveal'
import { LogIn, Settings, CheckCircle } from 'lucide-react'
import type { ReactNode } from 'react'

interface StepCardProps {
  number: string
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

function StepCard({ number, icon, title, description, delay = 0 }: StepCardProps): React.JSX.Element {
  return (
    <div
      className={`reveal ${delay ? `reveal-delay-${delay}` : ''} group relative rounded-2xl border border-surface-200 bg-surface-50 p-8 text-center transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-100`}
    >
      {/* Number background */}
      <span className="pointer-events-none absolute top-4 right-4 font-display text-6xl font-bold text-surface-200/60 select-none">
        {number}
      </span>

      <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-400 transition-colors group-hover:bg-brand-500/25">
        {icon}
      </div>
      <h3 className="mb-3 font-display text-xl font-semibold text-text-primary">{title}</h3>
      <p className="leading-relaxed text-text-secondary">{description}</p>
    </div>
  )
}

export function HowItWorks(): React.JSX.Element {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="border-y border-surface-200/50 bg-surface-50/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Cómo funciona"
          title={
            <>
              De cero a orquesta
              <br />
              <span className="gradient-text">en tres movimientos</span>
            </>
          }
          subtitle="Configura Battuta en minutos, no en semanas. Sin código, sin complicaciones."
        />

        <div className="grid gap-8 md:grid-cols-3">
          <StepCard
            number="01"
            icon={<LogIn size={28} />}
            title="Conecta tus canales"
            description="Vincula tu WhatsApp Business, Instagram y Messenger en menos de 5 minutos con nuestra integración directa con Meta."
          />
          <StepCard
            number="02"
            icon={<Settings size={28} />}
            title="Configura tu orquesta"
            description="Personaliza respuestas de IA, carga tu catálogo de productos y define flujos de trabajo. Todo desde un panel visual e intuitivo."
            delay={1}
          />
          <StepCard
            number="03"
            icon={<CheckCircle size={28} />}
            title="Lanza y escala"
            description="Tu equipo atiende, la IA asiste, el inventario se actualiza y los envíos se rastrean. Todo sincronizado automáticamente."
            delay={2}
          />
        </div>
      </div>
    </section>
  )
}
