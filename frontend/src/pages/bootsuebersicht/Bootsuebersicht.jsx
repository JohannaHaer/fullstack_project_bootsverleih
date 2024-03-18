import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'
import './bootsuebersicht.css'

const Bootsuebersicht = () => {
    const {boote, setBoote} = useContext(mainContext)

    return (
        <>
            <Header/>
            <section className='bootsuebersichtSection'>
                {boote.map((boot) => {
                    return(
                        <Link to='/boote/details' key={boot._id}>
                            <p className='bootsuebersichtP'>BootsNr: {boot.bootNr}</p>
                            <h3 className='bootsuebersichtH3'>{boot.name} - {boot.baujahr}</h3>
                        </Link>
                    )
                })
                }
            </section>
        </>
    )
}

export default Bootsuebersicht