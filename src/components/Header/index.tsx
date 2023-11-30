'use client'

import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image'
import {
  DribbleIcon,
  GithubIcon,
  GithubLightIcon,
  LinkedIcon,
  MoonIcon,
  SunIcon,
  TwiiterIcon,
} from '../Icon'
import SiteMetaData from '@/src/utils/siteMetaData'
import { useThemeSwitch } from '../Hooks/useThemeSwitch'
import { cx } from '@/src/utils'
import DarkLogo from './DarkLogo'

const Header = () => {
  const [mode, setMode] = useThemeSwitch()

  const [click, setClick] = useState(false)

  const toggle = () => {
    setClick(!click)
  }

  return (
    <header className=" flex w-full items-center justify-between p-6 px-6 sm:px-10">
      {/* mobile */}
      {mode === 'light' ? (
        <>
          <Logo />
        </>
      ) : (
        <>
          <DarkLogo />
        </>
      )}

      <button
        className="relative z-50 inline-block sm:hidden"
        onClick={toggle}
        aria-label="hambuger Menu"
      >
        <div className="ease w-6 cursor-pointer transition-all duration-300">
          <span
            className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light"
            style={{
              transform: click
                ? 'rotate(-45deg) translateY(0)'
                : 'rotate(0deg) translateY(6px)',
            }}
          >
            &nbsp;
          </span>
          <span
            className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light"
            style={{
              opacity: click ? 0 : 1,
            }}
          >
            &nbsp;
          </span>
          <span
            className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light"
            style={{
              transform: click
                ? 'rotate(45deg) translateY(0)'
                : 'rotate(0deg) translateY(-6px)',
            }}
          >
            &nbsp;
          </span>
        </div>
      </button>

      <nav
        className=" ease fixed right-[35%] top-6 z-50 flex w-max translate-x-1/2 items-center rounded-full  border border-solid  border-dark
        bg-light/80 px-6 py-3 font-medium capitalize backdrop-blur-sm transition-all
        duration-300 sm:hidden sm:px-8
        "
        style={{
          top: click ? '1rem' : '-5rem',
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'ease ml-2 flex h-6 w-6 items-center justify-center rounded-full p-1',
          )}
          aria-label="theme-switcher"
        >
          {mode === 'light' ? (
            <MoonIcon className={'fill-dark'} />
          ) : (
            <SunIcon className={'fill-dark'} />
          )}
        </button>
      </nav>

      {/* Pc */}
      <nav className="fixed right-1/2 top-6 z-50 hidden w-max translate-x-1/2 items-center rounded-full border border-solid border-dark bg-light/80 px-8 py-3 font-medium capitalize backdrop-blur-sm sm:flex ">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'ease p-13 ml-2 flex h-6 w-6 items-center justify-center rounded-full',
          )}
          aria-label="theme-switcher"
        >
          {mode === 'light' ? (
            <MoonIcon className={'fill-dark'} />
          ) : (
            <SunIcon className={'fill-dark'} />
          )}
        </button>
      </nav>
      <div className=" hidden sm:block">
        <a href={SiteMetaData.linkedIn} className="mr-8 inline-block h-6 w-6">
          {/* <Image src={linkedInImg} alt="sns_LinkedIn_logo" /> */}
          <LinkedIcon className="ease transition-all duration-200 hover:scale-125" />
        </a>
        <a href={SiteMetaData.github} className="mr-8 inline-block h-6 w-6">
          {/* <Image src={githubImg} alt="Github" /> */}
          {mode === 'light' ? (
            <>
              <GithubIcon className="ease transition-all duration-200 hover:scale-125" />
            </>
          ) : (
            <>
              <GithubLightIcon className="ease transition-all duration-200 hover:scale-125" />
            </>
          )}
        </a>
      </div>
    </header>
  )
}

export default Header
