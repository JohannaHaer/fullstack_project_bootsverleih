import express from 'express'
import multer from 'multer'
import { Reservierung } from '../model/reservierung.js'

const router = express.Router()
const mult = multer()

router.get('/', async (req, res) => {
    const reservierungen = await Reservierung.find().lean().populate('boot')
    res.json(reservierungen)
})

router.post('/', mult.none(), async (req, res) => {
    const reservierungInputData = req.body
    const test = req.body.boot
    console.log(test);
    const newReservierung = new Reservierung(reservierungInputData)
    const saveResult = await newReservierung.save()
    res.status(201).json(saveResult)
})

export default router