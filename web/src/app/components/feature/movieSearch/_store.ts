import { create } from 'zustand'

type Pagination = Partial<{
  activePage: number
  totalPages: number
}>

type State = {
  isSearchActive: boolean
  pagination?: Pagination
  isPaginationEnabed: boolean
  isEndReached: boolean
}

type Actions = {
  update: (state: Partial<State>) => void
}

export const useSearchStore = create<State & Actions>((set) => ({
  isSearchActive: false,
  isPaginationEnabed: false,
  pagination: {
    totalPages: 0,
    activePage: 1,
  },
  isEndReached: false,
  update: (state) =>
    set((store) => {
      const res: Partial<State> = {
        ...store,
        ...state,
        pagination: {
          ...store.pagination,
          ...state.pagination,
        },
      }

      const pagination = res.pagination

      const isEndReached =
        res.isSearchActive && pagination?.activePage && pagination?.totalPages
          ? pagination.activePage === pagination.totalPages
          : false

      return {
        ...res,
        isEndReached,
      }
    }),
}))
