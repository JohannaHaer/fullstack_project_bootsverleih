import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'
import './bootsuebersicht.css'
import Tretboot from '../../img/tretboote_bild.jpg'

const Bootsuebersicht = () => {
    const {boote, setBoote} = useContext(mainContext)

    return (
        <>
            <Header/>
            <section className='bootsuebersichtSection'>
                <div className='bootsuebersichtDiv'>
                    {boote.map((boot) => {
                        return(
                            <Link to={`/boote/${boot.name}`} key={boot._id}>
                                <p className='bootsuebersichtP'>BootsNr: {boot.bootNr}</p>
                                <h3 className='bootsuebersichtH3'>{boot.name} - {boot.baujahr}</h3>
                            </Link>
                        )
                    })}
                </div>
                <img src={Tretboot} alt="mehrere Schwanentretboote" className='bootsuebersichtImg'/>
            </section>
        </>
    )
}

export default Bootsuebersicht