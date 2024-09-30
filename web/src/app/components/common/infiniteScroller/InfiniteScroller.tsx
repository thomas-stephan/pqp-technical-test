import { Box, Stack } from '@mui/material'
import React, { useCallback, useEffect, useRef } from 'react'

import { InfiniteScrollerProps } from './_types'

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({
  loading,
  onLoadMore,
  children,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  const handleIntersection: IntersectionObserverCallback = useCallback(
    (entries) => {
      if (!loading) {
        const [entry] = entries
        if (entry.isIntersecting && window.scrollY > 0) {
          onLoadMore()
        }
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
    <Stack
      justifyContent="flex-end"
      sx={{
        minHeight: '70dvh',
      }}
    >
      {children}
      {!loading && <Box ref={sentinelRef} />}
    </Stack>
  )
}

export default InfiniteScroller
