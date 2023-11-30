'use client'
import AboutCoverSection from '@/src/components/About/AboutCoverSection'
import Skills from '@/src/components/About/Skills'
import SiteMetaData from '@/src/utils/siteMetaData'
import { Metadata } from 'next'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useEffect } from 'react'

// const fetchData = async () => {
//   const { data } = await axios.get('http://172.18.33.131:3000/api/instagram')
//   return data
// }

// async function fetchData() {
//   try {
//     const response = await axios.get('http://172.18.33.131:3000/api/instagram')
//     const fetchDataFill = response.data
//     return fetchDataFill
//   } catch (error) {
//     console.log(error)
//     throw error
//   }
// }

const About = () => {
  // const { data, isLoading, error } = useQuery(['uniqueKey'], fetchData)

  // if (isLoading) return 'Loading...'
  // if (error) {
  //   const err = error as AxiosError // 타입 단언 사용
  //   return 'An error has occurred: ' + err.message
  // }

  // useEffect(() => {
  //   axios
  //     .get('http://172.18.33.131:3000/api/instagram')
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error))
  // }, [])

  // console.log(data)

  return (
    <>
      <AboutCoverSection />
      <Skills />
      {/* {data &&
        data.posts &&
        data.posts.map((post: any) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))} */}
    </>
  )
}

export default About
