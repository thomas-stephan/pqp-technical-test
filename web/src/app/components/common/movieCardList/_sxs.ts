import { makeSx } from '../../../theme/utils'

export const movieCardListSpacing = '1rem'

export const sxs = makeSx({
  MovieCardList: {
    width: '100%',
  },
  MovieCardListContent: {
    overflowX: 'auto',
    paddingBottom: '1rem',
  },
})

export const MovieCardListLoaderSxs = makeSx({
  title: {
    width: '60%',
  },
})
