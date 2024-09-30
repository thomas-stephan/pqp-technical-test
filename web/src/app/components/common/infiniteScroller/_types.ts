import { PropsWithChildren } from 'react'

export type InfiniteScrollerProps = PropsWithChildren<{
  loading: boolean
  onLoadMore: () => void
}>
