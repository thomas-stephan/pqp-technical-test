import {
  defaultCardListSpacing,
  getGapCorrection,
  makeSx,
} from '../../../theme/utils'

export const sxs = makeSx({
  cardListSkeleton: {
    width: '100%',
  },
  cardListSkeletonContent: {
    overflowX: 'auto',
    paddingBottom: '1rem',
  },
  cardListSkeletonItem: {
    width: {
      xs: `calc(50% - ${getGapCorrection(parseFloat(defaultCardListSpacing), 2)})`,
      md: `calc(33% - ${getGapCorrection(parseFloat(defaultCardListSpacing), 1.2)})`,
      lg: `calc(20% - ${getGapCorrection(parseFloat(defaultCardListSpacing), 1.2)})`,
    },
    height: '20rem',
    transform: 'scale(1)',
  },
  title: {
    width: '60%',
  },
})
