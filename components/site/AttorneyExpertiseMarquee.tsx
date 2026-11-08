import {type AttorneyProgramContent} from '@/sanity/lib/attorneyProgramContent'

export function AttorneyExpertiseMarquee({
  content,
}: {
  content: AttorneyProgramContent['sampleExpertise']
}) {
  return (
    <section
      aria-labelledby="attorney-expertise-heading"
      tabIndex={0}
      className="attorney-expertise overflow-hidden rounded-xl border border-[color:var(--border)] bg-[#edf5f3] py-7 outline-offset-4 focus-visible:outline-2 focus-visible:outline-[color:var(--accent-strong)] md:py-9"
    >
      <h2
        id="attorney-expertise-heading"
        className="px-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]"
      >
        {content.heading}
      </h2>
      <ul className="sr-only">
        {content.phrases.map((phrase, index) => (
          <li key={index}>{phrase}</li>
        ))}
      </ul>
      <div className="attorney-expertise-window mt-5" aria-hidden="true">
        <div className="attorney-expertise-track">
          {[0, 1].map((copy) => (
            <div className="attorney-expertise-group" key={copy}>
              {content.phrases.map((phrase, index) => (
                <span className="inline-flex items-center gap-7" key={index}>
                  <span className="font-serif text-2xl leading-9 text-[#082d4c] md:text-3xl">
                    {phrase}
                  </span>
                  <span className="text-[#7ba79e]">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
