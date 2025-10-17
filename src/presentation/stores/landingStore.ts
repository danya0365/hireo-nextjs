"use client";

import localforage from "localforage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface LandingState {
  searchTerm: string;
  selectedCategoryId: string | null;
  featuredOnly: boolean;
}

interface LandingActions {
  setSearchTerm: (value: string) => void;
  setSelectedCategoryId: (value: string | null) => void;
  toggleFeaturedOnly: () => void;
  resetFilters: () => void;
}

const storage = createJSONStorage<LandingState>(() => ({
  getItem: (name: string) => localforage.getItem<string>(name),
  setItem: (name: string, value: string) => localforage.setItem(name, value),
  removeItem: (name: string) => localforage.removeItem(name)
}));

const initialState: LandingState = {
  searchTerm: "",
  selectedCategoryId: null,
  featuredOnly: false
};

export const useLandingStore = create<LandingState & LandingActions>()(
  persist(
    (set) => ({
      ...initialState,
      setSearchTerm: (value) => set({ searchTerm: value }),
      setSelectedCategoryId: (value) => set({ selectedCategoryId: value }),
      toggleFeaturedOnly: () => set((state) => ({ featuredOnly: !state.featuredOnly })),
      resetFilters: () => set(initialState)
    }),
    {
      name: "hireo-landing-preferences",
      version: 1,
      storage
    }
  )
);
