import Image from 'next/image'
import React from 'react'
import profileCharacter from '@/public/character.png'

const AboutCoverSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center border-b-2 border-solid border-dark text-dark dark:border-light md:h-[75vh] md:flex-row ">
      <div className="flex h-full w-full justify-center border-r-2 border-solid border-dark dark:border-light dark:text-light md:w-1/2">
        <Image
          src={profileCharacter}
          alt="profile character"
          className="h-full object-contain object-center xs:w-3/4 md:w-full"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1180px) 50vw, 50vw,"
        />
      </div>

      <div className="flex w-full flex-col items-start justify-center pb-10 text-left xs:p-10 md:w-1/2 lg:px-16">
        <h2 className="text-center text-4xl font-bold capitalize xs:text-5xl lg:text-start sxl:text-6xl">
          매일 매일 성장하고픈 개발자
        </h2>
        <p className="mt-4 text-base font-medium capitalize">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I`m A Perpetual
          Learner Embracing Challenges. With Each Project, I Aim To Leave A
          Lasting Impact-One Pixel At A Time.
        </p>
      </div>
    </section>
  )
}

export default AboutCoverSection
