import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import bootRouter from './controller/boote.js'
import reservierungRouter from './controller/reservierungen.js'

await mongoose.connect(process.env.MONGODB_URI)

const PORT = 3010
const app = express()

app.use(cors({origin: 'http://localhost:5173'}))
app.use('/boote', bootRouter)
// app.use('/reservierungen', reservierungRouter)

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})