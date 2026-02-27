const BRANDS = [
  'ModaExpress',
  'TechFlow',
  'GreenMarket',
  'UrbanShop',
  'FitCommerce',
  'ArtesanaMX',
  'NovaTienda',
  'PrimeGoods',
]

export function LogosBar(): React.JSX.Element {
  return (
    <section className="border-y border-surface-200/50 bg-surface-50/50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium tracking-wider text-text-tertiary uppercase">
          Empresas que ya orquestan con Battuta
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-0 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-0 to-transparent" />

          <div className="animate-marquee flex w-max gap-16">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="shrink-0 font-display text-xl font-semibold text-text-tertiary/50 select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
