import { SectionHeader } from '@/components/ui/SectionHeader'
import { useReveal } from '@/hooks/useReveal'
import { MessageCircle, Bot, Warehouse, Truck } from 'lucide-react'
import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  iconClass: string
  title: string
  description: string
  children?: ReactNode
  large?: boolean
  delay?: number
}

function FeatureCard({
  icon,
  iconClass,
  title,
  description,
  children,
  large,
  delay = 0,
}: FeatureCardProps): React.JSX.Element {
  return (
    <div
      className={`reveal ${delay ? `reveal-delay-${delay}` : ''} group relative overflow-hidden rounded-2xl border border-surface-200 bg-surface-50 p-6 transition-all duration-300 hover:border-surface-300 hover:bg-surface-100 sm:p-8 ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconClass}`}
      >
        {icon}
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-text-primary sm:text-xl">
        {title}
      </h3>
      <p className="mb-4 leading-relaxed text-text-secondary">{description}</p>
      {children}
    </div>
  )
}

function ChannelPill({
  label,
  color,
}: {
  label: string
  color: string
}): React.JSX.Element {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${color}`}
    >
      {label}
    </span>
  )
}

export function Features(): React.JSX.Element {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Funcionalidades"
          title={
            <>
              Todo lo que necesitas,
              <br />
              <span className="gradient-text">en perfecta armonía</span>
            </>
          }
          subtitle="Cada módulo de Battuta trabaja en conjunto como instrumentos de una orquesta, creando una sinfonía operativa para tu negocio."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Meta inbox - large */}
          <FeatureCard
            icon={<MessageCircle size={24} className="text-blue-400" />}
            iconClass="bg-blue-500/15"
            title="Inbox unificado de Meta"
            description="Centraliza WhatsApp, Instagram y Messenger en un solo lugar. Nunca más pierdas una conversación ni saltes entre aplicaciones."
            large
          >
            <div className="flex flex-wrap gap-2">
              <ChannelPill
                label="WhatsApp"
                color="border-whatsapp/30 bg-whatsapp/10 text-whatsapp"
              />
              <ChannelPill
                label="Instagram"
                color="border-instagram/30 bg-instagram/10 text-instagram"
              />
              <ChannelPill
                label="Messenger"
                color="border-messenger/30 bg-messenger/10 text-messenger"
              />
            </div>
          </FeatureCard>

          {/* AI */}
          <FeatureCard
            icon={<Bot size={24} className="text-purple-400" />}
            iconClass="bg-purple-500/15"
            title="IA conversacional"
            description="Respuestas automáticas inteligentes que entienden contexto, resuelven dudas y escalan a humanos cuando es necesario."
            delay={1}
          >
            <div className="flex flex-wrap gap-2">
              {['GPT', 'NLP', 'Auto-learn'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-surface-200 px-2.5 py-1 text-xs font-medium text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FeatureCard>

          {/* Warehouse */}
          <FeatureCard
            icon={<Warehouse size={24} className="text-amber-400" />}
            iconClass="bg-amber-500/15"
            title="Gestión de almacén"
            description="Control de inventario en tiempo real. Alertas de stock bajo, categorías, variantes y sincronización con tus canales de venta."
            delay={2}
          >
            <div className="flex items-end gap-1.5 pt-2">
              {[60, 85, 45, 92, 70, 55, 78].map((h, i) => (
                <div
                  key={i}
                  className="mini-bar w-5 rounded-t bg-gradient-to-t from-amber-600 to-amber-400"
                  style={{ '--height': `${h}%`, height: `${h}%` } as React.CSSProperties}
                />
              ))}
            </div>
          </FeatureCard>

          {/* Orders & Shipping - large */}
          <FeatureCard
            icon={<Truck size={24} className="text-emerald-400" />}
            iconClass="bg-emerald-500/15"
            title="Pedidos y envíos"
            description="Del carrito a la puerta. Gestiona pedidos, genera guías de envío, rastrea paquetes y notifica a tus clientes automáticamente."
            large
            delay={3}
          >
            <div className="flex items-center gap-2">
              {['Pedido', 'Empaque', 'Envío', 'Entrega'].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        i < 2
                          ? 'bg-emerald-500'
                          : i === 2
                            ? 'bg-brand-500 ring-2 ring-brand-500/30'
                            : 'bg-surface-300'
                      }`}
                    />
                    <span className="text-xs text-text-tertiary">{step}</span>
                  </div>
                  {i < 3 && (
                    <div
                      className={`mb-4 h-0.5 w-6 sm:w-10 ${
                        i < 2 ? 'bg-emerald-500' : 'bg-surface-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}
