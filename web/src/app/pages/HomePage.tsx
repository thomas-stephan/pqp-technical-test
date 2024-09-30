import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import { debounce } from 'lodash'
import React from 'react'

import { useSearchBooks } from '../api/queries/books'
import InfiniteScroller from '../components/common/infiniteScroller/InfiniteScroller'
import SearchBar from '../components/common/searchBar/SearchBar'
import PageLayout from '../components/wrappers/pageLayout/PageLayout'
import PageWrapper from '../components/wrappers/pageWapper/PageWrapper'

const HomePage: React.FC = () => {
  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState(1)
  const [memoizedData, setMemoizedData] = React.useState<any>(undefined)

  const { data, isLoading, refetch } = useSearchBooks({
    name: search,
    page: page,
  })

  console.log({
    data,
    memoizedData,
    found: data?.data.numFound,
    isLoading,
  })

  React.useEffect(() => {
    if (data?.data.docs) {
      setMemoizedData([...(memoizedData ?? []), ...data.data.docs])
    }
  }, [data?.data.docs])

  const handleSearchDebounced = React.useCallback(
    debounce((name: string) => {
      console.log({
        name,
        search,
      })

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
    <PageWrapper>
      <PageLayout>
        <SearchBar
          onSearch={(e) => {
            handleSearchDebounced(e)
          }}
        />
        {memoizedData && (
          <InfiniteScroller
            loading={isLoading}
            onLoadMore={handleInfiniteScroll}
          >
            <Stack>
              {memoizedData.map((x: any) => (
                <Typography key={x.title}>{x.title}</Typography>
              ))}
            </Stack>
          </InfiniteScroller>
        )}
        {isLoading ? (
          <Stack direction="row" justifyContent="center">
            <CircularProgress />
          </Stack>
        ) : (
          memoizedData && (
            <Stack direction="row" justifyContent="center">
              <Button onClick={handleInfiniteScroll}>more</Button>
            </Stack>
          )
        )}
      </PageLayout>
    </PageWrapper>
  )
}

export default HomePage
