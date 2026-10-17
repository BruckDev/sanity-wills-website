export function WillsWordmark({className = ''}: {className?: string}) {
  return (
    <span className={`inline-block whitespace-nowrap font-serif tracking-[-0.06em] ${className}`}>
      Wills<span className="text-[color:var(--accent)]">.com</span>
    </span>
  )
}
