import palette from '../../../theme/palette'
import { makeSx } from '../../../theme/utils'

export const sxs = makeSx({
  searchBar: {
    background: palette.surface[300],
    border: `2px solid ${palette.surface[500]}`,
    borderRadius: '.5rem',
    overflow: 'hidden',
    paddingLeft: '1rem',
  },
  searchBarFocused: {
    borderColor: palette.primary[500],
  },
  searchBarIcon: {},
  searchBarButton: {
    borderRadius: 0,
  },
  searchBarInput: {
    width: '100%',
    '& fieldset': {
      border: 'none',
    },
  },
  searchBarInputClear: {
    flexShrink: 0,
  },
})
