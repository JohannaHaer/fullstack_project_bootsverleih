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

    const postBoote = (newPostBoote) => fetch('http://localhost:3010/boote', {method: 'POST', body: newPostBoote}).then((response) => response.json())
    

    return (
        <mainContext.Provider value={{boote, setBoote, postBoote}}>
            {children}
        </mainContext.Provider>
    )
}

export default MainProvider