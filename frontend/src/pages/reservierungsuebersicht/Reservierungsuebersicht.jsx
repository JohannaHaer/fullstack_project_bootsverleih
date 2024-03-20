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
            <section className='reservierungsuebersichtSection'>
            <div className='reservierungsuebersichtDiv'>
                {reservierungen.map((reservierung) => {
                    return(
                        <Link to={`/reservierungen/${reservierung.boot.name}`} key={reservierung._id} className='reservierungsuebersichtA'>
                            <div>
                                <p className='reservierungsuebersichtP'>BootsNr: {reservierung.boot.bootNr}</p>
                                <h3 className='reservierungsuebersichtH3'>{reservierung.boot.name}</h3>
                            </div>
                            <p className='reservierungsuebersichtPRes'>Reservierungs-Zeitraum: {reservierung.startDatum} - {reservierung.endDatum}</p>
                        </Link>
                    )
                })}
            </div>
            </section>
        </>
        )
}

export default Reservierungsuebersicht