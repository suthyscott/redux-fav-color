import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header id='main-header'>
      <NavLink to='/home'>Home</NavLink>
      <h1>Header</h1>
      <NavLink to='/profile'>Profile</NavLink>
    </header>
  )
}

export default Header