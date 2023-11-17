import AboutCoverSection from '@/src/components/About/AboutCoverSection'
import Skills from '@/src/components/About/Skills'
import SiteMetaData from '@/src/utils/siteMetaData'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Me',
  description: `Here Are Some Details About My Self.`,
}

const About = () => {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="xs:mx-10 mx-5 mt-8 self-start text-lg font-semibold text-dark dark:font-normal dark:text-light sm:mx-12 md:mx-16 md:text-2xl lg:mx-20 ">
        Hava a Project in mind? Reach out to me 📞 from{' '}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{' '}
        and let&apos;s make it happen.
      </h2>
    </>
  )
}

export default About
