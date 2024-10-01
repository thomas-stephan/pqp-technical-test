import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { IconButton, Stack, TextField } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { msxs } from '../../../theme/utils'
import { ucfirst } from '../../../utils/strings'
import { sxs } from './_sxs'
import { SearchBarProps } from './_types'

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearch,
  active,
}) => {
  const { t } = useTranslation()

  const [isFocused, setIsFocused] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const cancelSearch = () => {
    onSearch('')
    setSearch('')
    setIsFocused(false)
  }

  const computedPlaceholder = React.useMemo(() => {
    const base = ucfirst(placeholder ?? t('global.search'))

    return base.slice(-3) === '...' ? base : `${base}...`
  }, [])

  React.useEffect(() => {
    if (!active) {
      cancelSearch()
    }
  }, [active])

  return (
    <Stack
      sx={msxs(sxs.searchBar, isFocused ? sxs.searchBarFocused : null)}
      direction="row"
      alignItems="center"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <Stack sx={sxs.searchBarIcon} direction="row" alignItems="center">
        <SearchRoundedIcon />
      </Stack>
      <TextField
        onChange={(e) => {
          onSearch(e.target.value)
          setSearch(e.target.value)
        }}
        sx={sxs.searchBarInput}
        placeholder={computedPlaceholder}
        value={search}
      />
      {search && (
        <IconButton sx={sxs.searchBarInputClear} onClick={cancelSearch}>
          <CloseRoundedIcon />
        </IconButton>
      )}
    </Stack>
  )
}

export default SearchBar
