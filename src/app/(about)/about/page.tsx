import AboutCoverSection from '@/src/components/About/AboutCoverSection'
import Skills from '@/src/components/About/Skills'
import Link from 'next/link'

const About = () => {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mx-20 mt-8 self-start text-2xl font-semibold text-dark">
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
