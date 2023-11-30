'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { EmailFormData } from '@/types/mailData'

interface ContactFormProps {
  setMailLoading: React.Dispatch<React.SetStateAction<boolean>>
  setUserData: React.Dispatch<React.SetStateAction<EmailFormData>>
  setMailPage: React.Dispatch<React.SetStateAction<number>>
}

export default function ContactForm({
  setMailLoading,
  setUserData,
  setMailPage,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<EmailFormData>()
  const projectDetails = watch('projectDetails', '')
  const onSubmit = async (data: EmailFormData) => {
    setUserData(data)
    setMailLoading(true)
    try {
      const response = await axios.post('/api/sendMail', data)
      setMailLoading(false)
      setMailPage(1)
      console.log(response.data, 'data값에 뭐가 쓰였어 지금')
    } catch (error: any) {
      setMailLoading(false)
      if (error.response) {
        console.error(
          `HTTP error! status: ${error.response.status}, message: ${error.response.data}`,
        )
      } else if (error.request) {
        console.error('No response was received', error.request)
      } else {
        console.error('Error', error.message)
      }
    }
  }

  // console.log(userData, 'userData')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 w-full font-in text-base font-medium  leading-relaxed dark:text-white xs:text-lg sm:text-xl"
    >
      <div className="flex w-full flex-col items-center justify-center ">
        <div className=" flex w-full justify-between ">
          <div className="text-sm sm:text-base">
            안녕하세요, 연락주시는분의 정보를 알려주세요
          </div>
          <div className="text-sm sm:text-base">
            <span className="text-blue-500 dark:text-red-500">*</span> 필수 작성
            항목
          </div>
        </div>
        <div className="flex w-full justify-between pt-6">
          <div className="flex w-[47%] flex-col">
            <p>
              성함 <span className="text-blue-500 dark:text-red-500">*</span>
            </p>
            <input
              type="text"
              placeholder="your name"
              {...register('name', {
                required: '이름 입력은 필수입니다.',
                maxLength: 80,
              })}
              className="border-1   border-gray bg-transparent p-4 outline-none placeholder:text-left placeholder:text-lg focus:border-gray focus:ring-0"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex w-[47%] flex-col">
            <p>
              이메일 <span className="text-blue-500 dark:text-red-500">*</span>
            </p>
            <input
              type="email"
              placeholder="your@email"
              {...register('email', {
                required: '이메일 입력은 필수입니다.',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: '이메일형식에 입력해주세요',
                },
              })}
              className="border-1   border-gray bg-transparent  p-4 outline-none placeholder:text-left placeholder:text-lg focus:border-gray focus:ring-0"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="flex w-full flex-col pt-6">
          <p>
            전하고 싶은 메시지
            <span className="text-blue-500 dark:text-red-500"> *</span>
          </p>
          <br />
          <textarea
            {...register('projectDetails', {
              required: '메시지 입력은 필수입니다.',
              maxLength: {
                value: 1000,
                message: '최대 1000자 까지 허용됩니다.',
              },
            })}
            rows={3}
            placeholder="My project is about ..."
            className=" border-1  w-full  border-gray bg-transparent p-0 outline-none placeholder:text-start placeholder:text-lg focus:border-gray focus:ring-0"
          />
          <div className="text-right text-sm">
            {`${projectDetails.length}/1000`}
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-8 inline-block cursor-pointer rounded border-2 border-solid border-dark px-6 py-2 text-lg font-medium capitalize dark:border-light sm:px-8 sm:py-3 sm:text-xl "
        />
      </div>
    </form>
  )
}
