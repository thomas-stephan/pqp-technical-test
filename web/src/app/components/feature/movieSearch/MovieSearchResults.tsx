import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { MovieSearchResult } from '../../../api/types'
import InfiniteScroller from '../../common/infiniteScroller/InfiniteScroller'
import MovieCardList from '../../common/movieCardList/MovieCardList'
import { MovieSearchResultsProps } from './_types'

const MovieSearchResults: React.FC<MovieSearchResultsProps> = ({
  data,
  loading,
  onLoadMore,
  search,
  error,
}) => {
  console.error({ error })

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

  if (error) {
    return <Typography>Error</Typography>
  }

  return (
    <Stack padding="2rem 0">
      {computedData && (
        <InfiniteScroller loading={loading} onLoadMore={onLoadMore}>
          <MovieCardList title={listTitle} movies={computedData} wrapped />
        </InfiniteScroller>
      )}
      {loading ? (
        <Stack direction="row" justifyContent="center">
          <CircularProgress />
        </Stack>
      ) : (
        computedData && (
          <Stack direction="row" justifyContent="center">
            <Button onClick={onLoadMore}>more</Button>
          </Stack>
        )
      )}
    </Stack>
  )
}

export default MovieSearchResults
