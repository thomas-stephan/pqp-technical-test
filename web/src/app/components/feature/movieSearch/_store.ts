import { create } from 'zustand'

type State = {
  isSearchActive: boolean
}

type Actions = {
  setIsSearchActive: (state: boolean) => void
}

export const useSearchStore = create<State & Actions>((set) => ({
  isSearchActive: false,
  setIsSearchActive: (state) => set(() => ({ isSearchActive: state })),
}))
