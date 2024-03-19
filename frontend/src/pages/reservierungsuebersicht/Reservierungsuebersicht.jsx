import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'
import './reservierungsuebersicht.css'

const Reservierungsuebersicht = () => {
    const {reservierungen, setReservierungen} = useContext(mainContext)

    return (
        <>
            <Header/>
            <section>
            {reservierungen.map((reservierung) => {
                return(
                    <Link to={`/reservierungen/${reservierung.boot.name}`} key={reservierung._id}>
                        <h3>{reservierung.boot.name}</h3>
                        <p>BootsNr: {reservierung.boot.bootNr}</p>
                        <p>Reservierungs-Zeitraum: {reservierung.startDatum} - {reservierung.endDatum}</p>
                    </Link>
                )
            })}
            </section>
        </>
        )
}

export default Reservierungsuebersicht