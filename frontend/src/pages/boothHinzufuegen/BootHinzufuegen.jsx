import React, { useContext, useRef } from 'react'
import Header from '../../components/header/Header'
import { mainContext } from '../../context/mainProvider'
import './bootHinzufuegen.css'

const BootHinzufuegen = () => {
    const {postBoote, reloadBoote} = useContext(mainContext)

    const formRef = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(formRef.current)
        await postBoote(formData)
        await reloadBoote()
        formRef.current.reset()
    }

    return (
        <>
            <Header/>
            <section className='bootHinzufuegenSection'>
                <form ref={formRef} onSubmit={handleSubmit} className='bootHinzufuegenForm'>
                    <input type="text" name='name' placeholder='Name des Bootes'/>
                    <input type="text" name='seriennummer' placeholder='Seriennummer'/>
                    <input type="number" name='baujahr' placeholder='Baujahr'/>
                    <button className='formButton'>Erstellen</button>
                </form>
            </section>
        </>
    )
}

export default BootHinzufuegen