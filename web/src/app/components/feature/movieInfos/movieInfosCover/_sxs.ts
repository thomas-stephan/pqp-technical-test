import palette from '../../../../theme/palette'
import { hexToRgba, makeSx } from '../../../../theme/utils'
import { HEADER_HEIGHT } from '../../../navigation/header/_sxs'

const height = {
  xs: '22rem',
  md: '55dvh',
  lg: '65dvh',
  xl: '75dvh',
}

export const sxs = makeSx({
  MovieInfosCover: {
    height,
    top: 0,
  },
  MovieInfosCoverSpacer: {
    height: {
      xs: `calc(${height.xs} - ${HEADER_HEIGHT})`,
      md: `calc(${height.md} - ${HEADER_HEIGHT})`,
      lg: `calc(${height.lg} - ${HEADER_HEIGHT})`,
      xl: `calc(${height.xl} - ${HEADER_HEIGHT})`,
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
