import { cx } from '@/src/utils'
import Link from 'next/link'
import React from 'react'

interface TagProps {
  link?: string
  name: string
  className?: string
  active: boolean
}

const Category = ({ link = '#', name, active, ...props }: TagProps) => {
  return (
    <Link
      href={link}
      className={cx(
        'ease m-2 inline-block rounded-full border border-solid border-dark bg-dark px-10 py-2  text-light transition-all duration-200 hover:scale-105',
        props.className ?? '',
        active ? 'bg-dark text-light ' : 'bg-light text-dark',
      )}
    >
      #{name}
    </Link>
  )
}

export default Category
