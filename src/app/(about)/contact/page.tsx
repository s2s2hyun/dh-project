'use client'
import ContactForm from '@/src/components/Contact/ContactForm'
import LottieAnimation from '@/src/components/Contact/LottieAnimation'
import SendMailPage from '@/src/components/Contact/SendMailPage'
import SiteMetaData from '@/src/utils/siteMetaData'
import { EmailFormData } from '@/types/mailData'
import { Metadata } from 'next'
import React, { useState } from 'react'
import { PuffLoader } from 'react-spinners'

// export const metadata: Metadata = {
//   title: 'Contact Me',
//   description: `Contact me throught the form available on this page or email me at ${SiteMetaData.email}`,
// }

const ContactPage = () => {
  const [mailLoading, setMailLoading] = useState<boolean>(false)
  const [userData, setUserData] = useState<EmailFormData>({
    name: '',
    email: '',
    // phoneNumber: '',
    projectDetails: '',
    subject: '',
  })
  const [mailPage, setMailPage] = useState<number>(0)

  console.log(mailLoading, 'mailLoading 는 현재 무슨 boolean')

  return (
    <>
      {mailLoading && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-black bg-opacity-50 ">
          <PuffLoader color="#ff015b" size={60} speedMultiplier={1} />
        </div>
      )}
      <section className="boder-solid flex h-auto w-full flex-col items-center justify-center border-b-2 border-dark text-dark dark:border-light md:h-[75vh]  md:flex-row ">
        <div className="inline-block h-full w-full border-solid border-dark dark:border-light dark:text-light sm:w-4/5 md:w-[35%] md:min-w-[400px] md:border-r-2 ">
          <LottieAnimation />
        </div>
        <div className="flex w-full flex-col items-start justify-center px-5 pb-8 xs:px-10 md:w-3/5 md:px-12">
          <h2 className="text-2xl font-bold capitalize xs:text-3xl sm:text-4xl ">
            Let`s Connect !
          </h2>
          {mailPage == 0 ? (
            <ContactForm
              setMailLoading={setMailLoading}
              setUserData={setUserData}
              setMailPage={setMailPage}
            />
          ) : (
            <SendMailPage userData={userData} />
          )}
        </div>
      </section>
    </>
  )
}

export default ContactPage
