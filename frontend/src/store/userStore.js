import { create } from 'zustand'

export const useUserStore = create((set) => ({
  userData: {
    name:"",
    email:"",
  },
  setUser: (user) => set({ user, userId: user?.$id }),
  clearUser: () => set({ user: null, userId: null }),

  isAuthenticated: false,
  setIsAuthenticated: (status) => set({ isAuthenticated: status }),
}))
