import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import useIsDesktop from '../../../hooks/useIsDesktop'
import { msxs } from '../../../theme/utils'
import { ucfirst } from '../../../utils/strings'
import { sxs } from './_sxs'
import { SearchBarProps } from './_types'

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const { t } = useTranslation()
  const { isDesktop } = useIsDesktop()
  const [isFocused, setIsFocused] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const computedPlaceholder = React.useMemo(() => {
    const base = ucfirst(placeholder ?? t('global.search'))

    return base.slice(-3) === '...' ? base : `${base}...`
  }, [])

  return (
    <Stack
      sx={msxs(sxs.searchBar, isFocused ? sxs.searchBarFocused : null)}
      direction="row"
      alignItems="stretch"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <Stack sx={sxs.searchBarIcon} direction="row" alignItems="center">
        <SearchRoundedIcon />
      </Stack>
      <TextField
        onChange={(e) => {
          setSearch(e.target.value)
          onSearch(e.target.value)
        }}
        sx={sxs.searchBarInput}
        placeholder={computedPlaceholder}
      />
      <Button
        sx={sxs.searchBarButton}
        disabled={!search}
        onClick={() => {
          onSearch(search)
        }}
      >
        {isDesktop ? ucfirst(t('global.search')) : <SearchRoundedIcon />}
      </Button>
    </Stack>
  )
}

export default SearchBar
