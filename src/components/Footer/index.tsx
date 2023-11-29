'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import {
  DribbleIcon,
  GithubIcon,
  GithubLightIcon,
  LinkedIcon,
  TwiiterIcon,
} from '../Icon'
import Link from 'next/link'

// import React from 'react';

// export default function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);

//   return (

//   );
// }

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
    <footer className="m-2 mt-16 flex flex-col items-center rounded-2xl bg-dark pb-8 text-light dark:bg-accentDark/90 dark:text-dark sm:m-10">
      <h3 className="mt-16 px-4 text-center text-2xl font-medium capitalize dark:font-bold sm:text-3xl lg:text-4xl ">
        일상 | 블로그 | 개발
      </h3>
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-4 mt-6 flex w-fit  items-stretch rounded bg-light dark:bg-dark  sm:min-w-[384px] sm:p-2"
      >
        <input
          type="text"
          placeholder="Enter email"
          {...register('email', { required: true, maxLength: 80 })}
          className="mr-2 w-full border-0 border-b bg-transparent pb-1 pl-2 text-dark focus:border-dark focus:ring-0 sm:pl-0"
        />

        <input
          type="submit"
          className="cursor-pointer rounded bg-dark px-3 py-1 font-medium text-light dark:bg-light dark:text-dark sm:px-5"
        />
      </form> */}
      <div className="mt-8 flex items-center">
        <a href="http://example.com" className="mr-8 inline-block h-6 w-6">
          {/* <Image src={linkedInImg} alt="sns_LinkedIn_logo" /> */}
          <LinkedIcon className="ease transition-all duration-200 hover:scale-125" />
        </a>
        <a
          href="http://example.com"
          className="mr-8 inline-block h-6 w-6 fill-white"
        >
          {/* <Image src={githubImg} alt="Github" /> */}
          <GithubLightIcon className="ease fill-white transition-all duration-200 hover:scale-125 dark:fill-dark" />
        </a>
      </div>
      <div className="relative  mt-16 flex w-full flex-col items-center justify-between border-t border-solid border-light px-8  py-6 font-medium md:mt-24 md:flex-row">
        <span className="text-center">
          &copy;2023 S2s2hyun. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="my-4 text-center underline md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{' '}
          <a
            href="https://github.com/s2s2hyun"
            className="underline"
            target="_blank"
          >
            s2s2hyun
          </a>
        </div>
      </div>{' '}
    </footer>
  )
}

export default Footer
