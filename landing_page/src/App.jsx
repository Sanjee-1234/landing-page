import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/Destination/About'
import Contact from './Pages/Contact/Contact'
import Navbar from './components/Navbar'
function App(){
  return(
    <div className='app'>
      <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </div>
  )
}


export default App
