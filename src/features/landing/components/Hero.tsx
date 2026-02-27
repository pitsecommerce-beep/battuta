import { Button } from '@/components/ui/Button'
import { useCountUp } from '@/hooks/useCountUp'
import { useReveal } from '@/hooks/useReveal'
import { ArrowRight, Play } from 'lucide-react'
import { HeroMockup } from './HeroMockup'

interface StatItemProps {
  target: number
  suffix: string
  label: string
}

function StatItem({ target, suffix, label }: StatItemProps): React.JSX.Element {
  const { ref, value } = useCountUp(target)
  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-0.5">
        <span ref={ref} className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          {value.toLocaleString()}
        </span>
        <span className="font-display text-2xl font-bold text-brand-400 sm:text-3xl">{suffix}</span>
      </div>
      <span className="mt-1 block text-sm text-text-tertiary">{label}</span>
    </div>
  )
}

export function Hero(): React.JSX.Element {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[128px]" />
        <div className="absolute top-32 right-0 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="hero-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="reveal flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
            <span className="badge-dot" />
            Nuevo: Integración con IA generativa
          </span>
        </div>

        {/* Title */}
        <h1 className="reveal reveal-delay-1 mx-auto mt-8 max-w-4xl text-center font-display text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Orquesta tu negocio{' '}
          <span className="gradient-text">en una sola plataforma</span>
        </h1>

        {/* Subtitle */}
        <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-text-secondary sm:text-xl">
          Centraliza tus conversaciones de Meta, incorpora inteligencia artificial, gestiona tu
          almacén y da seguimiento a cada pedido y envío. Todo al ritmo de tu empresa.
        </p>

        {/* CTA buttons */}
        <div className="reveal reveal-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button as="a" href="#pricing" size="lg">
            Empieza gratis <ArrowRight size={18} />
          </Button>
          <Button as="a" href="#how-it-works" variant="outline" size="lg">
            <Play size={18} /> Ver demo
          </Button>
        </div>

        {/* Stats */}
        <div className="reveal reveal-delay-4 mx-auto mt-16 flex max-w-xl items-center justify-center gap-8 sm:gap-12">
          <StatItem target={10000} suffix="+" label="Conversaciones/mes" />
          <div className="h-10 w-px bg-surface-300" />
          <StatItem target={500} suffix="+" label="Empresas activas" />
          <div className="h-10 w-px bg-surface-300" />
          <StatItem target={98} suffix="%" label="Satisfacción" />
        </div>

        {/* Mockup */}
        <HeroMockup />
      </div>
    </section>
  )
}
