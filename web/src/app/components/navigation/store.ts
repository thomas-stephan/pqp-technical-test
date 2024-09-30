import { create } from 'zustand'

type State = {
  isDrawerOpen: boolean
}

type Actions = {
  toggleDrawer: (state: boolean) => void
}

export const useNavigationReducer = create<State & Actions>((set) => ({
  isDrawerOpen: false,
  toggleDrawer: (state) => set(() => ({ isDrawerOpen: state })),
}))
