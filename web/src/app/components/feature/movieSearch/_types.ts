import { MovieSearchResult } from '../../../api/types'

export type MovieSearchResultsProps = {
  data: MovieSearchResult[]
  onLoadMore: () => void
  loading: boolean
  search?: string
  error?: unknown
}
