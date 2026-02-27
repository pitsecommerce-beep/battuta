interface LogoProps {
  className?: string
}

/** Battuta brand logo (musical bars icon + wordmark). */
export function Logo({ className = '' }: LogoProps): React.JSX.Element {
  return (
    <a href="#" className={`flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="url(#logo-g)" />
        <path
          d="M8 22V12a2 2 0 012-2h2a2 2 0 012 2v10"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 22V14a2 2 0 012-2h2a2 2 0 012 2v8"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 22V16a2 2 0 012-2h1a1 1 0 011 1v7"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="11" cy="9" r="1.5" fill="#fff" />
        <circle cx="17" cy="11" r="1.5" fill="#fff" />
        <circle cx="22" cy="13" r="1.5" fill="#fff" />
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-xl font-bold text-text-primary">Battuta</span>
    </a>
  )
}
