import express from 'express'
import { Boot } from '../model/boot.js';
import { Reservierung } from '../model/reservierung.js'


const router = express.Router()

router.get('/', async (req, res) => {
    const anzahlBoote = await Boot.countDocuments()
    const anzahlReservierungen = await Reservierung.countDocuments()
    const datum = new Date().toISOString().slice(0, 10)

    const reservierungen = await Reservierung.find().lean()

    let start = []
    let end = []
    let reservierteBootesID = []
    reservierungen.map((reservierung) => {
        const eins = reservierung.startDatum
        const zwei = reservierung.endDatum
        const bootID = reservierung.boot
        start.push(eins)
        end.push(zwei)
        reservierteBootesID.push(bootID)
    })

    console.log(start);
    console.log(end);
    let reserviertIDs = []

    for(let i= 0; i < start.length; i++) {
        if(datum >= start[i] && datum <= end[i]) {
            const reserviert = reservierteBootesID[i]
            reserviertIDs.push(reserviert)
            console.log('reserviert');
        } else {
            console.log('frei');
        }
    }

    const uniqueIDArray = Array.from(new Set(reserviertIDs.map(JSON.stringify))).map(JSON.parse)
    
    const freieBooteHeute = anzahlBoote - uniqueIDArray.length
    

    const anzahl = [anzahlBoote, anzahlReservierungen, freieBooteHeute]
    res.json(anzahl)
})

export default router