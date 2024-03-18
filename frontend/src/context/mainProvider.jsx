import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [boote, setBoote] = useState([])


    useEffect(() => {
        fetch('http://localhost:3010/boote').then((response) => response.json()).then((json) => {
            setBoote(json)
        })
    }, [])

    console.log(boote);

    return (
        <mainContext.Provider value={{boote, setBoote}}>
            {children}
        </mainContext.Provider>
    )
}

export default MainProvider