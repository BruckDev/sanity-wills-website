export function WillsWordmark({
  className = '',
  headline = false,
}: {
  className?: string
  headline?: boolean
}) {
  return (
    <span className={`inline-block whitespace-nowrap font-serif tracking-[-0.06em] ${className}`}>
      <span className={headline ? 'text-[#071f33]' : undefined}>Wills</span>
      <span className="text-[color:var(--accent)]">.com</span>
    </span>
  )
}
