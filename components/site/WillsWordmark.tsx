export function WillsWordmark({
  className = '',
  headline = false,
}: {
  className?: string
  headline?: boolean
}) {
  const headlinePaint = headline
    ? {textShadow: 'none', WebkitTextStrokeWidth: 0, WebkitTextFillColor: 'currentColor'}
    : undefined
  return (
    <span className={`inline-block whitespace-nowrap font-serif tracking-[-0.06em] ${className}`}>
      <span className={headline ? 'text-[#082d4c]' : undefined} style={headlinePaint}>
        Wills
      </span>
      <span className="text-[color:var(--accent)]" style={headlinePaint}>
        .com
      </span>
    </span>
  )
}
