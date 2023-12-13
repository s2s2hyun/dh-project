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

      <div className="flex w-full flex-col items-start justify-center px-4 pb-10 text-left xs:p-10 md:w-1/2 lg:px-16">
        <h2 className="text-center text-3xl font-bold capitalize dark:text-white xs:text-5xl lg:text-start sxl:text-6xl">
          매일 매일 성장하고픈 개발자
        </h2>
        <b className="mt-4 text-2xl  font-[600] capitalize dark:text-white">
          i&apos;m
        </b>
        <ul>
          <li className="text-base font-[400]  dark:text-white ">
            <span className="text-sm font-[400]  dark:text-white ">●</span> 높은
            목표를 가지고 성장을 추구하며 성실한 개발자가 되기위해 노력합니다.
          </li>
          <li className="text-base font-[400]  dark:text-white ">
            <span className="text-sm font-[400]  dark:text-white ">●</span>{' '}
            빠르게 변화하는 프론트엔드 생태계에서 본질을 잊지 않으려고
            노력합니다.
          </li>
          <li className="text-base font-[400]  dark:text-white ">
            <span className="text-sm font-[400]  dark:text-white">●</span>{' '}
            커뮤니케이션 및 사람간의 유대를 중요시하고 좋은 동료가 되기 위해
            노력합니다.
          </li>
        </ul>
        <b className="mt-4 text-2xl  font-[600] capitalize dark:text-white">
          Career
        </b>
        <ul>
          <li className="text-base font-[400]  dark:text-white ">
            <span className="text-sm font-[400]  dark:text-white">●</span>{' '}
            파프리카 인더스트리 ( 2022.10 ~ 2023.11)
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}

export default AboutCoverSection
