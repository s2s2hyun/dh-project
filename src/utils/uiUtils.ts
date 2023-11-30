import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Shadcn UI and for Tailwind CSS
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
