import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'

const Reservierungsuebersicht = () => {
    const {reservierungen, setReservierungen} = useContext(mainContext)

    return (
        <>
            <Header/>
            <section>
            {reservierungen.map((reservierung) => {
                return(
                    <Link to='/reservierungen/details' key={reservierung._id}>
                        <p>{reservierung.startDatum}</p>
                    </Link>
                )
            })}
            </section>
        </>
        )
}

export default Reservierungsuebersicht