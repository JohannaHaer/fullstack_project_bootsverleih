import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { mainContext } from '../../context/mainProvider'

const Bootsuebersicht = () => {
    const {boote, setBoote} = useContext(mainContext)

    return (
        <>
            <Header/>
            <section>
                {boote.map((boot) => {
                    return(
                        <div key={boot._id}>
                            <p>{boot.name}; {boot.baujahr}</p>
                        </div>
                    )
                })
                }
            </section>
        </>
    )
}

export default Bootsuebersicht