import { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useReveal } from '@/hooks/useReveal'
import { Check, X } from 'lucide-react'
import { PRICING_PLANS } from '../data/pricing'
import type { PricingPlan } from '../types/pricing'

function PricingCard({
  plan,
  annual,
  delay = 0,
}: {
  plan: PricingPlan
  annual: boolean
  delay?: number
}): React.JSX.Element {
  const price = annual ? plan.annualPrice : plan.monthlyPrice

  return (
    <div
      className={`reveal ${delay ? `reveal-delay-${delay}` : ''} relative flex flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
        plan.featured
          ? 'border-brand-500/50 bg-brand-500/5 shadow-lg shadow-brand-500/10'
          : 'border-surface-200 bg-surface-50 hover:border-surface-300'
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold text-white">
          Más popular
        </span>
      )}

      {/* Header */}
      <div className="mb-6">
        <span className="mb-1 block font-display text-2xl select-none">{plan.dynamic}</span>
        <h3 className="font-display text-xl font-bold text-text-primary">{plan.name}</h3>
        <p className="text-sm text-text-tertiary">{plan.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-sm text-text-tertiary">$</span>
        <span className="font-display text-4xl font-bold text-text-primary">{price}</span>
        <span className="text-sm text-text-tertiary">/ mes</span>
      </div>

      {/* Features */}
      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li
            key={feature.label}
            className={`flex items-start gap-2.5 text-sm ${
              feature.included ? 'text-text-secondary' : 'text-text-tertiary/50'
            }`}
          >
            {feature.included ? (
              <Check size={16} className="mt-0.5 shrink-0 text-brand-400" />
            ) : (
              <X size={16} className="mt-0.5 shrink-0" />
            )}
            {feature.label}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className={`mt-auto inline-flex items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${
          plan.featured
            ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600 hover:shadow-brand-500/40'
            : 'border border-surface-300 text-text-secondary hover:border-surface-200 hover:bg-surface-100 hover:text-text-primary'
        }`}
      >
        {plan.cta}
      </a>
    </div>
  )
}

export function Pricing(): React.JSX.Element {
  const [annual, setAnnual] = useState(false)
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Planes"
          title={
            <>
              Elige tu
              <br />
              <span className="gradient-text">tempo ideal</span>
            </>
          }
          subtitle="Desde un solo hasta la orquesta completa. Escala a tu ritmo, sin contratos anuales."
        />

        {/* Toggle */}
        <div className="reveal mb-12 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium transition ${!annual ? 'text-text-primary' : 'text-text-tertiary'}`}
          >
            Mensual
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            data-active={annual}
            className="relative h-7 w-12 cursor-pointer rounded-full bg-surface-300 p-1 transition-colors data-[active=true]:bg-brand-500"
            aria-label="Cambiar entre mensual y anual"
          >
            <span className="toggle-thumb" />
          </button>
          <span
            className={`text-sm font-medium transition ${annual ? 'text-text-primary' : 'text-text-tertiary'}`}
          >
            Anual
          </span>
          <span className="rounded-full bg-brand-500/15 px-2.5 py-0.5 text-xs font-semibold text-brand-400">
            Ahorra 20%
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRICING_PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} annual={annual} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
