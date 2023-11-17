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
        'ease m-2 inline-block rounded-full border border-solid border-dark bg-dark px-6  py-1.5 text-light transition-all  duration-200 hover:scale-105 dark:border-light md:px-10 md:py-2',
        props.className ?? '',
        active
          ? 'bg-dark text-light dark:bg-light dark:text-dark '
          : 'bg-light text-dark dark:bg-dark dark:text-light',
      )}
    >
      #{name}
    </Link>
  )
}

export default Category
