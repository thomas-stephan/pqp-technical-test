import palette from '../../../theme/palette'
import { makeSx } from '../../../theme/utils'

export const sxs = makeSx({
  floatingButton: {
    minWidth: '3.5rem',
    height: '3.5rem',
    position: 'fixed',
    zIndex: 500,
    color: palette.white[500],
    '& svg': {
      fill: palette.white[500],
    },
    // '& *': {
    //   color: palette.white[500],
    // },
  },
})
