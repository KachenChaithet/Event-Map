import { create } from "zustand";

export const EventStore = (set, get) => ({
    adding: false,
    pending: null,


    toggleAdding: () => set(prev => ({ adding: !prev.adding })),
    setPending: (value) => set({ pending: value })
})




export const useEventStore = create(EventStore)