export function WillsWordmark({
  className = '',
  headline = false,
}: {
  className?: string
  headline?: boolean
}) {
  return (
    <span className={`inline-block whitespace-nowrap font-serif tracking-[-0.06em] ${className}`}>
      <span className={headline ? 'text-[color:var(--accent)]' : undefined}>Wills</span>
      <span
        className={
          headline
            ? 'text-[#071f33] [text-shadow:0_0_2px_rgba(240,252,248,0.85)]'
            : 'text-[color:var(--accent)]'
        }
      >
        .com
      </span>
    </span>
  )
}
