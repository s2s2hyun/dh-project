import React from 'react'

const SkillList = ['Next.js', 'tailwind css', 'emotion-styled', 'SEO']

const Skills = () => {
  return (
    <section className="sm:p-12text-dark flex w-full flex-col items-center justify-center border-b-2 border-solid  border-dark p-5 dark:border-light dark:text-light md:p-16 lg:p-20">
      <div className="flex w-full flex-col items-start justify-center md:items-center">
        <span className="text-lg font-semibold text-accent dark:text-accentDark sm:text-3xl md:text-4xl">
          Projects
        </span>
        {/* <ul className=" mt-8 flex flex-wrap justify-center xs:justify-start">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="ease cursor:pointer  mb-3 mr-3 inline-block rounded border-2 border-solid border-dark px-4  py-5  text-base font-semibold capitalize
              transition-all duration-200 hover:scale-105 dark:border-light dark:font-normal xs:mb-4 xs:mr-4 xs:px-6 
              xs:text-lg sm:px-8 sm:text-xl md:mb-6 md:mr-6 md:text-2xl lg:px-12 lg:py-5 "
            >
              {item}
            </li>
          )
        })}
      </ul> */}
        <div className=" flex w-full flex-col   justify-center py-12 sxl:w-[50%]">
          <ul>
            <span
              className="text-4xl font-semibold capitalize
              transition-all duration-200 dark:border-light dark:font-normal "
            >
              2023
            </span>
            <li className=" flex flex-col  justify-center py-12">
              <span className="py-2 text-xl">Luminites</span>
              <div className="flex w-full flex-col">
                <div className=" flex h-[100px] items-center border-l-8 border-l-sky-400 bg-zinc-200 ">
                  <h5 className="pl-4 text-xl ">
                    맞춤형 AI 모델로 기업의 브랜딩, 광고 , 안내 등 소개하는 웹
                    서비스
                  </h5>
                </div>
                <div className="flex items-center py-7">
                  <h4 className="pr-2 text-xl">Tech</h4>
                  <span className="pr-1">-</span>
                  <ul className="flex text-xs xs:text-base">
                    <li className="mx-1 bg-zinc-200 text-red-500">React.js</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">
                      @emotion styled
                    </li>
                    ,<li className="mx-1 bg-zinc-200 text-red-500">Recoil</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">axios</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">Gsap</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5">
                    <li className="py-3 text-black">
                      <span>Here</span>
                    </li>
                    <li className="py-3 text-black">
                      <span>Here</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="flex flex-col  justify-center py-12 ">
              <span className="py-2 text-xl">2023 FATALBOMB</span>
              <div className="flex w-full flex-col">
                <div className=" flex h-[100px] items-center border-l-8 border-l-sky-400 bg-zinc-200 ">
                  <h5 className="pl-4 text-xl ">
                    2023 FATALBOMB 게임 소개 페이지 및 런처실행
                  </h5>
                </div>
                <div className="flex items-center py-7">
                  <h4 className="pr-2 text-xl">Tech</h4>
                  <span className="pr-1">-</span>
                  <ul className="flex text-xs xs:text-base">
                    <li className="mx-1 bg-zinc-200 text-red-500">Next.js</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">
                      @emotion styled
                    </li>
                    ,<li className="mx-1 bg-zinc-200 text-red-500">Recoil</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">axios</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">Mui</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5">
                    <li className="py-3 text-black">
                      <span>Here</span>
                    </li>
                    <li className="py-3 text-black">
                      <span>Here</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <span
              className="text-4xl font-semibold capitalize
              transition-all duration-200 dark:border-light dark:font-normal"
            >
              2022
            </span>
            <li className="flex flex-col  justify-center py-12">
              <span className="py-2 text-xl">KMFF 2022 FASHION FESTIVAL</span>
              <div className="flex w-full flex-col">
                <div className=" flex h-[100px] items-center border-l-8 border-l-sky-400 bg-zinc-200 ">
                  <h5 className="pl-4 text-xl ">
                    가상에서 펼쳐지는 K-패션의 향연 - *‘KOCCA METAVERSE FASHION
                    FESTIVAL-KMFF2022’**
                  </h5>
                </div>
                <div className="flex items-center py-7">
                  <h4 className="pr-2 text-xl">Tech</h4>
                  <span className="pr-1">-</span>
                  <ul className="flex text-xs xs:text-base">
                    <li className="mx-1 bg-zinc-200 text-red-500">React.js</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">
                      styled-component
                    </li>
                    ,<li className="mx-1 bg-zinc-200 text-red-500">Redux</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">axios</li>
                    <br />
                    <li className="mx-1 bg-zinc-200 text-red-500">R3F</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5">
                    <li className="py-3 text-black">
                      <span>Here</span>
                    </li>
                    <li className="py-3 text-black">
                      <span>Here</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="flex flex-col  justify-center py-12 ">
              <span className="py-2 text-xl">2022 GSTAR FATALBOMB</span>
              <div className="flex w-full flex-col">
                <div className=" flex h-[100px] items-center border-l-8 border-l-sky-400 bg-zinc-200 ">
                  <h5 className="pl-4 text-xl ">
                    부산 G-STAR 홍보 및 사전예약 페이지 , 현장 이벤트 참여용
                    페이지
                  </h5>
                </div>
                <div className="flex items-center py-7">
                  <h4 className="pr-2 text-xl">Tech</h4>
                  <span className="pr-1">-</span>
                  <ul className="flex text-xs xs:text-base">
                    <li className="mx-1 bg-zinc-200 text-red-500">Next.js</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">Redux</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">axios</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">
                      styled-component
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5">
                    <li className="py-3 text-black">
                      <span>Here</span>
                    </li>
                    <li className="py-3 text-black">
                      <span>Here</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
