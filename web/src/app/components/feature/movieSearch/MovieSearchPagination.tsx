import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import { Button, CircularProgress, Stack, Typography } from '@mui/material'
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

  return pages
}

const MovieSearchPagination: React.FC<MovieSearchPaginationProps> = ({
  onLoadMore,
  loading,
}) => {
  const { isPaginationEnabed, pagination, isEndReached } = useSearchStore()

  const { t } = useTranslation()

  const activePage = pagination?.activePage ?? 1
  const totalPages = pagination?.totalPages ?? 1

  if (!isPaginationEnabed) {
    if (loading) {
      return (
        <Stack direction="row" justifyContent="center">
          <CircularProgress />
        </Stack>
      )
    }

    if (isEndReached) {
      return (
        <Stack direction="row" justifyContent="center">
          <Typography>{ucfirst(t('global.end_of_results'))}</Typography>
        </Stack>
      )
    }

    return (
      <Stack direction="row" justifyContent="center">
        <Button
          color="inherit"
          onClick={() => {
            if (!isEndReached) {
              onLoadMore()
            }
          }}
        >
          {ucfirst(t('global.load_more'))}
        </Button>
      </Stack>
    )
  }

  const pages = buildPagination(activePage, totalPages)

  return (
    <Stack direction="row" justifyContent="center">
      {activePage > 1 && (
        <Button
          color="inherit"
          variant="text"
          sx={sxs.movieSearchPaginationButton}
          onClick={() => {
            onLoadMore(activePage - 1)
          }}
        >
          <KeyboardArrowLeftRoundedIcon />
        </Button>
      )}
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
      {activePage < totalPages && (
        <Button
          color="inherit"
          variant="text"
          sx={sxs.movieSearchPaginationButton}
          onClick={() => {
            onLoadMore(activePage + 1)
          }}
        >
          <KeyboardArrowRightRoundedIcon />
        </Button>
      )}
    </Stack>
  )
}

export default MovieSearchPagination
