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
                <div
                  className=" flex h-[100px] items-center border-l-8 border-l-sky-400 bg-zinc-200 capitalize  transition-all
              duration-200 dark:bg-accentDark/90"
                >
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
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        모델을 본후, 고객사측에서 메일을 통해서 어떠한 니즈가
                        필요한지에 대해서 다양한 Form 을 넣어 고객사측이 원하는
                        컨샙의 광고를 만들수 있도록 만들었습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        모델들의 다양한 사진을 볼수있도록 메인페이지는 Grid
                        형식으로 구성을 하였으며 , 관심있어하는 모델의 디테일
                        페이지에 관심모델에 관련된 문의하기가 따로 구성을
                        했습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        디자이너 없이 사내 직원들의 아이디어와 웹 사이트 컨샙에
                        맞춰서 사용자를 위한 UI/UX에 대해 되돌아 보는 계기가
                        되었습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <a
                        href="https://progress-s2s2hyun.notion.site/LUMINITES-9fc539cf296b4613ad48e6c13cdc6879?pvs=4"
                        target="_blank"
                        className="text-base text-blue-500 dark:border-light dark:text-accentDark/90 xs:text-base"
                      >
                        [관련링크]
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="flex flex-col  justify-center py-12 ">
              <span className="py-2 text-xl">2023 FATALBOMB</span>
              <div className="flex w-full flex-col">
                <div
                  className=" flex h-[100px] items-center border-l-8 border-l-sky-400 bg-zinc-200 capitalize  transition-all
              duration-200 dark:bg-accentDark/90"
                >
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
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        2022 FATALBOMB 이후 2023 FATALBOMB 게임 내적 대부분
                        업데이트가 전부 이뤄졌으며 다양한 맵에 대한 소개, 플레이
                        소개 , 캐릭터에 대한 소개 , 진행 플레이에 대한 소개를
                        전달했습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        회원가입 , 로그인을 진행한후 , 게임을 다운받아
                        설치완료후, Registry를 이용한 URL 호출방법을 통해서
                        런처를 실행 시켰습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        처음으로 프로젝트를 진행하는데 있어서 프론트엔드
                        프레임워크, 라이브러리를 어떻게 사용할지에 대해서 혼자서
                        고민했던 프로젝트였으며 기억에 오래남은
                        프로젝트였습니다.
                      </span>
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
                <div
                  className=" flex h-[100px] items-center border-l-8 border-l-sky-400 bg-zinc-200 capitalize  transition-all
              duration-200 dark:bg-accentDark/90"
                >
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
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        Here
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        Here
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="flex flex-col  justify-center py-12 ">
              <span className="py-2 text-xl">2022 GSTAR FATALBOMB</span>
              <div className="flex w-full flex-col">
                <div
                  className=" flex h-[100px] items-center border-l-8 border-l-sky-400 bg-zinc-200 capitalize transition-all
              duration-200 dark:bg-accentDark/90 "
                >
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
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        Here
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        Here
                      </span>
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
