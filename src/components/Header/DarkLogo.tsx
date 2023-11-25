import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import darkprofileImg from '@/public/assets/dark_profile-img.png'

const DarkLogo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-36  overflow-hidden ">
        <Image
          src={darkprofileImg}
          alt="logo"
          className="h-auto w-full "
          sizes="33vw"
          priority
        />
      </div>
    </Link>
  )
}

export default DarkLogo
