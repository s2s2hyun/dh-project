import axios, { AxiosError } from 'axios'

// export async function GET(request: Request, res: Response) {
//   res.status(200).json({ message: 'Hello GET' })
// }

export async function GET() {
  // 복잡한 데이터 구조를 생성
  const data = {
    user: {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      roles: ['admin', 'user'],
    },
    settings: {
      theme: 'dark',
      notifications: true,
    },
    posts: [
      { id: 101, title: 'First Post', content: 'Hello World!' },
      { id: 102, title: 'Second Post', content: 'This is a sample post.' },
    ],
  }

  // JSON 문자열로 변환
  const json = JSON.stringify(data)

  // Response 객체를 생성하여 JSON 응답 반환
  return new Response(json, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // 인스타그램 프로필과 미디어 데이터를 가져오는 로직
//     const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

//     // 사용자 프로필 가져오기
//     const userProfileResponse = await axios.get(
//       'https://graph.instagram.com/me',
//       {
//         params: {
//           fields: 'id,username,media_count',
//           access_token: accessToken,
//         },
//       },
//     )
//     const userProfile = userProfileResponse.data

//     // 사용자 미디어 가져오기
//     const userMediaResponse = await axios.get(
//       'https://graph.instagram.com/me/media',
//       {
//         params: {
//           fields: 'id,caption,media_type,media_url,thumbnail_url,permalink',
//           access_token: accessToken,
//         },
//       },
//     )
//     const userMedia = userMediaResponse.data

//     // 응답 반환
//     res.status(200).json({ userProfile, userMedia })
//   } catch (error) {
//     console.error('Instagram API error:', error)
//     res.status(500).json({ message: 'Internal Server Error' })
//   }
// }

// export async function GET() {
//   try {
//     // 요청 처리 로직 (예: 쿼리 파라미터 검증)
//     // 성공 응답 반환
//     res.status(200).json({ message: 'Hello GET' });
//   } catch (error) {
//     // 오류 처리
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// import axios, { AxiosError } from 'axios'
// import { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const accessToken = req.query.accessToken
//   if (!accessToken || typeof accessToken !== 'string') {
//     res.status(400).json({ message: 'Access token is required' })
//     return
//   }

//   try {
//     // Instagram Graph API 요청
//     const response = await axios.get('https://graph.instagram.com/me', {
//       params: {
//         fields: 'id,username,media_count',
//         access_token: accessToken,
//       },
//     })

//     // 성공적인 응답 반환
//     res.status(200).json(response.data)
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       // Axios 에러 처리
//       const axiosError = error as AxiosError
//       res.status(axiosError.response?.status || 500).json({
//         message: axiosError.message,
//         error: axiosError.response?.data,
//       })
//     } else {
//       // 일반 에러 처리
//       res.status(500).json({ message: 'API 호출 중 오류 발생' })
//     }
//   }
// }
