import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [boote, setBoote] = useState([])
    const [reservierungen, setReservierungen] = useState([])

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

    return (
        <mainContext.Provider value={{boote, setBoote, postBoote, reservierungen, setReservierungen, postReservierungen}}>
            {children}
        </mainContext.Provider>
    )
}

export default MainProvider