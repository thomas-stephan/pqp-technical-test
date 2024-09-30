import { create } from 'zustand'

type Pagination = Partial<{
  activePage: number
  totalPages: number
}>

type State = {
  isSearchActive: boolean
  pagination?: Pagination
  isPaginationEnabed: boolean
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
  update: (state) =>
    set((store) => ({
      ...store,
      ...state,
      pagination: {
        ...store.pagination,
        ...state.pagination,
      },
    })),
}))
