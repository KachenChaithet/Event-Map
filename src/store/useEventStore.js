import { api } from "@/lib/api";
import { AppleIcon } from "lucide-react";
import { create } from "zustand";

export const EventStore = (set, get) => ({
    adding: false,
    pending: null,
    event: [],
    mapTarget: null,


    toggleAdding: () => set(prev => ({ adding: !prev.adding })),
    setPending: (value) => set({ pending: value }),
    setMapTarget: (value) => set({ mapTarget: value }),

    fetchEvent: async () => {
        try {
            const event = await api.getall('/event/getall')
            set({
                event: event
            })
        } catch (error) {
            console.log(error);
        }
    },

    addEvent: async (payload) => {
        try {
            const event = await api.create('/event/create', payload)
            await get().fetchEvent()
            return event
        } catch (error) {
            console.log(error);

        }
    },

    removeEvent: async (id) => {
        try {
            const event = await api.delete('/event/delete', id)
            await get().fetchEvent()
            return event
        } catch (error) {
            console.log(error);

        }
    }
})




export const useEventStore = create(EventStore)