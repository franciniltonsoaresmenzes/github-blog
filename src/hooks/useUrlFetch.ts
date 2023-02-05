import { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    api
      .get(url, options)
      .then((response) => setData(response.data))
      .catch((err) => setError(err))
      .finally(() => setIsFetching(false))
  }, [])

  return { data, error, isFetching }
}
