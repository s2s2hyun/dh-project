import InsightRoll from '@/src/components/About/InsightRoll'
import Providers from '@/src/utils/providers'
import { ReactNode } from 'react'

const insights = [
  'Next.JS',
  'React.JS',
  'Taillwind css',
  '@Emotion-styled',
  'styled-components',
  'Redux-toolkit',
  'Recoil',
  'SEO',
]
export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <main className="flex w-full flex-col items-center justify-between">
        <InsightRoll insights={insights} />
        {children}
      </main>
    </Providers>
  )
}
