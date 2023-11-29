import React from 'react'

const SkillList = ['Next.js', 'tailwind css', 'emotion-styled', 'SEO']

const Skills = () => {
  return (
    <section className="sm:p-12text-dark flex w-full flex-col border-b-2 border-solid  border-dark p-5 dark:border-light dark:text-light md:p-16 lg:p-20">
      <div className="flex max-w-7xl flex-col items-start justify-center md:items-center">
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
        <div className=" flex flex-col  justify-center py-12">
          <ul>
            <span
              className="text-4xl font-semibold capitalize
              transition-all duration-200 dark:border-light dark:font-normal "
            >
              2023
            </span>
            <li className=" flex flex-col  justify-center py-12">
              <span>Luminites</span>
            </li>
            <li className="flex flex-col  justify-center py-12 ">
              <span>2023 FATALBOMB</span>
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
              <span>KMFF 2022 FASHION FESTIVAL</span>
            </li>
            <li className="flex flex-col  justify-center py-12 ">
              <span>2022 GSTAR FATALBOMB</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
