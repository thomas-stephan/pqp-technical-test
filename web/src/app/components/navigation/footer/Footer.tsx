import { Stack } from '@mui/material'
import React from 'react'

import FooterItem from './FooterItem'
import { sxs } from './_sxs'

const Footer: React.FC = () => {
  return (
    <Stack
      sx={sxs.footer}
      gap={{
        xs: '6rem',
        md: '3rem',
      }}
      flexWrap="wrap"
      direction={{
        xs: 'column',
        md: 'row',
      }}
    >
      <FooterItem
        label="Link list"
        type="link-list"
        list={[
          {
            label: 'link 1',
            to: '#',
          },
        ]}
      />
      <FooterItem
        label="Link list"
        type="link-list"
        list={[
          {
            label: 'link 1',
            to: '#',
          },
        ]}
      />
    </Stack>
  )
}

export default Footer
