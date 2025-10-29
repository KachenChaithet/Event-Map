import axios from "axios";

const VITE_BACKENDAPI_URL = import.meta.env.VITE_BACKENDAPI_URL


const client = axios.create({
    baseURL: VITE_BACKENDAPI_URL
})

export const api = {
    async getall(path) {
        const { data } = await client.get(path)
        return data
    },

    async create(path, payload) {
        const { data } = await client.post(path, payload)
        return data
    },

    async delete(path, id) {
        const { data } = await client.delete(`${path}/${id}`)
        return data
    },
    async getById(path, id) {
        const { data } = await client.get(`${path}/${id}`)
        return data
    },
    async update(path, payload, id) {
        const { data } = await client.put(`${path}/${id}`, payload)
        return data
    }

}

