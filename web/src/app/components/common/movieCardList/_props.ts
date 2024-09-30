import { Movie } from '../../../api/types'
import { MovieCardProps } from '../movieCard/_types'

export type MovieCardListProps = {
  movies: Movie[]
  title?: string
  wrapped?: boolean
} & Pick<MovieCardProps, 'expandsOnHover'>
