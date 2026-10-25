import 'server-only'
import {getAttorneyProgram} from '@/sanity/lib/attorneyProgram'
import {type DynamicFetchOptions} from '@/sanity/lib/live'
import {resolveSampleAttorneyArticles} from './articleData'

export async function getSampleArticleContent(options: DynamicFetchOptions) {
  'use cache'
  const page = await getAttorneyProgram(options)
  return {
    articles: resolveSampleAttorneyArticles(page.sampleAdditionalArticles),
    sourcesLabel: page.sampleArticles.sourcesLabel,
  }
}
