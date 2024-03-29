import { create } from "zustand";

const useBearStore: any = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export { useBearStore };
