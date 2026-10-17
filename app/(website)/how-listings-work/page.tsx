import {ProgramPolicyPage} from '@/components/site/ProgramPolicyPage'
import type {Metadata} from 'next'

export const metadata: Metadata = {title: 'How listings work'}
export default function Page() {
  return <ProgramPolicyPage kind="listings" />
}
