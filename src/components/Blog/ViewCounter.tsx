'use client'
import React, { useEffect, useRef, useState } from 'react'
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ViewCounterProps } from '@/types/BlogPost'
import { supabase } from '@/src/utils/supabaseClient'

// const supabase = createClientComponentClient()

const ViewCounter = ({
  slug,
  noCount = false,
  showCount = true,
}: ViewCounterProps) => {
  const [views, setViews] = useState(0)

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc('increment', {
          slug_text: slug,
        })

        if (error) {
          console.error(
            'Error incrementing view count inside try block:',
            error,
          )
        }
      } catch (error) {
        console.error(
          'An error occurred while incrementing the view count:',
          error,
        )
      }
    }

    if (!noCount) {
      incrementView()
    }
  }, [slug, noCount])

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

        // console.log(data)

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
