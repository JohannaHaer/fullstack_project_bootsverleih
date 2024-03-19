import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [boote, setBoote] = useState([])
    const [reservierungen, setReservierungen] = useState([])
    const [counter, setCounter] = useState([])

    useEffect(() => {
        fetch('http://localhost:3010/boote').then((response) => response.json()).then((json) => {
            setBoote(json)
        })
    }, [])

    const postBoote = (newPostBoote) => fetch('http://localhost:3010/boote', {method: 'POST', body: newPostBoote}).then((response) => response.json())
    
     // ! Fetch zum Auslesen der Datenbank über die vorliegenden Reservierungen
    useEffect(() => {
        fetch('http://localhost:3010/reservierungen').then((response) => response.json()).then((json) => {
            setReservierungen(json)
        })
    }, [])

    // ! Fetch zum Auslesen der hinzugefügten Reservierungen
    const postReservierungen = (newPostReservierungen) => fetch('http://localhost:3010/reservierungen', {method: 'POST', body: newPostReservierungen}).then((response) => response.json())

    // ! Fetch zum Auslesen der Anzahl an Reservierungen (total) und Boote (total)
    useEffect(() => {
        fetch('http://localhost:3010/').then((response) => response.json()).then((json) => {
            setCounter(json)
        })
    }, [])
    
    return (
        <mainContext.Provider value={{boote, setBoote, postBoote, reservierungen, setReservierungen, postReservierungen, counter, setCounter}}>
            {children}
        </mainContext.Provider>
    )
}

export default MainProvider