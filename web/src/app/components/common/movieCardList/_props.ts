import { Movie } from '../../../api/types'

export type MovieCardListProps = {
  movies: Movie[]
  title?: string
  wrapped?: boolean
}
