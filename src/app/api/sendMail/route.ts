import { runCors } from '@/middleware'
import { EmailFormData } from '@/types/mailData'
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER_ID,
    pass: process.env.GMAIL_USER_PASS,
  },
})

async function sendEmail({
  name,
  email,
  phoneNumber,
  projectDetails,
  subject,
}: EmailFormData) {
  const mailData = {
    to: process.env.GMAIL_USER_ID,
    subject: `[BLOG] ${subject}`,
    from: email,
    message: `${projectDetails}\n${phoneNumber} \n${name}`,
  }

  return transporter.sendMail(mailData)
}

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.json()

  try {
    await sendEmail(formData)
    return new Response(null, { status: 200 })
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
