import React from 'react'

const SkillList = ['Next.js', 'tailwind css', 'emotion-styled', 'SEO']

const Skills = () => {
  return (
    <section className="flex w-full flex-col border-b-2 border-solid border-dark p-20 text-dark">
      <span className="text-4xl font-semibold text-accent">
        I`m Comfortable in....
      </span>
      <ul className=" mt-8 flex flex-wrap justify-start">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="ease mb-6 mr-6 inline-block rounded border-2 border-solid border-dark px-12 py-5 text-2xl font-semibold capitalize transition-all duration-200 hover:scale-105"
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
