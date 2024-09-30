import { Button, CircularProgress, Stack } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { ucfirst } from '../../../utils/strings'
import { useSearchStore } from './_store'
import { movieSearchPaginationSxs as sxs } from './_sxs'
import { MovieSearchPaginationProps, PaginationPage } from './_types'

const buildPagination = (activePage: number, totalPages: number) => {
  const pages: PaginationPage[] = []

  if (totalPages > 0) {
    pages.push({ index: 1 })
  }

  let startPage = Math.max(2, activePage - 1)
  let endPage = startPage + 2

  if (endPage > totalPages) {
    endPage = totalPages
    startPage = Math.max(2, endPage - 2)
  }

  for (let page = startPage; page <= endPage; page++) {
    pages.push({ index: page })
  }

  if (totalPages > 1 && !pages.some((page) => page.index === totalPages)) {
    pages.push({ index: totalPages })
  }

  return pages
}

const MovieSearchPagination: React.FC<MovieSearchPaginationProps> = ({
  onLoadMore,
  loading,
}) => {
  const { isPaginationEnabed, pagination } = useSearchStore()

  const { t } = useTranslation()

  if (!isPaginationEnabed) {
    if (loading) {
      return (
        <Stack direction="row" justifyContent="center">
          <CircularProgress />
        </Stack>
      )
    }
    return (
      <Stack direction="row" justifyContent="center">
        <Button
          color="inherit"
          onClick={() => {
            onLoadMore()
          }}
        >
          {ucfirst(t('global.load_more'))}
        </Button>
      </Stack>
    )
  }

  const activePage = pagination?.activePage ?? 1
  const totalPages = pagination?.totalPages ?? 1

  const pages = buildPagination(activePage, totalPages)

  return (
    <Stack direction="row" justifyContent="center">
      {pages.map((page) => (
        <Button
          key={page.index}
          color="inherit"
          variant="text"
          disabled={loading || page.index === activePage}
          sx={sxs.movieSearchPaginationButton}
          onClick={() => {
            onLoadMore(page.index)
          }}
        >
          {page.index}
        </Button>
      ))}
    </Stack>
  )
}

export default MovieSearchPagination
