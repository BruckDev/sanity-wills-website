import {ProgramPolicyPage} from '@/components/site/ProgramPolicyPage'
import type {Metadata} from 'next'

export const metadata: Metadata = {title: 'Terms of Use'}
export default function Page() {
  return <ProgramPolicyPage kind="terms" />
}
