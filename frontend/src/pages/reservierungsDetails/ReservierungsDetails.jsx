import React, { useContext, useRef } from 'react'
import Header from '../../components/header/Header'
import { Link, useParams } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'
import Boot from '../../img/tretboot.jpg'
import './reservierungsDetails.css'

const ReservierungsDetails = () => {
    const params = useParams()
    const formRef = useRef()
    console.log(formRef);
    const {boote, reservierungen, deleteReservierung, reloadReservierung, aenderungReservierung} = useContext(mainContext)

    const reservierung = reservierungen.find((item) => item._id == params.id)

    const handleDelete = async () => {
        await deleteReservierung(params.id)
        await reloadReservierung()
        navigate('/reservierungen')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log(formData);
        console.log([...formData.entries()])
        await aenderungReservierung(params.id, formData)
        await reloadReservierung()
        formRef.current.reset()
    }

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
            <button onClick={handleDelete}>Reservierung entfernen</button>
            <section>
                <form ref={formRef} onSubmit={handleSubmit} className='reservierungHinzufuegenForm'>
                    <input type="date" name='startDatum' className='reservierungHinzufuegenInput'/>
                    <input type="date" name='endDatum' className='reservierungHinzufuegenInput'/>
                    <select name="boot" className='reservierungHinzufuegenSelection'>
                        {boote.map((boot) => {
                            return(
                                <option value={boot._id} key={boot._id}>{boot.name}</option>
                            )
                        })}
                    </select>
                    <button className='formButton'>Reservierung ändern</button>
                </form>
            </section>
        </>
    )
}

export default ReservierungsDetails