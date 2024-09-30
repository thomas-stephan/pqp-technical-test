export type UseQueryParams<T extends object> = {
  variables: T
  skip?: boolean
}

export type Maybe<T> = Partial<T>
