import { Box } from '@mui/material'
import React, { useCallback, useEffect, useRef } from 'react'

import { InfiniteScrollerProps } from './_types'

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({
  loading,
  onLoadMore,
  children,
}) => {
  //   const containerRef = useRef<HTMLDivElement | null>(null)

  //   const handleScroll = useCallback(() => {
  //     if (loading) return

  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       onLoadMore()
  //     }
  //   }, [loading, onLoadMore])

  //   useEffect(() => {
  //     window.addEventListener('scroll', handleScroll)
  //     return () => {
  //       window.removeEventListener('scroll', handleScroll)
  //     }
  //   }, [handleScroll])

  const observerRef = useRef<IntersectionObserver | null>(null)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  const handleIntersection: IntersectionObserverCallback = useCallback(
    (entries) => {
      const [entry] = entries
      if (entry.isIntersecting && !loading && window.scrollY > 0) {
        onLoadMore()
      }
    },
    [loading, onLoadMore],
  )

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    })

    const { current: observer } = observerRef
    const { current: sentinel } = sentinelRef

    if (sentinel) observer.observe(sentinel)

    return () => {
      if (sentinel) observer?.unobserve(sentinel)
    }
  }, [handleIntersection])

  return (
    <Box>
      {children}
      <Box ref={sentinelRef} />
    </Box>
  )
}

export default InfiniteScroller
