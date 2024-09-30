import { List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { sxs } from './_sxs'
import { FooterItemProps } from './_types'

const FooterItem: React.FC<FooterItemProps> = ({ label, ...props }) => {
  const wrapContent = React.useCallback((content: React.ReactNode) => {
    return (
      <Stack sx={sxs.footerItem}>
        <Typography fontWeight={600}>{label}</Typography>
        {content}
      </Stack>
    )
  }, [])

  if (props.type === 'default') {
    return wrapContent(props.children)
  }

  if (props.type === 'link-list') {
    return wrapContent(
      <List sx={sxs.footerLinkListList}>
        {props.list.map((item) => (
          <ListItem
            sx={sxs.footerLinkListItem}
            key={`${item.label}-${item.to}`}
          >
            <Link to={item.to}>{item.label}</Link>
          </ListItem>
        ))}
      </List>,
    )
  }

  return null
}

export default FooterItem
