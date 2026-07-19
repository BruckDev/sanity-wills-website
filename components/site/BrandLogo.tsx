export function BrandLogo({
  className = '',
  priority = false,
  size = 'header',
}: {
  className?: string
  priority?: boolean
  size?: 'header' | 'footer'
}) {
  const textSize = size === 'footer' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'

  return (
    <span
      className={`${className} inline-block font-bold tracking-tight text-white ${textSize}`}
      data-priority={priority || undefined}
    >
      Wills
    </span>
  )
}
