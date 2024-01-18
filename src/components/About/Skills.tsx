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
              2024
            </span>
            <li className=" flex flex-col  justify-center py-12">
              <span className="py-2 text-xl">Realtime-air</span>
              <div className="flex w-full flex-col">
                <div
                  className=" flex h-[100px] items-center border-l-8 border-l-sky-400 bg-zinc-200 capitalize  transition-all
              duration-200 dark:bg-accentDark/90"
                >
                  <h5 className="pl-4 text-xl ">
                    현재 실시간 위치 대기환경 정보전달
                  </h5>
                </div>
                <div className="flex items-center py-7">
                  <h4 className="pr-2 text-xl">Tech</h4>
                  <span className="pr-1">-</span>
                  <ul className="flex text-xs xs:text-base">
                    <li className="mx-1 bg-zinc-200 text-red-500">React.js</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">axios</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">R3F</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">
                      minimal-pie-chart
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5">
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        사용하고 있는 디바이스에 위도, 경도를 통해서 실시간 위치
                        확인후, 공공데이터포탈 에서 제공된 Rest Api를 통한
                        미세먼지 측정 정보를 전달하는 서비스입니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        요 근래, 코로나가 다시 급증 및 미세먼지에 대한 농도가
                        다시 짙어지고 있다보니 경각심을 위해 마스크를 메인에
                        두었으며, 좀더 입체적으로 보이고자 하는 욕심에 3D 모델
                        마스크를 보여지게 했습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        PWA까지 적용 , 실사용에 편하게 이용이 가능하도록
                        프로젝트를 만들었습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <a
                        href="https://realtime-air.netlify.app/"
                        target="_blank"
                        className="text-base text-blue-500 dark:border-light dark:text-accentDark/90 xs:text-base"
                      >
                        [배포된 프로젝트]
                      </a>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <a
                        href="https://donghyundev.com/blogs/realtime-air-project"
                        target="_blank"
                        className="text-base text-blue-500 dark:border-light dark:text-accentDark/90 xs:text-base"
                      >
                        [기술구현 블로그]
                      </a>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <a
                        href="https://github.com/s2s2hyun/RealTime-air"
                        target="_blank"
                        className="text-base text-blue-500 dark:border-light dark:text-accentDark/90 xs:text-base"
                      >
                        [Realtime-air github]
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
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
                    <li className="mx-1 bg-zinc-200 text-red-500">Nest.js</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">Recoil</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">axios</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">Gsap</li>
                    <li className="mx-1 bg-zinc-200 text-red-500">MUI</li>
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
                  <h5 className="pl-4 text-lg font-black  ">
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
                      styled component
                    </li>
                    ,<li className="mx-1 bg-zinc-200 text-red-500">Redux</li>,
                    <li className="mx-1 bg-zinc-200 text-red-500">axios</li>
                    <li className="mx-1 bg-zinc-200 text-red-500">R3F</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5">
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        문화체육관광부 , 한국 콘텐츠 진흥원 메타버스 패션
                        페스티벌 가상의 공간에서 펼쳐지는 패션 콘텐츠 전시회를
                        중점으로 , 국내 디자이너 브랜드 20팀을 홍보하며 , 각
                        브랜드별 팝업스토어를 연결해주는 컨텐츠
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        6개 언어(한국 , 영어 , 중국어 , 일본어 , 프랑스어
                        ,스페인어) 선택 시 게임 내부의 언어 전부 번역 설정 ,
                        React Hook form 라이브러리 유효성 검사를 통해서 회원가입
                        Form 을 전달했습니다. KMFF 2022 메타버스에 보여지는
                        화면서 각 버튼에 대한 간단한 이벤트 처리를 했으며 , Mbti
                        , 전체적인 UI 웹 퍼블리싱을 담당했습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        이번 기회에 React-Three-fiber 를 처음으로 다뤄보며 정말
                        웹에 세계는 정말 끝이 없다고 느껴졌으며 , 스스로
                        부족함을 많이 느꼈던 프로젝트였습니다. 이번 프로젝트를
                        계기로 웹에 세계가 굉장히 더 넓다는걸 깨닫는 계기가
                        되었습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <a
                        href="https://progress-s2s2hyun.notion.site/2022-Kmff-Metaverse-Fashion-festival-28cb57fa2b6748d888ae33a485b23fc5?pvs=4"
                        target="_blank"
                        className="text-base text-blue-500 dark:border-light dark:text-accentDark/90 xs:text-base"
                      >
                        [관련링크]
                      </a>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <a
                        href="https://www.youtube.com/watch?v=VGmdB_0HAxo"
                        target="_blank"
                        className="text-base text-blue-500 dark:border-light dark:text-accentDark/90 xs:text-base"
                      >
                        [관련 Youtube]
                      </a>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <a
                        href="https://www.jaturi.kr/news/articleView.html?idxno=10204"
                        target="_blank"
                        className="text-base text-blue-500 dark:border-light dark:text-accentDark/90 xs:text-base"
                      >
                        [관련 기사]
                      </a>
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
                      styled component
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5">
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        2022 부산 G-Star FATALBOMB 게임 설명 및 캐릭터 소개를
                        만들었으며, G-Star 이벤트를 위해 사전예약, 이벤트 랭킹
                        페이지를 구현을 했습니다. 사전예약서 받은 고객의 정보로
                        게임을 접속하여, 게임에서 점수 스코어가 가장 높은
                        유저에게 행사 경품을 제공했습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <span className='xs:text-base" text-base dark:border-light dark:text-light'>
                        프로젝트를 참여하며 느낀점: 부산 G-STAR 행사를 내가 만든
                        웹사이트로 부터 고객들에게 서비스의 정보를 제공하며
                        행사를 위한 이벤트 참여까지 행사장에서 함께 즐기면서
                        하다보니 정말 보람차며 , 매우 즐거웠던 행사였습니다.
                      </span>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <a
                        href="https://progress-s2s2hyun.notion.site/2022-G-star-Fatalbomb-ba9ba1e03ee14fedbc5633f4b811b1c1?pvs=4"
                        target="_blank"
                        className="text-base text-blue-500 dark:border-light dark:text-accentDark/90 xs:text-base"
                      >
                        [관련링크]
                      </a>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <a
                        href="https://www.globalepic.co.kr/view.php?ud=202211161239515076cf2d78c68_29"
                        target="_blank"
                        className="text-base text-blue-500 dark:border-light dark:text-accentDark/90 xs:text-base"
                      >
                        [관련 News]
                      </a>
                    </li>
                    <li className="py-3 text-black dark:border-light dark:text-light">
                      <a
                        href="https://www.youtube.com/watch?v=uEh2PMBkc7U"
                        target="_blank"
                        className="text-base text-blue-500 dark:border-light dark:text-accentDark/90 xs:text-base"
                      >
                        [관련 Youtube]
                      </a>
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
