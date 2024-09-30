import { Box } from '@mui/material'
import { debounce } from 'lodash'
import React from 'react'

import { useSearchMovies } from '../../../api/queries/searchMovies'
import { MovieSearchResult } from '../../../api/types'
import MovieCardListLoader from '../../common/movieCardList/MovieCardListLoader'
import SearchBar from '../../common/searchBar/SearchBar'
import MovieSearchResults from './MovieSearchResults'
import { useSearchStore } from './_store'

const MovieSearch: React.FC = () => {
  const { setIsSearchActive, isSearchActive } = useSearchStore()
  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState(1)
  const [memoizedData, setMemoizedData] = React.useState<
    MovieSearchResult[] | undefined
  >(undefined)

  const { data, isLoading, error, refetch } = useSearchMovies({
    variables: {
      name: search,
      page: page,
    },
    skip: !search,
  })

  React.useEffect(() => {
    if (data?.data.results) {
      setMemoizedData([...(memoizedData ?? []), ...data.data.results])
    }
  }, [data?.data.results])

  React.useEffect(() => {
    if ((memoizedData?.length ?? 0) > 0) {
      setIsSearchActive(true)
    } else {
      setIsSearchActive(false)
    }

    return () => {
      setIsSearchActive(false)
    }
  }, [memoizedData])

  const handleSearchDebounced = React.useCallback(
    debounce((name: string) => {
      setMemoizedData(undefined)
      setPage(1)

      if (name === search) {
        setMemoizedData(undefined)
        setPage(1)
        refetch()
      } else {
        setSearch(name)
      }
    }, 250),
    [search],
  )

  const handleInfiniteScroll = () => {
    setPage(page + 1)
  }
  return (
    <Box>
      <SearchBar
        onSearch={(e) => {
          handleSearchDebounced(e)
        }}
      />

      {page === 1 && isLoading ? (
        <MovieCardListLoader />
      ) : (
        isSearchActive &&
        memoizedData && (
          <MovieSearchResults
            data={memoizedData}
            loading={isLoading}
            onLoadMore={handleInfiniteScroll}
            search={search}
            error={error}
          />
        )
      )}
    </Box>
  )
}

export default MovieSearch
