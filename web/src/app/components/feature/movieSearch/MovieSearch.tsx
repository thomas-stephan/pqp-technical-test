import { Button, Stack } from '@mui/material'
import { debounce } from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useSearchMovies } from '../../../api/queries/searchMovies'
import { MovieSearchResult } from '../../../api/types'
import useIsDesktop from '../../../hooks/useIsDesktop'
import { ucfirst } from '../../../utils/strings'
import CardListSkeleton from '../../common/cardListSkeleton/CardListSkeleton'
import SearchBar from '../../common/searchBar/SearchBar'
import MovieSearchResults from './MovieSearchResults'
import { useSearchStore } from './_store'
import { MovieSearchResultsProps } from './_types'

const MovieSearch: React.FC = () => {
  const { isDesktop } = useIsDesktop()
  const { t } = useTranslation()
  const { update, isSearchActive, isPaginationEnabed, pagination } =
    useSearchStore()

  const [search, setSearch] = React.useState('')
  const [memoizedData, setMemoizedData] = React.useState<
    MovieSearchResult[] | undefined
  >(undefined)

  const currentPage = pagination?.activePage ?? 1

  const updatePage = (page: number) => {
    update({
      pagination: {
        activePage: !isPaginationEnabed ? currentPage + 1 : (page ?? 1),
      },
    })
  }

  const { data, isLoading, error } = useSearchMovies({
    variables: {
      name: search,
      page: currentPage,
    },
    skip: !search,
  })

  React.useEffect(() => {
    return () => {
      update({
        isPaginationEnabed: false,
        pagination: {
          activePage: 1,
          totalPages: undefined,
        },
      })
    }
  }, [])

  React.useEffect(() => {
    if (!isPaginationEnabed) {
      update({
        pagination: {
          totalPages: data?.data.total_pages,
        },
      })

      if (data?.data.results) {
        setMemoizedData([...(memoizedData ?? []), ...data.data.results])
      }
    }
  }, [data?.data.results, data?.data.total_pages, isPaginationEnabed])

  React.useEffect(() => {
    if (search) {
      if (!isSearchActive) {
        update({
          isSearchActive: true,
        })
      }
    } else {
      update({
        isSearchActive: false,
      })
    }
  }, [search])

  const handleSearchDebounced = React.useCallback(
    debounce((name: string) => {
      setMemoizedData(undefined)
      setSearch(name)
    }, 250),
    [search],
  )

  const displayLoading = isPaginationEnabed
    ? isLoading
    : currentPage === 1 && isLoading

  const handleLoadMore: MovieSearchResultsProps['onLoadMore'] = (page) => {
    if (!displayLoading) {
      updatePage(page ?? currentPage + 1)
      if (isPaginationEnabed) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    }
  }

  const handlePaginationState = () => {
    update({
      isPaginationEnabed: !isPaginationEnabed,
      pagination: {
        activePage: currentPage,
        totalPages: data?.data.total_pages,
      },
    })
  }

  const currentData = isPaginationEnabed ? data?.data.results : memoizedData

  return (
    <Stack gap={'2rem'}>
      <Stack gap=".6rem">
        <SearchBar
          onSearch={(e) => {
            handleSearchDebounced(e)
          }}
        />
        <Stack direction="row" justifyContent="flex-end">
          {isSearchActive && !isLoading && (
            <Button
              color={isPaginationEnabed ? 'error' : 'inherit'}
              variant="text"
              onClick={handlePaginationState}
            >
              {ucfirst(
                isPaginationEnabed
                  ? t('global.disable_pagination')
                  : t('global.enable_pagination'),
              )}
            </Button>
          )}
        </Stack>
      </Stack>

      {displayLoading ? (
        <CardListSkeleton skeletonsCount={isDesktop ? 12 : 6} />
      ) : (
        isSearchActive &&
        currentData && (
          <MovieSearchResults
            data={currentData}
            loading={isLoading}
            onLoadMore={handleLoadMore}
            search={search}
            error={error}
          />
        )
      )}
    </Stack>
  )
}

export default MovieSearch
