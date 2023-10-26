import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "@/public/assets/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border boder-solid border-dark mr-4">
        <Image
          src={profileImg}
          alt="logo"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">DH DEV</span>
    </Link>
  );
};

export default Logo;
