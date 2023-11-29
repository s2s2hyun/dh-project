import { runCors } from '@/middleware'
import { EmailFormData } from '@/types/mailData'
import { NextApiRequest, NextApiResponse } from 'next'
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

export async function sendEmail({
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

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body, 'here yo')

  const formData = req.body

  try {
    await sendEmail(formData)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error })
  }
}
