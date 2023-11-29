'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { EmailFormData } from '@/types/mailData'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>()

  const onSubmit = async (data: EmailFormData) => {
    console.log(data, 'data')
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const responseData = await response.json()
      console.log(responseData)
    } catch (error) {
      console.error(error, '< 에러나왔음 fetch ')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 font-in text-base font-medium  leading-relaxed dark:text-white xs:text-lg sm:text-xl"
    >
      Hello! My Name is
      <input
        type="text"
        placeholder="your name"
        {...register('name', { required: true, maxLength: 80 })}
        className="mx-2 border-0 border-b  border-gray bg-transparent p-0 outline-none placeholder:text-center placeholder:text-lg focus:border-gray focus:ring-0"
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="your@email"
        {...register('email', {})}
        className="mx-2 border-0 border-b  border-gray bg-transparent p-0 outline-none placeholder:text-center placeholder:text-lg focus:border-gray focus:ring-0"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register('phoneNumber', {})}
        className="mx-2 border-0 border-b  border-gray bg-transparent p-0 outline-none placeholder:text-center placeholder:text-lg focus:border-gray focus:ring-0"
      />
      Here are some details about my Porject:
      <br />
      <textarea
        {...register('projectDetails', {})}
        rows={3}
        placeholder="My project is about ..."
        className=" mx-2 w-full border-0 border-b  border-gray bg-transparent p-0 outline-none placeholder:text-start placeholder:text-lg focus:border-gray focus:ring-0"
      />
      <input
        type="submit"
        value="Submit"
        className="mt-8 inline-block cursor-pointer rounded border-2 border-solid border-dark px-6 py-2 text-lg font-medium capitalize dark:border-light sm:px-8 sm:py-3 sm:text-xl "
      />
    </form>
  )
}
