import { PropsWithChildren } from 'react'

export type FooterItemDef<T extends object> = T & {
  label?: string
}

export type FooterItemDefDefault = FooterItemDef<
  PropsWithChildren<{
    type: 'default'
  }>
>

export type FooterItemDefLinkListItem = {
  label: string
  to: string
}

export type FooterItemDefLinkList = FooterItemDef<{
  type: 'link-list'
  list: FooterItemDefLinkListItem[]
}>

export type FooterItemProps = FooterItemDefDefault | FooterItemDefLinkList
