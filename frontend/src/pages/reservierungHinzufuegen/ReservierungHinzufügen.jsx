import React, { useContext, useRef } from 'react'
import Header from '../../components/header/Header'
import { mainContext } from '../../context/mainProvider'

const ReservierungHinzufügen = () => {
    const {boote, setBoote, reservierungen, setReservierungen, postReservierungen} = useContext(mainContext)

    const formRef = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(formRef.current)
        await postReservierungen(formData)
        formRef.current.reset()
    }
    return (
        <>
            <Header/>
            <section>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="date" name='startDatum'/>
                    <input type="date" name='endDatum'/>
                    <select name="" id="">
                        {boote.map((boot) => {
                            return(
                                <option name='boot' value={boot._id} key={boot._id}>{boot.name}</option>
                            )
                        })}
                    </select>
                    <button>Erstellen</button>
                </form>
            </section>
        </>
    )
}

export default ReservierungHinzufügen