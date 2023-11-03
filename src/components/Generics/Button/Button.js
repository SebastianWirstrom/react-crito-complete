import React from 'react'
import { Link } from 'react-router-dom'

function Button({type, link, text, icon}) {

    const buttonColor = () => {
        switch(type) {
            case 'black':
                return 'btn-black'
            case 'transparent':
                return 'btn-transparent'
            case 'white':
                return 'btn-white'
            default :
                return 'btn-yellow'
        }
    }


  return (
    <>
        <Link to={link} className={(buttonColor())}>{text}<i className={icon}></i></Link>
    </>
  )
}

export default Button