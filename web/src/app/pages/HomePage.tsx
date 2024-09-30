import { Stack } from '@mui/material'
import React from 'react'

import MovieSearch from '../components/feature/movieSearch/MovieSearch'
import { useSearchStore } from '../components/feature/movieSearch/_store'
import TrendingMovies from '../components/feature/trendingMovies/TrendingMovies'
import PageLayout from '../components/wrappers/pageLayout/PageLayout'
import PageWrapper from '../components/wrappers/pageWapper/PageWrapper'

const HomePage: React.FC = () => {
  const { isSearchActive } = useSearchStore()
  return (
    <PageWrapper>
      <PageLayout>
        <MovieSearch />
        {!isSearchActive && (
          <Stack padding="2rem 0" gap="3rem">
            <TrendingMovies timeWindow="day" />
            <TrendingMovies timeWindow="week" />
          </Stack>
        )}
      </PageLayout>
    </PageWrapper>
  )
}

export default HomePage
