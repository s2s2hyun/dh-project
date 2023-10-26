import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

import {
  DribbleIcon,
  GithubIcon,
  LinkedIcon,
  MoonIcon,
  SunIcon,
  TwiiterIcon,
} from "../Icon";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-3 px-8 border border-dark border-solid rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm ">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contacct
        </Link>
        <button>
          <SunIcon />
          {/* <MoonIcon /> */}
        </button>
      </nav>
      <div>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-8">
          {/* <Image src={linkedInImg} alt="sns_LinkedIn_logo" /> */}
          <LinkedIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-8">
          {/* <Image src={twitterImg} alt="Twitter" /> */}
          <TwiiterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-8">
          {/* <Image src={githubImg} alt="Github" /> */}
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-8">
          {/* <Image src={dribbleImg} alt="Drible" /> */}
          <DribbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
