import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLoginStore } from '../../Pages/Login/useLoginStore'


const Header = () => {
  const { loggedIn, setLogOut } = useLoginStore()

  const navigate = useNavigate()

  const handleLogOut = () => {
    navigate("/login")
    setLogOut(); 
  }

  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/">Forside</NavLink></li>
        <li><NavLink to="/about">Om os</NavLink></li>
        <li><NavLink to="/products">Produkter</NavLink></li>
      { loggedIn ? 
  <li><NavLink to="/login" onClick={handleLogOut}>LogOut</NavLink></li> : 
  <li><NavLink to="/login">Login</NavLink></li>
    }
      </ul>
    </nav>
    </>
  )
}

export default Header