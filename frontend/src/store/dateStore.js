import { create } from "zustand";

export const useDateStore = create((set) => ({
  date: {
    startDate: null,
    endDate: null,
  },
  setDate: (newDate) =>
    set(() => ({
      date: newDate,
    })),
}));
