'use client'

import React, { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ViewCounterProps } from '@/types/BlogPost'

const supabase = createClientComponentClient()

const ViewCounter = ({
  slug,
  noCount = false,
  showCount = true,
}: ViewCounterProps) => {
  const [views, setViews] = useState(0)

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug: slug })
          .single()

        if (error) {
          console.log('error incrementing view count inside try block', error)
        }

        console.log(data)

        setViews(data ? data.count : 0)
      } catch (error) {
        console.log(
          'An error occurred while incrementing the view count:',
          error,
        )
      }
    }

    getViews()
  }, [slug])

  if (showCount) {
    return <div>{views} views</div>
  } else {
    return null
  }
}

export default ViewCounter
