import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

interface personState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeAPI: StateCreator<personState & Actions> = (set) => ({
  firstName: "",
  lastName: "",
  setFirstName: (value: string) => set((state) => ({ firstName: value })),
  setLastName: (value: string) => set((state) => ({ lastName: value })),
});

export const usePersonStore = create<personState & Actions>()(
  persist(storeAPI, { name: "person-storage" })
);
