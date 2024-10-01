import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import { Button } from '@mui/material'
import React from 'react'

import useOnScrollActivation from '../../../hooks/useOnScrollActivation'
import { sxs } from './_sxs'

const ScrollTopButton: React.FC = () => {
  const [isDisplayed, setIsDisplayed] = React.useState(false)
  useOnScrollActivation({
    onReachOver: () => {
      if (!isDisplayed) {
        setIsDisplayed(true)
      }
    },
    onReachUnder: () => {
      setIsDisplayed(false)
    },
    reach: 150,
  })

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isDisplayed) return null

  return (
    <Button color="inherit" onClick={handleClick} sx={sxs.scrollTopButton}>
      <KeyboardArrowUpRoundedIcon />
    </Button>
  )
}

export default ScrollTopButton
