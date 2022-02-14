import create from 'zustand';
import {persist} from 'zustand/middleware';
import {zustandStorage} from './storage';

export const useStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({fishes: get().fishes + 1}),
    }),
    {
      name: 'food-storage', // unique name
      getStorage: () => zustandStorage,
    },
  ),
);
