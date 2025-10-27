import { Delete } from 'lucide-react'
import { createEvent, deleteEvent, getallEvent, getByIdEvent, updateEvent } from '../Controllers/eventsController.js'
import express from 'express'

const router = express.Router()

router.get('/getall', getallEvent)
router.get('/getById/:id', getByIdEvent)
router.post('/create', createEvent)
router.put('/update/:id', updateEvent)
router.delete('/delete/:id', deleteEvent)


export default router