import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import './home.css'
import { mainContext } from '../../context/mainProvider'

const Home = () => {
    const {counter} = useContext(mainContext)

    return (
        <>
        <Header/>
        <section className='homeSection'>
            <h1>Bootsverleih Nautilus</h1>
            <article>
                <div className='homeDiv homeDiv1'>
                    <p className='homeP'>{counter[1]}</p>
                    <h3 className='homeH3'>Aktuelle Anzahl Reservierungen</h3>
                </div>
                <div className='homeDiv homeDiv2'>
                    <p className='homeP'>{counter[2]}</p>
                    <h3 className='homeH3'>Heute nicht reservierte Tretboote</h3>
                </div>
                <div className='homeDiv homeDiv3'>
                    <p className='homeP'>{counter[0]}</p>
                    <h3 className='homeH3'>Gesamtzahl an Tretbooten</h3>
                </div>
            </article>
        </section>
        </>
    )
}

export default Home