import React, { useContext, useRef } from 'react'
import Header from '../../components/header/Header'
import { mainContext } from '../../context/mainProvider'

const BootHinzufuegen = () => {
    const {boote, setBoote} = useContext(mainContext)

    const formRef = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(formRef.current)
        await setBoote(formData)
        formRef.current.reset()
    }

    return (
        <>
            <Header/>
            <section>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Name des Bootes'/>
                    <input type="text" name='seriennummer' placeholder='Seriennummer'/>
                    <input type="number" name='baujahr' placeholder='Baujahr'/>
                    <button>Erstellen</button>
                </form>
            </section>
        </>
    )
}

export default BootHinzufuegen