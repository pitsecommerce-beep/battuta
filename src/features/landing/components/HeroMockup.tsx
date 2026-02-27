import {
  MessageSquare,
  Layers,
  Truck,
  BarChart3,
  Bot,
} from 'lucide-react'

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}

function SidebarItem({ icon, label, active }: SidebarItemProps): React.JSX.Element {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition ${
        active
          ? 'bg-brand-500/15 font-medium text-brand-400'
          : 'text-text-tertiary hover:text-text-secondary'
      }`}
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </div>
  )
}

export function HeroMockup(): React.JSX.Element {
  return (
    <div className="reveal reveal-delay-5 mx-auto mt-16 max-w-5xl">
      <div className="overflow-hidden rounded-xl border border-surface-200 bg-surface-50 shadow-2xl shadow-black/40">
        {/* Window top bar */}
        <div className="flex items-center gap-3 border-b border-surface-200 bg-surface-100 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="mx-auto rounded-md bg-surface-200 px-4 py-1 text-xs text-text-tertiary">
            app.battuta.io
          </div>
        </div>

        {/* App body */}
        <div className="flex min-h-[340px] sm:min-h-[400px]">
          {/* Sidebar */}
          <div className="flex w-14 flex-col gap-1 border-r border-surface-200 bg-surface-100/60 p-2 lg:w-48 lg:p-3">
            <SidebarItem icon={<MessageSquare size={18} />} label="Conversaciones" active />
            <SidebarItem icon={<Layers size={18} />} label="Almacén" />
            <SidebarItem icon={<Truck size={18} />} label="Envíos" />
            <SidebarItem icon={<BarChart3 size={18} />} label="Analítica" />
          </div>

          {/* Chat main */}
          <div className="flex flex-1 flex-col">
            {/* Chat header */}
            <div className="flex items-center gap-3 border-b border-surface-200 px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-whatsapp/20 text-xs font-bold text-whatsapp">
                W
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-text-primary">María García</div>
                <div className="text-xs text-text-tertiary">WhatsApp Business</div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-medium text-brand-400">
                <Bot size={12} /> IA activa
              </span>
            </div>

            {/* Messages */}
            <div className="flex flex-1 flex-col gap-3 p-4">
              {/* Received */}
              <div className="max-w-[75%] self-start rounded-2xl rounded-bl-sm bg-surface-200 px-4 py-2.5">
                <p className="text-sm text-text-primary">
                  Hola, quiero saber el estado de mi pedido #4521
                </p>
                <span className="mt-1 block text-right text-[10px] text-text-tertiary">10:32</span>
              </div>

              {/* Sent AI */}
              <div className="max-w-[75%] self-end rounded-2xl rounded-br-sm bg-brand-600 px-4 py-2.5">
                <span className="mb-1 inline-block rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-medium text-brand-200">
                  Respuesta IA
                </span>
                <p className="text-sm text-white">
                  ¡Hola María! Tu pedido #4521 está en camino. La guía es TRK-8834. Llegará el
                  jueves entre 2-5 PM.
                </p>
                <span className="mt-1 block text-right text-[10px] text-white/60">10:32</span>
              </div>

              {/* Received */}
              <div className="max-w-[75%] self-start rounded-2xl rounded-bl-sm bg-surface-200 px-4 py-2.5">
                <p className="text-sm text-text-primary">¡Perfecto, gracias!</p>
                <span className="mt-1 block text-right text-[10px] text-text-tertiary">10:33</span>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="hidden w-56 flex-col gap-3 border-l border-surface-200 bg-surface-100/40 p-4 lg:flex">
            <h4 className="text-xs font-semibold tracking-wider text-text-tertiary uppercase">
              Detalle del pedido
            </h4>
            <PanelRow label="Pedido" value="#4521" />
            <PanelRow
              label="Estado"
              value={
                <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-xs font-medium text-green-400">
                  En camino
                </span>
              }
            />
            <PanelRow label="Productos" value="3 items" />
            <PanelRow label="Total" value="$1,250.00" />

            {/* Progress tracker */}
            <div className="mt-2 flex flex-col gap-0">
              <ProgressStep label="Confirmado" done />
              <ProgressStep label="Empacado" done />
              <ProgressStep label="En camino" active />
              <ProgressStep label="Entregado" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PanelRow({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}): React.JSX.Element {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-text-tertiary">{label}</span>
      <span className="text-xs font-medium text-text-primary">{value}</span>
    </div>
  )
}

function ProgressStep({
  label,
  done,
  active,
}: {
  label: string
  done?: boolean
  active?: boolean
}): React.JSX.Element {
  const dotColor = done
    ? 'bg-green-500'
    : active
      ? 'bg-brand-500 ring-2 ring-brand-500/30'
      : 'bg-surface-300'

  return (
    <div className="flex items-center gap-2 py-1">
      <div className={`h-2.5 w-2.5 rounded-full ${dotColor}`} />
      <span
        className={`text-xs ${done || active ? 'font-medium text-text-primary' : 'text-text-tertiary'}`}
      >
        {label}
      </span>
    </div>
  )
}
