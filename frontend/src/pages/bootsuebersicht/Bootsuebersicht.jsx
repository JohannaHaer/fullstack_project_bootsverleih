import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'

const Bootsuebersicht = () => {
    const {boote, setBoote} = useContext(mainContext)

    return (
        <>
            <Header/>
            <section>
                {boote.map((boot) => {
                    return(
                        <Link to='/boote/details' key={boot._id}>
                            <p>{boot.name}; {boot.baujahr}</p>
                        </Link>
                    )
                })
                }
            </section>
        </>
    )
}

export default Bootsuebersicht