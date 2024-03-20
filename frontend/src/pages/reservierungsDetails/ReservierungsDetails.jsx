import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { Link, useParams } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'
import Boot from '../../img/tretboot.jpg'
import './reservierungsDetails.css'

const ReservierungsDetails = () => {
    const params = useParams()

    const {reservierungen, setReservierungen} = useContext(mainContext)

    const reservierung = reservierungen.find((item) => item.boot.name == params.details)

    console.log(reservierung);

    return (
        <>
            <Header/>
            <h2 className='reservierungsDetailsH2'>Reservierungsdetails</h2>
            <section className='reservierungsDetailsSection'>
                <div className='reservierungsDetailsInfoDiv'>
                    <h3 className='reservierungsDetailsH3'>{reservierung.boot.name}</h3>
                    <p className='reservierungsDetailsP'>BootsNr: {reservierung.boot.bootNr}</p>
                    <p className='reservierungsDetailsP'>ReservierungsNr: {reservierung.reservierungsNr}-{reservierung.boot.seriennummer}</p>
                    <p className='reservierungsDetailsP'>Reservierungs-Zeitraum: {reservierung.startDatum} - {reservierung.endDatum}</p>
                    <Link to='/reservierungen'><button className='reservierungsDetailsButton'>Zurück</button></Link>
                </div>
                <div className='reservierungsDetailsDiv'>
                    <img src={Boot} alt="Tretboot-Schwan" className='tretbootImg'/>
                    <h3 className='reservierungsDetailsName'>{reservierung.boot.name}</h3>
                </div>
            </section>
        </>
    )
}

export default ReservierungsDetails