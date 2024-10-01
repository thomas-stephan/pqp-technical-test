import React from 'react'

import { useOnScrollActivationProps } from './_props'

const useOnScrollActivation = ({
  onReachOver,
  onReachUnder,
  enabled = true,
  reach = 100,
}: useOnScrollActivationProps) => {
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > reach) {
        onReachOver()
      } else {
        onReachUnder()
      }
    }

    if (enabled) {
      window.addEventListener('scroll', handleScroll, true)
    } else {
      window.removeEventListener('scroll', handleScroll, true)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [enabled, reach, onReachOver, onReachUnder])
}

export default useOnScrollActivation
