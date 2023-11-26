import ContactForm from '@/src/components/Contact/ContactForm'
import LottieAnimation from '@/src/components/Contact/LottieAnimation'
import SiteMetaData from '@/src/utils/siteMetaData'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: `Contact me throught the form available on this page or email me at ${SiteMetaData.email}`,
}

const ContactPage = () => {
  return (
    <section className="boder-solid flex h-auto w-full flex-col items-center justify-center border-b-2 border-dark text-dark dark:border-light md:h-[75vh]  md:flex-row ">
      <div className="inline-block h-full w-full border-solid border-dark dark:border-light dark:text-light sm:w-4/5 md:w-2/5 md:border-r-2 ">
        <LottieAnimation />
      </div>
      <div className="xs:px-10 flex w-full flex-col items-start justify-center px-5 pb-8 md:w-3/5 md:px-16">
        <h2 className="xs:text-3xl text-2xl font-bold capitalize sm:text-4xl ">
          Let`s Connect !
        </h2>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage