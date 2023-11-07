import React from 'react'
import { NavLink } from 'react-router-dom'

const TopMenuMobile = () => {
  return (
    <>
    <div className="top-menu-mobile">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/services" className="link">Services</NavLink>
        <NavLink to="/news" className="link">News</NavLink>
        <NavLink to="/contacts" className="link">Contacts</NavLink>
    </div>
    </>
    
  )
}

export default TopMenuMobile