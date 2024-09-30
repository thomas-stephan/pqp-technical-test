import palette from '../../../../theme/palette'
import { hexToRgba, makeSx } from '../../../../theme/utils'
import { HEADER_HEIGHT } from '../../../navigation/header/_sxs'

export const sxs = makeSx({
  MovieInfosCover: {
    height: {
      xs: '22rem',
      md: '32rem',
    },
    top: 0,
  },
  MovieInfosCoverSpacer: {
    height: {
      xs: `calc(22rem - ${HEADER_HEIGHT})`,
      md: `calc(32rem - ${HEADER_HEIGHT})`,
    },
  },
  MovieInfosCoverContent: {
    padding: {
      xs: '1rem',
      md: '2rem',
    },
    background: `linear-gradient(0deg, ${hexToRgba(palette.surface[900], 0.9)} 0%, ${hexToRgba(palette.surface[900], 0.7)} 39%, transparent 100%)`,
  },
  MovieInfosCoverContentTitle: {
    color: palette.white[500],
  },
})
