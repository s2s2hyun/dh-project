import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImg from '@/public/assets/light_profile-img.png'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-36  overflow-hidden  dark:border-light dark:bg-light   ">
        <Image
          src={profileImg}
          alt="logo"
          className="h-auto w-full "
          sizes="33vw"
          priority
        />
      </div>
    </Link>
  )
}

export default Logo
