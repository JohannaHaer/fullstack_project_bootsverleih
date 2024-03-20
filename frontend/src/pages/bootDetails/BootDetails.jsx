import React, { useContext }  from 'react'
import Header from '../../components/header/Header'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'
import Boot from '../../img/tretboot.jpg'
import './bootDetails.css'

const BootDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {boote, setBoote, deleteBoote, reloadBoote} = useContext(mainContext)

    const boot = boote.find((item) => item.name == params.details)
    
    const handleDelete = async () => {
        await deleteBoote(params.details)
        await reloadBoote()
        navigate('/boote')
    }

    return (
        <>
            <Header/>
            <h2 className='bootDetailsH2'>Bootdetails</h2>
            <section className='bootDetailsSection'>
                            <div className='bootDetailsInfoDiv'>
                                <h3 className='bootsDetailsH3'>{boot.name}</h3>
                                <p className='bootsDetailsP'>BootsNr: {boot.bootNr}</p>
                                <p className='bootsDetailsP'>Baujahr: {boot.baujahr}</p>
                                <p className='bootsDetailsP'>SerienNr: {boot.seriennummer}</p>
                                <Link to='/boote'><button className='bootDetailsButton'>Zurück</button></Link>
                            </div>
                            <div className='bootDetailsDiv'>
                                <img src={Boot} alt="Tretboot-Schwan" className='tretbootImg' />
                                <h3 className='bootDetailsName'>{boot.name}</h3>
                            </div>
            </section>
            <button onClick={handleDelete}>Boot entfernen</button>
        </>
    )
}

export default BootDetails