import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'
import Boot from '../../img/tretboot.jpg'

const ReservierungsDetails = () => {
    const params = useParams()

    const {reservierungen, setReservierungen} = useContext(mainContext)

    const reservierung = reservierungen.find((item) => item.boot.name == params.details)

    console.log(reservierung);

    return (
        <>
            <Header/>
            <div>
                <div>
                    <img src={Boot} alt="Tretboot-Schwan" />
                    <div><h3 className='bootsuebersichtH3'>{reservierung.boot.name}</h3></div>
                </div>
                <h3 className='bootsuebersichtH3'>{reservierung.boot.name}</h3>
                <p className='bootsuebersichtP'>BootsNr: {reservierung.boot.bootNr}</p>
                <p className='bootsuebersichtP'>ReservierungsNr: {reservierung.reservierungsNr}-{reservierung.boot.seriennummer}</p>
                <p className='bootsuebersichtP'>Reservierungs-Zeitraum: {reservierung.startDatum} - {reservierung.endDatum}</p>
            </div>
        </>
    )
}

export default ReservierungsDetails