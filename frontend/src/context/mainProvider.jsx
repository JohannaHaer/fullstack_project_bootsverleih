import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [boote, setBoote] = useState([])
    const [reservierungen, setReservierungen] = useState([])
    const [counter, setCounter] = useState([])

    // ! Fetch zum Auslesen der Datenbank über die vorliegenden Boote
    const reloadBoote = ()=> {
        return fetch('http://localhost:3000/boote').then((response) => response.json()).then((json) => {
            setBoote(json)
        })}
    
    useEffect(() => {
        reloadBoote()
    }, [])

    // ! Fetch zum Hinzufügen von Booten
    const postBoote = (newPostBoote) => fetch('http://localhost:3000/boote', {method: 'POST', body: newPostBoote}).then((response) => response.json())
    
    // ! Löschen eines angelegten Bootes
    const deleteBoote = (deleteBoot) => fetch(`http://localhost:3000/boote/${deleteBoot}`, {
        method: 'DELETE'
    })

     // ! Fetch zum Auslesen der Datenbank über die vorliegenden Reservierungen
    const reloadReservierung = ()=> {
        return fetch('http://localhost:3000/reservierungen').then((response) => response.json()).then((json) => {
            setReservierungen(json)
        })}
    
    useEffect(() => {
        reloadReservierung()
    }, [])

    // ! Fetch zum Auslesen der hinzugefügten Reservierungen
    const postReservierungen = (neueReservierungen) => fetch('http://localhost:3000/reservierungen', {method: 'POST', body: neueReservierungen}).then((response) => response.json())

    // ! Fetch zum Auslesen der Anzahl an Reservierungen (total) und Boote (total)
    useEffect(() => {
        fetch('http://localhost:3000/').then((response) => response.json()).then((json) => {
            setCounter(json)
        })
    }, [])

    // ! Löschen einer angelegten Reservierung
    const deleteReservierung = (id) => fetch(`http://localhost:3000/reservierungen/${id}`, {
        method: 'DELETE'
    })

    // ! Angelegte Reservierungen ändern
    const aenderungReservierung = (id, aenderungReservierung) => fetch(`http://localhost:3000/reservierungen/${id}`, {
        method: 'PATCH',
        body: aenderungReservierung
    })
    
    return (
        <mainContext.Provider value={{boote, reloadBoote, postBoote, reservierungen, postReservierungen, counter, deleteBoote, reloadReservierung, deleteReservierung, aenderungReservierung}}>
            {children}
        </mainContext.Provider>
    )
}

export default MainProvider