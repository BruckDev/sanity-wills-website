import {ProgramPolicyPage} from '@/components/site/ProgramPolicyPage'
import type {Metadata} from 'next'

export const metadata: Metadata = {title: 'Editorial policy'}
export default function Page() {
  return <ProgramPolicyPage kind="editorial" />
}
