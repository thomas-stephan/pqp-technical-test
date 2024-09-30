import { AxiosError } from 'axios'
import lodash from 'lodash'
import { useCallback, useEffect, useState } from 'react'

type Query<T, D> = (params: T) => Promise<D>

type UseQueryOptions<T extends object> = {
  variables: T
  skip?: boolean
  onRequestSuccess?: () => void
}

export const useQuery = <Params extends object, Result>(
  query: Query<Params, Result>,
  options: UseQueryOptions<Params>,
) => {
  const controller = new AbortController()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | AxiosError | null>(null)
  const [data, setData] = useState<Result | undefined>(undefined)

  const [variables, setVariables] = useState<Params | undefined>(undefined)

  const skip = options.skip || lodash.isEqual(variables, options.variables)

  useEffect(() => {
    if (!variables || !lodash.isEqual(variables, options.variables)) {
      setVariables(options.variables)
    }
  }, [options.variables, variables])

  const trigger = useCallback(async () => {
    if (variables) {
      setIsLoading(true)

      try {
        const res = await query(variables)
        setData(res)
        if (options.onRequestSuccess) {
          options.onRequestSuccess()
        }
      } catch (error) {
        const errorRes =
          error instanceof Error || error instanceof AxiosError
            ? error
            : new Error('Unknown error')
        setError(errorRes)
      } finally {
        setIsLoading(false)
      }
    } else {
      setError(new Error('Missing variables'))
    }
  }, [variables])

  useEffect(() => {
    if (!skip) {
      trigger()
    }

    return () => {
      controller.abort()
    }
  }, [skip, variables])

  const queryResult = {
    isLoading,
    error,
    data,
    refetch: trigger,
  }

  return queryResult
}
