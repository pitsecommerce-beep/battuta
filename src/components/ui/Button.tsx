import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40',
  outline:
    'border border-surface-300 text-text-secondary hover:text-text-primary hover:border-surface-200 hover:bg-surface-100',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface-100',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2',
}

/** Polymorphic button supporting `<button>` and `<a>` elements. */
export function Button(props: ButtonProps): React.JSX.Element {
  const { variant = 'primary', size = 'md', className = '', ...rest } = props

  const classes = [
    'inline-flex items-center justify-center rounded-xl font-semibold',
    'transition-all duration-200 cursor-pointer',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500',
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(' ')

  if (props.as === 'a') {
    const { as: _, variant: _v, size: _s, ...anchorProps } = props as ButtonAsAnchor
    return <a className={classes} {...anchorProps} />
  }

  const { as: _, variant: _v, size: _s, className: _c, ...buttonProps } = props as ButtonAsButton
  return <button className={classes} {...buttonProps} />
}
