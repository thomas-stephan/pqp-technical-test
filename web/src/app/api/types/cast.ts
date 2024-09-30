export type CastMember = {
  cast_id: number
  character: string
  credit_id: string
  gender: number | undefined
  id: number
  name: string
  order: number
  profile_path: string | undefined
}

export type CrewMember = {
  credit_id: string
  department: string
  gender: number | undefined
  id: number
  job: string
  name: string
  profile_path: string | undefined
}

export type MovieCredits = {
  id: number
  cast: CastMember[]
  crew: CrewMember[]
}
