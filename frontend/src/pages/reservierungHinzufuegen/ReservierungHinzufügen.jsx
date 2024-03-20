import React, { useContext, useRef } from 'react'
import Header from '../../components/header/Header'
import { mainContext } from '../../context/mainProvider'
import './reservierungHinzufuegen.css'

const ReservierungHinzufügen = () => {
    const {boote, setBoote, reservierungen, setReservierungen, postReservierungen, reloadReservierung} = useContext(mainContext)

    const formRef = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(formRef.current)
        await postReservierungen(formData)
        await reloadReservierung()
        formRef.current.reset()
    }
    
    return (
        <>
            <Header/>
            <section className='reservierungHinzufuegenSection'>
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
                    <button className='formButton'>Erstellen</button>
                </form>
            </section>

        </>
    )
}

export default ReservierungHinzufügen