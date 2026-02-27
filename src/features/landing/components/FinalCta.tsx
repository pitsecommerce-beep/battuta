import { Button } from '@/components/ui/Button'
import { useReveal } from '@/hooks/useReveal'
import { ArrowRight } from 'lucide-react'

export function FinalCta(): React.JSX.Element {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl border border-surface-200 bg-surface-50 p-10 text-center sm:p-16 lg:p-24">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-brand-500/20 blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 h-48 w-72 rounded-full bg-accent-500/15 blur-[80px]" />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-xl font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
              Listo para dirigir
              <br />
              <span className="gradient-text">tu propia orquesta?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-text-secondary">
              Comienza gratis y escala cuando lo necesites. Sin tarjeta de crédito, sin compromisos.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button as="a" href="#pricing" size="lg">
                Empieza gratis hoy <ArrowRight size={18} />
              </Button>
              <Button as="a" href="#" variant="outline" size="lg">
                Agenda una demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
