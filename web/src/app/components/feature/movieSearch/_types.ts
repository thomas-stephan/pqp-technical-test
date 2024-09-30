import { MovieSearchResult } from '../../../api/types'

export type MovieSearchResultsProps = {
  data: MovieSearchResult[]
  onLoadMore: (page?: number) => void
  loading: boolean
  search?: string
  error?: unknown
}

export type MovieSearchPaginationProps = Pick<
  MovieSearchResultsProps,
  'onLoadMore' | 'loading'
>

export type PaginationPage = {
  index: number
}
