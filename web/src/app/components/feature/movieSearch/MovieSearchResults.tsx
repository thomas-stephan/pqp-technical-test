import { Box, Button, CircularProgress, Stack } from '@mui/material'
import React from 'react'

import InfiniteScroller from '../../common/infiniteScroller/InfiniteScroller'
import MovieCardList from '../../common/movieCardList/MovieCardList'
import { MovieSearchResultsProps } from './_types'

const MovieSearchResults: React.FC<MovieSearchResultsProps> = ({
  data,
  loading,
  onLoadMore,
}) => {
  return (
    <Stack padding="2rem 0">
      {data && (
        <InfiniteScroller loading={loading} onLoadMore={onLoadMore}>
          <MovieCardList title="Results" movies={data} wrapped />
        </InfiniteScroller>
      )}
      {loading ? (
        <Stack direction="row" justifyContent="center">
          <CircularProgress />
        </Stack>
      ) : (
        data && (
          <Stack direction="row" justifyContent="center">
            <Button onClick={onLoadMore}>more</Button>
          </Stack>
        )
      )}
    </Stack>
  )
}

export default MovieSearchResults
