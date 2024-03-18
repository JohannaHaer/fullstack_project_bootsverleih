import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Link to='/'><img src="" alt="" /></Link>
            <nav>
                <Link to='/boote'>Boote</Link>
                <Link to='/reservierungen'>Reservierungen</Link>
                <Link to='/boote/hinzufuegen'>Boot hinzufügen</Link>
                <Link to='/reservierungen/hinzufuegen'>Reservierung hinzufügen</Link>
            </nav>
        </>
    )
}

export default Header