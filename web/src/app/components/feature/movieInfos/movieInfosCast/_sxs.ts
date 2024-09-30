import { makeSx } from '../../../../theme/utils'

export const sxs = makeSx({
  movieInfosCast: {
    overflowX: 'auto',
    paddingBottom: '1rem',
  },
  movieInfosCastCover: {
    height: '16rem',
  },
  movieInfosCastCard: {
    flexShrink: 0,
    width: {
      xs: 'calc(50% - 1rem)',
      md: '12rem',
    },
    position: 'relative',
  },
})
