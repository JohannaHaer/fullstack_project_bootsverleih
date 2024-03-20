import express from 'express'
import multer from 'multer'
import { Reservierung } from '../model/reservierung.js'
import { Boot } from '../model/boot.js'

const router = express.Router()
const mult = multer()

router.get('/', async (req, res) => {
    const reservierungen = await Reservierung.find().lean().populate('boot')
    res.json(reservierungen)
})

router.post('/', mult.none(), async (req, res) => {
    // Übergabe der Daten aus dem Request
    const reservierungInputData = req.body
    // Erstellung einer random Reswervierungsnummer
    const reservierungsNr = Math.floor(Math.random() * 99999)
    // Zusammenführung der Daten und sichern in der Datenbank
    const reservierungGesamt = {...reservierungInputData, reservierungsNr}
    const newReservierung = new Reservierung(reservierungGesamt)
    const saveResult = await newReservierung.save()
    res.status(201).json(saveResult)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const deleteReservierung = await Reservierung.deleteOne({_id: id})
    res.status(204).send(deleteReservierung)
})

export default router