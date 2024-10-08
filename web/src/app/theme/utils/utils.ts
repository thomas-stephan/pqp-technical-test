import { SxProps } from '@mui/material'

import { Color } from './_types'

export const msxs = (...sxs: Array<SxProps | undefined>): SxProps => {
  return sxs.reduce<SxProps>((acc, sx) => ({ ...acc, ...sx }), {})
}

export const makeSx = <T extends Record<string, SxProps>>(styles: T): T => {
  return styles
}

export const makePalette = <T extends Record<string, Partial<Color>>>(
  styles: T,
): T => {
  return styles
}

export const getGapCorrection = (gap: number, amount = 1) =>
  `${gap / amount}rem`

export const defaultCardListSpacing = '1rem'
