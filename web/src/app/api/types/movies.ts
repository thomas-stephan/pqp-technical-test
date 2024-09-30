import { Maybe } from './common'

export type Genre = Maybe<{
  id: number
  name: string
}>

export type ProductionCompany = Maybe<{
  id: number
  logo_path: string | undefined
  name: string
  origin_country: string
}>

export type ProductionCountry = Maybe<{
  iso_3166_1: string
  name: string
}>

export type SpokenLanguage = Maybe<{
  iso_639_1: string
  name: string
}>

export type MovieDetails = Maybe<{
  adult: boolean
  backdrop_path: string | undefined
  belongs_to_collection: object | undefined
  budget: number
  genres: Genre[]
  homepage: string | undefined
  id: number
  imdb_id: string | undefined
  original_language: string
  original_title: string
  overview: string | undefined
  popularity: number
  poster_path: string | undefined
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number | undefined
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string | undefined
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}>

export type Movie = Maybe<{
  adult: boolean
  backdrop_path: string | undefined
  genre_ids: number[]
  id: number
  media_type: 'movie' | 'tv'
  original_language: string
  original_title?: string
  overview: string
  popularity: number
  poster_path: string | undefined
  release_date?: string
  title: string
  name: string
  video: boolean
  vote_average: number
  vote_count: number
}>
