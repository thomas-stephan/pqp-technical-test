import { ButtonProps } from '@mui/material'
import { PropsWithChildren } from 'react'

export type FloatingButtonProps = PropsWithChildren &
  Pick<ButtonProps, 'onClick'> & {
    position?: Partial<
      Record<'top' | 'bottom' | 'right' | 'left', string | number>
    >
    opacity?: number
  }
