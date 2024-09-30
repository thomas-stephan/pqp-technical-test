import { AxiosResponse } from 'axios'

import { useQuery } from '../useQuery'
import { requester } from '../api'

type SearchBooksParams = {
  name: string
  page: number
}

export const searchBooks = async ({ name, page }: SearchBooksParams) => {
  const computedName = name.replaceAll(' ', '+')

  const res = await requester.get(
    `https://openlibrary.org/search.json?limit=${100}&q=${computedName}&page=${page}`,
  )
  return res
}

export const useSearchBooks = (params: SearchBooksParams) =>
  useQuery<SearchBooksParams, AxiosResponse<any, any>>(searchBooks, {
    variables: params,
    skip: !params.name,
  })
