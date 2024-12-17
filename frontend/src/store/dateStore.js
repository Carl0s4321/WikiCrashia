import { create } from "zustand";

export const useDateStore = create((set) => ({
  date: {
    startDate: new Date("November 1 2024"),
    endDate: new Date(),
  },
  setDate: (newDate) =>
    set(() => ({
      date: newDate,
    })),
}));
