import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { MovieSearchResult } from '../../../api/types'
import InfiniteScroller from '../../common/infiniteScroller/InfiniteScroller'
import MovieCardList from '../../common/movieCardList/MovieCardList'
import MovieSearchPagination from './MovieSearchPagination'
import { useSearchStore } from './_store'
import { MovieSearchResultsProps } from './_types'

const MovieSearchResults: React.FC<MovieSearchResultsProps> = ({
  data,
  loading,
  onLoadMore,
  search,
  error,
}) => {
  const { isPaginationEnabed, isEndReached, pagination } = useSearchStore()

  const infiniteScrollerWrapper = React.useCallback(
    (content: React.ReactNode) => {
      if (!isPaginationEnabed) {
        return (
          <InfiniteScroller
            loading={loading}
            onLoadMore={() => {
              if (!loading && !isEndReached) {
                onLoadMore()
              }
            }}
          >
            {content}
          </InfiniteScroller>
        )
      }

      return content
    },
    [isPaginationEnabed, loading, onLoadMore],
  )

  const { t } = useTranslation()

  const computedData = data.reduce<MovieSearchResult[]>((prev, curr) => {
    if (!prev.find((x) => x.id === curr.id)) {
      prev.push(curr)
    }
    return prev
  }, [])

  const listTitle = React.useMemo(() => {
    if (!search) return undefined
    return t('movies.result_for_search', {
      search,
    })
  }, [search, t])

  const pageOf = React.useMemo(() => {
    if (
      isPaginationEnabed &&
      pagination?.activePage &&
      pagination?.totalPages
    ) {
      return t('global.page_of', {
        activePage: pagination?.activePage,
        totalPages: pagination?.totalPages,
      })
    }
    return undefined
  }, [t, pagination])

  if (error) {
    console.error({ error })
    return <Typography>Error</Typography>
  }

  return (
    <Stack>
      {computedData &&
        infiniteScrollerWrapper(
          <MovieCardList
            title={listTitle}
            titleEnd={pageOf}
            movies={computedData}
            wrapped
          />,
        )}
      <MovieSearchPagination onLoadMore={onLoadMore} loading={loading} />
    </Stack>
  )
}

export default MovieSearchResults
