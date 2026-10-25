import {defineQuery} from 'next-sanity'
import {attorneyProgramContent, type AttorneyProgramContent} from './attorneyProgramContent'
import {sanityFetch, type DynamicFetchOptions} from './live'

const programQuery = defineQuery(
  `*[_type == "attorneyProgram" && _id == "attorneyProgram"][0]{...}`,
)

export async function getAttorneyProgram(
  options: DynamicFetchOptions,
): Promise<AttorneyProgramContent> {
  'use cache'
  const {data} = await sanityFetch({query: programQuery, ...options})
  const overrides = Object.fromEntries(
    Object.entries(data || {}).filter(([, value]) => value != null),
  )
  return {
    ...attorneyProgramContent,
    ...overrides,
    sampleAdditionalArticles: attorneyProgramContent.sampleAdditionalArticles.map(
      (article, index) => ({
        ...article,
        ...data?.sampleAdditionalArticles?.[index],
        sections: data?.sampleAdditionalArticles?.[index]?.sections?.length
          ? data.sampleAdditionalArticles[index].sections
          : article.sections,
        sources: data?.sampleAdditionalArticles?.[index]?.sources?.length
          ? data.sampleAdditionalArticles[index].sources
          : article.sources,
      }),
    ),
    sampleArticles: {...attorneyProgramContent.sampleArticles, ...data?.sampleArticles},
    sampleSocials: {
      unavailableLabel:
        data?.sampleSocials?.unavailableLabel ||
        attorneyProgramContent.sampleSocials.unavailableLabel,
      links: attorneyProgramContent.sampleSocials.links.map((link, index) => ({
        ...link,
        ...data?.sampleSocials?.links?.[index],
      })),
    },
    sampleExpertise: {
      ...attorneyProgramContent.sampleExpertise,
      ...data?.sampleExpertise,
      phrases: data?.sampleExpertise?.phrases?.length
        ? data.sampleExpertise.phrases
        : attorneyProgramContent.sampleExpertise.phrases,
    },
    form: {...attorneyProgramContent.form, ...data?.form},
    directory: {...attorneyProgramContent.directory, ...data?.directory},
    trustPages: {...attorneyProgramContent.trustPages, ...data?.trustPages},
  } as AttorneyProgramContent
}
