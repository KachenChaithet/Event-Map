import { PrismaClient } from "../src/generated/index.js"
const prisma = new PrismaClient()

export const getallEvent = async (req, res) => {
    try {
        const event = await prisma.event.findMany()

        res.json({ messge: 'sucess', event })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to create event" })
    }
}

export const createEvent = async (req, res) => {
    try {
        const {
            building,
            activityDetail,
            locationDetail,
            time,
            date,
            category,
            location // { lat, lng }
        } = req.body

        // ตรวจสอบข้อมูลเบื้องต้น
        if (!building || !activityDetail || !locationDetail || !time || !date || !category || !location) {
            return res.status(400).json({ error: "Missing required fields" })
        }

        const newEvent = await prisma.event.create({
            data: {
                building,
                activityDetail,
                locationDetail,
                time,
                date: new Date(date), // แปลงเป็น Date object
                category,
                location
            }
        })

        res.status(201).json({ message: 'create success', newEvent })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to create event" })
    }
}
export const updateEvent = async (req, res) => {
    const { id } = req.params

    const {
        building,
        activityDetail,
        locationDetail,
        time,
        date,
        category,
        location // { lat, lng }
    } = req.body
    try {



        const updateEvent = await prisma.event.update({
            where: { id: parseInt(id) },
            data: {
                building,
                activityDetail,
                locationDetail,
                time,
                date: new Date(date), // แปลงเป็น Date object
                category,
                location
            }
        })

        res.status(201).json(updateEvent)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to create event" })
    }
}

export const getByIdEvent = async (req, res) => {
    const { id } = req.params
    try {
        const event = await prisma.event.findUnique({
            where: { id: parseInt(id) }
        })

        res.json({ messge: 'sucess', event })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to create event" })
    }
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params
    try {
        const find = await prisma.event.findUnique({
            where: { id: parseInt(id) }
        })

        if (!find) {
            res.status(400).json({ error: "not found" })

        }

        const remove = await prisma.event.delete({
            where: { id: parseInt(id) }
        })



        res.json({ message: 'delete sucess', remove })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to create event" })
    }
}