import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import React from 'react'

import useOnScrollActivation from '../../../hooks/useOnScrollActivation'
import FloatingButton from '../floatingButton/FloatingButton'

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
    <FloatingButton
      onClick={handleClick}
      position={{
        bottom: '1rem',
        right: '1rem',
      }}
    >
      <KeyboardArrowUpRoundedIcon />
    </FloatingButton>
  )
}

export default ScrollTopButton
