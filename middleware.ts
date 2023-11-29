import NextCors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'

const cors = NextCors({
  methods: ['GET', 'POST', 'OPTIONS'],
})

// Helper function to run the middleware
export function runCors(req: NextApiRequest, res: NextApiResponse) {
  return new Promise<void>((resolve, reject) => {
    cors(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve()
    })
  })
}
