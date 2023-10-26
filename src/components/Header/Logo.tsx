import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "@/public/assets/light_profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden ">
        <Image src={profileImg} alt="logo" className="w-full h-auto " />
      </div>
      <span className="font-bold text-xl">DH DEV</span>
    </Link>
  );
};

export default Logo;
