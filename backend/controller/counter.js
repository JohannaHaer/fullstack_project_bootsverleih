import express from 'express'
import { Boot } from '../model/boot.js';
import { Reservierung } from '../model/reservierung.js'


const router = express.Router()

router.get('/', async (req, res) => {
    // Gesamtanzahl an Booten und Reservierungen
    const anzahlBoote = await Boot.countDocuments()
    const anzahlReservierungen = await Reservierung.countDocuments()

    // Heutiges Datum (jjjj-mm-tt)
    const datum = new Date().toISOString().slice(0, 10)

    // Definition von Variablen außerhalb der Map
    let start = []
    let end = []
    let reservierteBootesID = []

    // Map über die Reservierungen zum Auslesen der Start- und EndDaten sowie der dazugehöhrigen Boots-IDs
    const reservierungen = await Reservierung.find().lean()
    reservierungen.map((reservierung) => {
        const eins = reservierung.startDatum
        const zwei = reservierung.endDatum
        const bootID = reservierung.boot
        start.push(eins)
        end.push(zwei)
        reservierteBootesID.push(bootID)
    })

    // Loop und If-Bedingung zur Prüfung der Überschneidung des heutigen Datums mit den jeweiligen Reservierungen
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

    // Entfernung der Dulikate der heute reservierten Boote
    const uniqueIDArray = Array.from(new Set(reserviertIDs.map(JSON.stringify))).map(JSON.parse)
    
    // Berechnung der Anzahl freier Boote für den heutige Tag
    const freieBooteHeute = anzahlBoote - uniqueIDArray.length
    
    // Übermittlung der Daten fürs Frontend
    const anzahl = [anzahlBoote, anzahlReservierungen, freieBooteHeute]
    res.json(anzahl)
})

export default router