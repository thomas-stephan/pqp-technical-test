import React from 'react'

import MovieSearch from '../components/feature/movieSearch/MovieSearch'
import { useSearchStore } from '../components/feature/movieSearch/_store'
import TrendingMovies from '../components/feature/trendingMovies/TrendingMovies'
import PageLayout from '../components/wrappers/pageLayout/PageLayout'
import PageLayoutContent from '../components/wrappers/pageLayout/PageLayoutContent'
import PageWrapper from '../components/wrappers/pageWapper/PageWrapper'
import { updatePageAttributes } from '../utils/page'

const HomePage: React.FC = () => {
  const { isSearchActive } = useSearchStore()

  React.useEffect(() => {
    updatePageAttributes({
      title: 'Accueil',
    })
  }, [])

  return (
    <PageWrapper>
      <PageLayout>
        <MovieSearch />
        {!isSearchActive && (
          <PageLayoutContent>
            <TrendingMovies timeWindow="day" />
            <TrendingMovies timeWindow="week" />
          </PageLayoutContent>
        )}
      </PageLayout>
    </PageWrapper>
  )
}

export default HomePage
