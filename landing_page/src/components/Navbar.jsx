import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='S'>
          <button className='s'><NavLink to="./home"><h3>Home</h3></NavLink></button>
           <button className='a'><NavLink to="./about"><h3>About</h3></NavLink></button>
           <button className='n'><NavLink to="./contact"><h3>Contact</h3></NavLink></button>
       
    </nav>
  )
}

export default Navbar