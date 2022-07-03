import { useState, useEffect } from 'react'

interface useRequestResult<Result> {
  loading: boolean
  result: Result | null
  error: string | null
}

interface Request<Result> {
  error: string | null
  data: Result | null
}

export const useRequest = <Result>(
  request: () => Promise<Request<Result>>
): useRequestResult<Result> => {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const makeRequest = async (): Promise<void> => {
      try {
        const { data, error } = await request()
        if (error) throw error
        setResult(data)
        setLoading(false)
      } catch (err: any) {
        setError(err.message)
        setLoading(false)
      }
    }
    makeRequest()
  }, [])
  return { loading, error, result }
}
