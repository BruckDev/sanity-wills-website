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
    form: {...attorneyProgramContent.form, ...data?.form},
    directory: {...attorneyProgramContent.directory, ...data?.directory},
    trustPages: {...attorneyProgramContent.trustPages, ...data?.trustPages},
  } as AttorneyProgramContent
}
