import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import event from './Routers/eventsRouter.js'
dotenv.config()

const port = process.env.PORT || 5000
const app = express()
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

app.use('/event', event)


app.listen(port, () => {
    console.log('🚀server runing on port:', port);

})