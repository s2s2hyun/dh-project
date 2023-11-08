import React from 'react'
import Category from './Category'
import { slug } from 'github-slugger'

interface CategoriesProps {
  categories: string[]
  currentSlug: string
}

const Categories = ({ categories, currentSlug }: CategoriesProps) => {
  return (
    <div className="mx-10 mt-10 flex flex-wrap items-start border-b-2 border-t-2 border-solid border-dark px-20 py-4 font-medium text-dark">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  )
}

export default Categories
