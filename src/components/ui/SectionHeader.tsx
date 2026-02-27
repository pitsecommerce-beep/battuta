interface SectionHeaderProps {
  tag: string
  title: React.ReactNode
  subtitle?: string
}

/** Reusable section header with tag, title (supports gradient-text spans), and subtitle. */
export function SectionHeader({ tag, title, subtitle }: SectionHeaderProps): React.JSX.Element {
  return (
    <div className="reveal mx-auto mb-16 max-w-2xl text-center lg:mb-20">
      <span className="mb-4 inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-400 uppercase">
        {tag}
      </span>
      <h2 className="mb-5 font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg leading-relaxed text-text-secondary">{subtitle}</p>
      )}
    </div>
  )
}
