import express from 'express'
import { Boot } from '../model/boot.js';
import { Reservierung } from '../model/reservierung.js';

const router = express.Router()

router.get('/', async (req, res) => {
    const anzahlBoote = await Boot.countDocuments()
    const anzahlReservierungen = await Reservierung.countDocuments()
    console.log(anzahlReservierungen);
    console.log(anzahlBoote);
    const anzahl = [anzahlBoote, anzahlReservierungen]
    res.json(anzahl)
})

export default router