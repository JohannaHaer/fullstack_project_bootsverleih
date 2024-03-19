
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Bootsuebersicht from './pages/bootsuebersicht/Bootsuebersicht'
import Reservierungsuebersicht from './pages/reservierungsuebersicht/Reservierungsuebersicht'
import BootDetails from './pages/bootDetails/BootDetails'
import ReservierungsDetails from './pages/reservierungsDetails/ReservierungsDetails'
import BootHinzufuegen from './pages/boothHinzufuegen/BootHinzufuegen'
import ReservierungHinzufügen from './pages/reservierungHinzufuegen/ReservierungHinzufügen'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/boote' element={<Bootsuebersicht/>}/>
        <Route path='/reservierungen' element={<Reservierungsuebersicht/>}/>
        <Route path='/boote/:details' element={<BootDetails/>}/>
        <Route path='/reservierungen/:details' element={<ReservierungsDetails/>}/>
        <Route path='/boote/hinzufuegen' element={<BootHinzufuegen/>}/>
        <Route path='/reservierungen/hinzufuegen' element={<ReservierungHinzufügen/>}/>
      </Routes>
    </>
  )
}

export default App
