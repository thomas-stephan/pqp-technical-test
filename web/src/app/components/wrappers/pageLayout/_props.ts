import { PropsWithChildren } from 'react'

import { HeaderProps } from '../../navigation/header/_props'

export type PageLayoutProps = PropsWithChildren &
  Pick<HeaderProps, 'goBackTo' | 'scrollSensitive'>

export type PageLayoutContentProps = PropsWithChildren<{
  goBackTo?: string
}>
