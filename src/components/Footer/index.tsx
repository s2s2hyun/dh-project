'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { GithubLightIcon, LinkedIcon } from '../Icon'

interface FormValues {
  email: string
}

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => console.log(data)
  // console.log(errors)

  return (
    <footer className="m-2 mt-16 flex flex-col items-center rounded-2xl bg-dark pb-8 text-light dark:bg-accentDark/90 dark:text-dark sm:m-7">
      <h3 className="mt-16 px-4 text-center text-base font-medium capitalize dark:font-bold sm:text-base lg:text-xl ">
        Jr.Frontend Developer
      </h3>

      <div className="mt-8 flex items-center">
        <a
          href="https://www.linkedin.com/in/s2s2hyun/"
          className="mr-8 inline-block h-6 w-6"
          aria-label="Visit S2S2Hyun's linkedin profile"
        >
          <LinkedIcon className="ease transition-all duration-200 hover:scale-125" />
        </a>
        <a
          href="https://github.com/s2s2hyun"
          className="mr-8 inline-block h-6 w-6 fill-white"
          aria-label="Visit S2S2Hyun's github profile"
        >
          <GithubLightIcon className="ease fill-white transition-all duration-200 hover:scale-125 dark:fill-dark" />
        </a>
      </div>
      <div className="relative  mt-16 flex w-full flex-col items-center justify-between border-t border-solid border-light px-8  py-6 font-medium md:mt-24 md:flex-row">
        <span className="text-center">
          &copy;2023 S2s2hyun. All rights reserved.
        </span>

        <div className="text-center">
          Made with &hearts; by
          <a
            href="https://github.com/s2s2hyun"
            className="underline"
            target="_blank"
            aria-label="Visit S2S2Hyun's github profile"
          >
            s2s2hyun
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
