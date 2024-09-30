import { StackProps } from '@mui/material'

import { makeSx } from '../../../theme/utils'
import { movieCardListSpacing } from '../movieCardList/_sxs'

export const sxs = makeSx({
  movieCard: {
    width: {
      xs: `calc(50% - (${movieCardListSpacing} / 2))`,
      md: '22rem',
    },
  },
  movieCardContent: {},
})

export const movieCardContentDisplayProps: StackProps = {
  direction: {
    xs: 'row',
    md: 'column',
  },
  alignItems: {
    xs: 'center',
    md: 'flex-start',
  },
  justifyContent: {
    xs: 'space-between',
    md: 'flex-start',
  },
  gap: '.6rem',
}
