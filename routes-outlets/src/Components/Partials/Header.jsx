import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/">Forside</NavLink></li>
        <li><NavLink to="/about">Om os</NavLink></li>
        <li><NavLink to="/products">Produkter</NavLink></li>
      </ul>
    </nav>
    </>
  )
}

export default Header