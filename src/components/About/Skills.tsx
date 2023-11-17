import React from 'react'

const SkillList = ['Next.js', 'tailwind css', 'emotion-styled', 'SEO']

const Skills = () => {
  return (
    <section className="sm:p-12text-dark flex w-full flex-col border-b-2 border-solid  border-dark p-5 dark:border-light dark:text-light md:p-16 lg:p-20">
      <span className="text-lg font-semibold text-accent dark:text-accentDark sm:text-3xl md:text-4xl">
        I`m Comfortable in....
      </span>
      <ul className=" xs:justify-start mt-8 flex flex-wrap justify-center">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="ease xs:px-6  xs:mb-4 xs:mr-4 cursor:pointer xs:text-lg mb-3 mr-3 inline-block rounded  border-2  border-solid border-dark px-4
              py-5 text-base font-semibold capitalize transition-all duration-200 hover:scale-105 dark:border-light 
              dark:font-normal sm:px-8 sm:text-xl md:mb-6 md:mr-6 md:text-2xl lg:px-12 lg:py-5 "
            >
              {item}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
