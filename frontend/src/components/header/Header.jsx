import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import Logo from '../../img/logo2.png'

const Header = () => {
    return (
        <header>
            <Link to='/'><img src={Logo} alt="" className='logo'/></Link>
            <nav>
                <NavLink to='/boote'>Boote</NavLink>
                <hr/>
                <NavLink to='/reservierungen'>Reservierungen</NavLink>
                <hr/>
                <NavLink to='/boote/hinzufuegen'>Boot hinzufügen</NavLink>
                <hr/>
                <NavLink to='/reservierungen/hinzufuegen'>Reservierung hinzufügen</NavLink>
            </nav>
        </header>
    )
}

export default Header