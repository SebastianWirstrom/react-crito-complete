import React, { useState } from 'react'
import img_logoType from '../../assets/images/Logo.svg'
import TopMenuContact from './TopMenu/TopMenuContact'
import SocialMediaBar from '../Generics/SocialMediaBar/SocialMediaBar'
import Button from '../Generics/Button/Button'
import { Link, NavLink } from 'react-router-dom'
import TopMenuMobile from './TopMenu/TopMenuMobile'

function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    

  return (
    <>
        <header>
            <div className="container">
                <Link to='/'><img src={img_logoType} alt="crito logotype" className="crito-logo"/></Link>
                <div className="mobile-menu">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-bars">
                        {mobileMenuOpen ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars-staggered"></i>)}
                    </button>
                    {mobileMenuOpen ? <TopMenuMobile/> : <></>}
                </div>
                <div className="menu">
                    <div className="top-menu">
                        <div className="contact-information">
                            <TopMenuContact text="+46 (8) 121 470 50" icon="fa-regular fa-phone-volume"/>
                            <TopMenuContact text="info@crito.com" icon="fa-regular fa-envelope"/>
                            <TopMenuContact text="Sveavägen 31, 111 34 STOCKHOLM" icon="fa-regular fa-location-dot"/>
                        </div>
                        <SocialMediaBar/>          
                    </div>
                    <div className="main-menu">
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/Services/">Service</NavLink>
                            <NavLink to="/News/">News</NavLink>
                            <NavLink to="/Contacts/">Contact</NavLink>
                        </nav>
                    </div>
                    <div className="login-btn">
                        <Button text="Login" link="/login/" icon="fa-regular fa-arrow-up-right"/>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header