'use client'

import { EmailFormData } from '@/types/mailData'
import React, { useEffect, useState } from 'react'

interface SendMailPageProps {
  userData: EmailFormData
}

const SendMailPage = ({ userData }: SendMailPageProps) => {
  const [isVisible, setIsVisible] = useState(false)

  console.log(userData, 'userData 는 여기요')

  useEffect(() => {
    // Trigger the transition effect after the component mounts
    setIsVisible(true)
  }, [])

  return (
    <div className={`send-mail-page ${isVisible ? 'visible' : ''}`}>
      <div className="flex flex-col items-start justify-center dark:text-white">
        <h3 className="py-4 text-2xl font-semibold ">메일 전송완료</h3>
        <p className="py-4 text-base">{userData.name}님</p>
        <p className="pt-2 text-base">
          {userData.email}으로 빠른 회신 보내도록 하겠습니다.
        </p>
      </div>
    </div>
  )
}

export default SendMailPage
