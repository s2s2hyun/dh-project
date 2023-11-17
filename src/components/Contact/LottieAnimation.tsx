'use client'

import React from 'react'
import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'

const LottieAnimation = () => {
  // const [loading, setLoading] = useState(true);

  return (
    <div className="h-[75vh] w-[100%]">
      <DotLottiePlayer
        src="/Animation-1699868527895.lottie"
        autoplay
        loop
      ></DotLottiePlayer>
    </div>
  )
}

export default LottieAnimation

// https://lottiefiles.com/animations/sloth-meditate-SzNofNFhYY
