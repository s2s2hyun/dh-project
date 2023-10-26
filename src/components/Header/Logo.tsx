import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "@/public/assets/light_profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-36  overflow-hidden ">
        <Image src={profileImg} alt="logo" className="w-full h-auto " />
      </div>
    </Link>
  );
};

export default Logo;
