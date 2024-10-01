import palette from '../../../theme/palette'
import { hexToRgba, makeSx } from '../../../theme/utils'

export const sxs = makeSx({
  scrollTopButton: {
    minWidth: 'unset',
    width: '3.5rem',
    height: '3.5rem',
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    zIndex: 500,
    background: hexToRgba(palette.surface[700], 0.7),
    '& svg': {
      fill: palette.white[500],
    },
  },
})
