import React from 'react'
import Header from '../../components/header/Header'
import './home.css'

const Home = () => {
    return (
        <>
        <Header/>
        <section className='homeSection'>
            <h1>Bootsverleih Nautilus</h1>
            <article>
                <div className='homeDiv homeDiv1'>
                    <p className='homeP'>Hi</p>
                    <h3 className='homeH3'>Aktuelle Anzahl Reservierungen</h3>
                </div>
                <div className='homeDiv homeDiv2'>
                    <p className='homeP'>Hi</p>
                    <h3 className='homeH3'>Nicht reservierte Tretboote</h3>
                </div>
                <div className='homeDiv homeDiv3'>
                    <p className='homeP'>Hi</p>
                    <h3 className='homeH3'>Gesamtzahl an Tretbooten</h3>
                </div>
            </article>
        </section>
        </>
    )
}

export default Home