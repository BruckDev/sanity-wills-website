import {CustomPortableText} from '@/components/CustomPortableText'
import {PageHero} from '@/components/site/PageHero'
import {getDynamicFetchOptions, sanityFetch, sanityFetchMetadata} from '@/sanity/lib/live'
import {fallbackPrivacyPage} from '@/sanity/lib/siteFallbacks'
import {privacyPageQuery} from '@/sanity/lib/siteQueries'
import type {Metadata} from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const {data} = await sanityFetchMetadata({query: privacyPageQuery, perspective: 'published'})
  const seo = (data as any)?.seo || fallbackPrivacyPage.seo
  return {
    title: seo.title || fallbackPrivacyPage.seo.title,
    description: seo.description || fallbackPrivacyPage.seo.description,
  }
}

function privacyContact(body: any[]) {
  return body.map((block) => {
    if (block._type !== 'block' || !Array.isArray(block.children)) return block

    const markDefs = [...(block.markDefs || [])]
    const children = block.children.flatMap((child: any) => {
      const oldAddress = 'gbruck@bruckcpa.com'
      if (child._type !== 'span' || !child.text?.includes(oldAddress)) return [child]

      const [before, ...after] = child.text.split(oldAddress)
      const linkKey = `${child._key}-privacy-contact`
      markDefs.push({_key: linkKey, _type: 'link', href: 'mailto:partnerships@wills.com'})
      return [
        {...child, text: before},
        {
          ...child,
          _key: `${child._key}-email`,
          text: 'partnerships@wills.com',
          marks: [...(child.marks || []), linkKey],
        },
        {...child, _key: `${child._key}-after`, text: after.join(oldAddress)},
      ]
    })
    return {...block, children, markDefs}
  })
}

export default async function PrivacyPage() {
  const fetchOptions = await getDynamicFetchOptions()
  const {data} = await sanityFetch({query: privacyPageQuery, ...fetchOptions})
  const page = {...fallbackPrivacyPage, ...(data as any)}

  return (
    <div className="space-y-12">
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.overview} />
      <section className="max-w-4xl rounded-2xl border border-[color:var(--border-strong)] bg-white p-6 text-base leading-8 text-[color:var(--muted)] md:p-8 [&_a[href^='mailto:']]:font-bold [&_a[href^='mailto:']]:text-[#435900]">
        <CustomPortableText id={null} type={null} path={[]} value={privacyContact(page.body)} />
      </section>
    </div>
  )
}
