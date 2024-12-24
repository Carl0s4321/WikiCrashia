import { create } from 'zustand';

export const useSeverityStore = create((set) => ({
  severity: null,
  setSeverity: (severity) => set({ severity }),
}));